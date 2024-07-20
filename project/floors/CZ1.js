main.floors.CZ1=
{
    "floorId": "CZ1",
    "title": "村庄 1 ",
    "name": "村庄1",
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
        "6,1": [
            "\t[三长老,king]\b[this,6,1]呀，小圣子",
            "\t[光明圣子,hero]\b[down]三长老，您知道黑暗势力入侵的村庄在哪个方向吗",
            "\t[三长老,king]\b[this,6,1]我当然知道啦，就在这个方向，你快上去吧",
            "\t[光明圣子,hero]\b[down]多谢三长老",
            {
                "type": "move",
                "loc": [
                    6,
                    1
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "left:1"
                ]
            }
        ],
        "7,5": [
            "红宝石:提升攻击力\n蓝宝石:提升防御力\n绿宝石:提升护盾\n血红宝石:提升生命上限\n粉红宝石:提升魔力上限\n白宝石:进行加点\n黄宝石:提升攻击力、防御力和护盾\n血瓶:恢复血量\n钥匙:打开对应颜色的门\n神之血琼浆玉露:提升最大生命值百分比的生命值\n紫露魔力药水:提升最大魔力值百分比的魔力值\n星露:提升百分比的生命值和魔力值"
        ],
        "6,11": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    "\t[光明圣子]四长老，你这么坑我，不怕教皇爷爷和二长老找你算账吗",
                    "\t[四长老,recluse]\b[this]嘿嘿，有钱不赚非君子，我走啦",
                    {
                        "type": "comment",
                        "text": "下一条指令可视情况使用或不使用"
                    },
                    {
                        "type": "hide",
                        "remove": true,
                        "time": 250
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "这条路由我管\n你出50金币就让你过去。",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "(status:money>=50)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "50"
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
                                    "\t[四长老,recluse]\b[this]你的金币不足！"
                                ]
                            }
                        ],
                        "no": []
                    }
                ]
            }
        ],
        "9,6": [
            "\t[凌依,N1151]\b[this,9,6]凌依拜见圣子殿下",
            "\t[光明圣子,hero]\b[up]不必多礼，说说这里的情况吧",
            "\t[凌依,N1151]\b[this,9,6]好，教皇陛下还是担心殿下安危，派了三长老、四长老和七长老以及属下协助殿下",
            "\t[凌依,N1151]\b[this,9,6]不过属下认为，三长老毕竟是圣女的人，他的话不太可信，圣子殿下应当小心",
            "\t[光明圣子,hero]\b[up]好，我自有决断，你继续去探路",
            "\t[凌依,N1151]\b[this,9,6]属下遵命!",
            {
                "type": "hide",
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
                "floorId": "MT0",
                "remove": true
            }
        ],
        "1,6": [
            "\t[七长老,wizard]圣子宝贝，快过来，我给你开了一条路，加油哦",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "5,1": [
            "\t[三长老,king]\b[this,5,1]快去吧，嘿嘿"
        ],
        "10,7": [
            "遇到下方这种宝箱，可以使用50魔力值打开，可能获得的物品有钥匙、护盾、魔力药水、生命药水等"
        ],
        "10,8": [
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
                                "name": "status:money",
                                "operator": "+=",
                                "value": "250"
                            },
                            "你这个二百五，送你250金币!"
                        ]
                    }
                ],
                "no": []
            }
        ],
        "5,10": [
            "巅峰塔暂未开启"
        ],
        "7,3": {
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
                "\t[光明圣子]你在这里干嘛",
                "\t[乞丐,N1147]你要干什么",
                {
                    "type": "choices",
                    "text": "\t[光明圣子]选择",
                    "choices": [
                        {
                            "text": "我要你身后的宝石，还不速速滚开",
                            "action": [
                                "\t[乞丐,N1147]该死的光明圣子，我不会放过你的!",
                                {
                                    "type": "setValue",
                                    "name": "flag:A",
                                    "operator": "-=",
                                    "value": "1"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            7,
                                            3
                                        ]
                                    ],
                                    "remove": true
                                }
                            ]
                        },
                        {
                            "text": "无事",
                            "action": []
                        }
                    ]
                }
            ]
        },
        "2,7": [
            "计分方式:最大生命值*10+攻击力*10000+防御力*10000+护盾*6000+神之血*一定数值+紫露*一定数值+星露*一定数值(按照六长老商店金币以1比100换算，六长老商店没有的分数在500到2500之间)+当前生命值"
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "MT1",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
            "floorId": "CZ2",
            "loc": [
                6,
                12
            ]
        },
        "6,12": {
            "floorId": "CZ3",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "CZ4",
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
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,127,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20,70344,70345],
    [ 20, 20,10300,1064,10299,  0,  0,10289, 20, 20, 20,70352,70353],
    [ 94,125,  0,  0,  0,  0,  0,  0,  0,1151,  0,  0, 93],
    [ 20, 20,10289, 20,1063, 20,  0, 20, 20, 20,10289, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20,10110, 20, 20],
    [ 20, 20, 20, 20, 20,70392,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,70400,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,126, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 91, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        12,
        6
    ]
}