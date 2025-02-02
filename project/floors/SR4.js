main.floors.SR4=
{
    "floorId": "SR4",
    "title": "深入 4 ",
    "name": "深入4",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[莫析辉,hero]\b[hero]安南伯伯？您怎么来了？",
        "\t[安南奎,N546]\b[this,6,2]嗯，我们怕你出事，也来了。",
        "\t[莫析辉,hero]\b[hero]“我们”？",
        "\t[安南奎,N546]\b[this,6,2]对，老七也来了。",
        "\t[莫析辉,hero]\b[hero]都来了，你们不怕沂蒙贤和冷霜迪在光明神殿搞什么小动作吗？",
        "\t[安南奎,N546]\b[this,6,2]怕什么，沂蒙贤和冷霜迪对这次围剿黑暗圣子也是十分重视，沂蒙贤早就过来了，冷霜迪说是在光明神殿，其实也没见人了。",
        "\t[莫析辉,hero]\b[hero]好，有四位长老出马，黑暗圣子应该是手到擒来了。",
        "\t[安南奎,N546]\b[this,6,2]你不要轻敌，黑暗圣子墨奈能调动黑暗神殿的全部资源。",
        "\t[莫析辉,hero]\b[hero]啥！他能调动黑暗神殿的全部资源？我和蜜西娅、葛尔丹能调动的光明神殿军队都不到百分之十，我和蜜西娅还带了莫析家族和北纳家族的人，墨奈一个圣子就能调动黑暗神殿的全部资源？",
        "\t[安南奎,N546]\b[this,6,2]确实如此。",
        "\t[莫析辉,hero]\b[hero]太奇怪了吧，那黑暗教皇和黑暗圣女呢？",
        "\t[安南奎,N546]\b[this,6,2]黑暗教皇要镇守黑暗神殿，至于黑暗圣女，没什么名气，估计就是黑暗神殿用来充数的，不用在乎。",
        "\t[莫析辉,hero]\b[hero]好叭，看来黑暗神殿只有黑暗圣子需要在意了……",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    2
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,9": [
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
                            "获得一把蓝钥匙",
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "SR3",
            "loc": [
                6,
                0
            ]
        },
        "12,0": {
            "floorId": "SR5",
            "loc": [
                12,
                0
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
    [151,151,151,151,151,  0, 93,  0,151,151,151,151, 91],
    [151,611,  0,364,151,358,  0,360,151,626,713,151,  0],
    [151,  0,603,  0,151,  0,549,  0,151,611,365,151, 21],
    [151,  0,743,  0,151,151, 81,151,151,  0,743,151,748],
    [151,151, 81,151,151,  0,748,  0,151,151, 81,151,  0],
    [151,  0,689,  0,749,697,  0, 21,151,689,  0,151,365],
    [151, 82,151,151,151,151,151,742, 81,  0,698,750,  0],
    [151,747,  0, 21,  0,750,151,151,151,151,151, 81,151],
    [151,151,151,151,151,  0,  0, 81,748,  0,358,749,151],
    [151,10110,690,151,  0,747,361,151,  0,689,  0,612,151],
    [151,363,612,151,369,151,361,151, 81,151,151,151,151],
    [151,  0,746, 81,  0,151,361,151,750, 21, 21, 21,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
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
        0
    ]
}