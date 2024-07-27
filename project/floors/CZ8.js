main.floors.CZ8=
{
    "floorId": "CZ8",
    "title": "村庄 8 ",
    "name": "村庄8",
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
        "5,3": [
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
        "7,3": [
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
                                "name": "item:I416",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "4,11": [
            "\t[莫析辉,hero]\b[hero]三长老，你在这里干嘛",
            "\t[沂蒙贤,N570]\b[this]听闻圣子殿下正在调查村庄的事，想必遇到了不少怪物，我特来指点一下",
            "\t[莫析辉,hero]\b[hero]三长老，请讲",
            "\t[沂蒙贤,N570]\b[this]圣子殿下若是打不过怪物，尽管提升生命上限，这样就能打赢啦",
            "\t[莫析辉,hero]\b[hero]三长老说的是",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "3,12": {
            "floorId": "CZ7",
            "loc": [
                3,
                12
            ]
        },
        "6,0": {
            "floorId": "CZ9",
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
    [140,140,140,140,140,140, 91,140,140,140,140,140,140],
    [140,  0, 21,688,238,  0,239,  0,238,689, 21,  0,140],
    [140,  0,140,140,140,140,611,140,140,140,10294,  0,140],
    [140, 81,140,360,140,10110,140,10110,140,358,140,237,140],
    [140,  0,140,689,10294,373,140, 22,140,688,140,  0,140],
    [140,688,140,207, 81,755,720,737, 81,239,140,690,140],
    [140,  0,140, 81,140,691,140,614,140,  0, 81,  0,140],
    [140,237,140,731,140,140,140,140,140,  0,207,  0,140],
    [140,  0,10294,  0,239,610,610,610,140,140,10294, 21,140],
    [140,  0,745,  0,140,10294,731,140,10294,689,140,140,140],
    [140,140,140,  0,686,140,685,685,140,611,361, 21,140],
    [140,361,140,  0,570,140,687,687, 81,237, 21, 21,140],
    [140,688,237, 91,140,140,140,140,710,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        3,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}