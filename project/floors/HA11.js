main.floors.HA11=
{
    "floorId": "HA11",
    "title": "黑暗神殿 6",
    "name": "黑暗神殿6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X140137",
    "bgm": "gentaiyangxishuozaijian.mp3",
    "firstArrive": [],
    "eachArrive": null,
    "parallelDo": "",
    "events": {
        "3,10": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "right:1",
                            "down:1"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ],
        "2,10": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ],
        "1,10": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:1",
                            "left:1"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ],
        "1,11": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:1",
                            "left:1",
                            "down:1"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:1",
                            "left:1",
                            "down:2"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ],
        "3,11": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "right:1",
                            "down:2"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [],
                "false": [
                    "\t[黑暗神使,E907]小子找死！吼！",
                    {
                        "type": "move",
                        "loc": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "right:1",
                            "down:3"
                        ]
                    },
                    {
                        "type": "battle"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "HA10",
            "loc": [
                0,
                6
            ]
        },
        "2,12": {
            "floorId": "HA12",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {
        "2,9": [
            {
                "type": "if",
                "condition": "(flag:heianshengzi===1)",
                "true": [
                    "\t[黑暗神使,E907]愿为殿下效犬马之劳",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "1000"
                    },
                    {
                        "type": "setValue",
                        "name": "status:def",
                        "operator": "+=",
                        "value": "1000"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mdef",
                        "operator": "+=",
                        "value": "20000"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    "\t[黑暗神使,E907]吼！"
                ]
            }
        ]
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166],
    [140166,  0,1021,  0, 21,687,  0,618,140166,350,140166,351,140166],
    [140166, 81,140166,140166,140166,140166, 81,140166,140166,  0,877,  0,140166],
    [140166,  0, 21,  0,140166,  0,1022,  0,140166,140166,1076,140166,140166],
    [140166,618,  0,1024,140166,687,  0,618,  0,851,  0,1117,140166],
    [140166,140166,140166, 81,140166,140166,140166,140166,140166,140166, 81,140166,140166],
    [140166,687, 22,352, 21,140166,687,  0,349,  0,737,  0, 92],
    [140166,140166,140166,140166,140166,140166,140166, 81,140166,140166,140166,140166,140166],
    [140166,688,  0,  0, 81,  0,  0,  0,1022,  0,  0,688,140166],
    [140166,140166,907,140166,140166,140166, 81,140166,140166,140166,851,140166,140166],
    [140166,  0,  0,  0,140166,  0,737,  0,140166,  0,687,  0,140166],
    [140166,  0,  0,  0,140166,348,  0, 21,140166, 21,  0,  0,140166],
    [140166,  0, 93,  0,140166,140166,140166,140166,140166,140166,140166,140166,140166]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        12,
        6
    ],
    "color": null,
    "bg2map": [

],
    "fg2map": [

]
}