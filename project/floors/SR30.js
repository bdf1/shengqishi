main.floors.SR30=
{
    "floorId": "SR30",
    "title": "深入 30 ",
    "name": "深入30",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "autotile7",
    "bgm": "tiankong.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[莫析辉,hero]\b[hero]是决战的时候了！蜜茜娅，我来帮你。",
        {
            "type": "jumpHero",
            "loc": [
                6,
                7
            ],
            "time": 500
        },
        "\t[蜜西娅,N489]\b[this,6,8]莫析辉，你总算来了。",
        "\t[莫析辉,hero]\b[hero]光明神殿与黑暗神殿年轻一辈的决战，怎么能少了我呢？",
        "\t[墨奈,N477]\b[this,6,4]搞笑啊，年轻一辈的决战？蜜茜娅比我虚长几岁，输给了我。莫析辉，你也不比我小，一样输给了我。光明神殿到最终还是要光明圣子和光明圣女联手才能与我一战吗？哈哈哈哈哈！",
        "\t[莫析辉,hero]\b[hero]可恶……哼，你要是有黑暗圣女来帮忙，我也不介意啊！",
        "\t[墨奈,N477]\b[this,6,4]我不需要黑暗圣女，就能打败你们两个。",
        "\t[蜜西娅,N489]\b[this,6,8]莫析辉，快，使用光明裁决！",
        "\t[莫析辉,hero]\b[hero]光明驱散黑暗！光明裁决！",
        {
            "type": "animate",
            "name": "atkUp",
            "loc": [
                6,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "atkUp",
            "loc": [
                6,
                8
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "fire4",
            "loc": [
                6,
                4
            ],
            "async": true
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "name": "hp",
            "operator": "*=",
            "value": "0.1"
        },
        "\t[墨奈,N477]\b[this,6,4]什么！",
        "\t[林霄,N485]\b[this,5,3]糟了，不许伤害圣子殿下！",
        {
            "type": "jump",
            "from": [
                5,
                3
            ],
            "to": [
                6,
                5
            ],
            "time": 500,
            "keep": true
        },
        "\t[牧迟,N473]\b[this,7,9]众骑士，给我上！林霄，你的对手是我！",
        {
            "type": "jump",
            "from": [
                7,
                9
            ],
            "to": [
                6,
                6
            ],
            "time": 500,
            "keep": true
        },
        "两名守护骑士与众黑暗骑士、光明骑士战作一团，很快，给双方圣子圣女腾出了一块空地……",
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    5
                ]
            ],
            "floorId": "GM5",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    9
                ]
            ],
            "floorId": "GM5",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "SR29",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {
        "6,4": [
            {
                "type": "if",
                "condition": "(item:hammer===1)",
                "true": [
                    "\t[莫析辉,hero]\b[hero]圣锤！",
                    {
                        "type": "animate",
                        "name": "die",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    "\t[墨奈,N477]\b[this]\r[red]\\c[30]啊啊啊啊啊！\\c[]\r[]",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    "\t[莫析辉,hero]\b[hero]啊，怎么会……好邪恶的力量！",
                    "\t[蜜茜娅,N489]\b[this,6,8]啊，这力量……好邪恶！圣子弟弟，你怎么会有如此邪恶的力量?",
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[莫析辉,hero]\b[hero]我……我不知道啊，这是西村一个姑娘给我的……有时间得问问她……",
                    "\t[蜜茜娅,N489]\b[this,6,8]好叭。消灭了黑暗圣子，也算是为西村的百姓做了主，我该回去了。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "remove": true
                    },
                    "\t[莫析辉,hero]\b[hero]我也该回去了……",
                    {
                        "type": "setBlock",
                        "number": "N443",
                        "loc": [
                            [
                                6,
                                11
                            ]
                        ]
                    },
                    "\t[光明骑士,N440]\b[this,6,11]圣子殿下，大事不好了！",
                    "\t[莫析辉,hero]\b[hero]什么？！",
                    "\t[光明骑士,N440]\b[this,6,11]莫析家族遭到了敌袭，与之联姻的安南家族、温明家族已经前往支援了。二长老和七长老也已经去了，但很快就没有了消息，属下们不敢做主，特来禀报圣子殿下。",
                    "\t[莫析辉,hero]\b[hero]怎么会这样！看来我得去莫析家族看看了……",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                11
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                11,
                                6
                            ]
                        ],
                        "floorId": "GM1",
                        "remove": true
                    }
                ],
                "false": []
            }
        ]
    },
    "afterBattle": {
        "6,4": [
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    5
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "setBlock",
                "number": "N477",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            "\t[墨奈,N477]\b[this]卑鄙无耻的光明神殿，以二敌一，等我再次归来，一定跟你们拼个高低！",
            {
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "jump",
                "from": [
                    6,
                    4
                ],
                "to": [
                    6,
                    0
                ],
                "time": 500
            },
            "\t[蜜茜娅,N489]\b[this,6,8]趁他重伤，正好追杀他！",
            {
                "type": "jump",
                "from": [
                    6,
                    8
                ],
                "to": [
                    6,
                    0
                ],
                "time": 500
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "changeFloor",
                "floorId": "MM4"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [120037,120038,120038,120038,120038,120038, 91,120038,120038,120038,120038,120038,120039],
    [120045,  0,  0,  0,  0,  0, 85,  0,  0,  0,  0,  0,120047],
    [120045,  0,228,228,228,  0,  0,  0,228,228,228,  0,120047],
    [120045,  0,  0,  0,  0,485,  0,  0,  0,  0,  0,  0,120047],
    [120045,  0,  0,  0,  0,  0,1080,  0,  0,  0,  0,  0,120047],
    [120045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120047],
    [120045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120047],
    [120045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120047],
    [120045,  0,  0,  0,  0,  0,492,  0,  0,  0,  0,  0,120047],
    [120045,  0,  0,  0,  0,  0,  0,476,  0,  0,  0,  0,120047],
    [120045,  0,443,443,443,  0,  0,  0,443,443,443,  0,120047],
    [120045,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120047],
    [120053,120054,120054,120054,120054,120054, 91,120054,120054,120054,120054,120054,120055]
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