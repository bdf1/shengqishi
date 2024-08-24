main.floors.XW9=
{
    "floorId": "XW9",
    "title": "西武帝国 9 ",
    "name": "西武帝国9",
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
        "6,1": {
            "floorId": "XW8",
            "loc": [
                6,
                1
            ]
        },
        "2,1": {
            "floorId": "XW10",
            "loc": [
                6,
                0
            ]
        },
        "10,1": {
            "floorId": "HA1",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,5": {
            "0": {
                "condition": "flag:door_XW9_2_5==4",
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
                        "name": "flag:door_XW9_2_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,5": {
            "0": {
                "condition": "flag:door_XW9_10_5==4",
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
                        "name": "flag:door_XW9_10_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,11": {
            "0": {
                "condition": "flag:door_XW9_10_11==2",
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
                        "name": "flag:door_XW9_10_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,11": {
            "0": {
                "condition": "flag:door_XW9_2_11==2",
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
                        "name": "flag:door_XW9_2_11",
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
    [144,  0, 91,  0,144,  0, 93,  0,144,  0, 91,  0,144],
    [144,688,  0,688,144,687,  0,687,144,688,  0,688,144],
    [144,144,755,144,144,144,1022,144,144,144,755,144,144],
    [144,688,  0,688,144,  0,  0,  0,144,688,  0,688,144],
    [144,144, 85,144,144,851,144,851,144,144, 85,144,144],
    [144,737,  0,737,144,  0,144,  0,144,737,  0,737,144],
    [144,737,  0,737,144,347,144,346,144,737,  0,737,144],
    [144,144, 82,144,144, 21,144, 21,144,144, 82,144,144],
    [144,687,  0,687,144,  0,144,  0,144,687,  0,687,144],
    [144,687,  0,687,144,1024,  0,1024,144,687,  0,687,144],
    [144,144, 85,144,144,144,1021,144,144,144, 85,144,144],
    [144,1022,  0,1022,  0,  0,  0,  0,  0,1022,  0,1022,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        1
    ],
    "bg2map": [

],
    "fg2map": [

]
}