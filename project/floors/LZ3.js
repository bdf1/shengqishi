main.floors.MJ3=
{
    "floorId": "MJ3",
    "title": "魔界 3 ",
    "name": "魔界3",
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
        "0,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT33_6_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MT33_6_5==8",
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
                        "name": "flag:door_MT33_6_5",
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
    [683,  0,761,  0, 81,  0,683,  0,  0,  1,  1,  1,  1],
    [  1, 81,  1,  1,  1,  0,  0,  0, 82,750,  1,683,  1],
    [  0,683,  0,  1,  1,  1, 81,  1,  1,  0,  1,684,  1],
    [245,  1,361,  1,758,758,758,758,  1,683,  1,683,  1],
    [  0,  1, 81,  1,761,761,761,761,  1,  0, 81,760,  1],
    [  0,  1,761,  1,  1,  1, 85,  1,  1,  0,  1,  0,  1],
    [ 88,  0,758, 81,245,  1, 81,  1, 21,759,  1, 81,  1],
    [  1, 83,  1,  1,361,  1, 81,  1, 21,  1,  1,245,  1],
    [  0,759,  0,  1,361,  1, 81,  1, 21,  1,361,  0,361],
    [358,  0,360,  1,  1,  1,  0,  1,  1,  1,  1, 82,  1],
    [  0,361,  0,  1,683,  0,758,  0,  0,  1,  0,757,  0],
    [  1,  1,  1,  1,245,  1,  1,  1,761,  1, 21, 22, 21],
    [ 87,  0,357, 81,  0, 81,  0,684,  0,  1, 21, 21, 21]
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