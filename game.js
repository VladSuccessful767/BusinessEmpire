"use strict";
// ============================================================
// 🏭 БИЗНЕС ИМПЕРИЯ v0.3.0
// [01] Настройки | [02] Состояние | [03] Ресурсы
// [04] Здания
// [07] Экономика | [08] Строительство | [09] Улучшения
// [10] Игровой цикл | [11] Отрисовка | [12] Управление
// [13] Сохранение | [14] UI | [15] Заказы
// [16] Монетизация-заготовка | [17] VK-заготовка | [18] Аналитика
// ============================================================

const ORDER_TEMPLATES=[{id:"small",title:"Пробная партия",description:"Клиенту нужны обычные доски для ремонта.",boards:5,reward:220,xp:12},{id:"house",title:"Материалы для дома",description:"Строительная бригада ждёт поставку.",boards:12,reward:620,xp:25},{id:"furniture",title:"Заказ мебельщика",description:"Мебельная мастерская предлагает контракт.",boards:25,reward:1450,xp:50},{id:"urgent",title:"Срочный заказ",description:"Очень короткий срок, зато высокая оплата.",boards:40,reward:2550,xp:80}];

// [01] Настройки
const GAME_VERSION="0.3.0", SAVE_KEY="business_empire_save_v3";
const CONFIG={startMoney:1000,woodTripBase:4,truckCapacity:150,boardPrice:35,productionSeconds:4,truckSpeed:90,maxDelta:.05};

// [02] Состояние
const DEFAULT_STATE={money:1000,level:1,experience:0,day:1,resources:{wood:0,boards:0},buildings:[],trucks:[],orders:[],stats:{woodCollected:0,boardsSold:0,ordersCompleted:0},nextId:1,lastSave:0};
let state=loadGame();
let canvas,ctx,view={w:0,h:0,dpr:1},lastTime=performance.now(),lastUi=0,toastTimer=0,lastClick=0;
let particles=[],selectedId=null;
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
function automaticSales(dt){const b=getBuilding("sales");if(!b||state.resources.boards<=0)return;b.progress+=dt*(.5+b.level*.1);if(b.progress>=1){b.progress=0;state.resources.boards--;const price=Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15));state.money+=price;state.stats.boardsSold++;gainXP(2)}}

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
function drawTree(x,y,s,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle="#1a3425";ctx.fillRect(x-3,y+s*.55,6,s*.7);for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x,y-s*(1.1-i*.3));ctx.lineTo(x-s*(.55-i*.08),y+s*(.1+i*.12));ctx.lineTo(x+s*(.55-i*.08),y+s*(.1+i*.12));ctx.closePath();ctx.fillStyle=i===0?"#244c2d":i===1?"#2d6136":"#387943";ctx.fill()}ctx.restore()}
function drawFence(x,y,w){ctx.strokeStyle="#d0bb8a99";ctx.lineWidth=3;for(let i=0;i<=w;i+=22){ctx.beginPath();ctx.moveTo(x+i,y);ctx.lineTo(x+i,y+14);ctx.stroke()}ctx.beginPath();ctx.moveTo(x,y+4);ctx.lineTo(x+w,y+4);ctx.moveTo(x,y+11);ctx.lineTo(x+w,y+11);ctx.stroke()}
function drawRoads(){const f=getBuilding("forest"),w=getBuilding("warehouse"),s=getBuilding("sales");if(!f||!w)return;ctx.save();ctx.strokeStyle="#1b2b2c99";ctx.lineWidth=39;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(f.x,f.y+78);ctx.lineTo(w.x,w.y+55);if(s)ctx.lineTo(s.x,s.y+55);ctx.stroke();ctx.strokeStyle="#6f6f62";ctx.lineWidth=31;ctx.beginPath();ctx.moveTo(f.x,f.y+78);ctx.lineTo(w.x,w.y+55);if(s)ctx.lineTo(s.x,s.y+55);ctx.stroke();ctx.strokeStyle="#e9e0b966";ctx.lineWidth=2;ctx.setLineDash([13,13]);ctx.beginPath();ctx.moveTo(f.x,f.y+78);ctx.lineTo(w.x,w.y+55);if(s)ctx.lineTo(s.x,s.y+55);ctx.stroke();ctx.restore()}
function roundRectPath(x,y,w,h,r){const rr=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath()}
function drawBuilding(b,time){const t=BUILDING_TYPES[b.type],x=b.x-t.w/2,y=b.y-t.h/2;ctx.save();ctx.translate(0,Math.sin(time*1.5+b.id)*.7);ctx.shadowColor="#000a";ctx.shadowBlur=20;ctx.shadowOffsetY=9;ctx.fillStyle=t.baseColor;roundRectPath(x,y,t.w,t.h,15);ctx.fill();ctx.shadowColor="transparent";const roof=ctx.createLinearGradient(x,y,x,y+t.h);roof.addColorStop(0,"#ffffff24");roof.addColorStop(1,"#00000020");ctx.fillStyle=roof;roundRectPath(x+2,y+2,t.w-4,t.h-4,13);ctx.fill();if(selectedId===b.id){ctx.strokeStyle="#ffe27a";ctx.lineWidth=3;ctx.shadowColor="#ffd34d99";ctx.shadowBlur=14;ctx.stroke()}ctx.shadowBlur=0;ctx.textAlign="center";ctx.fillStyle="#fff";ctx.font="34px Arial";ctx.fillText(t.icon,b.x,y+43);ctx.font="800 15px Arial";ctx.fillText(t.name,b.x,y+77);ctx.font="12px Arial";ctx.fillStyle="#f2d879";ctx.fillText("Уровень "+b.level,b.x,y+98);if(b.type==="forest"){ctx.font="11px Arial";ctx.fillStyle="#d4e0d8";ctx.fillText("+"+woodPerTrip()+" дерева / рейс",b.x,y+117)}if(b.type==="workshop"){const p=Math.min(b.progress/CONFIG.productionSeconds,1);ctx.fillStyle="#17232a";roundRectPath(x+18,y+t.h-15,t.w-36,6,3);ctx.fill();ctx.fillStyle="#e8c55c";ctx.fillRect(x+18,y+t.h-15,(t.w-36)*p,6)}ctx.restore()}
function drawTrucks(){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return;for(const tr of state.trucks){const from=tr.state==="toForest"?w:f,to=tr.state==="toForest"?f:w,x=from.x+(to.x-from.x)*tr.progress,y=(from.y+65)+(to.y+65-(from.y+65))*tr.progress;const angle=Math.atan2(to.y-from.y,to.x-from.x);drawTruck(x,y,angle,tr.carrying)}}
function drawTruck(x,y,angle,load){ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.shadowColor="#000b";ctx.shadowBlur=8;ctx.shadowOffsetY=5;ctx.fillStyle="#2e9bc3";roundRectPath(-29,-11,42,22,5);ctx.fill();ctx.fillStyle="#185d78";roundRectPath(10,-9,18,18,4);ctx.fill();ctx.fillStyle="#a9d7e7";roundRectPath(14,-7,10,8,2);ctx.fill();ctx.fillStyle="#8a522f";for(let i=0;i<3;i++){ctx.fillRect(-24+i*10,-7,7,6);ctx.fillRect(-24+i*10,1,7,6)}ctx.fillStyle="#111820";ctx.beginPath();ctx.arc(-18,13,5,0,Math.PI*2);ctx.arc(17,13,5,0,Math.PI*2);ctx.fill();ctx.restore();if(load>0){ctx.fillStyle="#fff";ctx.font="700 10px Arial";ctx.textAlign="center";ctx.fillText("+"+load,x,y-25)}}
function drawParticles(){for(const p of particles){ctx.globalAlpha=p.life;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1}
function spawnSparks(x,y,n){for(let i=0;i<n;i++)particles.push({x,y,vx:(Math.random()-.5)*25,vy:-15-Math.random()*25,life:1,size:2+Math.random()*2,color:"#ffd66b"})}
function updateParticles(dt){for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=25*dt;p.life-=dt}particles=particles.filter(p=>p.life>0)}

// [12] Управление
function getMouse(e){const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}}
function buildingAt(x,y){for(let i=state.buildings.length-1;i>=0;i--){const b=state.buildings[i],t=BUILDING_TYPES[b.type];if(x>=b.x-t.w/2&&x<=b.x+t.w/2&&y>=b.y-t.h/2&&y<=b.y+t.h/2)return b}return null}
canvasClick=function(e){const p=getMouse(e),b=buildingAt(p.x,p.y);if(b){selectedId=b.id;openBuildingPanel(b);return}const now=performance.now();if(now-lastClick<320)openBuildPanel(p.x,p.y);lastClick=now}
function openBuildPanel(x,y){const panel=document.getElementById("buildingPanel");panel.classList.remove("hidden");panel.innerHTML=`<button class="panel-close" id="panelClose">×</button><div class="panel-title">🏗️ Строительство</div><div class="panel-sub">Выбери объект для строительства в свободной зоне.</div><button class="action upgrade" data-build="workshop">🏭 Мастерская — 500 ₽</button><button class="action upgrade" data-build="warehouse">📦 Склад — 300 ₽</button><button class="action upgrade" data-build="sales">💰 Пункт продаж — 400 ₽</button>`;panel.querySelector("#panelClose").onclick=()=>panel.classList.add("hidden");panel.querySelectorAll("[data-build]").forEach(btn=>btn.onclick=()=>build(btn.dataset.build,x,y))}
function openBuildingPanel(b){const panel=document.getElementById("buildingPanel"),t=BUILDING_TYPES[b.type];panel.classList.remove("hidden");const cost=upgradeCost(b);let extra=b.type==="forest"?`<div class="kv"><span>Дерево за рейс</span><b>${woodPerTrip()}</b></div><div class="kv"><span>Прирост к рейсу</span><b>+2 дерева / уровень</b></div>`:b.type==="workshop"?`<div class="kv"><span>Скорость</span><b>${(1+(b.level-1)*.25).toFixed(2)}×</b></div>`:b.type==="sales"?`<div class="kv"><span>Цена доски</span><b>${Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15))} ₽</b></div>`:`<div class="kv"><span>Дерево</span><b>${state.resources.wood}</b></div><div class="kv"><span>Доски</span><b>${state.resources.boards}</b></div>`;panel.innerHTML=`<button class="panel-close" id="panelClose">×</button><div class="panel-title">${t.icon} ${t.name}</div><div class="building-level">Уровень ${b.level}</div><p class="panel-sub">${t.description}</p>${extra}<button class="action upgrade" id="upgrade">⬆️ Улучшить за ${cost.toLocaleString("ru-RU")} ₽</button>`;panel.querySelector("#panelClose").onclick=()=>{selectedId=null;panel.classList.add("hidden")};panel.querySelector("#upgrade").disabled=state.money<cost;panel.querySelector("#upgrade").onclick=()=>upgradeBuilding(b.id)}

// [13] Сохранение
function saveGame(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({...state,lastSave:0}))}catch(e){console.warn("Save error",e)}}
function loadGame(){try{const raw=localStorage.getItem(SAVE_KEY);if(raw){const p=JSON.parse(raw);return {...DEFAULT_STATE,...p,resources:{...DEFAULT_STATE.resources,...(p.resources||{})},stats:{...DEFAULT_STATE.stats,...(p.stats||{})},buildings:Array.isArray(p.buildings)?p.buildings:[],trucks:Array.isArray(p.trucks)?p.trucks:[],orders:Array.isArray(p.orders)?p.orders:[]}}}catch(e){console.warn("Load error",e)}const s=JSON.parse(JSON.stringify(DEFAULT_STATE));s.buildings=[{id:1,type:"forest",x:300,y:230,level:1,progress:0},{id:2,type:"warehouse",x:570,y:245,level:1,progress:0},{id:3,type:"workshop",x:830,y:245,level:1,progress:0},{id:4,type:"sales",x:1080,y:300,level:1,progress:0}];s.nextId=5;s.trucks=[{id:s.nextId++,from:1,to:2,progress:0,carrying:0,state:"toForest",speed:CONFIG.truckSpeed}];s.orders=ORDER_TEMPLATES.map(o=>({...o,completed:false}));return s}

// [14] UI
function updateUI(){document.getElementById("money").textContent=Math.floor(state.money).toLocaleString("ru-RU");document.getElementById("level").textContent=state.level;document.getElementById("wood").textContent=state.resources.wood;document.getElementById("boards").textContent=state.resources.boards;document.getElementById("ordersBadge").textContent=state.orders.filter(o=>!o.completed).length;document.getElementById("truckLevel").textContent=state.trucks[0]?.level||1;document.getElementById("truckSpeed").textContent=(state.trucks[0]?.speed||CONFIG.truckSpeed)+" км/ч";document.getElementById("truckLoad").textContent=(state.trucks[0]?.carrying||0)+" / "+CONFIG.truckCapacity;document.getElementById("woodRate").textContent="+"+woodRatePerMin()+" /мин";document.getElementById("boardRate").textContent="+"+boardRatePerMin()+" /мин";const tr=state.trucks[0];document.getElementById("truckProgress").style.width=(tr?Math.round(tr.progress*100):0)+"%";document.getElementById("day").textContent=state.day;const mins=Math.floor((performance.now()/1000/60)%60).toString().padStart(2,"0");document.getElementById("clock").textContent="10:"+mins+" Ясно"}
function showToast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),1400)}

// [15] Заказы
function showOrders(){const panel=document.getElementById("ordersPanel");panel.classList.remove("hidden");panel.innerHTML=`<button class="panel-close" id="ordersClose">×</button><div class="panel-title">📋 ЗАКАЗЫ <span style="color:#8ed85c">${state.orders.filter(o=>!o.completed).length}</span></div><div class="panel-sub">Производи доски и выбирай выгодные контракты.</div>`+state.orders.map(o=>`<div class="order"><h3>${o.title}<strong>${o.reward.toLocaleString("ru-RU")} ₽</strong></h3><p>${o.description}</p><small>🪵 ${o.boards} досок • ⭐ +${o.xp} XP</small><button class="action ${o.boards>=20?"gold":""}" data-order="${o.id}" ${o.completed||state.resources.boards<o.boards?"disabled":""}>${o.completed?"Выполнен":state.resources.boards<o.boards?"Не хватает досок":"ПРИНЯТЬ"}</button></div>`).join("")+`<div class="panel-sub">Награда за заказ выше обычной цены досок — выгодно копить материалы на крупные контракты.</div>`;panel.querySelector("#ordersClose").onclick=()=>panel.classList.add("hidden");panel.querySelectorAll("[data-order]").forEach(btn=>btn.onclick=()=>completeOrder(btn.dataset.order))}
function completeOrder(id){const o=state.orders.find(x=>x.id===id);if(!o||o.completed)return;if(state.resources.boards<o.boards){showToast("❌ Не хватает досок");return}state.resources.boards-=o.boards;state.money+=o.reward;o.completed=true;state.stats.ordersCompleted++;gainXP(o.xp);showToast("📋 Заказ выполнен: +"+o.reward+" ₽");saveGame();showOrders()}

// [16] Монетизация — заготовка: VK Mini Apps / платежи подключим позже, игровая экономика уже отделена.
// [17] VK API — заготовка: initVK(), пользователь, cloud storage.
// [18] Аналитика — заготовка: события строительства, заказов, улучшений.

// Старт
function initialize(){canvas=document.getElementById("gameCanvas");ctx=canvas.getContext("2d");resizeCanvas();window.addEventListener("resize",resizeCanvas);canvas.addEventListener("click",canvasClick);document.getElementById("navOrders").onclick=showOrders;document.getElementById("truckUpgrade").onclick=()=>{const tr=state.trucks[0];if(!tr)return;const cost=1200*(tr.level||1);if(state.money<cost){showToast("❌ Недостаточно денег");return}state.money-=cost;tr.level=(tr.level||1)+1;tr.speed+=15;showToast("🚚 Грузовик улучшен");saveGame()};document.getElementById("buyTruck").onclick=()=>{if(state.trucks.length>=3){showToast("🚚 Максимум 3 грузовика в этой версии");return}if(state.money<4000){showToast("❌ Нужно 4 000 ₽");return}state.money-=4000;createTruck();showToast("🚚 Куплен новый грузовик");saveGame()};updateUI();requestAnimationFrame(gameLoop)}
window.addEventListener("beforeunload",saveGame);initialize();
