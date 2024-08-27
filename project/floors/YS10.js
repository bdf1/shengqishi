main.floors.YS10=
{
    "floorId": "YS10",
    "title": "隐世学院 10 ",
    "name": "隐世学院10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "cbzc.mp3",
    "firstArrive": [
        {
            "type": "jumpHero",
            "loc": [
                6,
                9
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[莫析辉,hero]\b[hero]看来，这应该就是进入魔界的入口了……",
        {
            "type": "setBlock",
            "number": "N443",
            "loc": [
                [
                    6,
                    11
                ]
            ]
        },
        "\t[光明骑士,N440]\b[this,6,11]圣子殿下。",
        "\t[莫析辉,hero]\b[hero]何事？",
        "\t[光明骑士,N440]\b[this,6,11]圣子殿下，三长老和五长老请您去一趟准圣子宫。",
        "\t[莫析辉,hero]\b[hero]准圣子宫？什么事？",
        "\t[光明骑士,N440]\b[this,6,11]属下不知。属下告退！",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    3
                ]
            ],
            "floorId": "GM1",
            "remove": true
        },
        "前往\r[red]\\c[50]准圣子宫\\c[]\r[]"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "MJ1",
                        "loc": [
                            6,
                            11
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "使用5000魔力值，将打开进入魔界的门。",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "(status:mana>=5000)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "5000"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "sg",
                                        "loc": [
                                            6,
                                            6
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "X20813",
                                        "loc": [
                                            [
                                                5,
                                                5
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "X20814",
                                        "loc": [
                                            [
                                                6,
                                                5
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "X20815",
                                        "loc": [
                                            [
                                                7,
                                                5
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "X20821",
                                        "loc": [
                                            [
                                                5,
                                                6
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "X20822",
                                        "loc": [
                                            [
                                                6,
                                                6
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "X20823",
                                        "loc": [
                                            [
                                                7,
                                                6
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "value": "true"
                                    },
                                    "\t[传送阵,X20822]\b[this]传送阵已激活！"
                                ],
                                "false": [
                                    {
                                        "type": "playSound",
                                        "name": "操作失败"
                                    },
                                    "\t[传送阵,X20811]\b[this]你的魔力值不足！"
                                ]
                            }
                        ],
                        "no": []
                    }
                ]
            }
        ],
        "8,9": [
            "\t[江鹤依浩,fairy]\b[this]你好，我是神奇的江鹤依浩，你要做什么呢？",
            {
                "type": "choices",
                "text": "\t[江鹤依浩,fairy]你可以在这里提交毕业任务",
                "choices": [
                    {
                        "text": "幽冥魔君",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:youmingmojun===2)",
                                "true": [
                                    "\t[江鹤依浩,fairy]\b[this]该任务已经提交！"
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:youmingmojun===1)",
                                        "true": [
                                            "\t[江鹤依浩,fairy]\b[this]不错啊，竟然完成了击杀幽冥魔君的毕业任务，这是你的毕业奖励。攻防护盾+1w，魔力值+1000，生命上限+10w",
                                            {
                                                "type": "setValue",
                                                "name": "status:hpmax",
                                                "operator": "+=",
                                                "value": "100000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:mdef",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:mana",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:youmingmojun",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            "\t[江鹤依浩,fairy]\b[this]你还没有完成该任务！"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "美面魔帝",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:meimianmodi===2)",
                                "true": [
                                    "\t[江鹤依浩,fairy]\b[this]该任务已经提交！"
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:meimianmodi===1)",
                                        "true": [
                                            "\t[江鹤依浩,fairy]\b[this]美面魔帝这么难的任务，你们两个竟然击败了它！",
                                            "\t[莫析辉,hero]\b[hero]还是学院教导的好",
                                            "\t[江鹤依浩,fairy]\b[this]这是你的奖励。",
                                            {
                                                "type": "setValue",
                                                "name": "item:I1088",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:meimianmodi",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            "\t[江鹤依浩,fairy]\b[this]你还没有完成该任务！"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "无事",
                        "action": []
                    }
                ]
            }
        ],
        "6,8": [
            "此传送阵需要魔力值开启，建议通关黑暗神殿区域之后再进入",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "YS9",
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,  0,  0,140,140,140,140,140,140,140,  0,  0,140],
    [140,  0,  0,140,140,140,140,140,140,140,  0,  0,140],
    [140,  0,  0,140,140,20810,20811,20812,140,140,  0,  0,140],
    [140,  0,  0,140,140,20818,20819,20820,140,140,  0,  0,140],
    [140,  0,  0,140,140,  0,  0,  0,140,140,  0,  0,140],
    [140,  0,  0,140,140,140,129,140,140,140,  0,  0,140],
    [140,  0,  0,  0,  0,  0,  0,  0,124,  0,  0,  0,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,140,140,140,140,140, 91,140,140,140,140,140,140]
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