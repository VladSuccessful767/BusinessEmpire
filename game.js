const SAVE_KEY = "auto_service_v04";

/* =========================================================
   БАЗА АВТОМОБИЛЕЙ
========================================================= */

const cars = [
    // Бюджетные / массовые — встречаются чаще
    { brand:"Lada", model:"Granta", years:[2014,2015,2016,2017,2018,2019], icon:"🚗", weight:10, engines:["R4 1.6 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Lada", model:"Vesta", years:[2016,2017,2018,2019,2020], icon:"🚗", weight:9, engines:["R4 1.6 бензин"], transmissions:["МКПП","АМТ"] },
    { brand:"Lada", model:"Priora", years:[2012,2013,2014,2015,2016,2017], icon:"🚗", weight:7, engines:["R4 1.6 бензин"], transmissions:["МКПП"] },
    { brand:"Renault", model:"Logan", years:[2013,2014,2015,2016,2017,2018], icon:"🚙", weight:9, engines:["R4 1.6 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Renault", model:"Sandero", years:[2013,2014,2015,2016,2017,2018], icon:"🚙", weight:8, engines:["R4 1.6 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Hyundai", model:"Solaris", years:[2013,2014,2015,2016,2017], icon:"🚗", weight:10, engines:["R4 1.4 бензин","R4 1.6 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Kia", model:"Rio", years:[2013,2014,2015,2016,2017], icon:"🚗", weight:10, engines:["R4 1.4 бензин","R4 1.6 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Volkswagen", model:"Polo", years:[2013,2014,2015,2016,2017,2018], icon:"🚘", weight:9, engines:["R4 1.6 бензин","R4 1.4 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Skoda", model:"Rapid", years:[2014,2015,2016,2017,2018], icon:"🚗", weight:8, engines:["R4 1.6 бензин","R4 1.4 дизель"], transmissions:["МКПП","АКПП"] },

    // Средний класс
    { brand:"Kia", model:"Ceed", years:[2012,2013,2014,2015,2016], icon:"🚗", weight:9, engines:["R4 1.4 бензин","R4 1.6 бензин","R4 1.6 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Hyundai", model:"i30", years:[2012,2013,2014,2015,2016], icon:"🚗", weight:7, engines:["R4 1.4 бензин","R4 1.6 бензин","R4 1.6 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Hyundai", model:"Elantra", years:[2013,2014,2015,2016], icon:"🚘", weight:7, engines:["R4 1.6 бензин","R4 1.8 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Toyota", model:"Corolla", years:[2013,2014,2015,2016,2017], icon:"🚘", weight:8, engines:["R4 1.6 бензин","R4 1.8 бензин"], transmissions:["МКПП","CVT"] },
    { brand:"Toyota", model:"Camry", years:[2012,2013,2014,2015,2016,2017], icon:"🚘", weight:4, engines:["R4 2.0 бензин","R4 2.5 бензин"], transmissions:["АКПП"] },
    { brand:"Ford", model:"Focus", years:[2012,2013,2014,2015,2016,2017], icon:"🚗", weight:8, engines:["R4 1.6 бензин","R4 2.0 бензин","R4 1.6 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Ford", model:"Fiesta", years:[2013,2014,2015,2016,2017], icon:"🚗", weight:6, engines:["R4 1.6 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Mazda", model:"3", years:[2013,2014,2015,2016,2017], icon:"🚘", weight:7, engines:["R4 1.5 бензин","R4 2.0 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Mazda", model:"6", years:[2013,2014,2015,2016,2017], icon:"🚘", weight:5, engines:["R4 2.0 бензин","R4 2.5 бензин"], transmissions:["МКПП","АКПП"] },
    { brand:"Mitsubishi", model:"Lancer", years:[2012,2013,2014,2015,2016], icon:"🚘", weight:5, engines:["R4 1.6 бензин","R4 2.0 бензин"], transmissions:["МКПП","CVT"] },
    { brand:"Honda", model:"Civic", years:[2012,2013,2014,2015,2016], icon:"🚘", weight:5, engines:["R4 1.8 бензин"], transmissions:["МКПП","АКПП"] },

    // Кроссоверы
    { brand:"Nissan", model:"Qashqai", years:[2013,2014,2015,2016,2017], icon:"🚙", weight:8, engines:["R4 2.0 бензин","R4 1.6 дизель"], transmissions:["МКПП","CVT"] },
    { brand:"Nissan", model:"X-Trail", years:[2014,2015,2016,2017,2018], icon:"🚙", weight:5, engines:["R4 2.0 бензин","R4 2.0 дизель"], transmissions:["МКПП","CVT"] },
    { brand:"Renault", model:"Duster", years:[2013,2014,2015,2016,2017,2018], icon:"🚙", weight:7, engines:["R4 1.6 бензин","R4 2.0 бензин","R4 1.5 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Kia", model:"Sportage", years:[2012,2013,2014,2015,2016,2017], icon:"🚙", weight:6, engines:["R4 2.0 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Hyundai", model:"Tucson", years:[2016,2017,2018,2019], icon:"🚙", weight:5, engines:["R4 2.0 бензин","R4 1.7 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Toyota", model:"RAV4", years:[2013,2014,2015,2016,2017], icon:"🚙", weight:5, engines:["R4 2.0 бензин","R4 2.2 дизель"], transmissions:["МКПП","CVT"] },
    { brand:"Honda", model:"CR-V", years:[2013,2014,2015,2016,2017], icon:"🚙", weight:4, engines:["R4 2.0 бензин","R4 1.6 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Mitsubishi", model:"Outlander", years:[2013,2014,2015,2016,2017], icon:"🚙", weight:4, engines:["R4 2.0 бензин","R4 2.4 бензин"], transmissions:["CVT"] },
    { brand:"Volkswagen", model:"Tiguan", years:[2012,2013,2014,2015,2016,2017], icon:"🚙", weight:4, engines:["R4 1.4 бензин","R4 2.0 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Skoda", model:"Yeti", years:[2013,2014,2015,2016], icon:"🚙", weight:3, engines:["R4 1.8 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },

    // Более редкие / дорогие заказы
    { brand:"Volkswagen", model:"Passat", years:[2012,2013,2014,2015,2016], icon:"🚘", weight:3, engines:["R4 1.8 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Skoda", model:"Octavia", years:[2013,2014,2015,2016,2017], icon:"🚘", weight:4, engines:["R4 1.4 бензин","R4 1.8 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"BMW", model:"3 Series", years:[2012,2013,2014,2015,2016], icon:"🚘", weight:2, engines:["R4 2.0 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Mercedes-Benz", model:"C-Class", years:[2012,2013,2014,2015,2016], icon:"🚘", weight:2, engines:["R4 1.8 бензин","R4 2.1 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Audi", model:"A4", years:[2012,2013,2014,2015,2016], icon:"🚘", weight:2, engines:["R4 1.8 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Volvo", model:"XC60", years:[2012,2013,2014,2015,2016], icon:"🚙", weight:1, engines:["R4 2.0 бензин","R4 2.0 дизель"], transmissions:["МКПП","АКПП"] },
    { brand:"Lexus", model:"RX", years:[2012,2013,2014,2015,2016], icon:"🚙", weight:1, engines:["V6 3.5 бензин"], transmissions:["АКПП"] }
];


/* =========================================================
   БАЗА КЛИЕНТОВ
========================================================= */

const clients = [
    {
        name: "Алексей",
        type: "Обычный клиент",
        patience: 0.65,
        priceSensitivity: 0.55
    },
    {
        name: "Максим",
        type: "Экономный клиент",
        patience: 0.55,
        priceSensitivity: 0.85
    },
    {
        name: "Дмитрий",
        type: "Постоянный клиент",
        patience: 0.85,
        priceSensitivity: 0.45
    },
    {
        name: "Иван",
        type: "Требовательный клиент",
        patience: 0.45,
        priceSensitivity: 0.75
    },
    {
        name: "Сергей",
        type: "Автолюбитель",
        patience: 0.80,
        priceSensitivity: 0.35
    },
    {
        name: "Андрей",
        type: "Торгуется за каждую услугу",
        patience: 0.60,
        priceSensitivity: 0.95
    },
    {
        name: "Евгений",
        type: "Срочный клиент",
        patience: 0.35,
        priceSensitivity: 0.50
    },
    {
        name: "Николай",
        type: "Новый клиент",
        patience: 0.70,
        priceSensitivity: 0.60
    }
];


/* =========================================================
   БАЗА НЕИСПРАВНОСТЕЙ
========================================================= */

const problems = [
    // =========================================================
    // ЛЁГКИЕ И ОБСЛУЖИВАЮЩИЕ РАБОТЫ — чаще встречаются на старте
    // =========================================================
    {
        id:"oil_change_service", category:"maintenance", title:"Замена масла в двигателе", minLevel:1, difficulty:"🟢 Простая", weight:4,
        complaints:["Клиент хочет заменить моторное масло.","Подошёл срок плановой замены масла.","Клиент просит сделать замену масла и фильтра."],
        causes:[{id:"maintenance",name:"🛢️ Плановое обслуживание",probability:1}],
        checks:{visual:{name:"👀 Проверить состояние масла",time:5,equipment:0,results:{maintenance:"Масло потемнело, обслуживание по регламенту актуально."}}},
        repairs:{maintenance:{name:"Замена масла и масляного фильтра",partCost:1400,workCost:800,time:20,equipmentUse:1}}
    },
    {
        id:"battery_replacement_service", category:"maintenance", title:"Замена аккумулятора", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Клиент хочет заменить аккумулятор.","Старый аккумулятор уже плохо держит заряд.","Клиент решил заменить аккумулятор заранее."],
        causes:[{id:"battery",name:"🔋 Изношенный аккумулятор",probability:1}],
        checks:{battery:{name:"🔋 Проверить аккумулятор",time:5,equipment:1,toolId:"multimeter",results:{battery:"Ёмкость аккумулятора снижена. Рекомендуется замена."}}},
        repairs:{battery:{name:"Замена аккумулятора",partCost:5500,workCost:500,time:20,equipmentUse:1}}
    },
    {
        id:"windshield_replacement_service", category:"body", title:"Замена лобового стекла", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["На лобовом стекле появилась трещина.","После удара на стекле образовался скол.","Клиент хочет заменить повреждённое лобовое стекло."],
        causes:[{id:"glass",name:"🪟 Повреждение лобового стекла",probability:1}],
        checks:{visual:{name:"👀 Осмотреть лобовое стекло",time:5,equipment:0,results:{glass:"Обнаружена трещина/повреждение. Стекло рекомендуется заменить."}}},
        repairs:{glass:{name:"Замена лобового стекла",partCost:9500,workCost:3500,time:120,equipmentUse:2}}
    },
    {
        id:"ac_cleaning_service", category:"maintenance", title:"Очистка системы кондиционирования", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Из кондиционера появился неприятный запах.","При включении кондиционера в салоне чувствуется затхлый запах.","Клиент хочет провести профилактическую очистку кондиционера."],
        causes:[{id:"ac_cleaning",name:"❄️ Загрязнение системы кондиционирования",probability:1}],
        checks:{visual:{name:"👀 Проверить систему кондиционирования",time:5,equipment:0,results:{ac_cleaning:"Есть признаки загрязнения. Рекомендуется очистка системы."}}},
        repairs:{ac_cleaning:{name:"Очистка системы кондиционирования",partCost:400,workCost:1000,time:30,equipmentUse:1}}
    },
    {
        id:"cabin_filter_service", category:"maintenance", title:"Замена салонного фильтра", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Поток воздуха из печки стал слабее.","Клиент хочет заменить салонный фильтр.","В салоне появился пыльный запах."],
        causes:[{id:"cabin_filter",name:"🌬️ Загрязнён салонный фильтр",probability:1}],
        checks:{visual:{name:"👀 Проверить салонный фильтр",time:5,equipment:0,results:{cabin_filter:"Фильтр сильно загрязнён. Требуется замена."}}},
        repairs:{cabin_filter:{name:"Замена салонного фильтра",partCost:700,workCost:500,time:15,equipmentUse:0}}
    },
    {
        id:"air_filter_service", category:"maintenance", title:"Замена воздушного фильтра", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Клиент хочет заменить воздушный фильтр.","Фильтр давно не менялся.","При обслуживании решили заменить воздушный фильтр."],
        causes:[{id:"air_filter",name:"🌬️ Загрязнён воздушный фильтр",probability:1}],
        checks:{visual:{name:"👀 Осмотреть воздушный фильтр",time:5,equipment:0,results:{air_filter:"Фильтр заметно загрязнён. Рекомендуется замена."}}},
        repairs:{air_filter:{name:"Замена воздушного фильтра",partCost:650,workCost:450,time:15,equipmentUse:0}}
    },
    {
        id:"spark_plugs_service", category:"maintenance", title:"Замена свечей зажигания", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["Клиент хочет заменить свечи по регламенту.","Свечи давно не менялись.","Клиент просит профилактически заменить свечи."],
        causes:[{id:"spark_plugs",name:"🔥 Регламентная замена свечей",probability:1}],
        checks:{visual:{name:"👀 Проверить состояние свечей",time:8,equipment:0,results:{spark_plugs:"Свечи имеют заметный износ. Рекомендуется замена."}}},
        repairs:{spark_plugs:{name:"Замена свечей зажигания",partCost:1800,workCost:900,time:30,equipmentUse:1}}
    },
    {
        id:"wiper_replacement_service", category:"maintenance", title:"Замена дворников", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Дворники плохо очищают стекло.","На стекле остаются полосы после работы дворников.","Клиент хочет заменить щётки стеклоочистителя."],
        causes:[{id:"wipers",name:"🚗 Износ щёток стеклоочистителя",probability:1}],
        checks:{visual:{name:"👀 Проверить щётки стеклоочистителя",time:3,equipment:0,results:{wipers:"Резина щёток изношена. Требуется замена."}}},
        repairs:{wipers:{name:"Замена щёток стеклоочистителя",partCost:900,workCost:300,time:10,equipmentUse:0}}
    },
    {
        id:"bulb_replacement_service", category:"maintenance", title:"Замена лампы фары", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Перегорела лампа фары.","Одна из фар перестала светить.","Клиент просит заменить лампу."],
        causes:[{id:"bulb",name:"💡 Перегорела лампа",probability:1}],
        checks:{visual:{name:"👀 Проверить освещение",time:3,equipment:0,results:{bulb:"Одна из ламп не работает. Требуется замена."}}},
        repairs:{bulb:{name:"Замена лампы фары",partCost:700,workCost:350,time:10,equipmentUse:0}}
    },
    {
        id:"brake_fluid_service", category:"maintenance", title:"Замена тормозной жидкости", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["Подошёл срок замены тормозной жидкости.","Клиент хочет обновить тормозную жидкость.","Тормозная жидкость давно не менялась."],
        causes:[{id:"brake_fluid",name:"🛑 Плановое обслуживание тормозной системы",probability:1}],
        checks:{visual:{name:"👀 Проверить тормозную жидкость",time:5,equipment:0,results:{brake_fluid:"Жидкость потемнела. Рекомендуется плановая замена."}}},
        repairs:{brake_fluid:{name:"Замена тормозной жидкости",partCost:700,workCost:900,time:35,equipmentUse:1}}
    },
    {
        id:"coolant_service", category:"maintenance", title:"Замена охлаждающей жидкости", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["Клиент хочет заменить антифриз.","Подошёл срок обновления охлаждающей жидкости.","Охлаждающая жидкость давно не менялась."],
        causes:[{id:"coolant_service",name:"💧 Плановая замена ОЖ",probability:1}],
        checks:{visual:{name:"👀 Проверить состояние ОЖ",time:5,equipment:0,results:{coolant_service:"Состояние жидкости указывает на необходимость плановой замены."}}},
        repairs:{coolant_service:{name:"Замена охлаждающей жидкости",partCost:1200,workCost:900,time:40,equipmentUse:1}}
    },
    {
        id:"throttle_cleaning_service", category:"maintenance", title:"Очистка дроссельной заслонки", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["Клиент хочет провести профилактическую очистку дросселя.","Дроссель давно не обслуживался.","На холостом ходу иногда появляются небольшие колебания оборотов."],
        causes:[{id:"throttle_cleaning",name:"🔧 Загрязнение дроссельной заслонки",probability:1}],
        checks:{visual:{name:"👀 Осмотреть дроссель",time:8,equipment:0,results:{throttle_cleaning:"На дроссельной заслонке заметны загрязнения."}}},
        repairs:{throttle_cleaning:{name:"Очистка дроссельной заслонки",partCost:300,workCost:1200,time:40,equipmentUse:1,consumable:true,consumableName:"Очиститель дроссельной заслонки",consumableSupplier:"Расходный материал автосервиса",consumableIcon:"🧴"}}
    },
    {
        id:"tire_pressure_service", category:"maintenance", title:"Проверка и корректировка давления в шинах", minLevel:1, difficulty:"🟢 Простая", weight:3,
        complaints:["Клиент просит проверить давление в шинах.","Одна из шин выглядит немного приспущенной.","Перед дальней поездкой клиент хочет проверить давление."],
        causes:[{id:"pressure",name:"🛞 Неправильное давление в шине",probability:1}],
        checks:{pressure:{name:"🛞 Проверить давление в шинах",time:5,equipment:0,toolId:"tire_gauge",results:{pressure:"Давление отличается от рекомендованного. Требуется корректировка."}}},
        repairs:{pressure:{name:"Корректировка давления в шинах",partCost:0,workCost:350,time:10,serviceOnly:true,equipmentUse:0}}
    },
    {
        id:"brake_cleaning_service", category:"maintenance", title:"Очистка тормозного механизма", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["После торможения появился лёгкий скрип.","Клиент просит очистить тормозные механизмы.","После поездок в грязную погоду тормоза стали шумнее."],
        causes:[{id:"brake_cleaning",name:"🧹 Загрязнение тормозного механизма",probability:1}],
        checks:{visual:{name:"👀 Осмотреть тормозной механизм",time:8,equipment:0,results:{brake_cleaning:"В механизме заметны загрязнения. Рекомендуется очистка."}}},
        repairs:{brake_cleaning:{name:"Очистка тормозного механизма",partCost:250,workCost:1000,time:35,equipmentUse:1}}
    },
    {
        id:"battery_terminal_service", category:"maintenance", title:"Очистка клемм аккумулятора", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["На клеммах аккумулятора появился налёт.","Клиент хочет обслужить клеммы аккумулятора.","При осмотре заметно окисление клемм."],
        causes:[{id:"terminals",name:"🔋 Окисление клемм аккумулятора",probability:1}],
        checks:{visual:{name:"👀 Осмотреть клеммы аккумулятора",time:3,equipment:0,results:{terminals:"На клеммах обнаружены следы окисления."}}},
        repairs:{terminals:{name:"Очистка и обработка клемм аккумулятора",partCost:150,workCost:500,time:15,equipmentUse:0}}
    },
    {
        id:"headlight_restoration_service", category:"maintenance", title:"Восстановление прозрачности фар", minLevel:1, difficulty:"🟢 Простая", weight:2,
        complaints:["Фары стали мутными.","Свет фар кажется слабее из-за помутнения стекла.","Клиент хочет восстановить прозрачность фар."],
        causes:[{id:"headlights",name:"💡 Помутнение фар",probability:1}],
        checks:{visual:{name:"👀 Осмотреть фары",time:5,equipment:0,results:{headlights:"Поверхность фар помутнела. Возможна полировка/восстановление."}}},
        repairs:{headlights:{name:"Восстановление прозрачности фар",partCost:500,workCost:1400,time:60,equipmentUse:1}}
    },

    {
        id: "hard_start",
        category: "engine",
        fuelType: "petrol",
        title: "Трудный запуск двигателя",

        complaints: [
            "Машина плохо заводится утром.",
            "После ночной стоянки приходится долго крутить стартер.",
            "На холодную двигатель запускается не с первого раза."
        ],

        causes: [
            {
                id: "battery",
                name: "🔋 Слабый аккумулятор",
                probability: 0.25
            },
            {
                id: "spark",
                name: "🔥 Износ свечей зажигания",
                probability: 0.35
            },
            {
                id: "fuel",
                name: "⛽ Недостаточное давление топлива",
                probability: 0.20
            },
            {
                id: "sensor",
                name: "💻 Неисправность датчика температуры",
                probability: 0.20
            }
        ],

        checks: {
            visual: {
                name: "👀 Визуальный осмотр",
                time: 5,
                equipment: 0,
                results: {
                    battery:
                        "Внешних повреждений аккумулятора не обнаружено.",
                    spark:
                        "Явных внешних повреждений нет.",
                    fuel:
                        "Следов утечки топлива нет.",
                    sensor:
                        "Визуально система выглядит исправной."
                }
            },

            battery: {
                name: "🔋 Проверить аккумулятор",
                time: 5,
                equipment: 1,
                results: {
                    battery:
                        "Напряжение при запуске заметно проседает. Аккумулятор требует дальнейшей проверки.",
                    spark:
                        "Напряжение аккумулятора в норме.",
                    fuel:
                        "Аккумулятор работает в штатном режиме.",
                    sensor:
                        "Напряжение аккумулятора в норме."
                }
            },

            spark: {
                name: "🔥 Проверить свечи",
                time: 10,
                equipment: 1,
                results: {
                    battery:
                        "Свечи имеют небольшой износ, но критических проблем не обнаружено.",
                    spark:
                        "Свечи имеют сильный износ. Электроды загрязнены.",
                    fuel:
                        "Свечи в удовлетворительном состоянии.",
                    sensor:
                        "Свечи имеют нормальное состояние."
                }
            },

            fuel: {
                name: "⛽ Проверить давление топлива",
                time: 20,
                equipment: 3,
                results: {
                    battery:
                        "Давление топлива соответствует норме.",
                    spark:
                        "Давление топлива соответствует норме.",
                    fuel:
                        "Давление топлива ниже нормы.",
                    sensor:
                        "Давление топлива соответствует норме."
                }
            },

            obd: {
                name: "💻 Сканирование OBD",
                time: 10,
                equipment: 2,
                results: {
                    battery:
                        "Критических кодов двигателя нет.",
                    spark:
                        "Критических кодов двигателя нет.",
                    fuel:
                        "Критических кодов двигателя нет.",
                    sensor:
                        "Обнаружен код, связанный с температурным датчиком."
                }
            }
        },

        repairs: {
            battery: {
                name: "Аккумулятор",
                partCost: 5500,
                workCost: 700,
                time: 20
            },
            spark: {
                name: "Комплект свечей зажигания",
                partCost: 2500,
                workCost: 1000,
                time: 30
            },
            fuel: {
                name: "Топливный насос",
                partCost: 6500,
                workCost: 2500,
                time: 90
            },
            sensor: {
                name: "Датчик температуры ОЖ",
                partCost: 1800,
                workCost: 900,
                time: 40
            }
        }
    },


    {
        id: "rough_idle",
        category: "engine",
        title: "Неровная работа двигателя",

        complaints: [
            "На холостом ходу двигатель работает неровно.",
            "Обороты иногда плавают.",
            "На светофоре двигатель начинает вибрировать."
        ],

        causes: [
            {
                id: "air",
                name: "💨 Подсос воздуха",
                probability: 0.30
            },
            {
                id: "throttle",
                name: "🔧 Загрязнение дроссельной заслонки",
                probability: 0.30
            },
            {
                id: "spark",
                name: "🔥 Пропуски зажигания",
                probability: 0.25
            },
            {
                id: "injector",
                name: "⛽ Загрязнение форсунки",
                probability: 0.15
            }
        ],

        checks: {
            visual: {
                name: "👀 Осмотр впуска",
                time: 5,
                equipment: 0,
                results: {
                    air:
                        "Обнаружены подозрительные места на вакуумном шланге.",
                    throttle:
                        "Внешних повреждений не обнаружено.",
                    spark:
                        "Визуально всё выглядит нормально.",
                    injector:
                        "Следов внешних повреждений нет."
                }
            },

            obd: {
                name: "💻 OBD и Live Data",
                time: 15,
                equipment: 2,
                results: {
                    air:
                        "Коррекции топлива значительно увеличены.",
                    throttle:
                        "Параметры дросселя требуют дополнительной проверки.",
                    spark:
                        "Обнаружены эпизодические пропуски воспламенения.",
                    injector:
                        "Параметры двигателя не дают однозначного ответа."
                }
            },

            throttle: {
                name: "🔧 Проверить дроссель",
                time: 20,
                equipment: 1,
                results: {
                    air:
                        "Дроссель загрязнён умеренно.",
                    throttle:
                        "Дроссельная заслонка сильно загрязнена.",
                    spark:
                        "Дроссель загрязнён незначительно.",
                    injector:
                        "Дроссель работает нормально."
                }
            },

            smoke: {
                name: "💨 Дымогенератор",
                time: 25,
                equipment: 4,
                results: {
                    air:
                        "Обнаружена утечка воздуха во впускной системе.",
                    throttle:
                        "Утечек воздуха не обнаружено.",
                    spark:
                        "Утечек воздуха не обнаружено.",
                    injector:
                        "Утечек воздуха не обнаружено."
                }
            }
        },

        repairs: {
            air: {
                name: "Устранение подсоса воздуха",
                partCost: 700,
                workCost: 1800,
                time: 50
            },
            throttle: {
                name: "Очистка дроссельной заслонки",
                partCost: 300,
                workCost: 1500,
                time: 60
            },
            spark: {
                name: "Ремонт системы зажигания",
                partCost: 2800,
                workCost: 1700,
                time: 60
            },
            injector: {
                name: "Чистка форсунки",
                partCost: 1200,
                workCost: 2200,
                time: 80
            }
        }
    },


    {
        id: "suspension_noise",
        category: "suspension",
        title: "Стук в передней подвеске",

        complaints: [
            "Спереди появился стук на кочках.",
            "На неровной дороге слышен глухой стук.",
            "При проезде лежачих полицейских что-то стучит."
        ],

        causes: [
            {
                id: "stabilizer",
                name: "🛞 Стойка стабилизатора",
                probability: 0.35
            },
            {
                id: "bushing",
                name: "🔩 Втулки стабилизатора",
                probability: 0.25
            },
            {
                id: "ball",
                name: "⚙️ Шаровая опора",
                probability: 0.20
            },
            {
                id: "shock",
                name: "🛞 Амортизатор",
                probability: 0.20
            }
        ],

        checks: {
            visual: {
                name: "👀 Визуальный осмотр",
                time: 10,
                equipment: 0,
                results: {
                    stabilizer:
                        "Визуально обнаружены следы износа стойки стабилизатора.",
                    bushing:
                        "Втулки имеют заметные следы старения.",
                    ball:
                        "Визуальных признаков критического износа нет.",
                    shock:
                        "Следов явной течи амортизатора нет."
                }
            },

            lift: {
                name: "🔧 Проверка на подъёмнике",
                time: 15,
                equipment: 1,
                results: {
                    stabilizer:
                        "Стойка стабилизатора имеет люфт.",
                    bushing:
                        "Втулки имеют люфт и деформацию.",
                    ball:
                        "Шаровая опора имеет небольшой люфт.",
                    shock:
                        "Крепления исправны."
                }
            },

            shock: {
                name: "🛞 Проверить амортизатор",
                time: 15,
                equipment: 1,
                results: {
                    stabilizer:
                        "Амортизатор работает удовлетворительно.",
                    bushing:
                        "Амортизатор работает нормально.",
                    ball:
                        "Амортизатор исправен.",
                    shock:
                        "Эффективность амортизатора снижена."
                }
            }
        },

        repairs: {
            stabilizer: {
                name: "Стойка стабилизатора",
                partCost: 1800,
                workCost: 1400,
                time: 45
            },
            bushing: {
                name: "Комплект втулок стабилизатора",
                partCost: 900,
                workCost: 1300,
                time: 40
            },
            ball: {
                name: "Шаровая опора",
                partCost: 2500,
                workCost: 1800,
                time: 60
            },
            shock: {
                name: "Амортизатор",
                partCost: 4500,
                workCost: 2200,
                time: 70
            }
        }
    },


    {
        id: "check_engine",
        category: "obd",
        title: "Загорелся Check Engine",

        complaints: [
            "Загорелся Check Engine.",
            "На панели появился жёлтый значок двигателя.",
            "Машина едет нормально, но горит ошибка двигателя."
        ],

        causes: [
            {
                id: "misfire",
                name: "🔥 Пропуски зажигания",
                probability: 0.30
            },
            {
                id: "lambda",
                name: "💻 Лямбда-зонд",
                probability: 0.25
            },
            {
                id: "maf",
                name: "💨 Датчик расхода воздуха",
                probability: 0.20
            },
            {
                id: "evap",
                name: "⛽ Система EVAP",
                probability: 0.25
            }
        ],

        checks: {
            obd: {
                name: "💻 Сканирование OBD-II",
                time: 10,
                equipment: 2,
                results: {
                    misfire:
                        "Обнаружен код P0301 — пропуски воспламенения цилиндра №1.",
                    lambda:
                        "Обнаружен код, связанный с работой кислородного датчика.",
                    maf:
                        "Параметры расходомера воздуха выходят за ожидаемый диапазон.",
                    evap:
                        "Обнаружен код, связанный с системой EVAP."
                }
            },

            live: {
                name: "📊 Проверить Live Data",
                time: 15,
                equipment: 2,
                results: {
                    misfire:
                        "Параметры указывают на нестабильность работы одного цилиндра.",
                    lambda:
                        "Сигнал кислородного датчика работает нестабильно.",
                    maf:
                        "Показания расхода воздуха отличаются от ожидаемых.",
                    evap:
                        "Параметры двигателя в целом стабильны."
                }
            },

            visual: {
                name: "👀 Осмотр двигателя",
                time: 10,
                equipment: 0,
                results: {
                    misfire:
                        "Визуально явных повреждений нет.",
                    lambda:
                        "Проводка датчика выглядит нормально.",
                    maf:
                        "Разъём расходомера установлен.",
                    evap:
                        "Явных повреждений шлангов не обнаружено."
                }
            }
        },

        repairs: {
            misfire: {
                name: "Ремонт системы зажигания",
                partCost: 3200,
                workCost: 1800,
                time: 60
            },
            lambda: {
                name: "Кислородный датчик",
                partCost: 4200,
                workCost: 1500,
                time: 50
            },
            maf: {
                name: "Датчик расхода воздуха",
                partCost: 5000,
                workCost: 1600,
                time: 45
            },
            evap: {
                name: "Ремонт системы EVAP",
                partCost: 1500,
                workCost: 1800,
                time: 60
            }
        }
    },


    {
        id: "overheat",
        category: "cooling",
        title: "Перегрев двигателя",

        complaints: [
            "Температура двигателя стала выше обычного.",
            "В пробке машина начинает перегреваться.",
            "Из-под капота идёт горячий воздух."
        ],

        causes: [
            {
                id: "coolant",
                name: "💧 Низкий уровень охлаждающей жидкости",
                probability: 0.30
            },
            {
                id: "thermostat",
                name: "🌡️ Неисправен термостат",
                probability: 0.25
            },
            {
                id: "fan",
                name: "🌀 Не работает вентилятор",
                probability: 0.25
            },
            {
                id: "radiator",
                name: "❄️ Забит радиатор",
                probability: 0.20
            }
        ],

        checks: {
            coolant: {
                name: "💧 Проверить уровень ОЖ",
                time: 5,
                equipment: 0,
                results: {
                    coolant:
                        "Уровень охлаждающей жидкости значительно ниже нормы.",
                    thermostat:
                        "Уровень ОЖ в норме.",
                    fan:
                        "Уровень ОЖ в норме.",
                    radiator:
                        "Уровень ОЖ немного ниже нормы."
                }
            },

            temperature: {
                name: "🌡️ Проверить температуру",
                time: 10,
                equipment: 1,
                results: {
                    coolant:
                        "Температура двигателя повышена.",
                    thermostat:
                        "Двигатель перегревается из-за неправильной циркуляции.",
                    fan:
                        "Температура резко растёт при остановке.",
                    radiator:
                        "Температура повышена при нагрузке."
                }
            },

            fan: {
                name: "🌀 Проверить вентилятор",
                time: 10,
                equipment: 1,
                results: {
                    coolant:
                        "Вентилятор включается штатно.",
                    thermostat:
                        "Вентилятор работает.",
                    fan:
                        "Вентилятор не включается при достижении температуры.",
                    radiator:
                        "Вентилятор работает."
                }
            },

            radiator: {
                name: "❄️ Проверить радиатор",
                time: 15,
                equipment: 1,
                results: {
                    coolant:
                        "Радиатор в удовлетворительном состоянии.",
                    thermostat:
                        "Радиатор прогревается неравномерно.",
                    fan:
                        "Радиатор исправен.",
                    radiator:
                        "Проходимость радиатора снижена."
                }
            }
        },

        repairs: {
            coolant: {
                name: "Устранение утечки и замена ОЖ",
                partCost: 1800,
                workCost: 1700,
                time: 60
            },
            thermostat: {
                name: "Термостат",
                partCost: 2600,
                workCost: 1800,
                time: 70
            },
            fan: {
                name: "Вентилятор охлаждения",
                partCost: 4800,
                workCost: 1800,
                time: 60
            },
            radiator: {
                name: "Радиатор охлаждения",
                partCost: 6500,
                workCost: 2500,
                time: 100
            }
        }
    },


    {
        id: "braking_noise",
        category: "brakes",
        title: "Шум при торможении",

        complaints: [
            "При торможении появился скрип.",
            "Тормоза начали издавать неприятный звук.",
            "При торможении слышен металлический шум."
        ],

        causes: [
            {
                id: "pads",
                name: "🛑 Износ тормозных колодок",
                probability: 0.45
            },
            {
                id: "disc",
                name: "⚙️ Износ тормозного диска",
                probability: 0.25
            },
            {
                id: "caliper",
                name: "🔧 Закисший суппорт",
                probability: 0.15
            },
            {
                id: "debris",
                name: "🪨 Посторонний предмет",
                probability: 0.15
            }
        ],

        checks: {
            visual: {
                name: "👀 Осмотр тормозов",
                time: 10,
                equipment: 0,
                results: {
                    pads:
                        "Толщина колодок близка к минимально допустимой.",
                    disc:
                        "На диске заметна выраженная выработка.",
                    caliper:
                        "Суппорт имеет признаки загрязнения.",
                    debris:
                        "Обнаружены следы постороннего предмета."
                }
            },

            brake: {
                name: "🛑 Проверить тормозной механизм",
                time: 15,
                equipment: 1,
                results: {
                    pads:
                        "Колодки изношены неравномерно.",
                    disc:
                        "Рабочая поверхность диска имеет глубокую выработку.",
                    caliper:
                        "Суппорт работает с повышенным сопротивлением.",
                    debris:
                        "Механизм исправен."
                }
            }
        },

        repairs: {
            pads: {
                name: "Комплект тормозных колодок",
                partCost: 2800,
                workCost: 1400,
                time: 45
            },
            disc: {
                name: "Тормозные диски",
                partCost: 5200,
                workCost: 1800,
                time: 70
            },
            caliper: {
                name: "Обслуживание суппорта",
                partCost: 1000,
                workCost: 2200,
                time: 70
            },
            debris: {
                name: "Удаление постороннего предмета",
                partCost: 0,
                workCost: 800,
                time: 20
            }
        }
    }

    ,{
        id: "pulling_side", category: "suspension", title: "Автомобиль уводит в сторону",
        complaints: [
            "После отпускания руля автомобиль начинает уходить вправо.",
            "Машину тянет в сторону на ровной дороге.",
            "После ремонта подвески руль стоит неровно и автомобиль уводит в сторону."
        ],
        causes: [
            { id: "alignment", name: "📐 Нарушены углы установки колёс", probability: 0.45 },
            { id: "pressure", name: "🛞 Разное давление в шинах", probability: 0.25 },
            { id: "suspension", name: "⚙️ Люфт элемента подвески", probability: 0.20 },
            { id: "tire", name: "🛞 Неравномерный износ / проблема шины", probability: 0.10 }
        ],
        checks: {
            visual: { name: "👀 Осмотреть шины и подвеску", time: 8, equipment: 0, results: {
                alignment: "Явных повреждений нет. После осмотра рекомендуется проверить углы установки колёс.",
                pressure: "Визуально одна из шин выглядит немного иначе. Нужна проверка давления.",
                suspension: "Обнаружены подозрительные следы износа. Нужна проверка подвески.",
                tire: "На одной из шин заметен неравномерный износ."
            }},
            pressure: { name: "🛞 Проверить давление в шинах", time: 5, equipment: 1, toolId: "tire_gauge", results: {
                alignment: "Давление в шинах соответствует норме.", pressure: "Давление в одной из шин заметно отличается от нормы.", suspension: "Давление в шинах соответствует норме.", tire: "Давление немного отличается, но не объясняет выраженный увод."
            }},
            suspension: { name: "⚙️ Проверить подвеску", time: 15, equipment: 2, toolId: "basic", results: {
                alignment: "Люфтов, способных объяснить увод, не обнаружено.", pressure: "Подвеска без явных люфтов.", suspension: "Обнаружен люфт в элементе подвески. Сначала требуется устранить его.", tire: "Подвеска без критических люфтов."
            }},
            alignment: { name: "📐 Проверить развал-схождение", time: 25, equipment: 4, toolId: "alignment", results: {
                alignment: "Углы установки передних колёс вышли за допустимый диапазон. Требуется регулировка.",
                pressure: "Углы установки колёс близки к норме. Причина, вероятнее всего, в шинах/давлении.",
                suspension: "Углы установки нарушены, но перед регулировкой необходимо устранить люфт подвески.",
                tire: "Углы установки в норме. Причину нужно искать в состоянии шин."
            }}
        },
        repairs: {
            alignment: { name: "Развал-схождение", partCost: 0, workCost: 2500, time: 50, serviceOnly: true },
            pressure: { name: "Восстановление давления в шинах", partCost: 0, workCost: 400, time: 10, serviceOnly: true },
            suspension: { name: "Ремонт элемента подвески", partCost: 3500, workCost: 2200, time: 70 },
            tire: { name: "Шина", partCost: 5200, workCost: 900, time: 35 }
        }
    },

    {
        id: "brake_squeal",
        category: "brakes",
        title: "Скрип при торможении",
        minLevel: 1,
        difficulty: "🟢 Простая",
        complaints: ["При торможении появился скрип.", "Тормоза начали неприятно пищать.", "После прогрева тормоза скрипят сильнее."],
        causes: [
            {id:"pads", name:"🛑 Износ тормозных колодок", probability:.40},
            {id:"dust", name:"🧹 Загрязнение тормозного механизма", probability:.30},
            {id:"disc", name:"⚙️ Износ тормозного диска", probability:.20},
            {id:"caliper", name:"🔧 Подклинивание суппорта", probability:.10}
        ],
        checks: {
            visual:{name:"👀 Осмотр тормозов",time:10,equipment:0,results:{pads:"Колодки заметно изношены.",dust:"В механизме много загрязнений.",disc:"На диске виден выраженный износ.",caliper:"Визуально нужна дополнительная проверка суппорта."}},
            lift:{name:"🏗️ Осмотр на подъёмнике",time:12,equipment:1,toolId:"lift",results:{pads:"Остаток колодок небольшой.",dust:"Механизм загрязнён, критического износа диска нет.",disc:"Диск имеет выраженный износ.",caliper:"Суппорт имеет признаки подклинивания."}},
            brake_test:{name:"🛑 Проверка тормозного механизма",time:15,equipment:2,results:{pads:"Работа механизма соответствует износу колодок.",dust:"После очистки механизм должен работать штатно.",disc:"Есть выраженные следы неравномерного контакта.",caliper:"Механизм суппорта работает с заметным сопротивлением."}}
        },
        repairs:{pads:{name:"Замена тормозных колодок",partCost:3200,workCost:1400,time:45},dust:{name:"Очистка тормозного механизма",partCost:300,workCost:1200,time:40},disc:{name:"Замена тормозных дисков",partCost:6500,workCost:2200,time:90},caliper:{name:"Ремонт тормозного суппорта",partCost:4500,workCost:2800,time:120}}
    },
    {
        id: "brake_vibration",
        category: "brakes",
        title: "Вибрация при торможении",
        minLevel: 3,
        difficulty: "🟡 Средняя",
        complaints: ["При торможении на скорости бьёт в руль.", "Педаль тормоза слегка пульсирует.", "При торможении появляется вибрация."],
        causes:[
            {id:"warped_disc",name:"🛑 Неравномерность тормозного диска",probability:.45},
            {id:"hub",name:"⚙️ Проблема с посадкой диска/ступицей",probability:.20},
            {id:"caliper",name:"🔧 Неравномерная работа суппорта",probability:.20},
            {id:"suspension",name:"🛞 Люфт элемента передней подвески",probability:.15}
        ],
        checks:{
            road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{warped_disc:"Вибрация усиливается при торможении с высокой скорости.",hub:"Вибрация сохраняется и требует проверки ступицы.",caliper:"Торможение сопровождается неравномерным поведением.",suspension:"Есть ощущение дополнительного люфта в передней части."}},
            lift:{name:"🏗️ Проверка на подъёмнике",time:15,equipment:1,toolId:"lift",results:{warped_disc:"Подвеска без выраженного люфта, нужен контроль тормозного диска.",hub:"Посадка диска/ступицы требует проверки.",caliper:"Суппорт требует дополнительной проверки.",suspension:"Обнаружен люфт элемента подвески."}},
            brake_test:{name:"🛑 Проверка тормозного механизма",time:20,equipment:2,results:{warped_disc:"Есть выраженная неравномерность тормозного диска.",hub:"Есть подозрение на биение посадочной поверхности.",caliper:"Работа суппорта неравномерна.",suspension:"Тормозной механизм работает нормально."}}
        },
        repairs:{warped_disc:{name:"Замена тормозных дисков",partCost:7000,workCost:2400,time:100},hub:{name:"Проверка и обслуживание ступицы",partCost:3800,workCost:1800,time:80},caliper:{name:"Ремонт суппорта",partCost:4500,workCost:2600,time:120},suspension:{name:"Ремонт элемента передней подвески",partCost:4200,workCost:2200,time:100}}
    },
    {
        id:"car_pulls",
        category:"suspension",
        title:"Автомобиль уводит в сторону",
        minLevel:2,
        difficulty:"🟡 Средняя",
        complaints:["Машину тянет вправо.","После отпускания руля автомобиль уходит влево.","На ровной дороге машина не держит направление."],
        causes:[
            {id:"pressure",name:"🛞 Неправильное давление в шине",probability:.25},
            {id:"alignment",name:"📐 Нарушены углы установки колёс",probability:.40},
            {id:"tire",name:"🛞 Неравномерный износ/деформация шины",probability:.20},
            {id:"suspension",name:"🔩 Люфт элемента подвески",probability:.15}
        ],
        checks:{
            visual:{name:"👀 Осмотр шин",time:5,equipment:0,results:{pressure:"Внешне шины выглядят нормально.",alignment:"Шины без явных повреждений.",tire:"Есть неравномерный износ протектора.",suspension:"Нужна дальнейшая проверка подвески."}},
            tire_pressure:{name:"🛞 Проверить давление",time:5,equipment:0,toolId:"tire_gauge",results:{pressure:"Давление отличается от нормы.",alignment:"Давление в норме.",tire:"Давление в норме.",suspension:"Давление в норме."}},
            lift:{name:"🏗️ Проверка подвески",time:15,equipment:1,toolId:"lift",results:{pressure:"Люфтов не обнаружено.",alignment:"Люфтов не обнаружено.",tire:"Подвеска исправна.",suspension:"Обнаружен люфт элемента подвески."}},
            alignment:{name:"📐 Проверить развал-схождение",time:35,equipment:2,toolId:"alignment",results:{pressure:"Углы установки колёс близки к норме.",alignment:"Обнаружено нарушение углов установки колёс.",tire:"Углы в норме, причина в состоянии шины.",suspension:"Углы требуют регулировки после ремонта подвески."}}
        },
        repairs:{pressure:{name:"Корректировка давления в шинах",partCost:0,workCost:400,time:10,serviceOnly:true},alignment:{name:"Развал-схождение",partCost:0,workCost:1800,time:60,serviceOnly:true},tire:{name:"Замена проблемной шины",partCost:6500,workCost:1000,time:45},suspension:{name:"Ремонт элемента подвески",partCost:4200,workCost:2200,time:100}}
    },
    {
        id:"wheel_vibration",
        category:"suspension",
        title:"Вибрация на скорости",
        minLevel:3,
        difficulty:"🟡 Средняя",
        complaints:["После 90 км/ч появляется вибрация.","На трассе начинает трясти руль.","На скорости ощущается вибрация кузова."],
        causes:[
            {id:"balance",name:"⚖️ Нарушена балансировка колёс",probability:.45},
            {id:"tire",name:"🛞 Деформация шины",probability:.25},
            {id:"disc",name:"⚙️ Погнут диск",probability:.20},
            {id:"hub",name:"🔩 Люфт ступичного узла",probability:.10}
        ],
        checks:{road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{balance:"Вибрация появляется в определённом диапазоне скорости.",tire:"Вибрация ощущается сильнее на одном колесе.",disc:"Есть характерная вибрация вращающегося колеса.",hub:"Вибрация сопровождается шумом."}},visual:{name:"👀 Осмотр колёс",time:5,equipment:0,results:{balance:"Внешних повреждений не видно.",tire:"Есть подозрение на деформацию шины.",disc:"Диск имеет признаки удара.",hub:"Внешне узел без явных повреждений."}},balancer:{name:"⚖️ Балансировка колеса",time:25,equipment:2,toolId:"balancer",results:{balance:"Выявлен заметный дисбаланс.",tire:"Балансировка не устраняет проблему полностью.",disc:"Есть отклонение геометрии диска.",hub:"Балансировка в пределах нормы."}},lift:{name:"🏗️ Проверка ступицы",time:15,equipment:1,toolId:"lift",results:{balance:"Люфта ступицы нет.",tire:"Ступица исправна.",disc:"Ступица исправна.",hub:"Обнаружен люфт ступичного узла."}}},
        repairs:{balance:{name:"Балансировка колёс",partCost:0,workCost:1600,time:50,serviceOnly:true},tire:{name:"Замена шины",partCost:6500,workCost:1000,time:45},disc:{name:"Замена колёсного диска",partCost:8500,workCost:900,time:35},hub:{name:"Замена ступичного подшипника",partCost:5200,workCost:2600,time:120}}
    },
    {
        id:"coolant_leak",category:"cooling",title:"Утечка антифриза",minLevel:2,difficulty:"🟡 Средняя",
        complaints:["Уходит антифриз.","Под машиной появились следы охлаждающей жидкости.","Приходится постоянно доливать антифриз."],
        causes:[{id:"hose",name:"💧 Течь патрубка",probability:.30},{id:"radiator",name:"💧 Течь радиатора",probability:.25},{id:"pump",name:"⚙️ Течь водяной помпы",probability:.25},{id:"thermostat",name:"🌡️ Течь корпуса термостата",probability:.20}],
        checks:{visual:{name:"👀 Осмотр системы охлаждения",time:8,equipment:0,results:{hose:"Следы антифриза видны возле патрубка.",radiator:"Есть следы жидкости возле радиатора.",pump:"Внешне есть подозрение на течь помпы.",thermostat:"Следы жидкости возле корпуса термостата."}},pressure:{name:"💧 Проверка системы под давлением",time:20,equipment:2,toolId:"manometer",results:{hose:"Давление падает, течь локализуется на патрубке.",radiator:"Давление падает, радиатор негерметичен.",pump:"Течь усиливается в районе помпы.",thermostat:"Негерметичен корпус термостата."}},obd:{name:"💻 Сканирование температуры",time:10,equipment:2,toolId:"obd",results:{hose:"Температура пока в норме.",radiator:"Температура повышается при нагрузке.",pump:"Температура повышается быстрее нормы.",thermostat:"Температура прогрева отклоняется от нормы."}}},
        repairs:{hose:{name:"Замена патрубка системы охлаждения",partCost:1600,workCost:1000,time:45},radiator:{name:"Замена радиатора",partCost:8500,workCost:2800,time:150},pump:{name:"Замена водяной помпы",partCost:6500,workCost:4500,time:180},thermostat:{name:"Замена термостата",partCost:2200,workCost:1400,time:70}}
    },
    {
        id:"charging_problem",category:"electrics",title:"Генератор плохо заряжает аккумулятор",minLevel:3,difficulty:"🟡 Средняя",
        complaints:["На панели горит лампа аккумулятора.","После поездки аккумулятор снова разряжается.","Напряжение зарядки кажется низким."],
        causes:[{id:"alternator",name:"⚡ Неисправность генератора",probability:.40},{id:"belt",name:"🔧 Проблема с приводным ремнём",probability:.20},{id:"ground",name:"🔌 Плохой контакт массы",probability:.20},{id:"battery",name:"🔋 Изношенный аккумулятор",probability:.20}],
        checks:{visual:{name:"👀 Осмотр приводного ремня",time:5,equipment:0,results:{alternator:"Ремень визуально исправен.",belt:"Ремень имеет трещины и следы износа.",ground:"Ремень исправен.",battery:"Ремень исправен."}},voltage:{name:"📟 Измерить напряжение",time:10,equipment:1,toolId:"multimeter",results:{alternator:"Зарядное напряжение ниже нормы.",belt:"Напряжение нестабильно из-за привода.",ground:"Падение напряжения обнаружено по массе.",battery:"Генератор заряжает, но аккумулятор плохо держит заряд."}},obd:{name:"💻 Проверить параметры зарядки",time:10,equipment:2,toolId:"obd",results:{alternator:"Есть признаки проблемы системы зарядки.",belt:"Параметры меняются при изменении оборотов.",ground:"Электронных ошибок нет.",battery:"Система зарядки в целом работает."}}},
        repairs:{alternator:{name:"Ремонт/замена генератора",partCost:9500,workCost:3500,time:150},belt:{name:"Замена приводного ремня",partCost:1800,workCost:900,time:40},ground:{name:"Восстановление контакта массы",partCost:300,workCost:900,time:35},battery:{name:"Замена аккумулятора",partCost:6500,workCost:500,time:20}}
    },
    {
        id:"starter_no_crank",category:"electrics",title:"Стартер не крутит двигатель",minLevel:2,difficulty:"🟡 Средняя",
        complaints:["При повороте ключа стартер молчит.","Слышен только щелчок.","Двигатель не проворачивается стартером."],
        causes:[{id:"battery",name:"🔋 Слабый аккумулятор",probability:.30},{id:"starter",name:"⚡ Неисправен стартер",probability:.35},{id:"ground",name:"🔌 Плохая масса",probability:.20},{id:"relay",name:"🔌 Неисправность реле/управления стартером",probability:.15}],
        checks:{battery:{name:"🔋 Проверить аккумулятор",time:5,equipment:1,toolId:"multimeter",results:{battery:"Напряжение проседает при попытке запуска.",starter:"Аккумулятор в норме.",ground:"Аккумулятор в норме.",relay:"Аккумулятор в норме."}},visual:{name:"👀 Осмотр клемм и массы",time:5,equipment:0,results:{battery:"Клеммы выглядят исправно.",starter:"Клеммы исправны.",ground:"Контакт массы загрязнён.",relay:"Клеммы исправны."}},starter_test:{name:"⚡ Проверить цепь стартера",time:15,equipment:2,toolId:"multimeter",results:{battery:"Сигнал на стартер приходит, проблема связана с питанием.",starter:"На стартер приходит питание, но он не работает.",ground:"Падение напряжения по массе.",relay:"Сигнал управления стартером отсутствует."}}},
        repairs:{battery:{name:"Замена аккумулятора",partCost:6500,workCost:500,time:20},starter:{name:"Ремонт стартера",partCost:7500,workCost:2800,time:120},ground:{name:"Восстановление массы",partCost:300,workCost:900,time:35},relay:{name:"Ремонт цепи управления стартером",partCost:900,workCost:1800,time:80}}
    },
    {
        id:"check_engine_misfire",category:"engine",title:"Check Engine и пропуски зажигания",minLevel:4,difficulty:"🟠 Сложная",
        complaints:["Загорелся Check Engine, двигатель троит.","При разгоне появились рывки и загорелся Check Engine.","Двигатель работает неровно, иногда мигает лампа неисправности."],
        causes:[{id:"spark",name:"🔥 Свеча зажигания",probability:.30},{id:"coil",name:"⚡ Катушка зажигания",probability:.30},{id:"injector",name:"⛽ Форсунка",probability:.20},{id:"compression",name:"🔧 Низкая компрессия",probability:.20}],
        checks:{obd:{name:"💻 OBD-II и коды P030x",time:10,equipment:2,toolId:"obd",results:{spark:"Обнаружен пропуск в одном цилиндре. Требуется проверка свечи.",coil:"Обнаружен пропуск в одном цилиндре. Требуется проверка катушки.",injector:"Обнаружен пропуск. Требуется проверка топливной системы.",compression:"Обнаружен устойчивый пропуск. Требуется механическая проверка."}},freeze:{name:"📸 Freeze Frame",time:10,equipment:2,toolId:"obd",results:{spark:"Пропуск фиксируется при нагрузке.",coil:"Пропуск повторяется при разгоне.",injector:"Пропуск связан с определённым режимом работы.",compression:"Пропуск стабилен в разных режимах."}},compression:{name:"📈 Измерить компрессию",time:25,equipment:3,toolId:"manometer",results:{spark:"Компрессия в норме.",coil:"Компрессия в норме.",injector:"Компрессия в норме.",compression:"Компрессия заметно ниже нормы в проблемном цилиндре."}},spark_test:{name:"🔥 Проверить свечу и катушку",time:20,equipment:1,results:{spark:"Свеча имеет выраженный износ.",coil:"Катушка работает нестабильно.",injector:"Свеча и катушка исправны.",compression:"Свеча и катушка исправны."}}},
        repairs:{spark:{name:"Замена свечей зажигания",partCost:2800,workCost:1100,time:35},coil:{name:"Замена катушки зажигания",partCost:4200,workCost:900,time:30},injector:{name:"Диагностика и чистка форсунки",partCost:3500,workCost:2400,time:100},compression:{name:"Ремонт двигателя по причине низкой компрессии",partCost:15000,workCost:12000,time:480}}
    },
    {
        id:"oil_leak",category:"engine",title:"Течь моторного масла",minLevel:2,difficulty:"🟡 Средняя",
        complaints:["Под машиной появились масляные пятна.","Двигатель начал расходовать масло и есть следы течи.","После стоянки остаются капли масла."],
        causes:[{id:"valve_cover",name:"🛢️ Прокладка клапанной крышки",probability:.30},{id:"sump",name:"🛢️ Герметичность поддона",probability:.25},{id:"seal",name:"🛢️ Сальник двигателя",probability:.25},{id:"filter",name:"🛢️ Течь в районе масляного фильтра",probability:.20}],
        checks:{visual:{name:"👀 Осмотр двигателя снизу и сверху",time:10,equipment:0,results:{valve_cover:"Следы масла возле клапанной крышки.",sump:"Масло появляется в районе поддона.",seal:"Течь уходит в район соединения валов.",filter:"Масляные следы возле фильтра."}},lift:{name:"🏗️ Осмотр на подъёмнике",time:15,equipment:1,toolId:"lift",results:{valve_cover:"Нижняя часть двигателя относительно сухая.",sump:"Поддон имеет следы масла.",seal:"Есть следы масла в районе сальника.",filter:"Есть следы масла возле фильтра."}},clean:{name:"🧼 Очистить и повторно проверить",time:25,equipment:1,results:{valve_cover:"После очистки источник течи локализован у крышки.",sump:"Источник течи локализован у поддона.",seal:"Источник течи локализован у сальника.",filter:"Источник течи локализован у фильтра."}}},
        repairs:{valve_cover:{name:"Замена прокладки клапанной крышки",partCost:1800,workCost:1500,time:70},sump:{name:"Герметизация/ремонт поддона",partCost:1400,workCost:1800,time:80},seal:{name:"Замена сальника двигателя",partCost:1800,workCost:6500,time:240},filter:{name:"Устранение течи масляного фильтра",partCost:900,workCost:700,time:25}}
    },
    {
        id:"ac_not_cold",category:"cooling",title:"Кондиционер плохо охлаждает",minLevel:3,difficulty:"🟡 Средняя",
        complaints:["Кондиционер дует, но почти не холодит.","Летом салон долго не охлаждается.","Из дефлекторов идёт прохладный, но не холодный воздух."],
        causes:[{id:"refrigerant",name:"❄️ Недостаток хладагента",probability:.40},{id:"compressor",name:"⚙️ Проблема с компрессором кондиционера",probability:.20},{id:"fan",name:"🌀 Не работает вентилятор конденсатора",probability:.20},{id:"filter",name:"🌬️ Забит салонный фильтр",probability:.20}],
        checks:{visual:{name:"👀 Осмотр системы кондиционирования",time:8,equipment:0,results:{refrigerant:"Явных повреждений не видно.",compressor:"Компрессор включается нестабильно.",fan:"Вентилятор требует проверки.",filter:"Салонный фильтр выглядит сильно загрязнённым."}},pressure:{name:"📈 Проверить давление в контуре",time:20,equipment:3,toolId:"manometer",results:{refrigerant:"Давление хладагента ниже нормы.",compressor:"Давление нестабильно из-за работы компрессора.",fan:"Давление растёт при плохом охлаждении конденсатора.",filter:"Давление контура в норме."}},fan:{name:"🌀 Проверить вентилятор",time:15,equipment:1,toolId:"multimeter",results:{refrigerant:"Вентилятор работает.",compressor:"Вентилятор работает.",fan:"Вентилятор не включается в нужном режиме.",filter:"Вентилятор исправен."}}},
        repairs:{refrigerant:{name:"Проверка герметичности и заправка кондиционера",partCost:2500,workCost:2200,time:80},compressor:{name:"Ремонт/замена компрессора кондиционера",partCost:14000,workCost:6500,time:240},fan:{name:"Ремонт вентилятора кондиционера",partCost:4500,workCost:2200,time:120},filter:{name:"Замена салонного фильтра",partCost:1200,workCost:500,time:20}}
    },
    {
        id:"turbo_loss",category:"engine",title:"Потеря мощности турбодвигателя",minLevel:7,difficulty:"🔴 Экспертная",
        complaints:["Турбомотор перестал нормально тянуть.","После 2500 оборотов мощность пропадает.","Машина стала заметно медленнее на разгоне."],
        causes:[{id:"boost_leak",name:"💨 Утечка наддува",probability:.30},{id:"actuator",name:"⚙️ Проблема управления турбиной",probability:.25},{id:"sensor",name:"💻 Датчик давления наддува",probability:.20},{id:"turbo",name:"🌀 Неисправность турбокомпрессора",probability:.25}],
        checks:{obd:{name:"💻 OBD-II и Live Data",time:15,equipment:2,toolId:"obd",results:{boost_leak:"Фактический наддув ниже заданного.",actuator:"Параметры управления турбиной отклоняются.",sensor:"Показания датчика давления подозрительны.",turbo:"Наддув нестабилен и заметно ниже ожидаемого."}},smoke:{name:"💨 Проверить систему наддува дымогенератором",time:30,equipment:4,toolId:"smoke",results:{boost_leak:"Обнаружена утечка в системе наддува.",actuator:"Утечек воздуха не обнаружено.",sensor:"Утечек воздуха не обнаружено.",turbo:"Утечек воздуха не обнаружено."}},actuator:{name:"⚙️ Проверить управление турбиной",time:30,equipment:2,toolId:"obd",results:{boost_leak:"Управление работает.",actuator:"Механизм управления работает некорректно.",sensor:"Управление работает.",turbo:"Управление работает, но турбина не развивает требуемый наддув."}}},
        repairs:{boost_leak:{name:"Устранение утечки системы наддува",partCost:2500,workCost:3200,time:120},actuator:{name:"Ремонт управления турбиной",partCost:6500,workCost:4500,time:180},sensor:{name:"Замена датчика давления наддува",partCost:4200,workCost:1800,time:70},turbo:{name:"Ремонт/замена турбокомпрессора",partCost:28000,workCost:12000,time:420}}
    },
    {
        id:"automatic_transmission_kick",category:"transmission",transmissionType:"automatic",title:"Пинки автоматической коробки",minLevel:6,difficulty:"🟠 Сложная",
        complaints:["АКПП переключается с толчком.","При включении D появляется удар.","При разгоне коробка переключается жёстко."],
        causes:[{id:"fluid",name:"🛢️ Проблема с состоянием/уровнем ATF",probability:.30},{id:"solenoid",name:"⚙️ Проблема соленоида",probability:.25},{id:"mount",name:"🔩 Опора двигателя/КПП",probability:.20},{id:"wear",name:"⚙️ Внутренний износ АКПП",probability:.25}],
        checks:{road:{name:"🚗 Пробная поездка",time:25,equipment:0,results:{fluid:"Пинки меняются после прогрева коробки.",solenoid:"Пинки повторяются на конкретном переключении.",mount:"Удар особенно заметен при включении D/R.",wear:"Переключения сопровождаются устойчивыми задержками."}},obd:{name:"💻 Диагностика АКПП",time:20,equipment:2,toolId:"obd",results:{fluid:"Критических ошибок нет, требуется проверка обслуживания.",solenoid:"Есть данные по работе соленоида.",mount:"Ошибок управления коробкой нет.",wear:"Параметры требуют углублённой диагностики."}},lift:{name:"🏗️ Проверка опор и утечек",time:15,equipment:1,toolId:"lift",results:{fluid:"Есть следы ATF, уровень требует проверки.",solenoid:"Утечек нет.",mount:"Опора имеет повреждение.",wear:"Внешних повреждений нет."}}},
        repairs:{fluid:{name:"Обслуживание АКПП и замена ATF",partCost:6500,workCost:3000,time:150},solenoid:{name:"Ремонт соленоида АКПП",partCost:8500,workCost:5500,time:220},mount:{name:"Замена опоры двигателя/КПП",partCost:4200,workCost:1800,time:90},wear:{name:"Сложный ремонт АКПП",partCost:32000,workCost:18000,time:600}}
    },
    {
        id:"diesel_glow",category:"engine",fuelType:"diesel",title:"Дизель плохо запускается на холодную",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["Дизель долго заводится утром.","На холодную мотор запускается тяжело.","После запуска первые секунды двигатель работает неровно."],
        causes:[{id:"glow",name:"🔥 Свечи накаливания",probability:.40},{id:"battery",name:"🔋 Недостаточное напряжение при запуске",probability:.20},{id:"fuel",name:"⛽ Проблема с давлением топлива",probability:.20},{id:"injector",name:"💉 Форсунка с повышенным обратным сливом",probability:.20}],
        checks:{visual:{name:"👀 Осмотр системы запуска",time:8,equipment:0,results:{glow:"Внешних повреждений не видно.",battery:"Клеммы выглядят нормально.",fuel:"Следов утечки нет.",injector:"Внешних повреждений нет."}},voltage:{name:"📟 Проверить питание свечей накаливания",time:15,equipment:1,toolId:"multimeter",results:{glow:"Питание системы накала требует проверки свечей.",battery:"Напряжение питания проседает.",fuel:"Питание свечей в норме.",injector:"Питание свечей в норме."}},fuel_pressure:{name:"⛽ Проверить давление топлива",time:25,equipment:3,toolId:"manometer",results:{glow:"Давление топлива соответствует норме.",battery:"Давление топлива соответствует норме.",fuel:"Давление топлива ниже ожидаемого.",injector:"Давление топлива в норме."}},injector_test:{name:"💉 Проверить обратный слив форсунок",time:35,equipment:2,results:{glow:"Обратный слив в норме.",battery:"Обратный слив в норме.",fuel:"Обратный слив в норме.",injector:"Одна форсунка имеет повышенный обратный слив."}}},
        repairs:{glow:{name:"Замена свечей накаливания",partCost:3200,workCost:1800,time:80},battery:{name:"Замена аккумулятора",partCost:7500,workCost:600,time:25},fuel:{name:"Ремонт топливной системы дизеля",partCost:8500,workCost:5000,time:220},injector:{name:"Ремонт/замена дизельной форсунки",partCost:12000,workCost:5000,time:240}}
    },
    {
        id:"wheel_bearing",category:"suspension",title:"Гул ступичного подшипника",minLevel:4,difficulty:"🟠 Сложная",
        complaints:["На скорости появился гул.","Гул усиливается с ростом скорости.","Слышен равномерный шум со стороны колеса."],
        causes:[{id:"bearing",name:"🔩 Износ ступичного подшипника",probability:.60},{id:"tire",name:"🛞 Шум от неравномерного износа шины",probability:.25},{id:"brake",name:"🛑 Шум тормозного механизма",probability:.15}],
        checks:{road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{bearing:"Гул меняется при перестроении и растёт со скоростью.",tire:"Шум связан с покрытием и состоянием протектора.",brake:"Шум меняется при лёгком нажатии на тормоз."}},lift:{name:"🏗️ Проверить люфт ступицы",time:15,equipment:1,toolId:"lift",results:{bearing:"Есть заметный люфт ступичного узла.",tire:"Люфта нет.",brake:"Люфта нет."}},wheel_spin:{name:"🔄 Проверить вращение колеса",time:10,equipment:1,toolId:"lift",results:{bearing:"Подшипник шумит при вращении.",tire:"Подшипник работает тихо.",brake:"Есть лёгкий контакт тормозного механизма."}}},
        repairs:{bearing:{name:"Замена ступичного подшипника",partCost:5200,workCost:2800,time:140},tire:{name:"Замена шины",partCost:6500,workCost:1000,time:45},brake:{name:"Обслуживание тормозного механизма",partCost:900,workCost:1300,time:50}}
    },
    {
        id:"timing_belt_wear",category:"engine",title:"Износ ремня ГРМ",minLevel:6,difficulty:"🔴 Экспертная",
        complaints:["Клиент хочет проверить ремень ГРМ перед дальней поездкой.","На плановом обслуживании нужно оценить состояние ГРМ.","Появились сомнения по сроку службы ремня ГРМ."],
        causes:[{id:"belt",name:"⛓️ Изношен ремень ГРМ",probability:.55},{id:"tensioner",name:"⚙️ Изношен натяжитель/ролик",probability:.20},{id:"waterpump",name:"💧 Изношена помпа привода ГРМ",probability:.15},{id:"ok",name:"✅ Привод ГРМ в нормальном состоянии",probability:.10}],
        checks:{visual:{name:"👀 Осмотр привода ГРМ",time:20,equipment:0,results:{belt:"На ремне заметны признаки старения.",tensioner:"Ремень выглядит приемлемо, нужен контроль роликов.",waterpump:"Есть признаки возможной проблемы помпы.",ok:"Визуально привод выглядит исправным."}},knowledge:{name:"📚 Свериться с регламентом",time:10,equipment:0,results:{belt:"Пробег и срок обслуживания указывают на необходимость замены.",tensioner:"Регламент требует оценки комплекта ГРМ.",waterpump:"Регламент предусматривает контроль помпы.",ok:"По регламенту замена пока не обязательна."}},timing_test:{name:"🔧 Проверить состояние элементов ГРМ",time:30,equipment:1,results:{belt:"Ремень требует замены.",tensioner:"Натяжитель/ролик имеет признаки износа.",waterpump:"Помпа имеет признаки износа.",ok:"Критического износа не обнаружено."}}},
        repairs:{belt:{name:"Замена комплекта ремня ГРМ",partCost:8500,workCost:6500,time:300},tensioner:{name:"Замена роликов и натяжителя ГРМ",partCost:6500,workCost:5000,time:240},waterpump:{name:"Замена помпы вместе с приводом ГРМ",partCost:7000,workCost:6500,time:300},ok:{name:"Плановая проверка без ремонта",partCost:0,workCost:700,time:30,serviceOnly:true}}
    },
    {
        id:"battery_drain",category:"electrics",title:"Аккумулятор разряжается за ночь",minLevel:4,difficulty:"🟠 Сложная",
        complaints:["Утром аккумулятор разряжен.","Машина стоит ночь и потом не заводится.","После полной зарядки проблема возвращается."],
        causes:[{id:"leak",name:"🔌 Паразитный ток утечки",probability:.45},{id:"battery",name:"🔋 Изношенный аккумулятор",probability:.25},{id:"alternator",name:"⚡ Утечка через генератор",probability:.15},{id:"module",name:"💻 Блок автомобиля не переходит в сон",probability:.15}],
        checks:{battery:{name:"🔋 Проверить состояние аккумулятора",time:10,equipment:1,toolId:"multimeter",results:{leak:"Аккумулятор способен держать заряд.",battery:"Ёмкость аккумулятора снижена.",alternator:"Аккумулятор способен держать заряд.",module:"Аккумулятор способен держать заряд."}},current:{name:"📟 Измерить ток покоя",time:25,equipment:2,toolId:"multimeter",results:{leak:"Ток покоя выше допустимого.",battery:"Ток покоя находится в норме.",alternator:"Есть подозрение на утечку через генератор.",module:"Ток покоя повышен после закрытия автомобиля."}},obd:{name:"💻 Проверить переход блоков в сон",time:20,equipment:2,toolId:"obd",results:{leak:"Нужно локализовать потребителя.",battery:"Блоки переходят в сон.",alternator:"Электронных ошибок нет.",module:"Один из блоков не переходит в спящий режим."}}},
        repairs:{leak:{name:"Поиск и устранение утечки тока",partCost:800,workCost:3500,time:180},battery:{name:"Замена аккумулятора",partCost:7500,workCost:600,time:25},alternator:{name:"Ремонт генератора",partCost:9500,workCost:3500,time:150},module:{name:"Диагностика и ремонт блока управления",partCost:8500,workCost:6000,time:240}}
    },
    {
        id:"steering_play",category:"suspension",title:"Люфт рулевого управления",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["В руле появился люфт.","Машина реагирует на руль с задержкой.","На прямой приходится постоянно подруливать."],
        causes:[{id:"tie_rod",name:"🔩 Рулевой наконечник/тяга",probability:.30},{id:"rack",name:"⚙️ Износ рулевой рейки",probability:.25},{id:"ball",name:"🛞 Люфт шаровой/подвески",probability:.20},{id:"alignment",name:"📐 Нарушение углов установки колёс",probability:.25}],
        checks:{road:{name:"🚗 Проверка на дороге",time:15,equipment:0,results:{tie_rod:"Есть свободный ход в рулевом управлении.",rack:"Люфт ощущается в районе рейки.",ball:"Реакция автомобиля сопровождается посторонним стуком.",alignment:"Автомобиль требует проверки углов установки."}},lift:{name:"🏗️ Проверить рулевые соединения",time:20,equipment:1,toolId:"lift",results:{tie_rod:"Обнаружен люфт рулевого наконечника.",rack:"Соединения исправны, требуется проверка рейки.",ball:"Обнаружен люфт шаровой опоры.",alignment:"Люфтов нет."}},alignment:{name:"📐 Проверить углы установки колёс",time:35,equipment:2,toolId:"alignment",results:{tie_rod:"Углы нарушены из-за люфта, сначала нужен ремонт.",rack:"Углы близки к норме.",ball:"Углы нарушены из-за неисправности подвески.",alignment:"Углы установки колёс нарушены."}}},
        repairs:{tie_rod:{name:"Замена рулевого наконечника/тяги",partCost:3200,workCost:1800,time:80},rack:{name:"Ремонт рулевой рейки",partCost:14000,workCost:7000,time:300},ball:{name:"Замена шаровой опоры",partCost:3000,workCost:1800,time:80},alignment:{name:"Развал-схождение",partCost:0,workCost:1800,time:60,serviceOnly:true}}
    },
    {
        id:"exhaust_smoke",category:"engine",title:"Дым из выхлопной системы",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["Из выхлопа идёт дым.","На холодную появляется заметный дым.","После перегазовки из выхлопа выходит дым."],
        causes:[{id:"oil",name:"🛢️ Масло попадает в цилиндры",probability:.30},{id:"coolant",name:"💧 Попадание охлаждающей жидкости",probability:.20},{id:"fuel",name:"⛽ Неполное сгорание топлива",probability:.30},{id:"normal",name:"🌫️ Нормальный пар при холодном запуске",probability:.20}],
        checks:{visual:{name:"👀 Оценить дым и состояние двигателя",time:8,equipment:0,results:{oil:"Дым имеет признаки масляного характера.",coolant:"Дым плотный, требуется проверка охлаждающей системы.",fuel:"Есть признаки неполного сгорания.",normal:"После прогрева дым исчезает."}},obd:{name:"💻 Проверить параметры двигателя",time:15,equipment:2,toolId:"obd",results:{oil:"Параметры требуют дальнейшей механической проверки.",coolant:"Температурные параметры требуют проверки.",fuel:"Коррекции/пропуски указывают на проблему смеси.",normal:"Параметры после прогрева в норме."}},compression:{name:"📈 Измерить компрессию",time:25,equipment:3,toolId:"manometer",results:{oil:"Есть отклонения компрессии.",coolant:"Компрессия неоднородна.",fuel:"Компрессия в норме.",normal:"Компрессия в норме."}}},
        repairs:{oil:{name:"Ремонт двигателя по причине расхода масла",partCost:18000,workCost:12000,time:500},coolant:{name:"Диагностика и ремонт системы охлаждения/ГБЦ",partCost:16000,workCost:10000,time:420},fuel:{name:"Ремонт системы впрыска",partCost:6500,workCost:4000,time:180},normal:{name:"Проверка без ремонта",partCost:0,workCost:600,time:20,serviceOnly:true}}
    },
    {
        id:"clutch_slip",category:"transmission",title:"Сцепление буксует",minLevel:5,difficulty:"🟠 Сложная",
        complaints:["Обороты растут, а машина почти не ускоряется.","При разгоне сцепление начинает проскальзывать.","После прогрева сцепление буксует сильнее."],
        causes:[{id:"clutch",name:"⚙️ Изношен комплект сцепления",probability:.55},{id:"oil",name:"🛢️ Замасливание сцепления",probability:.20},{id:"hydraulic",name:"💧 Проблема гидропривода сцепления",probability:.15},{id:"normal",name:"✅ Явной неисправности сцепления нет",probability:.10}],
        checks:{road:{name:"🚗 Пробная поездка",time:15,equipment:0,results:{clutch:"Обороты растут быстрее скорости автомобиля.",oil:"Есть признаки проскальзывания и запаха.",hydraulic:"Педаль и включение сцепления требуют проверки.",normal:"Симптом не подтверждается постоянно."}},lift:{name:"🏗️ Осмотр трансмиссии",time:20,equipment:1,toolId:"lift",results:{clutch:"Для точной проверки требуется демонтаж.",oil:"Обнаружены следы масла в районе соединения.",hydraulic:"Внешних следов утечки нет.",normal:"Внешних повреждений нет."}},hydraulic:{name:"💧 Проверить привод сцепления",time:15,equipment:1,results:{clutch:"Гидропривод работает штатно.",oil:"Гидропривод работает штатно.",hydraulic:"Есть отклонение в работе гидропривода.",normal:"Гидропривод исправен."}}},
        repairs:{clutch:{name:"Замена комплекта сцепления",partCost:12000,workCost:7000,time:360},oil:{name:"Устранение течи и замена сцепления",partCost:14500,workCost:8500,time:420},hydraulic:{name:"Ремонт гидропривода сцепления",partCost:2800,workCost:2200,time:120},normal:{name:"Проверка без ремонта",partCost:0,workCost:700,time:30,serviceOnly:true}}
    }

];


/* =========================================================
   БАЗА ЗНАНИЙ — ПОЛНАЯ ТЕОРИЯ v2
   Структура: что это → как работает → симптомы → проверка → практика.
   Позже эти topic.id будут использоваться для тестов и допусков.
========================================================= */

const knowledgeBase = {
    engine: {
        title: "🔥 Двигатель",
        topics: [
            {
                id: "engine_basics", title: "Устройство двигателя", icon: "🔥",
                theory: "Поршневой двигатель превращает энергию сгорания топливовоздушной смеси в механическую работу. Основные элементы: блок цилиндров, поршни, шатуны, коленчатый вал, ГБЦ, клапаны и газораспределительный механизм.",
                how: "Поршень движется внутри цилиндра, шатун передаёт усилие на коленвал, а коленвал превращает возвратно-поступательное движение во вращение.",
                symptoms: ["потеря мощности", "нестабильный холостой ход", "повышенный расход масла", "трудный запуск", "посторонние звуки"],
                checks: ["визуальный осмотр", "уровень и состояние масла", "OBD-II и Live Data", "компрессия при необходимости"],
                tools: "Набор инструмента, OBD-II, компрессометр, мультиметр.",
                practice: "Перед ремонтом нужно понять, какая система может быть причиной симптома. Не стоит менять детали только по одному признаку."
            },
            {
                id: "four_stroke", title: "Четырёхтактный цикл", icon: "🔄",
                theory: "Рабочий цикл четырёхтактного двигателя состоит из впуска, сжатия, рабочего хода и выпуска.",
                how: "На впуске цилиндр получает заряд, затем смесь сжимается. После воспламенения газы расширяются и совершают работу, после чего отработавшие газы удаляются.",
                symptoms: ["потеря мощности", "пропуски воспламенения", "дымность", "трудный запуск"],
                checks: ["состояние ГРМ", "компрессия", "зажигание", "топливная система"],
                tools: "Компрессометр, OBD-II, тестер зажигания, набор инструмента.",
                practice: "Понимание четырёх тактов помогает связать симптом с конкретной системой двигателя."
            },
            {
                id: "cylinder_head", title: "ГБЦ и клапанный механизм", icon: "🧱",
                theory: "Головка блока цилиндров закрывает верхнюю часть цилиндров и содержит элементы газораспределения, впускные и выпускные каналы, а в зависимости от конструкции — свечи, форсунки и другие компоненты.",
                how: "Клапаны открываются и закрываются в заданные моменты. Распредвал управляет их движением через соответствующий механизм привода.",
                symptoms: ["потеря компрессии", "троение", "расход масла", "посторонний шум", "перегрев при проблемах с прокладкой ГБЦ"],
                checks: ["компрессия", "утечки цилиндров", "состояние свечей", "признаки попадания ОЖ или масла", "состояние клапанного механизма"],
                tools: "Компрессометр, тестер утечек цилиндров, эндоскоп, набор инструмента.",
                practice: "При серьёзных работах с ГБЦ важно соблюдать порядок разборки и требования производителя по затяжке."
            },
            {
                id: "pistons_crank", title: "Поршни, шатуны и коленвал", icon: "⚙️",
                theory: "Поршень воспринимает давление газов, шатун передаёт усилие на коленчатый вал, а коленвал преобразует движение поршней во вращение.",
                how: "Коленвал вращается на коренных опорах. Шатуны соединяют его с поршнями через шатунные шейки.",
                symptoms: ["стук из нижней части двигателя", "расход масла", "низкая компрессия", "вибрации", "металлическая стружка в масле"],
                checks: ["давление масла", "компрессия", "анализ шума", "состояние масла и фильтра", "измерения при разборке"],
                tools: "Манометр, компрессометр, эндоскоп, микрометр/нутромер при ремонте.",
                practice: "Диагностика механической части двигателя должна подтверждаться измерениями, а не только звуком."
            },
            {
                id: "timing", title: "ГРМ", icon: "⛓️",
                theory: "Газораспределительный механизм синхронизирует коленчатый и распределительные валы, чтобы клапаны открывались в нужные моменты.",
                how: "Привод ГРМ может быть ременным или цепным. Натяжитель и направляющие поддерживают правильное натяжение и положение привода.",
                symptoms: ["трудный запуск", "потеря мощности", "ошибки фаз", "шум цепи/привода", "двигатель может не запускаться при серьёзном нарушении фаз"],
                checks: ["ошибки по фазам", "метки ГРМ", "состояние ремня/цепи", "натяжитель и направляющие", "синхронизация датчиков"],
                tools: "Фиксаторы ГРМ, набор инструмента, OBD-II, динамометрический ключ.",
                practice: "Перед допуском к самостоятельной замене ГРМ игрок должен пройти обучение и тест без ошибок."
            },
            {
                id: "timing_belt", title: "Ремень ГРМ", icon: "🪢",
                theory: "Ремень ГРМ передаёт вращение от коленчатого вала к распределительному валу или валам. Он работает в заданном направлении и требует правильного натяжения.",
                how: "Ремень взаимодействует со шкивами и натяжным механизмом. При нарушении положения зубьев меняются фазы газораспределения.",
                symptoms: ["свист или посторонний шум", "ошибки фаз", "трудный запуск", "потеря мощности"],
                checks: ["трещины и повреждения", "состояние зубьев", "натяжение", "ролики и помпа при соответствующей конструкции", "совпадение меток"],
                tools: "Фиксаторы, ключ для натяжителя, динамометрический ключ.",
                practice: "Работа с ГРМ требует строгой последовательности. После установки необходимо проверить совпадение меток и правильность натяжения."
            },
            {
                id: "oil_system", title: "Система смазки", icon: "🛢️",
                theory: "Система смазки подаёт моторное масло к трущимся деталям, уменьшает трение, отводит часть тепла и помогает удалять продукты износа.",
                how: "Масляный насос создаёт поток, масло проходит через фильтр и поступает к каналам двигателя. Давление зависит от конструкции и состояния системы.",
                symptoms: ["лампа давления масла", "стук или шум двигателя", "расход масла", "утечки", "перегрев отдельных деталей"],
                checks: ["уровень масла", "утечки", "состояние фильтра", "давление манометром", "состояние масла"],
                tools: "Щуп, манометр давления масла, набор инструмента.",
                practice: "Лампа давления масла — повод остановить диагностику и проверить причину, а не просто продолжать эксплуатацию."
            },
            {
                id: "cooling_system", title: "Система охлаждения", icon: "💧",
                theory: "Система охлаждения отводит избыточное тепло от двигателя и поддерживает рабочий температурный режим.",
                how: "Охлаждающая жидкость циркулирует через двигатель и радиатор. Термостат регулирует поток, а вентилятор помогает отводить тепло.",
                symptoms: ["перегрев", "долгий прогрев", "утечки ОЖ", "вентилятор работает слишком часто", "сладковатый запах ОЖ"],
                checks: ["уровень ОЖ", "утечки", "температура по OBD", "термостат", "вентилятор", "радиатор"],
                tools: "OBD-II, тестер давления системы охлаждения, мультиметр, набор инструмента.",
                practice: "Система охлаждения проверяется по цепочке: уровень → утечки → температура → циркуляция → вентилятор."
            },
            {
                id: "intake", title: "Впускная система", icon: "🌬️",
                theory: "Впускная система обеспечивает двигатель необходимым количеством воздуха и включает фильтр, патрубки, дроссель и другие элементы.",
                how: "Воздух проходит через фильтр и измеряется соответствующим датчиком, затем количество воздуха регулируется дросселем.",
                symptoms: ["плавающие обороты", "потеря мощности", "бедная смесь", "провалы при разгоне"],
                checks: ["подсос воздуха", "MAF/MAP", "дроссель", "патрубки", "дымогенератором при необходимости"],
                tools: "OBD-II, дымогенератор, мультиметр, набор инструмента.",
                practice: "При подозрении на подсос нельзя ограничиваться заменой датчика — сначала проверяется герметичность впуска."
            },
            {
                id: "ignition", title: "Система зажигания", icon: "⚡",
                theory: "Бензиновому двигателю требуется искра в нужный момент. В зависимости от конструкции используются свечи, катушки и система управления зажиганием.",
                how: "ЭБУ управляет моментом и условиями возникновения искры. Катушка создаёт высокое напряжение, а свеча формирует разряд в цилиндре.",
                symptoms: ["троение", "рывки", "потеря мощности", "Check Engine", "увеличенный расход топлива"],
                checks: ["свечи", "катушки", "разъёмы", "ошибки пропусков", "перестановка исправных компонентов при диагностике"],
                tools: "OBD-II, тестер зажигания, мультиметр, свечной ключ.",
                practice: "Код пропуска не доказывает неисправность свечи или катушки. Причину нужно подтвердить."
            },
            {
                id: "diesel_glow", title: "Дизель и свечи накаливания", icon: "🛢️",
                theory: "Дизельный двигатель воспламеняет топливо за счёт высокой температуры сжатого воздуха. Свечи накаливания помогают холодному запуску.",
                how: "Перед запуском и в некоторых режимах свечи накаливания нагреваются. Управление зависит от температуры и конструкции двигателя.",
                symptoms: ["трудный холодный запуск", "дым после запуска", "неровная работа на холодную", "ошибки системы накаливания"],
                checks: ["ошибки OBD", "сопротивление свечей", "питание системы", "реле/модуль управления", "состояние проводки"],
                tools: "OBD-II, мультиметр, токовые клещи при наличии, свечной инструмент.",
                practice: "При замене свечи накаливания важно учитывать риск её прикипания и не применять чрезмерное усилие."
            },
            {
                id: "turbo", title: "Турбонаддув", icon: "🌪️",
                theory: "Турбокомпрессор использует энергию выхлопных газов для увеличения количества воздуха, поступающего в двигатель.",
                how: "Турбина вращает компрессор. Система управления наддувом регулирует давление в зависимости от конструкции.",
                symptoms: ["недостаток мощности", "недодув", "передув", "свист", "дымность", "масло во впуске"],
                checks: ["патрубки", "утечки воздуха", "давление наддува", "управление турбиной", "состояние масла"],
                tools: "OBD-II, дымогенератор, диагностический манометр, мультиметр. ",
                practice: "Ошибка по наддуву не означает автоматически неисправную турбину: сначала проверяются утечки и управление."
            },
            {id:"timing_chain",title:"Цепь ГРМ",icon:"⛓️",theory:"Цепной привод синхронизирует коленчатый и распределительный валы и использует натяжители и направляющие.",how:"Натяжитель поддерживает рабочее натяжение, а направляющие удерживают цепь на траектории.",symptoms:["цокот на запуске","ошибки фаз","потеря мощности","трудный запуск"],checks:["ошибки синхронизации","параметры фаз","шум","натяжитель и направляющие"],tools:"OBD-II, стетоскоп, набор инструмента, фиксаторы ГРМ.",practice:"Шум цепи сам по себе не доказывает конкретную неисправность — проверяют натяжение, фазы и состояние привода."}
        ]
    },

    electrical: {
        title: "⚡ Электрика",
        topics: [
            {id:"battery",title:"Аккумулятор",icon:"🔋",theory:"Аккумулятор хранит электрическую энергию и способен отдавать большой ток стартеру.",how:"При работающем двигателе аккумулятор заряжается от генератора, а при запуске питает стартер и системы автомобиля.",symptoms:["медленный запуск","щелчки стартера","просадка напряжения","быстрый разряд"],checks:["напряжение покоя","просадка при запуске","зарядное напряжение","нагрузочный тест"],tools:"Мультиметр или тестер аккумулятора.",practice:"Слабый аккумулятор нельзя диагностировать только по напряжению покоя — важна его способность отдавать ток под нагрузкой."},
            {id:"alternator",title:"Генератор",icon:"⚡",theory:"Генератор вырабатывает электроэнергию при работающем двигателе и поддерживает заряд аккумулятора.",how:"Механическая энергия двигателя через привод вращает генератор, который формирует электрическую энергию.",symptoms:["лампа аккумулятора","разряд аккумулятора","нестабильное напряжение","шум привода"],checks:["напряжение без нагрузки и под нагрузкой","ремень","соединения","ошибки зарядной системы"],tools:"Мультиметр, OBD-II при поддержке.",practice:"Проверять нужно всю цепь зарядки, а не только генератор."},
            {id:"starter",title:"Стартер",icon:"🔑",theory:"Стартер кратковременно вращает коленчатый вал для запуска двигателя.",how:"При команде запуска электромотор стартера через привод вращает маховик или венец коленвала.",symptoms:["не крутит","медленно крутит","один щелчок","частые щелчки"],checks:["аккумулятор","масса","питание стартера","управляющий сигнал","потребляемый ток"],tools:"Мультиметр, токовые клещи, набор инструмента.",practice:"Если стартер медленно крутит, сначала исключают слабый аккумулятор и плохие соединения."},
            {id:"multimeter",title:"Мультиметр",icon:"📟",theory:"Мультиметр позволяет измерять электрические параметры: напряжение, сопротивление и в подходящем режиме ток.",how:"Измерение выполняется выбранным режимом и правильным подключением щупов.",symptoms:["нет питания","плохая масса","обрыв цепи","неверное сопротивление"],checks:["питание","масса","целостность проводки","падение напряжения"],tools:"Мультиметр и электрическая схема автомобиля.",practice:"Неправильное подключение мультиметра может повредить прибор или цепь, поэтому режим измерения выбирается до подключения."},
            {id:"fuses",title:"Предохранители и реле",icon:"🧷",theory:"Предохранители защищают электрические цепи от чрезмерного тока, а реле позволяют управлять мощными потребителями.",how:"При превышении допустимого тока предохранитель разрывает цепь. Реле замыкает силовую цепь по управляющему сигналу.",symptoms:["не работает потребитель","предохранитель снова перегорает","не включается реле"],checks:["предохранитель","питание","масса","управляющий сигнал","короткое замыкание"],tools:"Мультиметр, контрольная лампа, схема предохранителей.",practice:"Если новый предохранитель снова перегорает, нужно искать причину перегрузки, а не ставить предохранитель большего номинала."},
            {id:"ground_circuit",title:"Масса автомобиля",icon:"⏚",theory:"Массовые соединения замыкают электрические цепи и должны иметь низкое сопротивление.",how:"Ток возвращается к источнику через предусмотренные массовые соединения кузова и двигателя.",symptoms:["медленный стартер","мерцание света","ошибки электроники"],checks:["падение напряжения по массе","клеммы","соединения двигателя и кузова"],tools:"Мультиметр, контрольная лампа.",practice:"Полезно проверять падение напряжения по массе под нагрузкой, а не только сопротивление отключённой цепи."}
        ]
    },

    diagnostics: {
        title: "💻 Диагностика",
        topics: [
            {id:"obd",title:"OBD-II",icon:"💻",theory:"OBD-II — диагностический интерфейс, через который можно получать доступные электронные данные автомобиля.",how:"Сканер связывается с блоками управления и получает коды неисправностей и параметры, которые поддерживает конкретный автомобиль.",symptoms:["Check Engine","электронные ошибки","необычные параметры"],checks:["коды ошибок","pending-коды","Freeze Frame","Live Data"],tools:"OBD-II сканер.",practice:"Код ошибки — это направление поиска, а не готовый приговор конкретной детали."},
            {id:"live_data",title:"Live Data",icon:"📊",theory:"Live Data показывает текущие параметры электронных систем в реальном времени.",how:"Сканер получает PID от блока управления. Значение нужно оценивать в контексте температуры, нагрузки и режима работы.",symptoms:["параметр вне ожидаемого диапазона","нестабильные значения","несоответствие заданного и фактического"],checks:["холодный запуск","прогретый двигатель","холостой ход","нагрузка"],tools:"OBD-II сканер.",practice:"Один параметр редко даёт полный диагноз. Полезнее смотреть взаимосвязанные параметры."},
            {id:"freeze_frame",title:"Freeze Frame",icon:"📸",theory:"Freeze Frame сохраняет доступные параметры в момент регистрации определённых ошибок.",how:"Блок управления фиксирует часть данных: например обороты, нагрузку и температуру.",symptoms:["плавающая неисправность","ошибка возникает только под нагрузкой","периодический Check Engine"],checks:["обороты","температура","нагрузка","скорость","сопутствующие коды"],tools:"OBD-II сканер.",practice:"Freeze Frame помогает воспроизвести условия, при которых появилась неисправность."},
            {id:"misfire_codes",title:"Коды пропусков P0300–P030x",icon:"📟",theory:"Коды серии P030x указывают на обнаруженные пропуски воспламенения, а последние цифры могут указывать на конкретный цилиндр.",how:"ЭБУ отслеживает изменения вращения коленвала и по ним определяет нестабильность работы цилиндров.",symptoms:["троение","рывки","Check Engine","потеря мощности"],checks:["свеча","катушка","форсунка","компрессия","проводка","подсос воздуха"],tools:"OBD-II, мультиметр, компрессометр.",practice:"P0301, например, говорит о цилиндре №1, но не говорит автоматически, какая деталь неисправна."},
            {id:"diagnosis_order",title:"Алгоритм диагностики",icon:"🧠",theory:"Хорошая диагностика строится от жалобы к подтверждённой причине: симптомы → базовые проверки → измерения → подтверждение неисправности.",how:"Сначала выбираются простые и информативные проверки, затем более глубокие, если причина не подтверждена.",symptoms:["несколько возможных причин","неоднозначные результаты","повторная неисправность после ремонта"],checks:["жалоба клиента","визуальный осмотр","коды","измерения","подтверждение результата"],tools:"Инструмент зависит от неисправности.",practice:"В игре именно этот принцип будет определять доступные действия диагностики и расход энергии."},
            {id:"pending_codes",title:"Ожидающие ошибки",icon:"⏳",theory:"Pending-код может указывать на обнаруженное условие неисправности до его окончательного подтверждения.",how:"Блок управления отслеживает параметры и сохраняет предварительный результат до выполнения условий мониторинга.",symptoms:["периодический Check Engine","непостоянный симптом","ошибка не закрепилась"],checks:["pending-коды","Freeze Frame при наличии","условия появления","повторный тест"],tools:"OBD-II сканер.",practice:"Ожидающий код нужно сопоставить с симптомом и измерениями, а не сразу менять деталь."}
        ]
    },

    fuel: {
        title: "⛽ Топливная система",
        topics: [
            {id:"fuel_system",title:"Топливная система",icon:"⛽",theory:"Топливная система хранит, подаёт и дозирует топливо для двигателя.",how:"Насос обеспечивает подачу, фильтрация очищает топливо, а форсунки дозируют его в соответствии с системой управления.",symptoms:["трудный запуск","провалы","потеря мощности","бедная или богатая смесь"],checks:["давление топлива","утечки","коррекции","работа форсунок"],tools:"Манометр давления топлива, OBD-II, мультиметр.",practice:"Давление топлива измеряют по процедуре, предусмотренной конструкцией автомобиля."},
            {id:"injectors",title:"Форсунки",icon:"💉",theory:"Форсунка дозирует топливо и распыляет его в нужный момент.",how:"ЭБУ управляет временем открытия форсунки, а качество распыла зависит от состояния самой форсунки и условий работы системы.",symptoms:["троение","трудный запуск","неравномерная работа","повышенный расход"],checks:["коррекции","баланс форсунок","электрическая цепь","давление топлива"],tools:"OBD-II, мультиметр, стенд/тестер форсунок при необходимости.",practice:"Перед заменой форсунки важно исключить проблемы питания и давления топлива."},
            {id:"fuel_pressure",title:"Давление топлива",icon:"📈",theory:"Двигателю требуется определённое давление топлива, зависящее от конструкции системы.",how:"Давление создаётся насосом и контролируется регуляцией системы. Отклонение влияет на количество топлива.",symptoms:["плохой запуск","провалы","потеря мощности","бедная смесь"],checks:["давление на запуске","давление на холостом ходу","поведение под нагрузкой","остаточное давление при необходимости"],tools:"Манометр или штатный диагностический параметр.",practice:"Сравнивать нужно с нормой конкретной системы, а не с универсальным числом."},
            {id:"fuel_leak",title:"Утечки топлива",icon:"⚠️",theory:"Нарушение герметичности топливной системы может привести к потере давления, запаху топлива и риску возгорания.",how:"Топливо должно перемещаться по герметичному контуру; схема зависит от конструкции автомобиля.",symptoms:["запах топлива","влажные соединения","падение давления","трудный запуск"],checks:["визуальный осмотр","герметичность","давление","соединения"],tools:"Средства проверки герметичности и стандартный инструмент.",practice:"При обнаружении течи сначала устраняют риск, затем продолжают диагностику."}
        ]
    },

    suspension: {
        title: "🛞 Подвеска",
        topics: [
            {id:"shock_absorber",title:"Амортизаторы",icon:"🛞",theory:"Амортизатор гасит колебания подвески и помогает колесу сохранять контакт с дорогой.",how:"Сопротивление движению штока преобразует энергию колебаний в тепло.",symptoms:["раскачка","клевки","плохая устойчивость","течь"],checks:["утечки","крепления","люфт","поведение автомобиля","стенд при наличии"],tools:"Подъёмник, монтажный инструмент, диагностический стенд.",practice:"Течь и слабая эффективность амортизатора оцениваются вместе с состоянием других элементов подвески."},
            {id:"ball_joint",title:"Шаровая опора",icon:"🔩",theory:"Шаровая опора обеспечивает подвижное соединение элементов подвески.",how:"Шаровой палец может перемещаться относительно корпуса, сохраняя связь деталей подвески.",symptoms:["стук","люфт","неравномерный износ шин","изменение поведения автомобиля"],checks:["люфт","пыльник","крепления","состояние посадочных мест"],tools:"Подъёмник, монтажка и специальный инструмент при необходимости.",practice:"Критический люфт в элементах подвески требует внимательной оценки из-за влияния на безопасность."},
            {id:"stabilizer",title:"Стойки и втулки стабилизатора",icon:"🔧",theory:"Стабилизатор поперечной устойчивости уменьшает крен кузова, а стойки и втулки соединяют его с подвеской.",how:"При работе подвески стабилизатор перераспределяет нагрузку между сторонами автомобиля.",symptoms:["стук на неровностях","люфт","скрип","износ втулок"],checks:["люфт стоек","состояние втулок","крепления","симметрия износа"],tools:"Подъёмник, монтажный инструмент.",practice:"При стуке важно проверять несколько элементов подвески, потому что похожий звук может иметь разные причины."},
            {id:"steering_rack",title:"Рулевой механизм",icon:"🛞",theory:"Рулевой механизм передаёт движение от руля к управляемым колёсам и не должен иметь недопустимых люфтов.",how:"Рейка или другой механизм преобразует движение рулевого управления в перемещение тяг.",symptoms:["люфт руля","стук","неравномерное усилие","увод"],checks:["люфты","пыльники","крепления","рулевые тяги"],tools:"Подъёмник, монтажный инструмент, измерительный инструмент.",practice:"Перед регулировкой углов важно исключить люфты рулевого механизма и тяг."}
        ]
    },

    brakes: {
        title: "🛑 Тормоза",
        topics: [
            {id:"brake_pads",title:"Тормозные колодки",icon:"🛑",theory:"Колодки создают трение о диск или барабан и преобразуют кинетическую энергию автомобиля в тепло.",how:"При нажатии на педаль тормозной механизм прижимает колодки к рабочей поверхности.",symptoms:["скрип","металлический шум","увеличенный путь торможения","неравномерный износ"],checks:["толщина","состояние поверхности","равномерность износа","свободный ход механизма"],tools:"Подъёмник, штангенциркуль, набор инструмента.",practice:"При замене колодок проверяют состояние дисков и механизмов, а не только сам комплект колодок."},
            {id:"brake_discs",title:"Тормозные диски",icon:"💿",theory:"Тормозной диск является рабочей поверхностью для колодок и отводит часть тепла.",how:"Колодки зажимают вращающийся диск, создавая тормозной момент.",symptoms:["вибрация при торможении","биение","глубокие борозды","перегрев"],checks:["толщина","биение","поверхность","трещины","равномерность износа"],tools:"Индикатор часового типа, микрометр/штангенциркуль, набор инструмента.",practice:"Решение о замене диска принимается по его состоянию и допустимым параметрам конкретного автомобиля."},
            {id:"abs",title:"ABS",icon:"🚨",theory:"ABS предотвращает длительную блокировку колёс при интенсивном торможении.",how:"Датчики скорости колёс передают данные блоку ABS, который управляет давлением в тормозных контурах.",symptoms:["лампа ABS","ошибки датчика","неправильная работа ABS"],checks:["коды ошибок","скорости колёс","датчики","проводка","разъёмы"],tools:"OBD-II/ABS-сканер, мультиметр.",practice:"Ошибка ABS может быть связана как с датчиком, так и с проводкой, кольцом или блоком управления."},
            {id:"brake_hydraulics",title:"Гидравлика тормозов",icon:"🧴",theory:"Гидравлический контур передаёт усилие от главного цилиндра к тормозным механизмам.",how:"Давление жидкости перемещает рабочие поршни и создаёт прижим колодок.",symptoms:["мягкая педаль","длинный ход","утечка","неравномерное торможение"],checks:["герметичность","уровень жидкости","воздух","шланги"],tools:"Набор для прокачки, тестер жидкости, стандартный инструмент.",practice:"После вмешательства в гидравлику проверяют педаль, герметичность и результат торможения."}
        ]
    },

    transmission: {
        title: "⚙️ Трансмиссия",
        topics: [
            {id:"manual_transmission",title:"МКПП",icon:"⚙️",theory:"Механическая коробка передач изменяет передаточное отношение между двигателем и колёсами, а передачи выбирает водитель.",how:"Шестерни разных передаточных отношений соединяются с валами через механизм переключения.",symptoms:["хруст","сложное включение передач","выбивание передачи","шум"],checks:["уровень/состояние масла по конструкции","механизм переключения","сцепление","утечки"],tools:"Подъёмник, набор инструмента, диагностический инструмент по задаче.",practice:"Проблема включения передачи не всегда означает неисправность самой коробки — проверяется и сцепление."},
            {id:"automatic_transmission",title:"АКПП",icon:"⚙️",theory:"Автоматическая коробка передач автоматически выбирает передаточное отношение и использует механическую, гидравлическую и электронную части.",how:"В зависимости от типа используются гидротрансформатор, фрикционы, планетарные механизмы и электронное управление.",symptoms:["удары","пробуксовка","задержка включения","неправильные переключения"],checks:["ошибки","уровень/состояние жидкости по регламенту","температура","параметры переключений"],tools:"OBD-II, диагностический сканер, подъёмник.",practice:"Уровень и процедура проверки жидкости зависят от конкретной коробки."},
            {id:"clutch",title:"Сцепление",icon:"🔧",theory:"Сцепление позволяет временно разъединять двигатель и трансмиссию и плавно передавать крутящий момент.",how:"При нажатии на педаль механизм размыкается, а при отпускании диски снова прижимаются.",symptoms:["пробуксовка","рывки","шум","сложное включение передач"],checks:["свободный ход","пробуксовка","работа привода","состояние диска и корзины при разборке"],tools:"Подъёмник, диагностический инструмент, набор для демонтажа коробки.",practice:"Замена сцепления — трудоёмкая работа, и в игре её цена будет зависеть от нормо-часов и типа автомобиля."},
            {id:"transmission_noise",title:"Шумы трансмиссии",icon:"🔊",theory:"Шум при движении может исходить из коробки, привода, подшипников или связанных узлов.",how:"Характер шума меняется в зависимости от скорости, передачи, нагрузки и поворота.",symptoms:["гул","вой","щелчки","вибрация"],checks:["скорость появления","передача","нагрузка","повороты","люфты"],tools:"Подъёмник, стетоскоп, диагностический сканер по необходимости.",practice:"Источник шума лучше подтверждать воспроизведением симптома, а не заменой деталей наугад."}
        ]
    },

    cooling: {
        title: "💧 Охлаждение",
        topics: [
            {id:"coolant",title:"Охлаждающая жидкость",icon:"💧",theory:"Охлаждающая жидкость переносит тепло от двигателя к радиатору.",how:"Жидкость циркулирует по каналам двигателя и радиатора, а система поддерживает заданный температурный режим.",symptoms:["перегрев","утечки","низкий уровень","запах ОЖ"],checks:["уровень","утечки","давление системы","температура"],tools:"Тестер давления, OBD-II, ареометр/рефрактометр при необходимости.",practice:"Уровень ОЖ проверяют на холодном двигателе по процедуре автомобиля."},
            {id:"thermostat",title:"Термостат",icon:"🌡️",theory:"Термостат регулирует поток охлаждающей жидкости между малым и большим кругом циркуляции.",how:"При изменении температуры клапан термостата открывает или ограничивает путь к радиатору.",symptoms:["долгий прогрев","перегрев","температура нестабильна"],checks:["температура по OBD","динамика прогрева","патрубки","поведение системы"],tools:"OBD-II, термометр, набор инструмента.",practice:"Неисправный термостат может быть как причиной перегрева, так и слишком низкой рабочей температуры."},
            {id:"cooling_fan",title:"Вентилятор охлаждения",icon:"🌀",theory:"Вентилятор увеличивает поток воздуха через радиатор, особенно на малой скорости и при остановке.",how:"Вентилятор включается по команде системы управления через соответствующий модуль, реле или блок.",symptoms:["перегрев в пробке","вентилятор не включается","слишком частое включение"],checks:["команда включения","питание","масса","предохранители","мотор вентилятора"],tools:"Мультиметр, OBD-II, контрольная лампа.",practice:"Если вентилятор не работает, проверяется вся электрическая цепь, а не только мотор."},
            {id:"radiator",title:"Радиатор",icon:"🌡️",theory:"Радиатор отводит тепло от охлаждающей жидкости в окружающий воздух.",how:"Горячая жидкость проходит через каналы, а воздушный поток охлаждает поверхность радиатора.",symptoms:["перегрев","плохое охлаждение","утечки","загрязнение"],checks:["проходимость","утечки","равномерность прогрева","состояние сот","вентилятор"],tools:"Тестер давления, термометр, OBD-II.",practice:"Частично забитый радиатор может ухудшать охлаждение даже при исправном вентиляторе."}
        ]
    },

    engine_types: {
        title: "⚙️ Типы двигателей",
        topics: [
            {id:"r3",title:"Рядный R3",icon:"3️⃣",theory:"Три цилиндра расположены в одном ряду. Такая конструкция компактна и часто используется на небольших автомобилях.",how:"Один ряд цилиндров упрощает компоновку, но двигатель может быть более чувствителен к состоянию опор и систем управления из-за особенностей балансировки.",symptoms:["вибрации","пропуски","потеря мощности","проблемы наддува у турбоверсий"],checks:["зажигание","смесь","опоры","компрессия"],tools:"OBD-II, компрессометр, стандартный инструмент.",practice:"Количество цилиндров влияет на сложность, количество деталей и трудоёмкость работ."},
            {id:"r4",title:"Рядный R4",icon:"4️⃣",theory:"Четыре цилиндра расположены в одном ряду. Это одна из самых распространённых компоновок.",how:"Конструкция относительно компактна и хорошо подходит для обучения базовым операциям.",symptoms:["пропуски","проблемы ГРМ","перегрев","утечки"],checks:["OBD","зажигание","ГРМ","охлаждение"],tools:"Стандартный инструмент, OBD-II, компрессометр.",practice:"В игре R4 будет одной из первых платформ для обучения серьёзному ремонту."},
            {id:"r5",title:"Рядный R5",icon:"5️⃣",theory:"Пять цилиндров расположены в одном ряду.",how:"Компоновка длиннее R4 и имеет свои особенности балансировки и компоновки навесного оборудования.",symptoms:["пропуски","проблемы впрыска","ГРМ","утечки"],checks:["зажигание/впрыск","компрессия","ГРМ","охлаждение"],tools:"OBD-II, компрессометр, стандартный инструмент.",practice:"Больше цилиндров — больше потенциальных точек диагностики и выше трудоёмкость некоторых работ."},
            {id:"r6",title:"Рядный R6",icon:"6️⃣",theory:"Шесть цилиндров расположены в одном ряду. Такая компоновка отличается плавностью работы, но двигатель получается длинным.",how:"Все цилиндры находятся в одной ГБЦ, если конструкция стандартная, но доступ к задней/передней части двигателя может зависеть от автомобиля.",symptoms:["пропуски","ГРМ","охлаждение","утечки"],checks:["цилиндры по отдельности","ГРМ","система охлаждения","впрыск/зажигание"],tools:"OBD-II, компрессометр, специализированный инструмент.",practice:"Работа с R6 обычно требует больше времени, чем аналогичная базовая операция на R4."},
            {id:"v6",title:"V6",icon:"🔻",theory:"Шесть цилиндров расположены двумя рядами по три. Конструкция компактнее длинного R6 по длине двигателя.",how:"Две стороны двигателя могут иметь отдельные компоненты и более сложный доступ к некоторым деталям.",symptoms:["пропуски по банкам/цилиндрам","ГРМ","утечки","проблемы впуска и выпуска"],checks:["диагностика цилиндров","обе стороны двигателя","ГРМ","впуск/выпуск"],tools:"OBD-II, стандартный и специализированный инструмент.",practice:"Цена и нормо-часы в игре будут выше, чем на типовых R4, для части операций."},
            {id:"v8",title:"V8",icon:"8️⃣",theory:"Восемь цилиндров расположены двумя рядами по четыре.",how:"Две банки цилиндров увеличивают количество компонентов и операций при обслуживании.",symptoms:["пропуски","зажигание","ГРМ","утечки","проблемы выпуска"],checks:["каждая банка","цилиндры","синхронизация","впрыск/зажигание"],tools:"OBD-II и расширенный набор инструмента.",practice:"Некоторые работы на V8 получают повышающий коэффициент трудоёмкости."},
            {id:"v10",title:"V10",icon:"🔟",theory:"Десять цилиндров расположены двумя рядами по пять.",how:"Большое число цилиндров и компонентов увеличивает объём диагностики и ремонта.",symptoms:["пропуски","проблемы впрыска","зажигание","ГРМ","охлаждение"],checks:["цилиндры по группам","обе банки","ГРМ","температура"],tools:"Профессиональный инструмент и диагностика.",practice:"V10 относится к более поздним уровням карьеры мастера."},
            {id:"v12",title:"V12",icon:"🔱",theory:"Двенадцать цилиндров расположены двумя рядами по шесть. Такая силовая установка имеет большое количество компонентов и высокую стоимость обслуживания.",how:"Две банки и сложная компоновка увеличивают число операций, деталей и требования к доступу.",symptoms:["пропуски","проблемы ГРМ","впрыск","зажигание","охлаждение"],checks:["обе банки","все связанные системы","синхронизация","температура"],tools:"Профессиональный инструмент, диагностика и специальные приспособления.",practice:"В игре V12 будет одним из дорогих и трудоёмких вариантов ремонта."},
            {id:"boxer6",title:"Оппозитный Boxer-6",icon:"↔️",theory:"Шесть цилиндров расположены горизонтально противоположно, по три с каждой стороны.",how:"Низкий центр тяжести — одно из преимуществ компоновки, но доступ к некоторым деталям может быть специфичным.",symptoms:["утечки","пропуски","охлаждение","зажигание","сложный доступ"],checks:["обе стороны","свечи","утечки","ГРМ"],tools:"Специализированный инструмент в зависимости от модели.",practice:"Некоторые операции требуют работы с обеих сторон двигателя."},
            {id:"wankel",title:"Роторный Wankel",icon:"🔺",theory:"Вместо обычных поршней используется вращающийся ротор. Рабочие камеры формируются внутри корпуса специальной формы.",how:"Ротор совершает вращательное движение и выполняет функции, которые в поршневом двигателе разделены между поршнями и клапанным механизмом.",symptoms:["низкая компрессия","проблемы уплотнений","зажигание","перегрев"],checks:["компрессия","зажигание","состояние уплотнений","температура"],tools:"Специализированный диагностический инструмент.",practice:"Роторные двигатели будут отдельной веткой обучения с собственными допусками."},
            {id:"diesel",title:"Дизель",icon:"🛢️",theory:"Дизельный двигатель воспламеняет топливо за счёт высокой температуры воздуха после сильного сжатия.",how:"Важную роль играют топливная аппаратура высокого давления, форсунки, свечи накаливания и наддув у соответствующих версий.",symptoms:["трудный холодный запуск","дымность","неровная работа","проблемы форсунок","недостаток мощности"],checks:["свечи накаливания","давление топлива","форсунки","OBD","наддув"],tools:"OBD-II, мультиметр, диагностический инструмент дизельных систем.",practice:"Дизельные работы будут иметь отдельные задания и проверки в обучении."}
        ]
    },

    climate: {
        title: "❄️ Кондиционер и климат",
        topics: [
            {id:"ac_system",title:"Система кондиционирования",icon:"❄️",theory:"Система кондиционирования отводит тепло из салона с помощью хладагента, компрессора, конденсора, испарителя и элементов расширения.",how:"Компрессор циркулирует хладагент по контуру, конденсор отдаёт тепло, а испаритель охлаждает воздух в салоне.",symptoms:["не холодит","слабо охлаждает","компрессор часто включается","посторонний шум"],checks:["температура воздуха","давление по процедуре","утечки","работа компрессора","вентилятор конденсора"],tools:"Манометрический комплект, термометр, течеискатель/УФ-краситель по процедуре.",practice:"Нельзя автоматически считать причиной недостаток хладагента: сначала оцениваются симптомы и состояние контура."},
            {id:"ac_pressure",title:"Давление в контуре",icon:"📈",theory:"Давления на сторонах высокого и низкого давления помогают оценить работу системы, но интерпретируются с учётом температуры и режима работы.",how:"Показания сравниваются с условиями проверки и требованиями конкретной системы.",symptoms:["плохое охлаждение","обмерзание","необычные циклы компрессора"],checks:["низкое давление","высокое давление","температура воздуха","температура окружающей среды"],tools:"Манометрический комплект и термометр.",practice:"Одного показания давления недостаточно для диагноза без учёта температуры и режима работы."},
            {id:"ac_leak",title:"Поиск утечки хладагента",icon:"🔎",theory:"Утечка приводит к постепенной потере хладагента и ухудшению эффективности системы.",how:"Место утечки ищут по следам масла/красителя, электронным течеискателем или другим разрешённым методом.",symptoms:["система постепенно перестала холодить","следы масла на соединениях","частое падение давления"],checks:["соединения","радиаторы/конденсор","компрессор","испаритель при необходимости"],tools:"Течеискатель, УФ-лампа и оборудование для обслуживания системы.",practice:"После устранения утечки система проверяется повторно, а не просто дозаправляется."}
        ]
    },
    steering: {
        title: "🛞 Рулевое управление и развал-схождение",
        topics: [
            {id:"wheel_alignment",title:"Развал-схождение",icon:"📐",theory:"Углы установки колёс влияют на прямолинейность движения, устойчивость и износ шин.",how:"Стенд измеряет геометрию колёс, после чего регулируются предусмотренные конструкцией углы.",symptoms:["увод в сторону","руль стоит криво","неравномерный износ шин","машину тянет при разгоне или торможении"],checks:["давление шин","люфты подвески","геометрия кузова","углы установки колёс"],tools:"Стенд развал-схождения и подъёмник.",practice:"Перед регулировкой необходимо исключить люфты и неисправности подвески, иначе регулировка может не решить проблему."},
            {id:"steering_play",title:"Люфт рулевого управления",icon:"🛞",theory:"Люфт может возникать в наконечниках, тягах, шарнирах, рейке или других элементах рулевого механизма.",how:"При проверке оценивают свободное перемещение руля и отдельно проверяют соединения рулевого привода.",symptoms:["люфт руля","стук при повороте","неуверенное удержание траектории"],checks:["наконечники","тяги","пыльники","рейка","крепления"],tools:"Подъёмник, монтажный инструмент, индикатор при необходимости.",practice:"Нельзя менять рулевую рейку только по наличию люфта в руле — сначала локализуют источник."},
            {id:"power_steering",title:"Усилитель руля",icon:"🔧",theory:"Усилитель уменьшает усилие на руле. В зависимости от автомобиля он может быть гидравлическим, электрогидравлическим или электрическим.",how:"Система создаёт дополнительный момент, помогающий поворачивать рулевой механизм.",symptoms:["тяжёлый руль","неравномерное усилие","шум при повороте","ошибка усилителя"],checks:["уровень жидкости при наличии","питание","ошибки","утечки","работа электромотора или насоса"],tools:"OBD-II, мультиметр, манометр гидросистемы по конструкции.",practice:"Сначала определяется тип усилителя, затем выбирается соответствующая схема проверки."}
        ]
    },
    exhaust: {
        title: "🌫️ Выхлоп и экология",
        topics: [
            {id:"exhaust_system",title:"Выхлопная система",icon:"🌫️",theory:"Выхлопная система отводит продукты сгорания и снижает шум и токсичность выбросов.",how:"Газы проходят через выпускной коллектор, катализатор и глушители в зависимости от конструкции.",symptoms:["шум выхлопа","запах газов","потеря мощности","Check Engine"],checks:["утечки","крепления","противодавление при необходимости","датчики кислорода"],tools:"OBD-II, визуальный осмотр, измерительное оборудование по задаче.",practice:"Потеря мощности может быть связана с ограничением выхлопа, но это подтверждают измерением, а не предположением."},
            {id:"catalyst",title:"Катализатор",icon:"♻️",theory:"Катализатор снижает содержание некоторых вредных компонентов выхлопа за счёт химических реакций на активном покрытии.",how:"Эффективность оценивается по данным датчиков и другим признакам, предусмотренным диагностикой автомобиля.",symptoms:["ошибка эффективности","запах выхлопа","потеря мощности при разрушении или забивании"],checks:["коды ошибок","сигналы датчиков","температуры","противодавление при подозрении на ограничение"],tools:"OBD-II, пирометр/термодатчики, оборудование для проверки противодавления.",practice:"Ошибка эффективности катализатора не означает автоматически механически забитый катализатор."},
            {id:"oxygen_sensor",title:"Датчики кислорода",icon:"🧪",theory:"Датчики кислорода помогают системе управления оценивать состав выхлопа и корректировать смесь в зависимости от типа системы.",how:"ЭБУ использует их сигналы вместе с другими параметрами двигателя.",symptoms:["расход топлива","коррекции смеси","Check Engine","нестабильная работа"],checks:["коды","Live Data","реакция сигнала","проводка и питание"],tools:"OBD-II, мультиметр по схеме, осциллограф на продвинутом уровне.",practice:"Медленный или необычный сигнал датчика сначала сопоставляют с реальным состоянием смеси и проводки."}
        ]
    },
    lighting: {
        title: "💡 Освещение и кузовная электрика",
        topics: [
            {id:"lighting_circuit",title:"Цепь освещения",icon:"💡",theory:"Фары и фонари получают питание через предохранители, реле, блоки управления и проводку в зависимости от конструкции.",how:"Команда включения проходит через соответствующий управляющий элемент к потребителю.",symptoms:["не горит фара","пропадает свет","мигает лампа","ошибка освещения"],checks:["лампа/LED-модуль","предохранитель","питание","масса","управляющий сигнал"],tools:"Мультиметр, контрольная лампа, схема автомобиля.",practice:"Если одна лампа не работает, сначала сравнивают питание и массу с исправной стороной."},
            {id:"body_modules",title:"Блоки кузовной электроники",icon:"🧠",theory:"Современные автомобили используют электронные блоки для управления освещением, замками, стеклоподъёмниками и другими функциями.",how:"Блоки обмениваются данными по автомобильным сетям и управляют исполнительными устройствами.",symptoms:["несколько функций отказали","периодические ошибки","ошибка связи"],checks:["напряжение питания","масса","коды связи","разъёмы","состояние сети"],tools:"OBD-II, мультиметр и диагностический сканер.",practice:"Несколько одновременно отказавших функций могут указывать на общее питание или связь, а не на несколько сломанных деталей."},
            {id:"lamp_alignment",title:"Регулировка фар",icon:"🔦",theory:"Правильная регулировка фар обеспечивает необходимую зону освещения и не должна ослеплять встречных участников движения.",how:"Положение светового пучка регулируется по процедуре автомобиля и требованиям оборудования.",symptoms:["плохо освещает дорогу","светит слишком высоко","разный уровень фар"],checks:["давление шин","положение автомобиля","уровень кузова","световой пучок"],tools:"Стенд/прибор регулировки фар.",practice:"Регулировку выполняют после проверки условий, влияющих на положение кузова."}
        ]
    },
    noises: {
        title: "🔊 Посторонние шумы и вибрации",
        topics: [
            {id:"engine_noise",title:"Цокот и стук двигателя",icon:"🔊",theory:"Шум двигателя может быть связан с клапанным механизмом, приводом ГРМ, навесным оборудованием или внутренними деталями.",how:"Источник шума локализуют по месту, частоте, зависимости от оборотов и температуры.",symptoms:["цокот на холодную","стук под нагрузкой","шум после прогрева","шум меняется с оборотами"],checks:["уровень масла","температура","локализация шума","OBD","давление масла при необходимости"],tools:"Механический стетоскоп, OBD-II, манометр и базовый инструмент.",practice:"Один и тот же звук может иметь разные причины; важна зависимость шума от режима работы."},
            {id:"wheel_bearing_noise",title:"Гул ступичного подшипника",icon:"⚙️",theory:"Изношенный ступичный подшипник может создавать гул, меняющийся со скоростью и иногда с нагрузкой на повороте.",how:"При диагностике сравнивают шум на разных скоростях и проверяют люфт/состояние ступицы.",symptoms:["гул с ростом скорости","изменение шума в повороте","люфт колеса"],checks:["дорожный тест","люфт","вращение колеса","сравнение сторон"],tools:"Подъёмник, стетоскоп/шумомер при наличии, ручной инструмент.",practice:"Гул шины и гул подшипника могут быть похожи, поэтому нужна проверка в движении и на подъёмнике."},
            {id:"vibration",title:"Вибрация автомобиля",icon:"📳",theory:"Вибрация может возникать из-за колёс, приводов, двигателя, подвески или трансмиссии.",how:"Сначала определяют, зависит ли вибрация от скорости автомобиля, оборотов двигателя или режима нагрузки.",symptoms:["вибрация на скорости","вибрация при разгоне","вибрация на холостом ходу","вибрация при торможении"],checks:["балансировка","состояние шин","опоры двигателя","приводы","тормозные диски"],tools:"Балансировочный стенд, подъёмник, OBD-II и измерительный инструмент.",practice:"Ключевой вопрос — когда именно появляется вибрация: это помогает разделить причины по системам."}
        ]
    },
    measurements: {
        title: "📐 Измерения и нормы",
        topics: [
            {id:"voltage_drop",title:"Падение напряжения",icon:"📟",theory:"Падение напряжения показывает потерю напряжения на участке цепи под нагрузкой.",how:"Измерение выполняется непосредственно на участке цепи при работающем потребителе.",symptoms:["медленный стартер","слабый свет","нестабильная электроника"],checks:["плюс до потребителя","масса до потребителя","соединения","клеммы"],tools:"Мультиметр.",practice:"Измерение сопротивления без нагрузки не всегда выявляет плохой контакт; падение напряжения под нагрузкой информативнее."},
            {id:"compression_test",title:"Компрессия",icon:"📈",theory:"Компрессия отражает способность цилиндра создавать давление при прокрутке двигателя.",how:"Значения сравнивают между цилиндрами и с требованиями конкретного двигателя.",symptoms:["трудный запуск","троение","потеря мощности","расход масла"],checks:["все цилиндры","повторяемость измерения","условия теста","дополнительная проверка при отклонении"],tools:"Компрессометр.",practice:"Одно низкое значение требует дальнейшего поиска причины, а не автоматической замены двигателя."},
            {id:"fuel_trim",title:"Топливные коррекции",icon:"📊",theory:"Краткосрочные и долгосрочные коррекции показывают, как система управления изменяет подачу топлива относительно базового расчёта.",how:"Значения оцениваются вместе с оборотами, нагрузкой, температурой и другими параметрами.",symptoms:["бедная смесь","богатая смесь","нестабильный холостой ход","расход топлива"],checks:["STFT/LTFT","MAF/MAP","подсос воздуха","давление топлива","датчики кислорода"],tools:"OBD-II сканер.",practice:"Отклонённая коррекция — это признак направления поиска, а не готовый диагноз конкретной детали."}
        ]
    },
    tools: {
        title: "🧰 Инструменты и оборудование",
        topics: [
            {id:"tool_selection",title:"Выбор инструмента",icon:"🧰",theory:"Инструмент выбирают по задаче: механическая проверка, электрическое измерение, диагностика или специализированная операция.",how:"Сначала определяется требуемое измерение или действие, затем выбирается подходящее оборудование.",symptoms:["неизвестная причина","нужна проверка питания","нужна проверка давления","нужна диагностика блока"],checks:["что нужно измерить","условия проверки","допуск инструмента","безопасность"],tools:"Набор инструмента, мультиметр, OBD-II, манометр и специализированное оборудование.",practice:"Наличие дорогого инструмента не заменяет правильный выбор метода проверки."},
            {id:"multimeter_safety",title:"Безопасность мультиметра",icon:"⚠️",theory:"Режим измерения мультиметра должен соответствовать измеряемому параметру и месту подключения.",how:"Перед измерением выбирают режим, диапазон и правильные гнёзда щупов.",symptoms:["нет измерения","перегорел предохранитель мультиметра","ошибка подключения"],checks:["режим","гнёзда щупов","полярность","схема цепи"],tools:"Мультиметр и документация.",practice:"Измерение тока требует особой осторожности: неправильное подключение может создать короткое замыкание."},
            {id:"lift_safety",title:"Безопасность на подъёмнике",icon:"🏗️",theory:"Подъёмник должен использоваться по точкам подъёма и с соблюдением правил устойчивости автомобиля.",how:"Перед подъёмом проверяют положение автомобиля, точки опоры и отсутствие препятствий.",symptoms:["автомобиль нестабилен","неясны точки подъёма","нужен доступ снизу"],checks:["точки подъёма","фиксация","устойчивость","состояние оборудования"],tools:"Подъёмник и страховочные элементы.",practice:"В игре доступ к сложным операциям на подъёмнике будет зависеть от уровня оборудования и мастерства."}
        ]
    },
    body: {
        title: "🚗 Кузов и салон",
        topics: [
            {id:"body_inspection",title:"Осмотр кузова",icon:"🚗",theory:"Кузов осматривают на повреждения, следы ремонта, коррозию и состояние наружных элементов.",how:"Осмотр проводят при хорошем освещении, сравнивая симметричные элементы и зоны возможных повреждений.",symptoms:["вибрации","шумы","следы ДТП","коррозия","неравномерные зазоры"],checks:["зазоры","лакокрасочное покрытие","крепления","коррозия","днище"],tools:"Осветитель, толщиномер покрытия, подъёмник при необходимости.",practice:"Неравномерный зазор сам по себе не доказывает серьёзное повреждение — его сопоставляют с другими признаками."},
            {id:"body_corrosion",title:"Коррозия",icon:"🟤",theory:"Коррозия разрушает металл и может затрагивать не только внешний слой, но и силовые элементы кузова.",how:"Оценивают площадь, глубину и расположение коррозии.",symptoms:["пузыри краски","рыжие пятна","ослабление металла"],checks:["визуальный осмотр","толщина покрытия","днище","силовые зоны"],tools:"Осветитель, толщиномер, инструмент для осмотра.",practice:"Коррозия силовых элементов требует более серьёзной оценки, чем поверхностный дефект окраски."},
            {id:"interior_controls",title:"Органы управления салона",icon:"🪑",theory:"Органы управления объединяют механические и электронные элементы: кнопки, переключатели, приводы и блоки управления.",how:"При неисправности определяют, не работает один элемент или целая группа связанных функций.",symptoms:["не работает стеклоподъёмник","не работает кнопка","пропадает функция","ошибка блока"],checks:["предохранители","питание","масса","кнопка","проводка","блок управления"],tools:"Мультиметр, OBD-II и схема автомобиля.",practice:"Несколько отказавших функций одновременно заставляют искать общую причину."},
            {id:"egr_diesel",title:"EGR на дизеле",icon:"🌫️",theory:"EGR возвращает часть отработавших газов во впуск для снижения образования некоторых оксидов азота.",how:"Клапан и система управления дозируют рециркуляцию в зависимости от режима работы двигателя.",symptoms:["потеря мощности","неровный холостой ход","дымность","ошибки EGR"],checks:["команда и фактическое положение","герметичность","загрязнение","Live Data"],tools:"OBD-II и стандартный инструмент по задаче.",practice:"Ошибка EGR не означает автоматически замену клапана: сначала проверяют управление и состояние системы."}
        ]
    }

};

function getAllKnowledgeTopics() {
    const result = [];
    Object.entries(knowledgeBase).forEach(([categoryId, category]) => {
        category.topics.forEach(topic => {
            result.push({ ...topic, categoryId, categoryTitle: category.title });
        });
    });
    return result;
}

function ensureKnowledgeState() {
    if (!state.knowledge) state.knowledge = { studied: {}, version: 3 };
    if (!state.knowledge.studied) state.knowledge.studied = {};
}

function isKnowledgeStudied(id) {
    ensureKnowledgeState();
    return !!state.knowledge.studied[id];
}

function studyKnowledgeTopic(id) {
    ensureKnowledgeState();
    state.knowledge.studied[id] = true;
    save();
    showToast("📖 Тема изучена");
    openKnowledgeTopic(id);
}

function openKnowledgeMenu() {
    ensureKnowledgeState();
    const all = getAllKnowledgeTopics();
    const studied = all.filter(t => isKnowledgeStudied(t.id)).length;

    openModal(`
        <div class="knowledge-header">
            <div>
                <h2>📚 База знаний</h2>
                <p>Теория автомеханика, диагностика, устройство узлов и подготовка к практическим работам.</p>
            </div>
            <div class="knowledge-progress"><b>${studied}/${all.length}</b><span>изучено</span></div>
        </div>
        <div class="knowledge-category-grid">
            ${Object.entries(knowledgeBase).map(([id, c]) => {
                const done = c.topics.filter(t => isKnowledgeStudied(t.id)).length;
                return `<button class="knowledge-category" onclick="openKnowledgeCategory('${id}')">
                    <b>${c.title}</b><small>${done}/${c.topics.length} тем изучено</small>
                </button>`;
            }).join("")}
        </div>
        <div class="knowledge-search">
            <input id="knowledgeSearchInput" placeholder="🔎 Найти тему или симптом">
            <button class="action-button knowledge-search-button" onclick="runKnowledgeSearch()">Найти</button>
        </div>
        <div class="knowledge-future">
            <b>🎓 Обучение и допуски</b>
            <p>${state.training?.timing ? "⛓️ Допуск к ГРМ получен." : "⛓️ Для работы с ГРМ потребуется тест без ошибок."}</p>
            <button class="action-button knowledge-study-button" onclick="openTrainingTests()">📝 Тесты и допуски</button>
        </div>
    `);
}

function openKnowledgeCategory(id) {
    const category = knowledgeBase[id];
    if (!category) return;
    const done = category.topics.filter(t => isKnowledgeStudied(t.id)).length;

    openModal(`
        <h2>${category.title}</h2>
        <p>Изучено: <b>${done}/${category.topics.length}</b></p>
        <div class="knowledge-topic-list">
            ${category.topics.map(t => `
                <button class="knowledge-topic ${isKnowledgeStudied(t.id) ? "studied" : ""}" onclick="openKnowledgeTopic('${t.id}')">
                    <span>${t.icon}</span>
                    <div><b>${t.title}</b><small>${isKnowledgeStudied(t.id) ? "✅ Изучено" : "📖 Изучить тему"}</small></div>
                </button>
            `).join("")}
        </div>
        <button class="action-button" onclick="openKnowledgeMenu()">← Все разделы</button>
    `);
}

function openKnowledgeTopic(id) {
    const topic = getAllKnowledgeTopics().find(t => t.id === id);
    if (!topic) return;

    const studied = isKnowledgeStudied(id);
    openModal(`
        <div class="knowledge-article">
            <div class="knowledge-article-title">
                <h2>${topic.icon} ${topic.title}</h2>
                ${studied ? `<span class="knowledge-badge">✅ Изучено</span>` : ""}
            </div>

            <div class="knowledge-block">
                <h3>📖 Теория</h3>
                <p>${topic.theory}</p>
            </div>
            <div class="knowledge-block">
                <h3>⚙️ Как работает</h3>
                <p>${topic.how}</p>
            </div>
            <div class="knowledge-block">
                <h3>⚠️ Признаки неисправности</h3>
                <ul>${topic.symptoms.map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
            <div class="knowledge-block">
                <h3>🔍 Что проверять</h3>
                <ol>${topic.checks.map(x => `<li>${x}</li>`).join("")}</ol>
            </div>
            <div class="knowledge-block">
                <h3>🧰 Инструменты</h3>
                <p>${topic.tools}</p>
            </div>
            <div class="knowledge-practice">
                <h3>🎓 Практика мастера</h3>
                <p>${topic.practice}</p>
            </div>

            <div class="knowledge-future">
                <b>🔒 Связь с обучением</b>
                <p>Эта тема будет использоваться в тестах и допусках. Для сложных работ недостаточно просто открыть статью — нужно будет подтвердить знания.</p>
            </div>
        </div>
        ${studied ? "" : `<button class="action-button knowledge-study-button" onclick="studyKnowledgeTopic('${id}')">📖 Изучить и отметить тему</button>`}
        <button class="action-button secondary-button" onclick="openKnowledgeCategory('${topic.categoryId}')">← Назад к разделу</button>
    `);
}

function runKnowledgeSearch() {
    const q = (document.getElementById("knowledgeSearchInput")?.value || "").toLowerCase().trim();
    if (!q) return openKnowledgeMenu();

    const result = getAllKnowledgeTopics().filter(t => {
        const haystack = [t.title, t.theory, t.how, t.tools, t.practice, ...t.symptoms, ...t.checks].join(" ").toLowerCase();
        return haystack.includes(q);
    });

    openModal(`
        <h2>🔎 Результаты поиска</h2>
        ${result.length ? `<div class="knowledge-topic-list">${result.map(t => `
            <button class="knowledge-topic" onclick="openKnowledgeTopic('${t.id}')">
                <span>${t.icon}</span><div><b>${t.title}</b><small>${t.categoryTitle}</small></div>
            </button>`).join("")}</div>` : `<div class="diagnosis-result">Ничего не найдено. Попробуй название узла или симптом.</div>`}
        <button class="action-button" onclick="openKnowledgeMenu()">← База знаний</button>
    `);
}

/* Старый интерфейс совместимости: другие части игры могут вызывать openKnowledge(category). */
function openKnowledge(category) {
    openKnowledgeCategory(category);
}


/* =========================================================
   СОСТОЯНИЕ ИГРЫ
========================================================= */

const defaultState = {
    money: 15000,
    reputation: 0,
    premium: 0,
    level: 1,
    xp: 0,

    day: 1,
    time: 480,

    equipment: 100,

    repairFacilities: {
        toolRepair: false,
        partRestoration: false
    },

    garage: {
        level: 1,
        posts: 1
    },

    currentOrder: null,

    history: [],

    partsWarehouse: [],

    // АУКЦИОН
    auctionListings: [],
    ownedCars: [],
    auctionDay: 0,

    lastProblemId: null,

    knowledge: {
        studied: {},
        version: 2
    },

    training: {
        timing: false
    },
    tools: {
        basic: true, obd: false, multimeter: false, tire_gauge: false,
        manometer: false, smoke: false, lift: false, alignment: false, balancer: false
    }
};


let state =
    JSON.parse(
        localStorage.getItem(SAVE_KEY) ||
        localStorage.getItem("auto_service_v03") ||
        "null"
    ) || structuredClone(defaultState);

state.premium = Number.isFinite(Number(state.premium)) ? Math.max(0, Number(state.premium)) : 0;
state.tools = Object.assign({}, defaultState.tools, state.tools || {});
state.tools.basic = true;
state.repairFacilities = Object.assign({ toolRepair:false, partRestoration:false }, state.repairFacilities || {});
state.equipment = Number.isFinite(Number(state.equipment)) ? Math.max(0, Math.min(100, Number(state.equipment))) : 100;
state.partsWarehouse = Array.isArray(state.partsWarehouse) ? state.partsWarehouse : [];
state.partsWarehouse.forEach(item => {
    if (typeof item.condition !== 'number') item.condition = 50;
    if (!item.status) item.status = 'used';
    if (item.restoreAvailable === undefined) item.restoreAvailable = !!state.repairFacilities.partRestoration;
});
state.auctionListings = Array.isArray(state.auctionListings) ? state.auctionListings : [];
state.ownedCars = Array.isArray(state.ownedCars) ? state.ownedCars : [];
state.auctionDay = Number.isFinite(Number(state.auctionDay)) ? Number(state.auctionDay) : 0;

// Восстановление старых сохранений: заказы, созданные до добавления
// двигателя/трансмиссии/сложности, могли сохранить эти поля пустыми.
// Заполняем их из базы автомобилей и самой неисправности, не сбрасывая заказ.
function migrateCurrentOrder() {
    const order = state.currentOrder;
    if (!order || !order.car) return;

    const carBase = cars.find(c =>
        c.brand === order.car.brand && c.model === order.car.model
    );

    if (carBase) {
        const problem = order.problem || {};

        if (!order.car.engine) {
            const engines = carBase.engines || [];
            const wantedDiesel = problem.fuelType === "diesel";
            const wantedPetrol = problem.fuelType === "petrol";
            order.car.engine = engines.find(e =>
                wantedDiesel ? /дизель/i.test(e) :
                wantedPetrol ? !/дизель/i.test(e) : true
            ) || engines[0] || "R4 бензин";
        }

        if (!order.car.transmission) {
            const transmissions = carBase.transmissions || [];
            const wantedAutomatic = problem.transmissionType === "automatic";
            order.car.transmission = transmissions.find(t =>
                wantedAutomatic ? /АКПП|CVT|АМТ/i.test(t) : true
            ) || transmissions[0] || "МКПП";
        }

        if (!order.car.year) {
            order.car.year = (carBase.years || [2015])[0];
        }
    }

    if (order.problem) {
        order.difficulty = order.difficulty || order.problem.difficulty || "🟢 Простая";
        order.requiredLevel = order.requiredLevel || order.problem.minLevel || 1;
        order.requiredTraining = order.requiredTraining || qualificationForProblem(order.problem);
    }

    save();
}

migrateCurrentOrder();

function isOrderCompatible(order) {
    if (!order || !order.car || !order.problem) return false;
    const engine = String(order.car.engine || "");
    const transmission = String(order.car.transmission || "");
    const isDiesel = /дизель/i.test(engine);
    const isAutomatic = /АКПП|CVT|АМТ/i.test(transmission);
    const p = order.problem;
    if (p.fuelType === "diesel" && !isDiesel) return false;
    if (p.fuelType === "petrol" && isDiesel) return false;
    if (p.transmissionType === "automatic" && !isAutomatic) return false;
    return true;
}

// Защита старых сохранений: если старый заказ был создан с несовместимой
// комбинацией автомобиля и неисправности, он автоматически заменяется.
if (state.currentOrder && !isOrderCompatible(state.currentOrder)) {
    state.currentOrder = null;
}

ensureKnowledgeState();


/* =========================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
========================================================= */

const $ = id =>
    document.getElementById(id);


function save() {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(state)
    );
}


function money(value) {

    return new Intl.NumberFormat(
        "ru-RU"
    ).format(Math.round(value)) + " ₽";
}


function random(arr) {

    return arr[
        Math.floor(
            Math.random() * arr.length
        )
    ];
}

function randomWeightedList(arr) {
    const total = arr.reduce((sum, item) => sum + (Number(item.weight) || 1), 0);
    let roll = Math.random() * total;
    for (const item of arr) {
        roll -= Number(item.weight) || 1;
        if (roll <= 0) return item;
    }
    return arr[arr.length - 1];
}


function randomInt(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}


function timeText(minutes) {

    const h =
        Math.floor(minutes / 60);

    const m =
        minutes % 60;

    return (
        String(h).padStart(2, "0")
        + ":" +
        String(m).padStart(2, "0")
    );
}


function addTime(minutes) {
    state.time += Math.max(0, Number(minutes) || 0);
    if (state.time >= 1320) {
        state.time = 1320;
        showToast("⏰ Рабочий день закончился");
    }
}


function useEquipment(amount) {

    state.equipment =
        Math.max(
            0,
            state.equipment - amount
        );
}


function addXP(amount) {

    state.xp += amount;

    let need =
        100 +
        (state.level - 1) * 50;

    while (
        state.xp >= need
    ) {

        state.xp -= need;

        state.level++;

        addReputation(3);

        showToast(
            `🎉 Новое мастерство: уровень ${state.level}`
        );

        need =
            100 +
            (state.level - 1) * 50;
    }
}


function addReputation(amount) {

    // Один игровой результат не может дать больше +5/-5 репутации.
    const delta = Math.max(-5, Math.min(5, Math.round(amount)));
    state.reputation += delta;

    state.reputation =
        Math.max(
            0,
            Math.min(100, state.reputation)
        );

    return delta;
}


/* =========================================================
   ГЕНЕРАТОР ЗАКАЗА
========================================================= */

function generateOrder() {

    let problem;
    let attempts = 0;
    // Сначала выбираем автомобиль, затем подбираем только совместимые с ним заказы.
    // Это не позволяет получить, например, дизельную неисправность на бензиновой Granta.
    const car = randomWeightedList(cars);
    const engine = random(car.engines || ["R4 бензин"]);
    const transmission = random(car.transmissions || ["МКПП"]);
    const isDiesel = /дизель/i.test(engine);
    const isAutomatic = /АКПП|CVT|АМТ/i.test(transmission);

    const eligibleProblems = problems.filter(p => {
        if ((p.minLevel || 1) > state.level) return false;
        const req = qualificationForProblem(p);
        if (req && !hasQualification(req)) return false;
        if (p.fuelType === "diesel" && !isDiesel) return false;
        if (p.fuelType === "petrol" && isDiesel) return false;
        if (p.transmissionType === "automatic" && !isAutomatic) return false;
        return true;
    });
    const pool = eligibleProblems.length ? eligibleProblems : problems.filter(p => {
        if (p.fuelType === "diesel" && !isDiesel) return false;
        if (p.fuelType === "petrol" && isDiesel) return false;
        if (p.transmissionType === "automatic" && !isAutomatic) return false;
        return true;
    });

    do {
        problem = randomWeightedList(pool.length ? pool : problems);
        attempts++;
    } while (problem.id === state.lastProblemId && attempts < 10);

    const client =
        random(clients);

    const year =
        random(car.years);

    const mileage =
        randomInt(70000, 260000);

    const complaint =
        random(problem.complaints);

    const correctCause =
        randomWeighted(problem.causes);


    const scenario = {

        id:
            Date.now()
            + Math.random(),

        car: {

            brand:
                car.brand,

            model:
                car.model,

            year:
                year,

            mileage:
                mileage,

            icon:
                car.icon,

            engine: engine,
            transmission: transmission
        },

        difficulty: problem.difficulty || "🟢 Простая",
        requiredLevel: problem.minLevel || 1,
        requiredTraining: qualificationForProblem(problem),

        client: client,

        problem: problem,

        complaint: complaint,

        correctCause:
            correctCause.id,

        diagnosisPrice:
            randomInt(600, 1200),

        checks: {},

        history: [],

        diagnosisComplete: false,

        selectedCause: null,

        repair: null,

        agreed: false,

        completed: false,

        knowledgeUsed: false,

        diagnosisPaid: false,
        partOptions: [],
        selectedPartId: null
    };


    Object.keys(
        problem.checks
    ).forEach(key => {

        scenario.checks[key] =
            problem.checks[key];
    });


    state.lastProblemId =
        problem.id;

    state.currentOrder =
        scenario;


    save();

    return scenario;
}


function randomWeighted(items) {

    const total =
        items.reduce(
            (sum, item) =>
                sum + item.probability,
            0
        );

    let value =
        Math.random() * total;

    for (
        const item of items
    ) {

        value -= item.probability;

        if (
            value <= 0
        ) {

            return item;
        }
    }

    return items[0];
}


/* =========================================================
   МОДАЛЬНОЕ ОКНО
========================================================= */

function openModal(html) {

    const modalContent = $("modalContent");
    const modal = $("modal");
    const isAuction = /auction-screen|auction-inspection-screen/.test(String(html));

    modalContent.innerHTML = html;
    modalContent.classList.toggle("auction-content", isAuction);
    modal.classList.toggle("auction-modal", isAuction);
    modal.classList.add("show");
}


function closeModal() {

    $("modal").classList.remove("show", "auction-modal");
    $("modalContent").classList.remove("auction-content");
}


/* =========================================================
   УВЕДОМЛЕНИЯ
========================================================= */

function showToast(text) {

    const toast =
        $("toast");

    toast.textContent =
        text;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            2500
        );
}


/* =========================================================
   RENDER
========================================================= */

function renderBase() {

    $("money").textContent =
        money(state.money);

    $("reputation").textContent =
        state.reputation;

    $("level").textContent =
        state.level;


    const need =
        100 +
        (state.level - 1) * 50;

    $("xp").textContent =
        `${state.xp} / ${need}`;

    const xpBar = $("xpBar");
    if (xpBar) xpBar.style.width = `${Math.max(0, Math.min(100, (state.xp / need) * 100))}%`;


    const warehouseCount = document.getElementById("warehouseCount");
    if (warehouseCount) {
        const n = (state.partsWarehouse || []).length;
        warehouseCount.textContent = `${n} ${n === 1 ? "деталь" : (n >= 2 && n <= 4 ? "детали" : "деталей")}`;
    }

    const order =
        state.currentOrder;

    const startBtn = $("startDiagnosis");
    if (startBtn) {
        startBtn.textContent = order && !order.completed ? "🔍 Начать диагностику" : "🚗 Получить новый заказ";
        startBtn.disabled = !!window.autoServiceBusy;
    }

    if (order) {

        $("carName").textContent =
            `${order.car.brand} ${order.car.model}`;

        $("carProblem").textContent =
            `«${order.complaint}»`;

    } else {

        $("carName").textContent =
            "Нет автомобиля";

        $("carProblem").textContent =
            "Ожидание нового клиента";
    }


    const garageLevel =
        document.querySelector(
            ".garage-level"
        );

    if (garageLevel) {

        garageLevel.textContent =
            `Уровень ${state.garage.level}`;
    }


    const goalMoney = $("goalMoney");
    if (goalMoney) goalMoney.textContent = `${money(state.money)} / 25 000 ₽`;

    const goalXp = $("goalXp");
    if (goalXp) goalXp.textContent = `${state.xp} / ${need}`;

    const garageStats =
        document.querySelectorAll(
            ".garage-stats b"
        );

    if (
        garageStats.length >= 3
    ) {

        garageStats[0].textContent =
            state.garage.posts;

        garageStats[1].textContent =
            `Ресурс ${state.equipment}%`;

        garageStats[2].textContent =
            "1";
    }
}


/* =========================================================
   НАЧАЛО ДИАГНОСТИКИ
========================================================= */

function startDiagnosis() {
    if (window.autoServiceBusy) return;

    if (state.currentOrder?.completed) {
        generateOrder();
        render();
    }

    if (!state.currentOrder) {
        generateOrder();
        render();
    }

    runWorkAnimation({
        icon: "🚗",
        title: "Клиент приехал",
        text: `${state.currentOrder.car.brand} ${state.currentOrder.car.model} заезжает в бокс`,
        steps: ["Клиент подъезжает к воротам", "Автомобиль заезжает на пост", "Открываем заказ"]
    }, () => openDiagnosis());
}

function openDiagnosis() {

    const order =
        state.currentOrder;

    const problem =
        order.problem;


    let html = `

        <h2>🔍 Диагностика</h2>

        <p>
            <b>
                ${order.car.icon}
                ${order.car.brand}
                ${order.car.model}
            </b>
            <br><span style="opacity:.8">${order.car.year} г. · ${order.car.engine} · ${order.car.transmission}</span>
        </p>

        <p>
            ${order.car.year} год,
            пробег
            ${order.car.mileage.toLocaleString("ru-RU")}
            км<br>
            🔧 Двигатель: <b>${order.car.engine}</b>
        </p>

        <div class="diagnosis-result">
            ${order.difficulty} · требуется мастерство: <b>${order.requiredLevel}+</b>${qualificationRequirementText(order.problem) ? `<br>${qualificationRequirementText(order.problem)}` : ""}
        </div>

        <div class="diagnosis-result">

            👤 <b>Клиент:</b>
            ${order.client.name}<br>

            💬 <b>Тип:</b>
            ${order.client.type}<br><br>

            «${order.complaint}»

        </div>

        <div class="stat-row">
            <span>⏰ Время</span>
            <b>${timeText(state.time)}</b>
        </div>

        <div class="stat-row">
            <span>🧰 Оборудование</span>
            <b>${state.equipment}%</b>
        </div>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>${money(order.diagnosisPrice)}</b>
        </div>

        ${renderProblemKnowledge(order.problem)}

        <h3>🔎 Проверки</h3>

        <div class="diagnosis-list">
    `;


    Object.keys(
        order.checks
    ).forEach(key => {

        const check =
            order.checks[key];

        const used =
            order.history.some(
                item =>
                    item.key === key
            );


        html += `

            <button
                class="diagnosis-button"
                ${used ? "disabled" : ""}
                onclick="performCheck('${key}')">

                ${check.name}

                <br>

                <small>
                    ⏱️ ${check.time} мин
                    · 🧰 −${check.equipment}
                </small>

            </button>

        `;
    });


    html += `
        </div>

        ${renderHistory(order)}

        <button
            class="action-button"
            onclick="openAnalysis()">

            🧠 Перейти к анализу

        </button>
    `;


    openModal(html);
}


/* =========================================================
   ПРОВЕРКА
========================================================= */

function performCheck(key) {
    const order = state.currentOrder;
    if (!order) return;
    const check = order.checks[key];
    if (!check) return;

    if (window.autoServiceBusy) return;

    if (order.history.some(item => item.key === key)) {
        showToast("Эта проверка уже выполнена");
        return;
    }

    if (check.toolId && !hasTool(check.toolId)) {
        const tool = toolById(check.toolId);
        if (tool && state.level < tool.level) showToast(`🔒 ${tool.name} откроется на уровне мастерства ${tool.level}`);
        else if (tool) showToast(`🧰 ${tool.name} можно купить в магазине инструментов`);
        openTools();
        return;
    }

    if (state.equipment < check.equipment) {
        showToast("🧰 Недостаточно ресурса оборудования");
        return;
    }

    runWorkAnimation({
        icon: check.name.split(" ")[0] || "🔧",
        title: check.name.replace(/^[^\s]+\s*/, ""),
        text: "Мастер выполняет проверку автомобиля",
        steps: [
            "Подготовка инструмента",
            "Проверка узла и измерения",
            "Сопоставление результата"
        ],
        duration: 1300
    }, () => {
        addTime(check.time);
        useEquipment(check.equipment);

        const result = check.results[order.correctCause] || "Результат не дал однозначного ответа.";
        order.history.push({
            key, name: check.name, result, time: check.time, equipment: check.equipment
        });

        save();
        openDiagnosis();
    });
}

/* =========================================================
   ИСТОРИЯ
========================================================= */

function renderHistory(order) {

    if (
        order.history.length === 0
    ) {

        return `

            <div class="diagnosis-result">

                📋 Пока ни одной проверки
                не проведено.

            </div>

        `;
    }


    let html = `

        <div class="diagnosis-result">

            <b>📋 История диагностики</b>

    `;


    order.history.forEach(
        (item, index) => {

            html += `

                <div style="
                    margin-top:12px;
                    padding-top:12px;
                    border-top:1px solid #333;
                ">

                    <b>
                        ${index + 1}.
                        ${item.name}
                    </b>

                    <br>

                    <small>
                        ⏱️ −${item.time} мин
                        · 🧰 −${item.equipment}
                    </small>

                    <p>
                        ${item.result}
                    </p>

                </div>

            `;
        }
    );


    html += `
        </div>
    `;

    return html;
}


/* =========================================================
   АНАЛИЗ
========================================================= */

function openAnalysis() {

    const order =
        state.currentOrder;


    if (
        order.history.length === 0
    ) {

        showToast(
            "Сначала проведи диагностику"
        );

        return;
    }


    let html = `

        <h2>🧠 Анализ неисправности</h2>

        <p>
            Изучи результаты и выбери
            наиболее вероятную причину.
        </p>

        ${renderHistory(order)}

        ${renderProblemKnowledge(order.problem)}

        <h3>Возможные причины:</h3>

        <div class="diagnosis-list">
    `;


    order.problem.causes
        .forEach(cause => {

            html += `

                <button
                    class="diagnosis-button"
                    onclick="chooseDiagnosis('${cause.id}')">

                    ${cause.name}

                </button>

            `;
        });


    html += `

        </div>

        <button
            class="action-button"
            onclick="openKnowledgeMenu()">

            📚 Открыть базу знаний

        </button>

    `;


    openModal(html);
}


/* =========================================================
   ДИАГНОЗ
========================================================= */

function chooseDiagnosis(causeId) {

    const order =
        state.currentOrder;


    if (
        causeId !==
        order.correctCause
    ) {

        addReputation(-2);

        addXP(5);

        save();


        openModal(`

            <h2>❌ Диагноз не подтверждён</h2>

            <p>
                Выбранная причина не соответствует
                результатам текущей диагностики.
            </p>

            <div class="diagnosis-result">

                ⭐ Репутация −2<br>
                📈 Опыт +5

            </div>

            <p>
                Можно продолжить диагностику
                и собрать дополнительные данные.
            </p>

            <button
                class="action-button"
                onclick="openDiagnosis()">

                🔍 Продолжить диагностику

            </button>

        `);

        return;
    }


    order.selectedCause =
        causeId;

    order.diagnosisComplete =
        true;


    const studiedRelevant = knowledgeTopicsForProblem(order.problem).some(t => isKnowledgeStudied(t.id));
    addXP(studiedRelevant ? 25 : 20);

    save();

    openRepairAgreement();
}


/* =========================================================
   СОГЛАСОВАНИЕ РЕМОНТА
========================================================= */

function getPartOptions(repair) {
    if(repair.consumable) return [{ id:"consumable", name:repair.consumableName || "Расходный материал", supplier:repair.consumableSupplier || "Расходный материал автосервиса", quality:"Один расходный материал", cost:Number(repair.partCost)||0, reliability:0.99, reputationRisk:0, icon:repair.consumableIcon || "🧴" }];
    if(repair.serviceOnly) return [{ id:"service", name:repair.name, supplier:"Услуга автосервиса", quality:"Регулировка / работа", cost:0, reliability:0.99, reputationRisk:0, icon:"📐" }];
    const base = repair.partCost;
    return [
        { id:"original", name:"Оригинальная деталь", supplier:"Официальный поставщик", quality:"Оригинал", cost:base, reliability:0.98, reputationRisk:0, icon:"🟢" },
        { id:"premium", name:"Качественный аналог", supplier:"Проверенный поставщик", quality:"Высокое качество", cost:Math.round(base*0.72), reliability:0.91, reputationRisk:1, icon:"🔵" },
        { id:"budget", name:"Бюджетный аналог", supplier:"Эконом-сегмент", quality:"Бюджет", cost:Math.round(base*0.48), reliability:0.78, reputationRisk:3, icon:"🟡" }
    ];
}

function openRepairAgreement() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=getPartOptions(repair);
    order.partOptions=options;
    save();

    openModal(`
        <h2>🤝 Согласование с клиентом</h2>
        <p>${repair.consumable ? `Диагноз подтверждён. Для этой работы запчасть не выбирается — используется один расходный материал автосервиса.` : `Диагноз подтверждён. Теперь ты показываешь клиенту варианты запчасти. <b>Выбирать будет клиент</b>, а после его выбора ты сможешь установить свою наценку.`}</p>
        <div class="diagnosis-result">
            👤 ${order.client.name} · ${order.client.type}<br>
            💰 Чувствительность к цене: ${order.client.priceSensitivity>0.75?'высокая':order.client.priceSensitivity>0.55?'средняя':'низкая'}<br>
            ⏱️ Норма времени: <b>${(repair.time/60).toFixed(1)} н/ч</b><br>
            🔧 Работа: <b>${money(repair.workCost)}</b>
        </div>
        ${repair.consumable ? `
            <h3>🧴 Расходный материал</h3>
            <div class="part-options readonly">
                <div class="part-option">
                    <div class="part-option-top">
                        <span class="part-icon">${options[0].icon}</span>
                        <div><b>${options[0].name}</b><small>${options[0].supplier}</small></div>
                        <strong>${money(options[0].cost)}</strong>
                    </div>
                    <div class="part-option-meta"><span>Используется один расходный материал</span><span>Расходуется при работе</span></div>
                </div>
            </div>
        ` : `
            <h3>🔩 Что можно предложить</h3>
            <div class="part-options readonly">
                ${options.map(part=>`
                    <div class="part-option">
                        <div class="part-option-top">
                            <span class="part-icon">${part.icon}</span>
                            <div><b>${part.name}</b><small>${part.supplier}</small></div>
                            <strong>${money(part.cost)}</strong>
                        </div>
                        <div class="part-option-meta"><span>${part.quality}</span><span>Надёжность ${Math.round(part.reliability*100)}%</span></div>
                    </div>`).join('')}
            </div>
        `}
        <button class="action-button" onclick="presentPartsToClient()">${repair.consumable ? "🧴 Использовать расходный материал" : "👤 Показать варианты клиенту"}</button>
        <button class="action-button secondary-button" onclick="openAnalysis()">← Вернуться к диагностике</button>
    `);
}

function presentPartsToClient() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    if(repair.serviceOnly || repair.consumable){ order.selectedPartId=options[0].id; save(); openPartMarkup(); return; }
    const priceSensitivity=order.client.priceSensitivity;
    const weights=[
        Math.max(0.15,0.45-priceSensitivity*0.15),
        0.40,
        Math.max(0.15,0.15+priceSensitivity*0.70)
    ];
    const total=weights.reduce((a,b)=>a+b,0);
    let r=Math.random()*total, selected=options[0];
    for(let i=0;i<options.length;i++){r-=weights[i];if(r<=0){selected=options[i];break;}}
    order.selectedPartId=selected.id;
    save();

    openModal(`
        <h2>👤 Клиент сделал выбор</h2>
        <div class="customer-choice">
            <div class="customer-choice-icon">👤</div>
            <div><b>${order.client.name}</b><p>«${selected.id==='original'?'Хочу поставить оригинал, чтобы не возвращаться к этой проблеме.':selected.id==='premium'?'Давайте хороший аналог, но без переплаты за оригинал.':'Мне главное, чтобы ремонт был разумным по цене.'}»</p></div>
        </div>
        <div class="diagnosis-result">
            🔩 Выбрано: <b>${selected.name}</b><br>
            Закупочная цена: <b>${money(selected.cost)}</b><br>
            🔧 Работа: <b>${money(repair.workCost)}</b>
        </div>
        <p>Теперь установи свою наценку на выбранную деталь.</p>
        <button class="action-button" onclick="openPartMarkup()">💰 Установить наценку</button>
    `);
}

function openPartMarkup() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const selected=options.find(x=>x.id===order.selectedPartId)||options[0];

    openModal(`
        <h2>💰 Цена для клиента</h2>
        <div class="diagnosis-result">
            <b>${selected.name}</b><br>
            ${repair.consumable ? `Расходник: ${money(selected.cost)}<br>` : `Закупка: ${money(selected.cost)}<br>`}
            Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>
            Работа: ${money(repair.workCost)}
        </div>
        <label class="field-label" for="markupPercent">${repair.serviceOnly?'Твоя наценка на услугу, %':repair.consumable?'Твоя наценка на расходный материал, %':'Твоя наценка на запчасть, %'}</label>
        <input id="markupPercent" class="price-input" type="number" min="0" max="150" step="1" value="20" oninput="updatePartOfferPreview()">
        <div id="partOfferPreview" class="offer-preview"></div>
        <button class="action-button" onclick="offerSelectedPart()">🤝 Озвучить цену клиенту</button>
        <button class="action-button secondary-button" onclick="openRepairAgreement()">← Вернуться к выбору</button>
    `);
    updatePartOfferPreview();
}

function updatePartOfferPreview() {
    const order=state.currentOrder;if(!order)return;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const part=options.find(x=>x.id===order.selectedPartId)||options[0];
    const markup=Math.max(0,Math.min(150,Number(document.getElementById('markupPercent')?.value||0)));
    const partPrice=repair.serviceOnly ? Math.round(repair.workCost*(1+markup/100)) : Math.round(part.cost*(1+markup/100));
    const total=repair.serviceOnly ? partPrice : partPrice+repair.workCost;
    const profit=repair.serviceOnly ? total : total-part.cost;
    const box=document.getElementById('partOfferPreview');if(!box)return;
    box.innerHTML=`
        <div class="stat-row"><span>${repair.consumable ? "Расходный материал клиенту" : "Цена детали клиенту"}</span><b>${money(partPrice)}</b></div>
        <div class="stat-row"><span>Работа</span><b>${money(repair.workCost)}</b></div>
        <div class="stat-row"><span>Итого клиенту</span><b>${money(total)}</b></div>
        <div class="stat-row"><span>Прибыль с заказа</span><b>+${money(profit)}</b></div>`;
}

function offerSelectedPart() {
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const part=options.find(x=>x.id===order.selectedPartId)||options[0];
    const markup=Math.max(0,Math.min(150,Number(document.getElementById('markupPercent')?.value||0)));
    const partPrice=repair.serviceOnly ? Math.round(repair.workCost*(1+markup/100)) : Math.round(part.cost*(1+markup/100));
    const totalPrice=repair.serviceOnly ? partPrice : partPrice+repair.workCost;
    let chance=0.97-markup/180-order.client.priceSensitivity*0.18;
    if(part.id==='original')chance+=0.03;
    if(part.id==='budget')chance+=order.client.priceSensitivity*0.05;
    chance=Math.max(0.18,Math.min(0.97,chance));
    const accepted=Math.random()<chance;

    order.repair={name:repair.name,partName:part.name,partId:part.id,partCost:part.cost,partPrice,workCost:repair.workCost,time:repair.time,cost:repair.serviceOnly?0:part.cost+repair.workCost,price:totalPrice,profit:repair.serviceOnly?totalPrice:totalPrice-part.cost,markup,reliability:part.reliability,reputationRisk:part.reputationRisk,serviceOnly:!!repair.serviceOnly};

    if(!accepted){
        addReputation(-1);save();
        const suggested=Math.max(0, Math.round(markup*0.65));
        openModal(`<h2>🤔 Клиент сомневается</h2><div class="customer-choice"><div class="customer-choice-icon">👤</div><div><b>${order.client.name}</b><p>«Цена <b>${money(totalPrice)}</b> для меня высоковата. Если сможете сделать немного дешевле, я соглашусь.»</p></div></div><div class="diagnosis-result">Выбрана деталь: <b>${part.name}</b><br>Предложенная наценка: <b>${markup}%</b><br>💬 Клиент предлагает попробовать <b>${suggested}%</b>.</div><button class="action-button" onclick="acceptCounterOffer(${suggested})">🤝 Принять ${suggested}%</button><button class="action-button secondary-button" onclick="openPartMarkup()">💰 Изменить цену самому</button><button class="action-button secondary-button" onclick="finishDiagnosisOnly()">📋 Отложить ремонт</button>`);
        return;
    }
    order.agreed=true;save();
    openModal(`<h2>✅ Клиент согласовал цену</h2><div class="diagnosis-result"><b>${part.name}</b><br>Закупка: ${money(part.cost)}<br>Цена детали: ${money(partPrice)}<br>Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>Работа: ${money(repair.workCost)}<hr><b>Итого: ${money(totalPrice)}</b><br>Прибыль с заказа: <b>+${money(totalPrice-part.cost)}</b></div><button class="action-button" onclick="performRepair()">🔧 Выполнить ремонт</button>`);
}

function acceptCounterOffer(markup){
    const order=state.currentOrder;
    const repair=order.problem.repairs[order.selectedCause];
    const options=order.partOptions||getPartOptions(repair);
    const part=options.find(x=>x.id===order.selectedPartId)||options[0];
    const partPrice=repair.serviceOnly ? Math.round(repair.workCost*(1+markup/100)) : Math.round(part.cost*(1+markup/100));
    const totalPrice=repair.serviceOnly ? partPrice : partPrice+repair.workCost;
    const profit=repair.serviceOnly ? totalPrice : totalPrice-part.cost;
    order.repair={name:repair.name,partName:part.name,partId:part.id,partCost:part.cost,partPrice,workCost:repair.workCost,time:repair.time,cost:repair.serviceOnly?0:part.cost+repair.workCost,price:totalPrice,profit,markup,reliability:part.reliability,reputationRisk:part.reputationRisk,serviceOnly:!!repair.serviceOnly};
    order.agreed=true;
    save();
    openModal(`<h2>✅ Клиент согласовал</h2><div class="diagnosis-result"><b>${part.name}</b><br>Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>Цена детали: ${money(partPrice)}<br>Норма времени: ${(repair.time/60).toFixed(1)} н/ч<br>Работа: ${money(repair.workCost)}<hr><b>Итого: ${money(totalPrice)}</b><br>Прибыль: <b>+${money(profit)}</b></div><button class="action-button" onclick="performRepair()">🔧 Выполнить ремонт</button>`);
}

function performRepair() {
    const order = state.currentOrder;
    const repair = order?.repair;
    if (!order || !repair || window.autoServiceBusy) return;

    const equipmentUse = Number.isFinite(Number(repair.equipmentUse)) ? Math.max(0, Number(repair.equipmentUse)) : 2;
    if (state.equipment < equipmentUse) {
        showToast("🧰 Недостаточно ресурса оборудования");
        return;
    }

    runWorkAnimation({
        icon: repair.serviceOnly ? "🛠️" : "🔧",
        title: repair.name,
        text: "Выполняем ремонт и контроль качества",
        steps: [
            "Подготовка рабочего места",
            repair.serviceOnly ? "Выполнение обслуживания" : "Установка и затяжка деталей",
            "Контроль качества ремонта"
        ],
        duration: 1700
    }, () => {
        addTime(repair.time);
        useEquipment(equipmentUse);
        state.money += repair.profit;
        state.money += order.diagnosisPrice;
        addXP(30);

        const reputationBefore = state.reputation;
        const reputationPlanned = 8 - (order.repair.reputationRisk || 0);
        addReputation(reputationPlanned);
        const reputationDelta = state.reputation - reputationBefore;

        order.completed = true;
        order.diagnosisPaid = true;
        state.history.push({
            car: `${order.car.brand} ${order.car.model}`,
            problem: order.problem.title,
            profit: repair.profit,
            day: state.day
        });

        save();
        render();

        openModal(`
            <div class="result-success-animation">🔧</div>
            <h2>${repair.consumable ? "🧴 Очистка выполнена" : repair.serviceOnly ? "🛠️ Обслуживание выполнено" : "🔧 Ремонт выполнен"}</h2>
            <div class="stat-row"><span>Запчасть / работа</span><b>${order.repair?.partName || repair.name}</b></div>
            <div class="stat-row"><span>⏱️ Время</span><b>${repair.time} мин</b></div>
            <div class="stat-row"><span>💰 Диагностика</span><b>+${money(order.diagnosisPrice)}</b></div>
            <div class="stat-row"><span>💵 Прибыль</span><b>+${money(repair.profit)}</b></div>
            <div class="stat-row"><span>⭐ Репутация</span><b>${reputationDelta >= 0 ? '+' : ''}${reputationDelta}</b></div>
            <button class="action-button" onclick="finishRepairCheck()">🧪 Проверить результат</button>
        `);
    });
}

/* =========================================================
   ПРОВЕРКА ПОСЛЕ РЕМОНТА
========================================================= */

function finishRepairCheck() {

    const order = state.currentOrder;
    const repair = order?.repair;

    if (!repair || repair.serviceOnly) {
        openModal(`
            <h2>🧪 Контрольная проверка</h2>
            <div class="diagnosis-result">
                ✅ Жалоба клиента устранена. Проверка после ремонта завершена.
            </div>
            <button class="action-button" onclick="newOrder()">🚗 Следующий клиент</button>
        `);
        return;
    }

    // Часть клиентов забирает старую деталь, часть оставляет её сервису.
    // Если клиент оставил деталь, игрок может отправить её на склад.
    const clientKeepsOldPart = Math.random() < 0.35;
    order.oldPartDecision = clientKeepsOldPart ? "client_keeps" : "service_can_keep";

    save();

    if (clientKeepsOldPart) {
        openModal(`
            <h2>🧪 Контрольная проверка</h2>
            <div class="diagnosis-result">
                ✅ Жалоба клиента устранена.<br><br>
                👤 Клиент забирает старую деталь с собой.
            </div>
            <button class="action-button" onclick="newOrder()">🚗 Следующий клиент</button>
        `);
        return;
    }

    // Если клиент не забирает старую деталь, сервис автоматически отправляет её на склад.
    storeOldPart();
}

function storeOldPart() {
    const order = state.currentOrder;
    const repair = order?.repair;
    if (!repair || repair.serviceOnly) {
        newOrder();
        return;
    }

    const partName = repair.partName || repair.name;
    const item = {
        id: `old_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,
        name: partName,
        car: `${order.car.brand} ${order.car.model}`,
        condition: Math.floor(35 + Math.random() * 45),
        sourceDay: state.day,
        status: "used",
        restoreAvailable: false
    };

    state.partsWarehouse.push(item);
    order.oldPartStored = true;
    save();
    render();

    openModal(`
        <h2>📦 Деталь на складе</h2>
        <div class="diagnosis-result">
            <b>${partName}</b> помещена на склад.<br><br>
            Состояние: <b>${item.condition}%</b><br>
            🚗 ${item.car}<br><br>
            🔒 Позже можно будет купить оборудование для восстановления этой детали и её дальнейшей продажи.
        </div>
        <button class="action-button" onclick="newOrder()">🚗 Следующий клиент</button>
    `);
}



/* =========================================================
   ОПЛАТА ТОЛЬКО ДИАГНОСТИКИ
========================================================= */

function finishDiagnosisOnly() {

    const order =
        state.currentOrder;


    if (
        !order.diagnosisPaid
    ) {

        state.money +=
            order.diagnosisPrice;

        order.diagnosisPaid =
            true;
    }


    addXP(15);


    order.completed =
        true;


    state.history.push({

        car:
            `${order.car.brand} ${order.car.model}`,

        problem:
            order.problem.title,

        profit:
            order.diagnosisPrice,

        day:
            state.day
    });


    save();

    render();


    openModal(`

        <h2>📋 Заказ завершён</h2>

        <p>
            Клиент отказался от ремонта,
            но диагностику оплатил.
        </p>

        <div class="stat-row">
            <span>💰 Диагностика</span>
            <b>+${money(order.diagnosisPrice)}</b>
        </div>

        <div class="stat-row">
            <span>📈 Опыт</span>
            <b>+15 XP</b>
        </div>

        <button
            class="action-button"
            onclick="newOrder()">

            🚗 Следующий клиент

        </button>

    `);
}


/* =========================================================
   НОВЫЙ ЗАКАЗ
========================================================= */

function newOrder() {
    if (window.autoServiceBusy) return;

    state.day++;
    state.time = 480;
    state.equipment = Math.min(100, state.equipment + 5);
    generateOrder();
    render();

    runWorkAnimation({
        icon: "🚘",
        title: "Новый заказ",
        text: `${state.currentOrder.car.brand} ${state.currentOrder.car.model} прибыл в сервис`,
        steps: ["Клиент оставляет автомобиль", "Мастер получает заказ", "Автомобиль готов к осмотру"]
    }, () => {
        closeModal();
        showToast("🚗 Новый клиент приехал!");
        openDiagnosis();
    });
}

/* =========================================================
   ИНСТРУМЕНТЫ
========================================================= */

const toolCatalog = [
    { id:"basic", icon:"🔧", name:"Базовый набор", level:1, cost:0, desc:"Простые механические проверки и осмотр." },
    { id:"obd", icon:"💻", name:"OBD-II сканер", level:2, cost:5000, desc:"Коды ошибок, Live Data и Freeze Frame." },
    { id:"multimeter", icon:"📟", name:"Мультиметр", level:3, cost:7000, desc:"Электрические проверки и поиск проблем в цепях." },
    { id:"tire_gauge", icon:"🛞", name:"Манометр для шин", level:2, cost:1800, desc:"Точная проверка давления в шинах." },
    { id:"manometer", icon:"📈", name:"Диагностический манометр", level:3, cost:9000, desc:"Измерение давления топлива и других систем." },
    { id:"smoke", icon:"💨", name:"Дымогенератор", level:5, cost:18000, desc:"Поиск подсоса воздуха и утечек." },
    { id:"lift", icon:"🏗️", name:"Подъёмник", level:6, cost:45000, desc:"Доступ к ходовой части и нижней части автомобиля." },
    { id:"alignment", icon:"📐", name:"Стенд развал-схождения", level:4, cost:35000, desc:"Измерение и регулировка углов установки колёс." },
    { id:"balancer", icon:"⚖️", name:"Балансировочный станок", level:5, cost:55000, desc:"Диагностика и балансировка колёс при вибрации на скорости." }
];
function toolById(id){ return toolCatalog.find(t=>t.id===id); }
function hasTool(id){ return !!state.tools?.[id]; }
function buyTool(id){ const tool=toolById(id); if(!tool||tool.id==='basic')return; if(state.level<tool.level){showToast(`🔒 Нужен уровень мастерства ${tool.level}`);return;} if(hasTool(id)){showToast('Инструмент уже куплен');return;} if(state.money<tool.cost){showToast('💰 Недостаточно денег');return;} state.money-=tool.cost; state.tools[id]=true; save(); render(); showToast(`🧰 ${tool.name} куплен`); openTools(); }
function toolRequirementHtml(id){ const t=toolById(id); if(!t||t.id==='basic')return ''; if(hasTool(id))return `<small>🧰 ${t.name} — доступен</small>`; if(state.level<t.level)return `<small>🔒 ${t.name} — откроется на уровне ${t.level}</small>`; return `<small>🔒 ${t.name} — можно купить за ${money(t.cost)}</small>`; }
function openTools() {
    const cards=toolCatalog.map(t=>{const owned=hasTool(t.id), unlocked=state.level>=t.level; return `<div class="tool-card ${owned?'owned':''}"><div class="tool-card-top"><div><h3>${t.icon} ${t.name}</h3><p>${t.desc}</p></div><span class="tool-level">Ур. ${t.level}</span></div><div class="stat-row"><span>${owned?'✅ Куплен':unlocked?'🔓 Доступен к покупке':'🔒 Заблокирован'}</span><b>${t.cost?money(t.cost):'Бесплатно'}</b></div>${owned?'<div class="tool-owned">Используется в диагностике</div>':unlocked?`<button class="action-button" onclick="buyTool('${t.id}')">🛒 Купить</button>`:`<div class="tool-locked">Требуется уровень мастерства ${t.level}</div>`}</div>`;}).join('');
    openModal(`<h2>🧰 Инструменты</h2><div class="diagnosis-result">Инструменты открываются постепенно: сначала нужен уровень мастерства, затем покупка за игровые деньги.</div><div class="stat-row"><span>🔧 Уровень мастерства</span><b>${state.level}</b></div><div class="stat-row"><span>💰 Деньги</span><b>${money(state.money)}</b></div><div class="tool-grid">${cards}</div><button class="modal-back-button" onclick="closeModal()">← Назад</button>`);
}

/* =========================================================
   АВТОМОБИЛИ
========================================================= */

function openCars() {

    openModal(`

        <h2>🚘 Автомобили</h2>

        <p>
            Сейчас автомобили принадлежат клиентам.
        </p>

        <p>
            В будущем здесь появится твой собственный
            автомобиль и его обслуживание:
        </p>

        <p>
            🔧 ремонт<br>
            🛞 обслуживание<br>
            🎨 внешний тюнинг<br>
            ⚙️ технический тюнинг<br>
            🏎️ улучшение характеристик
        </p>

    `);
}


/* =========================================================
   СТО
========================================================= */

function openService() {
    const lvl=state.garage.level;
    const upgrades=[
        {level:2,name:"Второй пост",cost:25000,rep:15,desc:"Больше клиентов и +1 пост."},
        {level:3,name:"Подъёмник и большой гараж",cost:60000,rep:30,desc:"Сложные работы, больше вариантов диагностики."},
        {level:4,name:"Диагностический пост",cost:120000,rep:50,desc:"Лучший ресурс оборудования и доступ к продвинутым заказам."},
        {level:5,name:"Небольшая СТО",cost:250000,rep:75,desc:"Подготовка к найму механиков и нескольким заказам."}
    ];
    const next=upgrades.find(x=>x.level===lvl+1);
    const canRep = !next || state.reputation >= next.rep;
    const canMoney = !next || state.money >= next.cost;
    openModal(`
        <h2>🏢 Развитие сервиса</h2>
        <div class="stat-row"><span>Уровень</span><b>${lvl}</b></div>
        <div class="stat-row"><span>⭐ Репутация</span><b>${state.reputation}/100</b></div>
        <div class="stat-row"><span>Посты</span><b>${state.garage.posts}</b></div>
        <div class="stat-row"><span>День</span><b>${state.day}</b></div>
        <div class="stat-row"><span>Время</span><b>${timeText(state.time)}</b></div>
        ${next?`<div class="upgrade-card"><h3>Следующий этап: ${next.name}</h3><p>${next.desc}</p><div class="stat-row"><span>Стоимость</span><b>${money(next.cost)}</b></div><div class="stat-row"><span>Требуется репутация</span><b>${state.reputation}/${next.rep}</b></div>${!canRep?`<div class="upgrade-warning">⭐ Нужно ещё ${next.rep-state.reputation} репутации. За один заказ можно получить максимум +5.</div>`:''}<button class="action-button" ${(!canMoney||!canRep)?'disabled':''} onclick="buyServiceUpgrade(${next.level},${next.cost},${next.rep})">🏗️ Улучшить сервис</button></div>`:`<div class="knowledge-practice"><h3>🏆 Максимальный доступ текущей версии</h3><p>Дальше можно расширять СТО, нанимать механиков, открывать вакансии и сеть сервисов.</p></div>`}
        <div class="diagnosis-result">💡 Для развития теперь нужны <b>и деньги, и репутация</b>. Это не позволит мгновенно прокачать СТО только за счёт накоплений.</div>
    `);
}

function buyServiceUpgrade(level,cost,requiredRep){
    if(state.garage.level+1!==level){showToast("Нельзя пропустить уровень сервиса");return;}
    if(state.reputation<requiredRep){showToast(`⭐ Нужно ${requiredRep} репутации`);return;}
    if(state.money<cost){showToast("💰 Недостаточно денег для улучшения");return;}
    state.money-=cost;
    state.garage.level=level;
    if(level===2)state.garage.posts=2;
    if(level===3)state.garage.posts=2;
    if(level>=4)state.garage.posts=3;
    state.equipment=Math.min(100,state.equipment+25);
    addXP(40);
    save();render();
    showToast(`🏢 Сервис улучшен до уровня ${level}`);
    openService();
}

/* =========================================================
   ПРЕМИУМ-МАГАЗИН / ДОНАТ
========================================================= */

const premiumPacks = [
    {id:'p100', gems:100, price:'99 ₽'},
    {id:'p550', gems:550, price:'399 ₽', bonus:'+' + 50 + ' 💎 бонус'},
    {id:'p1200', gems:1200, price:'799 ₽', bonus:'+' + 200 + ' 💎 бонус'},
    {id:'p2500', gems:2500, price:'1 499 ₽', bonus:'+' + 500 + ' 💎 бонус'}
];

function openPremiumShop(){
    openModal(`
        <h2>💎 Премиум-магазин</h2>
        <div class="diagnosis-result"><b>💎 ${state.premium}</b> премиум-валюты<br><small>Премиум-покупки не заменяют обычную экономику: оборудование и развитие сервиса по-прежнему требуют игровые деньги и репутацию.</small></div>
        <div class="premium-grid">${premiumPacks.map(p=>`<div class="premium-card"><div class="premium-gems">💎 ${p.gems}</div><b>${p.price}</b>${p.bonus?`<small>${p.bonus}</small>`:''}<button class="action-button" onclick="requestPremiumPurchase('${p.id}')">💳 Купить</button></div>`).join('')}</div>
        <div class="knowledge-practice"><h3>🛒 Что можно будет покупать за 💎</h3><p>Ускорители, косметику гаража, дополнительные слоты и другие необязательные бонусы. Ключевой прогресс игры не должен требовать доната.</p></div>
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}

function requestPremiumPurchase(packId){
    const pack=premiumPacks.find(x=>x.id===packId);
    if(!pack)return;
    openModal(`
        <h2>💳 Покупка ${pack.gems} 💎</h2>
        <div class="customer-choice"><div class="customer-choice-icon">💎</div><div><b>${pack.price}</b><p>Веб-версия на GitHub сейчас показывает витрину покупки. Реальное списание денег нужно подключить через платёжную систему площадки при переносе игры в VK.</p></div></div>
        <div class="diagnosis-result">После подключения VK-платежей эта кнопка будет создавать настоящий платёж, а начисление 💎 — происходить только после подтверждения оплаты.</div>
        <button class="action-button" onclick="openPremiumShop()">← Вернуться в магазин</button>
    `);
}

/* =========================================================
   ОБУЧЕНИЕ
========================================================= */


function openTraining() {

    openKnowledgeMenu();
}


/* =========================================================
   ТЕСТЫ И ДОПУСКИ
========================================================= */

const trainingTests = {
    timing: {
        title: "⛓️ Допуск к работам с ГРМ",
        category: "engine",
        description: "Вопросы требуют не только помнить теорию, но и выбрать правильный алгоритм диагностики и ремонта.",
        questions: [
            { q: "После замены ремня ГРМ двигатель запускается, но работает неровно. Что логичнее проверить первым?", a: ["Фазировку и совпадение меток ГРМ", "Давление в шинах и развал-схождение", "Толщину тормозных колодок", "Состояние салонного фильтра"], correct: 0 },
            { q: "При проверке ремня ГРМ обнаружены трещины, но зубья визуально целые. Какой вывод наиболее правильный?", a: ["Ремень можно оставить, если двигатель заводится", "Состояние ремня уже является основанием для замены по регламенту/состоянию", "Нужно заменить только свечи", "Нужно сначала отключить аккумулятор на сутки"], correct: 1 },
            { q: "Почему после установки ГРМ недостаточно просто провернуть двигатель и убедиться, что он вращается?", a: ["Нужно дополнительно подтвердить правильность фаз и натяжения по процедуре производителя", "Потому что коленвал должен вращаться только от стартера", "Потому что после ремонта всегда нужно менять радиатор", "Потому что ремень должен быть окрашен"], correct: 0 },
            { q: "Что наиболее опасно при нарушении фаз ГРМ на двигателе с возможным контактом клапанов и поршней?", a: ["Увеличение давления в шинах", "Контакт клапанов с поршнями и повреждение двигателя", "Разряд аккумулятора за несколько минут", "Отказ кондиционера"], correct: 1 },
            { q: "Клиент просит заменить только ремень, хотя ролик натяжителя имеет выраженный люфт. Как поступить профессионально?", a: ["Установить новый ремень и промолчать", "Объяснить риск и предложить заменить дефектный ролик вместе с комплектом по регламенту", "Заменить только масло", "Увеличить давление в системе охлаждения"], correct: 1 }
        ]
    },
    engine: {
        title: "🔥 Двигатель — базовый допуск",
        category: "engine",
        description: "Ситуационные вопросы по двигателю: сначала симптомы и измерения, потом вывод.",
        questions: [
            { q: "Двигатель троит только на холодную, а после прогрева работает ровно. Что разумнее сделать до замены деталей?", a: ["Сразу заменить все форсунки", "Собрать данные на холодном запуске и проверить системы зажигания, смеси и соответствующие параметры", "Заменить тормозную жидкость", "Сразу заменить катализатор"], correct: 1 },
            { q: "При подозрении на подсос воздуха смесь уходит в бедную сторону. Какая проверка наиболее полезна для подтверждения причины?", a: ["Проверка герметичности впуска и мест возможного подсоса", "Проверка толщины тормозного диска", "Измерение давления в шинах", "Замена аккумулятора"], correct: 0 },
            { q: "Загорелась лампа давления масла. Какой алгоритм наиболее безопасен?", a: ["Продолжать движение, если двигатель пока работает тихо", "Остановить двигатель и проверить уровень/давление и причину неисправности", "Сразу заменить свечи", "Сбросить ошибку и продолжить эксплуатацию"], correct: 1 },
            { q: "Температура двигателя растёт в пробке, но на скорости возвращается к норме. Что стоит проверить в первую очередь?", a: ["Работу вентилятора, его управление и теплообмен системы охлаждения", "Только состояние шин", "Только свечи зажигания", "Только масло в АКПП"], correct: 0 },
            { q: "Компрессия в одном цилиндре заметно ниже остальных. Что это означает?", a: ["Точную неисправную деталь уже можно назвать без дополнительных проверок", "Есть основание искать механическую проблему и подтверждать её дополнительными тестами", "Нужно только заменить аккумулятор", "Это всегда означает неисправность генератора"], correct:1 },
            { q:"После прогрева появился металлический цокот. Что полезнее сделать до разбора?", a:["Сопоставить звук с температурой и параметрами двигателя","Проверить давление масла и состояние привода ГРМ","Сравнить шум на разных оборотах и режимах работы","Проверить зазоры и состояние клапанного механизма"], correct:0 },
            { q:"После ремонта ГРМ появилась ошибка синхронизации. Что проверить первым?", a:["Фактические метки и синхронизацию валов","Параметры датчиков положения валов","Натяжение и положение привода","Установку ГРМ по процедуре производителя"], correct:0 }
        ]
    },
    electrical: {
        title: "⚡ Электрика — базовый допуск",
        category: "electrical",
        description: "Здесь важно понимать измерения, нагрузку и падение напряжения, а не угадывать деталь.",
        questions: [
            { q: "Стартер медленно крутит двигатель. Напряжение на аккумуляторе выглядит нормальным. Что стоит проверить дальше?", a: ["Падение напряжения на силовых проводах и соединениях под нагрузкой", "Только цвет аккумулятора", "Только давление топлива", "Только уровень антифриза"], correct: 0 },
            { q: "Предохранитель цепи снова перегорает сразу после замены. Что делать?", a: ["Поставить предохранитель большего номинала", "Найти перегрузку или короткое замыкание до дальнейшей эксплуатации цепи", "Поставить вместо него проволоку", "Снять аккумулятор и считать проблему решённой"], correct: 1 },
            { q: "Генератор показывает нормальное напряжение без нагрузки, но при включении фар и обогрева напряжение сильно проседает. Что это подсказывает?", a: ["Нужно проверить генератор, ремень, соединения и способность системы работать под нагрузкой", "Неисправны обязательно тормоза", "Нужно менять свечи", "Проблема точно в шинах"], correct: 0 },
            { q: "При проверке цепи мультиметром измерение сопротивления выполняют на цепи, которая находится под напряжением. Что не так?", a: ["Так и нужно делать всегда", "Режим измерения сопротивления используют на обесточенной цепи", "Нужно включить стартер", "Нужно поднять обороты двигателя"], correct: 1 },
            { q: "После ремонта электропроводки потребитель работает, но заметно слабее. Что может помочь найти проблему?", a: ["Проверка падения напряжения на участке цепи под рабочей нагрузкой", "Только чтение ошибок двигателя", "Только проверка давления шин", "Замена свечей"], correct:0 },
            { q:"Стартер крутит медленно, аккумулятор заряжен. Где полезно искать потери?", a:["В силовых соединениях и массовой цепи под нагрузкой","В цепи питания стартера при фактической прокрутке","В соединении аккумулятора с кузовом и двигателем","В падении напряжения между источником и стартером"], correct:0 },
            { q:"После установки дополнительного оборудования аккумулятор разряжается за ночь. Что проверить?", a:["Ток покоя после засыпания блоков и новую цепь оборудования","Потребление оборудования после выключения автомобиля","Изменение тока покоя при отключении дополнительной цепи","Корректность подключения питания устройства"], correct:0 }
        ]
    },
    diagnostics: {
        title: "💻 Диагностика — базовый допуск",
        category: "diagnostics",
        description: "Вопросы построены вокруг диагностического мышления: симптом → данные → проверка → подтверждение.",
        questions: [
            { q: "Сканер показывает код P0301. Какой вывод корректнее?", a: ["Свеча первого цилиндра точно неисправна", "Есть признак пропусков воспламенения в первом цилиндре, причину нужно подтвердить", "Нужно заменить двигатель", "Это код неисправности ABS"], correct: 1 },
            { q: "На холостом ходу параметр датчика выглядит нормальным, но жалоба появляется при разгоне. Что полезнее?", a: ["Смотреть только сохранённый код и не проводить дополнительные проверки", "Проверить Live Data в условиях проявления симптома и сопоставить с эталонными значениями", "Сразу заменить датчик", "Проверить только давление в шинах"], correct: 1 },
            { q: "Зачем смотреть Freeze Frame вместе с кодом неисправности?", a: ["Чтобы увидеть условия, при которых блок зарегистрировал ошибку", "Чтобы определить цвет автомобиля", "Чтобы измерить толщину колодок", "Чтобы автоматически узнать цену ремонта"], correct: 0 },
            { q: "После очистки кодов ошибка пока не возвращается. Можно ли считать неисправность устранённой?", a: ["Да, всегда", "Нет, нужно подтвердить результат проверкой и повторным проявлением/тестом системы", "Да, если клиент согласен", "Да, если двигатель завёлся"], correct: 1 },
            { q: "Два разных датчика могут давать одинаковый симптом. Какой подход правильнее?", a: ["Менять оба сразу", "Проверить входные условия, питание/сигнал и сопоставить данные с другими параметрами системы", "Выбирать деталь по цене", "Ориентироваться только на название кода"], correct:1 },
            { q:"Появился Pending-код, но Check Engine ещё не загорелся. Что сделать?", a:["Сохранить код и условия появления, затем проверить систему","Сопоставить Pending-код с симптомом и Live Data","Воспроизвести условия мониторинга и связанные параметры","Не менять детали до подтверждения неисправности"], correct:0 }
        ]
    },
    fuel: {
        title: "⛽ Топливная система — базовый допуск",
        category: "fuel",
        description: "Нужно отличать симптом от подтверждённой причины и учитывать давление, подачу и управление.",
        questions: [
            { q: "Двигатель плохо тянет, а давление топлива ниже нормы. Что следует выяснить до замены насоса?", a: ["Причину низкого давления: питание насоса, фильтрацию, регуляцию и фактическую подачу", "Только цвет кузова", "Только состояние тормозов", "Только давление в шинах"], correct: 0 },
            { q: "Форсунка подозревается в неисправности. Почему нельзя ставить диагноз только по одному пропуску?", a: ["Пропуск может иметь причины в зажигании, механике, проводке и других системах", "Потому что форсунки никогда не ломаются", "Потому что пропуск всегда связан с ABS", "Потому что нужно сначала заменить масло"], correct: 0 },
            { q: "Давление топлива соответствует норме, но двигатель всё равно плохо работает. Что это означает?", a: ["Топливная система точно полностью исправна", "Нужно продолжить поиск: одной проверки давления недостаточно для полной диагностики", "Нужно заменить генератор", "Нужно менять тормозные диски"], correct: 1 },
            { q: "При подозрении на неисправность форсунки что даст более сильное подтверждение?", a: ["Сравнение коррекций/баланса и результаты дополнительных проверок по конструкции системы", "Только внешний цвет форсунки", "Только пробег автомобиля", "Только давление в шинах"], correct: 0 },
            { q: "После замены топливного фильтра двигатель стал работать хуже. Какой шаг логичнее?", a: ["Проверить правильность установки, герметичность и давление/подачу топлива", "Сразу менять блок управления", "Сразу менять тормозную систему", "Отключить датчик температуры"], correct:0 },
            { q:"Коррекция смеси выше на холостом ходу, чем под нагрузкой. Что рассмотреть?", a:["Подсос воздуха во впускном тракте","Герметичность вакуумных соединений","Разницу коррекций в разных режимах","Показания MAF/MAP вместе с проверкой подсоса"], correct:0 }
        ]
    },
    suspension: {
        title: "🛞 Подвеска — базовый допуск",
        category: "suspension",
        description: "Ситуации по люфтам, уводу, вибрациям и состоянию элементов ходовой части.",
        questions: [
            { q: "Автомобиль постоянно уводит вправо на ровной дороге. Что логичнее проверить до регулировки развала-схождения?", a: ["Давление и состояние шин, люфты подвески и рулевого управления", "Только свечи", "Только аккумулятор", "Только уровень масла в двигателе"], correct: 0 },
            { q: "После замены рулевого наконечника появилась необходимость в регулировке углов установки колёс. Почему?", a: ["Изменилось положение элементов рулевого управления, что может повлиять на углы", "Потому что тормозная жидкость стала старой", "Потому что двигатель изменил объём", "Потому что аккумулятор стал тяжелее"], correct: 0 },
            { q: "Есть стук при проезде мелких неровностей, а явного люфта шаровой нет. Что ещё имеет смысл проверить?", a: ["Стойки/втулки стабилизатора, крепления амортизаторов и другие элементы подвески", "Только свечи", "Только форсунки", "Только давление топлива"], correct: 0 },
            { q: "После регулировки развала-схождения автомобиль всё равно тянет в сторону. Что делать?", a: ["Считать проблему решённой", "Проверить шины, тормозной механизм, подвеску и соответствие фактических углов", "Заменить аккумулятор", "Сбросить ошибки двигателя"], correct: 1 },
            { q: "Почему выраженный люфт элемента подвески нельзя компенсировать одной регулировкой углов?", a: ["Потому что неисправный механический элемент может снова изменить положение колеса и ухудшить безопасность", "Потому что развал влияет только на двигатель", "Потому что регулировка меняет масло", "Потому что ABS отключается навсегда"], correct:0 },
            { q:"После регулировки углов автомобиль всё ещё тянет. Что проверить следующим?", a:["Шины, тормозной механизм и механические люфты","Соответствие фактических углов допускам","Разницу давления и состояние шин","Подклинивание тормоза и состояние подвески"], correct:0 }
        ]
    },
    brakes: {
        title: "🛑 Тормоза — базовый допуск",
        category: "brakes",
        description: "Здесь нужно оценивать не только толщину детали, но и состояние всей системы.",
        questions: [
            { q: "Толщина тормозного диска выше минимально допустимой, но поверхность имеет глубокие задиры и перегрев. Что делать?", a: ["Оценить состояние диска и сопряжённых деталей по требованиям ремонта, а не ориентироваться только на толщину", "Оставить всё как есть при любой поверхности", "Заменить только свечи", "Сбросить ошибки двигателя"], correct: 0 },
            { q: "Автомобиль уводит при торможении. Какая причина наиболее логично требует проверки?", a: ["Неравномерная работа тормозных механизмов, состояние колодок/дисков и суппортов", "Только уровень топлива", "Только свечи", "Только салонный фильтр"], correct: 0 },
            { q: "Педаль тормоза стала мягкой после вмешательства в гидравлическую систему. Что вероятнее всего требует проверки?", a: ["Наличие воздуха, состояние жидкости и герметичность системы", "Только аккумулятор", "Только развал-схождение", "Только давление топлива"], correct: 0 },
            { q: "Почему установка колодок без оценки состояния диска может привести к проблеме?", a: ["Сопряжение поверхностей и состояние диска влияют на эффективность торможения и приработку", "Потому что колодки управляют ГРМ", "Потому что диск влияет на заряд аккумулятора", "Потому что ABS работает только с новыми шинами"], correct: 0 },
            { q: "После ремонта тормозов контрольная проверка показала неодинаковое тормозное усилие. Как поступить?", a: ["Разобраться с причиной до выдачи автомобиля клиенту", "Выдать автомобиль, если лампа ABS не горит", "Сбросить ошибки двигателя", "Увеличить давление в шинах"], correct:0 },
            { q:"Одно колесо заметно горячее после короткой поездки. Что проверить?", a:["Свободный ход суппорта, колодки и возможное подклинивание","Состояние направляющих и перемещение поршня","Разницу температур тормозных механизмов","Состояние диска и равномерность контакта колодки"], correct:0 }
        ]
    },
    transmission: {
        title: "⚙️ Трансмиссия — базовый допуск",
        category: "transmission",
        description: "Вопросы проверяют понимание симптомов МКПП, АКПП и сцепления без угадывания детали.",
        questions: [
            { q: "АКПП начала переключаться с толчками после прогрева. Что логичнее сделать?", a: ["Проверить ошибки, параметры, уровень/состояние жидкости по процедуре и воспроизвести симптом", "Сразу заменить коробку целиком", "Сразу заменить свечи", "Только проверить давление в шинах"], correct: 0 },
            { q: "Уровень жидкости АКПП низкий. Почему недостаточно просто долить её?", a: ["Нужно выяснить причину потери и убедиться, что уровень установлен по правильной процедуре", "Потому что жидкость АКПП никогда не доливают", "Потому что нужно сначала заменить тормозные диски", "Потому что коробка работает без жидкости"], correct: 0 },
            { q: "На МКПП обороты двигателя растут при резком разгоне, а скорость увеличивается заметно слабее. Что подозрительно?", a: ["Пробуксовка сцепления", "Неисправность вентилятора", "Низкое давление в шинах как единственная причина", "Неисправность радиатора"], correct: 0 },
            { q: "При диагностике АКПП код ошибки указывает на цепь соленоида. Что означает код?", a: ["Нужно подтвердить проблему цепи/управления и не менять соленоид без проверки", "Соленоид гарантированно физически заклинил", "Нужно заменить двигатель", "Нужно заменить тормозные колодки"], correct: 0 },
            { q: "Почему один и тот же толчок при переключении не всегда означает одну и ту же неисправность?", a: ["Причины могут быть связаны с жидкостью, управлением, гидравликой, механикой и условиями работы", "Потому что АКПП не имеет диагностики", "Потому что толчки всегда вызваны шинами", "Потому что причина всегда в свечах"], correct:0 },
            { q:"АКПП работает нормально холодной, но после прогрева появляются задержки. Что сравнить?", a:["Температуру жидкости, параметры переключений и ошибки","Уровень жидкости по правильной процедуре и температуру","Поведение конкретного переключения в разных режимах","Адаптации и параметры при появлении симптома"], correct:0 }
        ]
    },
    cooling: {
        title: "💧 Охлаждение — базовый допуск",
        category: "cooling",
        description: "Вопросы по температуре, циркуляции, герметичности и управлению охлаждением.",
        questions: [
            { q: "Двигатель перегревается, а уровень ОЖ нормальный. Что ещё важно проверить?", a: ["Циркуляцию, термостат, вентилятор, теплообмен и возможные проблемы с давлением/герметичностью", "Только цвет кузова", "Только состояние свечей", "Только давление в шинах"], correct: 0 },
            { q: "Вентилятор включается только при очень высокой температуре. Это автоматически означает неисправность?", a: ["Нет, сначала нужно сравнить температуру включения с логикой конкретной системы и фактическими параметрами", "Да, любой вентилятор должен работать постоянно", "Да, нужно заменить радиатор", "Да, нужно заменить аккумулятор"], correct: 0 },
            { q: "После ремонта системы охлаждения уровень ОЖ снова падает. Какой следующий шаг правильнее?", a: ["Искать внешнюю/внутреннюю утечку и подтверждать герметичность системы", "Просто доливать ОЖ бесконечно", "Заменить тормозные колодки", "Отключить вентилятор"], correct: 0 },
            { q: "Термостат заклинил в открытом положении. Какой симптом более вероятен?", a: ["Двигатель может дольше прогреваться и работать ниже оптимальной температуры", "Всегда мгновенный перегрев", "Стартер перестаёт вращаться", "Пропадает тормозное усилие"], correct: 0 },
            { q: "Почему при перегреве нельзя ограничиваться заменой термостата без подтверждения причины?", a: ["Потому что перегрев может иметь несколько причин, включая циркуляцию, вентилятор, утечки и теплообмен", "Потому что термостат не связан с охлаждением", "Потому что нужно менять свечи при любом перегреве", "Потому что перегрев всегда вызван АКПП"], correct:0 },
            { q:"Перегрев возникает в пробке, а на трассе температура нормальная. Что сравнить?", a:["Работу вентилятора, температуру включения и воздушный поток","Команду вентилятора и фактическую температуру","Состояние радиатора на малой скорости","Циркуляцию жидкости вместе с работой вентилятора"], correct:0 }
        ]
    },
    engine_types: {
        title: "⚙️ Типы двигателей — базовый допуск",
        category: "engine_types",
        description: "Вопросы требуют понимать конструктивные отличия и их практические последствия.",
        questions: [
            { q: "Какое утверждение верно для R4?", a: ["Четыре цилиндра расположены в одном ряду", "Четыре цилиндра всегда расположены V-образно", "В двигателе четыре турбины", "Это обозначение четырёх передач"], correct: 0 },
            { q: "Что означает обозначение V6?", a: ["Шесть цилиндров, расположенных в двух рядах под углом", "Шесть цилиндров в одном ряду", "Шесть передач", "Шесть турбокомпрессоров"], correct: 0 },
            { q: "Какое практическое преимущество часто связывают с оппозитной схемой?", a: ["Низкая высота двигателя и низкий центр тяжести при соответствующей конструкции", "Обязательное отсутствие коленвала", "Возможность работать без масла", "Обязательная работа только на дизеле"], correct: 0 },
            { q: "В чём принципиальное отличие дизельного двигателя от бензинового по воспламенению смеси?", a: ["Дизель использует воспламенение от высокой температуры сжатого воздуха/смеси, а бензиновый обычно — искровое", "Дизель всегда использует свечи зажигания для основной работы", "Бензиновый двигатель не использует воздух", "Различий нет"], correct: 0 },
            { q: "Зачем дизелю могут быть нужны свечи накаливания?", a: ["Для облегчения запуска холодного двигателя и прогрева камеры сгорания", "Для создания постоянной искры как у бензинового двигателя", "Для зарядки аккумулятора", "Для управления тормозами"], correct:0 },
            { q:"На V6 пропуск появляется только по одной стороне двигателя. Что учитывать?", a:["Отдельно проверить цилиндры и общие элементы соответствующей банки","Сравнить данные этой стороны с противоположной","Проверить компоненты, общие для группы цилиндров","Учитывать расположение и доступ к компонентам банки"], correct:0 }
        ]
    }
};

/* =========================================================
   КВАЛИФИКАЦИЯ И ДОПУСКИ
========================================================= */

const trainingAnswerOverrides = {
    "После замены ремня ГРМ двигатель запускается, но работает неровно. Что логичнее проверить первым?": [
        "Совпадение фаз распредвала и коленвала по меткам и процедуре",
        "Правильность натяжения ремня и положение натяжного ролика",
        "Положение ремня на шкивах и отсутствие смещения по зубьям",
        "Фактическую установку ГРМ относительно положения поршней"
    ],
    "При проверке ремня ГРМ обнаружены трещины, но зубья визуально целые. Какой вывод наиболее правильный?": [
        "Оценить состояние по регламенту и при наличии трещин заменить ремень",
        "Оставить ремень, если на холодную двигатель запускается без шума",
        "Заменить только натяжной ролик, а ремень оставить до следующего ТО",
        "Сначала проверить только компрессию, не учитывая состояние ремня"
    ],
    "Почему после установки ГРМ недостаточно просто провернуть двигатель и убедиться, что он вращается?": [
        "Нужно подтвердить фазы и натяжение по процедуре производителя",
        "Нужно дополнительно проверить совпадение меток после полного оборота",
        "Нужно убедиться, что механизм не имеет лишнего сопротивления при вращении",
        "Нужно проверить результат установки по контрольным параметрам двигателя"
    ],
    "Что наиболее опасно при нарушении фаз ГРМ на двигателе с возможным контактом клапанов и поршней?": [
        "Контакт клапанов с поршнями и серьёзное повреждение двигателя",
        "Потеря мощности с возможным появлением пропусков воспламенения",
        "Нестабильный запуск и нарушение работы двигателя под нагрузкой",
        "Повышенная вероятность дальнейшего повреждения механизма ГРМ"
    ],
    "Клиент просит заменить только ремень, хотя ролик натяжителя имеет выраженный люфт. Как поступить профессионально?": [
        "Объяснить риск и предложить заменить дефектный ролик вместе с комплектом",
        "Заменить ремень, зафиксировать люфт ролика и рекомендовать повторный осмотр",
        "Предложить клиенту отдельную замену ролика с объяснением возможных последствий",
        "Установить только ремень после письменного отказа клиента от проверки ролика"
    ],
    "Двигатель троит только на холодную, а после прогрева работает ровно. Что разумнее сделать до замены деталей?": [
        "Собрать данные на холодном запуске и проверить зажигание, смесь и параметры",
        "Проверить систему зажигания именно в момент проявления симптома",
        "Сравнить коррекции и пропуски на холодную и после прогрева",
        "Проверить подсос воздуха и другие причины, меняющиеся с температурой"
    ],
    "При подозрении на подсос воздуха смесь уходит в бедную сторону. Какая проверка наиболее полезна для подтверждения причины?": [
        "Проверить герметичность впуска и возможные места подсоса",
        "Сравнить топливные коррекции на холостом ходу и при повышенных оборотах",
        "Проверить впускной тракт дымогенератором или другим подходящим методом",
        "Сопоставить показания расхода воздуха с режимом работы двигателя"
    ],
    "Загорелась лампа давления масла. Какой алгоритм наиболее безопасен?": [
        "Остановить двигатель и проверить уровень, фактическое давление и причину",
        "Проверить давление механическим манометром после исключения очевидных причин",
        "Проверить уровень масла и состояние системы перед дальнейшей эксплуатацией",
        "Не продолжать работу двигателя до подтверждения нормального давления"
    ],
    "Температура двигателя растёт в пробке, но на скорости возвращается к норме. Что стоит проверить в первую очередь?": [
        "Работу вентилятора, его управление и эффективность теплообмена",
        "Температуру включения вентилятора и фактическую команду управления",
        "Состояние радиатора и прохождение воздуха через его поверхность",
        "Работу системы охлаждения именно в режиме малой скорости автомобиля"
    ],
    "Компрессия в одном цилиндре заметно ниже остальных. Что это означает?": [
        "Есть основание искать механическую проблему и подтвердить её дополнительными тестами",
        "Нужно определить, связана ли потеря компрессии с клапанами, кольцами или прокладкой",
        "Следует сравнить результат повторным измерением и дополнительной проверкой цилиндра",
        "Одного измерения недостаточно, но результат требует дальнейшей механической диагностики"
    ],
    "Стартер медленно крутит двигатель. Напряжение на аккумуляторе выглядит нормальным. Что стоит проверить дальше?": [
        "Падение напряжения на силовых проводах и соединениях под нагрузкой",
        "Ток потребления стартера и состояние его силовой цепи",
        "Состояние массы двигателя и положительного кабеля при запуске",
        "Просадку напряжения непосредственно на стартере во время прокрутки"
    ],
    "Предохранитель цепи снова перегорает сразу после замены. Что делать?": [
        "Найти перегрузку или короткое замыкание до дальнейшей эксплуатации цепи",
        "Проверить потребитель и проводку на короткое замыкание после предохранителя",
        "Сравнить фактическую нагрузку цепи с её расчётным током",
        "Проверить участки проводки, разъёмы и потребитель перед установкой нового предохранителя"
    ],
    "Генератор показывает нормальное напряжение без нагрузки, но при включении фар и обогрева напряжение сильно проседает. Что это подсказывает?": [
        "Нужно проверить генератор, ремень, соединения и работу системы под нагрузкой",
        "Следует измерить падение напряжения на силовых соединениях генератора",
        "Нужно проверить ток отдачи генератора и состояние приводного ремня",
        "Стоит сравнить напряжение на генераторе и аккумуляторе при одинаковой нагрузке"
    ],
    "При проверке цепи мультиметром измерение сопротивления выполняют на цепи, которая находится под напряжением. Что не так?": [
        "Измерение сопротивления выполняют на обесточенной цепи",
        "Нужно отключить питание и по возможности исключить влияние подключённых потребителей",
        "Перед измерением сопротивления цепь должна быть без внешнего напряжения",
        "Сначала нужно обесточить цепь, иначе можно получить неверный результат или повредить прибор"
    ],
    "После ремонта электропроводки потребитель работает, но заметно слабее. Что может помочь найти проблему?": [
        "Проверка падения напряжения на участке цепи под рабочей нагрузкой",
        "Сравнение напряжения непосредственно на потребителе и на источнике питания",
        "Проверка массы и соединений во время работы потребителя",
        "Измерение напряжения на разных участках цепи при фактической нагрузке"
    ],
    "Сканер показывает код P0301. Какой вывод корректнее?": [
        "Есть признак пропусков воспламенения в первом цилиндре, причину нужно подтвердить",
        "Блок зафиксировал пропуски по первому цилиндру, но источник проблемы ещё не установлен",
        "Нужно подтвердить состояние зажигания, топлива и механики первого цилиндра",
        "Код указывает на область первого цилиндра, а не автоматически на конкретную деталь"
    ],
    "На холостом ходу параметр датчика выглядит нормальным, но жалоба появляется при разгоне. Что полезнее?": [
        "Проверить Live Data в условиях проявления симптома и сопоставить с эталоном",
        "Сравнить показания датчика при разгоне с другими связанными параметрами",
        "Провести измерение именно под нагрузкой, когда появляется жалоба",
        "Проверить динамику параметра во время поездки и исключить отклонения вне холостого хода"
    ],
    "Зачем смотреть Freeze Frame вместе с кодом неисправности?": [
        "Чтобы увидеть условия, при которых блок зарегистрировал ошибку",
        "Чтобы понять нагрузку и рабочие параметры в момент фиксации кода",
        "Чтобы сопоставить код с температурой, оборотами и другими условиями работы",
        "Чтобы восстановить контекст появления неисправности перед дополнительными проверками"
    ],
    "После очистки кодов ошибка пока не возвращается. Можно ли считать неисправность устранённой?": [
        "Нет, нужно подтвердить результат проверкой и повторным тестом системы",
        "Нет, требуется воспроизвести условия возникновения и убедиться в стабильной работе",
        "Нет, очистка памяти сама по себе не подтверждает устранение причины",
        "Нет, после ремонта нужно проверить систему в соответствующем режиме эксплуатации"
    ],
    "Два разных датчика могут давать одинаковый симптом. Какой подход правильнее?": [
        "Проверить питание, сигнал и сопоставить данные с другими параметрами системы",
        "Сначала сравнить фактические значения обоих датчиков с эталонными",
        "Проверить входные условия и проводку до замены любого из датчиков",
        "Использовать дополнительные измерения, чтобы отделить неисправность датчика от причины симптома"
    ],
    "Двигатель плохо тянет, а давление топлива ниже нормы. Что следует выяснить до замены насоса?": [
        "Причину низкого давления: питание насоса, фильтрацию, регуляцию и подачу",
        "Проверить питание насоса, состояние фильтра и фактическую производительность системы",
        "Сравнить давление до и после проверки питания и состояния элементов подачи топлива",
        "Установить, связано ли падение давления с насосом, ограничением подачи или управлением"
    ],
    "Форсунка подозревается в неисправности. Почему нельзя ставить диагноз только по одному пропуску?": [
        "Пропуск может иметь причины в зажигании, механике, проводке и других системах",
        "Нужно исключить проблемы искры, компрессии и управления до замены форсунки",
        "Один пропуск не показывает, какая именно система стала причиной нарушения",
        "Следует сопоставить пропуск с коррекциями, зажиганием и механическим состоянием цилиндра"
    ],
    "Давление топлива соответствует норме, но двигатель всё равно плохо работает. Что это означает?": [
        "Нужно продолжить поиск: одной проверки давления недостаточно для полной диагностики",
        "Следует проверить качество распыла, управление форсунками и другие системы двигателя",
        "Нормальное давление исключает только часть возможных причин, но не всю топливную систему",
        "Нужно сопоставить давление с симптомом и проверить остальные условия работы двигателя"
    ],
    "При подозрении на неисправность форсунки что даст более сильное подтверждение?": [
        "Сравнение коррекций или баланса и результаты дополнительных проверок системы",
        "Сопоставление работы цилиндров и данных коррекций с результатами проверки форсунки",
        "Проверка электрической цепи и фактического вклада форсунки в работу двигателя",
        "Результаты стендовой или балансовой проверки в зависимости от конструкции системы"
    ],
    "После замены топливного фильтра двигатель стал работать хуже. Какой шаг логичнее?": [
        "Проверить правильность установки, герметичность и давление/подачу топлива",
        "Проверить направление установки фильтра и отсутствие подсоса воздуха в системе",
        "Сравнить давление и подачу топлива до и после фильтра при работающем двигателе",
        "Убедиться, что после обслуживания нет утечек и ограничений подачи топлива"
    ],
    "Автомобиль постоянно уводит вправо на ровной дороге. Что логичнее проверить до регулировки развала-схождения?": [
        "Давление и состояние шин, люфты подвески и рулевого управления",
        "Состояние шин, тормозного механизма и отсутствие подклинивания колеса",
        "Люфты рулевого управления и подвески вместе с фактическим состоянием шин",
        "Сначала исключить внешние причины увода, а затем оценивать углы установки колёс"
    ],
    "После замены рулевого наконечника появилась необходимость в регулировке углов установки колёс. Почему?": [
        "Изменилось положение элементов рулевого управления, что может повлиять на углы",
        "Изменение длины или положения рулевой тяги способно изменить схождение",
        "После вмешательства в рулевое управление нужно подтвердить фактические углы",
        "Положение колеса относительно рулевого механизма могло измениться после замены детали"
    ],
    "Есть стук при проезде мелких неровностей, а явного люфта шаровой нет. Что ещё имеет смысл проверить?": [
        "Стойки и втулки стабилизатора, крепления амортизаторов и другие элементы подвески",
        "Опоры амортизаторов, втулки и стойки стабилизатора, а также крепёж",
        "Состояние сайлентблоков и других шарнирных соединений подвески",
        "Элементы подвески, которые могут давать стук без выраженного люфта шаровой"
    ],
    "После регулировки развала-схождения автомобиль всё равно тянет в сторону. Что делать?": [
        "Проверить шины, тормозной механизм, подвеску и фактические углы",
        "Исключить разницу давления и состояния шин, затем проверить подвеску и тормоза",
        "Сравнить полученные углы с допусками и проверить причины увода вне регулировки",
        "Проверить, не возникает ли увод из-за шины, подклинивания тормоза или механического дефекта"
    ],
    "Почему выраженный люфт элемента подвески нельзя компенсировать одной регулировкой углов?": [
        "Неисправный элемент может снова изменить положение колеса и ухудшить безопасность",
        "Люфт способен менять геометрию подвески во время движения и сделать регулировку нестабильной",
        "Сначала нужно восстановить исправность механики, иначе измеренные углы могут не сохраняться",
        "Регулировка не устраняет физический люфт и не заменяет ремонт повреждённого элемента"
    ],
    "Толщина тормозного диска выше минимально допустимой, но поверхность имеет глубокие задиры и перегрев. Что делать?": [
        "Оценить состояние диска и сопряжённых деталей по требованиям ремонта, а не только по толщине",
        "Проверить поверхность, биение и признаки перегрева перед решением о дальнейшей эксплуатации",
        "Сопоставить состояние диска с допусками и характером повреждения рабочей поверхности",
        "Оценить диск в комплексе с колодками и причиной перегрева перед выдачей автомобиля"
    ],
    "Автомобиль уводит при торможении. Какая причина наиболее логично требует проверки?": [
        "Неравномерная работа тормозных механизмов, состояние колодок, дисков и суппортов",
        "Разницу тормозных усилий между сторонами и возможное подклинивание суппорта",
        "Состояние колодок, дисков и гидравлики с обеих сторон оси",
        "Работу тормозных механизмов и причины неодинакового замедления колёс"
    ],
    "Педаль тормоза стала мягкой после вмешательства в гидравлическую систему. Что вероятнее всего требует проверки?": [
        "Наличие воздуха, состояние жидкости и герметичность системы",
        "Герметичность соединений и правильность удаления воздуха после ремонта",
        "Уровень жидкости и возможное наличие воздуха в гидравлическом контуре",
        "Состояние системы после прокачки и отсутствие утечки тормозной жидкости"
    ],
    "Почему установка колодок без оценки состояния диска может привести к проблеме?": [
        "Сопряжение поверхностей и состояние диска влияют на эффективность и приработку",
        "Повреждённая рабочая поверхность может ухудшить контакт и ускорить износ новых колодок",
        "Состояние диска влияет на равномерность контакта и работу нового комплекта колодок",
        "Новый комплект не устраняет проблемы диска, которые могут повлиять на торможение"
    ],
    "После ремонта тормозов контрольная проверка показала неодинаковое тормозное усилие. Как поступить?": [
        "Разобраться с причиной до выдачи автомобиля клиенту",
        "Повторно проверить механизмы и гидравлику и устранить источник разницы усилий",
        "Не выдавать автомобиль до подтверждения равномерной работы тормозной системы",
        "Локализовать сторону с отклонением и проверить соответствующий тормозной механизм"
    ],
    "АКПП начала переключаться с толчками после прогрева. Что логичнее сделать?": [
        "Проверить ошибки, параметры, жидкость по процедуре и воспроизвести симптом",
        "Сравнить переключения на холодную и после прогрева вместе с диагностическими параметрами",
        "Проверить уровень и состояние ATF по регламенту конкретной коробки и выполнить пробную поездку",
        "Сначала собрать данные по температуре, переключениям и ошибкам, не меняя детали наугад"
    ],
    "Уровень жидкости АКПП низкий. Почему недостаточно просто долить её?": [
        "Нужно выяснить причину потери и установить уровень по правильной процедуре",
        "Следует найти возможную утечку и проверить, почему уровень оказался ниже нормы",
        "Важно учитывать температуру и процедуру измерения конкретной коробки перед доливом",
        "Долив без поиска причины может скрыть утечку и привести к повторному снижению уровня"
    ],
    "На МКПП обороты двигателя растут при резком разгоне, а скорость увеличивается заметно слабее. Что подозрительно?": [
        "Пробуксовка сцепления",
        "Потеря передачи момента через сцепление под нагрузкой",
        "Износ фрикционного диска или недостаточное прижатие сцепления",
        "Проблема в узле сцепления, проявляющаяся при передаче высокого момента"
    ],
    "При диагностике АКПП код ошибки указывает на цепь соленоида. Что означает код?": [
        "Нужно подтвердить проблему цепи или управления и не менять соленоид без проверки",
        "Следует проверить питание, проводку, разъёмы и сам соленоид по процедуре",
        "Код указывает на электрическую цепь, но не доказывает механическую неисправность соленоида",
        "Нужно сопоставить код с параметрами работы и проверить цепь до замены компонента"
    ],
    "Почему один и тот же толчок при переключении не всегда означает одну и ту же неисправность?": [
        "Причины могут быть связаны с жидкостью, управлением, гидравликой, механикой и условиями работы",
        "Одинаковый симптом может возникать из-за разных узлов и условий работы коробки",
        "Нужно учитывать температуру, режим переключения и диагностические параметры при поиске причины",
        "Толчок является симптомом, а не готовым диагнозом конкретной детали"
    ],
    "Двигатель перегревается, а уровень ОЖ нормальный. Что ещё важно проверить?": [
        "Циркуляцию, термостат, вентилятор, теплообмен и герметичность системы",
        "Работу вентилятора и термостата вместе с фактической температурой двигателя",
        "Циркуляцию жидкости, состояние радиатора и работу системы охлаждения под нагрузкой",
        "Давление в системе, циркуляцию и эффективность отвода тепла через радиатор"
    ],
    "Вентилятор включается только при очень высокой температуре. Это автоматически означает неисправность?": [
        "Нет, сначала нужно сравнить температуру включения с логикой конкретной системы",
        "Нет, нужно сопоставить фактическую температуру с заданными порогами управления",
        "Не обязательно: сначала проверяют температуру включения и команду блока управления",
        "Не обязательно, поскольку алгоритм работы вентилятора зависит от конкретной системы"
    ],
    "После ремонта системы охлаждения уровень ОЖ снова падает. Какой следующий шаг правильнее?": [
        "Искать внешнюю или внутреннюю утечку и подтверждать герметичность системы",
        "Проверить соединения, радиатор, помпу и систему под давлением",
        "Сравнить уровень после остывания и провести проверку системы на утечки",
        "Исключить наружную течь и затем проверить признаки внутренней потери жидкости"
    ],
    "Термостат заклинил в открытом положении. Какой симптом более вероятен?": [
        "Двигатель может дольше прогреваться и работать ниже оптимальной температуры",
        "Температура двигателя может медленно достигать рабочего диапазона даже при обычной нагрузке",
        "Система может слишком долго оставаться в режиме интенсивного охлаждения после запуска",
        "Рабочая температура может быть ниже ожидаемой, особенно при движении по трассе"
    ],
    "Почему при перегреве нельзя ограничиваться заменой термостата без подтверждения причины?": [
        "Перегрев может иметь несколько причин, включая циркуляцию, вентилятор, утечки и теплообмен",
        "Один симптом может быть вызван разными элементами системы охлаждения",
        "Без дополнительных проверок нельзя исключить проблемы с циркуляцией, давлением и теплоотдачей",
        "Замена термостата не подтверждает устранение причины, если источник перегрева другой"
    ],
    "Какое утверждение верно для R4?": [
        "Четыре цилиндра расположены в одном ряду",
        "Четыре цилиндра работают с одним общим рядом цилиндров",
        "Обозначение относится к рядной схеме с четырьмя цилиндрами",
        "В рядной компоновке R4 используется четыре цилиндра"
    ],
    "Что означает обозначение V6?": [
        "Шесть цилиндров расположены в двух рядах под углом",
        "Шесть цилиндров разделены между двумя рядами блока",
        "Двигатель имеет шесть цилиндров в V-образной компоновке",
        "Цилиндры распределены по двум рядам, образующим V-образную схему"
    ],
    "Какое практическое преимущество часто связывают с оппозитной схемой?": [
        "Низкая высота двигателя и низкий центр тяжести при соответствующей конструкции",
        "Компактная по высоте компоновка может позволить снизить центр тяжести автомобиля",
        "Расположение цилиндров помогает получить низкий профиль двигателя относительно рядной схемы",
        "Оппозитная конструкция может способствовать снижению центра тяжести благодаря низкой высоте"
    ],
    "В чём принципиальное отличие дизельного двигателя от бензинового по воспламенению смеси?": [
        "Дизель использует воспламенение от высокой температуры сжатого воздуха, а бензиновый обычно искровое",
        "В дизеле воспламенение происходит от сжатия, а в бензиновом двигателе обычно используется искра",
        "Дизельная смесь воспламеняется от температуры сжатия, тогда как бензиновая — от системы зажигания",
        "Главное различие связано со способом воспламенения: сжатие у дизеля и искра у бензинового"
    ],
    "Зачем дизелю могут быть нужны свечи накаливания?": [
        "Для облегчения запуска холодного двигателя и прогрева камеры сгорания",
        "Для повышения температуры в зоне камеры сгорания при холодном запуске",
        "Чтобы улучшить воспламенение смеси в условиях низкой температуры двигателя",
        "Для облегчения холодного запуска, когда температуры сжатия недостаточно для уверенного воспламенения"
    ]
};

const qualificationInfo = {
    timing:       {name:"ГРМ", icon:"⛓️", minLevel:6, label:"Ремонт и обслуживание ГРМ"},
    engine:       {name:"Двигатель", icon:"🔥", minLevel:2, label:"Базовые работы по двигателю"},
    electrics:    {name:"Электрика", icon:"⚡", minLevel:2, label:"Автомобильная электрика"},
    diagnostics:  {name:"Диагностика", icon:"💻", minLevel:3, label:"OBD-II и углублённая диагностика"},
    fuel:         {name:"Топливная система", icon:"⛽", minLevel:3, label:"Диагностика и обслуживание топливной системы"},
    suspension:   {name:"Подвеска", icon:"🛞", minLevel:2, label:"Ходовая часть и рулевое управление"},
    brakes:       {name:"Тормоза", icon:"🛑", minLevel:2, label:"Тормозная система"},
    transmission: {name:"Трансмиссия", icon:"⚙️", minLevel:5, label:"МКПП, сцепление и АКПП"},
    cooling:      {name:"Охлаждение", icon:"💧", minLevel:2, label:"Система охлаждения"},
    engine_types:{name:"Типы двигателей", icon:"🔧", minLevel:4, label:"Рядные, V-образные, оппозитные и дизельные двигатели"}
};

function hasQualification(id){ return !!state.training?.[id]; }
function qualificationCount(){ return Object.keys(qualificationInfo).filter(hasQualification).length; }
function qualificationForProblem(problem){ return problem.requiredTraining || null; }

const problemQualificationMap = {
    timing_belt_wear:"timing",
    check_engine_misfire:"diagnostics",
    turbo_loss:"diagnostics",
    automatic_transmission_kick:"transmission",
    diesel_glow:"engine_types",
    wheel_bearing:"suspension",
    battery_drain:"electrics",
    steering_play:"suspension",
    exhaust_smoke:"engine",
    clutch_slip:"transmission",
    car_pulls:"suspension",
    wheel_vibration:"suspension"
};

function applyProblemQualifications(){
    problems.forEach(p=>{
        if(problemQualificationMap[p.id]) p.requiredTraining=problemQualificationMap[p.id];
    });
}
applyProblemQualifications();


/* =========================================================
   СВЯЗЬ ЗАКАЗОВ С БАЗОЙ ЗНАНИЙ
   Изученные темы помогают понимать конкретные неисправности.
========================================================= */
const problemKnowledgeMap = {
    brake_squeal: ["brake_pads", "brake_discs"],
    brake_vibration: ["brake_discs", "wheel_bearing_noise", "vibration"],
    car_pulls: ["wheel_alignment", "steering_play", "shock_absorber", "tire"],
    pulling_side: ["wheel_alignment", "steering_play", "shock_absorber"],
    wheel_vibration: ["vibration", "wheel_bearing_noise", "wheel_alignment"],
    wheel_bearing: ["wheel_bearing_noise", "suspension"],
    battery_drain: ["voltage_drop", "battery", "body_modules"],
    steering_play: ["steering_play", "wheel_alignment", "power_steering"],
    exhaust_smoke: ["exhaust_system", "oxygen_sensor", "compression_test"],
    clutch_slip: ["clutch", "manual_transmission"],
    automatic_transmission_kick: ["automatic_transmission", "diagnosis_order"],
    timing_belt_wear: ["timing_belt", "timing", "diagnosis_order"],
    check_engine_misfire: ["misfire_codes", "ignition", "compression_test", "diagnosis_order"],
    turbo_loss: ["turbo", "intake", "live_data", "diagnosis_order"],
    diesel_glow: ["diesel", "diesel_glow", "voltage_drop"],
    cooling_overheat: ["coolant", "thermostat", "cooling_fan", "diagnosis_order"],
    coolant_leak: ["coolant", "diagnosis_order"],
    oil_leak: ["oil_system", "diagnosis_order"],
    battery_problem: ["battery", "voltage_drop", "diagnosis_order"],
    alternator_problem: ["alternator", "voltage_drop", "battery"],
    starter_problem: ["starter", "voltage_drop", "battery"],
    fuel_pressure_low: ["fuel_pressure", "fuel_system", "injectors"],
    ac_cooling: ["ac_system", "ac_pressure", "ac_leak"],
    alignment_problem: ["wheel_alignment", "steering_play"],
    exhaust_problem: ["exhaust_system", "catalyst", "oxygen_sensor"],
    lighting_problem: ["lighting_circuit", "body_modules", "lamp_alignment"]
};

function knowledgeTopicsForProblem(problem){
    const ids = problemKnowledgeMap[problem?.id] || [];
    const all = getAllKnowledgeTopics();
    return ids.map(id => all.find(t => t.id === id)).filter(Boolean);
}

function renderProblemKnowledge(problem){
    const topics = knowledgeTopicsForProblem(problem);
    if (!topics.length) return "";
    const studied = topics.filter(t => isKnowledgeStudied(t.id)).length;
    return `
        <div class="diagnosis-result problem-knowledge">
            📚 <b>Полезно для этой неисправности</b>
            <small>${studied}/${topics.length} тем изучено</small>
            <div class="knowledge-topic-links">
                ${topics.map(t => `
                    <button class="knowledge-mini-button ${isKnowledgeStudied(t.id) ? 'studied' : ''}" onclick="openKnowledgeTopic('${t.id}')">
                        ${isKnowledgeStudied(t.id) ? '✅' : '📖'} ${t.title}
                    </button>
                `).join('')}
            </div>
            ${studied ? `<small>Изученные темы дают дополнительный опыт за правильную диагностику.</small>` : `<small>Изучи эти темы в базе знаний — они пригодятся при диагностике.</small>`}
        </div>`;
}

function qualificationRequirementText(problem){
    const id=qualificationForProblem(problem);
    if(!id) return "";
    const q=qualificationInfo[id];
    if(!q) return "";
    return ` · 🎓 ${q.name}`;
}

function openTrainingTests() {
    const entries = Object.entries(trainingTests);
    const passed = entries.filter(([id]) => !!state.training?.[id]).length;

    openModal(`
        <div class="knowledge-header">
            <div>
                <h2>🎓 Квалификация и допуски</h2>
                <p>Мастерство растёт от практики, а допуск подтверждается тестом без ошибок. Сложные работы требуют и нужного уровня, и соответствующего допуска.</p>
            </div>
            <div class="knowledge-progress"><b>${passed}/${entries.length}</b><span>допусков</span></div>
        </div>
        <div class="diagnosis-result">
            🔧 <b>Мастерство ${state.level}</b> · ${state.xp}/${100+(state.level-1)*50} XP<br>
            🎓 Подтверждено допусков: <b>${passed}</b> из ${entries.length}
        </div>

        <div class="training-test-list">
            ${entries.map(([id, test]) => {
                const ok = !!state.training?.[id];
                const q = qualificationInfo[id] || {name:id, icon:"🎓", minLevel:1, label:""};
                const levelOk = state.level >= q.minLevel;
                return `
                    <div class="training-test-card ${ok ? "passed" : ""}">
                        <div class="training-test-head">
                            <h3>${q.icon} ${q.name}</h3>
                            <span>${ok ? "✅ Допуск" : levelOk ? "🔒 Не пройден" : `🔒 Нужен уровень ${q.minLevel}`}</span>
                        </div>
                        <p>${q.label}. ${test.description}</p>
                        <div class="stat-row"><span>Требование</span><b>Мастерство ${q.minLevel}+</b></div>
                        <button class="action-button ${ok ? "secondary-button" : "knowledge-study-button"}" ${levelOk ? "" : "disabled"} onclick="startTrainingTest('${id}')">
                            ${ok ? "🔁 Перепройти тест" : levelOk ? "📝 Пройти тест" : "🔒 Сначала повысить мастерство"}
                        </button>
                    </div>
                `;
            }).join("")}
        </div>

        <button class="action-button secondary-button" onclick="openKnowledgeMenu()">📚 Перейти в базу знаний</button>
    `);
}

function startTrainingTest(testId) {
    const test = trainingTests[testId];
    if (!test) return;
    const q = qualificationInfo[testId];
    if (q && state.level < q.minLevel) {
        showToast(`🔒 Нужен уровень мастерства ${q.minLevel}`);
        return;
    }

    let current = 0;
    let mistakes = [];
    let currentAnswers = [];

    function showQuestion() {
        const item = test.questions[current];
        const answerSet = trainingAnswerOverrides[item.q] || item.a;
        const correctText = item.a[item.correct];
        currentAnswers = answerSet.map((text) => ({
            text,
            correct: text === correctText
        })).sort(() => Math.random() - 0.5);

        openModal(`
            <div class="knowledge-header">
                <div>
                    <h2>${test.title}</h2>
                    <p>${test.description}</p>
                </div>
                <div class="knowledge-progress"><b>${current + 1}/${test.questions.length}</b><span>вопрос</span></div>
            </div>
            <div class="knowledge-block">
                <h3>❓ ${item.q}</h3>
            </div>
            <div class="knowledge-topic-list">
                ${currentAnswers.map((answer, i) => `
                    <button class="knowledge-topic" onclick="window.__answerTraining(${i})">
                        <span>${String.fromCharCode(65 + i)}</span>
                        <div><b>${answer.text}</b></div>
                    </button>
                `).join("")}
            </div>
        `);
    }

    window.__answerTraining = function(index) {
        if (!currentAnswers[index].correct) {
            mistakes.push({question: current + 1, text: test.questions[current].q});
        }
        current++;

        if (current < test.questions.length) {
            showQuestion();
            return;
        }

        delete window.__answerTraining;

        if (mistakes.length === 0) {
            if (!state.training) state.training = {};
            state.training[testId] = true;
            save();
            showToast(`🎓 Допуск «${(qualificationInfo[testId]||{}).name || test.title}» получен`);
            openModal(`
                <h2>🏆 Допуск получен!</h2>
                <div class="knowledge-practice">
                    <h3>🎓 ${test.title}</h3>
                    <p>Тест пройден без ошибок. Допуск сохранён. В дальнейшем он будет открывать соответствующие практические задания.</p>
                </div>
                <button class="action-button knowledge-study-button" onclick="openTrainingTests()">🎓 К тестам и допускам</button>
            `);
        } else {
            openModal(`
                <h2>❌ Допуск пока не получен</h2>
                <div class="diagnosis-result">
                    Ошибок: <b>${mistakes.length}</b>. Для допуска тест нужно пройти без единой ошибки.
                </div>
                <div class="knowledge-block">
                    <h3>Что повторить</h3>
                    <ul>${mistakes.map(x => `<li>Вопрос ${x.question}: ${x.text}</li>`).join("")}</ul>
                </div>
                <button class="action-button" onclick="startTrainingTest('${testId}')">🔁 Пройти тест заново</button>
                <button class="action-button secondary-button" onclick="openKnowledgeMenu()">📚 Изучить базу знаний</button>
            `);
        }
    };

    showQuestion();
}

/* =========================================================
   КНОПКИ
========================================================= */

$("startDiagnosis").onclick =
    startDiagnosis;

$("serviceButton").onclick =
    openService;

$("closeModal").onclick =
    closeModal;


$("modal").onclick =
    event => {

        if (
            event.target.id === "modal"
        ) {

            closeModal();
        }
    };



/* =========================================================
   АУКЦИОН И СОБСТВЕННЫЕ АВТОМОБИЛИ
   Новая система не изменяет оборудование, диагностику,
   заказы клиентов и существующий гараж.
========================================================= */

function carImagePath(car, ext = "jpg") {
    const slug = `${car.brand}-${car.model}`
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/[^a-zа-я0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "");
    return `images/cars/${slug}.${ext}`;
}

function carPhotoPath(car) {
    return carImagePath(car, "jpg");
}

function carSvgPath(car) {
    return carImagePath(car, "svg");
}

function auctionFaultPool() {
    return [
        {name:"🛢️ Течь масла", repair:9000, level:1},
        {name:"🛑 Износ тормозов", repair:7000, level:1},
        {name:"🔋 Слабый аккумулятор", repair:5500, level:1},
        {name:"🔥 Проблема с зажиганием", repair:7500, level:1},
        {name:"🛞 Износ элементов подвески", repair:11000, level:1},
        {name:"💻 Ошибка датчика двигателя", repair:6500, level:1},
        {name:"❄️ Проблема системы охлаждения", repair:12500, level:2},
        {name:"⚙️ Проблема трансмиссии", repair:22000, level:3},
        {name:"⛓️ Износ привода ГРМ", repair:18000, level:3},
        {name:"🌫️ Проблема выхлопной системы", repair:10000, level:2}
    ];
}

function randomAuctionCar() {
    const pool = cars.filter(c => Array.isArray(c.years) && c.years.length);
    const base = pool[Math.floor(Math.random() * pool.length)];
    const year = base.years[Math.floor(Math.random() * base.years.length)];
    const mileage = Math.round((60000 + Math.random() * 230000) / 1000) * 1000;
    const condition = Math.floor(52 + Math.random() * 44);
    // Базовая стоимость конкретной модели. Это не точная рыночная оценка,
    // а игровая база, чтобы цены оставались реалистичными и зависели от класса авто.
    const basePrices = {
        "Lada Granta": 550000, "Lada Vesta": 750000, "Lada Priora": 430000,
        "Renault Logan": 520000, "Renault Sandero": 560000,
        "Hyundai Solaris": 650000, "Kia Rio": 680000, "Volkswagen Polo": 620000,
        "Skoda Rapid": 650000, "Kia Ceed": 700000, "Hyundai i30": 690000,
        "Hyundai Elantra": 760000, "Toyota Corolla": 850000, "Toyota Camry": 1250000,
        "Ford Focus": 650000, "Ford Fiesta": 570000, "Mazda 3": 780000,
        "Mazda 6": 980000, "Mitsubishi Lancer": 620000, "Honda Civic": 760000,
        "Nissan Qashqai": 950000, "Nissan X-Trail": 1050000, "Renault Duster": 850000,
        "Kia Sportage": 950000, "Hyundai Tucson": 1200000, "Toyota RAV4": 1350000,
        "Honda CR-V": 1200000, "Mitsubishi Outlander": 1050000,
        "Volkswagen Tiguan": 1000000, "Skoda Yeti": 800000,
        "Volkswagen Passat": 850000, "Skoda Octavia": 800000,
        "BMW 3 Series": 1150000, "Mercedes-Benz C-Class": 1250000,
        "Audi A4": 1050000, "Volvo XC60": 1350000, "Lexus RX": 1750000
    };
    const modelKey = `${base.brand} ${base.model}`;
    const basePrice = basePrices[modelKey] || (base.weight <= 2 ? 1200000 : base.weight <= 4 ? 950000 : base.weight <= 7 ? 700000 : 550000);
    const ageFactor = Math.max(0.55, 1 - Math.max(0, 2026 - year) * 0.035);
    const mileageFactor = Math.max(0.72, 1 - Math.max(0, mileage - 80000) / 180000 * 0.18);
    const conditionFactor = 0.72 + condition / 100 * 0.28;
    const marketPrice = Math.max(180000, Math.round((basePrice * ageFactor * mileageFactor * conditionFactor) / 5000) * 5000);
    const discount = 0.58 + Math.random() * 0.22;
    const faultCount = Math.random() < 0.18 ? 3 : Math.random() < 0.45 ? 2 : 1;
    const faults = auctionFaultPool().sort(() => Math.random() - 0.5).slice(0, faultCount);
    const damagePenalty = faults.reduce((sum, f) => sum + f.repair, 0) * (0.45 + Math.random() * 0.25);
    const price = Math.max(25000, Math.round((marketPrice * discount - damagePenalty) / 1000) * 1000);

    return {
        uid: `auc_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
        brand: base.brand,
        model: base.model,
        icon: base.icon,
        year,
        mileage,
        condition,
        engine: base.engines[Math.floor(Math.random() * base.engines.length)],
        transmission: base.transmissions[Math.floor(Math.random() * base.transmissions.length)],
        marketPrice,
        price,
        photo: carPhotoPath(base),
        hiddenFaults: faults,
        inspected: false,
        diagnosed: false,
        createdDay: state.day
    };
}

function generateAuctionListings(force = false) {
    if (!force && state.auctionListings.length && state.auctionDay === state.day) return;
    state.auctionListings = Array.from({length: 5}, () => randomAuctionCar());
    state.auctionDay = state.day;
    save();
}

function auctionCarImage(car, cls = "auction-car-photo") {
    const safe = String(car.brand + " " + car.model).replace(/'/g, "\\'");
    const jpg = car.photo || carPhotoPath(car);
    const svg = carSvgPath(car);
    return `<img class="${cls}" src="${jpg}" data-svg="${svg}" alt="${safe}" onerror="if(this.dataset.fallback!=='1'){this.dataset.fallback='1';this.src=this.dataset.svg;}else{this.style.display='none';this.nextElementSibling.style.display='flex';}"><div class="auction-car-fallback">${car.icon || "🚗"}<span>${safe}</span></div>`;
}

let auctionFilter = "all";

function auctionCategory(car) {
    const base = cars.find(c => c.brand === car.brand && c.model === car.model);
    const weight = Number(base?.weight ?? 7);
    if (weight >= 8) return "economy";
    if (weight >= 5) return "middle";
    if (weight >= 3) return "business";
    return "premium";
}

function setAuctionFilter(filter) {
    auctionFilter = filter;
    openAuction();
}

function refreshAuctionListings() {
    const cost = 2000;
    if (state.money < cost) {
        showToast(`💰 Для обновления списка нужно ${money(cost)}`);
        return;
    }
    state.money -= cost;
    generateAuctionListings(true);
    showToast("🔄 Список аукциона обновлён");
    openAuction();
}

function placeAuctionBid(index) {
    const car = state.auctionListings?.[index];
    if (!car) return;
    openModal(`
        <div class="auction-confirm">
            <div class="auction-confirm-icon">🔨</div>
            <h2>Подтвердить покупку?</h2>
            <p><b>${car.brand} ${car.model}</b></p>
            <div class="auction-confirm-price">${money(car.price)}</div>
            <p class="auction-muted">После покупки автомобиль появится в разделе «Мои автомобили».</p>
            <button class="auction-buy-button" onclick="buyAuctionCar(${index})">🔨 Сделать ставку: ${money(car.price)}</button>
            <button class="auction-back-button" onclick="openAuction()">Отмена</button>
        </div>
    `);
}

function openAuction() {
    generateAuctionListings();
    const all = state.auctionListings || [];
    const listings = auctionFilter === "all" ? all : all.filter(car => auctionCategory(car) === auctionFilter);
    const counts = {
        all: all.length,
        economy: all.filter(c => auctionCategory(c) === "economy").length,
        middle: all.filter(c => auctionCategory(c) === "middle").length,
        business: all.filter(c => auctionCategory(c) === "business").length,
        premium: all.filter(c => auctionCategory(c) === "premium").length
    };

    openModal(`
        <div class="auction-screen">
            <div class="auction-header">
                <div>
                    <h2>🔨 Аукцион автомобилей <span class="auction-info-dot">i</span></h2>
                    <p>Каждый день новый список автомобилей. Найди выгодный вариант и проверь его до покупки.</p>
                </div>
                <div class="auction-day">День аукциона <b>${state.auctionDay}</b></div>
                <button class="auction-refresh-button" onclick="refreshAuctionListings()">
                    🔄 Обновить список<br><span>2 000 ₽</span>
                </button>
            </div>

            <div class="auction-budget-row">
                <div class="auction-filters">
                    ${[
                        ["all","Все авто",counts.all],
                        ["economy","Эконом",counts.economy],
                        ["middle","Средний класс",counts.middle],
                        ["business","Бизнес",counts.business],
                        ["premium","Премиум",counts.premium]
                    ].map(([id,label,count]) => `
                        <button class="auction-filter ${auctionFilter===id?'active':''}" onclick="setAuctionFilter('${id}')">${label}${id==='all'?'':` <span>${count}</span>`}</button>
                    `).join('')}
                </div>
                <div class="auction-budget">Ваш бюджет: <b>${money(state.money)}</b></div>
            </div>

            <div class="auction-grid">
                ${listings.length ? listings.map((car) => {
                    const index = all.indexOf(car);
                    const cat = auctionCategory(car);
                    const conditionClass = car.condition >= 80 ? 'good' : car.condition >= 60 ? 'ok' : car.condition >= 40 ? 'mid' : 'bad';
                    const status = car.condition >= 80 ? 'Отличное' : car.condition >= 60 ? 'Хорошее' : car.condition >= 40 ? 'Среднее' : 'Плохое';
                    return `
                    <article class="auction-card auction-card-modern">
                        <div class="auction-card-number">${index+1}</div>
                        <div class="auction-photo-wrap">${auctionCarImage(car)}</div>
                        <div class="auction-card-body">
                            <h3>${car.brand} ${car.model}</h3>
                            <div class="auction-specs">
                                <div>📅 ${car.year}</div>
                                <div>🛣️ ${Number(car.mileage).toLocaleString('ru-RU')} км</div>
                                <div>⚙️ ${car.transmission}</div>
                                <div>🔧 ${car.engine}</div>
                            </div>
                            <div class="auction-condition-row"><span>Состояние</span><b>${car.condition}%</b></div>
                            <div class="auction-condition"><span class="${conditionClass}" style="width:${car.condition}%"></span></div>
                            <div class="auction-condition-label ${conditionClass}">${status}</div>
                            <div class="auction-price-line"><span>Рыночная цена</span><b>${money(car.marketPrice)}</b></div>
                            <div class="auction-bid-line"><span>Цена аукциона</span><b>${money(car.price)}</b></div>
                            <div class="auction-card-actions">
                                <button class="auction-inspect-button" onclick="inspectAuctionCar(${index})">👁 Осмотр</button>
                                <button class="auction-buy-button" onclick="placeAuctionBid(${index})">🔨 Купить</button>
                            </div>
                        </div>
                    </article>`;
                }).join('') : `<div class="auction-empty">По выбранной категории сейчас нет автомобилей.</div>`}
            </div>

            <div class="auction-legend">
                <span><i class="dot good"></i>80–100% Отличное</span>
                <span><i class="dot ok"></i>60–79% Хорошее</span>
                <span><i class="dot mid"></i>40–59% Среднее</span>
                <span><i class="dot bad"></i>0–39% Плохое</span>
                <span class="auction-tip">💡 Осмотр и диагностика помогают найти скрытые проблемы!</span>
            </div>

            <div class="auction-footer-actions">
                <button class="auction-back-button" onclick="openMyCars()">🚗 Мои автомобили (${(state.ownedCars||[]).length})</button>
                <button class="auction-back-button" onclick="closeModal()">← Вернуться в гараж</button>
            </div>
        </div>
    `);
}

function inspectAuctionCar(index) {
    const car = state.auctionListings?.[index];
    if (!car) return;
    car.inspected = true;
    save();
    const wearText = car.condition >= 85 ? "Хорошее" : car.condition >= 70 ? "Среднее" : "Уставшее";
    openModal(`
        <h2>🔍 Осмотр: ${car.brand} ${car.model}</h2>
        <div class="auction-inspection">
            ${auctionCarImage(car, "auction-car-photo large")}
            <div>
                <p><b>${car.year} год</b> · ${Number(car.mileage).toLocaleString("ru-RU")} км</p>
                <p>⚙️ ${car.engine}</p>
                <p>⚙️ ${car.transmission}</p>
                <p>🔧 Общее состояние: <b>${wearText}</b></p>
                <p>👀 Визуальный осмотр не раскрывает все скрытые неисправности.</p>
            </div>
        </div>
        <button class="action-button" onclick="diagnoseAuctionCar(${index})">💻 Провести диагностику</button>
        <button class="action-button" onclick="buyAuctionCar(${index})">💰 Купить за ${money(car.price)}</button>
        <button class="modal-back-button" onclick="openAuction()">← К аукциону</button>
    `);
}

function auctionFaultMatchesCheck(fault, check) {
    const n = String(fault.name || "").toLowerCase();

    const map = {
        visual: [
            /течь масла/i, /износ тормозов/i, /износ элементов подвески/i,
            /проблема выхлопной системы/i
        ],
        obd: [
            /ошибка датчика двигателя/i, /проблема с зажиганием/i,
            /проблема трансмиссии/i, /проблема системы охлаждения/i,
            /проблема выхлопной системы/i
        ],
        multimeter: [
            /слабый аккумулятор/i, /проблема с зажиганием/i
        ],
        lift: [
            /течь масла/i, /износ тормозов/i, /износ элементов подвески/i,
            /проблема трансмиссии/i, /проблема выхлопной системы/i
        ],
        smoke: [
            /течь масла/i, /проблема системы охлаждения/i,
            /проблема выхлопной системы/i
        ],
        pressure: [
            /проблема системы охлаждения/i
        ],
        timing: [
            /износ привода грм/i
        ]
    };

    return (map[check] || []).some(rx => rx.test(n));
}

function auctionCheckTitle(check) {
    return {
        visual: "👀 Визуальный осмотр",
        obd: "💻 OBD-II",
        multimeter: "⚡ Мультиметр",
        lift: "🏗️ Подъёмник",
        smoke: "💨 Дымогенератор",
        pressure: "📏 Проверка давления",
        timing: "⛓️ Проверка ГРМ"
    }[check] || "🔍 Проверка";
}

function auctionCheckAvailable(check) {
    const tools = state.tools || {};
    if (check === "visual") return true;
    if (check === "obd") return !!tools.obd;
    if (check === "multimeter") return !!tools.multimeter;
    if (check === "lift") return !!tools.lift;
    if (check === "smoke") return !!tools.smoke;
    if (check === "pressure") return !!tools.manometer;
    if (check === "timing") return !!tools.lift && Number(state.level || 1) >= 3;
    return false;
}

function auctionRunCheck(index, check) {
    const car = state.auctionListings?.[index];
    if (!car) return;

    if (!auctionCheckAvailable(check)) {
        showToast(`🧰 Для этой проверки нужно оборудование: ${auctionCheckTitle(check)}`);
        return;
    }

    car.auctionChecks = car.auctionChecks || {};
    car.auctionRevealed = Array.isArray(car.auctionRevealed) ? car.auctionRevealed : [];

    const matches = (car.hiddenFaults || []).filter(f => auctionFaultMatchesCheck(f, check));

    // Проверка не раскрывает абсолютно всё: часть неисправностей требует
    // другой метод диагностики, как и в основной игре.
    const reveal = matches.filter(() => Math.random() >= 0.12);

    reveal.forEach(f => {
        if (!car.auctionRevealed.includes(f.name)) {
            car.auctionRevealed.push(f.name);
        }
    });

    car.auctionChecks[check] = true;
    car.diagnosed = car.auctionRevealed.length > 0;
    save();

    let result;
    if (reveal.length) {
        result = `<div class="diagnosis-result"><b>⚠️ Обнаружено:</b><br>${reveal.map(f => `• ${f.name}`).join("<br>")}</div>`;
    } else if (matches.length) {
        result = `<div class="diagnosis-result"><b>🟡 Результат:</b><br>По этой проверке есть подозрение, но для подтверждения нужна другая диагностика.</div>`;
    } else {
        result = `<div class="diagnosis-result"><b>✅ Результат:</b><br>Признаков неисправности, которую должна выявить эта проверка, не обнаружено.</div>`;
    }

    openAuctionDiagnosis(index, result);
}

function openAuctionDiagnosis(index, extra = "") {
    const car = state.auctionListings?.[index];
    if (!car) return;

    const revealed = Array.isArray(car.auctionRevealed) ? car.auctionRevealed : [];
    const checks = car.auctionChecks || {};
    const owners = car.owners || (1 + ((2026 - Number(car.year || 2014)) % 4));
    const lastService = Math.max(1000, Number(car.mileage || 100000) - (8000 + ((index+1)*1700)));
    const drive = car.drive || (car.icon === '🚙' ? 'Полный / передний' : 'Передний');
    const category = auctionCategory(car);
    const classLabel = {economy:'Эконом',middle:'Средний класс',business:'Бизнес',premium:'Премиум'}[category];

    const checkCard = (check, icon, title, desc, buyCost, lockText) => {
        const available = auctionCheckAvailable(check);
        const done = !!checks[check];
        return `
            <button class="auction-diagnostic-card ${available?'available':'locked'}" onclick="auctionRunCheck(${index}, '${check}')">
                <div class="diag-icon">${icon}</div>
                <div class="diag-title"><b>${title}</b><span>${available ? (done ? '✓ Проверено' : '● Доступно') : '🔒 Требуется'}</span></div>
                <p>${desc}</p>
                <strong>${available ? (done ? 'Провести повторно' : 'Провести') : lockText}</strong>
            </button>`;
    };

    openModal(`
        <div class="auction-inspection-screen">
            <div class="auction-inspection-top">
                <button class="auction-back-link" onclick="openAuction()">← Осмотр автомобиля</button>
                <button class="auction-danger-button" onclick="openAuction()">✕ Вернуться к аукциону</button>
            </div>

            <div class="auction-inspection-layout">
                <aside class="auction-car-summary">
                    <h2>${car.brand} ${car.model}</h2>
                    <p>${car.year} · ${Number(car.mileage).toLocaleString('ru-RU')} км · ${car.transmission} · ${car.engine}</p>
                    <div class="auction-big-photo">${auctionCarImage(car, 'auction-car-photo large')}</div>
                    <div class="auction-summary-row"><span>Рыночная цена</span><b>${money(car.marketPrice)}</b></div>
                    <div class="auction-summary-row"><span>Цена аукциона</span><b class="green">${money(car.price)}</b></div>
                    <div class="auction-summary-row"><span>Состояние</span><b>${car.condition}%</b></div>
                    <div class="auction-condition"><span class="${car.condition>=80?'good':car.condition>=60?'ok':car.condition>=40?'mid':'bad'}" style="width:${car.condition}%"></span></div>
                    <div class="auction-info-box"><h3>Информация</h3><div><span>Класс</span><b>${classLabel}</b></div><div><span>Привод</span><b>${drive}</b></div><div><span>Топливо</span><b>${String(car.engine).toLowerCase().includes('диз')?'Дизель':'Бензин'}</b></div><div><span>Владельцев</span><b>${owners}</b></div><div><span>Последнее ТО</span><b>${Number(lastService).toLocaleString('ru-RU')} км назад</b></div></div>
                </aside>

                <section class="auction-diagnostics">
                    <h2>🔎 Диагностика и проверки</h2>
                    <p class="auction-muted">Проверки не раскрывают все неисправности сразу. Выбирай подходящий инструмент.</p>
                    <div class="auction-diagnostic-grid">
                        ${checkCard('visual','👁','Визуальный осмотр','Бесплатный осмотр кузова, салона и видимых элементов.',0,'Доступно')}
                        ${checkCard('obd','💻','OBD-II сканер','Чтение ошибок и параметров электронных систем.',0,'Купить оборудование')}
                        ${checkCard('multimeter','⚡','Мультиметр','Проверка электрических цепей и датчиков.',15000,'Купить: 15 000 ₽')}
                        ${checkCard('lift','🏗️','Подъёмник','Осмотр нижней части автомобиля и подвески.',30000,'Купить: 30 000 ₽')}
                        ${checkCard('smoke','💨','Дымогенератор','Поиск утечек во впуске, выхлопе и системах.',25000,'Купить: 25 000 ₽')}
                        ${checkCard('pressure','📏','Проверка давления','Проверка давления топлива, масла и других систем.',20000,'Купить: 20 000 ₽')}
                        ${checkCard('timing','⛓️','Проверка ГРМ','Проверка состояния ремня/цепи ГРМ и натяжителей.',15000,'Нужен подъёмник и 3 уровень')}
                        <div class="auction-diagnostic-card unavailable"><div class="diag-icon">📋</div><div class="diag-title"><b>Комплексная диагностика</b><span>🔒 Недоступно</span></div><p>Полная диагностика всех систем автомобиля.</p><strong>Требуется уровень 5</strong></div>
                    </div>

                    <div class="auction-found-box">
                        <h3>🔎 Обнаруженные проблемы</h3>
                        ${extra || ''}
                        <div class="auction-found-list">${revealed.length ? revealed.map(x=>`<div>⚠️ ${x}</div>`).join('') : '<span>Проведите диагностику, чтобы обнаружить скрытые неисправности.</span>'}</div>
                    </div>

                    <button class="auction-main-buy" onclick="placeAuctionBid(${index})">🔨 Купить за ${money(car.price)}</button>
                </section>
            </div>
        </div>
    `);
}

function diagnoseAuctionCar(index) {
    openAuctionDiagnosis(index);
}

function buyAuctionCar(index) {
    const car = state.auctionListings?.[index];
    if (!car) return;
    if (state.money < car.price) {
        showToast("💰 Недостаточно денег для покупки");
        return;
    }
    state.money -= car.price;
    state.ownedCars.push({
        ...car,
        purchasePrice: car.price,
        repairCost: 0,
        repairedFaults: [],
        sold: false
    });
    state.auctionListings.splice(index, 1);
    save();
    render();
    showToast(`🚗 ${car.brand} ${car.model} куплен и добавлен в гараж`);
    openMyCars();
}

function openMyCars() {
    const list = state.ownedCars || [];
    openModal(`
        <h2>🚗 Мои автомобили</h2>
        ${list.length ? `<div class="auction-grid">${list.map((car, i) => `
            <div class="auction-card">
                <div class="auction-photo-wrap">${auctionCarImage(car)}</div>
                <h3>${car.brand} ${car.model}</h3>
                <div class="auction-meta">${car.year} г. · ${Number(car.mileage).toLocaleString("ru-RU")} км</div>
                <div class="auction-meta">Покупка: ${money(car.purchasePrice)}</div>
                <div class="auction-meta">Ремонт: ${money(car.repairCost || 0)}</div>
                <button class="action-button" onclick="repairAuctionCar(${i})">🔧 Ремонтировать</button>
                <button class="action-button" onclick="sellOwnedCar(${i})">💰 Продать</button>
            </div>`).join("")}</div>` : `<div class="diagnosis-result">Пока нет купленных автомобилей. Загляни на аукцион.</div>`}
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}

function repairAuctionCar(index) {
    const car = state.ownedCars?.[index];
    if (!car) return;
    const revealed = Array.isArray(car.auctionRevealed) ? car.auctionRevealed : [];
    const remaining = (car.hiddenFaults || []).filter(
        f => revealed.includes(f.name) && !(car.repairedFaults || []).includes(f.name)
    );

    if (!remaining.length) {
        const unknown = (car.hiddenFaults || []).filter(
            f => !(car.repairedFaults || []).includes(f.name) && !revealed.includes(f.name)
        );
        if (unknown.length) {
            showToast("🔍 Сначала найди неисправность диагностикой");
        } else {
            showToast("✅ Все найденные неисправности уже устранены");
        }
        return;
    }

    const fault = remaining[0];
    const cost = Math.round(fault.repair * (0.85 + Math.random() * 0.3));
    if (state.money < cost) {
        showToast(`💰 Для ремонта нужно ${money(cost)}`);
        return;
    }
    state.money -= cost;
    car.repairCost = Number(car.repairCost || 0) + cost;
    car.repairedFaults = [...(car.repairedFaults || []), fault.name];
    car.condition = Math.min(100, Number(car.condition || 0) + 8);
    save();
    showToast(`🔧 Устранено: ${fault.name}`);
    openMyCars();
}

function sellOwnedCar(index) {
    const car = state.ownedCars?.[index];
    if (!car) return;
    const repairRatio = Math.min(1, (car.repairedFaults || []).length / Math.max(1, (car.hiddenFaults || []).length));
    const conditionBonus = Math.max(0.55, Math.min(1.05, Number(car.condition || 50) / 100));
    const sellPrice = Math.round((car.marketPrice * (0.55 + repairRatio * 0.35) * conditionBonus) / 1000) * 1000;
    state.money += Math.max(10000, sellPrice);
    state.ownedCars.splice(index, 1);
    save();
    render();
    showToast(`💰 Автомобиль продан за ${money(Math.max(10000, sellPrice))}`);
    openMyCars();
}

/* =========================================================
   ВИЗУАЛЬНЫЙ ГАРАЖ — ПЕРВЫЙ ИНТЕРАКТИВНЫЙ ЭТАП
========================================================= */

let garageSceneMode = "overview";

function garageSceneHtml() {
    const order=state.currentOrder;
    const carName=order?`${order.car.brand} ${order.car.model}`:"Машина клиента";
    return `
        <div class="garage-scene" id="garageScene">
            <div class="garage-ceiling-light"></div>
            <div class="garage-sign">🔧 АВТОСЕРВИС</div>
            <div class="garage-shelf"><span>🧰</span><span>🔩</span><span>🛢️</span><span>🧴</span><span>🔧</span></div>
            <div class="garage-workbench"><span>🧰</span><span>🔧</span><span>📋</span></div>
            <div class="garage-car visual-car interactive" id="visualCar" onclick="inspectCar()" title="Нажми для осмотра">
                <div class="garage-photo-frame">
                    <img src="${order ? carPhotoPath({brand:order.car.brand,model:order.car.model}) : ""}" data-svg="${order ? carSvgPath({brand:order.car.brand,model:order.car.model}) : ""}" alt="${carName}" onerror="if(this.dataset.fallback!=='1'){this.dataset.fallback='1';this.src=this.dataset.svg;}else{this.style.display='none';this.parentElement.classList.add('no-photo');}">
                    <div class="garage-photo-fallback">🚗<span>${carName}</span></div>
                </div>
                <div class="car-nameplate">${carName}</div>
            </div>
            <div class="garage-hint">👆 Нажми на автомобиль — начни осмотр клиента</div>
        </div>`;
}

function renderGarageScene() {
    const container = document.querySelector(".garage-image");
    if (!container) return;

    container.classList.add("garage-visual-container");
    container.innerHTML = garageSceneHtml();

    // Навигация гаража вынесена из сцены автомобиля: на телефоне она
    // больше не перекрывает машину и выглядит как отдельные карточки.
    const host = container.parentElement;
    if (!host) return;

    let nav = host.querySelector(".garage-navigation");
    if (!nav) {
        nav = document.createElement("div");
        nav.className = "garage-navigation";
        container.insertAdjacentElement("afterend", nav);
    }

    nav.innerHTML = `
        <button class="garage-nav-card" onclick="openGarageParts()">
            <span class="garage-nav-icon">📦</span>
            <span><b>Склад запчастей</b><small>${(state.partsWarehouse||[]).length} деталей</small></span>
        </button>
        <button class="garage-nav-card" onclick="openGarageTools()">
            <span class="garage-nav-icon">🧰</span>
            <span><b>Оборудование</b><small>Инструменты и ресурс</small></span>
        </button>
        <button class="garage-nav-card accent" onclick="openAuction()">
            <span class="garage-nav-icon">🔨</span>
            <span><b>Аукцион</b><small>${(state.auctionListings||[]).length} автомобилей</small></span>
        </button>
        <button class="garage-nav-card" onclick="openMyCars()">
            <span class="garage-nav-icon">🚗</span>
            <span><b>Мои автомобили</b><small>${(state.ownedCars||[]).length} в гараже</small></span>
        </button>`;
}

function render() {
    renderBase();
    renderGarageScene();
}

/* Осмотр автомобиля */

function inspectCar() {
    const order = state.currentOrder;

    if (!order) {
        showToast("🚗 Сейчас в гараже нет автомобиля клиента");
        return;
    }

    garageSceneMode = "inspection";

    openModal(`
        <h2>🔍 Осмотр автомобиля</h2>

        <div class="car-inspection-card">
            <div class="inspection-car-icon">
                🚗
            </div>

            <div>
                <h3>${order.car.brand} ${order.car.model}</h3>
                <p>
                    ${order.car.year} год ·
                    ${order.car.mileage.toLocaleString("ru-RU")} км
                </p>
            </div>
        </div>

        <p>
            Осмотри автомобиль перед началом диагностики.
            Некоторые проверки можно выполнить без специального оборудования.
        </p>

        <div class="inspection-grid">

            <button class="inspection-button" onclick="inspectArea('engine')">
                <span>⚙️</span>
                <b>Двигатель</b>
                <small>Подкапотное пространство</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('battery')">
                <span>🔋</span>
                <b>Аккумулятор</b>
                <small>Электрика и запуск</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('brakes')">
                <span>🛑</span>
                <b>Тормоза</b>
                <small>Диски и колодки</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('suspension')">
                <span>🛞</span>
                <b>Подвеска</b>
                <small>Люфты и состояние</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('body')">
                <span>🚘</span>
                <b>Кузов</b>
                <small>Внешний осмотр</small>
            </button>

            <button class="inspection-button" onclick="inspectArea('interior')">
                <span>🪑</span>
                <b>Салон</b>
                <small>Органы управления</small>
            </button>

        </div>

        <button class="action-button" onclick="startDiagnosis()">
            🔍 Перейти к диагностике
        </button>
    `);
}

function inspectArea(area) {
    const messages = {
        engine: {
            title: "⚙️ Подкапотное пространство",
            text: "Проверяешь состояние двигателя, шлангов, разъёмов и видимых элементов. Пока серьёзных выводов делать нельзя — нужны дополнительные проверки."
        },
        battery: {
            title: "🔋 Аккумулятор",
            text: "Корпус без явных повреждений. Визуальный осмотр не заменяет измерение напряжения и проверку под нагрузкой."
        },
        brakes: {
            title: "🛑 Тормоза",
            text: "Внешне тормозной механизм выглядит без очевидных повреждений. Для оценки износа нужны дополнительные проверки."
        },
        suspension: {
            title: "🛞 Подвеска",
            text: "Визуально осматриваешь стойки, рычаги и пыльники. Часть неисправностей можно обнаружить только после проверки на подъёмнике."
        },
        body: {
            title: "🚘 Кузов",
            text: "Проверяешь панели, фары, стёкла и следы ремонта. Явных повреждений в рамках этой проверки не обнаружено."
        },
        interior: {
            title: "🪑 Салон",
            text: "Проверяешь приборную панель и органы управления. Информация о симптоме клиента подтверждается его жалобой."
        }
    };

    const item = messages[area];

    if (!item) return;

    openModal(`
        <h2>${item.title}</h2>
        <div class="diagnosis-result inspection-result">
            ${item.text}
        </div>

        <button class="action-button" onclick="inspectCar()">
            ← Вернуться к осмотру
        </button>
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}

/* Быстрые объекты гаража */

/* =========================================================
   ЦЕНТР ОБОРУДОВАНИЯ
   Инструменты / ремонт инструмента / восстановление деталей
========================================================= */

const repairFacilityCatalog = {
    toolRepair: {
        icon: '🛠️',
        name: 'Стенд ремонта инструмента',
        level: 3,
        cost: 15000,
        desc: 'Позволяет восстанавливать ресурс диагностического оборудования и инструмента.'
    },
    partRestoration: {
        icon: '♻️',
        name: 'Стенд восстановления деталей',
        level: 5,
        cost: 35000,
        desc: 'Позволяет восстанавливать старые детали со склада и готовить их к продаже.'
    }
};

function ensureRepairFacilities(){
    state.repairFacilities = Object.assign({toolRepair:false, partRestoration:false}, state.repairFacilities || {});
    state.partsWarehouse = Array.isArray(state.partsWarehouse) ? state.partsWarehouse : [];
    state.partsWarehouse.forEach(item => {
        if (typeof item.condition !== 'number') item.condition = 50;
        if (!item.status) item.status = 'used';
        if (item.restoreAvailable === undefined) item.restoreAvailable = !!state.repairFacilities.partRestoration;
    });
}

function buyRepairFacility(id){
    ensureRepairFacilities();
    const f = repairFacilityCatalog[id];
    if (!f) return;
    if (state.repairFacilities[id]) { showToast('Оборудование уже установлено'); return; }
    if (state.level < f.level) { showToast(`🔒 Нужен уровень мастерства ${f.level}`); return; }
    if (state.money < f.cost) { showToast('💰 Недостаточно денег'); return; }
    state.money -= f.cost;
    state.repairFacilities[id] = true;
    if (id === 'partRestoration') state.partsWarehouse.forEach(item => item.restoreAvailable = true);
    save();
    render();
    showToast(`${f.icon} ${f.name} установлено`);
    openEquipmentHub();
}

function repairEquipmentResource(){
    ensureRepairFacilities();
    if (!state.repairFacilities.toolRepair) { showToast('🔒 Сначала установи стенд ремонта инструмента'); return; }
    const missing = 100 - Number(state.equipment || 0);
    if (missing <= 0) { showToast('🧰 Оборудование уже полностью исправно'); return; }
    const cost = Math.max(500, Math.round(missing * 120));
    if (state.money < cost) { showToast('💰 Недостаточно денег на ремонт инструмента'); return; }
    state.money -= cost;
    state.equipment = 100;
    state.time += 30;
    if (state.time >= 1320) { state.day++; state.time = 480; }
    save();
    render();
    showToast(`🛠️ Инструмент восстановлен до 100%`);
    openEquipmentHub();
}

function partMarketValue(item){
    if (item.marketValue) return Number(item.marketValue);
    const n = String(item.name || '').toLowerCase();
    let base = 5000;
    if (/стартер|генератор/.test(n)) base = 9000;
    else if (/суппорт|форсун/.test(n)) base = 7500;
    else if (/фара|радиатор|насос/.test(n)) base = 6500;
    else if (/стекло|фильтр|свеч/.test(n)) base = 3000;
    return base;
}

function restorePart(index){
    ensureRepairFacilities();
    const item = state.partsWarehouse[index];
    if (!item) return;
    if (!state.repairFacilities.partRestoration) { showToast('🔒 Сначала купи стенд восстановления деталей'); return; }
    if (item.status === 'restored') { showToast('♻️ Деталь уже восстановлена'); return; }
    const condition = Math.max(1, Math.min(99, Number(item.condition) || 50));
    const missing = 100 - condition;
    const cost = Math.max(800, Math.round(1500 + missing * 65));
    if (state.money < cost) { showToast('💰 Недостаточно денег на восстановление'); return; }
    state.money -= cost;
    item.condition = 95 + Math.floor(Math.random() * 5);
    item.status = 'restored';
    item.restoreAvailable = true;
    item.restoreCost = cost;
    item.marketValue = Math.round(partMarketValue(item) * (item.condition / 100));
    state.time += 60;
    if (state.time >= 1320) { state.day++; state.time = 480; }
    save();
    render();
    showToast(`♻️ ${item.name} восстановлена`);
    openGarageParts();
}

function sellRestoredPart(index){
    ensureRepairFacilities();
    const item = state.partsWarehouse[index];
    if (!item || item.status !== 'restored') { showToast('🔒 Сначала восстанови деталь'); return; }
    const value = Math.max(500, Math.round(partMarketValue(item) * (Number(item.condition || 95) / 100)));
    state.money += value;
    state.partsWarehouse.splice(index, 1);
    save();
    render();
    showToast(`💰 Деталь продана за ${money(value)}`);
    openGarageParts();
}

function openEquipmentHub(){
    ensureRepairFacilities();
    const facilities = Object.entries(repairFacilityCatalog).map(([id, f]) => {
        const owned = !!state.repairFacilities[id];
        return `<div class="tool-card ${owned ? 'owned' : ''}">
            <div class="tool-card-top"><div><h3>${f.icon} ${f.name}</h3><p>${f.desc}</p></div><span class="tool-level">Ур. ${f.level}</span></div>
            <div class="stat-row"><span>${owned ? '✅ Установлено' : state.level >= f.level ? '🔓 Доступно' : '🔒 Заблокировано'}</span><b>${owned ? 'Готово' : money(f.cost)}</b></div>
            ${owned ? '<div class="tool-owned">Можно использовать в гараже</div>' : state.level >= f.level ? `<button class="action-button" onclick="buyRepairFacility('${id}')">🛒 Купить и установить</button>` : `<div class="tool-locked">Требуется уровень мастерства ${f.level}</div>`}
        </div>`;
    }).join('');

    const missing = Math.max(0, 100 - Number(state.equipment || 0));
    const repairCost = missing > 0 ? Math.max(500, Math.round(missing * 120)) : 0;

    openModal(`
        <h2>🧰 Оборудование</h2>
        <div class="diagnosis-result"><b>Три направления развития гаража</b><br>Инструменты → ремонт инструмента → восстановление деталей.</div>
        <div class="stat-row"><span>🔧 Ресурс инструмента</span><b>${Math.round(state.equipment)}%</b></div>
        <div class="progress-bar"><div style="width:${Math.round(state.equipment)}%"></div></div>
        ${state.repairFacilities.toolRepair ? `<button class="action-button" onclick="repairEquipmentResource()">🛠️ Отремонтировать инструмент ${repairCost ? `· ${money(repairCost)}` : '· готово'}</button>` : '<div class="knowledge-practice"><b>🛠️ Ремонт инструмента</b><br>Установи специальный стенд, чтобы восстанавливать ресурс оборудования.</div>'}
        <div class="tool-grid">${facilities}</div>
        <button class="action-button" onclick="openTools()">🔧 Управление инструментами</button>
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}

function openGarageTools() {
    openEquipmentHub();
}

function openGarageOBD() {
    const order = state.currentOrder;

    if (!order) {
        showToast("Сначала дождись автомобиля клиента");
        return;
    }

    openModal(`
        <h2>💻 Диагностический пост</h2>

        <div class="stat-row">
            <span>Сканер OBD-II</span>
            <b>Готов</b>
        </div>

        <div class="stat-row">
            <span>Ресурс оборудования</span>
            <b>${state.equipment}%</b>
        </div>

        <p>
            Подключение к автомобилю позволит получить коды неисправностей
            и Live Data. Но код ошибки сам по себе не всегда означает,
            что нужно сразу менять деталь.
        </p>

        <button class="action-button" onclick="startDiagnosis()">
            🔍 Открыть диагностику
        </button>
    `);
}

function openGarageParts() {
    ensureRepairFacilities();
    const items = state.partsWarehouse || [];
    const rows = items.length ? items.map((item, i) => {
        const restored = item.status === 'restored';
        const value = restored ? Math.max(500, Math.round(partMarketValue(item) * ((Number(item.condition) || 95) / 100))) : 0;
        const condition = Math.round(Number(item.condition) || 0);
        return `<div class="diagnosis-result" style="margin-top:10px">
            <b>${i + 1}. ${item.name}</b><br>
            🚗 ${item.car}<br>
            Состояние: <b>${condition}%</b> ${restored ? '♻️ Восстановлена' : '🔩 Б/у'}<br>
            ${restored ? `<button class="action-button" onclick="sellRestoredPart(${i})">💰 Продать · ${money(value)}</button>` : state.repairFacilities.partRestoration ? `<button class="action-button" onclick="restorePart(${i})">♻️ Восстановить</button>` : '<span style="opacity:.8">🔒 Нужен стенд восстановления деталей</span>'}
        </div>`;
    }).join('') : `
        <div class="diagnosis-result">Склад пока пуст. Старые детали, которые клиенты оставят после ремонта, будут попадать сюда автоматически.</div>
    `;

    openModal(`
        <h2>📦 Склад запчастей</h2>
        <div class="stat-row"><span>Деталей на складе</span><b>${items.length}</b></div>
        ${rows}
        ${state.repairFacilities.partRestoration ? '<div class="knowledge-practice">♻️ Стенд установлен: старые детали можно восстанавливать и продавать.</div>' : '<p>🏭 Купи стенд восстановления деталей в разделе «🧰 Оборудование», чтобы превратить старые детали в дополнительный источник прибыли.</p>'}
        <button class="action-button" onclick="openEquipmentHub()">🧰 Открыть оборудование</button>
        <button class="modal-back-button" onclick="closeModal()">← Назад</button>
    `);
}



/* =========================================================
   АУКЦИОН V05.3 — НОВЫЙ ИНТЕРФЕЙС
========================================================= */
(function injectAuctionStyles(){
    if(document.getElementById('auctionV053Styles')) return;
    const style=document.createElement('style');
    style.id='auctionV053Styles';
    style.textContent=`
        #modal.auction-modal{align-items:flex-start;overflow:auto;padding:12px 8px;}
        #modalContent.auction-content{width:min(1180px,98vw);max-width:1180px;margin:10px auto;background:#111820;border:1px solid #2d3a49;border-radius:18px;box-shadow:0 18px 60px rgba(0,0,0,.5);padding:0;overflow:hidden;}
        .auction-screen,.auction-inspection-screen{font-family:inherit;color:#eef3f8;background:linear-gradient(180deg,#101820,#0d141b);padding:18px;}
        .auction-header{display:grid;grid-template-columns:1fr auto auto;gap:16px;align-items:center;padding-bottom:16px;border-bottom:1px solid #2a3542;}
        .auction-header h2{margin:0 0 5px;font-size:26px;}
        .auction-header p{margin:0;color:#9da9b7;font-size:14px;}
        .auction-info-dot{display:inline-flex;width:18px;height:18px;border-radius:50%;align-items:center;justify-content:center;font-size:12px;background:#334354;color:#cbd5e1;vertical-align:middle;}
        .auction-day{color:#aeb8c5;text-align:right;font-size:13px;white-space:nowrap}.auction-day b{display:block;color:#fff;font-size:18px;margin-top:2px;}
        .auction-refresh-button,.auction-buy-button,.auction-main-buy{border:0;border-radius:8px;cursor:pointer;font-weight:700;color:white;background:#2779e8;transition:.18s;}.auction-refresh-button{padding:10px 18px;min-width:180px;font-size:14px}.auction-refresh-button span{opacity:.85;font-weight:500}.auction-refresh-button:hover,.auction-buy-button:hover,.auction-main-buy:hover{filter:brightness(1.08);transform:translateY(-1px);}
        .auction-budget-row{display:flex;justify-content:space-between;gap:15px;align-items:center;padding:16px 0;}.auction-filters{display:flex;gap:8px;flex-wrap:wrap}.auction-filter{background:#131d27;color:#aeb9c7;border:1px solid #263442;border-radius:8px;padding:9px 15px;cursor:pointer}.auction-filter.active{background:#246ac8;color:#fff;border-color:#347bdc}.auction-filter span{opacity:.65}.auction-budget{font-size:15px;white-space:nowrap}.auction-budget b{color:#36d36c;font-size:18px;margin-left:5px;}
        .auction-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;}.auction-card-modern{position:relative;background:linear-gradient(180deg,#121c25,#0e151c);border:1px solid #2a3947;border-radius:11px;overflow:hidden;min-width:0}.auction-card-number{position:absolute;z-index:2;left:10px;top:10px;background:#2477e8;color:#fff;width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px}.auction-photo-wrap{height:128px;background:radial-gradient(circle at 50% 35%,#293746,#121a22);display:flex;align-items:center;justify-content:center;overflow:hidden;border-bottom:1px solid #263441}.auction-car-photo{width:100%;height:100%;object-fit:cover;display:block}.auction-car-fallback{width:100%;height:100%;display:none;align-items:center;justify-content:center;flex-direction:column;gap:4px;font-size:44px;background:linear-gradient(145deg,#253240,#121922);color:#d8e1ea}.auction-car-fallback span{font-size:11px;color:#aeb9c7;text-align:center;padding:0 8px}.auction-card-body{padding:10px}.auction-card-body h3{font-size:16px;line-height:1.15;margin:0 0 9px;min-height:36px}.auction-specs{display:grid;gap:4px;color:#b8c2cd;font-size:11px}.auction-condition-row,.auction-price-line,.auction-bid-line,.auction-summary-row{display:flex;justify-content:space-between;gap:8px;align-items:center}.auction-condition-row{margin-top:10px;font-size:11px;color:#aeb8c4}.auction-condition-row b{color:#ffd34f}.auction-condition{height:6px;background:#26313d;border-radius:10px;overflow:hidden;margin-top:5px}.auction-condition span{height:100%;display:block;border-radius:10px}.auction-condition span.good{background:#22a65a}.auction-condition span.ok{background:#ffc52b}.auction-condition span.mid{background:#ff9f1a}.auction-condition span.bad{background:#f04444}.auction-condition-label{font-size:10px;text-align:right;margin-top:3px}.auction-condition-label.good{color:#43d47c}.auction-condition-label.ok{color:#ffd34d}.auction-condition-label.mid{color:#ffb33e}.auction-condition-label.bad{color:#ff6d6d}.auction-price-line,.auction-bid-line{font-size:10px;color:#9ca8b5;margin-top:9px}.auction-price-line b{color:#e4e9ef;font-size:12px}.auction-bid-line b{color:#36d36c;font-size:14px}.auction-card-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px}.auction-inspect-button,.auction-back-button,.auction-danger-button{border:0;border-radius:7px;padding:9px;cursor:pointer;font-weight:700}.auction-inspect-button{background:#245da8;color:#fff}.auction-buy-button{background:#22a957;padding:9px 12px}.auction-back-button{background:#273442;color:#dce5ee}.auction-danger-button{background:#d64236;color:#fff}.auction-empty{grid-column:1/-1;text-align:center;padding:35px;color:#9da9b7}.auction-legend{display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin-top:15px;padding:12px 4px;border-top:1px solid #263340;color:#9da8b5;font-size:11px}.dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px}.dot.good{background:#22a65a}.dot.ok{background:#ffc52b}.dot.mid{background:#ff9f1a}.dot.bad{background:#f04444}.auction-tip{margin-left:auto;color:#c8d1db}.auction-footer-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:5px}.auction-back-link{background:none;border:0;color:#f1f5f9;font-size:19px;font-weight:700;cursor:pointer;padding:0}.auction-inspection-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px}.auction-inspection-layout{display:grid;grid-template-columns:280px 1fr;gap:15px}.auction-car-summary{background:#151f29;border:1px solid #293847;border-radius:12px;padding:14px}.auction-car-summary h2{font-size:19px;margin:0 0 4px}.auction-car-summary>p{font-size:11px;color:#9faab6;margin:0 0 12px}.auction-big-photo{height:170px;border-radius:9px;overflow:hidden;background:#0e151b;margin-bottom:12px}.auction-summary-row{padding:7px 0;border-bottom:1px solid #263441;font-size:12px;color:#aab5c0}.auction-summary-row b{color:#fff}.auction-summary-row b.green{color:#35d16a;font-size:18px}.auction-info-box{margin-top:12px;padding:10px;background:#101820;border-radius:9px}.auction-info-box h3{margin:0 0 7px;font-size:14px}.auction-info-box>div{display:flex;justify-content:space-between;font-size:11px;padding:4px 0;color:#9da8b4}.auction-info-box b{color:#e4e9ef}.auction-diagnostics{background:#151f29;border:1px solid #293847;border-radius:12px;padding:15px}.auction-diagnostics h2{margin:0 0 3px;font-size:20px}.auction-muted{color:#9da9b7;font-size:12px}.auction-diagnostic-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px}.auction-diagnostic-card{background:#111a23;border:1px solid #2b3947;border-radius:9px;padding:11px;text-align:left;color:#edf2f7;cursor:pointer;min-height:140px}.auction-diagnostic-card.available:hover{border-color:#3c83e8}.auction-diagnostic-card.locked,.auction-diagnostic-card.unavailable{opacity:.75;cursor:not-allowed}.diag-icon{font-size:23px;margin-bottom:5px}.diag-title{display:flex;justify-content:space-between;gap:5px;align-items:flex-start}.diag-title b{font-size:12px}.diag-title span{font-size:9px;color:#35d16a;white-space:nowrap}.locked .diag-title span,.unavailable .diag-title span{color:#ffd04b}.auction-diagnostic-card p{font-size:10px;line-height:1.35;color:#9da8b4;min-height:43px}.auction-diagnostic-card strong{font-size:10px;color:#e6edf5}.auction-found-box{margin-top:12px;padding:13px;background:#101820;border:1px solid #293847;border-radius:9px}.auction-found-box h3{margin:0 0 7px;font-size:14px}.auction-found-list{font-size:12px;color:#aeb8c3;min-height:28px}.auction-found-list div{color:#ffd25a;padding:3px 0}.auction-main-buy{width:100%;padding:13px;margin-top:12px;background:#22a957;font-size:16px}.auction-confirm{text-align:center;padding:20px}.auction-confirm-icon{font-size:42px}.auction-confirm h2{margin:5px 0}.auction-confirm-price{font-size:28px;font-weight:800;color:#35d16a;margin:10px}.auction-confirm .auction-buy-button{width:100%;font-size:15px}.auction-confirm .auction-back-button{width:100%;margin-top:7px}.auction-confirm p{color:#b1bcc7}.auction-confirm .auction-muted{font-size:12px}
        @media (max-width:900px){.auction-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.auction-header{grid-template-columns:1fr auto}.auction-day{display:none}.auction-refresh-button{grid-column:1/-1;width:100%}.auction-inspection-layout{grid-template-columns:1fr}.auction-diagnostic-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.auction-tip{margin-left:0}.auction-budget-row{align-items:flex-start;flex-direction:column}.auction-budget{align-self:flex-end}}
        @media (max-width:520px){#modalContent.auction-content{width:100%;margin:0;border-radius:12px}.auction-screen,.auction-inspection-screen{padding:12px}.auction-header h2{font-size:20px}.auction-grid{grid-template-columns:1fr 1fr;gap:7px}.auction-photo-wrap{height:105px}.auction-card-body{padding:8px}.auction-card-body h3{font-size:14px}.auction-specs{font-size:9px}.auction-price-line,.auction-bid-line{font-size:9px}.auction-bid-line b{font-size:12px}.auction-filter{padding:7px 9px;font-size:11px}.auction-diagnostic-grid{grid-template-columns:1fr 1fr}.auction-diagnostic-card{min-height:150px;padding:8px}.auction-inspection-top{align-items:flex-start}.auction-danger-button{font-size:10px;padding:7px}.auction-footer-actions{flex-direction:column}.auction-footer-actions button{width:100%}}
    `;
    document.head.appendChild(style);
})();



/* =========================================================
   АНИМАЦИЯ РАБОЧЕГО ПРОЦЕССА v08
========================================================= */
let autoServiceBusy = false;
window.autoServiceBusy = false;

function injectWorkAnimationStyles(){
    if(document.getElementById("workAnimationStyles")) return;
    const style=document.createElement("style");
    style.id="workAnimationStyles";
    style.textContent=`

.garage-photo-frame{width:min(92%,520px);height:190px;margin:8px auto 0;border-radius:14px;overflow:hidden;border:1px solid #304252;background:linear-gradient(145deg,#17222d,#0c1218);box-shadow:0 12px 35px rgba(0,0,0,.28);position:relative;display:flex;align-items:center;justify-content:center}.garage-photo-frame img{width:100%;height:100%;object-fit:cover;display:block}.garage-photo-fallback{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;font-size:52px;color:#dce7f2}.garage-photo-fallback span{font-size:14px;color:#aab7c5}.garage-photo-frame:not(.no-photo) .garage-photo-fallback{display:none}.garage-car.interactive{cursor:pointer}.garage-car.interactive:active{transform:scale(.985)}
        .work-animation{padding:22px 8px;text-align:center;min-height:290px;display:flex;flex-direction:column;justify-content:center;align-items:center;animation:workFade .25s ease}
        .work-animation-icon{font-size:62px;line-height:1;margin-bottom:14px;filter:drop-shadow(0 8px 18px rgba(70,150,255,.25));animation:workFloat 1.1s ease-in-out infinite}
        .work-animation h2{margin:0 0 8px;font-size:25px}.work-animation p{color:#aeb9c7;margin:0 0 20px}
        .work-progress{width:min(380px,92%);height:9px;background:#202c38;border-radius:20px;overflow:hidden;border:1px solid #304253}
        .work-progress>span{display:block;height:100%;width:0;background:linear-gradient(90deg,#2387ff,#63c4ff);border-radius:20px;animation:workProgress 1.45s linear forwards}
        .work-steps{width:min(390px,94%);margin-top:18px;text-align:left}.work-step{padding:8px 12px;color:#7f8c9b;opacity:.35;transition:.25s}.work-step.active{color:#eef5ff;opacity:1;transform:translateX(4px)}.work-step.done{color:#62d98a;opacity:1}
        .result-success-animation{font-size:54px;text-align:center;animation:successPop .45s cubic-bezier(.2,1.5,.4,1)}
        .inspection-result{animation:resultSlide .3s ease}
        @keyframes workFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes workFloat{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-9px) rotate(2deg)}}
        @keyframes workProgress{from{width:0}to{width:100%}}
        @keyframes successPop{from{opacity:0;transform:scale(.45) rotate(-10deg)}to{opacity:1;transform:scale(1) rotate(0)}}
        @keyframes resultSlide{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        .diagnosis-button:disabled{opacity:.45;transform:none!important}
        .primary-action:disabled,.cm-start-btn:disabled{opacity:.55;cursor:wait}
    `;
    document.head.appendChild(style);
}

function runWorkAnimation(cfg, done){
    if(autoServiceBusy) return;
    autoServiceBusy=true;
    window.autoServiceBusy=true;
    injectWorkAnimationStyles();

    const steps=Array.isArray(cfg.steps)?cfg.steps:[];
    const duration=Math.max(900, Number(cfg.duration)||1450);
    openModal(`
        <div class="work-animation">
            <div class="work-animation-icon">${cfg.icon||"🔧"}</div>
            <h2>${cfg.title||"Работа"}</h2>
            <p>${cfg.text||"Выполняется операция"}</p>
            <div class="work-progress"><span></span></div>
            <div class="work-steps">
                ${steps.map((x,i)=>`<div class="work-step" data-work-step="${i}">◌ ${x}</div>`).join("")}
            </div>
        </div>
    `);

    const nodes=[...document.querySelectorAll("[data-work-step]")];
    nodes.forEach((node,i)=>setTimeout(()=>{node.classList.add("active");node.textContent="🔄 "+steps[i];}, Math.min(duration-300, 260+i*Math.max(260,(duration-520)/Math.max(1,steps.length)))));
    nodes.forEach((node,i)=>setTimeout(()=>{node.classList.remove("active");node.classList.add("done");node.textContent="✓ "+steps[i];}, Math.min(duration-80, 620+i*Math.max(220,(duration-620)/Math.max(1,steps.length)))));

    setTimeout(()=>{
        autoServiceBusy=false;
        window.autoServiceBusy=false;
        if(typeof done==='function') done();
        render();
    }, duration+80);
}

injectWorkAnimationStyles();

/* =========================================================
   НИЖНЯЯ НАВИГАЦИЯ — v06.2
   Создаётся из JS, поэтому index.html менять не нужно.
========================================================= */
function ensureBottomNavigation(){
    if(document.getElementById("bottomNavigation")) return;

    const nav=document.createElement("nav");
    nav.id="bottomNavigation";
    nav.className="bottom-navigation";
    nav.innerHTML=`
        <button type="button" data-nav="home" onclick="bottomNavigate('home')">
            <span>🏠</span><b>Главная</b>
        </button>
        <button type="button" data-nav="work" onclick="bottomNavigate('work')">
            <span>🔧</span><b>Работа</b>
        </button>
        <button type="button" data-nav="cars" onclick="bottomNavigate('cars')">
            <span>🚗</span><b>Авто</b>
        </button>
        <button type="button" data-nav="knowledge" onclick="bottomNavigate('knowledge')">
            <span>📚</span><b>Знания</b>
        </button>
        <button type="button" data-nav="profile" onclick="bottomNavigate('profile')">
            <span>👤</span><b>Профиль</b>
        </button>
    `;
    document.body.appendChild(nav);
    setBottomNavActive("home");
}

function setBottomNavActive(id){
    document.querySelectorAll("#bottomNavigation [data-nav]").forEach(btn=>{
        btn.classList.toggle("active", btn.dataset.nav===id);
    });
}

function bottomNavigate(section){
    closeModal();

    if(section==="home"){
        setBottomNavActive("home");
        window.scrollTo({top:0,behavior:"smooth"});
        return;
    }

    if(section==="work"){
        setBottomNavActive("work");
        if(!state.currentOrder){
            generateOrder();
            render();
        }
        openDiagnosis();
        return;
    }

    if(section==="cars"){
        setBottomNavActive("cars");
        openModal(`
            <h2>🚗 Автомобили</h2>
            <p>Покупай машины на аукционе, проверяй их и собирай собственный автопарк.</p>
            <button class="action-button" onclick="openAuction()">🔨 Аукцион автомобилей</button>
            <button class="action-button secondary-button" onclick="openMyCars()">🚗 Мои автомобили (${(state.ownedCars||[]).length})</button>
            <button class="modal-back-button" onclick="closeModal()">← Назад</button>
        `);
        return;
    }

    if(section==="knowledge"){
        setBottomNavActive("knowledge");
        openKnowledgeMenu();
        return;
    }

    if(section==="profile"){
        setBottomNavActive("profile");
        const need=100+(state.level-1)*50;
        openModal(`
            <h2>👤 Профиль мастера</h2>
            <div class="stat-row"><span>🔧 Мастерство</span><b>${state.level}</b></div>
            <div class="stat-row"><span>📈 Опыт</span><b>${state.xp} / ${need}</b></div>
            <div class="stat-row"><span>⭐ Репутация</span><b>${state.reputation}</b></div>
            <div class="stat-row"><span>💰 Деньги</span><b>${money(state.money)}</b></div>
            <div class="stat-row"><span>🏢 Сервис</span><b>Уровень ${state.garage.level}</b></div>
            <div class="stat-row"><span>🚗 Автомобили</span><b>${(state.ownedCars||[]).length}</b></div>
            <button class="modal-back-button" onclick="closeModal()">← Назад</button>
        `);
    }
}

/* =========================================================
   ЦЕЛИ — аккуратная раскладка на мобильном
========================================================= */
function fixGoalsLayout(){
    const moneyGoal=$("goalMoney");
    const xpGoal=$("goalXp");

    const prepare=(node,title,subtitle)=>{
        if(!node || !node.parentElement) return;
        const row=node.parentElement;
        if(!row.textContent.includes(title)) return;
        row.classList.add("goal-row-fixed");
        if(!row.querySelector(".goal-copy-fixed")){
            const value=node.textContent;
            row.innerHTML=`<div class="goal-copy-fixed"><b>${title}</b><small>${subtitle}</small></div><span id="${node.id}">${value}</span>`;
        }
    };

    prepare(moneyGoal,"Заработать 25 000 ₽","Первые деньги на развитие");
    prepare(xpGoal,"Получить 100 опыта","Повышение уровня");

    /* Третий пункт не имеет id в старом index.html.
       Если его контейнер найден, только добавляем класс — текст не трогаем. */
    document.querySelectorAll("#goals .goal-item, .goals .goal-item, .goal-item").forEach(el=>el.classList.add("goal-row-fixed"));

    const thirdCandidates=[...document.querySelectorAll("div,section,article,li")].filter(el=>{
        const t=(el.textContent||"").replace(/\s+/g," ").trim();
        return t.includes("Выполнить 3 заказа") && t.includes("Первые стабильные клиенты") && t.length<220;
    }).sort((a,b)=>(a.textContent.length-b.textContent.length));
    const third=thirdCandidates[0];
    if(third && !third.querySelector(".goal-copy-fixed")){
        const text=(third.textContent||"").replace(/\s+/g," ").trim();
        const match=text.match(/\b\d+\s*\/\s*3\b/);
        third.classList.add("goal-row-fixed");
        third.innerHTML=`<div class="goal-copy-fixed"><b>Выполнить 3 заказа</b><small>Первые стабильные клиенты</small></div><span>${match ? match[0] : "0 / 3"}</span>`;
    }
}

/* =========================================================
   ПЕРВЫЙ ЗАПУСК
========================================================= */


if (
    !state.currentOrder
) {

    generateOrder();
}

// Первый набор аукциона создаётся отдельно и не влияет на заказы клиентов.
if (!state.auctionListings.length) {
    generateAuctionListings(true);
}

ensureBottomNavigation();
render();
fixGoalsLayout();
save();
