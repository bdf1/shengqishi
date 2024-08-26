main.floors.MJ6=
{
    "floorId": "MJ6",
    "title": "魔界 6 ",
    "name": "魔界6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [  1,679,  0,222,  0,348, 81,  0,  1,346,  0,347,  1],
    [  1, 81,  1,  1,  1,  1,  1,212,  1,  0, 22,  0,  1],
    [  1,216,  0,348,  0,212,  1,  0,  1,  0,227,  0,  1],
    [  1,  1,  1,  1,  1,  0,  1,679,  1,  1, 81,  1,  1],
    [  1,353,  0,680,  1,679,  1,  0,216,  0,342,  0,  1],
    [  1,  0, 21,  0,  1,  0,  1,  1,  1,  1,  1, 87,  1],
    [  1, 21,227, 21,  1,222,  1, 21, 21, 21,  0,225,  1],
    [  1,  1, 82,  1,  1,  0,  1,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,216,  0, 21,  1,679,  0,224,  0,348,  1],
    [  1, 81,  1,  1,  1,  1,  1, 81,  1,  1,  1, 81,  1],
    [  1,212,  0,348,  0,216, 88,216,  1,679,679,224,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        11
    ]
}