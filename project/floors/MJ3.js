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
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_MJ3_6_5",
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
                "condition": "flag:door_MJ3_6_5==8",
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
                        "name": "flag:door_MJ3_6_5",
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
    [683,  0,761,  0, 81,  0,683,  0,  0,  4,  4,  4,  4],
    [  4, 81,  4,  4,  4,  0,  0,  0, 82,750,  4,683,  4],
    [  0,683,  0,  4,  4,  4, 81,  4,  4,  0,  4,684,  4],
    [245,  4,361,  4,758,758,758,758,  4,683,  4,683,  4],
    [  0,  4, 81,  4,761,761,761,761,  4,  0, 81,760,  4],
    [  0,  4,761,  4,  4,  4, 85,  4,  4,  0,  4,  0,  4],
    [ 88,  0,758, 81,245,  4, 81,  4, 21,759,  4, 81,  4],
    [  4, 83,  4,  4,361,  4, 81,  4, 21,  4,  4,245,  4],
    [  0,759,  0,  4,361,  4, 81,  4, 21,  4,361,  0,361],
    [358,  0,360,  4,  4,  4,  0,  4,  4,  4,  4, 82,  4],
    [  0,361,  0,  4,683,  0,758,  0,  0,  4,  0,757,  0],
    [  4,  4,  4,  4,245,  4,  4,  4,761,  4, 21, 22, 21],
    [ 87,  0,357, 81,  0, 81,  0,684,  0,  4, 21, 21, 21]
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