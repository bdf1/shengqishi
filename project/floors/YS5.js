main.floors.YS5=
{
    "floorId": "YS5",
    "title": "隐世学院 5 ",
    "name": "隐世学院5",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,9": [
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
                            "获得防御+20",
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "20"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
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
                            "获得初阶神之血*5",
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
        ]
    },
    "changeFloor": {
        "1,0": {
            "floorId": "YS4",
            "loc": [
                1,
                0
            ]
        },
        "0,6": {
            "floorId": "YS6",
            "loc": [
                0,
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
    [140, 93,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0, 21,246, 81,  0, 81,251,599,685,140,10110,140],
    [140,356,  0,685,140,736,140,  0,599,613,140,  0,140],
    [140,140,140,140,140,  0,140,140,140,140,140,244,140],
    [140,686,686,686,229,  0,685,  0,736,  0,696,  0,140],
    [140,140,140,140, 83,140,140,245,140,140, 81,140,140],
    [ 92,251,  0, 21,  0,140, 21, 21, 21,140,246,  0,140],
    [140,140,140,140,244,140,140,140,140,140,  0,686,140],
    [140,361,711,140, 81,140,612,  0,357,140,140, 81,140],
    [140,251,360,140,  0,140,  0,229,  0,140,10110,244,140],
    [140, 81,140,140,  0,140,140, 81,140,140,686,  0,140],
    [140,  0,685,  0,246, 82,  0,686,  0,736,  0, 21,140],
    [140,140,140,140,140,140,140,140,140,140,140,140,140]
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
        1,
        0
    ]
}