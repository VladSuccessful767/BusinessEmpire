"use strict";
// ============================================================
// 🏭 БИЗНЕС ИМПЕРИЯ v0.5.0
// [01] Настройки | [02] Состояние | [03] Ресурсы
// [04] Здания
// [07] Экономика | [08] Строительство | [09] Улучшения
// [10] Игровой цикл | [11] Отрисовка | [12] Управление
// [13] Сохранение | [14] UI | [15] Заказы
// [16] Монетизация-заготовка | [17] VK-заготовка | [18] Аналитика
// ============================================================

const ORDER_TEMPLATES=[{id:"small",title:"Пробная партия",description:"Клиенту нужны обычные доски для ремонта.",boards:5,reward:220,xp:12},{id:"house",title:"Материалы для дома",description:"Строительная бригада ждёт поставку.",boards:12,reward:620,xp:25},{id:"furniture",title:"Заказ мебельщика",description:"Мебельная мастерская предлагает контракт.",boards:25,reward:1450,xp:50},{id:"urgent",title:"Срочный заказ",description:"Очень короткий срок, зато высокая оплата.",boards:40,reward:2550,xp:80}];

// [01] Настройки
const GAME_VERSION="0.7.0", SAVE_KEY="business_empire_save_v3";
const CONFIG={startMoney:1000,woodTripBase:4,truckCapacity:150,boardPrice:35,productionSeconds:4,truckSpeed:90,maxDelta:.05};

// [02] Состояние
const DEFAULT_STATE={money:1000,level:1,experience:0,day:1,resources:{wood:0,boards:0},buildings:[],trucks:[],orders:[],stats:{woodCollected:0,boardsSold:0,ordersCompleted:0},nextId:1,lastSave:0};
let state=loadGame();
let canvas,ctx,view={w:0,h:0,dpr:1},lastTime=performance.now(),lastUi=0,toastTimer=0,lastClick=0;
let particles=[],selectedId=null,buildMode=null,gameStarted=false;
let canvasClick;

// [03] Ресурсы
function woodPerTrip(){const f=getBuilding("forest");return CONFIG.woodTripBase+(f?Math.max(0,f.level-1)*2:0)}
function boardRatePerMin(){const w=getBuilding("workshop");return w?Math.round(60/CONFIG.productionSeconds*(1+(w.level-1)*.25)):0}
function woodRatePerMin(){const f=getBuilding("forest"),t=getBuilding("forest")?Math.max(1,state.trucks.length):0;return t?Math.round(woodPerTrip()*60/Math.max(tripSeconds(),1)):0}
function tripSeconds(){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return 999;const distance=Math.hypot(w.x-f.x,w.y-f.y);return Math.max(3,distance/CONFIG.truckSpeed*2)}

// [04] Здания
const BUILDING_TYPES={
 forest:{name:"Лес",icon:"🌲",w:175,h:145,baseColor:"#315f3c",description:"Источник древесины. Чем выше уровень леса, тем больше сырья привозит каждый рейс."},
 warehouse:{name:"Склад",icon:"📦",w:185,h:130,baseColor:"#43586a",description:"Принимает древесину и хранит материалы."},
 workshop:{name:"Мастерская",icon:"🏭",w:205,h:145,baseColor:"#755238",description:"Перерабатывает 2 дерева в 1 доску."},
 sales:{name:"Пункт продаж",icon:"💰",w:180,h:125,baseColor:"#445d93",description:"Продаёт доски за деньги. Заказы обычно выгоднее обычной продажи."}
};
const BUILD_COSTS={workshop:500,warehouse:300,sales:400};
function createBuilding(type,x,y,level=1){return{id:state.nextId++,type,x,y,level,progress:0}};
function getBuilding(type){return state.buildings.find(b=>b.type===type)}
function getBuildingById(id){return state.buildings.find(b=>b.id===id)}

// [05] Производство
function workshopProduction(dt){const b=getBuilding("workshop");if(!b)return;const speed=1+(b.level-1)*.25;if(state.resources.wood>=2){b.progress+=dt*speed;if(b.progress>=CONFIG.productionSeconds){b.progress-=CONFIG.productionSeconds;state.resources.wood-=2;state.resources.boards++;gainXP(3);spawnSparks(b.x,b.y-45,3)}}else b.progress=Math.max(0,b.progress-dt*.25)}
function automaticSales(dt){
 const b=getBuilding("sales");
 if(!b||!b.autoSell||state.resources.boards<=0)return;
 b.progress+=dt*(.5+b.level*.1);
 if(b.progress>=1){b.progress=0;state.resources.boards--;const price=Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15));state.money+=price;state.stats.boardsSold++;gainXP(2)}
}
function sellBoards(amount){
 const b=getBuilding("sales");
 amount=Math.max(0,Math.floor(amount||0));
 if(!b||amount<1||state.resources.boards<amount){showToast("❌ Нет готовых досок");return false}
 const price=Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15));
 state.resources.boards-=amount;state.money+=price*amount;state.stats.boardsSold+=amount;gainXP(2*amount);
 saveGame();updateUI();openBuildingPanel(b);showToast("💰 Продано "+amount+" досок • +"+(price*amount)+" ₽");return true;
}

// [06] Транспорт
function createTruck(){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return null;const tr={id:state.nextId++,from:f.id,to:w.id,progress:0,carrying:0,state:"toForest",speed:CONFIG.truckSpeed};state.trucks.push(tr);return tr}
function updateTrucks(dt){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return;if(state.trucks.length===0)createTruck();for(const tr of state.trucks){const from=tr.state==="toForest"?w:f,to=tr.state==="toForest"?f:w;const distance=Math.hypot(to.x-from.x,to.y-from.y);tr.progress+=dt*tr.speed/Math.max(distance,1);if(tr.progress>=1){tr.progress=0;if(tr.state==="toForest"){tr.state="toWarehouse";tr.carrying=Math.min(woodPerTrip(),CONFIG.truckCapacity);state.stats.woodCollected+=tr.carrying;showToast("🚚 Грузовик загрузился: +"+tr.carrying+" дерева");spawnSparks(f.x,f.y-30,7)}else{tr.state="toForest";state.resources.wood+=tr.carrying;tr.carrying=0;showToast("📦 Дерево доставлено на склад")}}}}

// [07] Экономика
function gainXP(amount){state.experience+=amount;const need=100+(state.level-1)*50;if(state.experience>=need){state.experience-=need;state.level++;showToast("⭐ Репутация выросла до "+state.level)}}
function canAfford(amount){return state.money>=amount}

// [08] Строительство
function isInsideLand(x,y,w,h){const p=25;return x-w/2>=p&&y-h/2>=20&&x+w/2<=view.w-p&&y+h/2<=view.h-25}
function hasBuildingAt(x,y,w,h){return state.buildings.some(b=>{const t=BUILDING_TYPES[b.type];return Math.abs(x-b.x)<(w+t.w)/2+12&&Math.abs(y-b.y)<(h+t.h)/2+12})}
function build(type,x,y){const t=BUILDING_TYPES[type],cost=BUILD_COSTS[type];if(!t||!cost)return false;if(!canAfford(cost)){showToast("❌ Недостаточно денег");return false}if(!isInsideLand(x,y,t.w,t.h)||hasBuildingAt(x,y,t.w,t.h)){showToast("❌ Здесь нельзя строить");return false}state.money-=cost;const b=createBuilding(type,x,y);state.buildings.push(b);selectedId=b.id;gainXP(10);saveGame();showToast("🏗️ Построено: "+t.name);openBuildingPanel(b);return true}

// [09] Улучшения
function upgradeCost(b){if(b.type==="forest")return Math.round(900*Math.pow(1.75,b.level-1));return Math.round((BUILD_COSTS[b.type]||400)*Math.pow(1.65,b.level))}
function upgradeBuilding(id){const b=getBuildingById(id);if(!b)return;const cost=upgradeCost(b);if(!canAfford(cost)){showToast("❌ Нужно ещё "+(cost-state.money)+" ₽");return}state.money-=cost;b.level++;if(b.type==="forest")showToast("🌲 Лес улучшен до уровня "+b.level+" • +"+woodPerTrip()+" дерева/рейс");else showToast("⬆️ "+BUILDING_TYPES[b.type].name+" улучшена до уровня "+b.level);saveGame();openBuildingPanel(b)}

// [10] Игровой цикл
function update(dt){updateTrucks(dt);workshopProduction(dt);automaticSales(dt);updateParticles(dt);if(performance.now()-lastUi>250){updateUI();lastUi=performance.now()}if(performance.now()-state.lastSave>5000){saveGame();state.lastSave=performance.now()}}
function gameLoop(now){const dt=Math.min((now-lastTime)/1000,CONFIG.maxDelta);lastTime=now;update(dt);render(now/1000);requestAnimationFrame(gameLoop)}

// [11] Отрисовка — красивый живой изометрический 2D-стиль без внешних картинок
function resizeCanvas(){const r=canvas.getBoundingClientRect();view.w=r.width;view.h=r.height;view.dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(view.w*view.dpr);canvas.height=Math.round(view.h*view.dpr);ctx.setTransform(view.dpr,0,0,view.dpr,0,0)}
function render(time){ctx.clearRect(0,0,view.w,view.h);drawWorld(time);drawRoads();drawBuildings(time);drawTrucks();drawParticles()}
function drawWorld(time){const g=ctx.createLinearGradient(0,0,0,view.h);g.addColorStop(0,"#4e793f");g.addColorStop(.6,"#315e39");g.addColorStop(1,"#21472f");ctx.fillStyle=g;ctx.fillRect(0,0,view.w,view.h);ctx.fillStyle="#ffffff08";for(let i=0;i<80;i++){const x=(i*197)%Math.max(view.w,1),y=(i*113)%Math.max(view.h,1);ctx.beginPath();ctx.arc(x,y,1.5+(i%3),0,Math.PI*2);ctx.fill()}drawForestDecor(time)}
function drawForestDecor(time){const f=getBuilding("forest");if(!f)return;const minX=Math.max(200,f.x-260),maxX=Math.min(view.w-40,f.x+260),minY=Math.max(100,f.y-150),maxY=Math.min(view.h-100,f.y+170);for(let i=0;i<22;i++){const x=minX+(i*83)%Math.max(80,maxX-minX),y=minY+(i*57)%Math.max(80,maxY-minY);const sway=Math.sin(time*1.5+i)*2;drawTree(x+sway,y,18+(i%3)*3,.75+(i%4)*.06)}drawFence(f.x-105,f.y+62,210)}
function drawTree(x,y,s,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y);const sway=Math.sin(performance.now()/900+x)*.018;ctx.rotate(sway);ctx.fillStyle="#183326";roundRectPath(-s*.09,s*.25,s*.18,s*.62,s*.03);ctx.fill();for(let i=0;i<3;i++){const yy=-s*(.62-i*.28);const ww=s*(.62-i*.11);const g=ctx.createLinearGradient(0,yy-s*.2,0,yy+s*.35);g.addColorStop(0,"#5c9c59");g.addColorStop(1,"#245b3b");ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(0,yy-s*.45);ctx.quadraticCurveTo(-ww*.25,yy-.05*s,-ww,yy+s*.22);ctx.quadraticCurveTo(0,yy+s*.08,ww,yy+s*.22);ctx.quadraticCurveTo(ww*.25,yy-.05*s,0,yy-s*.45);ctx.fill()}ctx.restore()}
function drawFence(x,y,w){ctx.strokeStyle="#d0bb8a99";ctx.lineWidth=3;for(let i=0;i<=w;i+=22){ctx.beginPath();ctx.moveTo(x+i,y);ctx.lineTo(x+i,y+14);ctx.stroke()}ctx.beginPath();ctx.moveTo(x,y+4);ctx.lineTo(x+w,y+4);ctx.moveTo(x,y+11);ctx.lineTo(x+w,y+11);ctx.stroke()}
function drawRoads(){const f=getBuilding("forest"),w=getBuilding("warehouse"),s=getBuilding("sales");if(!f||!w)return;ctx.save();ctx.strokeStyle="#1b2b2c99";ctx.lineWidth=39;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(f.x,f.y+78);ctx.lineTo(w.x,w.y+55);if(s)ctx.lineTo(s.x,s.y+55);ctx.stroke();ctx.strokeStyle="#6f6f62";ctx.lineWidth=31;ctx.beginPath();ctx.moveTo(f.x,f.y+78);ctx.lineTo(w.x,w.y+55);if(s)ctx.lineTo(s.x,s.y+55);ctx.stroke();ctx.strokeStyle="#e9e0b966";ctx.lineWidth=2;ctx.setLineDash([13,13]);ctx.beginPath();ctx.moveTo(f.x,f.y+78);ctx.lineTo(w.x,w.y+55);if(s)ctx.lineTo(s.x,s.y+55);ctx.stroke();ctx.restore()}
function roundRectPath(x,y,w,h,r){const rr=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath()}
function drawBuilding(b,time){const t=BUILDING_TYPES[b.type],x=b.x-t.w/2,y=b.y-t.h/2;ctx.save();const lift=Math.sin(time*1.4+b.id)*.8;ctx.translate(0,lift);ctx.shadowColor="#000b";ctx.shadowBlur=24;ctx.shadowOffsetY=12;const grad=ctx.createLinearGradient(x,y,x,y+t.h);grad.addColorStop(0,t.baseColor);grad.addColorStop(1,"#101c20");ctx.fillStyle=grad;roundRectPath(x,y,t.w,t.h,18);ctx.fill();ctx.shadowColor="transparent";ctx.strokeStyle=selectedId===b.id?"#f4ce59":"#ffffff12";ctx.lineWidth=selectedId===b.id?3:1;roundRectPath(x,y,t.w,t.h,18);ctx.stroke();
  // roof / industrial silhouette
  ctx.fillStyle="#ffffff0c";roundRectPath(x+8,y+8,t.w-16,35,12);ctx.fill();
  if(b.type==="forest"){ctx.fillStyle="#173827";roundRectPath(x+15,y+47,t.w-30,t.h-62,12);ctx.fill();for(let i=0;i<5;i++)drawTree(x+30+i*(t.w-60)/4,y+91+(i%2)*5,18,0.95)}
  if(b.type==="warehouse"){ctx.fillStyle="#263e4d";roundRectPath(x+22,y+52,t.w-44,t.h-66,10);ctx.fill();ctx.fillStyle="#6c8796";for(let i=0;i<3;i++){ctx.fillRect(x+35+i*40,y+67,27,10);ctx.fillRect(x+35+i*40,y+82,27,10)}}
  if(b.type==="workshop"){ctx.fillStyle="#3c2720";roundRectPath(x+20,y+53,t.w-40,t.h-67,10);ctx.fillStyle="#d98c42";ctx.fillRect(x+34,y+72,30,24);ctx.fillStyle="#5e6e73";ctx.fillRect(x+86,y+57,11,48);ctx.fillRect(x+115,y+48,11,57);ctx.fillStyle="#d8b75a";ctx.fillRect(x+151,y+72,26,26);}
  if(b.type==="sales"){ctx.fillStyle="#263d68";roundRectPath(x+18,y+51,t.w-36,t.h-64,10);ctx.fillStyle="#9ec9d8";for(let i=0;i<3;i++)ctx.fillRect(x+30+i*42,y+63,28,22);ctx.fillStyle="#e4b84c";ctx.fillRect(x+30,y+91,t.w-60,9)}
  ctx.textAlign="center";ctx.fillStyle="#fff";ctx.font="800 14px Segoe UI,Arial";ctx.fillText(t.name,b.x,y+24);ctx.fillStyle="#d8bf63";ctx.font="700 11px Segoe UI,Arial";ctx.fillText("УР. "+b.level,b.x,y+40);if(b.type==="forest"){ctx.fillStyle="#9fdc7c";ctx.font="600 10px Segoe UI,Arial";ctx.fillText("+"+woodPerTrip()+" / рейс",b.x,y+t.h-10)}if(b.type==="workshop"){const p=Math.min(b.progress/CONFIG.productionSeconds,1);ctx.fillStyle="#17242a";roundRectPath(x+22,y+t.h-16,t.w-44,5,3);ctx.fill();ctx.fillStyle="#e8c55c";roundRectPath(x+22,y+t.h-16,(t.w-44)*p,5,3);ctx.fill()}ctx.restore()}
function drawTrucks(){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return;for(const tr of state.trucks){const from=tr.state==="toForest"?w:f,to=tr.state==="toForest"?f:w,x=from.x+(to.x-from.x)*tr.progress,y=(from.y+65)+(to.y+65-(from.y+65))*tr.progress;const angle=Math.atan2(to.y-from.y,to.x-from.x);drawTruck(x,y,angle,tr.carrying)}}
function drawTruck(x,y,angle,load){ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.shadowColor="#000b";ctx.shadowBlur=10;ctx.shadowOffsetY=6;ctx.fillStyle="#d7a92e";roundRectPath(-32,-12,39,24,5);ctx.fill();ctx.fillStyle="#2f8fb4";roundRectPath(7,-10,22,20,5);ctx.fill();ctx.fillStyle="#bfe4ed";roundRectPath(11,-7,12,8,2);ctx.fill();ctx.fillStyle="#182027";ctx.beginPath();ctx.arc(-21,14,5,0,Math.PI*2);ctx.arc(18,14,5,0,Math.PI*2);ctx.fill();ctx.fillStyle="#fff2";ctx.fillRect(-27,-7,28,3);ctx.restore();if(load>0){ctx.fillStyle="#f5d66a";ctx.font="800 10px Segoe UI,Arial";ctx.textAlign="center";ctx.fillText("+"+load,x,y-26)}}
function drawParticles(){for(const p of particles){ctx.globalAlpha=p.life;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1}
function spawnSparks(x,y,n){for(let i=0;i<n;i++)particles.push({x,y,vx:(Math.random()-.5)*25,vy:-15-Math.random()*25,life:1,size:2+Math.random()*2,color:"#ffd66b"})}
function updateParticles(dt){for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=25*dt;p.life-=dt}particles=particles.filter(p=>p.life>0)}

// [12] Управление
function getMouse(e){const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}}
function buildingAt(x,y){for(let i=state.buildings.length-1;i>=0;i--){const b=state.buildings[i],t=BUILDING_TYPES[b.type];if(x>=b.x-t.w/2&&x<=b.x+t.w/2&&y>=b.y-t.h/2&&y<=b.y+t.h/2)return b}return null}
canvasClick=function(e){const p=getMouse(e),b=buildingAt(p.x,p.y);if(b){selectedId=b.id;openBuildingPanel(b);return}const now=performance.now();if(now-lastClick<320){if(buildMode){if(build(buildMode,p.x,p.y)){buildMode=null;showOverview()}}else openBuildPanel(p.x,p.y)}lastClick=now}
function openBuildPanel(x,y){const panel=document.getElementById("buildingPanel");panel.classList.remove("hidden");panel.innerHTML=`<button class="panel-close" id="panelClose">×</button><div class="panel-title">🏗️ Строительство</div><div class="panel-sub">Выбери объект для строительства в свободной зоне.</div><button class="action upgrade" data-build="workshop">🏭 Мастерская — 500 ₽</button><button class="action upgrade" data-build="warehouse">📦 Склад — 300 ₽</button><button class="action upgrade" data-build="sales">💰 Пункт продаж — 400 ₽</button>`;panel.querySelector("#panelClose").onclick=()=>panel.classList.add("hidden");panel.querySelectorAll("[data-build]").forEach(btn=>btn.onclick=()=>{buildMode=btn.dataset.build;panel.classList.add("hidden");showToast("🏗️ Выбрано: "+BUILDING_TYPES[buildMode].name+" • двойной клик по карте")})}
function openBuildingPanel(b){
 const panel=document.getElementById("buildingPanel"),t=BUILDING_TYPES[b.type];
 panel.classList.remove("hidden"); const cost=upgradeCost(b); let extra="";
 if(b.type==="forest") extra=`<div class="kv"><span>Дерево за рейс</span><b>${woodPerTrip()}</b></div><div class="kv"><span>Прирост к рейсу</span><b>+2 дерева / уровень</b></div>`;
 else if(b.type==="workshop") extra=`<div class="kv"><span>Скорость</span><b>${(1+(b.level-1)*.25).toFixed(2)}×</b></div><div class="kv"><span>Готовые доски</span><b>${state.resources.boards}</b></div><div class="panel-sub">2 дерева → 1 доска. Производство идёт автоматически.</div>`;
 else if(b.type==="sales"){b.autoSell=!!b.autoSell;const price=Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15));const total=price*state.resources.boards;extra=`<div class="kv"><span>Цена доски</span><b>${price} ₽</b></div><div class="kv"><span>Готовые доски</span><b>${state.resources.boards}</b></div><button class="action" id="sellOne" ${state.resources.boards<1?"disabled":""}>💰 Продать 1 доску — ${price} ₽</button><button class="action" id="sellAll" ${state.resources.boards<1?"disabled":""}>💰 Продать всё — ${total.toLocaleString("ru-RU")} ₽</button><button class="action" id="autoSell">${b.autoSell?"🟢 Автопродажа: ВКЛ":"⚪ Автопродажа: ВЫКЛ"}</button>`;}
 else extra=`<div class="kv"><span>Дерево</span><b>${state.resources.wood}</b></div><div class="kv"><span>Доски</span><b>${state.resources.boards}</b></div>`;
 panel.innerHTML=`<button class="panel-close" id="panelClose">×</button><div class="panel-title">${t.icon} ${t.name}</div><div class="building-level">Уровень ${b.level}</div><p class="panel-sub">${t.description}</p>${extra}<button class="action upgrade" id="upgrade">⬆️ Улучшить за ${cost.toLocaleString("ru-RU")} ₽</button>`;
 panel.querySelector("#panelClose").onclick=()=>{selectedId=null;panel.classList.add("hidden")}; const up=panel.querySelector("#upgrade"); up.disabled=state.money<cost; up.onclick=()=>upgradeBuilding(b.id);
 if(b.type==="sales"){panel.querySelector("#sellOne").onclick=()=>sellBoards(1);panel.querySelector("#sellAll").onclick=()=>sellBoards(state.resources.boards);panel.querySelector("#autoSell").onclick=()=>{b.autoSell=!b.autoSell;saveGame();openBuildingPanel(b);showToast(b.autoSell?"🟢 Автопродажа включена":"⚪ Автопродажа выключена")}}
}
function hasSavedGame(){return !!localStorage.getItem(SAVE_KEY)}
function beginGame(useSave){if(useSave){state=loadGame()}else{localStorage.removeItem(SAVE_KEY);state=loadGame();saveGame()}gameStarted=true;const el=document.getElementById("startScreen");el.classList.add("hide");setTimeout(()=>el.remove(),380);showOverview();showToast(useSave?"▶️ Игра продолжена":"🏁 Компания основана! Удачи, предприниматель!")}
function initialize(){canvas=document.getElementById('gameCanvas');ctx=canvas.getContext('2d');resizeCanvas();window.addEventListener('resize',resizeCanvas);canvas.addEventListener('click',canvasClick);document.getElementById('truckUpgrade').onclick=()=>{const tr=state.trucks[0];if(!tr)return;const cost=1200*(tr.level||1);if(state.money<cost){showToast('❌ Недостаточно денег');return}state.money-=cost;tr.level=(tr.level||1)+1;tr.speed+=15;showToast('🚚 Грузовик улучшен');saveGame();updateUI()};document.getElementById('buyTruck').onclick=buyTruck;bindNav();updateUI();const start=document.getElementById('startGame'),cont=document.getElementById('continueGame');if(start)start.onclick=()=>beginGame(false);if(cont){cont.style.display=hasSavedGame()?'inline-block':'none';cont.onclick=()=>beginGame(true)}requestAnimationFrame(gameLoop)}
window.addEventListener("beforeunload",saveGame);initialize();
