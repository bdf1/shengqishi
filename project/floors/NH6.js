main.floors.NH6=
{
    "floorId": "NH6",
    "title": "南荒帝国 6 ",
    "name": "南荒帝国6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:shengqishi>=40)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N510",
                    "loc": [
                        [
                            3,
                            10
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            10
                        ]
                    ]
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[${flag:shengqishi_name},N510]\b[this]殿下。",
                "\t[莫析辉,hero]\b[hero]怎么了？",
                "\t[${flag:shengqishi_name},N510]\b[this]我总感觉，我们像是掉进了一个巨大的阴谋里面。你和光明圣女内斗，这件事，像是被人在背后一直推着走一样……",
                "\t[莫析辉,hero]\b[hero]这不是阴谋，而是一个阳谋。即便我知道这是别人所设计的，但我依然要往里面跳的。灭门血仇，岂能不报？",
                "\t[${flag:shengqishi_name},N510]\b[this]那么，殿下，这里是我所收集的1000金币……",
                {
                    "type": "setValue",
                    "name": "status:money",
                    "operator": "+=",
                    "value": "1000"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "1,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_NH6_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_NH6_6_3==8",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_NH6_6_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,684,342,342,787,787,  0,787,787,343,343,684, 20],
    [ 20,684,342,342,787,787,  0,787,787,343,343,684, 20],
    [ 20, 20, 20, 20, 20, 20, 85, 20, 20, 20, 20, 20, 20],
    [ 21, 30,683, 20,788,788,  0,788,788, 20,683, 30, 21],
    [ 20, 27,786, 20,788,788,  0,788,788, 20,786, 28, 20],
    [ 20, 20, 82, 20, 20, 20, 83, 20, 20, 20, 82, 20, 20],
    [ 20,  0, 27,  0, 81,  0,785,  0, 81,  0, 28,  0, 20],
    [ 20,784,  0,683, 20,783, 20,783, 20,683,  0,784, 20],
    [ 20, 81, 20, 20, 20, 21, 20, 21, 20, 20, 20, 81, 20],
    [ 20,701,  0,  0, 20,784, 82,784, 20,  0,  0,614, 20],
    [ 20,  0, 29,783, 81,683, 20,683, 81,783, 29,  0, 20],
    [ 20, 91, 20, 20, 20, 20, 20, 20, 20, 20, 20, 93, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "yuanye.mp3",
    "flyPoint": [
        1,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}