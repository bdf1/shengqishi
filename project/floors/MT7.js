main.floors.MT7=
{
    "floorId": "MT7",
    "title": "莫析家族7 ",
    "name": "莫析家族7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "ground",
    "bgm": "21-30.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,4": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗?",
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
                            "获得一把蓝钥匙",
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "4,6": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗?",
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
                            "获得50全属性",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "50"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "50"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "+=",
                                "value": "50"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "MT6",
            "loc": [
                0,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041],
    [10041,  0,776,  0,363, 21,  0,768,  0,690,  0,776,10041],
    [10041,367,10041,10041,767,10041,10041, 81,10041,10041,10041,  0,10041],
    [10041,  0,10041, 22,368,369,10041,772,  0,690,10041, 21,10041],
    [10041,767,10041,10041,10041,10041,10041,  0,10110,  0,10041,  0,10041],
    [10041,  0, 81,768,  0,690,10041, 22,  0,772,10041,776,10041],
    [10041,  0,10041,  0,10110,  0,10041,10041,10041, 81,10041,  0, 92],
    [10041,690,10041, 21,  0,775, 81,  0,690,  0,775,  0,10041],
    [10041,10041,10041,10041,10041,10041,10041,10041,10041, 82,10041, 81,10041],
    [10041,  0,  0,776,  0,775, 81,690,  0,768,10041,775,10041],
    [10041,363,364,10041,611,611,10041,10041,10041, 81,10041, 21,10041],
    [10041,366,365,10041,698,698,10041, 22, 22,775,10041, 21,10041],
    [10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041]
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
        6
    ]
}