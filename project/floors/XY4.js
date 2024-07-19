main.floors.XY4=
{
    "floorId": "XY4",
    "title": "光明学院 4 ",
    "name": "光明学院4",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "bxsgzz.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,1": {
            "floorId": "XY3",
            "loc": [
                12,
                1
            ]
        },
        "6,12": {
            "floorId": "XY5",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:door_XY4_5_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_XY4_5_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_XY4_5_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_XY4_5_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,5": {
            "0": {
                "condition": "flag:door_XY4_5_5==4",
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
                        "name": "flag:door_XY4_5_5",
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
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,224,  0,684,  0,219,  0, 21,  0,725,  0, 92],
    [  3,685,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  3,610,610,602,610,610,  3,354,  0,361,  3],
    [  3,725,  3, 21, 21, 22, 21, 21,  3,  0,220,  0,  3],
    [  3,  0,  3,  3,  3, 85,  3,  3,  3,  3, 81,  3,  3],
    [  3,356,  3,223,223,  0,223,223,  3,351,  0,350,  3],
    [  3,  0,224,  0,  0,  0,219,  0,  3,  0,219,  0,  3],
    [  3,  3, 81,  3,  3,223,  3,684,  3,  3, 81,  3,  3],
    [  3,  0,227,  0,  3,  0,  3,725,  3,684,  0,684,  3],
    [  3,  0,353,  0,  3, 81,  3, 82,  3,  0,610,  0,  3],
    [  3,347,  0,711,  3,220,  0,685, 82,225,  0,697,  3],
    [  3,  3,  3,  3,  3,  3, 93,  3,  3,  3,  3,  3,  3]
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
        12,
        1
    ]
}