main.floors.ZL10=
{
    "floorId": "ZL10",
    "title": "东凌走廊 10 ",
    "name": "东凌走廊10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 4,
    "defaultGround": "X10006",
    "bgm": "zhuangkuoshishi.mp3",
    "firstArrive": [
        "\t[凌依,N574]\b[this,6,9]圣子殿下，这北寒帝国太嚣张了。您和希娜公主还是联姻，您还是光明神殿的圣子，他们竟敢……",
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[莫析辉,hero]\b[hero]北寒帝国，欺我太甚！",
        "\t[凌依,N574]\b[this,6,9]属下这就去集结光明神殿的军队，给他们来一场毁灭！",
        "\t[莫析辉,hero]\b[hero]慢！我的心中疑问太多了，得先弄明白再动手。",
        "\t[凌依,N574]\b[this,6,9]那这门口的守卫……",
        "\t[莫析辉,hero]\b[hero]哼，先不和他们起冲突……那边有一个地道，咱们从地道进去，先找到莫析家族的其他人，再作打算……",
        "\t[凌依,N574]\b[this,6,9]是！",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,11": [
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
                            "获得一瓶琼浆",
                            {
                                "type": "setValue",
                                "name": "item:I415",
                                "operator": "+=",
                                "value": "1"
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
                            "获得一瓶琼浆",
                            {
                                "type": "setValue",
                                "name": "item:I415",
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
        "6,12": {
            "floorId": "ZL9",
            "loc": [
                6,
                2
            ]
        },
        "6,3": {
            "floorId": "MT0",
            "loc": [
                6,
                12
            ]
        },
        "10,1": {
            "floorId": "MT1",
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
    [94407,94407,94856,94857,94858,94859,94860,94861,94862,94863,94407,94407, 16],
    [94407,  0,94864,94865,94866,94867,94868,94869,94870,94871, 91,94407, 16],
    [94407,  0,94872,94873,94874,94875,94876,94877,94878,94879,  0,94407, 16],
    [94407,  0,  0,  0,  0,10295, 91,10295,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,767,  0,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,94407, 16],
    [94407,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,94407, 16],
    [94407,10110,  0,  0,  0,  0,  0,  0,  0,  0,10110,94407, 16],
    [94399,94399,94399,94399,94399,94399, 91,94399,94399,94399,94399,94399, 16]
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