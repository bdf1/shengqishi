main.floors.GM7=
{
    "floorId": "GM7",
    "title": "骑士团2 ",
    "name": "骑士团2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X30023",
    "bgm": "airuying.mp3",
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
        "\t[葛尔丹,N566]\b[this,5,6]想不到，圣女妹妹也有闲情逸致来骑士团看看呢。",
        "\t[蜜茜娅,N489]\b[this,7,6]闲来无事罢了。我看那个小骑士根骨极佳，不知道是否有去处。",
        "\t[葛尔丹,N566]\b[this,5,6]（那不是莫析辉前几天带回来的小乞丐吗）",
        "\t[葛尔丹,N566]\b[this,5,6]嘿嘿，据我所知，这个小骑士应该是没有去处的。圣女妹妹尽可要去就是了。",
        "\t[蜜茜娅,N489]\b[this,7,6]如此，那就最好。那位小兄弟，你过来一下。",
        "\t[${flag:shengqishi_name},N467]\b[this,6,9]？？？",
        "\t[${flag:shengqishi_name},N467]\b[this,6,9]我？",
        "\t[蜜茜娅,N489]\b[this,7,6]就是你！",
        {
            "type": "move",
            "loc": [
                6,
                9
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:1"
            ]
        },
        "\t[${flag:shengqishi_name},N467]\b[this,6,8]不知该如何称呼您？",
        "\t[蜜茜娅,N489]\b[this,7,6]我乃光明神殿的圣女，你叫我圣女殿下！",
        "\t[${flag:shengqishi_name},N467]\b[this,6,8]圣女殿下好。",
        "\t[蜜茜娅,N489]\b[this,7,6]你叫什么名字？",
        "\t[${flag:shengqishi_name},N467]\b[this,6,8]小的${flag:shengqishi_name}。",
        "\t[蜜茜娅,N489]\b[this,7,6]很好，以后你就跟我了。",
        "\t[${flag:shengqishi_name},N467]\b[this,6,8]可是……圣女殿下，我……",
        "\t[蜜茜娅,N489]\b[this,7,6]怎么？你不愿意？",
        "\t[${flag:shengqishi_name},N467]\b[this,6,8]是的，我不愿意。我准备投靠圣子殿下，成为圣子殿下的骑士。",
        "\t[蜜茜娅,N489]\b[this,7,6]是嘛？",
        "蜜西娅脱下手上的戒指，扔向了${flag:shengqishi_name}，那枚精美的戒指，咕噜咕噜滚到了${flag:shengqishi_name}脚下……",
        "\t[蜜茜娅,N489]\b[this,7,6]若是不愿意的话，你偷盗我戒指的事，可要闹到光明神殿了！",
        "\t[${flag:shengqishi_name},N467]\b[this,6,8]你！",
        {
            "type": "choices",
            "text": "\t[莫析辉,hero]选择",
            "choices": [
                {
                    "text": "指责圣女",
                    "action": [
                        "\t[莫析辉,hero]\b[hero]蜜西娅，你是疯了吗？我的人，你也敢动！",
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    7,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    8,
                                    5
                                ]
                            ]
                        },
                        "\t[蜜茜娅,N489]\b[this,7,6]圣子弟弟，你这是什么意思？",
                        "\t[莫析辉,hero]\b[hero]这个人，我罩的，你算什么东西，也配抢我的人！",
                        "\t[蜜茜娅,N489]\b[this,7,6]谁说是你的人了，他身上有你的名字？",
                        "\t[莫析辉,hero]\b[hero]他都说了要效忠我，你还污蔑他偷戒指，信不信我用光明法术轰死你！",
                        "\t[蜜茜娅,N489]\b[this,7,6]好你个莫析辉，竟敢这么对我说话，来啊，看谁更厉害！",
                        "\t[葛尔丹,N566]\b[this,5,6]哎呀，都是自家兄弟姐妹，不要为了一个小小的骑士伤了和气。",
                        "\t[蜜茜娅,N489]\b[this,7,6]哼，莫析辉，你给我等着！",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    7,
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
                        "与光明圣女的亲密度下降1",
                        {
                            "type": "setValue",
                            "name": "flag:guangmingshengnv",
                            "operator": "-=",
                            "value": "1"
                        },
                        "\t[葛尔丹,N566]\b[this,5,6]卢轩，你去跟圣女妹妹说一声，自家兄弟姐妹，不要太计较啦！",
                        "\t[卢轩,N578]\b[this,4,5]是！",
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
                        "\t[葛尔丹,N566]\b[this,5,6]唉，蜜西娅就是这样，她这个人平时就娇纵惯了，好在圣子弟弟你不怕他，哥哥我啊，可是支持你的哦！",
                        "\t[莫析辉,hero]\b[hero]多谢准圣子哥哥。",
                        "\t[葛尔丹,N566]\b[this,5,6]我先走啦！",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "setValue",
                            "name": "flag:zhunshengzi",
                            "operator": "+=",
                            "value": "1"
                        },
                        "准圣子亲密度增加1",
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]多谢圣子殿下为小的做主！",
                        "\t[莫析辉,hero]\b[hero]无妨，你是我的人，我当然罩着你。",
                        {
                            "type": "setValue",
                            "name": "flag:shengqishi",
                            "operator": "+=",
                            "value": "2"
                        },
                        "${flag:shengqishi_name}亲密度增加2，可以用金币培养${flag:shengqishi_name}的亲密度啦！"
                    ]
                },
                {
                    "text": "指责准圣子",
                    "action": [
                        "\t[莫析辉,hero]\b[hero]哼！葛尔丹，你前些天还看到我带这个人进入骑士队，今天，你竟然跟圣女姐姐说，他没有去处，不知道你安的什么心呢！",
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    8,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    7,
                                    6
                                ]
                            ]
                        },
                        "\t[葛尔丹,N566]\b[this,5,6]原来是圣子弟弟啊，都怪哥哥记性不好，一时间忘了他是你的人。",
                        "\t[莫析辉,hero]\b[hero]哼，准圣子哥哥记性真差，哪一天可别忘了自己是谁。",
                        "\t[葛尔丹,N566]\b[this,5,6]既是如此，哥哥先向弟弟赔罪了。还望弟弟不要计较才是呢！我先走啦！",
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
                                    5,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        "与光明准圣子亲密度减少1",
                        {
                            "type": "setValue",
                            "name": "flag:zhunshengzi",
                            "operator": "-=",
                            "value": "1"
                        },
                        "\t[蜜茜娅,N489]\b[this,7,6]圣子弟弟，没想到这个人是你的人啊，都怪姐姐没有问清楚呢。",
                        "\t[莫析辉,hero]\b[hero]圣女姐姐，你可要收好自己的戒指啊，下次可不能随便丢了。",
                        "\t[蜜茜娅,N489]\b[this,7,6]好，那圣子弟弟有空来圣女宫喝茶啊！",
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
                                    7,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "setValue",
                            "name": "flag:guangmingshengnv",
                            "operator": "+=",
                            "value": "1"
                        },
                        "光明圣女亲密度增加1",
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]多谢圣子殿下为小的做主！",
                        "\t[莫析辉,hero]\b[hero]无妨，你是我的人，我当然要罩着你啦！",
                        "${flag:shengqishi_name}亲密度增加2，可以用金币培养${flag:shengqishi_name}的亲密度啦！",
                        {
                            "type": "setValue",
                            "name": "flag:shengqishi",
                            "operator": "+=",
                            "value": "2"
                        }
                    ]
                },
                {
                    "text": "指责${flag:shengqishi_name}",
                    "action": [
                        "\t[莫析辉,hero]\b[hero]发生了什么事？",
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    8,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    7,
                                    6
                                ]
                            ]
                        },
                        "\t[蜜茜娅,N489]\b[this,7,6]原来是圣子弟弟呢，这个小骑士，偷了我的戒指。",
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]圣子殿下，我没有偷！",
                        "\t[莫析辉,hero]\b[hero]？",
                        "\t[葛尔丹,N566]\b[this,5,6]圣子弟弟，我来说句公道话啊，圣女妹妹的戒指早些时候就不见了，没想到，竟然在这个小骑士面前找到了。你说怪不怪。",
                        "\t[莫析辉,hero]\b[hero]真的假的？",
                        "\t[蜜茜娅,N489]\b[this,7,6]自然是真的，我们一个光明圣女，一个光明准圣子，何必骗你呢？",
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]你们！",
                        "\t[莫析辉,hero]\b[hero]哼，${flag:shengqishi_name}，没想到，你竟然是这样的人，来人啊，把他逐出光明神殿！",
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]啊哈哈哈！光明神殿，好一个光明神殿！光明圣女颠倒是非，准圣子推波助澜，光明圣子是非不分！我就睁着眼看着，看着光明神殿最后的下场！",
                        "\t[罗涛,N582]\b[this,5,1]还不快滚！",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    8
                                ]
                            ],
                            "remove": true
                        },
                        "${flag:shengqishi_name}亲密度下降为负……",
                        {
                            "type": "setValue",
                            "name": "flag:shengqishi",
                            "value": "-1"
                        },
                        "\t[蜜茜娅,N489]\b[this,7,6]呵呵，还是圣子弟弟明察秋毫啊，把此等贼子赶出了光明神殿，是除了一害啊！",
                        {
                            "type": "setValue",
                            "name": "flag:guangmingshengnv",
                            "operator": "+=",
                            "value": "2"
                        },
                        "光明圣女亲密度+2",
                        "\t[葛尔丹,N566]\b[this,5,6]圣子弟弟真是个聪明人，嘿嘿，哥哥就喜欢你这样的。",
                        {
                            "type": "setValue",
                            "name": "flag:zhunshengzi",
                            "operator": "+=",
                            "value": "2"
                        },
                        "准圣子亲密度+2",
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
                                    7,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ],
                            "remove": true
                        }
                    ]
                },
                {
                    "text": "和稀泥",
                    "action": [
                        "\t[莫析辉,hero]\b[hero]怎么回事？",
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    8,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    7,
                                    6
                                ]
                            ]
                        },
                        "\t[蜜茜娅,N489]\b[this,7,6]原来是圣子弟弟呢，这个小骑士，偷了我的戒指。",
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]圣子殿下，我没有偷！",
                        "\t[莫析辉,hero]\b[hero]哈哈，我以为什么事呢，原来是圣女姐姐的戒指丢了呀。",
                        "\t[莫析辉,hero]\b[hero]不如这样，我那里有不少珠宝，姐姐到圣子宫随便挑。",
                        "\t[蜜茜娅,N489]\b[this,7,6]可是这……",
                        "\t[莫析辉,hero]\b[hero]这个新来的骑士，没见过好东西，弟弟会好好管教他的。",
                        "\t[蜜茜娅,N489]\b[this,7,6]行吧，那算啦。一枚戒指而已，找到了，何必让圣子弟弟赔呢，那姐姐就先走了。",
                        "\t[葛尔丹,N566]\b[this,5,6]嗯，那圣子弟弟好好逛，哥哥也先走了。",
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
                                    5,
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
                                    7,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        "\t[${flag:shengqishi_name},N467]\b[this,6,8]多谢圣子殿下！",
                        "\t[莫析辉,hero]\b[hero]一点小事。你是我的人，怎么能随便让他们欺负了去的道理，哈哈。",
                        {
                            "type": "setValue",
                            "name": "flag:shengqishi",
                            "operator": "+=",
                            "value": "1"
                        },
                        "${flag:shengqishi_name}亲密度增加1，可以用金币培养${flag:shengqishi_name}的亲密度啦！"
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:shengqishi>1)",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            1
                        ]
                    ],
                    "floorId": "XY1"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            4,
                            7
                        ]
                    ],
                    "floorId": "XY7"
                }
            ],
            "false": []
        },
        "\t[罗涛,N582]\b[this,5,1]圣子殿下，咱们得去\r[red]光明学院\r[]学习法术了。",
        "\t[莫析辉,hero]\b[hero]好。",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    1
                ]
            ],
            "floorId": "GM1",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": {
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
                    "type": "if",
                    "condition": "(flag:shengqishi>=90)",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:shengqishi>95)",
                            "true": [
                                {
                                    "type": "if",
                                    "condition": "switch:A",
                                    "true": [
                                        "\t[圣骑士${flag:shengqishi_name},N510]吾之荣耀即忠诚！"
                                    ],
                                    "false": [
                                        {
                                            "type": "animate",
                                            "name": "red",
                                            "loc": [
                                                6,
                                                8
                                            ]
                                        },
                                        {
                                            "type": "vibrate",
                                            "direction": "horizontal",
                                            "time": 2000,
                                            "speed": 10,
                                            "power": 10
                                        },
                                        "\t[圣骑士${flag:shengqishi_name},N510]吾之荣耀即忠诚！",
                                        {
                                            "type": "setValue",
                                            "name": "switch:A",
                                            "value": "true"
                                        }
                                    ]
                                }
                            ],
                            "false": [
                                "\t[圣骑士${flag:shengqishi_name},N510]多谢圣子殿下!愿为殿下赴汤蹈火，在所不辞!"
                            ]
                        }
                    ],
                    "false": [
                        "\t[${flag:shengqishi_name}]殿下，我需要变强，可是没有多少资源",
                        {
                            "type": "choices",
                            "text": "\t[光明圣子]给予${flag:shengqishi*20}金币经济支援",
                            "choices": [
                                {
                                    "text": "金币",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "(status:money>=(flag:shengqishi*20))",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "-=",
                                                    "value": "(flag:shengqishi*20)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:shengqishi",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                "\t[${flag:shengqishi_name}]多谢圣子殿下!愿为殿下赴汤蹈火，在所不辞!",
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:shengqishi===10)",
                                                    "true": [
                                                        {
                                                            "type": "animate",
                                                            "name": "red",
                                                            "loc": [
                                                                6,
                                                                8
                                                            ]
                                                        },
                                                        {
                                                            "type": "setBlock",
                                                            "number": "N472",
                                                            "loc": [
                                                                [
                                                                    6,
                                                                    8
                                                                ]
                                                            ]
                                                        }
                                                    ],
                                                    "false": []
                                                },
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:shengqishi===90)",
                                                    "true": [
                                                        {
                                                            "type": "animate",
                                                            "name": "red",
                                                            "loc": [
                                                                6,
                                                                8
                                                            ]
                                                        },
                                                        {
                                                            "type": "setBlock",
                                                            "number": "N510",
                                                            "loc": [
                                                                [
                                                                    6,
                                                                    8
                                                                ]
                                                            ]
                                                        },
                                                        {
                                                            "type": "vibrate",
                                                            "direction": "horizontal",
                                                            "time": 2000,
                                                            "speed": 10,
                                                            "power": 10
                                                        },
                                                        "\t[圣骑士${flag:shengqishi_name},N510]多谢圣子殿下栽培，属下一定尽心守护殿下!"
                                                    ],
                                                    "false": []
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "playSound",
                                                    "name": "操作失败"
                                                },
                                                "你的金币不足!"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "下次再说",
                                    "action": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "3,3": [
            "\t[光明骑士,N440]\b[this]好累啊，好想超市梦云。"
        ],
        "11,1": [
            "\t[光明骑士,N440]\b[this]我喜欢上了一位叫希静的姑娘，不知道她是不是也喜欢我呢……"
        ],
        "9,3": [
            "\t[光明骑士,N440]\b[this]听说有三种宝箱，普通的宝箱需要50魔力值才能打开，还有一种像罐子的，需要80魔力值才能打开。最后一种，是极其稀有的红色大宝箱，需要200魔力值才能打开。"
        ],
        "1,1": [
            "\t[光明骑士,N440]\b[this]我很喜欢玩迷迭香的魔塔，你有空也可以去玩玩哦。"
        ],
        "1,11": [
            "\t[光明骑士,N440]\b[this]龙魂传说和若战还会不会更新呢？催更催更！"
        ],
        "9,9": [
            "\t[光明骑士,N440]\b[this]王州王州，下雨不愁。别人打伞，他有大头。"
        ],
        "3,9": [
            "\t[光明骑士,N440]\b[this]醉仙的贤余是一位勤劳的刨坑者，他一天到晚在那里埋头刨坑，让人一脚踩进他的坑里，他嘿嘿一笑，留下一个潇洒的身影。"
        ],
        "11,11": [
            "\t[光明骑士,N440]\b[this]若你能如期归来，便一同行遍世间，看尽星辰。"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "GM6",
            "loc": [
                6,
                12
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
    [141,141,141,141,141,141, 93,141,141,141,141,141,141],
    [141,442,  0,  0,  0,582,  0,  0,  0,  0,  0,441,141],
    [141,  0,141,141,141,  0,  0,  0,141,141,141,  0,141],
    [141,  0,141,442,  0,  0,  0,  0,  0,441,141,  0,141],
    [141,  0,141,  0,  0,  0,  0,  0,  0,  0,141,  0,141],
    [141,  0,141,  0,578,  0,  0,  0,473,  0,141,  0,141],
    [141,  0,141,141,  0,566,  0,489,  0,141,141,  0,141],
    [141,  0,141,  0,  0,  0,  0,  0,  0,  0,141,  0,141],
    [141,  0,141,  0,  0,  0,  0,  0,  0,  0,141,  0,141],
    [141,  0,141,442,  0,  0,679,  0,  0,441,141,  0,141],
    [141,  0,141,141,141,  0,  0,  0,141,141,141,  0,141],
    [141,442,  0,  0,  0,  0,  0,  0,  0,  0,  0,441,141],
    [141,141,141,141,141,141,141,141,141,141,141,141,141]
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