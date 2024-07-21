main.floors.YS6=
{
    "floorId": "YS6",
    "title": "隐世学院 6 ",
    "name": "隐世学院6",
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
        "7,5": [
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
                            "获得一枚七阶血红宝石",
                            {
                                "type": "setValue",
                                "name": "item:I611",
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
        "0,6": {
            "floorId": "YS5",
            "loc": [
                0,
                6
            ]
        },
        "11,12": {
            "floorId": "YS7",
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,246,  0, 81,245,140,  0,251,354,355,356,140],
    [140,685,140,140,140,  0,140, 81,140,140,140,140,140],
    [140,  0, 81,685,140,362,140,  0,697,686,140, 21,140],
    [140,736,140,686,140,686,140,140,140,  0,140, 21,140],
    [140,  0,140,685,140,687,140,10110,140,229,140,246,140],
    [ 94, 21,140,140,140,140,140,251,140,  0, 82,  0,140],
    [140,  0,736,  0,599,  0,244,  0,140, 21,140,696,140],
    [140,140,140, 82,140,140,140,686,140,  0,140,  0,140],
    [140,  0,  0,246,  0,685,140,  0,140,244,140,736,140],
    [140, 81,140,140,140,  0,140,736, 81,  0,140,  0,140],
    [140,251,609,358,140,229, 81,  0,140,361,140,685,140],
    [140,140,140,140,140,140,140,140,140,140,140, 93,140]
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
        0,
        6
    ]
}