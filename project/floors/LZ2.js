main.floors.LZ2=
{
    "floorId": "LZ2",
    "title": "龙族 2 ",
    "name": "龙族2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            "\t[莫析辉,hero]\b[hero]你感觉怎么样？",
            "\t[${flag:shengqishi_name},N510]\b[this]殿下，我感觉浑身燥热，也许龙族与我渊缘颇深……或许，我就是龙族的呢……",
            "\t[莫析辉,hero]\b[hero]你是龙族的？咱们仔细查探一番吧！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "LZ1",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "LZ3",
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,823,  0,347,  0,1029,  0, 83,1099,1099,1099,140],
    [140,344,140,140,140,140,140,343,140,140,140,140,140],
    [140,  0,140, 21, 21, 21,824,  0,140,617,  0,350,140],
    [140,823,140,688,688,688,140,823,140,  0,825,  0,140],
    [140,  0,140,140,140,140,140,  0,140,140, 81,140,140],
    [ 92,688,140,349,823,714,140, 21,140,356,824,688,140],
    [140, 81,140,140, 81,140,140,  0,140,140, 82,140,140],
    [140,  0,350,  0,825,  0,688,1029,  0,617,  0, 81,140],
    [140,1029,140,140,140,140,510,140,140,140,140,823,140],
    [140,703,140, 21,347,140,1029, 81,1131, 21,140,345,140],
    [140,703,140,352,824, 81,  0,140, 21, 21,140,688,140],
    [140,140,140,140,140,140, 91,140,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ]
}