main.floors.BH7=
{
    "floorId": "BH7",
    "title": "北寒小道 7 ",
    "name": "北寒小道7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "BH6",
            "loc": [
                6,
                12
            ]
        },
        "6,0": {
            "floorId": "BH8",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_2_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_2_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_2_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH7_2_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,7": {
            "0": {
                "condition": "flag:door_BH7_10_7==2",
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
                        "name": "flag:door_BH7_10_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,4": {
            "0": {
                "condition": "flag:door_BH7_10_4==2",
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
                        "name": "flag:door_BH7_10_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,4": {
            "0": {
                "condition": "flag:door_BH7_2_4==2",
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
                        "name": "flag:door_BH7_2_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,7": {
            "0": {
                "condition": "flag:door_BH7_2_7==2",
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
                        "name": "flag:door_BH7_2_7",
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
    [140,140,140,140,140,140, 91,140,140,140,140,140,140],
    [140,682,  0,682,140,  0, 21,  0,140, 27,  0, 27,140],
    [140,  0,683,  0,140,217,140,210,140,  0,345,  0,140],
    [140,682,  0,682,140,605,140,344,140, 28,  0, 28,140],
    [140,140, 85,140,140,692,140,682,140,140, 85,140,140],
    [140,210,  0,210,140,203,140,221,140,204,  0,204,140],
    [140,  0,  0,  0,140, 82,140, 81,140,  0,  0,  0,140],
    [140,140, 85,140,140, 29,140,680,140,140, 85,140,140],
    [140,209,  0,209,140, 21,140,359,140,203,  0,203,140],
    [140,  0,  0,  0,140,209,140,217,140,  0,  0,  0,140],
    [140,140, 81,140,140,  0,140,  0,140,140, 81,140,140],
    [140,680,  0,  0,205,  0,680,  0,205,  0,  0, 29,140],
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