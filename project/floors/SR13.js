main.floors.SR13=
{
    "floorId": "SR13",
    "title": "深入 13 ",
    "name": "深入13",
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
        "8,3": [
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
                            "获得30全属性",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "30"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "30"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "+=",
                                "value": "30"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "11,12": {
            "floorId": "SR12",
            "loc": [
                11,
                12
            ]
        },
        "1,0": {
            "floorId": "SR14",
            "loc": [
                1,
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
    [152, 91,152,152,152,152,152,152,152,152,152,152,152],
    [152,733, 81,  0,361,152, 21,152,  0,735, 81,  0,152],
    [152,734,152,613,  0,732,  0,152, 22,364,152,690,152],
    [152,358,152,152,152,152,733,152,10110,691,152,  0,152],
    [152,360,152,603,751, 81,  0,152,152,152,152,734,152],
    [152,690,152,691,363,152,690,  0,732,  0, 21,  0,152],
    [152,152,152,152,152,152,  0,152,152,152,152,152,152],
    [152,  0,690,  0,734, 81,732, 81,735,367,613,691,152],
    [152,751,152,1077,152,152,  0,152,152,152,152,152,152],
    [152, 21,152, 21,710,152,699,152,690,690,690,733,152],
    [152,366,152, 21,710,152,  0,152,152,152,152, 81,152],
    [152,614,152, 21,710,152,733,  0, 21,  0,732,  0,152],
    [152,152,152,152,152,152,152,152,152,152,152, 91,152]
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
        12
    ]
}