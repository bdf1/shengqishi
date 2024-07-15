main.floors.SN4=
{
    "floorId": "SN4",
    "title": "圣女宫 4 ",
    "name": "4",
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
                            "获得红钥匙*1",
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
        "0,1": {
            "floorId": "SN3",
            "loc": [
                0,
                1
            ]
        },
        "12,1": {
            "floorId": "SN3",
            "loc": [
                12,
                1
            ]
        },
        "11,12": {
            "floorId": "SN5",
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
    [141,141,141,141,141,141,141,141,141,141,141,141,141],
    [ 92,  0,218,  0,682,222,213, 21,  0,211,  0,  0, 92],
    [141,141,141,141, 81,141,141,141,  0,141, 81,141,141],
    [141, 21, 21,141,  0,141,684,141,206,141,218,682,141],
    [141, 21, 22,141,211,141,349,141,  0,141,682,683,141],
    [141,  0,216, 81,  0,141,214,141,359,141,141,141,141],
    [141,141,141,141,  0,213,  0,682, 81,211,  0,352,141],
    [141,683,  0,141, 81,141,141, 82,141,141,695,  0,141],
    [141,342,213, 81,206,141,  0,206,  0,141,  0,141,141],
    [141,682,  0,141, 21,141,214,141,215,141,206,141,141],
    [141,141,141,141,359,141,682,141,694,141,  0,693,141],
    [141,10110,682,343,218,141,712,141, 49,141,605,  0,141],
    [141,141,141,141,141,141,141,141,141,141,141, 93,141]
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
        1
    ]
}