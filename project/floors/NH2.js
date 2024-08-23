main.floors.NH2=
{
    "floorId": "NH2",
    "title": "南荒帝国 2 ",
    "name": "南荒帝国2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,12": {
            "floorId": "NH1",
            "loc": [
                1,
                12
            ]
        },
        "11,0": {
            "floorId": "NH3",
            "loc": [
                11,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:door_NH2_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_NH2_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,10": [
            {
                "type": "setValue",
                "name": "flag:door_NH2_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,10": [
            {
                "type": "setValue",
                "name": "flag:door_NH2_10_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,9": {
            "0": {
                "condition": "flag:door_NH2_4_9==2",
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
                        "name": "flag:door_NH2_4_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "10,9": {
            "0": {
                "condition": "flag:door_NH2_10_9==2",
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
                        "name": "flag:door_NH2_10_9",
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
    [140,140,140,140,140,140,140,140,140,140,140, 91,140],
    [140, 28,785, 29,684,140,616, 27, 21,786, 81,  0,140],
    [140,140, 81,140,140,140,140,140, 82,140,140,784,140],
    [140, 29,  0,140,683,345,684,140,785,  0,683,  0,140],
    [140,  0, 21,140,140,787,140,140, 81,140,140,140,140],
    [140,784,  0,  0,140, 81,140,616,  0, 29,140, 28,140],
    [140, 81,140,785, 81,701,  0,783,140,  0,787, 27,140],
    [140,  0,140,140,140,140,140,  0,140,140,140,140,140],
    [140, 27,140, 21, 21, 21,140, 21,140,342,344,343,140],
    [140,  0,140,140, 85,140,140,  0,140,140, 85,140,140],
    [140,783,140,786,  0,786,140,785,140,788,  0,788,140],
    [140,  0, 82,  0,683,  0, 81,  0, 83,  0,  0,  0,140],
    [140, 91,140,140,140,140,140,140,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "yuanye.mp3",
    "flyPoint": [
        1,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}