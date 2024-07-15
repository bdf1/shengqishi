main.floors.BH8=
{
    "floorId": "BH8",
    "title": "北寒小道 8 ",
    "name": "北寒小道8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,11": [
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
                            "获得生命上限200",
                            {
                                "type": "setValue",
                                "name": "status:hpmax",
                                "operator": "+=",
                                "value": "200"
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
            "floorId": "BH7",
            "loc": [
                6,
                0
            ]
        },
        "12,1": {
            "floorId": "BH9",
            "loc": [
                12,
                1
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
    [140,681,140,680,140, 21,140,  0,710,  0,209,  0, 94],
    [140,606,140,681,140, 21,140, 81,140,140,140,140,140],
    [140, 27,140,680,140,724,140,205, 81,204, 21,343,140],
    [140,  0,210,  0,209,  0,140,605,140,  0,342,681,140],
    [140,140,140,140,140, 81,140,  0,140,140,140,140,140],
    [140,692,  0,205,  0, 27,  0,202,140,  0,680,693,140],
    [140, 82,140,140, 81,140,140,  0, 81,724,344,693,140],
    [140,209,140,  0,221,  0,140, 21,140,140,140,140,140],
    [140, 21,140,348,599,694,140,  0,140,  0,680,681,140],
    [140,693,140,140,140,140,140,201, 81,217,680,681,140],
    [140,724, 29,682,10110,140,  0,  0,140,  0,680,681,140],
    [140,140,140,140,140,140, 91,140,140,140,140,140,140]
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