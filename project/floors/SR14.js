main.floors.SR14=
{
    "floorId": "SR14",
    "title": "深入 14 ",
    "name": "深入14",
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
    "events": {
        "9,4": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗? (花费50点魔力)",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<50)",
                        "true": [
                            {
                                "type": "playSound",
                                "name": "操作失败"
                            },
                            "你的魔力不足!"
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "status:mana",
                                "operator": "-=",
                                "value": "50"
                            },
                            {
                                "type": "playSound",
                                "name": "door.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "X10111"
                            },
                            "获得500金币",
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "500"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "1,0": {
            "floorId": "SR13",
            "loc": [
                1,
                0
            ]
        },
        "12,6": {
            "floorId": "SR15",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:door_SR14_2_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_SR14_2_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,9": {
            "0": {
                "condition": "flag:door_SR14_2_9==2",
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
                        "name": "flag:door_SR14_2_9",
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
    [152, 93,152,152,152,152,152,152,152,152,152,152,152],
    [152,  0,  0,732,  0, 21,152,690,  0,735,  0,  0,152],
    [152,152,152,152,152,  0,152,  0,152,152,152, 82,152],
    [152,690,  0,  0,152,733,152,751,152,691, 21,232,152],
    [152,  0,367,734, 81,  0,152,  0,152,10110,604,  0,152],
    [152,699,  0,  0,152,690,152, 21,152,152,152,152,152],
    [152,152,152,152,152, 81,152,  0,733,  0,365,  0, 94],
    [152,  0, 21,  0,  0,732,152,152,152,152,152,734,152],
    [152,734,  0,734,  0,690,  0,  0,733,  0,612,  0,152],
    [152,152, 85,152,152,152, 81,152,152,152, 81,152,152],
    [152,363,603,364,152,  0,735,  0,152,  0,751,  0,152],
    [152,700,700,700,152,365,366,691,152,602,602,602,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152]
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
        1,
        0
    ]
}