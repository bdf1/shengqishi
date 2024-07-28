main.floors.SR5=
{
    "floorId": "SR5",
    "title": "深入 5 ",
    "name": "深入5",
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
        "3,3": [
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
                            "获得100金币",
                            {
                                "type": "setValue",
                                "name": "status:money",
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
        "12,0": {
            "floorId": "SR4",
            "loc": [
                12,
                0
            ]
        },
        "0,6": {
            "floorId": "SR6",
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
    [151,151,151,151,151,151,151,151,151,747,  0,  0, 92],
    [151,  0,603,  0,742,  0,151,  0,  0, 81,151,151,151],
    [151, 81,151,151,151,365,151,746,151,748,  0,689,151],
    [151,743, 22,10110,151,  0,151,  0,151,151,151, 82,151],
    [151,  0,366,690,151,747, 82, 21,151,698,611,750,151],
    [151,151,151,151,151,  0,151,  0,151,698,611,  0,151],
    [ 92,689,  0,749,  0, 21,151,750,151,698,611,749,151],
    [151,151,151,151,151,  0,151,  0,151,151,151, 81,151],
    [151,  0,  0,743, 83,748,151,690,  0,748,  0,602,151],
    [151,358,358,358,151,  0,151,151, 81,151,151,151,151],
    [151,360,360,360,151,689,  0,151,747,363,364,365,151],
    [151,690,690,690,151,  0,749, 81,  0, 21,689,604,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
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
        0
    ]
}