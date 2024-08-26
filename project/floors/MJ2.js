main.floors.MJ2=
{
    "floorId": "MJ2",
    "title": "魔界 2 ",
    "name": "魔界2",
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
        "1,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT22_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT22_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT22_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT22_10_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,4": {
            "0": {
                "condition": "flag:door_MT22_10_4==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT22_10_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,212,  0,679,  0,216,  0,  1,680,680,680,  1],
    [  1,344,  1,  1,  1,  1,  1,343, 83,680,419,680,  1],
    [  1,  0,  1, 21, 21, 21,225,  0,  1,680,680,680,  1],
    [  1,212,  1,  1,  1,  1,  1,212,  1,  1, 85,  1,  1],
    [  1,  0,  1,679,  0,348,  1,  0,  1,227,  0,227,  1],
    [  1, 87,  1,  0,212,  0,  1, 21,  1,224,  0,224,  1],
    [  1, 81,  1,  1, 81,  1,  1,  0,  1,  1, 82,  1,  1],
    [  1,350,  0,227,  0,679,  0,216,  0,679,  0,  0,  1],
    [  1,  1,  1,  1,  1,216,  1,  1,  1,  1,  1, 81,  1],
    [  1,679, 21,  0,  1,  0,  1, 21, 21,  1,  0,212,  1],
    [  1,347,352,225, 81,  0, 88,224, 21,  1,345,  0,  1],
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