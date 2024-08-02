main.floors.ZL1=
{
    "floorId": "ZL1",
    "title": "东凌走廊 1 ",
    "name": "东凌走廊1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "X10006",
    "bgm": "zhuangkuoshishi.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:shengqishi>1)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N511",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ]
                }
            ],
            "false": []
        },
        "\t[凌依,N574]\b[this,2,6]圣子殿下。",
        "\t[莫析辉,hero]\b[hero]凌依，你速去东北方向的莫析家族打探一下，到底发生了什么事？",
        "\t[凌依,N574]\b[this,2,6]是！",
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "if",
            "condition": "(flag:shengqishi>1)",
            "true": [
                "\t[唐佳成,N510]\b[this,2,5]殿下……",
                "\t[莫析辉,hero]\b[hero]唐佳成，你实力又大有长进呀？",
                "\t[唐佳成,N510]\b[this,2,5]是的，殿下，我已经通过了光明骑士的考核，正式成为了一名光明骑士。愿为殿下效力。",
                "\t[莫析辉,hero]\b[hero]嗯，那先去莫析家族吧！",
                "\t[唐佳成,N510]\b[this,2,5]是！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ],
                    "remove": true
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,1": [
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
        "11,11": [
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
                            "获得五把黄钥匙",
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "operator": "+=",
                                "value": "5"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "1,11": [
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
                            "获得一枚十二阶血红宝石",
                            {
                                "type": "setValue",
                                "name": "item:I616",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "1,1": [
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
                            "获得一瓶玉露",
                            {
                                "type": "setValue",
                                "name": "item:I416",
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
        "0,6": {
            "floorId": "GM1",
            "loc": [
                12,
                6
            ]
        },
        "6,0": {
            "floorId": "ZL2",
            "loc": [
                6,
                12
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
    [20336,20336,20336,20336,20336,20336, 91,20336,20336,20336,20336,20336,20336],
    [20336,10110,  0,  0,  0,  0,  0,  0,  0,  0,  0,10110,20336],
    [20336,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20336],
    [20336,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20336],
    [20336,  0,  0,  0,151,151,  0,  0,  0,151,  0,  0,20336],
    [20336,  0,  0,151,151,151,151,151,151,151,  0,  0,10319],
    [ 94,  0,575,151,151,151,151,151,151,  0,  0,10319, 94],
    [20336,  0,  0,  0,151,151,151,151,151,  0,  0,  0,10319],
    [20336,  0,  0,  0,151,151,  0,  0,151,151,  0,  0,20336],
    [20336,  0,  0,151,151,  0,  0,  0,  0,151,  0,  0,20336],
    [20336,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20336],
    [20336,10110,  0,  0,  0,  0,  0,  0,  0,  0,  0,10110,20336],
    [20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336]
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