main.floors.HA8=
{
    "floorId": "HA8",
    "title": "东方护法 ",
    "name": "东方护法",
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
        "3,6": [
            "\t[闪影护法,E857]什么人！",
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        2,
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
        "0,6": {
            "floorId": "HA7",
            "loc": [
                12,
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
                        4
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
                        2,
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
                        11
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
    [145,145,145,  0,  0,  0,  0,  0,  0,  0,145,145,145],
    [145,145,145,  0,  0,  0,  0,  0,  0,  0,145,145,145],
    [145,145,145,  0,  0,  0,  0,  0,  0,  0,145,145,145],
    [ 94, 83,  0,  0,  0,  0,857,  0,  0,  0,145,145,145],
    [145,145,145,  0,  0,  0,  0,  0,  0,  0,145,145,145],
    [145,145,145,  0,  0,  0,  0,  0,  0,  0,145,145,145],
    [145,145,145,  0,  0,  0,  0,  0,  0,  0,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        0,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}