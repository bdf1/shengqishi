main.floors.XW7=
{
    "floorId": "XW7",
    "title": "西武帝国 7 ",
    "name": "西武帝国7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "autotile7",
    "bgm": "lfmg.mp3",
    "weather": [
        "rain",
        5
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    "\t[林霄,N485]\b[this]黑暗药水本来是给我们圣子殿下提升实力的。",
                    {
                        "type": "comment",
                        "text": "下一条指令可视情况使用或不使用"
                    },
                    {
                        "type": "hide",
                        "remove": true,
                        "time": 250
                    }
                ],
                "false": [
                    "\t[林霄,N485]\b[this]殿下，我这里有一瓶黑暗药水，能够使光明神殿的购买次数减少20%。你用3瓶玉露就送给你了。",
                    {
                        "type": "if",
                        "condition": "(item:I416>=3)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "item:I416",
                                "operator": "-=",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I1114",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "playSound",
                                "name": "确定"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "true"
                            }
                        ],
                        "false": [
                            {
                                "type": "playSound",
                                "name": "操作失败"
                            },
                            "\t[林霄,N485]\b[this]你的玉露不够！"
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": "XW6",
            "loc": [
                1,
                11
            ]
        },
        "12,1": {
            "floorId": "XW8",
            "loc": [
                12,
                1
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,  0, 81,  0,144, 21,144,688,144,348,618,144, 91],
    [144,687,144,617,144,1100,144,351,144,687,144,144,  0],
    [144,  0,144,688,144,617,144, 22,144,  0,144,688,  0],
    [144,1022,144,  0,144,  0,144,934,144,851,144,  0,348],
    [144,  0,144,1021,144,  0,144, 81,144, 81,144,1077,737],
    [144,  0,144,1023,144,737,144,  0, 21,  0,1022,  0,  0],
    [144, 21,144,1021,144, 81,144,1024,144,144,144,144,144],
    [144,1118,144,  0,144,  0,144,1077,  0,  0,852,  0,144],
    [144, 21,144, 81,144, 21,  0,  0,144,144, 82,144,144],
    [144,144,144,  0,1022,  0,  0,  0,144,  0,356,  0,144],
    [144, 94,  0,  0,1077,688,  0,486,144,687,  0,687,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        1,
        11
    ],
    "bg2map": [

],
    "fg2map": [

]
}