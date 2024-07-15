main.floors.SN3=
{
    "floorId": "SN3",
    "title": "圣女宫 3 ",
    "name": "3",
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
        "2,2": [
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
                            "获得赤色光明法杖",
                            {
                                "type": "setValue",
                                "name": "item:I409",
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
            "floorId": "SN2",
            "loc": [
                6,
                0
            ]
        },
        "0,1": {
            "floorId": "SN4",
            "loc": [
                0,
                1
            ]
        },
        "12,1": {
            "floorId": "SN4",
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
    [141,141,141,141,141,141,141,141,141,141,141,141,141],
    [ 92,215,  0,141,683,141, 21,141,682,  0,206,  0, 94],
    [141,  0,10110,141,347,141, 21,141, 81,141,141,141,141],
    [141,141,141,141,215,141,218,141,211,141,  0,357,141],
    [141,346,605,216,  0,206,  0,  0,  0, 82,214,  0,141],
    [141,141,141,141,141, 81,141, 81,141,141,141,141,141],
    [141,  0, 81,344,141,  0,141,213,  0,683,  0,214,141],
    [141,222,141, 21,141,211,141,141,141,141,141, 81,141],
    [141,  0,141,213, 81,  0, 21,218,682,683,141,216,141],
    [141,350,141,141,141,141,  0,141,141,141,141, 30,141],
    [141,682,141,342,606,141,206,141,598,343,141,346,141],
    [141,683,141,682,211, 81,  0, 81,211, 22,141,348,141],
    [141,141,141,141,141,141, 91,141,141,141,141,141,141]
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