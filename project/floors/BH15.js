main.floors.BH15=
{
    "floorId": "BH15",
    "title": "北寒帝国 5 ",
    "name": "北寒帝国5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X130012",
    "bgm": "xieedushi.mp3",
    "weather": [
        "snow",
        6
    ],
    "firstArrive": [
        {
            "type": "jumpHero",
            "loc": [
                6,
                2
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[蜜西娅,N489]\b[this,6,5]站住！葛尔丹，莫析辉！",
        "\t[葛尔丹,N566]\b[this,5,3]北纳蜜西娅，你还敢来！",
        "\t[蜜西娅,N489]\b[this,6,5]我当然要来，你们两个光明圣子，竟然联合黑暗神殿的黑暗圣女，对付我！还灭了我的家族！",
        "\t[莫析辉,hero]\b[hero]\r[red]\\c[30]黑暗圣女？！\\c[]\r[]",
        "\t[葛尔丹,N566]\b[this,5,3]谁是黑暗圣女！",
        "\t[凌依,N574]\b[this,8,2]圣女殿下，你这盆脏水可泼的真好，知道自己一个人对付不了两位圣子殿下，就说他们联合黑暗神殿的黑暗圣女了。",
        "\t[凌依,N574]\b[this,8,2]要知道，与黑暗神殿的人勾结，那可是要上绞刑架的！",
        "\t[莫析辉,hero]\b[hero]蜜西娅，你算盘可打得真好！",
        "\t[蜜西娅,N489]\b[this,6,5]混蛋！我与童澈的婚礼，就是被黑暗圣女黛默琳、南荒帝国大皇子童轩破坏的！奸贼，你们勾结黑暗圣女，要毁灭光明神殿，我绝不会放过你们！",
        "\t[葛尔丹,N566]\b[this,5,3]好大的帽子呀！谁是黛默琳？圣子弟弟，你认识么？",
        "\t[莫析辉,hero]\b[hero]呵，凌依说的有道理，她就是斗不过我们联手，便说我们勾结黑暗神殿。",
        "\t[希娜,N538]\b[this,7,3]殿下，不能耽搁了，北寒帝国这一行，要速战速决！",
        "\t[葛尔丹,N566]\b[this,5,3]你们北寒皇室的事情，我就不掺和了。",
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
                    5,
                    3
                ]
            ],
            "remove": true
        },
        "\t[莫析辉,hero]\b[hero]你先行一步吧！我解决了蜜西娅，随后就来。",
        "\t[希娜,N538]\b[this,7,3]好。",
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    3
                ]
            ],
            "remove": true
        },
        "\t[凌依,N574]\b[this,8,2]既然圣子殿下要与圣女殿下切磋，牧迟，你我也来练练？",
        "\t[牧迟,N473]\b[this,7,6]正有此意，来吧！",
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
                    7,
                    6
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,0": {
            "floorId": "BH16",
            "loc": [
                12,
                0
            ]
        },
        "6,0": {
            "floorId": "BH14",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            "\t[蜜西娅,N489]\b[this]莫析辉，我不会放过你的！",
            {
                "type": "setBlock",
                "number": "I415",
                "loc": [
                    [
                        8,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I415",
                "loc": [
                    [
                        9,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I415",
                "loc": [
                    [
                        9,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I349",
                "loc": [
                    [
                        3,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I349",
                "loc": [
                    [
                        3,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I349",
                "loc": [
                    [
                        4,
                        4
                    ]
                ]
            },
            {
                "type": "setValue",
                "name": "flag:door_BH15_12_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_BH15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "12,1": {
            "0": {
                "condition": "flag:door_BH15_12_1==1",
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
                        "name": "flag:door_BH15_12_1",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,10": {
            "0": {
                "condition": "flag:door_BH15_6_10==1",
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
                        "name": "flag:door_BH15_6_10",
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
    [686,20309,130007,130022,130023,20316, 93,20308,130020,130021,130006,130007, 91],
    [353,20317,130015,20308,  0,20318,  0,130007,  0,  0,130014,130015, 85],
    [686,130007,20301,  0,578,  0,  0,130015,574,  0,20309,20314,  0],
    [ 81,130015,20309,  0,  0,566,  0,538,  0,  0,20317,20309, 81],
    [ 81,20314,20317,  0,  0,  0,  0,  0,  0,  0,130007,20317, 81],
    [ 81,130022,130023,  0,  0,  0,1122,  0,  0,  0,130015,20314, 81],
    [ 81,130136,130137,130138,130139,130006,  0,476,130136,130137,130138,130139, 81],
    [ 81,130144,130145,130146,130147,130014,  0,20308,130144,130145,130146,130147, 81],
    [ 81,130152,130153,130154,130155,20309,  0,20318,130152,130153,130154,130155, 81],
    [ 81,130160,130161,130162,130163,20317,  0,20309,130160,130161,130162,130163, 81],
    [ 81,130168,130169,130170,130171,20314, 85,20317,130168,130169,130170,130171, 81],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [130022,130023,130020,130021,20318,20301,20316,130022,130023,20316,20308,130020,130021]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ],
    "bg2map": [

],
    "fg2map": [

]
}