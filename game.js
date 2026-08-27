"use strict";

// ============================================================
// 🏭 БИЗНЕС ИМПЕРИЯ
// Версия: 0.1.0
//
// КАРТА GAME.JS
// [01] Настройки
// [02] Состояние игры
// [03] Ресурсы
// [04] Здания
// [05] Производство
// [06] Транспорт
// [07] Экономика
// [08] Строительство
// [09] Улучшения
// [10] Игровой цикл
// [11] Отрисовка
// [12] Управление
// [13] Сохранение
// [14] Запуск
// [15] Монетизация — заготовка
// [16] VK API — заготовка
// [17] Аналитика — заготовка
// ============================================================

// [01] Настройки
const GAME_NAME="Бизнес Империя";
const GAME_VERSION="0.1.0";
const SAVE_KEY="business_empire_save_v1";
const CONFIG={startMoney:1000,startWood:0,startBoards:0,woodPerTrip:4,boardPrice:35,productionSeconds:4,truckSpeed:90,maxDelta:.05};

// [02] Состояние
const DEFAULT_STATE={money:CONFIG.startMoney,level:1,experience:0,resources:{wood:0,boards:0},buildings:[],trucks:[],selectedId:null,nextId:1,stats:{boardsSold:0,woodCollected:0},lastSave:0};
let state=loadGame(),lastTime=performance.now(),canvas,ctx,view={w:0,h:0,dpr:1},mouse={x:0,y:0,worldX:0,worldY:0},toastTimer=0;

// [03] Ресурсы
const RESOURCES={wood:{name:"Дерево",icon:"🌲"},boards:{name:"Доски",icon:"🪵"}};

// [04] Здания
const BUILDING_TYPES={
 forest:{id:"forest",name:"Лес",w:130,h:105,color:"#3d7145",description:"Источник древесины. Грузовик автоматически собирает сырьё."},
 warehouse:{id:"warehouse",name:"Склад",w:150,h:105,color:"#58677a",description:"Хранит сырьё и готовую продукцию."},
 workshop:{id:"workshop",name:"Мастерская",w:170,h:120,color:"#8a6245",description:"Перерабатывает дерево в доски."},
 sales:{id:"sales",name:"Пункт продаж",w:145,h:100,color:"#5c6e9a",description:"Автоматически продаёт готовые доски."}
};
function createBuilding(type,x,y,level=1){return{id:state.nextId++,type,x,y,level,progress:0,stored:0}}

// [05] Производство
const RECIPES={workshop:{input:"wood",inputAmount:2,output:"boards",outputAmount:1}};
function workshopProduction(dt){
 const b=state.buildings.find(x=>x.type==="workshop"); if(!b)return;
 const speed=1+(b.level-1)*.25;
 if(state.resources.wood>=2){b.progress+=dt*speed;if(b.progress>=CONFIG.productionSeconds){b.progress-=CONFIG.productionSeconds;state.resources.wood-=2;state.resources.boards++;gainXP(3);showToast("🪵 Произведены доски")}}
 else b.progress=Math.max(0,b.progress-dt*.5);
}
function automaticSales(dt){
 const b=state.buildings.find(x=>x.type==="sales"); if(!b||state.resources.boards<=0)return;
 b.progress+=dt*(.5+b.level*.1);
 if(b.progress>=1){b.progress=0;state.resources.boards--;const price=Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15));state.money+=price;state.stats.boardsSold++;gainXP(2);showToast("💰 Продана доска")}
}

// [06] Транспорт
function createTruck(){
 const forest=getBuilding("forest"),warehouse=getBuilding("warehouse");if(!forest||!warehouse)return;
 state.trucks.push({id:state.nextId++,from:forest.id,to:warehouse.id,progress:0,carrying:0,state:"toForest"});
}
function updateTrucks(dt){
 const forest=getBuilding("forest"),warehouse=getBuilding("warehouse");if(!forest||!warehouse)return;
 if(state.trucks.length===0)createTruck();
 for(const truck of state.trucks){
  const from=truck.state==="toForest"?warehouse:forest,to=truck.state==="toForest"?forest:warehouse;
  const distance=Math.hypot(to.x-from.x,to.y-from.y);
  truck.progress+=dt*CONFIG.truckSpeed/Math.max(distance,1);
  if(truck.progress>=1){truck.progress=0;if(truck.state==="toForest"){truck.state="toWarehouse";truck.carrying=CONFIG.woodPerTrip;state.stats.woodCollected+=truck.carrying;gainXP(1)}else{truck.state="toForest";state.resources.wood+=truck.carrying;truck.carrying=0}}
 }
}

// [07] Экономика
function gainXP(amount){state.experience+=amount;const need=100+(state.level-1)*50;if(state.experience>=need){state.experience-=need;state.level++;showToast("⭐ Новый уровень: "+state.level)}}
function canAfford(amount){return state.money>=amount}

// [08] Строительство
const BUILD_COSTS={workshop:500,warehouse:300,sales:400};
function build(type,x,y){
 const t=BUILDING_TYPES[type],cost=BUILD_COSTS[type];if(!t||type==="forest")return false;
 if(!canAfford(cost)){showToast("❌ Недостаточно денег");return false}
 if(!isInsideLand(x,y,t.w,t.h)){showToast("❌ Здесь нельзя строить");return false}
 if(hasBuildingAt(x,y,t.w,t.h)){showToast("❌ Место занято");return false}
 state.money-=cost;const b=createBuilding(type,x,y);state.buildings.push(b);state.selectedId=b.id;gainXP(10);showToast("🏗️ Построено: "+t.name);saveGame();return true;
}
function upgradeBuilding(id){
 const b=state.buildings.find(x=>x.id===id);if(!b||b.type==="forest")return;
 const cost=upgradeCost(b);if(!canAfford(cost)){showToast("❌ Недостаточно денег");return}
 state.money-=cost;b.level++;gainXP(15);showToast("⬆️ "+BUILDING_TYPES[b.type].name+" улучшена");saveGame();
}
function getBuilding(type){return state.buildings.find(b=>b.type===type)}
function getBuildingById(id){return state.buildings.find(b=>b.id===id)}
function isInsideLand(x,y,w,h){const p=25;return x-w/2>=p&&y-h/2>=25&&x+w/2<=view.w-p&&y+h/2<=view.h-25}
function hasBuildingAt(x,y,w,h){return state.buildings.some(b=>{const t=BUILDING_TYPES[b.type];return Math.abs(x-b.x)<(w+t.w)/2+10&&Math.abs(y-b.y)<(h+t.h)/2+10})}

// [09] Улучшения
function upgradeCost(b){return Math.round((BUILD_COSTS[b.type]||300)*(1+b.level*.8))}

// [10] Игровой цикл
function update(dt){updateTrucks(dt);workshopProduction(dt);automaticSales(dt);updateUI();if(performance.now()-state.lastSave>5000){saveGame();state.lastSave=performance.now()}}
function gameLoop(now){const dt=Math.min((now-lastTime)/1000,CONFIG.maxDelta);lastTime=now;update(dt);render();requestAnimationFrame(gameLoop)}

// [11] Отрисовка
function resizeCanvas(){const r=canvas.getBoundingClientRect();view.w=r.width;view.h=r.height;view.dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(view.w*view.dpr);canvas.height=Math.round(view.h*view.dpr);ctx.setTransform(view.dpr,0,0,view.dpr,0,0)}
function render(){ctx.clearRect(0,0,view.w,view.h);drawGround();drawRoads();drawTrucks();for(const b of state.buildings)drawBuilding(b)}
function drawGround(){ctx.fillStyle="#78a95f";ctx.fillRect(0,0,view.w,view.h);ctx.fillStyle="#6f9f57";for(let x=0;x<view.w;x+=48)for(let y=0;y<view.h;y+=48)if((x/48+y/48)%2===0)ctx.fillRect(x,y,48,48);ctx.strokeStyle="#b9d39466";ctx.lineWidth=1;for(let x=0;x<view.w;x+=48){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,view.h);ctx.stroke()}for(let y=0;y<view.h;y+=48){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(view.w,y);ctx.stroke()}}
function drawRoads(){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return;ctx.save();ctx.strokeStyle="#b49b72";ctx.lineWidth=26;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(f.x,f.y);ctx.lineTo(w.x,w.y);ctx.stroke();ctx.restore()}
function roundRect(x,y,w,h,r){const rr=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath()}
function drawBuilding(b){
 const t=BUILDING_TYPES[b.type],x=b.x-t.w/2,y=b.y-t.h/2;
 ctx.save();ctx.shadowColor="#0006";ctx.shadowBlur=12;ctx.shadowOffsetY=6;ctx.fillStyle=t.color;roundRect(x,y,t.w,t.h,12);ctx.fill();ctx.shadowColor="transparent";
 if(state.selectedId===b.id){ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.stroke()}
 ctx.fillStyle="#fff";ctx.textAlign="center";ctx.textBaseline="middle";
 const icon=b.type==="forest"?"🌲":b.type==="warehouse"?"📦":b.type==="workshop"?"🏭":"💰";
 ctx.font="30px Arial";ctx.fillText(icon,b.x,b.y-18);ctx.font="bold 13px Arial";ctx.fillText(t.name,b.x,b.y+16);ctx.font="11px Arial";ctx.fillStyle="#e4e9ef";ctx.fillText("ур. "+b.level,b.x,b.y+34);
 if(b.type==="workshop"){const p=Math.min(b.progress/CONFIG.productionSeconds,1);ctx.fillStyle="#1d2530aa";ctx.fillRect(x+12,y+t.h-13,t.w-24,5);ctx.fillStyle="#d8e7ff";ctx.fillRect(x+12,y+t.h-13,(t.w-24)*p,5)}
 ctx.restore();
}
function drawTrucks(){const f=getBuilding("forest"),w=getBuilding("warehouse");if(!f||!w)return;for(const tr of state.trucks){const from=tr.state==="toForest"?w:f,to=tr.state==="toForest"?f:w,x=from.x+(to.x-from.x)*tr.progress,y=from.y+(to.y-from.y)*tr.progress;ctx.save();ctx.font="25px Arial";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("🚚",x,y-17);if(tr.carrying>0){ctx.font="10px Arial";ctx.fillStyle="#fff";ctx.fillText("+"+tr.carrying,x,y+8)}ctx.restore()}}

// [12] Управление
function getMousePosition(e){const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;mouse.worldX=mouse.x;mouse.worldY=mouse.y}
function buildingAt(x,y){for(let i=state.buildings.length-1;i>=0;i--){const b=state.buildings[i],t=BUILDING_TYPES[b.type];if(x>=b.x-t.w/2&&x<=b.x+t.w/2&&y>=b.y-t.h/2&&y<=b.y+t.h/2)return b}return null}
function selectBuilding(b){state.selectedId=b?b.id:null;if(b)showPanel(b);else hidePanel()}
function showPanel(b){
 const t=BUILDING_TYPES[b.type],panel=document.getElementById("infoPanel"),content=document.getElementById("panelContent");panel.classList.remove("hidden");
 if(b.type==="forest"){content.innerHTML=`<h2>🌲 ${t.name}</h2><p>${t.description}</p><div class="kv"><span>Дерево за рейс</span><b>${CONFIG.woodPerTrip}</b></div><div class="kv"><span>Собрано всего</span><b>${state.stats.woodCollected}</b></div>`;return}
 if(b.type==="warehouse"){content.innerHTML=`<h2>📦 ${t.name}</h2><p>${t.description}</p><div class="kv"><span>Дерево</span><b>${state.resources.wood}</b></div><div class="kv"><span>Доски</span><b>${state.resources.boards}</b></div>`;return}
 const cost=upgradeCost(b);
 content.innerHTML=b.type==="workshop"?`<h2>🏭 ${t.name}</h2><p>${t.description}</p><div class="kv"><span>Уровень</span><b>${b.level}</b></div><div class="kv"><span>Производство</span><b>${(1+(b.level-1)*.25).toFixed(2)}×</b></div><div class="kv"><span>Дерево → доски</span><b>2 → 1</b></div><button class="action" id="upgradeBtn">⬆️ Улучшить за ${cost} ₽</button>`:`<h2>💰 ${t.name}</h2><p>${t.description}</p><div class="kv"><span>Уровень</span><b>${b.level}</b></div><div class="kv"><span>Цена доски</span><b>${Math.round(CONFIG.boardPrice*(1+(b.level-1)*.15))} ₽</b></div><button class="action" id="upgradeBtn">⬆️ Улучшить за ${cost} ₽</button>`;
 const btn=document.getElementById("upgradeBtn");if(btn){btn.disabled=state.money<cost;btn.addEventListener("click",()=>{upgradeBuilding(b.id);const fresh=getBuildingById(b.id);if(fresh)showPanel(fresh)})}
}
function hidePanel(){document.getElementById("infoPanel").classList.add("hidden")}
let lastClick=0;
function onCanvasClick(event){getMousePosition(event);const b=buildingAt(mouse.worldX,mouse.worldY);if(b){selectBuilding(b);return}const now=performance.now();if(now-lastClick<320)openBuildMenu(mouse.worldX,mouse.worldY);lastClick=now}
function openBuildMenu(x,y){const panel=document.getElementById("infoPanel"),content=document.getElementById("panelContent");panel.classList.remove("hidden");content.innerHTML=`<h2>🏗️ Строительство</h2><p>Выбери здание для постройки в свободном месте.</p><button class="action" id="buildWorkshop">🏭 Мастерская — 500 ₽</button><button class="action" id="buildWarehouse">📦 Склад — 300 ₽</button><button class="action" id="buildSales">💰 Пункт продаж — 400 ₽</button>`;document.getElementById("buildWorkshop").onclick=()=>{if(build("workshop",x,y))showPanel(getBuilding("workshop"))};document.getElementById("buildWarehouse").onclick=()=>{if(build("warehouse",x,y))showPanel(getBuilding("warehouse"))};document.getElementById("buildSales").onclick=()=>{if(build("sales",x,y))showPanel(getBuilding("sales"))}}
document.getElementById("closePanel").addEventListener("click",()=>{state.selectedId=null;hidePanel()});

// [13] Сохранение
function saveGame(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({money:state.money,level:state.level,experience:state.experience,resources:state.resources,buildings:state.buildings,trucks:state.trucks,stats:state.stats,nextId:state.nextId}))}catch(e){console.warn("Не удалось сохранить игру:",e)}}
function loadGame(){
 try{
  const raw=localStorage.getItem(SAVE_KEY);
  if(!raw){const fresh=JSON.parse(JSON.stringify(DEFAULT_STATE));fresh.buildings=[{id:1,type:"forest",x:150,y:180,level:1,progress:0,stored:0},{id:2,type:"warehouse",x:360,y:180,level:1,progress:0,stored:0},{id:3,type:"workshop",x:580,y:180,level:1,progress:0,stored:0},{id:4,type:"sales",x:790,y:180,level:1,progress:0,stored:0}];fresh.nextId=5;return fresh}
  const parsed=JSON.parse(raw),fresh=JSON.parse(JSON.stringify(DEFAULT_STATE));
  return {...fresh,...parsed,resources:{...fresh.resources,...(parsed.resources||{})},stats:{...fresh.stats,...(parsed.stats||{})},buildings:Array.isArray(parsed.buildings)?parsed.buildings:fresh.buildings,trucks:Array.isArray(parsed.trucks)?parsed.trucks:[]};
 }catch(e){console.warn("Повреждённое сохранение. Создана новая игра.",e);localStorage.removeItem(SAVE_KEY);return loadGame()}
}

// [14] Запуск
function updateUI(){document.getElementById("money").textContent=Math.floor(state.money).toLocaleString("ru-RU");document.getElementById("level").textContent=state.level;document.getElementById("wood").textContent=state.resources.wood;document.getElementById("boards").textContent=state.resources.boards}
function showToast(message){const toast=document.getElementById("toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1200)}
function initialize(){canvas=document.getElementById("gameCanvas");ctx=canvas.getContext("2d");resizeCanvas();window.addEventListener("resize",resizeCanvas);canvas.addEventListener("click",onCanvasClick);updateUI();saveGame();requestAnimationFrame(gameLoop)}
window.addEventListener("beforeunload",saveGame);
initialize();

// [15] Монетизация — заготовка
// [16] VK API — заготовка
// [17] Аналитика — заготовка
