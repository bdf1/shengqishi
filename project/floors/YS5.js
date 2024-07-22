main.floors.YS5=
{
    "floorId": "YS5",
    "title": "隐世学院 5 ",
    "name": "隐世学院5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "cbzc.mp3",
    "firstArrive": [
        "\t[星诺,N502]转眼间就过去了两三年了……",
        "\t[凯迪,N1072]与大家一起，还是很开心的。",
        {
            "type": "if",
            "condition": "(flag:shengqishi>1)",
            "true": [
                "\t[卡鲁鲁,N1068]${flag:shengqishi_name}的实力回回都是第一，这次又拿了个第一，智慧神殿和水神殿的那两个小子，分别拿了第二和第三。不过咱们光明圣子保存实力没有参赛，我看你也不逊于他们呢！",
                "\t[莫析辉,hero]\b[hero]这种比赛，本少爷才不屑参加呢！"
            ],
            "false": [
                "\t[卡鲁鲁,N1068]今晚我请客，我拿了比赛第三名，哈哈哈哈！智慧神殿和水神殿的那两个小子，分别拿了第一和第二。不过咱们光明圣子保存实力没有参赛，我看你也不逊于他们呢！",
                "\t[星诺,N502]呵，蛮子！",
                "\t[卡鲁鲁,N1068]精灵王子，你不要惹我，像你这精灵族细皮嫩肉的，可不够我打！",
                "\t[星诺,N502]呵，来呀！"
            ]
        },
        "\t[长倾,N506]听说，光明神殿的另一位圣子殿下，葛尔丹娶了东凌帝国的小郡主。",
        "\t[莫析辉,hero]\b[hero]嗯。",
        "\t[卡鲁鲁,N1068]郡主算啥，莫析辉可是订婚了北寒帝国三公主希娜呢！哈哈，啥时候成婚，可记得叫上我啊！",
        "\t[莫析辉,hero]\b[hero]一定叫你。",
        {
            "type": "if",
            "condition": "(flag:shengqishi===1)",
            "true": [
                "\t[长倾,N506]${core.status.hero.flags.shengqishi_name.substring(1)}哥哥，你有空来精灵族玩啊！",
                "\t[${flag:shengqishi_name},N472]嗯。"
            ],
            "false": []
        },
        "\t[莫析辉,hero]\b[hero]过些时候，把我这段时间收集的宝物送一些给圣女姐姐和准圣子哥哥，emmmm，蝶影姑娘对我多有照顾，也送一些给她……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,9": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗?",
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
                            "获得防御+20",
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "20"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "11,1": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗?",
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
                            "获得初阶神之血*5",
                            {
                                "type": "setValue",
                                "name": "item:I710",
                                "operator": "+=",
                                "value": "5"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "1,0": {
            "floorId": "YS4",
            "loc": [
                1,
                0
            ]
        },
        "0,6": {
            "floorId": "YS6",
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
    [140, 93,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0, 21,246, 81,  0, 81,251,599,685,140,10110,140],
    [140,356,  0,685,140,736,140,  0,599,613,140,  0,140],
    [140,140,140,140,140,  0,140,140,140,140,140,244,140],
    [140,686,686,686,229,  0,685,  0,736,  0,696,  0,140],
    [140,140,140,140, 83,140,140,245,140,140, 81,140,140],
    [ 92,251,  0, 21,  0,140, 21, 21, 21,140,246,  0,140],
    [140,140,140,140,244,140,140,140,140,140,  0,686,140],
    [140,361,711,140, 81,140,612,  0,357,140,140, 81,140],
    [140,251,360,140,  0,140,  0,229,  0,140,10110,244,140],
    [140, 81,140,140,  0,140,140, 81,140,140,686,  0,140],
    [140,  0,685,  0,246, 82,  0,686,  0,736,  0, 21,140],
    [140,140,140,140,140,140,140,140,140,140,140,140,140]
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
        1,
        0
    ]
}