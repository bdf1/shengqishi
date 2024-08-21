main.floors.BN8=
{
    "floorId": "BN8",
    "title": "北纳家族 8 ",
    "name": "北纳家族8",
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
        "1,12": {
            "floorId": "BN7",
            "loc": [
                1,
                12
            ]
        },
        "6,0": {
            "floorId": "BN9",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_BN8_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_BN8_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_BN8_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_BN8_6_2",
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
                "condition": "flag:door_BN8_6_2==4",
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
                        "name": "flag:door_BN8_6_2",
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
    [10013,684,1098, 21,795,  0,  0,  0,795, 21,1098,684,10013],
    [10013,10013,10013,10013,10013,10013, 85,10013,10013,10013,10013,10013,10013],
    [10013,346,348,795,10013,793,  0,793,10013, 21,  0, 21,10013],
    [10013,10013,10013,  0, 81,  0,  0,  0, 81,  0,685,  0,10013],
    [10013,685,10013,793,10013,794,  0,794,10013,343,791,348,10013],
    [10013,344,10013, 81,10013,10013, 81,10013,10013,10013, 82,10013,10013],
    [10013, 30,795,  0,684, 28,  0,794,  0, 28,  0,792,10013],
    [10013,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013, 81,10013],
    [10013,416,795,794,685,617,793,684, 21,792,  0,684,10013],
    [10013,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013, 81,10013],
    [10013,  0,791,  0,342, 81,790,  0,703,  0,791,  0,10013],
    [10013, 91,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        1,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}