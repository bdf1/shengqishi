main.floors.XW6=
{
    "floorId": "XW6",
    "title": "西武帝国 6 ",
    "name": "西武帝国6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "autotile7",
    "bgm": "lfmg.mp3",
    "weather": [
        "rain",
        5
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "XW5",
            "loc": [
                6,
                12
            ]
        },
        "1,11": {
            "floorId": "XW7",
            "loc": [
                1,
                11
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:door_XW6_9_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_XW6_9_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "9,10": {
            "0": {
                "condition": "flag:door_XW6_9_10==2",
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
                        "name": "flag:door_XW6_9_10",
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,1021,  0,1117,350,  0,851,  0,351,1118,  0,1021,144],
    [144,  0,144,144,144,144, 82,144,144,144,144,  0,144],
    [144,1022,  0, 81, 81,  0,687,  0, 81, 81,  0,1022,144],
    [144,144,144,144,144,144,1077,144,144,144,144,144,144],
    [144,687,  0,737,  0,144,  0,144,  0,703,687,688,144],
    [144,144,144,144,  0, 81,  0, 81,934,703,687,688,144],
    [144, 21,352,144,687,144,349,144,  0,703,687,688,144],
    [144,619,1100,852,  0,144,  0,144,144,144,144,144,144],
    [144, 21,352,144,877,144,1024,144,737,144, 21, 21,144],
    [144,144,144,144,  0,144,  0, 81,  0, 85, 21,688,144],
    [144, 92,687,  0,1021, 83,  0,144,737,144, 21, 21,144],
    [144,144,144,144,144,144, 91,144,144,144,144,144,144]
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