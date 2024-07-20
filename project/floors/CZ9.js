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
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20],
    [ 20,  0,211,  0, 21,209,  0,210,  0,  0,209,  0, 20],
    [ 20, 82, 20, 20, 20, 20,211, 20, 81,217, 20, 31, 20],
    [ 20,  0, 20, 27,404, 20,  0, 20, 29,397, 20,402, 20],
    [ 20, 31, 20,397, 29, 20,207, 20,404, 28, 20,  0, 20],
    [ 20,209, 20, 81,248, 20,  0, 20, 20, 20, 20, 81, 20],
    [ 20,  0,207,  0,  0, 81,208, 81, 21,  0,207,  0, 20],
    [10294,10294,10294,10294,10294,10294, 82,10294,10294,10294,10294,10294,10294],
    [10294, 32,  0,208,  0,220,  0,220,  0,208,  0, 32,10294],
    [10294,  0,10294,10294,10294,10294, 85,10294,10294,10294,10294,  0,10294],
    [10294,209,10294,210,  0,220,  0,220,  0,210,10294,209,10294],
    [10294,416,10294,  0,10294,10294, 85,10294,10294,  0,10294, 22,10294],
    [10294,434,10294,492,10294,  0, 91,  0,10294,403,10294,434,10294]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ]
}