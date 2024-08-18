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
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,0": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 91, 20],
    [ 20, 28,785, 29,684, 20,616, 27, 21,786, 81,  0, 20],
    [ 20, 20, 81, 20, 20, 20, 20, 20, 82, 20, 20,784, 20],
    [ 20, 29,  0, 20,683,345,684, 20,785,  0,683,  0, 20],
    [ 20,  0, 21, 20, 20,787, 20, 20, 81, 20, 20, 20, 20],
    [ 20,784,  0,  0, 20, 81, 20,616,  0, 29, 20, 28, 20],
    [ 20, 81, 20,785, 81,701,  0,783, 20,  0,787, 27, 20],
    [ 20,  0, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20],
    [ 20, 27, 20, 21, 21, 21, 20, 21, 20,342,344,343, 20],
    [ 20,  0, 20, 20, 85, 20, 20,  0, 20, 20, 85, 20, 20],
    [ 20,783, 20,786,  0,786, 20,785, 20,788,  0,788, 20],
    [ 20,  0, 82,  0,683,  0, 81,  0, 83,  0,  0,  0, 20],
    [ 20, 91, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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