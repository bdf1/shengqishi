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
                                "name": "item:I492",
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
            "\t[光明圣子,hero]五长老，你在这里干嘛",
            "\t[五长老,youngMan]听闻圣子殿下正在调查村庄的事，想必遇到了不少怪物，我特来指点一下",
            "\t[光明圣子,hero]五长老，请讲",
            "\t[五长老,youngMan]圣子殿下若是打不过怪物，尽管提升生命上限，这样就能打赢啦",
            "\t[光明圣子,hero]五长老说的是",
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
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20],
    [ 20,  0, 21,401,209,  0,210,  0,209,401, 21,  0, 20],
    [ 20,  0, 20, 20, 20, 20,434, 20, 20, 20,10294,  0, 20],
    [ 20, 81, 20, 28, 20,10110, 20,10110, 20, 27, 20,208, 20],
    [ 20,  0, 20,402,10294,428, 20, 22, 20,401, 20,  0, 20],
    [ 20, 33, 20,207, 81,598,542,595, 81,211, 20, 34, 20],
    [ 20,  0, 20, 81, 20,408, 20,435, 20,  0, 81,  0, 20],
    [ 20,208, 20,204, 20, 20, 20, 20, 20,  0,207,  0, 20],
    [ 20,  0,10294,  0,211,397,397,397, 20, 20,10294, 21, 20],
    [ 20,  0,206,  0, 20,10294,204, 20,10294,401, 20, 20, 20],
    [ 20, 20, 20,  0,404, 20,401,401, 20,399, 29, 21, 20],
    [ 20,416, 20,  0,128, 20,402,402, 81,208, 21, 21, 20],
    [ 20,401,208, 91, 20, 20, 20, 20,491, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        3,
        12
    ]
}