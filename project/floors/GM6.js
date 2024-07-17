main.floors.GM6=
{
    "floorId": "GM6",
    "title": "光明 6 层",
    "name": "光明6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X30023",
    "bgm": "airuying.mp3",
    "firstArrive": [
        {
            "type": "jumpHero",
            "loc": [
                1,
                6
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[汪周,N468]\b[this,6,3]立正！",
        "\t[罗涛,N582]\b[this,3,4]骑士队长，没看到圣子殿下来了吗，还不快快迎接？",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    4,
                    6
                ]
            ]
        },
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    8,
                    6
                ]
            ]
        },
        "\t[汪周,N468]\b[this,6,3]圣子殿下，你屈尊来骑士队，真是令骑士队蓬荜生辉呀。",
        "\t[莫析辉,hero]\b[hero]骑士队长客气了。只是这位骑士，怎么……",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        "\t[汪周,N468]\b[this,6,3]凌依，你在干什么？圣子殿下来了，你还杵在那里，不知道要面向殿下吗？",
        "\t[凌依,N574]\b[this,6,6]我眼里，只有骑士团的规矩，没有其他的！",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        "\t[汪周,N468]\b[this,6,3]圣子殿下莫怪，这个凌依在骑士队也是数一数二的高手，他比罗涛、卢轩、牧迟丝毫不逊啊。所以有些傲气……",
        "\t[莫析辉,hero]\b[hero]哈哈，高手有些傲气是应该的。凌依骑士，我看好你哦！",
        "\t[凌依,N574]\b[this,6,6]多谢圣子殿下。",
        "\t[罗涛,N582]\b[this,3,4]切！",
        "\t[汪周,N468]\b[this,6,3]都解散了吧！",
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    6
                ]
            ],
            "remove": true
        },
        "\t[罗涛,N582]\b[this,3,4]凌依，有本事来单挑一场么？",
        "\t[凌依,N574]\b[this,6,6]呵，来啊！",
        "\t[罗涛,N582]\b[this,3,4]我今天就替圣子殿下教训教训你！",
        "\t[莫析辉,hero]\b[hero]那你们好好打，谁打赢了，我就奖他百两黄金！",
        "\t[罗涛,N582]\b[this,3,4]是！",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        "\t[凌依,N574]\b[this,6,6]谢圣子殿下！",
        "\t[莫析辉,hero]\b[hero]去吧！",
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    4
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "if",
            "condition": "(flag:shengqishi===1)",
            "true": [
                "\t[莫析辉,hero]\b[hero]对了，我得去看看唐佳成怎么样了。骑士队长，你知道那位新来的骑士吗？",
                "\t[汪周,N468]\b[this,6,3]圣子殿下，那位新来的骑士，正在南边的骑士团训练，你可以去看看。",
                "\t[莫析辉,hero]\b[hero]好。"
            ],
            "false": [
                "\t[汪周,N468]\b[this,6,3]圣子殿下，你记得去\r[red]光明学院\r[]学习呀！教皇陛下特地交代的。",
                "\t[莫析辉,hero]\b[hero]知道啦",
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            1
                        ]
                    ],
                    "floorId": "GM1",
                    "remove": true
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": [
            "\t[莫析辉,hero]\b[hero]没事还是不要乱走吧！",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            }
        ],
        "10,2": [
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
                            "获得进阶神之血*1",
                            {
                                "type": "setValue",
                                "name": "item:I711",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "2,2": [
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
                            "获得二阶白宝石*1",
                            {
                                "type": "setValue",
                                "name": "item:I598",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "1,5": [
            "\t[光明骑士,N440]\b[this]光明在我心中",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "1,7": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "up"
            }
        ],
        "11,5": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "11,7": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "up"
            }
        ],
        "5,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "7,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "GM2",
            "loc": [
                11,
                6
            ]
        },
        "6,12": {
            "floorId": "GM7",
            "loc": [
                6,
                0
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
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50167,10110,  0,  0,  0,  0,  0,  0,  0,10110,50167,50049],
    [50049,  0,  0,20636,  0,  0,468,  0,  0,20636,  0,  0,50049],
    [50049,  0,  0,584,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,440,  0,  0,  0,  0,  0,  0,  0,  0,  0,440,50049],
    [ 94,  0,  0,  0,443,  0,577,  0,443,  0,  0,  0, 94],
    [50049,443,  0,  0,  0,  0,  0,  0,  0,  0,  0,443,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,20644,  0,  0,  0,  0,  0,20644,  0,  0,50049],
    [50049,50167,  0,  0,  0,442,  0,441,  0,  0,  0,50167,50049],
    [50049,50049,50049,50049,50049,50049, 93,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [

],
    "fgmap": [
    [  0,50099,  0,20677,  0,  0,20558,  0,  0,20677,  0,50099,  0],
    [  0,50159,  0,  0,  0,  0,20566,  0,  0,  0,  0,50159,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50159,  0,  0,  0,  0,  0,  0,  0,  0,  0,50159,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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