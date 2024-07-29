main.floors.SR6=
{
    "floorId": "SR6",
    "title": "深入 6 ",
    "name": "深入6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,6": {
            "floorId": "SR5",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
            "floorId": "SR7",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_SR6_6_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,2": {
            "0": {
                "condition": "flag:door_SR6_6_2==12",
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
                        "name": "flag:door_SR6_6_2",
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
    [151,151,151,151,151,151, 91,151,151,151,151,151,151],
    [151,  0,690,  0,750,  0,700,603,  0, 81,746,  0,151],
    [151,747,151,151,151,151, 85,151,151,151,151,689,151],
    [151, 82,151,742,742,742,  0,742,742,742,151,  0,151],
    [151, 83,151,743,743,743,  0,743,743,743,151,740,151],
    [151, 82,151,151,151,151, 81,151,151,151,151, 82,151],
    [ 94,  0,748,  0, 21,  0,750,  0,689,  0,748,  0,151],
    [151, 81,151, 81,151, 81,151,151,151, 81,151, 81,151],
    [151,747,151,749,151,748,151,364,151,743,151,746,151],
    [151,697,151,365,151,365,151,699,151, 22,151,360,151],
    [151,611,151,358,151, 21,151,749,151, 22,151,690,151],
    [151,689,743,360,151,750,611,689,151, 22,151,713,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
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