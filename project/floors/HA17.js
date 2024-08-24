main.floors.HA17=
{
    "floorId": "HA17",
    "title": "北方护法",
    "name": "北方护法",
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
        "6,8": [
            "\t[极炽护法,E855]什么人！",
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        9
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
        "6,12": {
            "floorId": "HA16",
            "loc": [
                6,
                0
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
                "number": "I1118",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        9
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
    [145,145,145,145,  0,  0,855,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,  0,  0,  0,  0,  0,145,145,145,145],
    [145,145,145,145,145,145,  0,145,145,145,145,145,145],
    [145,145,145,145,145,145,  0,145,145,145,145,145,145],
    [145,145,145,145,145,145, 83,145,145,145,145,145,145],
    [145,145,145,145,145,145, 91,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}