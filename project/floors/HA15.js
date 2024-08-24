main.floors.HA15=
{
    "floorId": "HA15",
    "title": "黑暗神殿 7 ",
    "name": "黑暗神殿7",
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
        "11,7": [
            "\t[林霄,N485]\b[this]黑暗光明宝典，融合了黑暗与光明的力量，能够获得50倍的魔力值回复效果。",
            "\t[林霄,N485]\b[this]不过需要打败东南西北四位护法才行。",
            "\t[莫析辉,hero]\b[hero]黑暗光明？黑暗与光明能够融合吗？",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "HA1",
            "loc": [
                0,
                3
            ]
        },
        "0,6": {
            "floorId": "HA16",
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
    [140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166],
    [140166,687,140166,619,140166,688,688,688,140166, 21,1024,687,140166],
    [140166, 21,140166, 21,140166, 21, 21, 21,140166,352,140166,  0,140166],
    [140166,737,140166,737,140166,  0,1024,  0,140166,1118,140166,851,140166],
    [140166, 81,140166, 81,140166,140166, 81,140166,140166,140166,140166, 81,140166],
    [140166,  0,688,  0,877,  0,  0,688,140166,619,877,  0,140166],
    [ 92,  0,  0,  0,140166,140166,140166, 81,140166,140166,140166,  0, 92],
    [140166,140166, 81,140166,140166,687,  0,  0,  0,1021, 81,488,140166],
    [140166,1023, 81,1023,140166,140166,140166,140166, 85,140166,140166,140166,140166],
    [140166,687,140166, 21,140166, 22,1099,1022, 85,1022,703, 22,140166],
    [140166,345,140166,345,140166,140166,140166,140166, 85,140166,140166,140166,140166],
    [140166,687,140166,619,140166, 22,687,1022, 85,1022,349,627,140166],
    [140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166]
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