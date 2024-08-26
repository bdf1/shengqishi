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
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            "\t[迷迭香,E764]\b[this]魔塔内，我对你的爱，就像王州对李华、咸鱼对王大锤那么热烈，你居然感受不到，啊！",
            "最终，邪恶的迷迭香被玩家打败……",
            {
                "type": "if",
                "condition": "(flag:hard===1)",
                "true": [
                    {
                        "type": "win",
                        "reason": "战士"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:hard===2)",
                        "true": [
                            {
                                "type": "win",
                                "reason": "刺客"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:hard===3)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "法师"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:hard===4)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "骑士"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(flag:hard===5)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "拓印者"
                                                    }
                                                ],
                                                "false": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,5": [
            "\t[迷迭香,E764]\b[this,6,4]亲爱的玩家，你来啦！",
            "\t[玩家,hero]\b[hero]你自己测了吗？",
            "\t[迷迭香,E764]\b[this,6,4]测了一下。",
            "\t[玩家,hero]\b[hero]感觉怎么样？",
            "\t[迷迭香,E764]\b[this,6,4]我去除了大部分的塔的坑人。",
            "\t[迷迭香,E764]\b[this,6,4]但是我保留了一部分。",
            "\t[迷迭香,E764]\b[this,6,4]我觉得保留了一部分塔的玩法，才知道你玩的是魔塔。",
            "\t[玩家,hero]\b[hero]你是有意把它保留的吗？",
            "\t[迷迭香,E764]\b[this,6,4]是造塔的过程中，我留下了一部分。",
            "\t[玩家,hero]\b[hero]是故意的还是不小心?",
            "\t[迷迭香,E764]\b[this,6,4]是故意的。",
            "\t[玩家,hero]\b[hero](玩塔中……)",
            "\t[玩家,hero]\b[hero](呕呕……)迷迭香，我要打死你！",
            "\t[迷迭香,E764]\b[this,6,4]！！！",
            "\t[迷迭香,E764]\b[this,6,4]难道你没有感受到我对你炽热的爱吗？",
            "\t[玩家,hero]\b[hero]我绝不会原谅你！受死吧！",
            "\t[迷迭香,E764]\b[this,6,4]呜呜呜，亲爱的玩家，我对你的爱，如太阳般炽热，我可以把心掏给你！",
            "\t[玩家,hero]\b[hero]谁要你的心！受死吧！"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,764,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 83,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,685,  0, 83,  0,685,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 83,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
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