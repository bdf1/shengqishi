main.floors.HA14=
{
    "floorId": "HA14",
    "title": "南方护法 ",
    "name": "南方护法",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X140137",
    "bgm": "gentaiyangxishuozaijian.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "\t[离火护法,E856]什么人！",
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "HA10",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "setBlock",
                "number": "I350",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueKey",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I351",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I1118",
                "loc": [
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        10
                    ]
                ],
                "floorId": "HA15",
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [145,145,145,145,145,145, 93,145,145,145,145,145,145],
    [145,145,145,145,145,145, 83,145,145,145,145,145,145],
    [145,145,145,145,145,145,  0,145,145,145,145,145,145],
    [145,145,145,145,145,145,  0,145,145,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,856,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ],
    "bg2map": [

],
    "fg2map": [

]
}