main.floors.YS9=
{
    "floorId": "YS9",
    "title": "隐世学院 9 ",
    "name": "隐世学院9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "cbzc.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "changeFloor",
                    "floorId": "YS10",
                    "loc": [
                        6,
                        12
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,0": {
            "floorId": "YS8",
            "loc": [
                1,
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
    [140, 93,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,140,140,140,140,140, 83,140,140,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,140,140,140,  0,  0,  0,  0,  0,140,140,140,140],
    [140,140,140,  0,  0,  0,  0,  0,  0,  0,140,140,140],
    [140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,140],
    [140,140,  0,  0,  0,  0,247,  0,  0,  0,  0,140,140],
    [140,140,140,  0,  0,  0,  0,  0,  0,  0,140,140,140],
    [140,140,140,140,  0,  0,  0,  0,  0,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,140,140,140,140,140, 93,140,140,140,140,140,140]
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
        1,
        0
    ]
}