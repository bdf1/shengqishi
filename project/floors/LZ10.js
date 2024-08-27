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
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "zhandou.mp3"
        },
        {
            "type": "jumpHero",
            "loc": [
                8,
                3
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[龙族族长,dragon]\b[this,6,3]龙族的叛徒，你还敢回来！",
        {
            "type": "animate",
            "name": "hongguang",
            "loc": [
                6,
                3
            ]
        },
        {
            "type": "setBlock",
            "number": "dragon",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        "\t[莫析辉,hero]\b[hero]（好大）",
        "\t[深渊巨龙,E1159]\b[this,6,7]是啊，我已经离开龙族数百载，当然要回来！如今有主人替我做主，龙族也没必要存在了！",
        "\t[莫析辉,hero]\b[hero]黛默琳，又是你！",
        "\t[黛默琳,N481]\b[this,4,7]当然是我，不然圣子哥哥以为，还有谁有这么大的能耐，降伏这么强的深渊巨龙呢？",
        "\t[莫析辉,hero]\b[hero]族长，这个家伙为啥被你驱逐出龙族啊？",
        "\t[龙族族长,dragon]\b[this,6,3]龙族向来保守，此子邪恶，与深渊做了交易，变得异常强大，故我等将它驱逐出龙族。",
        "\t[莫析辉,hero]\b[hero]深渊可是邪恶之地，黛默琳，你居然跑去了深渊！",
        "\t[黛默琳,N481]\b[this,4,7]要获得实力，自然得用非同寻常的方法！",
        "\t[唐佳成,N510]\b[this,4,3]这条龙，看起来也不过如此嘛！",
        "\t[黛默琳,N481]\b[this,4,7]小子，你有多大的本事，竟敢如此夸口！",
        "\t[唐佳成,N510]\b[this,4,3]有多大的本事，你试试我的拳头不就知道了？",
        "\t[黛默琳,N481]\b[this,4,7]要知道，我还从未输过呢！",
        "\t[唐佳成,N510]\b[this,4,3]哦？是吗？那正好，我也从未输过。",
        "\t[黛默琳,N481]\b[this,4,7]废话少说，接招吧！",
        "\t[莫析辉,hero]\b[hero]小心一些，她很强！",
        {
            "type": "jump",
            "from": [
                4,
                3
            ],
            "to": [
                4,
                5
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                4,
                7
            ],
            "to": [
                4,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "boss15",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "boss13",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "petit2",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "petit3",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "purify",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "skill2",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "vibrate",
            "direction": "diagonal1",
            "time": 2000,
            "speed": 10,
            "power": 10
        },
        {
            "type": "jump",
            "from": [
                4,
                5
            ],
            "to": [
                4,
                4
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                4,
                6
            ],
            "to": [
                4,
                7
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[唐佳成,N510]\b[this,4,3]一往无前！",
        {
            "type": "jump",
            "from": [
                4,
                4
            ],
            "to": [
                4,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "animate",
            "name": "sword6",
            "loc": [
                4,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "heidong3",
            "loc": [
                4,
                7
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    7
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "heidong3",
            "loc": [
                4,
                5
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N481",
            "loc": [
                [
                    4,
                    5
                ]
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[黛默琳,N481]\b[this,4,5]黑暗噬魂！",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    4,
                    6
                ]
            ]
        },
        "\t[唐佳成,N510]\b[this,4,6]哼！圣光守护！",
        {
            "type": "animate",
            "name": "emo",
            "loc": [
                4,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "support1",
            "loc": [
                4,
                6
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                4,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "heidong3",
            "loc": [
                4,
                5
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    5
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    6
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                4,
                3
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "heidong3",
            "loc": [
                4,
                7
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N510",
            "loc": [
                [
                    4,
                    3
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N484",
            "loc": [
                [
                    4,
                    7
                ]
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[黛默琳,N481]\b[this,4,7]难缠的家伙！",
        "\t[唐佳成,N510]\b[this,4,3]再来！",
        {
            "type": "jump",
            "from": [
                4,
                3
            ],
            "to": [
                4,
                5
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                4,
                7
            ],
            "to": [
                4,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "boss15",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "boss13",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "petit2",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "petit3",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "purify",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "skill2",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                4,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                5,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                3,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                3,
                5
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                3,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                4,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                5,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                5,
                5
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                5,
                6
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "vibrate",
            "direction": "diagonal1",
            "time": 2000,
            "speed": 10,
            "power": 10
        },
        {
            "type": "jump",
            "from": [
                4,
                5
            ],
            "to": [
                4,
                3
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                4,
                6
            ],
            "to": [
                4,
                7
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[唐佳成,N510]\b[this,4,3]不错嘛！",
        "\t[唐佳成,N510]\b[this,4,3]圣子殿下！",
        "\t[莫析辉,hero]\b[hero]知道！",
        "\t[唐佳成,N510]\b[this,4,3]再吃我一招！",
        {
            "type": "jump",
            "from": [
                4,
                3
            ],
            "to": [
                4,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "animate",
            "name": "explosion_small",
            "loc": [
                4,
                6
            ]
        },
        {
            "type": "animate",
            "name": "boss15",
            "loc": [
                4,
                6
            ]
        },
        {
            "type": "animate",
            "name": "boss13",
            "loc": [
                4,
                6
            ]
        },
        "\t[莫析辉,hero]\b[hero]光明之神的力量，光明绽放！",
        {
            "type": "animate",
            "name": "shengdun",
            "loc": [
                8,
                3
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "fire2",
            "loc": [
                4,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "yijianzhanqianye",
            "loc": [
                4,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "fire2",
            "loc": [
                6,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "yijianzhanqianye",
            "loc": [
                6,
                7
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "if",
            "condition": "(flag:shengqishi>=70)",
            "true": [
                "\t[黛默琳,N481]\b[this,4,7]啊啊啊啊啊！",
                "\t[深渊巨龙,E1159]\b[this,6,7]吼吼吼！",
                "\t[黛默琳,N481]\b[this,4,7]此事，我记着了！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
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
                            7
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            8,
                            7
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            8,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            9
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            9
                        ]
                    ],
                    "remove": true
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
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            9
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
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            10
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            10
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
                            7,
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
                            10
                        ]
                    ],
                    "remove": true
                },
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
                            5,
                            12
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            12
                        ]
                    ],
                    "remove": true
                },
                "\t[龙族族长,dragon]\b[this,6,3]多谢二位助龙族解除此次危机啊！",
                "\t[莫析辉,hero]\b[hero]举手之劳而已。",
                "\t[唐佳成,N510]\b[this,4,6]嗯，那殿下，我们回去吧！",
                "\t[莫析辉,hero]\b[hero]我想，我们应该先去\r[red]\\c[30]精灵王国\\c[]\r[]、兽人族、矮人族看看老同学了……",
                "\t[唐佳成,N510]\b[this,4,6]啊？",
                "\t[莫析辉,hero]\b[hero]黑暗神殿如今异常活跃，咱们多联系几个朋友吧，毕竟如今东凌帝国、南荒帝国、北寒帝国都陷入了混乱……emmm，西武帝国的皇帝也投靠了黛默琳，我一怒之下杀了他，现在也内乱了……我可能真的做错了……现在得赶紧想办法对付黑暗神殿！",
                "建议玩家在进入精灵王国之前通关魔界！",
                {
                    "type": "setBlock",
                    "number": "I357",
                    "loc": [
                        [
                            1,
                            1
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "I416",
                    "loc": [
                        [
                            11,
                            1
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "I621",
                    "loc": [
                        [
                            1,
                            11
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "I416",
                    "loc": [
                        [
                            11,
                            11
                        ]
                    ]
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
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            3
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            9
                        ]
                    ],
                    "floorId": "GM1",
                    "remove": true
                }
            ],
            "false": [
                "亲密度未达到70需要自己动手击败深渊巨龙"
            ]
        }
    ],
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
        "6,7": [
            "\t[黛默琳,N481]\b[this,4,7]啊啊啊啊啊！",
            "\t[深渊巨龙,E1159]\b[this,6,7]吼吼吼！",
            "\t[黛默琳,N481]\b[this,4,7]此事，我记着了！",
            {
                "type": "hide",
                "loc": [
                    [
                        4,
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
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        9
                    ]
                ],
                "remove": true
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
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        9
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
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        10
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        10
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
                        7,
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
                        10
                    ]
                ],
                "remove": true
            },
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
                        5,
                        12
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        12
                    ]
                ],
                "remove": true
            },
            "\t[龙族族长,dragon]\b[this,6,3]多谢二位助龙族解除此次危机啊！",
            "\t[莫析辉,hero]\b[hero]举手之劳而已。",
            "\t[唐佳成,N510]\b[this,4,6]嗯，那殿下，我们回去吧！",
            "\t[莫析辉,hero]\b[hero]我想，我们应该先去\r[red]\\c[30]精灵王国\\c[]\r[]、兽人族、矮人族看看老同学了……",
            "\t[唐佳成,N510]\b[this,4,6]啊？",
            "\t[莫析辉,hero]\b[hero]黑暗神殿如今异常活跃，咱们多联系几个朋友吧，毕竟如今东凌帝国、南荒帝国、北寒帝国都陷入了混乱……emmm，西武帝国的皇帝也投靠了黛默琳，我一怒之下杀了他，现在也内乱了……我可能真的做错了……现在得赶紧想办法对付黑暗神殿！",
            "建议玩家在进入精灵王国之前通关魔界！",
            {
                "type": "setBlock",
                "number": "I416",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I357",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I621",
                "loc": [
                    [
                        1,
                        11
                    ]
                ]
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
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        9
                    ]
                ],
                "floorId": "GM1",
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,510,  0,1135,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 92],
    [ 20,  0,  0,  0,484,  0,1136,  0,136,  0,  0,  0, 20],
    [ 20,  0,  0,  0,1137,1138,1140,1141,1142,  0,  0,  0, 20],
    [ 20,  0,  0,  0,1143,1144,1145,1147,1148,  0,  0,  0, 20],
    [ 20,  0,  0,  0,1149,1150,1151,1152,1153,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,1155,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20,1157,1158,  0, 20, 20, 20, 20, 20]
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
        12,
        6
    ]
}