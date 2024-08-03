main.floors.ZL6=
{
    "floorId": "ZL6",
    "title": "东凌走廊 6 ",
    "name": "东凌走廊6",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,1": [
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
                            "获得全属性100",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "100"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "100"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "+=",
                                "value": "100"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "11,0": {
            "floorId": "ZL5",
            "loc": [
                11,
                0
            ]
        },
        "11,12": {
            "floorId": "ZL7",
            "loc": [
                11,
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
    [20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336, 93,20336],
    [20336,690,690,690,20336,765,363,364,691,20336,10110,  0,20336],
    [20336,610,610,610,20336, 81,20336,20336,20336,20336,  0,690,20336],
    [20336, 21, 21, 21,20336,  0,764,691,  0, 81,762,  0,20336],
    [20336,20336,1076,20336,20336, 21,20336,  0,20336,20336,20336, 81,20336],
    [20336,690,  0,  0,763,  0,20336,763,20336, 21, 21,763,20336],
    [20336,20336,20336,20336,20336,762,20336, 81,20336,20336,20336,20336,20336],
    [20336,604,  0,  0,20336,  0,20336, 81,20336, 21, 21,763,20336],
    [20336,  0,604,765,1077,365,20336,  0,20336,20336,20336, 81,20336],
    [20336,604,  0,  0,20336,  0,763,  0,764,  0,690,  0,20336],
    [20336,20336,20336,20336,20336, 82,20336,20336,20336,20336,20336,20336,20336],
    [20336,616,703,366,766,  0, 21,  0,762,  0,702,  0,20336],
    [20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336, 93,20336]
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
        11,
        0
    ]
}