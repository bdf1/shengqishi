main.floors.GM4=
{
    "floorId": "GM4",
    "title": "圣子寝殿 ",
    "name": "圣子寝殿",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X40100",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "loc": [
                11,
                6
            ],
            "direction": "left"
        },
        "\t[莫析辉,hero]\b[hero]……",
        {
            "type": "animate",
            "name": "balloonnao",
            "loc": [
                11,
                6
            ]
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "left:3"
            ]
        },
        "\t[莫析辉,hero]\b[hero]喂，起来！",
        {
            "type": "animate",
            "name": "balloonnao",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "down:2",
                "left:2"
            ]
        },
        "\t[莫析辉,hero]\b[hero]睡得这么死，本圣子还能指望你们保护？",
        {
            "type": "move",
            "loc": [
                2,
                5
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "right:6",
                "down:3"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    8,
                    8
                ]
            ]
        },
        "\t[???,N645]\b[this,8,8]北寒帝国希雅皇室三公主希娜拜见圣子殿下。",
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[莫析辉,hero]\b[hero]!!!",
        "\t[莫析辉,hero]\b[hero]你怎么进来的!他们是被你杀了？",
        "\t[希娜,N645]\b[this,8,8]殿下误会了。他们只是睡过去罢了。",
        "\t[莫析辉,hero]\b[hero]哦哦，那你可以走了。",
        "\t[希娜,N645]\b[this,8,8]殿下又误会了，我费了好些力气进入圣子宫，可不是为了和圣子殿下玩玩而已。",
        {
            "type": "playBgm",
            "name": "xian.mp3"
        },
        {
            "type": "animate",
            "name": "jinshu",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu2",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu3",
            "loc": [
                6,
                8
            ]
        },
        "\t[莫析辉,hero]\b[hero]啊啊啊啊啊！",
        {
            "type": "animate",
            "name": "jinshu",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu2",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu3",
            "loc": [
                6,
                8
            ]
        },
        "\t[莫析辉,hero]\b[hero]你对我做了什么？",
        "\t[希娜,N645]\b[this,8,8]这是古老的一种禁术，受到禁术的人，会疼痛无比，连光明神殿的光明魔法也难以解除哦，圣子殿下感觉如何呀？",
        {
            "type": "animate",
            "name": "jinshu",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu2",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu3",
            "loc": [
                6,
                8
            ]
        },
        "\t[莫析辉,hero]\b[hero]疼……疼死我了!你到底想干什么！",
        "\t[希娜,N645]\b[this,8,8]很简单，我想要与圣子殿下结为连理。",
        {
            "type": "animate",
            "name": "jinshu",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu2",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu3",
            "loc": [
                6,
                8
            ]
        },
        "\t[莫析辉,hero]\b[hero]……",
        "\t[莫析辉,hero]\b[hero]???",
        "\t[莫析辉,hero]\b[hero]你有病啊！",
        {
            "type": "animate",
            "name": "jinshu",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu2",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu3",
            "loc": [
                6,
                8
            ]
        },
        "\t[希娜,N645]\b[this,8,8]圣子殿下别急，听我慢慢说。我是北寒帝国三公主，我的母亲生下我难产而亡。我从小就被别的公主皇子欺负，因此修习了远古禁术。",
        "\t[希娜,N645]\b[this,8,8]你知道吗，远古禁术十分强大，不到几年的时间，我便足以与北寒帝国的几位高手交手了，我的兄弟姐妹都再也无法欺负我了……可惜，我也因为修习禁术被赶出了北寒帝国……",
        "\t[莫析辉,hero]\b[hero]可恶，你被赶出北寒帝国关我什么事！啊！快把禁术解了，不然我让你吃不了兜着走！",
        {
            "type": "animate",
            "name": "jinshu",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu2",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "jinshu3",
            "loc": [
                6,
                8
            ]
        },
        "\t[希娜,N645]\b[this,8,8]当然和你有关系了。你是上天的骄子，背靠光明神殿、莫析家族，还有与莫析家族交好的几大家族支持，也许……我找不到更合适的人选了，只要与你结为连理，我便可以拥有光明神殿的势力，再也不怕北寒帝国了。",
        "\t[莫析辉,hero]\b[hero]给我解了禁术……我答应你……",
        "\t[希娜,N645]\b[this,8,8]圣子殿下识时务，那自然是再好不过了",
        "\t[莫析辉,hero]\b[hero]哼，你够胆，敢闯入光明神殿威胁光明圣子。",
        "\t[希娜,N645]\b[this,8,8]希望殿下能够尽快向北寒皇室提亲。不过，为了防止殿下出尔反尔，我就……",
        {
            "type": "setValue",
            "name": "item:I673",
            "operator": "+=",
            "value": "1"
        },
        "\t[莫析辉,hero]\b[hero]你！",
        "\t[希娜,N645]\b[this,8,8]打扰了殿下，希娜告退了。",
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    8
                ]
            ],
            "remove": true
        },
        "\t[莫析辉,hero]\b[hero]可恶。先找安南伯伯和温明叔叔看看。",
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
            "type": "hide",
            "loc": [
                [
                    7,
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
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "show",
            "loc": [
                [
                    11,
                    5
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    11,
                    7
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N440",
            "loc": [
                [
                    11,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N443",
            "loc": [
                [
                    11,
                    7
                ]
            ]
        },
        {
            "type": "jumpHero",
            "loc": [
                6,
                4
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "setBlock",
            "number": "N549",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N553",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[安南奎,N546]\b[this,5,6]什么！",
        "\t[温明啸,N550]\b[this,7,6]北寒希雅的三公主竟然敢对你下禁术？真是太不像话了，我看北寒帝国是想找死！",
        "\t[安南奎,N546]\b[this,5,6]老七，不要这么武断。应该是希雅家族的三丫头自己做的。小圣子，让我看看，你身上的禁术……",
        "\t[莫析辉,hero]\b[hero]好。",
        "\t[安南奎,N546]\b[this,5,6]这禁术……唉，很难解……",
        "\t[温明啸,N550]\b[this,7,6]二哥，你也解不了？那咱们去找教皇陛下和大长老吧？",
        "\t[安南奎,N546]\b[this,5,6]没用，这个东西和光明、黑暗没有任何关系……希雅家族的小丫头，这是从哪里弄的……",
        "\t[莫析辉,hero]\b[hero]啊？那我可怎么办……我岂不是要废了？",
        "\t[安南奎,N546]\b[this,5,6]小圣子别怕，这个东西不会影响你的修炼，等你修炼到一定实力，它自然会解除。不过，在此之前，你还是先去北寒帝国向北寒皇帝提亲吧。",
        "\t[莫析辉,hero]\b[hero]什么！我要娶那个才见面就给我下禁术的女人？",
        "\t[温明啸,N550]\b[this,7,6]二哥，希雅家族的三丫头因修习禁术，已经被赶出皇族了，哪里能与光明圣子配一起？",
        "\t[温明啸,N550]\b[this,7,6]而且，辉儿可是要争下一任教皇的，怎么能与一个背后没有强大势力支撑的人结为连理？要知道，北纳蜜西娅与南荒的二皇子订了婚……",
        "\t[安南奎,N546]\b[this,5,6]我知道你们不愿意，但是小圣子现在中了禁术，谁知道那个丫头还能干出什么坏事，还是了了她的心愿吧。圣子，你尽快启程吧，我吩咐罗涛在前面给你开路。",
        "\t[莫析辉,hero]\b[hero]哦哦，全听安南伯伯吩咐。",
        "\t[安南奎,N546]\b[this,5,6]额，小圣子，以后在光明神殿还是叫我二长老，免得有心人找事。",
        "\t[莫析辉,hero]\b[hero]好。",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    1
                ]
            ],
            "floorId": "GM1",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,7": {
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
                "\t[光明骑士,N440]\b[this]为圣子殿下赴汤蹈火，在所不辞！"
            ]
        },
        "11,5": {
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
                "\t[光明骑士,N440]\b[this]为圣子殿下赴汤蹈火，在所不辞！"
            ]
        },
        "11,2": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗? (花费50点魔力)",
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
                            "获得三把黄钥匙",
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "operator": "+=",
                                "value": "3"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "GM3",
            "loc": [
                0,
                6
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
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,  0,  0,  0,  0,  0,  0,50162,50163,  0,  0,10110,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,41482,41483,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,645,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,40236,40237,40238,  0,  0,  0,523,  0,  0,  0,  0, 92],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,523,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,41163,  0,  0,  0,  0,  0,  0,  0,  0,  0,41163,50049],
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,41466,41467,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    "fgmap": [
    [  0,  0,50152,50153,  0,  0,50124,  0,  0,50006,50007,  0,  0],
    [  0,  0,50160,50161,  0,  0,50132,50154,50155,50014,50015,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,41474,41475,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40228,40229,40230,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,41155,  0,  0,  0,  0,  0,  0,  0,  0,  0,41155,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        12,
        6
    ]
}