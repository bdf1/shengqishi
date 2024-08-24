main.floors.HA19=
{
    "floorId": "HA19",
    "title": "西方护法 ",
    "name": "西方护法",
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
        "8,6": [
            "\t[黄金护法,E854]什么人！",
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        9,
                        6
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
        "12,6": {
            "floorId": "HA18",
            "loc": [
                0,
                6
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
                        7,
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
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I350",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I1117",
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
                        9,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        8
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
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,854,  0,  0,  0,  0, 83, 92],
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
        12,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}