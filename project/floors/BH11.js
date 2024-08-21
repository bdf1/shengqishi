main.floors.BH11=
{
    "floorId": "BH11",
    "title": "北寒帝国 1 ",
    "name": "北寒帝国1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X130012",
    "bgm": "xieedushi.mp3",
    "weather": [
        "snow",
        6
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            "\t[莫析辉,hero]\b[hero]咱们速战速决！",
            "\t[希娜,N538]\b[this]当然要速战速决！北纳家族背后是光明圣女，还有光明神殿，咱们这么多势力联手，动静可不小，必须尽快的。",
            "\t[莫析辉,hero]\b[hero]你先说说，你拿到的北纳家族的情报。",
            "\t[希娜,N538]\b[this]北纳家族、沂蒙家族、冷霜家族在北寒帝国相当强大，与莫析家族在东凌帝国的地位差不多。我父皇也是想要拔掉这颗钉子的，不过……我的父皇和我的兄弟姐妹更希望趁着我的夫家倒了先除掉我，所以，我也很着急……",
            "\t[希娜,N538]\b[this]北纳三家最强者，北纳逸。北纳家族的宝库……应该不像莫析家族的宝库那样好偷，你至少先打败北纳逸才能将钥匙拿到手。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "BH12",
            "loc": [
                6,
                0
            ]
        },
        "6,12": {
            "floorId": "BH10",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "BN1",
            "loc": [
                0,
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
    [130019,130031,415,415,415, 82, 91, 82,349,349,349,20301,130018],
    [20318,130031,130018,20289,130019,20319, 85,20318,130018,20289,130019,20289,130031],
    [130018,20318, 21, 21, 21, 82,  0, 82,711,711,711,130018,130029],
    [20318,20289,130019,130031,130019,130029,  0,20318,130031,130019,130019,20318,130019],
    [130029,130019, 21, 21, 21, 82,  0, 82,711,711,711,130029,130018],
    [20300,130018,20318,130019,130018,130029,  0,130018,130029,130019,20318,130018,20289],
    [ 92,  0,  0,  0,  0,  0,538, 83,1097,1097,1097,20301,20300],
    [130019,130031,20289,130018,130031,20301,  0,130018,130019,20318,130031,130018,130018],
    [130031,130029,684,684,684, 81,  0, 81,684,684,684,20301,20300],
    [130018,130029,130029,130018,20319,130031,  0,130019,130018,20318,130019,20289,130031],
    [20301,20318, 22, 81, 81, 81,  0, 81, 81, 81, 22,20318,130018],
    [20289,130031,130018,20301,130019,130029,  0,130019,130019,130029,130031,20289,20318],
    [130018,20289,684,684,684, 81, 91, 81,684,684,684,130019,130019]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}