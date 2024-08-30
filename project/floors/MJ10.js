main.floors.MJ10=
{
    "floorId": "MJ10",
    "title": "魔界 10 ",
    "name": "魔界10",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "douguishen.mp3",
    "firstArrive": [
        "\t[美面魔帝,N1176]\b[this,6,7]哟呵呵，小哥哥，来玩呀！",
        {
            "type": "jumpHero",
            "loc": [
                7,
                10
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[莫析辉,hero]\b[hero]咦？怎么回事？",
        "\t[${flag:shengqishi_name},N510]\b[this,6,10]圣子殿下，小心一些！",
        "\t[莫析辉,hero]\b[hero]你打不过它吗？要我帮忙吗？",
        "\t[${flag:shengqishi_name},N510]\b[this,6,10]我能打过它，但是……它有两个头，上下两个头，只要其中一个不死，就会立刻复活……",
        "\t[莫析辉,hero]\b[hero]原来如此！那你攻上面，我攻下面！",
        "\t[${flag:shengqishi_name},N510]\b[this,6,10]好，那就拜托殿下了！",
        {
            "type": "jump",
            "from": [
                6,
                10
            ],
            "to": [
                6,
                7
            ],
            "time": 500
        },
        {
            "type": "animate",
            "name": "yijianzhanqianye",
            "loc": [
                6,
                7
            ]
        },
        "\t[美面魔帝,N1176]\b[this,6,7]啊啊啊啊啊啊！该死的人类！我要杀了你！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,10": {
            "floorId": "MJ9",
            "loc": [
                11,
                10
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,8": [
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
                        7,
                        8
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
                "type": "setBlock",
                "number": "N510",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            "\t[${flag:shengqishi_name},N510]\b[this,6,7]殿下，幸不辱命！",
            "\t[莫析辉,hero]\b[hero]那咱们去找江鹤仙子提交毕业任务吧！",
            {
                "type": "setValue",
                "name": "flag:meimianmodi",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,714,714,714,714,714,  4,  4,  4,  4],
    [  4,  4,  4,  4,714,1172,1173,1174,714,  4,  4,  4,  4],
    [  4,  4,  4,  4,714,1175,1176,1177,714,  4,  4,  4,  4],
    [  4,  4,  4,  4,714,1178,1171,1179,714,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  0,513,  0,  0,  0,  0, 92,  4],
    [  4,  4,  4,  4,  4,  0,  0,  0,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}