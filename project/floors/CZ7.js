main.floors.CZ7=
{
    "floorId": "CZ7",
    "title": "村庄 7 ",
    "name": "村庄7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        "如果已经收服圣骑士，并且圣骑士已经成为骑士，骷髅王可以直接过去"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            "\t[凌依,N574]\b[up]殿下之命，凌依已经带领骑士队将被怪物们杀害的村民埋葬",
            "\t[光明圣子,hero]\b[hero]干的不错，你继续探路",
            "\t[凌依,N574]\b[up]遵命",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "10,8": [
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
                            {
                                "type": "setValue",
                                "name": "item:I710",
                                "operator": "+=",
                                "value": "2"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "CZ6",
            "loc": [
                6,
                0
            ]
        },
        "3,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {
        "3,6": [
            "\t[骷髅王]\b[this,3,6]吼!",
            {
                "type": "if",
                "condition": "(flag:shengqishi>1)",
                "true": [
                    {
                        "type": "animate",
                        "name": "sword",
                        "loc": [
                            3,
                            6
                        ]
                    },
                    "\t[唐佳成,N472]\b[this,3,6]殿下小心!",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "100"
                    },
                    {
                        "type": "setBlock",
                        "number": "N1152",
                        "loc": [
                            [
                                3,
                                6
                            ]
                        ]
                    },
                    "\t[光明圣子,hero]\b[hero]你怎么来了",
                    "\t[唐佳成,N472]\b[this,3,6]属下担心殿下，就随殿下来了",
                    "\t[光明圣子,hero]\b[hero]这个骷髅很厉害，幸好你来了!",
                    "\t[唐佳成,N472]\b[up]嘿嘿",
                    "\t[光明圣子,hero]\b[hero]你既然来了，就帮我去前面探探路吧",
                    "\t[唐佳成,N472]\b[up]嘿嘿，遵命",
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": []
            }
        ]
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,612, 22,689,362, 23, 20,  0,686,365,360,358, 20],
    [ 20, 20, 20,731, 20, 20, 20, 81, 20, 20, 20,610, 20],
    [ 20,688, 20, 81, 20,688, 20, 81, 20,688, 20,729, 20],
    [ 20,610, 20, 81, 20,610, 20, 81, 20,610, 20, 82, 20],
    [ 20,237, 20, 81, 20,237, 20,239, 20,237, 20,711, 20],
    [ 20,  0,  0,238,  0,  0, 20,  0,728,  0, 20,744, 20],
    [ 20, 20, 20, 81, 20, 20,20247, 20, 20, 81, 20, 81, 20],
    [ 20, 21,686,  0,237,  0,728,  0, 81,729,10110,  0, 20],
    [ 20, 20, 20, 20,20247, 20, 20,729, 20,  0,  0, 21, 20],
    [ 20, 21,  0,  0, 20,  0,574,  0, 20,  0,698,711, 20],
    [ 20,  0,687,731, 81,744,  0,  0, 81,745,  0, 21, 20],
    [ 20, 20, 20, 93, 20, 20, 91, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}