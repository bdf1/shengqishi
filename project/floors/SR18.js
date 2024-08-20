main.floors.SR18=
{
    "floorId": "SR18",
    "title": "深入 18 ",
    "name": "深入18",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,1": [
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
                            "获得一枚八阶白宝石",
                            {
                                "type": "setValue",
                                "name": "item:I604",
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
        "1,12": {
            "floorId": "SR17",
            "loc": [
                1,
                12
            ]
        },
        "6,0": {
            "floorId": "SR19",
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
    [152,152,152,152,152,152, 91,152,152,152,152,152,152],
    [152,611,366,231,  0,690,  0,735, 21,691,152,10110,152],
    [152,230,1077,152, 81,152,152,152,152,152,152,611,152],
    [152,  0, 21,152,751,  0,690,  0,735,  0,152,367,152],
    [152,698,152,152,152,152,152,152,152,611,152,751,152],
    [152,734,152,362, 21,231,365,711,152,  0, 81,734,152],
    [152,  0,152,152,152, 82,152,152,152,232,152,152,152],
    [152, 21,  0,735,  0,690,  0,751,  0,  0,231,365,152],
    [152,152,152,152,152,152, 81,152, 82,152, 21,358,152],
    [152,690,152,364,611,  0,232,152,232,152,690,360,152],
    [152,  0,152,152,152,152, 81,152,710,152,152,152,152],
    [152,  0,751,  0,698,  0,735,152,365,231,366,691,152],
    [152, 91,152,152,152,152,152,152,152,152,152,152,152]
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
        12
    ]
}