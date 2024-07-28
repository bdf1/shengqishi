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
        "提示：先去 GM8 ，然后去 SN10 ，最后去 GM2 。"
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
                            6
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
            "\t[江鹤依浩,fairy]\b[this]你好，我是神奇的江鹤依浩，你要做什么呢？"
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
    [140,  0,  0,140,140,140,  0,140,140,140,  0,  0,140],
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