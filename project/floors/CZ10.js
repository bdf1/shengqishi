main.floors.CZ10=
{
    "floorId": "CZ10",
    "title": "村庄 10 ",
    "name": "村庄10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            "\t[凌依,N1151]\b[this,6,10]殿下，这里有几个难缠的怪物",
            "\t[光明圣子,hero]\b[up]emmmm，看到了",
            "\t[凌依,N1151]\b[this,6,10]黑暗骑士不是殿下现在能应付的，让我等光明骑士对付吧!黑暗与光明终究要一碰的!",
            "\t[光明圣子,hero]\b[up]行，那后面那个史莱姆王，我应该能应付!",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,8": [
            {
                "type": "confirm",
                "text": "确认要跳过剧情吗?",
                "yes": [
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
                        "type": "setBlock",
                        "number": "specialDoor",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "no": [
                    "\t[黑暗骑士,E725]\b[up]黑暗骑士恭迎光明圣子殿下!",
                    "\t[光明圣子,hero]\b[down]呵，看得出你们等本少爷很久了。",
                    "\t[黑暗骑士,E725]\b[up]殿下误会了，是我们尊贵的黑暗圣子殿下想要见您，所以让我们来请殿下去黑暗神殿一聚",
                    "\t[光明圣子,hero]\b[down]请本少爷?就凭你能请动吗？",
                    {
                        "type": "setBlock",
                        "number": "N1151",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    "\t[凌依,N1151]\b[down]让我来会一会黑暗神殿的黑暗骑士吧，看看究竟是光明更强，还是黑暗更强!",
                    "\t[黑暗骑士,E725]\b[up]想来我是不便向殿下出手了，只能由让殿下脏手与小喽啰一战了。",
                    "\t[凌依,N1151]\b[down]废话少说，接招!",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                7
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
                        "type": "setBlock",
                        "number": "specialDoor",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ]
                    },
                    "\t[骷髅史莱姆王,E1039]\b[this,6,4]不知在下能否有幸让殿下出手呢",
                    "\t[光明圣子]\b[down]废话，本少爷身边的守护骑士都走了，当然得本少爷出手啦，来吧!",
                    {
                        "type": "hide",
                        "remove": true
                    }
                ]
            }
        ],
        "9,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
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
            ]
        },
        "3,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
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
                                {
                                    "type": "setValue",
                                    "name": "item:I491",
                                    "operator": "+=",
                                    "value": "3"
                                }
                            ]
                        }
                    ],
                    "no": []
                }
            ]
        },
        "8,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[凌依,N1151]\b[down]殿下，属下等候多时了。",
                "\t[凌依,N1151]\b[down]属下已经去两条路探过了。左右两边的宝石提升数值大致相等，打败怪物所获金币也一致。",
                "\t[凌依,N1151]\b[down]不同之处在于\n左边的路宝物特有的:回魔权杖、破墙镐、炸弹\n右边的路宝物特有的:光明宝典（进阶版）、普通权杖、大黄钥匙\n左边的路上魔法阵比较多，右边的路领域怪较多。"
            ]
        },
        "3,0": [
            "\t[七长老,wizard]\b[this,3,0]我的宝贝圣子，你来啦",
            "\t[光明圣子,hero]叔叔……七长老，您有什么事要告诉我呀",
            "\t[七长老,wizard]\b[this,3,0]看到我旁边这种东西没，这是魔法阵，你需要使用30魔力值才能打开",
            "\t[光明圣子,hero]哦哦",
            "\t[七长老,wizard]\b[this,3,0]不慌，我给你提升一下实力",
            {
                "type": "setValue",
                "name": "status:manamax",
                "operator": "+=",
                "value": "50"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "50"
            },
            "\t[七长老,wizard]\b[this,3,0]我走啦",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "9,0": [
            "\t[二长老,man]\b[this,9,0]我的宝贝圣子，你来啦",
            "\t[光明圣子,hero]\b[down]伯伯……，您有什么事要告诉我呀",
            "\t[二长老,man]\b[this,9,0]看到我旁边这种东西没，这是魔法阵，你需要使用30魔力值才能打开",
            "\t[光明圣子,hero]哦哦",
            "\t[二长老,man]\b[this,9,0]不慌，我给你提升一下实力",
            {
                "type": "setValue",
                "name": "status:manamax",
                "operator": "+=",
                "value": "50"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "50"
            },
            "\t[二长老,man]\b[this,9,0]我走啦",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[光明圣女,N1169]\b[down]圣子弟弟，你来了",
                "\t[光明圣子]\b[up]为光明除去黑暗，身为圣子义不容辞!",
                "\t[光明圣女,N1169]\b[down]虽说圣子弟弟你实力不足，不过姐姐我还是不会坐看黑暗神殿欺负你的",
                "\t[光明圣子]\b[down]呵呵，那小弟多谢姐姐啦。只是姐姐若是也败在黑暗圣子手里，那丢的可是光明神殿的脸呀",
                "\t[光明圣女,N1169]\b[down]怎么会呢，弟弟不用担心我的。现在有两条路，咱们各选一条吧",
                {
                    "type": "choices",
                    "text": "\t[光明圣女,N1169]选择左边或者右边",
                    "choices": [
                        {
                            "text": "左边",
                            "action": [
                                {
                                    "type": "openDoor",
                                    "loc": [
                                        4,
                                        0
                                    ]
                                },
                                "\t[光明圣女,N1169]\b[down]那我先走了！",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            4,
                                            5
                                        ]
                                    ],
                                    "remove": true
                                },
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
                                "\t[凌依,N1151]\b[down]属下先去探路",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            8,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                }
                            ]
                        },
                        {
                            "text": "右边",
                            "action": [
                                {
                                    "type": "openDoor",
                                    "loc": [
                                        8,
                                        0
                                    ]
                                },
                                "\t[光明圣女,N1169]\b[down]那我先走了！",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            4,
                                            5
                                        ]
                                    ],
                                    "remove": true
                                },
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
                                "\t[凌依,N1151]\b[down]属下先去探路",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            8,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                }
                            ]
                        },
                        {
                            "text": "跳过二区",
                            "action": [
                                {
                                    "type": "changeFloor",
                                    "floorId": "MM6",
                                    "loc": [
                                        6,
                                        5
                                    ]
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            4,
                                            5
                                        ]
                                    ],
                                    "floorId": "CZ10",
                                    "remove": true
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            4,
                                            6
                                        ]
                                    ],
                                    "floorId": "CZ10",
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
                                    "floorId": "CZ10",
                                    "remove": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,0": {
            "floorId": "MM2",
            "loc": [
                6,
                12
            ]
        },
        "0,0": {
            "floorId": "SR1",
            "loc": [
                11,
                1
            ]
        },
        "12,0": {
            "floorId": "SR16",
            "loc": [
                0,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "setBlock",
                "number": "I496",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I484",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I441",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "X10110",
                "loc": [
                    [
                        9,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "X10110",
                "loc": [
                    [
                        3,
                        6
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        6
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        6
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "remove": true
            },
            "\t[??]\b[up]不错嘛",
            "\t[光明圣子]\b[down]什么人?",
            {
                "type": "animate",
                "name": "sword3",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "confirm",
                "text": "确认要跳过剧情吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(flag:A>1)",
                        "true": [
                            "先回圣子宫"
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "status:hpmax",
                                "operator": "-=",
                                "value": "50"
                            },
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "-=",
                                "value": "5"
                            },
                            "先回圣子宫"
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "MT0"
                    },
                    {
                        "type": "setBlock",
                        "number": "N1142",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "MT0"
                    }
                ],
                "no": [
                    {
                        "type": "if",
                        "condition": "(flag:A>1)",
                        "true": [
                            {
                                "type": "animate",
                                "name": "sword2",
                                "loc": [
                                    6,
                                    5
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N1152",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ]
                            },
                            "\t[乔浩岚,N1152]\b[down]殿下小心!",
                            "\t[光明圣子,up]好险!究竟是什么人，竟然偷袭本少爷!",
                            {
                                "type": "changePos",
                                "direction": "down"
                            },
                            {
                                "type": "playBgm",
                                "name": "mingzhentankenanlansegubao.mp3"
                            },
                            {
                                "type": "animate",
                                "name": "heidong3",
                                "loc": [
                                    6,
                                    7
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N1165",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 2000,
                                "speed": 10,
                                "power": 10
                            },
                            "\t[??,N1165]\b[down]莫析•辉，刚刚要不是这小子，你可得脱层皮!",
                            "\t[光明圣子,down]你是什么人！竟敢偷袭本少爷!啊，你怎么长得和我这么像……",
                            "\t[??,N1165]\b[down]哼，黑暗骑士们，还不出来，“请”光明圣子到黑暗神殿一坐?",
                            {
                                "type": "animate",
                                "name": "re",
                                "loc": [
                                    5,
                                    7
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "re",
                                "loc": [
                                    7,
                                    7
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "E725",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "E725",
                                "loc": [
                                    [
                                        7,
                                        7
                                    ]
                                ]
                            },
                            "\t[黑暗骑士,E725]为黑暗而战!",
                            "\t[光明圣子,down]我靠!",
                            "\t[黑暗骑士,E725]光明圣子殿下，麻烦您和我们走一趟吧",
                            "\t[光明骑士,N374]黑暗神殿欺我光明神殿无人吗？",
                            {
                                "type": "animate",
                                "name": "light",
                                "loc": [
                                    5,
                                    5
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "light",
                                "loc": [
                                    7,
                                    5
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N374",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N374",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ]
                            },
                            "\t[光明骑士,N374]为光明而战!",
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    6,
                                    6
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    5,
                                    6
                                ],
                                "async": true
                            },
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    7,
                                    6
                                ],
                                "async": true
                            },
                            {
                                "type": "animate",
                                "name": "thunder2",
                                "loc": [
                                    6,
                                    6
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "thunder3",
                                "loc": [
                                    6,
                                    6
                                ]
                            },
                            {
                                "type": "vibrate",
                                "direction": "diagonal1",
                                "time": 2000,
                                "speed": 10,
                                "power": 10
                            },
                            "\t[黑暗骑士,E725]殿下，短时间内，我们恐怕无法战胜光明骑士团掳走光明圣子，这里距离光明神殿太近了，怕是会惊扰到光明教皇……",
                            "\t[??,N1165]\b[down]光明圣子莫析•辉，同时转告光明圣女北纳•蜜西娅，我黑暗圣子墨奈，向你们宣战!有本事的话，来村庄尽头找本少爷!哈哈哈哈哈！",
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 2000,
                                "speed": 10,
                                "power": 10
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            "\t[光明圣子,down]黑暗圣子……竟然是黑暗神殿的圣子……他好像比我厉害……",
                            "\t[乔浩岚,N1152]\b[down]殿下，别担心，我会保护你的!",
                            "\t[光明圣子,down]没事，我得先向教皇爷爷禀报一下这里的情况，然后再看看怎么处理黑暗圣子的事。（教皇已经在圣子宫等你了）",
                            "\t[乔浩岚,N1152]\b[down]是!",
                            "\t[光明圣子]\b[up]你们先退下吧",
                            "\t[乔浩岚,N1152]\b[down]是!",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "floorId": "MT0"
                            },
                            {
                                "type": "setBlock",
                                "number": "N1142",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "floorId": "MT0"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "status:hpmax",
                                "operator": "-=",
                                "value": "50"
                            },
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "-=",
                                "value": "5"
                            },
                            "\t[光明圣子]\b[up]啊啊啊啊啊!",
                            {
                                "type": "changePos",
                                "direction": "down"
                            },
                            {
                                "type": "playBgm",
                                "name": "mingzhentankenanlansegubao.mp3"
                            },
                            {
                                "type": "animate",
                                "name": "heidong3",
                                "loc": [
                                    6,
                                    7
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N1165",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "vibrate",
                                "direction": "diagonal1",
                                "time": 2000,
                                "speed": 10,
                                "power": 10
                            },
                            "\t[??,N1165]\b[down]莫析•辉，感觉怎么样?",
                            "\t[光明圣子,down]你是什么人！竟敢偷袭本少爷!啊，你怎么长得和我这么像……",
                            "\t[??,N1165]\b[down]哼，黑暗骑士们，还不出来，“请”光明圣子到黑暗神殿一坐?",
                            {
                                "type": "animate",
                                "name": "re",
                                "loc": [
                                    5,
                                    7
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "re",
                                "loc": [
                                    7,
                                    7
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "E725",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "E725",
                                "loc": [
                                    [
                                        7,
                                        7
                                    ]
                                ]
                            },
                            "\t[黑暗骑士,E725]为黑暗而战!",
                            "\t[光明圣子,down]我靠!",
                            "\t[黑暗骑士,E725]光明圣子殿下，麻烦您和我们走一趟吧",
                            "\t[光明骑士,N374]黑暗神殿欺我光明神殿无人吗？",
                            {
                                "type": "animate",
                                "name": "light",
                                "loc": [
                                    5,
                                    5
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "light",
                                "loc": [
                                    7,
                                    5
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N374",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N374",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ]
                            },
                            "\t[光明骑士,N374]为光明而战!",
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    6,
                                    6
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    5,
                                    6
                                ],
                                "async": true
                            },
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    7,
                                    6
                                ],
                                "async": true
                            },
                            {
                                "type": "animate",
                                "name": "thunder2",
                                "loc": [
                                    6,
                                    6
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "thunder3",
                                "loc": [
                                    6,
                                    6
                                ]
                            },
                            {
                                "type": "vibrate",
                                "direction": "diagonal1",
                                "time": 2000,
                                "speed": 10,
                                "power": 10
                            },
                            "\t[黑暗骑士,E725]殿下，短时间内，我们恐怕无法战胜光明骑士团掳走光明圣子，这里距离光明神殿太近了，怕是会惊扰到光明教皇……",
                            "\t[??,N1165]\b[down]光明圣子莫析•辉，同时转告光明圣女北纳•蜜西娅，我黑暗圣子墨奈，向你们宣战!有本事的话，来村庄尽头找本少爷!哈哈哈哈哈！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 2000,
                                "speed": 10,
                                "power": 10
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            "\t[光明圣子,down]黑暗圣子……竟然是黑暗神殿的圣子……他好像比我厉害……看来，我得去找教皇爷爷禀报一下了……（教皇已经在\r[red]圣子宫\r[]等你了）",
                            "\t[光明圣子]\b[up]你们先退下吧",
                            "\t[光明骑士,N374]\b[down]是!",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "floorId": "MT0"
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "setBlock",
                                "number": "N1142",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "floorId": "MT0"
                            }
                        ]
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MM1"
                    },
                    {
                        "type": "setHeroOpacity",
                        "opacity": 0
                    },
                    {
                        "type": "animate",
                        "name": "zone",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N1183",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "floorId": "MM1"
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "up:5"
                        ]
                    },
                    "\t[??,N1180]\b[up]大人",
                    "\t[??,N301]\b[down]怎么样?（隐晦的女声）",
                    "\t[??,N1180]\b[down]黑暗圣子墨奈竟然跑了，他居然没有和光明圣子火拼!",
                    "\t[??,N301]\b[down]很正常，这里离光明神殿太近了，容易招来光明教皇",
                    "\t[??,N301]\b[down]所以，黑暗圣子没有火并是正常的",
                    "\t[??,N1180]\b[up]可是，我做了这么多，岂不是白费了",
                    "\t[??,N301]\b[down]我不会让你的奴隶白费的。去吧，一定要挑起黑暗圣子和光明圣子、光明圣女的矛盾，让他们大战一场",
                    "\t[??,N301]\b[down]我本来还想着如何让黑暗圣子和光明神殿搞起来，没想到他自个儿去了，真是妙哉!啊哈哈哈哈！",
                    {
                        "type": "changeFloor",
                        "floorId": "CZ10"
                    },
                    {
                        "type": "setHeroOpacity",
                        "opacity": 1
                    },
                    "\t[光明圣子]\b[down]先回\r[red]圣子宫\r[]"
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 94,209,70338,125, 85,  0, 93,  0, 85,121,70338,209, 92],
    [ 16, 16, 16, 16, 16,  0,  0,  0, 16, 16, 16, 16, 16],
    [10293,10293,10293,10293,10293,10293,  0,10293,10293,10293,10293,10293,10293],
    [10207,10207,10207,10207,10207,10207,10303,10207,10207,10207,10207,10207,10207],
    [10295,10295,  0,  0,  0,10303,1039,10303,  0,  0,  0,10295,10295],
    [10295,10295,  0,  0,  0,  0,  0,  0,  0,  0,  0,10295,10295],
    [10295,10295,  0,  0,  0,  0,725,  0,  0,  0,  0,10295,10295],
    [10295,10295,  0,  0,  0,  0,  0,  0,  0,  0,  0,10295,10295],
    [10294,10294,10294,10294,10294,10294,  0,10294,10294,10294,10294,10294,10294],
    [10294,10294,10294,10294,10294,10294, 83,10294,10294,10294,10294,10294,10294],
    [10294,10294,10294,10294,10294,10294,1151,10294,10294,10294,10294,10294,10294],
    [10294,10294,10294,10294,10294,10294,  0,10294,10294,10294,10294,10294,10294],
    [ 16, 16, 16, 16, 16, 16, 91, 16, 16, 16, 16, 16, 16]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ]
}