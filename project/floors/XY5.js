main.floors.XY5=
{
    "floorId": "XY5",
    "title": "光明学院 5 ",
    "name": "光明学院5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "bxsgzz.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,9": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得一枚五阶黄宝石",
                            {
                                "type": "setValue",
                                "name": "item:I357",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "4,9": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得中阶神之血*2",
                            {
                                "type": "setValue",
                                "name": "item:I712",
                                "operator": "+=",
                                "value": "2"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "5,9": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得一枚六阶绿宝石",
                            {
                                "type": "setValue",
                                "name": "item:I361",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "XY4",
            "loc": [
                6,
                12
            ]
        },
        "1,0": {
            "floorId": "XY6",
            "loc": [
                1,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_XY5_4_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_XY5_4_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_XY5_5_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:door_XY5_5_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:door_XY5_9_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:door_XY5_9_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,7": {
            "0": {
                "condition": "flag:door_XY5_4_7==2",
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
                        "name": "flag:door_XY5_4_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "5,2": {
            "0": {
                "condition": "flag:door_XY5_5_2==2",
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
                        "name": "flag:door_XY5_5_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "9,2": {
            "0": {
                "condition": "flag:door_XY5_9_2==2",
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
                        "name": "flag:door_XY5_9_2",
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
    [  3, 91,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,685,  3,696,696,  3,223,  0,225,  3, 21, 21,  3],
    [  3,  0,  3,696,697, 85,  0,  0,  0, 85, 22, 21,  3],
    [  3,224,  3,696,696,  3,223,  0,225,  3, 21, 21,  3],
    [  3,  0,  3,  3,  3,  3,  3, 82,  3,  3,  3,  3,  3],
    [  3, 21, 83,  0,220,  0,  0,  0,219,  0,  0,685,  3],
    [  3,  0,  3,223,  0,223,  3, 81,  3,  3,  3,  3,  3],
    [  3,219,  3,  3, 85,  3,  3,227,  0,  3,684,685,  3],
    [  3,  0,  3,609,609,609,  3,696,355,  3, 21,355,  3],
    [  3,684,  3,60408,60408,60408,  3,609,356,  3,  0,225,  3],
    [  3,  0,  3,  3,  3,  3,  3,  3,  3,  3,  3, 81,  3],
    [  3,725, 81,356,  0,224,  0,684,  0,219,  0,609,  3],
    [  3,  3,  3,  3,  3,  3, 91,  3,  3,  3,  3,  3,  3]
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
        6,
        12
    ]
}