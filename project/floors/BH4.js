main.floors.BH4=
{
    "floorId": "BH4",
    "title": "北寒小道 4 ",
    "name": "北寒小道4",
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
        "3,8": [
            "\t[罗涛,N582]\b[this]这只橙史莱姆可以回复你的生命值，殿下，我特地为你留下来的。",
            "\t[莫析辉,hero]\b[hero]干的不错，你继续去开路吧。",
            "\t[罗涛,N582]\b[this]属下告退。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,11": [
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
                            "获得50金币",
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "50"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "0,1": {
            "floorId": "BH3",
            "loc": [
                0,
                1
            ]
        },
        "0,6": {
            "floorId": "BH5",
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [ 94,  0,680,201,  0,  0, 29,  0, 81,203,348,606,140],
    [140,140,140,140,140, 81,140,217,140,140,140,140,140],
    [140,342,  0,  0,140,202,140,692,680,140,  0,710,140],
    [140,  0,681,209, 81,680,140,140,201, 81,217,  0,140],
    [140,140,140,140,140,  0,140, 21, 29,140,  0,680,140],
    [ 92,680, 29, 21,  0,205,140,202,140,140,140,140,140],
    [140,140,140,140,140,  0, 82, 21,  0,209,359,680,140],
    [140,  0,724,582,  0,680,140,  0,140,140,140,140,140],
    [140, 21,140,140, 81,140,140,205,140,  0, 30,  0,140],
    [140,692,140,681,  0,209, 21,  0, 81,210,  0,694,140],
    [140,681,140,  0, 28,140,  0,10110,140,  0, 29,  0,140],
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
        0,
        1
    ]
}