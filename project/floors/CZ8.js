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
    [ 20, 20, 20, 20, 20, 20, 91, 20, 20, 20, 20, 20, 20],
    [ 20,  0, 21,688,238,  0,239,  0,238,688, 21,  0, 20],
    [ 20,  0, 20, 20, 20, 20,611, 20, 20, 20,10294,  0, 20],
    [ 20, 81, 20,360, 20,10110, 20,10110, 20,358, 20,237, 20],
    [ 20,  0, 20,689,10294,373, 20, 22, 20,688, 20,  0, 20],
    [ 20,686, 20,207, 81,755,720,737, 81,239, 20,686, 20],
    [ 20,  0, 20, 81, 20,690, 20,614, 20,  0, 81,  0, 20],
    [ 20,237, 20,731, 20, 20, 20, 20, 20,  0,207,  0, 20],
    [ 20,  0,10294,  0,239,610,610,610, 20, 20,10294, 21, 20],
    [ 20,  0,745,  0, 20,10294,204, 20,10294,685, 20, 20, 20],
    [ 20, 20, 20,  0,686, 20,685,685, 20,611,361, 21, 20],
    [ 20,361, 20,  0,570, 20,687,687, 81,237, 21, 21, 20],
    [ 20,688,237, 91, 20, 20, 20, 20,710, 20, 20, 20, 20]
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