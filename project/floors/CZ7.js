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
        "如果已经收服圣骑士，并且圣骑士已经成为骑士，骷髅队长可以直接过去"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,10": [
            "\t[四长老,recluse]瞧一瞧看一看咧，我这里的钥匙，实惠又有用",
            "\t[光明圣子]呵呵，四长老，你又出来挣钱啦",
            "\t[四长老,recluse]嘿嘿，圣子殿下可要看看?我便宜点卖你",
            "\t[光明圣子]要是贵了我的，当心教皇爷爷找你",
            {
                "type": "openShop",
                "id": "itemShop",
                "open": true
            }
        ],
        "6,10": [
            "\t[凌依,N1151]\b[up]殿下之命，凌依已经带领骑士队将被怪物们杀害的村民埋葬",
            "\t[光明圣子,hero]干的不错，你继续探路",
            "\t[凌依,N1151]\b[up]遵命",
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
                                "name": "item:I492",
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
            "\t[骷髅队长,skeletonWarrior]\b[this,3,6]吼!",
            {
                "type": "if",
                "condition": "(flag:A>1)",
                "true": [
                    {
                        "type": "animate",
                        "name": "sword",
                        "loc": [
                            3,
                            6
                        ]
                    },
                    "\t[乔浩岚,N1152]\b[this,3,6]殿下小心!",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "20"
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
                    "\t[光明圣子,hero]\b[down]你怎么来了",
                    "\t[乔浩岚,N1152]\b[this,3,6]属下担心殿下，就随殿下来了",
                    "\t[光明圣子,hero]\b[up]这个骷髅很厉害，幸好你来了!",
                    "\t[乔浩岚,N1152]\b[up]嘿嘿",
                    "\t[光明圣子,hero]\b[up]你既然来了，就帮我去前面探探路吧",
                    "\t[乔浩岚,N1152]\b[up]嘿嘿，遵命",
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
    [ 20,400, 22,403, 30, 23, 20,  0, 31,416, 28, 27, 20],
    [ 20, 20, 20,204, 20, 20, 20, 81, 20, 20, 20,397, 20],
    [ 20,404, 20, 81, 20,404, 20, 81, 20,404, 20,266, 20],
    [ 20,398, 20, 81, 20,398, 20, 81, 20,398, 20, 82, 20],
    [ 20,208, 20, 81, 20,208, 20,211, 20,208, 20,492, 20],
    [ 20,  0,  0,210,  0,  0, 20,  0,265,  0, 20,205, 20],
    [ 20, 20, 20, 81, 20, 20,70247, 20, 20, 81, 20, 81, 20],
    [ 20, 21, 31,  0,209,  0,265,  0, 81,266,10110,  0, 20],
    [ 20, 20, 20, 20,70247, 20, 20,232, 20,  0,  0, 21, 20],
    [ 20, 21,  0,  0, 20,  0,1151,  0, 20,  0,126,492, 20],
    [ 20,  0, 32,204, 81,205,  0,  0, 81,206,  0, 21, 20],
    [ 20, 20, 20, 91, 20, 20, 91, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ]
}