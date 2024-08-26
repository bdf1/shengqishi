main.floors.MJ2=
{
    "floorId": "MJ2",
    "title": "魔界 2 ",
    "name": "魔界2",
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
    "events": {
        "0,9": [
            "\t[智者,man]这一区的钥匙很少，需要留有金币买钥匙哦",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT32_5_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT32_5_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,11": {
            "0": {
                "condition": "flag:door_MT32_5_11==2",
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
                        "name": "flag:door_MT32_5_11",
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
    [358,360,358,760,  0,  1,358,  0,758, 81,  0,  0, 88],
    [  1,  1,  1,  1,  0,  1,  0,  1,  1,  1,245,  1,758],
    [  1,358,  0,  1,683,  1,761, 22,683,750,  0,  1,  0],
    [  1,  0,757, 81,  0,  1,  1,  1,  1,  1,356,  1,683],
    [  1,365,  0,  1,750,  1,683,  0,  0,  1,  0,  1,  0],
    [  1,  1,  1,  1,  0,  1,  0,366,759, 81,761,  1,761],
    [ 87, 81, 81,758,  0,  1,683,  0,  0,  1,  0, 82,  0],
    [  1,  1,  1,  0,  0,  1,  1,  1,  1,  1,683,  1, 21],
    [  1,360,  0,761, 21, 81,683,  0,758, 81,  0,  1, 21],
    [121,  0,365,761,  0,  1,  0,356,  0,  1,760,  1, 21],
    [  1, 81,  1,  1,750,  0,750,  1,761,  1, 81,  1,  1],
    [  0,759,  0,  1,  1, 85,  1,  1,  0,  1,361,362,361],
    [684,684,684,  1, 21, 23, 21,  1,683,  1,  1,  1,  1]
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
        12,
        0
    ]
}