main.floors.XY1=
{
    "floorId": "XY1",
    "title": "光明学院 1 ",
    "name": "光明学院1",
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
        "7,8": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得三把黄钥匙",
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "operator": "+=",
                                "value": "3"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "5,8": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得一把蓝钥匙",
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
        ],
        "5,1": [
            "\t[罗涛,N582]\b[this]光明学院是光明神殿建立的学院，殿下身为圣子，是不需要考核就能进入的。学院就在里面，殿下快进去吧！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,4": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得三把黄钥匙",
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "operator": "+=",
                                "value": "3"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "5,4": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得一把蓝钥匙",
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
        ],
        "6,10": [
            "\t[莫析辉,hero]\b[hero]蝶影？",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            "\t[蝶影,N432]\b[this]圣子殿下！",
            "\t[莫析辉,hero]\b[hero]你也是光明学院的？",
            "\t[蝶影,N432]\b[this]圣子殿下说笑了，奴婢这天赋，怎么配进入光明学院……奴婢不过是给圣女殿下来送午餐罢了。",
            "\t[莫析辉,hero]\b[hero]好，那你快去吧！",
            "\t[蝶影,N432]\b[this]这周围的树木掩盖的怪物和宝物，你不想了解一下吗？",
            "\t[莫析辉,hero]\b[hero]哦？你有何高见啊？",
            "\t[蝶影,N432]\b[this]这周围的树木掩盖的怪物和宝物，呈轴对称，如果不知道被掩盖的是什么宝物或者怪物，那么看看它轴对称位置的是什么东西就知道了。",
            "\t[蝶影,N432]\b[this]圣子殿下，给你……",
            {
                "type": "setValue",
                "name": "item:I719",
                "operator": "+=",
                "value": "1"
            },
            "\t[莫析辉,hero]\b[hero]这是什么？",
            "\t[蝶影,N432]\b[this]这是圣女殿下所用的功法……唉，圣子殿下，你就当没见过奴婢吧！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,1": {
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
                "\t[${flag:shengqishi_name},N472]\b[this]圣子殿下。",
                "\t[莫析辉,hero]\b[hero]你怎么也进来了。",
                "\t[${flag:shengqishi_name},N472]\b[this]嘿嘿，是教皇陛下看我天赋很高，让我进入光明学院的，嘻嘻",
                "\t[莫析辉,hero]\b[hero]那还不错，希望你能尽快变强，成为光明骑士！",
                "\t[${flag:shengqishi_name},N472]\b[this]光明骑士？不，我要成为圣子殿下的守护骑士……",
                "\t[莫析辉,hero]\b[hero]好，我很期待。",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "GM1",
            "loc": [
                3,
                0
            ]
        },
        "6,0": {
            "floorId": "XY2",
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
    [80531,80531,80531,80531,80531,80531, 91,80531,80531,80531,80531,80531,80531],
    [80531,687,80531,701,80531,582,  0,472,80531,701,80531,687,80531],
    [80531,686,80531,714,80531,  0,  0,  0,80531,714,80531,686,20249],
    [80531, 81,80531, 82,80531,80531,725,80531,80531, 82,80531, 81,80531],
    [80531, 81,80531, 82,80531,60408,686,60408,80531, 82,80531, 81,80277],
    [80531, 81,80531, 82,80531,80531,  0,80531,80531, 82,80531, 81,80531],
    [80531,  0,  0,  0,  0,  0,219,  0,  0,  0,  0,  0,80531],
    [80531, 81,80531, 82,80531,80531,  0,80531,80531, 82,80531, 81,80531],
    [80531, 81,80531, 82,80531,60408,686,60408,80531, 82,80531, 81,20249],
    [80531, 81,80531, 82,80531,80531,725,80531,80531, 82,80531, 81,80531],
    [80531,686,80531,714,80531, 21,435, 21,80531,714,80531,686,80531],
    [80531,687,80531,701,80531,684,  0,611,80531,701,80531,687,20249],
    [20249,80531,80531,80531,80531,80531, 91,80531,80531,80531,80531,80273,80274]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80244,80245],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80252,80253],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80260,80261],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80268,80269],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80240,80241,80242],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80248,80249,80250],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80256,80257,80258],
    [80202,80203,  0,  0,  0,  0,  0,  0,  0,  0,80264,80265,80266],
    [80210,80211,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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