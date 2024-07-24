main.floors.YS9=
{
    "floorId": "YS9",
    "title": "隐世学院 9 ",
    "name": "隐世学院9",
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
        {
            "type": "if",
            "condition": "(flag:shengqishi===1)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N472",
                    "loc": [
                        [
                            6,
                            4
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
        "6,12": {
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
                {
                    "type": "changeFloor",
                    "floorId": "YS10",
                    "loc": [
                        6,
                        12
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,0": {
            "floorId": "YS8",
            "loc": [
                1,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,8": [
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        12
                    ]
                ]
            },
            "\t[孟芸,magicMaster]去吧，你的毕业任务是前往魔界，击杀百眼魔君！击杀百眼魔君之后，可以找江鹤依浩仙子提交任务获得奖励。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,3": [
            "\t[孟芸老师,magicMaster]\b[this,6,8]你们不错，都打败了我。不过你们的毕业任务还没完成，还需要完成毕业任务。",
            "\t[长倾,N506]\b[this,4,5]啊，还要完成毕业任务啊？",
            "\t[孟芸老师,magicMaster]\b[this,6,8]当然了，不完成毕业任务，可没法毕业哦。",
            "\t[孟芸老师,magicMaster]\b[this,6,8]卡鲁鲁，你的毕业任务是去呈鲜之路抓一条咸鱼，不要普通的咸鱼，要最咸的那条。",
            "\t[凯迪,N1072]\b[this,8,5]据说普通的咸鱼已经是十分乖戾，滑不溜秋了，那最咸的那条更是十分狡猾，卡鲁鲁这任务也太难了吧……",
            "\t[孟芸老师,magicMaster]\b[this,6,8]凯迪，矮人族的炼器很强大，你就打造一个桶子吧，要用盐铁打造的。",
            "\t[孟芸老师,magicMaster]\b[this,6,8]长倾、星诺，你们二位，去采集一种叫轻微的仙草，需要233株。",
            "\t[星诺,N502]\b[this,3,6]是！",
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        5
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        6
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
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "if",
                "condition": "(flag:shengqishi>1)",
                "true": [
                    "\t[孟芸老师,magicMaster]\b[this,6,8]${flag:shengqishi_name}，你的任务……是去魔界，击杀一头魔龙。",
                    "\t[莫析辉,hero]\b[hero]老师，${flag:shengqishi_name}的任务是不是太难了一些？",
                    "\t[孟芸老师,magicMaster]\b[this,6,8]${flag:shengqishi_name}的实力比平常人也强一些，所以任务也更难一点，不过，光明圣子阁下可以帮他一起完成毕业任务。",
                    "\t[莫析辉,hero]\b[hero]好。${flag:shengqishi_name}，你先退下吧！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                4
                            ]
                        ],
                        "remove": true
                    }
                ],
                "false": []
            },
            "\t[孟芸老师,magicMaster]\b[this,6,8]现在圣子阁下，你该与我一战了，打败我，我将会布置你的毕业任务。"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140, 93,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,140,140,140,140,140,  0,140,140,140,140,140,140],
    [140,140,140,140,140,140, 83,140,140,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,140,140,140,506,  0,  0,  0,1072,140,140,140,140],
    [140,140,140,502,  0,  0,  0,  0,  0,1068,140,140,140],
    [140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,140],
    [140,140,  0,  0,  0,  0,247,  0,  0,  0,  0,140,140],
    [140,140,140,  0,  0,  0,  0,  0,  0,  0,140,140,140],
    [140,140,140,140,  0,  0,  0,  0,  0,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,140,140,140,140,140, 93,140,140,140,140,140,140]
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