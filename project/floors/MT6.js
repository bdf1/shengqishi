main.floors.MT6=
{
    "floorId": "MT6",
    "title": "莫析家族6 ",
    "name": "莫析家族6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "ground",
    "bgm": "21-30.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,2": [
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
                            "获得200护盾",
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "+=",
                                "value": "200"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "8,2": [
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
                            "获得一把红钥匙",
                            {
                                "type": "setValue",
                                "name": "item:redKey",
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
            "floorId": "MT5",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "MT7",
            "loc": [
                12,
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
    [10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041],
    [10041, 21, 22,10041,701,364,10041,614,363,10041, 22, 21,10041],
    [10041, 21, 21,10041,10110,366,10041,366,10110,10041, 21, 21,10041],
    [10041,773,  0,10041,  0,776,10041,776,  0,10041,  0,773,10041],
    [10041, 81,10041,10041,10041, 81,10041, 81,10041,10041,10041, 81,10041],
    [10041,  0,767,  0,  0,772,  0,365,  0,773,  0,690,10041],
    [ 92,363,10041,690,10041,10041,10041,10041,10041,10041,10041,  0,10041],
    [10041, 21,10041,  0, 81,775,365,690,363,768, 81,775,10041],
    [10041,  0,10041,768,10041,10041,10041,10041,10041,10041,10041,  0,10041],
    [10041,772, 82,612,  0,775,10041,691, 21,365,773, 21,10041],
    [10041,10041,10041,10041,10041, 81,10041,10041,10041,10041,10041,  0,10041],
    [10041,364,366,767, 81,690,  0,768,  0,690,  0,773,10041],
    [10041,10041,10041,10041,10041,10041, 91,10041,10041,10041,10041,10041,10041]
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