main.floors.HA10=
{
    "floorId": "HA10",
    "title": "黑暗神殿 5 ",
    "name": "黑暗神殿5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X140137",
    "bgm": "gentaiyangxishuozaijian.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,1": [
            "\t[林霄,N485]\b[this]黑暗圣子殿下的灵魂被我封在左边的房间里面了，解除封印的方法是\r[red]六点钟\r[]，后来出现了一个黑暗神使保护圣子殿下的灵魂，我也不知道是怎么回事……殿下，一切就拜托你了。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "HA2",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "HA11",
            "loc": [
                12,
                6
            ]
        },
        "6,12": {
            "floorId": "HA14",
            "loc": [
                6,
                0
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
    [140166,140166,140166,140166,140166,140166, 93,140166,140166,140166,140166,140166,140166],
    [140166,  0,618,  0,769,487,  0,687,  0,  0,140166,  0,140166],
    [140166,  0,140166,140166,140166, 81,140166,140166,140166,769, 81,687,140166],
    [140166,876,140166, 22,140166,  0,140166,688,140166,  0,140166,353,140166],
    [140166,1078,140166,1100,140166,  0,140166,618,140166,  0,140166,1024,140166],
    [140166,  0,140166,688,140166,688,140166,356,140166, 21,140166, 81,140166],
    [ 92,1076,140166,  0,140166,  0,140166,  0,140166, 21,140166,  0,140166],
    [140166,  0,140166,737, 81,1022, 81,737,140166, 21,1078,  0,140166],
    [140166,1023,140166,140166,140166,140166,140166,140166,140166,140166,140166,769,140166],
    [140166,  0,140166,687,  0,876,1118,618,356, 21,140166,  0,140166],
    [140166,687,140166, 81,140166,140166,140166,140166,140166,140166,140166, 81,140166],
    [140166,618,140166,  0,851,  0,688,  0,1023,  0,687,  0,140166],
    [140166,140166,140166,140166,140166,140166, 93,140166,140166,140166,140166,140166,140166]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ],
    "bg2map": [

],
    "fg2map": [

]
}