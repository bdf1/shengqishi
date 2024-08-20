main.floors.YS1=
{
    "floorId": "YS1",
    "title": "隐世学院 1 ",
    "name": "隐世学院1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "cbzc.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:shengqishi>1)",
            "true": [
                {
                    "type": "changePos",
                    "direction": "down"
                },
                {
                    "type": "setBlock",
                    "number": "N472",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ]
                },
                "\t[${flag:shengqishi_name},N472]\b[this,6,7]哇，圣子殿下，这里好大呢，一点也不逊色于光明神殿……",
                "\t[莫析辉,hero]\b[hero]隐世学院不比光明神殿，你行事可不能冲动了。",
                "\t[${flag:shengqishi_name},N472]\b[this,6,7]是，圣子殿下！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "remove": true
                }
            ],
            "false": [
                {
                    "type": "changePos",
                    "direction": "down"
                },
                "\t[莫析辉,hero]\b[hero]隐世学院……不逊于光明学院的存在……"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [],
        "11,11": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗? (花费50点魔力)",
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
        "1,1": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗? (花费50点魔力)",
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
                            "获得一把攻击+20",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "20"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "6,6": {
            "floorId": "XY6",
            "loc": [
                6,
                6
            ]
        },
        "6,12": {
            "floorId": "YS2",
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,10110,  0,688, 81,229,  0,610,610,610,80552,80553, 20],
    [ 20,  0,356,  0, 20, 20, 20, 20, 81, 20,80560,80561, 20],
    [ 20,  0,246,  0, 20,689,354,355,251, 20,  0, 21, 20],
    [ 20, 20, 81, 20, 20,710,696, 21, 21, 20,712,  0, 20],
    [ 20,  0,356,  0, 20,20813,20814,20815, 21, 20,  0,246, 20],
    [ 20,244,  0,688,696,20821,20822,20823,356, 20, 20, 81, 20],
    [ 20, 81, 20, 20, 20, 20,  0, 20, 20, 20, 21,  0, 20],
    [ 20,696,  0,736,  0, 21,416, 21,  0,244,  0,610, 20],
    [ 20, 20, 20, 20, 20, 20, 81, 20, 20, 20, 81, 20, 20],
    [ 20,80496,80497, 20, 20,  0,736,  0, 20,  0,245,  0, 20],
    [ 20,80504,80505, 20, 20,360,  0,355, 20,362,  0,10110, 20],
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20]
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
        7
    ]
}