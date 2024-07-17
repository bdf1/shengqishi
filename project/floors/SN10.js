main.floors.SN10=
{
    "floorId": "SN10",
    "title": "圣女宫 10 ",
    "name": "10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "T1067",
    "bgm": "ending.mp3",
    "firstArrive": [
        {
            "type": "jumpHero",
            "loc": [
                6,
                11
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[莫析辉,hero]\b[hero]圣女姐姐，我来了。",
        "\t[蜜茜娅,N489]\b[this,6,2]圣子弟弟来啦，真是太令姐姐高兴了。",
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:4"
            ]
        },
        "\t[莫析辉,hero]\b[hero]呵，我要是那么快来到圣女宫，那你布下的这么多怪物，岂不是白费了？",
        "\t[蜜茜娅,N489]\b[this,6,2]弟弟误会了，姐姐也是为了弟弟，锻炼锻炼啦。要知道，我养这么多怪物，也是不容易的，拿出来给弟弟练练手，也是促进弟弟的实力嘛。",
        "\t[蜜茜娅,N489]\b[this,6,2]还不快给圣子殿下上茶？",
        "\t[蝶影,N432]\b[this,7,4]是。",
        "\t[莫析辉,hero]\b[hero]不必了，咱们直接研习光明法术吧！",
        "\t[蜜茜娅,N489]\b[this,6,2]也行。咱们光明神殿有一招联合绝技，光明裁决。专门克制黑暗的。",
        "\t[莫析辉,hero]\b[hero]黑暗？",
        "\t[蜜茜娅,N489]\b[this,6,2]是的，在很久很久以前，光明与黑暗并存。光明之神最终打败了黑暗之神，所以现在的光明神殿占据着大陆绝大部分。",
        "\t[蜜茜娅,N489]\b[this,6,2]不过想来这光明裁决也用不上，毕竟黑暗神殿早已没落，要是黑暗神殿能卷土重来，那才是真正的笑话。",
        "\t[莫析辉,hero]\b[hero]也是，光明神殿现在坐拥四大帝国，二十八大家族，黑暗神殿想要卷土重来，除非破除四大帝国，二十八大家族，否则，凭什么与光明神殿斗？",
        "\t[蜜茜娅,N489]\b[this,6,2]唉，都是教皇爷爷和大长老逼我们练习。我和葛尔丹早就练烦了。我觉得与圣子弟弟更亲切，我们一定可以练习得更好。",
        "\t[莫析辉,hero]\b[hero]嗯。听说姐姐与南荒帝国的二皇子订婚了，真是可喜可贺。",
        "\t[蜜茜娅,N489]\b[this,6,2]那可比不过圣子弟弟，这么早就撩到了北寒帝国三公主。",
        "\t[莫析辉,hero]\b[hero]圣女姐姐消息好灵通，居然知道了我与希娜联姻的事情。",
        "\t[蜜茜娅,N489]\b[this,6,2]这有什么，圣子弟弟，咱们赶紧练习光明法术吧！",
        "\t[莫析辉,hero]\b[hero]好。",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "一天后",
        {
            "type": "setCurtain",
            "time": 500
        },
        "修炼光明法术有成，光明宝典晋级！",
        {
            "type": "setValue",
            "name": "item:I624",
            "operator": "+=",
            "value": "1"
        },
        "\t[蜜茜娅,N489]\b[this,6,2]时候不早了，圣子弟弟早些回去吧！",
        "\t[莫析辉,hero]\b[hero]好。",
        "\t[蜜茜娅,N489]\b[this,6,2]对了，葛尔丹不是什么好东西，你可当心点呀。他表面上与你笑嘻嘻的，背地里说不准就给你一刀子。",
        {
            "type": "choices",
            "text": "\t[到底相信谁？]选择",
            "choices": [
                {
                    "text": "葛尔丹",
                    "action": [
                        "与光明准圣子葛尔丹亲密度+1",
                        {
                            "type": "setValue",
                            "name": "flag:zhunshengzi",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "text": "蜜西娅",
                    "action": [
                        "与光明圣女蜜西娅亲密度+1",
                        {
                            "type": "setValue",
                            "name": "flag:guangmingshengnv",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                }
            ]
        },
        "\t[莫析辉,hero]\b[hero]好。多谢圣女姐姐。",
        "\t[罗涛,N582]\b[this,7,8]圣子殿下，教皇陛下说，要你有空去骑士团看看，了解了解光明神殿的架构。",
        "\t[莫析辉,hero]\b[hero]嗯，我知道了，那就去看看吧！",
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    6
                ]
            ],
            "floorId": "GM2",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,3": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<200)",
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
                                "value": "200"
                            },
                            {
                                "type": "playSound",
                                "name": "door.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60341"
                            },
                            "获得七阶血红宝石一枚、五阶黄宝石一枚、琼浆一瓶",
                            {
                                "type": "setValue",
                                "name": "item:I611",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I357",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I415",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "2,3": [
            {
                "type": "confirm",
                "text": "确认要打开这个宝箱吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<200)",
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
                                "value": "200"
                            },
                            {
                                "type": "playSound",
                                "name": "door.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60341"
                            },
                            "获得黄钥匙*5，蓝钥匙*1，金币*100",
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "operator": "+=",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "100"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "5,4": [
            "\t[牧迟,N473]\b[this]守护骑士牧迟，永远忠于圣女殿下！"
        ],
        "7,4": [
            "\t[蝶影,N432]\b[this]圣子殿下，在这里的两个红色的大宝箱，里面有好东西哦！"
        ],
        "6,2": [
            "\t[蜜茜娅,N489]\b[this]啊，你说我怎么知道你和希娜的婚事的，当然是听说啦，听说啦！"
        ],
        "7,11": [
            "\t[光明骑士,N440]\b[this]誓死效忠圣女殿下！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "7,12": [
            "\t[光明骑士,N440]\b[this]誓死效忠圣女殿下！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "5,11": [
            "\t[光明骑士,N440]\b[this]誓死效忠圣女殿下！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "5,12": [
            "\t[光明骑士,N440]\b[this]誓死效忠圣女殿下！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "SN9",
            "loc": [
                6,
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
    [  0,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,  0],
    [  0,50049,50049,50049,50049,50049,50071,50049,50049,50049,50049,50049,  0],
    [  0,  0,60355,  0,  0,50100,489,50100,  0,  0,60355,  0,  0],
    [30858,30859,60549,50162,50163,  0,  0,  0,50162,50163,60549,30856,30857],
    [  0,  0,  0,  0,  0,473,  0,432,  0,  0,  0,  0,  0],
    [50164,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50164],
    [  0,  0,50165,50094,  0,  0,  0,  0,  0,50095,50165,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,50165,50094,  0,  0,  0,585,  0,50095,50165,  0,  0],
    [50164,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50164],
    [  0,  0,50165,50094,  0,  0,  0,  0,  0,50095,50165,  0,  0],
    [  0,  0,  0,  0,  0,442,  0,441,  0,  0,  0,  0,  0],
    [30858,30859,50164,50164,50164,442, 91,441,50164,50164,50164,30856,30857]
],
    "bgmap": [
    [31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054],
    [31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054],
    [31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054],
    [31054,31054,30944,30945,30946,30947,30948,30949,30950,30951,31016,31054,31054],
    [31054,31054,30952,30953,30954,30955,30956,30957,30958,30959,31024,31054,31054],
    [31054,31054,30960,30961,30962,30963,30964,30965,30966,30967,31032,31054,31054],
    [31054,31054,30968,30969,30970,30971,30972,30973,30974,30975,31040,31054,31054],
    [31054,31054,30976,30977,30978,30979,30980,30981,30982,30983,31017,31054,31054],
    [31054,31054,30984,30985,30986,30987,30988,30989,30990,30991,31025,31054,31054],
    [31054,31054,30992,30993,30994,30995,30996,30997,30998,30999,31033,31054,31054],
    [31054,31054,31000,31001,31002,31003,31004,31005,31006,31007,31041,31054,31054],
    [31054,31054,31008,31009,31010,31011,31012,31013,31014,31015,31049,31054,31054],
    [31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054,31054]
],
    "fgmap": [
    [  0,  0,50006,50007,50124,  0,50133,  0,50124,50006,50007,  0,  0],
    [30842,30843,50014,50015,50132,  0,  0,  0,50132,50014,50015,30840,30841],
    [30850,30851,  0,50154,50155,  0,  0,  0,50154,50155,  0,30848,30849],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [50156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50156],
    [  0,  0,50157,50086,  0,  0,  0,  0,  0,50087,50157,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,50157,50086,  0,  0,  0,  0,  0,50087,50157,  0,  0],
    [50156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50156],
    [  0,  0,50157,50086,  0,  0,  0,  0,  0,50087,50157,  0,  0],
    [30842,30843,  0,  0,  0,  0,  0,  0,  0,  0,  0,30840,30841],
    [30850,30851,50156,50156,50156,  0,  0,  0,50156,50156,50156,30848,30849],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,50049,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,50079,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196],
    [30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ]
}