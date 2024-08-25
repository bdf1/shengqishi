main.floors.CZ4=
{
    "floorId": "CZ4",
    "title": "村庄 4 ",
    "name": "村庄4",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        "\t[光明圣子]想不到神殿这么近的地方，竟然冒出如此多的怪物……还伤了不少村民"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,6": [
            "\t[沂蒙贤,N570]\b[this,4,6]圣子啊，你知道白宝石应该怎么用吗",
            "\t[光明圣子,hero]\b[hero]不知道唉，还请三长老指点",
            "\t[沂蒙贤,N570]\b[this,4,6]一定要用白宝石多加攻击力，这样才最划算",
            "\t[光明圣子,hero]\b[hero]是",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "CZ1",
            "loc": [
                0,
                6
            ]
        },
        "6,12": {
            "floorId": "CZ5",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "CZ6",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [140,355,140, 21,365,612,729,730,140,689,613, 21,140],
    [140,689,140,140,140,140,140,  0,140,  0,744,  0,140],
    [140,730,140,  0,  0,354, 81,728,140,140, 81,140,140],
    [140,  0,140,729,688,  0,10300,  0,728,  0,  0,361,140],
    [140,  0,140, 81,140,140,10300,140,140,140,140,140,140],
    [ 92,728,  0,  0,570,  0,728,688,140, 21,  0,  0, 92],
    [140,  0,140,140, 81,140,140,  0,140,  0,456,  0,140],
    [140,361,140,  0,730,  0,140,  0, 81,728,  0, 21,140],
    [140,689,140,689,356,601,140,728,140,140, 81,140,140],
    [140,  0,729,140,140,140,10300,  0,140,  0,729,  0,140],
    [140,730,  0,  0,689,  0,729,  0,140, 21, 21, 21,140],
    [697,609,140,140,140,140, 93,60395,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        12,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}