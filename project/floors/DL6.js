main.floors.DL6=
{
    "floorId": "DL6",
    "title": "东凌帝国 6 ",
    "name": "东凌帝国6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X20061",
    "bgm": "jw.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,7": [
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
                            "东凌皇帝密函\n进入莫析家族后，协助安撒击杀莫析宙，不要留下一个活口！\n东方溪收！",
                            "\t[莫析辉,hero]\b[hero]好你个图毅，这回看你怎么说！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        1
                                    ]
                                ],
                                "floorId": "DL9",
                                "remove": true
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "DL5",
            "loc": [
                12,
                6
            ]
        },
        "6,12": {
            "floorId": "DL7",
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
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049, 28,779, 81,684,50049,613,613,50049,50049,50049,50049],
    [50049,50049,686, 29,50049,  0, 81,781,613,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,780,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049,684, 27,  0,  0,778,  0,684,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,1077,50049,  0,777, 81,  0, 92],
    [50049,50049,10110,782,1077,50049,777,50049, 81,50049,50049,50049,50049],
    [50049,50049,50049,50049,1077,50049,  0,50049,778,50049,344,50049,50049],
    [50049,50049,604,50049,1077,50049, 21,50049,  0, 82,781,50049,50049],
    [50049,50049,604,779,  0, 83,  0,50049, 29,50049,698,50049,50049],
    [50049,50049,604,50049, 21,50049,778,50049,685,50049, 27,50049,50049],
    [50049,50049,50049,50049,50049,50049, 93,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        12,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}