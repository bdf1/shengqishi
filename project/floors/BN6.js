main.floors.BN6=
{
    "floorId": "BN6",
    "title": "北纳家族 6 ",
    "name": "北纳家族6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X10003",
    "bgm": "ending.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "BN5",
            "loc": [
                6,
                12
            ]
        },
        "6,0": {
            "floorId": "BN7",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_BN6_2_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_BN6_2_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_BN6_2_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_BN6_2_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,7": {
            "0": {
                "condition": "flag:door_BN6_2_7==4",
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
                        "name": "flag:door_BN6_2_7",
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
    [10013,10013,10013,10013,10013,10013, 91,10013,10013,10013,10013,10013,10013],
    [10013,  0,793,346,684,10013,791,10013,345,793,  0,684,10013],
    [10013, 81,10013,10013,10013,10013,  0,10013,685,10013, 21,  0,10013],
    [10013,  0,793,347,684,10013, 21,10013,10013,10013,795,  0,10013],
    [10013, 81,10013,10013,10013,10013,  0, 81,  0, 81, 81,10013,10013],
    [10013,792,10013,794,  0,10013,792,10013,791,10013,794,  0,10013],
    [10013,  0,10013,794,  0,10013,  0,10013,  0,10013,  0,343,10013],
    [10013,  0, 85,  0,  0, 81,684,10013,617,10013,10013, 81,10013],
    [10013,791,10013,794,  0,10013,  0,10013,702,10013,348,795,10013],
    [10013, 21,10013,794,  0,10013,791,10013,684,10013,685, 28,10013],
    [10013, 27,10013,10013,10013,10013,  0,10013,10013,10013,10013,10013,10013],
    [10013,684,10013,684,684,792,  0, 81,795, 21, 21, 21,10013],
    [10013,10013,10013,10013,10013,10013, 91,10013,10013,10013,10013,10013,10013]
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