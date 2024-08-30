main.floors.YS8=
{
    "floorId": "YS8",
    "title": "隐世学院 8 ",
    "name": "隐世学院8",
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
        "\t[希娜,N645]\b[this,7,1]圣子殿下。",
        {
            "type": "jumpHero",
            "loc": [
                6,
                1
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[莫析辉,hero]\b[hero]希娜。",
        "\t[希娜,N645]\b[this,7,1]不知圣子殿下找我何事？",
        "\t[莫析辉,hero]\b[hero]我的修为延缓有些时候了，特地来找你！",
        "\t[希娜,N645]\b[this,7,1]你的修为延缓干我何事？",
        "\t[莫析辉,hero]\b[hero]就是你那个禁术封印！害得我修为进展延缓了太多！你知不知道，我要是修为太差，将来可成为不了教皇，对你可没好处。",
        "\t[希娜,N645]\b[this,7,1]嗯，不过我并没有让你的修为延缓。不管怎么说，我们已经绑在一条船上了，我何必做这种害人害己的事？",
        "\t[莫析辉,hero]\b[hero]那可不见得，你的禁术诡异的很，谁知道你能不能彻底掌握它！",
        "\t[希娜,N645]\b[this,7,1]哼，你怕是中了谁的挑拨吧，我的禁术我怎么可能掌握不了！",
        "\t[莫析辉,hero]\b[hero]挑拨？我的守护骑士罗涛，他会挑拨？",
        "\t[希娜,N645]\b[this,7,1]那也说不定呢！",
        "\t[莫析辉,hero]\b[hero]你也别挑拨我和我的守护骑士……",
        "\t[莫析辉,hero]\b[hero]葛尔丹曾经说过，我的身边有蜜西娅的内奸……对了，我们订下婚约之后，我去见蜜西娅，她居然那么快知道我与你有婚约了……可恶！难道内奸真的是他！",
        "\t[希娜,N645]\b[this,7,1]你嘀咕什么呢？",
        "\t[莫析辉,hero]\b[hero]你先回北寒帝国吧，我恐怕要处理一些事。",
        "\t[希娜,N645]\b[this,7,1]想要就来，不想要我就赶我走？",
        "\t[莫析辉,hero]\b[hero]那你想怎么样？",
        "\t[希娜,N645]\b[this,7,1]尽快，我想要拿到北寒帝国的权力。",
        "\t[莫析辉,hero]\b[hero]好吧，你去吧。",
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    1
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,0": {
            "floorId": "YS9",
            "loc": [
                1,
                0
            ]
        },
        "6,0": {
            "floorId": "YS7",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {
        "9,4": [
            {
                "type": "if",
                "condition": "(flag:shengqishi>8)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:door_YS8_10_3",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "(flag:shengqishi>8)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:door_YS8_10_3",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterBattle": {
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_6_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,3": {
            "0": {
                "condition": "flag:door_YS8_10_3==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_YS8_10_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "6,6": {
            "0": {
                "condition": "flag:door_YS8_6_6==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_YS8_6_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140, 91,140,140,140,140, 93,140,140,140,140,140,140],
    [140,  0,736,  0,140,  0,  0,646,140, 21, 23, 21,140],
    [140,251,  0,688, 83,  0,736,  0,140,602,  0,360,140],
    [140, 81,140,140,140,140, 81,140,140,140, 85,140,140],
    [140,  0,687,688,140,  0,689,  0,140,245,  0,245,140],
    [140,229,697,609,140,229,  0,229,140,  0,  0,  0,140],
    [140, 81,140,140,140,140, 85,140,140,140, 81,140,140],
    [140,687,  0,245,  0,  0, 21,  0,244,  0,687,  0,140],
    [140, 81,140,140, 82,140,140,140, 81,140,140, 82,140],
    [140,251,  0,140,736,609,714,357,229,140,  0,245,140],
    [140,  0,610,140,140,140,140,140,140,140,697,  0,140],
    [140,688,  0, 21,229,360,360,360,245, 21,  0,689,140],
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
        6,
        0
    ]
}