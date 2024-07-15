main.floors.MT0=
{
    "floorId": "MT0",
    "title": "主塔 0 层",
    "name": "0",
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "defaultGround": "ground",
    "images": [],
    "ratio": 1,
    "map": [
    [10136,10137,10138,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20],
    [10144,10145,10146,  0,  0,  0,  0,  0, 20,10199,10199,10199, 20],
    [10152,10153,10154,  0,  0,10207,10207,10207, 20,10199,10199,10199, 20],
    [  0,  0,  0,  0,  0,  0,  0,  0, 20,10199,10199,10199, 20],
    [  0, 20, 20,10157,10157,10157, 20,  0,  0,10207,  0,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20,  0,  0,  0,  0,  0, 20],
    [ 20,  0,10149, 20,10110,10110, 20,  0,  0,  0,10149,  0,10165],
    [ 20,  0,  0, 20,152,152, 20,10156,  0,  0,  0,  0,10173],
    [ 20,  0,  0, 20, 20, 20, 20, 20,  0,10238,  0,  0,10165],
    [ 20,  0,10161,10162,  0,  0,  0,  0,  0,  0,  0,  0,10173],
    [  0,  0,  0,  0,  0,  0,  0,  0, 87,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "firstArrive": [
        {
            "type": "setText",
            "background": "winskin.png",
            "time": 0
        }
    ],
    "parallelDo": "",
    "events": {
        "3,4": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 1,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[执杖伯伯]修改状态栏灰度/亮度",
                    "choices": [
                        {
                            "text": "亮度+0.1",
                            "need": "!flags._statusbrg_||flags._statusbrg_<1.5",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusbrg_ = flags._statusbrg_ + 0.1 || 1.1 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "亮度-0.1",
                            "need": "!flags._statusbrg_||flags._statusbrg_>0.1",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusbrg_ = flags._statusbrg_ - 0.1 || 0.9 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "灰度+10",
                            "need": "!flags._statusgry_||flags._statusgry_<100",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusgry_ = flags._statusgry_ + 10 || 10 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "灰度-10",
                            "need": "flags._statusgry_>10",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusgry_ = flags._statusgry_ - 10 || 0 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "爬",
                            "color": [
                                162,
                                162,
                                162,
                                1
                            ],
                            "action": []
                        }
                    ]
                }
            ]
        },
        "4,4": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 240,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[执杖伯伯]修改状态栏色相",
                    "choices": [
                        {
                            "text": "+20",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statuscol_ = flags._statuscol_ + 20 || 0 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "-20",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statuscol_ = flags._statuscol_ - 20 || 0 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "炫彩",
                            "condition": "!flags._coltrue_",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._coltrue_=true\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "关闭炫彩",
                            "condition": "flags._coltrue_",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._coltrue_=false\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "爬",
                            "color": [
                                162,
                                162,
                                162,
                                1
                            ],
                            "action": []
                        }
                    ]
                }
            ]
        },
        "5,4": [
            {
                "type": "choices",
                "text": "\t[执杖伯伯]换个背景",
                "choices": [
                    {
                        "text": "透明+0.1",
                        "need": "!flags._backalp_||flags._backalp_>0.1",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags._backalp_= flags._backalp_- 0.1 || 0.4;core.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "透明-0.1",
                        "need": "!flags._backalp_||flags._backalp_<0.9",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags._backalp_= flags._backalp_+ 0.1 || 0.6;core.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "去掉星空",
                        "condition": "!flags.starOff",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags.starOff=true\n}"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "加上星空",
                        "condition": "flags.starOff",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags.starOff=false\n}"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "换个图",
                        "action": [
                            "\t[执杖伯伯,wizard]你为什么不自己找一张"
                        ]
                    },
                    {
                        "text": "爬",
                        "color": [
                            162,
                            162,
                            162,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "8,10": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153]
],
    "fgmap": [

],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "beforeBattle": {},
    "cannotMoveIn": {}
}