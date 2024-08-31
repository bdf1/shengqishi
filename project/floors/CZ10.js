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
            "\t[凌依,N574]\b[this,6,10]殿下，这里有几个难缠的怪物",
            "\t[莫析辉,hero]\b[hero]emmmm，看到了",
            "\t[凌依,N574]\b[this,6,10]黑暗骑士不是殿下现在能应付的，让我等光明骑士对付吧!黑暗与光明终究要一碰的!",
            "\t[莫析辉,hero]\b[hero]行，那后面那个家伙，我应该能应付!",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,8": [
            "\t[林霄,N485]\b[this,6,6]黑暗骑士林霄恭迎光明圣子殿下!",
            "\t[莫析辉,hero]\b[hero]呵，看得出你们等本少爷很久了。",
            "\t[林霄,N485]\b[this,6,6]殿下误会了，是我们尊贵的黑暗圣子殿下想要见您，所以让我们来请殿下去黑暗神殿一聚",
            "\t[莫析辉,hero]\b[hero]请本少爷?就凭你能请动吗？",
            {
                "type": "setBlock",
                "number": "N577",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            "\t[凌依,N574]\b[this,6,7]让我来会一会黑暗神殿的黑暗骑士吧，看看究竟是光明更强，还是黑暗更强!",
            "\t[林霄,N485]\b[this,6,6]想来我是不便向殿下出手了，只能由让殿下脏手与小喽啰一战了。",
            "\t[凌依,N574]\b[this,6,7]废话少说，接招!",
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
            "\t[须弥勇者,evilHero]\b[this,6,4]不知在下能否有幸让殿下出手呢",
            "\t[莫析辉,hero]\b[hero]废话，本少爷身边的守护骑士都走了，当然得本少爷出手啦，来吧!",
            {
                "type": "hide",
                "remove": true
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
                    "text": "确认要打开这个宝箱吗? (花费50点魔力)",
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
                    "text": "确认要打开这个宝箱吗? (花费50点魔力)",
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
                                    "name": "item:I710",
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
        "6,0": {
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
                    "type": "changeFloor",
                    "floorId": "SR1",
                    "loc": [
                        6,
                        12
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "CZ9",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "setBlock",
                "number": "I416",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I366",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I612",
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
            "\t[莫析辉,hero]\b[hero]什么人?",
            {
                "type": "animate",
                "name": "sword3",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "if",
                "condition": "(flag:shengqishi>1)",
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
                        "number": "N472",
                        "loc": [
                            [
                                6,
                                4
                            ]
                        ]
                    },
                    "\t[${flag:shengqishi_name},N472]\b[down]殿下小心!",
                    "\t[莫析辉,hero]\b[hero]好险!究竟是什么人，竟然偷袭本少爷!",
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
                        "number": "N480",
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
                    "\t[??,N477]\b[this,6,7]莫析•辉，刚刚要不是这小子，你可得脱层皮!",
                    "\t[莫析辉,hero]\b[hero]你是什么人！竟敢偷袭本少爷!啊，你怎么长得和我这么像……",
                    "\t[??,N477]\b[this,6,7]哼，黑暗骑士们，还不出来，“请”光明圣子到黑暗神殿一坐?",
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
                        "number": "darkKnight",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "darkKnight",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    "\t[黑暗骑士,darkKnight]为黑暗而战!",
                    "\t[莫析辉,hero]\b[hero]我靠!",
                    "\t[黑暗骑士,darkKnight]光明圣子殿下，麻烦您和我们走一趟吧",
                    "\t[光明骑士,N440]黑暗神殿欺我光明神殿无人吗？",
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
                        "number": "N440",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N440",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    "\t[光明骑士,N440]为光明而战!",
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
                    "\t[黑暗骑士,darkKnight]殿下，短时间内，我们恐怕无法战胜光明骑士团掳走光明圣子，这里距离光明神殿太近了，怕是会惊扰到光明教皇……",
                    "\t[??,N477]\b[this,6,7]光明圣子莫析•辉，同时转告光明圣女北纳•蜜西娅，我黑暗圣子墨奈，向你们宣战!有本事的话，来村庄尽头找本少爷!哈哈哈哈哈！",
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
                    "\t[莫析辉,hero]\b[hero]黑暗圣子……竟然是黑暗神殿的圣子……他好像比我厉害……",
                    "\t[${flag:shengqishi_name},N472]\b[down]殿下，别担心，我会保护你的!",
                    "\t[莫析辉,hero]\b[hero]没事，我先派人向教皇爷爷禀报一下这里的情况，同时先深入去探查一下黑暗圣子的情况。",
                    "\t[${flag:shengqishi_name},N472]\b[down]是!那我们一起去吗",
                    "\t[莫析辉,hero]\b[hero]走吧！",
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
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "status:hpmax",
                        "operator": "-=",
                        "value": "5000"
                    },
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "-=",
                        "value": "100"
                    },
                    {
                        "type": "setValue",
                        "name": "status:def",
                        "operator": "-=",
                        "value": "100"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mdef",
                        "operator": "-=",
                        "value": "500"
                    },
                    "\t[莫析辉,hero]\b[hero]啊啊啊啊啊!",
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
                        "number": "N480",
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
                    "\t[??,N477]\b[this,6,7]莫析•辉，感觉怎么样?",
                    "\t[莫析辉,hero]\b[hero]你是什么人！竟敢偷袭本少爷!啊，你怎么长得和我这么像……",
                    "\t[??,N477]\b[this,6,7]哼，黑暗骑士们，还不出来，“请”光明圣子到黑暗神殿一坐?",
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
                        "number": "darkKnight",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "darkKnight",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    "\t[黑暗骑士,darkKnight]为黑暗而战!",
                    "\t[莫析辉,hero]\b[hero]我靠!",
                    "\t[黑暗骑士,darkKnight]光明圣子殿下，麻烦您和我们走一趟吧",
                    "\t[光明骑士,N440]黑暗神殿欺我光明神殿无人吗？",
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
                        "number": "N440",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N440",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    "\t[光明骑士,N440]为光明而战!",
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
                    "\t[黑暗骑士,darkKnight]殿下，短时间内，我们恐怕无法战胜光明骑士团掳走光明圣子，这里距离光明神殿太近了，怕是会惊扰到光明教皇……",
                    "\t[??,N477]\b[down]光明圣子莫析•辉，同时转告光明圣女北纳•蜜西娅，我黑暗圣子墨奈，向你们宣战!有本事的话，来村庄尽头找本少爷!哈哈哈哈哈！",
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
                    "\t[莫析辉,hero]\b[hero]黑暗圣子……竟然是黑暗神殿的圣子……他好像比我厉害……看来，我得派人去找教皇爷爷禀报一下了……不过我还是需要继续去探查一下他的底细才行……",
                    "\t[莫析辉,hero]\b[hero]找一些厉害的骑士，几个去禀报教皇陛下这里的事情，几个跟我深入探查！",
                    "\t[光明骑士,N440]\b[down]是!",
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
                    }
                ]
            },
            {
                "type": "setBlock",
                "number": "upPortal",
                "loc": [
                    [
                        6,
                        0
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        0
                    ]
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
                "name": "heal",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "setBlock",
                "number": "N500",
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
            "\t[??,N497]\b[this,6,4]大人",
            "\t[??,N493]\b[this,6,3]怎么样?（隐晦的女声）",
            "\t[??,N497]\b[this,6,4]黑暗圣子墨奈竟然跑了，他居然没有和光明圣子火并!",
            "\t[??,N493]\b[this,6,4]很正常，这里离光明神殿太近了，容易招来光明教皇",
            "\t[??,N493]\b[this,6,4]所以，黑暗圣子没有火并是正常的",
            "\t[??,N497]\b[this,6,4]可是，我做了这么多，岂不是白费了",
            "\t[??,N493]\b[this,6,3]我不会让你的努力白费的。去吧，一定要挑起黑暗圣子和光明圣子、光明圣女的矛盾，让他们大战一场",
            "\t[??,N493]\b[this,6,3]我本来还想着如何让黑暗圣子和光明神殿搞起来，没想到他自个儿去了，真是妙哉!啊哈哈哈哈！",
            "\t[??,N497]\b[this,6,4]殿下神机妙算，定能将他们玩弄于鼓掌之中！",
            {
                "type": "changeFloor",
                "floorId": "CZ10"
            },
            {
                "type": "setHeroOpacity",
                "opacity": 1
            },
            "\t[莫析辉,hero]\b[hero]继续前进"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16,  0,  0,  0, 16, 16, 16, 16, 16],
    [10293,10293,10293,10293,10293,10293,  0,10293,10293,10293,10293,10293,10293],
    [10207,10207,10207,10207,10207,10207,10303,10207,10207,10207,10207,10207,10207],
    [10295,10295,  0,  0,  0,10303,241,10303,  0,  0,  0,10295,10295],
    [10295,10295,  0,  0,  0,  0,  0,  0,  0,  0,  0,10295,10295],
    [10295,10295,  0,  0,  0,  0,485,  0,  0,  0,  0,10295,10295],
    [10295,10295,  0,  0,  0,  0,  0,  0,  0,  0,  0,10295,10295],
    [10294,10294,10294,10294,10294,10294,  0,10294,10294,10294,10294,10294,10294],
    [10294,10294,10294,10294,10294,10294, 83,10294,10294,10294,10294,10294,10294],
    [10294,10294,10294,10294,10294,10294,574,10294,10294,10294,10294,10294,10294],
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
    ],
    "bg2map": [

],
    "fg2map": [

]
}