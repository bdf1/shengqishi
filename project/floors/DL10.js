main.floors.DL10=
{
    "floorId": "DL10",
    "title": "东凌帝国 10 ",
    "name": "东凌帝国10",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X20061",
    "bgm": "jw.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:shengqishi>=10)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N513",
                    "loc": [
                        [
                            6,
                            9
                        ]
                    ]
                }
            ],
            "false": []
        },
        {
            "type": "jumpHero",
            "loc": [
                8,
                6
            ],
            "time": 500
        },
        "\t[莫析辉,hero]\b[hero]好你个图毅，竟然派人来刺杀我",
        "\t[图毅,E828]\b[this,6,2]圣子殿下息怒！图毅不敢如此啊！",
        "\t[图毅,E828]\b[this,6,2]殿下，我岂敢如此，您仔细想想，大长老的实力举世无双，我若是让你在东凌帝国出了事，我岂能活下去",
        "\t[凌依,N574]\b[this,9,7]图毅陛下说的一套一套的，不过，圣子弟弟在东凌皇宫找了你交给东方溪的密函，不知陛下怎么解释",
        "\t[图毅,E828]\b[this,6,2]这……",
        "\t[汪周,N468]\b[this,5,7]你说你不敢伤害殿下，因为伤了他，你会死。",
        "\t[汪周,N468]\b[this,5,7]但假若你对二长老和七长老出手了，我们调查出来，你也会偿命",
        "\t[汪周,N468]\b[this,5,7]倒不如先杀一个光明圣子，赚够本才是。",
        "\t[图毅,E828]\b[this,6,2]你！",
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:2"
            ]
        },
        "\t[黛莫琳,N481]\b[this,4,9]看来不必多说了，杀了他！",
        "\t[莫析辉,hero]\b[hero]图毅，你作恶多端，怪不得我啦！",
        "\t[图毅,E828]\b[this,6,2]来人啊，护驾！",
        {
            "type": "setBlock",
            "number": "N1096",
            "loc": [
                [
                    8,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N1096",
            "loc": [
                [
                    4,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N1096",
            "loc": [
                [
                    4,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N1096",
            "loc": [
                [
                    4,
                    5
                ]
            ]
        },
        "\t[皇宫护卫,N1096]保护陛下！",
        "\t[芹宣,N466]\b[this,6,5]雕虫小技！",
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                4,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                4,
                5
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                8,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "baozha2",
            "loc": [
                8,
                5
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    4
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    4
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    5
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    5
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "jumpHero",
            "loc": [
                6,
                3
            ],
            "time": 500
        },
        "\t[莫析辉,hero]\b[hero]图毅，受死吧！",
        "\t[葛尔丹,N566]\b[this,4,6]住手！",
        "\t[莫析辉,hero]\b[hero]葛尔丹，你想干什么！",
        "\t[葛尔丹,N566]\b[this,4,6]此事疑点颇多，我们不能随便杀了图毅，他是一国之君，杀了他，整个东凌会陷入混乱的",
        "\t[莫析辉,hero]\b[hero]他灭了莫析家族，杀了二长老和七长老，难道就不用付出代价吗",
        "\t[葛尔丹,N566]\b[this,4,6]不管怎么样，也不能让平民百姓受苦啊！",
        "\t[葛尔丹,N566]\b[this,4,6]不然这样，先把图毅囚禁起来",
        "\t[莫析辉,hero]\b[hero]不行！他今天必须死！",
        "\t[葛尔丹,N566]\b[this,4,6]大长老！",
        "\t[芹宣,N466]\b[this,6,5]唉，葛尔丹，你退下吧",
        "\t[葛尔丹,N566]\b[this,4,6]大长老！",
        "\t[芹宣,N466]\b[this,6,5]退下吧",
        "\t[莫析辉,hero]\b[hero]图毅，接受你的命运吧！"
    ],
    "eachArrive": null,
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "DL9",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,2": [
            "\t[图毅,E828]\b[this]啊！这不是……不是我干的……啊！",
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    3
                ],
                "time": 500
            },
            {
                "type": "setBlock",
                "number": "I345",
                "loc": [
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I345",
                "loc": [
                    [
                        3,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I345",
                "loc": [
                    [
                        4,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I416",
                "loc": [
                    [
                        10,
                        3
                    ]
                ]
            },
            "\t[芹宣,N466]\b[this,6,5]光明神殿的威严，不容挑衅！两位圣子，图毅被处死，东凌帝国恐怕会大乱，你们留在东凌帝国，先解决这些问题吧。莫析家的小圣子，你这段时间不要去北寒帝国，我会盯着你的。",
            "\t[莫析辉,hero]\b[hero]大长老……",
            "\t[芹宣,N466]\b[this,6,5]好了，我先走了！",
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
            "\t[葛尔丹,N566]\b[this,4,6]圣子弟弟别灰心，君子报仇，十年不晚嘛！",
            "\t[莫析辉,hero]\b[hero]圣子哥哥，你也是支持我吗？",
            "\t[葛尔丹,N566]\b[this,4,6]倒不是支持你，蜜西娅现在一家独大，你说咱俩要再不联手，可不惨了？",
            "\t[汪周,N468]\b[this,5,7]大长老说不让你去北寒帝国，可没有说不让你去南荒帝国哦。",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            "\t[葛尔丹,N566]\b[this,4,6]嗯？",
            "\t[汪周,N468]\b[this,5,7]反正在座的各位，都想要对付北纳家族嘛，正好，南荒帝国有一位朋友，想找莫析圣子殿下联手呢！",
            "\t[莫析辉,hero]\b[hero]那好吧，去见见也无妨。",
            "\t[默默,N481]\b[this,4,9]圣子哥哥，我也要去！",
            "\t[莫析辉,hero]\b[hero]那大家都去看看吧！",
            "\t[葛尔丹,N566]\b[this,4,6]不过，东凌帝国的事物怎么办，没有人处理，岂不会大乱？",
            "\t[汪周,N468]\b[this,5,7]这个容易，我会派骑士队的守护在这里，咱们先去南荒帝国看看再说吧！",
            "\t[莫析辉,hero]\b[hero]那好，一起去\r[red]\\c[30]南荒帝国\\c[]\r[]！",
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        7
                    ]
                ],
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
                "remove": true
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
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "floorId": "GM1",
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
    [50049,50049,50049,41871,50049,50067,50068,50069,50049,41870,50049,50049,50049],
    [50049,41155,50159,50049,50049,50075,50071,50077,50049,50049,50159,41155,50049],
    [50049,41163,50167,  0,  0,50167,828,50167,  0,  0,50167,41163,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,535,  0,  0,  0,  0,  0,50049],
    [50049,50159,  0,  0,569,  0,  0,  0,  0,  0,  0,50159,50049],
    [50049,50167,  0,581,  0,471,  0,541,  0,577,  0,50167,50049],
    [50049,20069,20069,20069,  0,  0,  0,  0,  0,20069,20069,20069,50049],
    [50049,  0,  0,  0,484,  0,  0,  0,136,  0,  0,  0,50049],
    [50049,41153,50159,  0,  0,  0,  0,  0,  0,  0,50159,41153,50049],
    [50049,41161,50167,  0,  0,  0,  0,  0,  0,  0,50167,41161,50049],
    [50049,50049,50049,50049,50049,50049, 91,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,50076,50049,50049,50049,50049,50049,50049],
    [  0,  0,  0,  0,  0,  0,50079,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,40504,40505,40505,40505,40506,  0,  0,  0,  0],
    [  0,  0,  0,50078,40512,40513,40513,40513,40514,50078,  0,  0,  0],
    [  0,  0,  0,  0,40512,40513,40513,40513,40514,  0,  0,  0,  0],
    [  0,  0,  0,50078,40512,40513,40513,40513,40514,50078,  0,  0,  0],
    [  0,  0,  0,  0,40520,40521,40521,40521,40522,  0,  0,  0,  0],
    [  0,  0,  0,  0,20111,20111,20111,20111,20111,  0,  0,  0,  0],
    [  0,  0,  0,  0,20111,20111,20111,20111,20111,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50159,  0,50159,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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