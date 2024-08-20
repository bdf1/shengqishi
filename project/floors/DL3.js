main.floors.DL3=
{
    "floorId": "DL3",
    "title": "东凌帝国 3 ",
    "name": "东凌帝国3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "X92969",
    "bgm": "jw.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N496",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "floorId": "DL2"
        },
        {
            "type": "if",
            "condition": "(flag:shengqishi>=10)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N513",
                    "loc": [
                        [
                            7,
                            6
                        ]
                    ]
                },
                "\t[莫析辉,hero]\b[hero]真是岂有此理！该死的图毅，真是藏也不藏了，安排的旅馆都这么敷衍",
                {
                    "type": "animate",
                    "name": "balloonhan",
                    "loc": [
                        5,
                        6
                    ]
                },
                {
                    "type": "animate",
                    "name": "balloonspeak",
                    "loc": [
                        7,
                        6
                    ]
                },
                "\t[${flag:shengqishi_name},N510]\b[this,7,6]啊这……殿下，你真的确定此事是图毅所做吗",
                "\t[莫析辉,hero]\b[hero]哼，能做到这一点的，教皇爷爷、大长老、黑暗教皇都可以，但是他们会做吗？我能想到的只有东凌皇室、北寒皇室、北纳家族一起做的",
                "\t[凌依,N574]\b[this,5,6]殿下说的是，大长老还硬说北纳家族没有参与，安撒和东方溪的对话，殿下可全听到了",
                "\t[${flag:shengqishi_name},N510]\b[this,7,6]大长老是为了光明神殿考虑，不希望殿下与光明圣女内斗",
                "\t[莫析辉,hero]\b[hero]是我要内斗吗？是她！平日里就算了，如今竟然对莫析家族做出如此事，我定然不会放过她！",
                {
                    "type": "animate",
                    "name": "heidong3",
                    "loc": [
                        6,
                        11
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N496",
                    "loc": [
                        [
                            6,
                            11
                        ]
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            7,
                            6
                        ]
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ]
                },
                "\t[${flag:shengqishi_name},N510]\b[this,7,6]什么人！",
                {
                    "type": "jump",
                    "from": [
                        6,
                        11
                    ],
                    "to": [
                        6,
                        7
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "jump",
                    "from": [
                        7,
                        6
                    ],
                    "to": [
                        6,
                        6
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "animate",
                    "name": "boss15",
                    "loc": [
                        6,
                        6
                    ]
                },
                {
                    "type": "animate",
                    "name": "boss13",
                    "loc": [
                        6,
                        6
                    ]
                },
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 2000,
                    "speed": 10,
                    "power": 10
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        7
                    ],
                    "to": [
                        6,
                        9
                    ],
                    "time": 500,
                    "keep": true
                },
                "\t[${flag:shengqishi_name},N510]哪里走！",
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            6,
                            9
                        ]
                    ]
                },
                {
                    "type": "animate",
                    "name": "light",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N535",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                {
                    "type": "animate",
                    "name": "boss15",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "animate",
                    "name": "boss13",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 2000,
                    "speed": 10,
                    "power": 10
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        9
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                {
                    "type": "setBlock",
                    "number": "N466",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                "\t[芹宣,N466]\b[this,6,10]这是什么人！",
                "\t[莫析辉,hero]\b[this,6,4]定是图毅派来刺杀我的！快追！",
                "\t[${flag:shengqishi_name},N510]\b[this,6,6]是！",
                {
                    "type": "jump",
                    "from": [
                        6,
                        6
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                {
                    "type": "jump",
                    "from": [
                        5,
                        6
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                "\t[芹宣,N466]\b[this,6,10]此人功力不俗，我也去看看",
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        11
                    ],
                    "time": 500
                },
                {
                    "type": "moveAction"
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 500,
                    "steps": [
                        "up:3"
                    ]
                },
                "\t[莫析辉,hero]\b[hero]眼见他是进了东凌皇宫"
            ],
            "false": [
                "\t[莫析辉,hero]\b[hero]真是岂有此理！该死的图毅，真是藏也不藏了，安排的旅馆都这么敷衍",
                {
                    "type": "animate",
                    "name": "balloonhan",
                    "loc": [
                        5,
                        6
                    ]
                },
                "\t[凌依,N574]\b[this,5,6]殿下，你真的确定此事是图毅所做吗",
                "\t[莫析辉,hero]\b[hero]哼，能做到这一点的，教皇爷爷、大长老、黑暗教皇都可以，但是他们会做吗？我能想到的只有东凌皇室、北寒皇室、北纳家族一起做的",
                "\t[凌依,N574]\b[this,5,6]殿下说的是，大长老还硬说北纳家族没有参与，安撒和东方溪的对话，殿下可全听到了",
                "\t[莫析辉,hero]\b[hero]平日里就算了，如今竟然对莫析家族做出如此事，我定然不会放过她！",
                {
                    "type": "animate",
                    "name": "heidong3",
                    "loc": [
                        6,
                        11
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N496",
                    "loc": [
                        [
                            6,
                            11
                        ]
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ]
                },
                "\t[凌依,N574]\b[this,5,6]什么人！",
                {
                    "type": "jump",
                    "from": [
                        6,
                        11
                    ],
                    "to": [
                        6,
                        7
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "jump",
                    "from": [
                        5,
                        6
                    ],
                    "to": [
                        6,
                        6
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "animate",
                    "name": "boss15",
                    "loc": [
                        6,
                        6
                    ]
                },
                {
                    "type": "animate",
                    "name": "boss13",
                    "loc": [
                        6,
                        6
                    ]
                },
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 2000,
                    "speed": 10,
                    "power": 10
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        6
                    ],
                    "to": [
                        6,
                        5
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        7
                    ],
                    "to": [
                        6,
                        9
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                "\t[凌依,N574]\b[this,6,5]好强……唔……",
                "\t[莫析辉,hero]\b[hero]你没事吧，凌依。",
                "\t[凌依,N574]\b[this,6,5]属下没事！这就去追！",
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            6,
                            9
                        ]
                    ]
                },
                {
                    "type": "animate",
                    "name": "light",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N535",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                {
                    "type": "animate",
                    "name": "boss15",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "animate",
                    "name": "boss13",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 2000,
                    "speed": 10,
                    "power": 10
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        9
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                {
                    "type": "setBlock",
                    "number": "N466",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                "\t[芹宣,N466]\b[this,6,10]这是什么人！",
                "\t[莫析辉,hero]\b[this,6,4]定是图毅派来刺杀我的！快追！",
                "\t[凌依,N574]\b[this,6,5]是！",
                {
                    "type": "jump",
                    "from": [
                        6,
                        5
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                {
                    "type": "jump",
                    "from": [
                        5,
                        6
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                "\t[芹宣,N466]\b[this,6,10]此人功力不俗，我也去看看",
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "to": [
                        6,
                        12
                    ],
                    "time": 500
                },
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        11
                    ],
                    "time": 500
                },
                {
                    "type": "moveAction"
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 500,
                    "steps": [
                        "up:3"
                    ]
                },
                "\t[莫析辉,hero]\b[hero]眼见他是进了东凌皇宫"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "DL2",
            "loc": [
                10,
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
    [90041,90041,90041,90041,90041,90041,90041,90041,90041,90041,90041,90041,90041],
    [90041,90041,90041,90041,90041,90041,90041,90041,90041,90041,90041,90041,90041],
    [90041,90041,41426,41427,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,41434,41435,  0,  0,91015,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,577,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,  0,  0,  0,  0,  0,  0,  0,  0,  0,90041,90041],
    [90041,90041,50165,50165,  0,  0,  0,  0,  0,50165,50165,90041,90041],
    [90041,90041,90041,90041,90041,90041, 91,90041,90041,90041,90041,90041,90041]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,50038,  0,  0,50124,  0,  0,50038,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50132,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,50157,50157,  0,  0,  0,  0,  0,50157,50157,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,91015,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,91023,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ]
}