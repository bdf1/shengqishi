main.floors.BH10=
{
    "floorId": "BH10",
    "title": "北寒小道 10 ",
    "name": "北寒小道10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,3": [
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
        "2,5": [
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
                            "获得2点防御力",
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "2"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "2,4": [
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
                            "获得1点攻击力",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "6,11": [
            "\t[罗涛,N582]\b[this]圣子殿下，前面有一群怪物，不过属下认为正是你大显身手的时候。",
            "\t[莫析辉,hero]\b[hero]哼，真是够逊的，要本少爷亲自出手，一边去，看本少爷来收拾它们。",
            "\t[罗涛,N582]\b[this]是！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "BH9",
            "loc": [
                6,
                12
            ]
        },
        "6,0": {
            "floorId": "BH11",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_BH10_5_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_BH10_7_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setBlock",
                "number": "demonPriest",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            "\t[希羽,demonPriest]\b[this,6,2]圣子殿下远道而来，朕有失远迎啊！",
            {
                "type": "setBlock",
                "number": "N585",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            "\t[罗涛,N582]\b[this,6,6]这位就是北寒帝国的皇帝，希羽了。",
            "\t[莫析辉,hero]\b[hero]有劳陛下远迎，我此次前往北寒帝国，只是为了向北寒皇室提亲。",
            "\t[希羽,demonPriest]\b[this,6,2]啊？不知圣子殿下看上了哪位公主呢？是大公主希静吗？",
            "\t[莫析辉,hero]\b[hero]不是。",
            "\t[希羽,demonPriest]\b[this,6,2]莫非是二公主希醉蝶？",
            "\t[莫析辉,hero]\b[hero]不是。",
            "\t[希羽,demonPriest]\b[this,6,2]莫非是四公主希宫白？",
            "\t[莫析辉,hero]\b[hero]是您的三公主希娜。",
            "\t[希羽,demonPriest]\b[this,6,2]！！！",
            "\t[希羽,demonPriest]\b[this,6,2]希娜？圣子殿下，可知道希娜修炼禁术，是个邪修？",
            "\t[莫析辉,hero]\b[hero]修炼黑暗法术才是邪修，心向光明，便是正道。陛下，请答应我向希娜公主的提亲。",
            "\t[希羽,demonPriest]\b[this,6,2]这……只是小女并不在北寒帝国……",
            {
                "type": "setBlock",
                "number": "N648",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            "\t[希娜,N645]\b[this,6,10]父皇，孩儿回来了。",
            "\t[希羽,demonPriest]\b[this,6,2]哼，朕可没有你这样修炼禁术的女儿！",
            "\t[希娜,N645]\b[this,6,10]呵，但是女儿给你找了一个这么好的女婿，您不高兴吗？",
            "\t[莫析辉,hero]\b[hero]陛下？",
            "\t[希羽,demonPriest]\b[this,6,2]唉，既是光明圣子殿下看上了你，那你就回来吧。",
            "\t[希娜,N645]\b[this,6,10]多谢父皇。",
            "\t[希羽,demonPriest]\b[this,6,2]圣子殿下，告辞了。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[莫析辉,hero]\b[hero]希娜，按照约定，我已经与你订了婚约。你该解除我的禁术了吧？",
            "\t[希娜,N645]\b[this,6,10]嗯，谢了。",
            {
                "type": "setValue",
                "name": "item:I673",
                "operator": "-=",
                "value": "1"
            },
            "\t[莫析辉,hero]\b[hero]哼！",
            "\t[希娜,N645]\b[this,6,10]我先走一步了，圣子殿下。",
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
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            "\t[罗涛,N582]\b[this,6,6]殿下，光明圣女殿下前几天还请您谈论光明法术，您要不要过去一趟？",
            "\t[莫析辉,hero]\b[hero]好，那走吧！正好没事做。",
            "\t[罗涛,N582]\b[this,6,6]是！",
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
                "type": "hide",
                "loc": [
                    [
                        9,
                        11
                    ]
                ],
                "floorId": "GM1",
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,7": {
            "0": {
                "condition": "flag:door_BH10_6_7==12",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_BH10_6_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "5,4": {
            "0": {
                "condition": "flag:door_BH10_5_4==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_BH10_5_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,4": {
            "0": {
                "condition": "flag:door_BH10_7_4==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_BH10_7_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140,140,140,140,140,140, 91,140,140,140,140,140,140],
    [140,140,140,140,140,  0,10295,  0,140,140,140,140,140],
    [140,140,140,140,140,140,  0,140,140,140,140,140,140],
    [140,140,10110,711, 21,140,211,140,606,345,598,140,140],
    [140,140,10110,711, 21, 85,  0, 85,606,345,598,140,140],
    [140,140,10110,711, 21,140,  0,140,606,345,598,140,140],
    [140,140,140,140,140,140,  0,140,140,140,140,140,140],
    [140,140,140,140,140,140, 85,140,140,140,140,140,140],
    [140,681,140,210,210,210,  0,210,210,210,140,681,140],
    [140,682,140,209,209,209,  0,209,209,209,140,682,140],
    [140,681,140,140,140,140, 82,140,140,140,140,681,140],
    [140, 81, 81, 81,  0,  0,582,  0,  0, 81, 81, 81,140],
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