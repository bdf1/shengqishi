main.floors.XY6=
{
    "floorId": "XY6",
    "title": "光明学院 6 ",
    "name": "光明学院6",
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
        "6,6": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "YS1",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "使用2000魔力值，将打开进入隐世学院的门。",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "(status:mana>=2000)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2000"
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
        "1,0": {
            "floorId": "XY5",
            "loc": [
                1,
                0
            ]
        },
        "12,6": {
            "floorId": "XY7",
            "loc": [
                12,
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
    [  3, 93,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,684, 81,725,  0,223,  0, 21,219,  0,684,  3],
    [  3,219,  0,  3,  0,356,  3,  0,  3,  3,  3, 81,  3],
    [  3, 81,  3,  3,  3,227,  3,224,  3,710,355,220,  3],
    [  3,349,  0,  3,685, 21,  3,608,684,  3,  3,  3,  3],
    [  3,  0,685,  3,610,20810,20811,20812,220,  0, 21,  0,  3],
    [  3,725,  3,  3,  3,20818,20819,20820,  3,  3,  3,225, 94],
    [  3,  0,350,  0,224,  0,1028,  0,227,  0,355,696,  3],
    [  3, 81,  3, 81,  3, 81,  3,351,  3, 81,  3, 81,  3],
    [  3, 81,  3, 81,  3,220,  3,352,  3, 81,  3, 81,  3],
    [  3,685,  3,685,  3,  0,  3,  0,  3,685,  3,685,  3],
    [  3,686,  3,686,  3,601,  0,224,  3,686,  3,686,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
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