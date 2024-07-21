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
    "firstArrive": [],
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