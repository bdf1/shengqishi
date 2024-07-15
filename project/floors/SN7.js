main.floors.SN7=
{
    "floorId": "SN7",
    "title": "圣女宫 7 ",
    "name": "7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "T1067",
    "bgm": "ending.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
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
                            "获得初阶神之血*1",
                            {
                                "type": "setValue",
                                "name": "item:I710",
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
        "12,6": {
            "floorId": "SN6",
            "loc": [
                12,
                6
            ]
        },
        "6,12": {
            "floorId": "SN8",
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
    [141,141,141,141,141,141,141,141,141,141,141,141,141],
    [141,682,  0,682,141,609,  0,682,141,684,141, 21,141],
    [141,  0,683,  0, 82,  0,355,  0,141,357,141,682,141],
    [141,  0,215,  0,141,  0,214,  0,141, 22,141, 21,141],
    [141,141, 81,141,141,141, 81,141,141,  0,141,218,141],
    [141,  0,  0,222,  0,682,  0,218,  0,219, 82,  0,141],
    [141, 81,141,141, 81,141,141,141, 81,141,141,  0, 92],
    [141,216,141, 29,218,692,141,  0,216,  0,141,  0,141],
    [141,694,141,  0, 27,  0,141,  0,359,  0,141,213,141],
    [141,347,141, 28,  0,213,141,352,  0,710,141,  0,141],
    [141,141,141,141,141, 83,141,141,141,141,141,344,141],
    [141,10110, 21,218,  0,  0,213,  0,682,  0,218,  0,141],
    [141,141,141,141,141,141, 93,141,141,141,141,141,141]
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
        12,
        6
    ]
}