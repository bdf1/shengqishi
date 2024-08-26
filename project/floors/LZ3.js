main.floors.LZ3=
{
    "floorId": "LZ3",
    "title": "龙族 3 ",
    "name": "龙族3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,5": [
            "\t[智者,man]\b[this]如果机关门开不了，那么可能需要击败本区的boss。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "LZ2",
            "loc": [
                0,
                6
            ]
        },
        "11,12": {
            "floorId": "LZ4",
            "loc": [
                11,
                12
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 81,224,  0,  1,  0,678,  0,225,351,679,  1],
    [  1,679,  1, 21, 21,  1, 81,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1, 21, 22,  1,216,  1,  0,227, 81,  0,  1],
    [  1,225,  1,  1,  1,  1,  0,  1,346,349,  1,679,  1],
    [  1,  0,  1,121,  0,678,  0,  1,352,350,  1,  0,  1],
    [ 94,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,225,  1],
    [  1,  0,216,  0,679,  0,212,  0, 21,  0,216,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,344,  1],
    [  1,215,214,216,212,225,224,227, 85, 52,  1,  0,  1],
    [  1,218,  1,  1,  1,  1,  1,  1,  1,  1,  1,212,  1],
    [  1,213,206,203,210,209,217,205,202,201, 82,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 93,  1]
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
        0,
        6
    ]
}