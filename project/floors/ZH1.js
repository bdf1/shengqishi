main.floors.ZH1=
{
    "floorId": "ZH1",
    "title": "智慧神殿1 ",
    "name": "智慧神殿1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    11,
                    3
                ]
            ],
            "floorId": "GM1",
            "remove": true
        },
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
        "\t[涂歆,N558]\b[this,6,3]欢迎你，老同学，来智慧神殿做客。",
        "\t[莫析辉,hero]\b[hero]切，涂歆，你这智慧神殿寥寥无几的几个人，甚至连默默建立的夜馨公会都比你这的人多呢。",
        "\t[涂歆,N558]\b[this,6,3]哈哈哈哈。夜馨公会……",
        "\t[莫析辉,hero]\b[hero]你笑什么？",
        "\t[涂歆,N558]\b[this,6,3]没什么，只是想起高兴的事情罢了。对了，你不想知道莫析家族最近的变故吗？",
        "\t[莫析辉,hero]\b[hero]无非就是北纳皇室和东凌皇室在作梗。难道你还有什么要跟我说的？",
        "\t[涂歆,N558]\b[this,6,3]那倒没有。我智慧神殿不偏向于你们任何一方……不过，作为同学，我还是可以和你做做生意的。",
        "\t[莫析辉,hero]\b[hero]呵呵，智慧圣子真是个做生意的料呢。不知你这里有什么好东西能卖给光明神殿呢？",
        "\t[涂歆,N558]\b[this,6,3]好东西，当然是好东西了。你看到那四件宝物了没有？那可是堪比圣物的宝贝呀。",
        "\t[莫析辉,hero]\b[hero]圣物？",
        "\t[涂歆,N558]\b[this,6,3]对。光明神殿有五件圣物，分别是光明法杖、光明宝典、复制镜、光明斗篷、光明法书。\n光明法杖提升光明使用者的魔法强度。\n光明宝典能够源源不断地治愈别人。\n复制镜能够复制敌人的力量。\n光明斗篷可以抵挡强大的攻击。\n光明法术能够召唤天使、神将来战斗。",
        "\t[涂歆,N558]\b[this,6,3]其中光明法杖、光明宝典、复制镜分别在你、光明圣女、还有那位原先的圣子手里吧？",
        "\t[涂歆,N558]\b[this,6,3]黑暗神殿也有五件圣物，分别是黑暗利刃、黑暗斗篷、极幽之靴、末影之戒、夜澜泣血。\n黑暗利刃提升黑暗使用者的攻击。\n黑暗斗篷能够隐藏自己的气息。\n极幽之靴能够瞬移到别人面前。\n末影之戒能够加快自己的速度。\n夜澜泣血能够不断汲取敌人的血。",
        "\t[莫析辉,hero]\b[hero]黑暗利刃、极幽之靴、末影之戒都在黑暗圣子墨奈手里，他一个人便掌握着黑暗神殿三件圣物，也难怪那么厉害……",
        "\t[莫析辉,hero]\b[hero]黑暗之神对墨奈可真是眷顾，我光明神殿的五件圣物分别在红衣主教萨鲁斯、我、光明圣女、光明准圣子手里，还有一件圣物被收回了。要是我有三件圣物，未必不能和墨奈单打独斗。",
        "\t[涂歆,N558]\b[this,6,3]哦？是吗？但我觉得现在黑暗神殿这一届的圣子圣女比你们光明神殿的三个厉害哦。虽然墨奈输了，但掌握夜澜泣血的那位，也是不弱。",
        "\t[莫析辉,hero]\b[hero]掌握夜澜泣血？谁啊？黑暗圣女么？掌握了黑暗神殿所有资源的黑暗圣子都被打败了，区区一个黑暗圣女，算什么？",
        "\t[涂歆,N558]\b[this,6,3]话不要说太满哦。光明圣子啊，我觉得你就算拥有一件圣物，也未必是黑暗圣女的对手呢。不如这样，从我这里买四件圣物，这样呢，你有了智慧神殿的四件圣物，就能和她抗衡了。",
        "\t[莫析辉,hero]\b[hero]呵呵，图穷匕见了吧，还不是要我买你的东西。",
        "\t[涂歆,N558]\b[this,6,3]有总不是坏事吧？光明圣子殿下，你那么有钱，还不能多买几个吗？",
        "\t[莫析辉,hero]\b[hero]行吧！那我看看有合适的就买了。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,2": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    "你已经购买了此物"
                ],
                "false": [
                    "幸运金币，购买价格5000金币，效果：击败敌人后额外获得12枚金币。",
                    {
                        "type": "choices",
                        "text": "\t[幸运金币,coin]选择",
                        "choices": [
                            {
                                "text": "购买",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=5000)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "5000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "确定"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "value": "true"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "playSound",
                                                "name": "操作失败"
                                            },
                                            "\t[幸运金币,coin]\b[this]你的金币不足！"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "不买",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "10,2": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "if",
                        "condition": "((!item:I421)&&(item:I723||core.hasEquip('I723')))",
                        "true": [
                            {
                                "type": "confirm",
                                "text": "确认要合成圣杯吗? （花费5000金币）",
                                "yes": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=5000)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "5000"
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(equip:1=='I723')",
                                                "true": [
                                                    {
                                                        "type": "unloadEquip",
                                                        "pos": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(equip:3=='I723')",
                                                "true": [
                                                    {
                                                        "type": "unloadEquip",
                                                        "pos": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I722",
                                                "operator": "+=",
                                                "value": "-1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I723",
                                                "operator": "+=",
                                                "value": "-1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I421",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:manamax",
                                                "value": "-1"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "playSound",
                                                "name": "操作失败"
                                            },
                                            "你的金币不足！"
                                        ]
                                    }
                                ],
                                "no": []
                            }
                        ],
                        "false": [
                            "你已经购买了此物"
                        ]
                    }
                ],
                "false": [
                    "魔力卷轴，购买价格5000金币，效果：击败敌人后额外获得敌人生命值20‱再开根号的魔力值，最多50点。",
                    {
                        "type": "choices",
                        "text": "\t[魔力卷轴,I722]选择",
                        "choices": [
                            {
                                "text": "购买",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=5000)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "5000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I722",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "确定"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "value": "true"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "playSound",
                                                "name": "操作失败"
                                            },
                                            "\t[魔力卷轴,I722]\b[this]你的金币不足！"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "不买",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "2,8": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "if",
                        "condition": "((!item:I421)&&item:I722)",
                        "true": [
                            {
                                "type": "confirm",
                                "text": "确认要合成圣杯吗? （花费5000金币）",
                                "yes": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=5000)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "5000"
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(equip:1=='I723')",
                                                "true": [
                                                    {
                                                        "type": "unloadEquip",
                                                        "pos": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(equip:3=='I723')",
                                                "true": [
                                                    {
                                                        "type": "unloadEquip",
                                                        "pos": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I722",
                                                "operator": "+=",
                                                "value": "-1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I723",
                                                "operator": "+=",
                                                "value": "-1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I421",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:manamax",
                                                "value": "-1"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "playSound",
                                                "name": "操作失败"
                                            },
                                            "你的金币不足！"
                                        ]
                                    }
                                ],
                                "no": []
                            }
                        ],
                        "false": [
                            "你已经购买了此物"
                        ]
                    }
                ],
                "false": [
                    "生命卷轴，购买价格5000金币，效果：击败敌人后额外获得5‰最大生命值的生命。",
                    {
                        "type": "choices",
                        "text": "\t[生命卷轴,I723]选择",
                        "choices": [
                            {
                                "text": "购买",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=5000)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "5000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I723",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "确定"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "value": "true"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "playSound",
                                                "name": "操作失败"
                                            },
                                            "\t[生命卷轴,I723]\b[this]你的金币不足！"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "不买",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "10,8": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    "你已经购买了此物"
                ],
                "false": [
                    "天命之盾，购买价格40000金币，效果：是战士所用的强大道具",
                    {
                        "type": "if",
                        "condition": "(flag:shengqishi>=30)",
                        "true": [
                            {
                                "type": "choices",
                                "text": "\t[天命之盾,I1086]选择",
                                "choices": [
                                    {
                                        "text": "购买",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(status:money>=40000)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:money",
                                                        "operator": "-=",
                                                        "value": "40000"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "item:I1086",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "playSound",
                                                        "name": "确定"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "switch:A",
                                                        "value": "true"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "playSound",
                                                        "name": "操作失败"
                                                    },
                                                    "\t[天命之盾,I1086]\b[this]你的金币不足！"
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "不买",
                                        "action": []
                                    }
                                ]
                            }
                        ],
                        "false": [
                            "臭弟弟，这是战士才能使用的盾，你一个魔法师就别凑热闹了。"
                        ]
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "if",
                        "condition": "((item:I1115 && core.hasEquip('I1116'))||(item:I1116 && core.hasEquip('I1115')))",
                        "true": [
                            {
                                "type": "unloadEquip",
                                "pos": 0
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "((item:I1115===1)&&(item:I1116===1))",
                        "true": [
                            "\t[涂歆,N558]\b[this]想不到，你竟然能够同时获得这两种神杖！",
                            "\t[涂歆,N558]\b[this]我来试试，嘛哩嘛哩哄！",
                            {
                                "type": "animate",
                                "name": "chuansong",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            {
                                "type": "setValue",
                                "name": "item:I1115",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I1116",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I595",
                                "operator": "+=",
                                "value": "1"
                            }
                        ],
                        "false": [
                            "\t[涂歆,N558]\b[this]生命卷轴和魔力卷轴为咸鱼卷轴，MAX玩家不建议购买"
                        ]
                    }
                ],
                "false": [
                    "\t[涂歆,N558]\b[this]我在研究一种让两种对立的力量融合在一起的宝物。如果你同时有\r[yellow]\\c[30]光明神杖\\c[]\r[]和\\c[30]黑暗神杖\\c[]，我可以试试能不能炼成更强大的神杖哦。",
                    "\t[莫析辉,hero]\b[hero]好你个涂歆，你有毛病吧？光明神殿和黑暗神殿水火不容，我怎么同时获得光明神杖和黑暗神杖。而且世界上有黑暗神杖这种东西吗？",
                    "\t[涂歆,N558]\b[this]有的有的，光明神杖是光明法杖的究极形态，黑暗神杖嘛，也是黑暗利刃的究极形态。黑暗利刃在刺客手里是利刃，在法师手里，就变成了法杖，你可以去找找看。",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "true"
                    },
                    "\t[涂歆,N558]\b[this]生命卷轴和魔力卷轴为咸鱼卷轴，MAX玩家不建议购买"
                ]
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "ZL7",
            "loc": [
                0,
                6
            ]
        },
        "0,6": {
            "floorId": "GM1",
            "loc": [
                12,
                3
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
    [90262,90263,90261,90262,90263,90253,90254,90255,90261,90262,90263,90261,90262],
    [90270,90271,90269,90270,90271,90261,90262,90263,90269,90270,90271,90269,90270],
    [  0,  0,90656,  0,  0,90269,90270,90271,  0,  0,90656,  0,  0],
    [  0,  0,90664,  0,  0,  0,558,  0,  0,  0,90664,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 94,  0,  0,  0,  0,90641,90642,90643,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,90649,90650,90651,  0,  0,  0,  0,  0],
    [  0,  0,90656,  0,  0,  0,  0,  0,  0,  0,90656,  0,  0],
    [  0,  0,90664,  0,  0,  0,  0,  0,  0,  0,90664,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0, 53,  0,  0,  0,  0,  0,  0,  0,722,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90633,90634,90635,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,723,  0,  0,  0,  0,  0,  0,  0,1086,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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