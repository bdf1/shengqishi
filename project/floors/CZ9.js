main.floors.CZ9=
{
    "floorId": "CZ9",
    "title": "村庄 9 ",
    "name": "村庄9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_CZ9_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_CZ9_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_CZ9_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_CZ9_6_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_CZ9_6_9==2",
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
                        "name": "flag:door_CZ9_6_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,11": {
            "0": {
                "condition": "flag:door_CZ9_6_11==2",
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
                        "name": "flag:door_CZ9_6_11",
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
    [140,140,140,140,140,140, 93,140,140,140,140,140,140],
    [140,  0,239,  0, 21,237,  0,238,  0,  0,237,  0,140],
    [140, 82,140,140,140,140,239,140, 81,253,140,688,140],
    [140,  0,140,358,687,140,  0,140,361,610,140,689,140],
    [140,688,140,610,361,140,207,140,688,360,140,  0,140],
    [140,238,140, 81,253,140,  0,140,140,140,140, 81,140],
    [140,  0,207,  0,  0, 81,237, 81, 21,  0,207,  0,140],
    [10294,10294,10294,10294,10294,10294, 82,10294,10294,10294,10294,10294,10294],
    [10294,688,  0,237,  0,240,  0,240,  0,237,  0,688,10294],
    [10294,  0,10294,10294,10294,10294, 85,10294,10294,10294,10294,  0,10294],
    [10294,237,10294,238,  0,240,  0,240,  0,238,10294,237,10294],
    [10294,361,10294,  0,10294,10294, 85,10294,10294,  0,10294, 22,10294],
    [10294,611,10294,711,10294,  0, 93,  0,10294,689,10294,611,10294]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ],
    "bg2map": [

],
    "fg2map": [

]
}