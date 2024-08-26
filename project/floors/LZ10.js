main.floors.LZ10=
{
    "floorId": "LZ10",
    "title": "龙族 10 ",
    "name": "龙族10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,6": {
            "floorId": "LZ9",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,4": [
            "\t[骑士队长,yellowKnight]\b[this]啊，伟大的迷迭香，我终究是阻止不了这个玩家的脚步……",
            {
                "type": "setBlock",
                "number": "I346",
                "loc": [
                    [
                        2,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I346",
                "loc": [
                    [
                        3,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I346",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I347",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I347",
                "loc": [
                    [
                        9,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I347",
                "loc": [
                    [
                        10,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "big4Potion",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "big4Potion",
                "loc": [
                    [
                        3,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "big4Potion",
                "loc": [
                    [
                        4,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        8,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        9,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        10,
                        7
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        11
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        10
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        9
                    ]
                ],
                "floorId": "MT23",
                "remove": true
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    6
                ],
                "direction": "down"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down:5",
                    "left:4"
                ]
            },
            "\t[勇者,hero]\b[hero]奇怪，怎么没有上楼的楼梯?看来得找别的出口了……"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MT30_6_5==12",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    "\t[骑士队长,yellowKnight]\b[this,6,4]你竟然打败了我的手下，我跟你不共戴天！我要代表伟大的迷迭香消灭你！",
                    {
                        "type": "setValue",
                        "name": "flag:door_MT30_6_5",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1,226,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1, 85,  1,  0,  0,  0,  0,  1],
    [  1,  0,227,227,227,  0,  0,  0,225,225,225,  0, 92],
    [  1,  0,212,212,212,  0,  0,  0,224,224,224,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        11,
        11
    ]
}