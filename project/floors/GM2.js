main.floors.GM2=
{
    "floorId": "GM2",
    "title": "光明神殿",
    "name": "光明神殿",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X30057",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 50,
            "steps": [
                "up:4"
            ]
        },
        "\t[莫析辉,hero]\b[hero]莫析家族，莫析辉拜见教皇陛下！",
        "\t[光明教皇,N464]\b[this,6,5]吾以光明神的名义，封你为光明圣子，莫析辉，从今以后，你就是光明神殿的圣子了，你的一言一行，都代表着光明神殿。",
        "\t[莫析辉,hero]\b[hero]是!",
        "\t[光明教皇,N464]\b[this,6,5]现在赐予你能够时空穿梭的传送器和看破一切的怪物手册。",
        {
            "type": "setValue",
            "name": "item:fly",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:book",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:I337",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:I594",
            "operator": "+=",
            "value": "1"
        },
        "\t[莫析辉,hero]\b[hero]多谢教皇陛下！",
        "\t[光明教皇,N464]\b[this,6,5]哈哈，以后你和蜜西娅、葛尔丹一样就叫我教皇爷爷吧！",
        "\t[莫析辉,hero]\b[hero]好。",
        "\t[光明教皇,N464]\b[this,6,5]四长老、六长老在长老殿有事。对了，蜜西娅，三长老、五长老为何没有来观礼?",
        "\t[北纳蜜西娅,N489]\b[this,7,9]教皇爷爷，三长老和五长老也有事情，所以不能来了。",
        "\t[安南奎,N546]\b[this,7,7]呵呵。",
        "\t[北纳蜜西娅,N489]\b[this,7,9]若是无事，那我便走了。圣子弟弟记得有空来圣女宫玩一玩哦!",
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    9
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    9
                ]
            ],
            "remove": true
        },
        "\t[光明教皇,N464]\b[this,6,5]葛尔丹",
        "\t[葛尔丹,N566]\b[this,5,9]我在。",
        "\t[光明教皇,N464]\b[this,6,5]你的天赋稍逊于蜜西娅和辉儿，光明神殿如今财富吃紧，委屈你做准圣子一阵子了。",
        "\t[葛尔丹,N566]\b[this,5,9]啊？",
        "\t[光明教皇,N464]\b[this,6,5]可以吗?",
        "\t[葛尔丹,N566]\b[this,5,9]是!那我先告退了。",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    9
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    9
                ]
            ],
            "remove": true
        },
        "\t[光明教皇,N464]\b[this,6,5]小圣子，你的\r[red]圣子宫\r[]在\r[red]光明广场西南方\r[]。光明神殿左边是长老会，右边是骑士团，你有空可以去看看。",
        "\t[莫析辉,hero]\b[hero]多谢教皇爷爷。",
        "\t[光明教皇,N464]\b[this,6,5]都退下吧！",
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    5
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
                    7,
                    11
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    11
                ]
            ],
            "floorId": "GM1",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "openShop",
                "id": "shop1",
                "open": true
            }
        ],
        "3,11": [
            "\t[光明骑士,N440]\b[this]为光明而战！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "3,3": [
            "\t[光明骑士,N440]\b[this]为光明而战！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "9,3": [
            "\t[光明骑士,N440]\b[this]为光明而战！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "9,11": [
            "\t[光明骑士,N440]\b[this]为光明而战！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "GM1",
            "loc": [
                6,
                0
            ]
        },
        "1,6": {
            "floorId": "GM5",
            "loc": [
                12,
                6
            ]
        },
        "11,6": {
            "floorId": "GM6",
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
    [50049,60355,50154,50155,50159,50067,50068,50069,50159,50154,50155,60355,50049],
    [50049,  0,50162,50163,50167,50075,50076,50077,50167,50162,50163,  0,50049],
    [50049,50165,60356,442,  0,  0,  0,  0,  0,441,60356,50165,50049],
    [50049,101,  0,  0,  0,60330,60331,60332,  0,  0,  0,101,50049],
    [50049,102,  0,  0,  0,60336,465,60337,466,  0,  0,102,50049],
    [50049, 92,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94,50049],
    [50049,101,  0,  0,60353,552,  0,547,60354,  0,  0,101,50049],
    [50049,102,  0,  0,  0,  0,  0,  0,  0,  0,  0,102,50049],
    [50049,  0,  0,580,60353,568,  0,490,60354,474,  0,  0,50049],
    [50049,50165,  0,  0,  0,  0,  0,  0,  0,  0,  0,50165,50049],
    [50049,60355,50164,442,  0,  0,  0,585,  0,441,50164,60355,50049],
    [50049,50049,50049,50049,50049,50049, 91,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,31168,31169,31170,31171,31172,31173,31174,31175,31247,  0,  0],
    [  0,  0,31176,31177,31178,31179,31180,31181,31182,31183,31255,  0,  0],
    [  0,  0,31184,31185,31186,31187,31188,31189,31190,31191,31263,  0,  0],
    [  0,  0,31192,31193,31194,31195,31196,31197,31198,31199,31271,  0,  0],
    [  0,  0,31200,31201,31202,31203,31204,31205,31206,31207,31279,  0,  0],
    [  0,  0,31208,31209,31210,31211,31212,31213,31214,31215,31287,  0,  0],
    [  0,  0,31216,31217,31218,31219,31220,31221,31222,31223,31295,  0,  0],
    [  0,  0,31224,31225,31226,31227,31228,31229,31230,31231,31303,  0,  0],
    [  0,  0,31232,31233,31234,31235,31236,31237,31238,31239,31311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50157,  0,  0,  0,  0,  0,  0,  0,  0,  0,50157,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,60350,  0,  0,  0,60351,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,60350,  0,  0,  0,60351,  0,  0,  0,  0],
    [  0,50157,  0,  0,  0,  0,  0,  0,  0,  0,  0,50157,  0],
    [  0,  0,50156,  0,  0,  0,  0,  0,  0,  0,50156,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,20611,  0,  0,  0,  0,  0,  0],
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