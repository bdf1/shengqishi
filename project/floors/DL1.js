main.floors.DL1=
{
    "floorId": "DL1",
    "title": "东凌帝国 1 ",
    "name": "东凌帝国1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "X20061",
    "bgm": "jw.mp3",
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
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "right:3"
            ]
        },
        "\t[莫析辉,hero]\b[hero]准圣子哥哥，你怎么来了。",
        "\t[葛尔丹,N566]\b[this,7,6]圣子弟弟，近来光明神殿宽裕，哥哥我，晋升为光明圣子了。",
        "\t[莫析辉,hero]\b[hero]那就恭喜了。",
        "\t[葛尔丹,N566]\b[this,7,6]东凌帝国与北寒帝国的这场战争，令我很是伤感，没什么好恭喜的。",
        "\t[莫析辉,hero]\b[hero]圣子哥哥忧国忧民，可不是大喜么？",
        "\t[葛尔丹,N566]\b[this,7,6]呵呵，弟弟你也会开玩笑了。最近二长老和七长老在光明神殿留下的气息消失，教皇爷爷特派大长老与我、骑士队长来一探究竟。",
        "\t[莫析辉,hero]\b[hero]大长老也来了，看来教皇爷爷很重视这个事。",
        "\t[葛尔丹,N566]\b[this,7,6]废话不多说，咱们进入东凌帝国一探究竟吧！",
        "\t[莫析辉,hero]\b[hero]不用了，我在莫析家族探的差不多了，就是东凌皇室、北寒皇室、北纳家族干的！",
        "\t[汪周,N468]\b[this,8,7]圣子殿下，这东凌皇室、北寒皇室都好处理。可这北纳家族……可是圣女的家族啊……",
        "\t[葛尔丹,N566]\b[this,7,6]这是什么话？难道队长大人认为只能蜜西娅欺负圣子弟弟，就不许圣子弟弟还手了？",
        "\t[汪周,N468]\b[this,8,7]属下不是这个意思。",
        "\t[葛尔丹,N566]\b[this,7,6]圣子弟弟，为兄的提醒一下你，可不要在大长老面前透露出对蜜西娅的仇恨，否则啊，大长老肯定不会答应让你报仇的！",
        "\t[莫析辉,hero]\b[hero]我知道了，多谢哥哥提醒呢。不过，你当着卢轩的面……",
        "\t[葛尔丹,N566]\b[this,7,6]那就先进去，为圣子弟弟、还有二长老、七长老讨个公道吧！",
        "\t[莫析辉,hero]\b[hero]？？？",
        "\t[莫析辉,hero]\b[hero]好家伙，你收服卢轩不算啥，你还能让卢轩跟着你去对付北纳家族，我真佩服你！",
        {
            "type": "hide",
            "loc": [
                [
                    8,
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
                    7
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    7
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,1": [
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
                            "获得五把黄钥匙",
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "operator": "+=",
                                "value": "5"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "11,11": [
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
                            "获得三把蓝钥匙",
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "operator": "+=",
                                "value": "3"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "1,1": [
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
                            "获得五瓶神之血",
                            {
                                "type": "setValue",
                                "name": "item:I710",
                                "operator": "+=",
                                "value": "5"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "1,11": [
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
                            "获得一枚十二阶血红宝石",
                            {
                                "type": "setValue",
                                "name": "item:I616",
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
    "changeFloor": {
        "0,6": {
            "floorId": "ZL1",
            "loc": [
                12,
                6
            ]
        },
        "6,2": {
            "floorId": "DL2",
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
    [ 16, 16, 16, 16, 16,20346,20347, 16, 16, 16, 16, 16, 16],
    [ 16,10110,  0,  0, 16,20354,20355, 16,20284,  0,  0,10110, 16],
    [ 16,  0,  0,  0, 16, 16, 91, 16,  0,  0,  0,  0, 16],
    [ 16,  0,  0,  0,20284,  0,  0,  0,  0,  0,  0,  0, 16],
    [ 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16],
    [ 16,  0,  0,  0,  0,  0,  0,  0,579,  0,  0,  0, 16],
    [ 94,  0,  0,  0,  0,  0,  0,567,  0,  0,  0,  0, 16],
    [ 16,  0,  0,576,  0,  0,  0,  0,469,  0,  0,  0, 16],
    [ 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20284, 16],
    [ 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16],
    [ 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16],
    [ 16,10110,  0,  0,  0,20284,  0,  0,  0,  0,  0,10110, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,20276,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,20276,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20276,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,20276,  0,  0,  0,  0,  0,  0,  0],
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