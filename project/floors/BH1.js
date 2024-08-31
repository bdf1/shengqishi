main.floors.BH1=
{
    "floorId": "BH1",
    "title": "北寒小道 1 ",
    "name": "北寒小道1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        "\t[辉,hero]\b[hero]啊，出城啦~",
        "\t[罗涛,N582]\b[this,6,8]殿下，那属下先去探路了。",
        "\t[辉,hero]\b[hero]嗯",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 50,
            "steps": [
                "up:8"
            ]
        },
        "宝箱会显示宝箱内的物品，灰色表示金币。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            "\t[光明骑士,N440]\b[this]守卫光明神殿是我的职责！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "5,11": [
            "\t[光明骑士,N440]\b[this]守卫光明神殿是我的职责！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "3,6": [
            "\t[???,N467]\b[this,0,6]呜呜呜，几位大爷，给点吃的吧！",
            "\t[光明骑士,N440]\b[this,2,5]去去去，光明神殿哪有你吃的，快滚快滚！",
            "\t[光明骑士,N440]\b[this,2,7]就是，就是。再不滚，小心我揍你！",
            "\t[???,N467]\b[this,0,6]啊，那位大人，帮帮我吧！",
            "\t[辉,hero]\b[hero]你们在干什么？",
            {
                "type": "turnBlock",
                "direction": "right",
                "loc": [
                    [
                        2,
                        5
                    ]
                ]
            },
            {
                "type": "turnBlock",
                "direction": "right",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
            },
            "\t[光明骑士,N440]\b[this,2,7]圣子殿下！",
            "\t[光明骑士,N440]\b[this,2,5]回圣子殿下，这里有一个从西边贫民窟过来的小乞丐。我们这就赶走他！",
            "\t[???,N467]\b[this,0,6]不……不要！圣子殿下！救救我吧！",
            "\t[辉,hero]\b[hero]……",
            {
                "type": "choices",
                "text": "\t[光明圣子,hero]选择",
                "choices": [
                    {
                        "text": "赶走乞丐",
                        "action": [
                            "\t[辉,hero]\b[hero]给他一点吃的，让他去别处吧！",
                            "\t[光明骑士,N440]\b[this,2,5]是！",
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
                            "\t[光明骑士,N440]\b[this,2,5]给我滚！",
                            "\t[???,N467]\b[this,0,6]骑士大人，给我一点吃的，给我一点吃的吧！",
                            "\t[光明骑士,N440]\b[this,2,7]走开！",
                            "\t[???,N467]\b[this,0,6]啊！",
                            "小乞丐身上掉下一瓶药水……",
                            "\t[光明骑士,N440]\b[this,2,7]呀！这是传说中的琼浆呢！",
                            "\t[光明骑士,N440]\b[this,2,5]咱们献给圣子殿下，一定能得到圣子殿下的赞赏，嘿嘿。",
                            "\t[???,N467]\b[this,0,6]不，不要，那是我妈妈留给我的！啊！",
                            "\t[光明骑士,N440]\b[this,2,7]滚一边去！",
                            "\t[???,N467]\b[this,0,6]咳咳（口吐鲜血）……可恶的光明圣子，我恨你！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        0,
                                        6
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "setCurtain",
                                "time": 500
                            },
                            "\t[光明骑士,N440]\b[this,2,5]殿下",
                            "\t[辉,hero]\b[hero]给了那个小乞丐吃的了吗？",
                            "\t[光明骑士,N440]\b[this,2,5]给了给了，我们给了很多吃的给他，对了，殿下，我们这里捡到一个宝物，献给殿下！",
                            {
                                "type": "setValue",
                                "name": "item:I416",
                                "operator": "+=",
                                "value": "1"
                            },
                            "\t[辉,hero]\b[hero]真是个好东西呀，你们干的不错！",
                            "\t[光明骑士,N440]\b[this,2,7]谢殿下！",
                            {
                                "type": "setValue",
                                "name": "flag:shengqishi",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setBlock",
                                "number": "N467",
                                "loc": [
                                    [
                                        7,
                                        3
                                    ]
                                ],
                                "floorId": "CZ1"
                            },
                            {
                                "type": "setBlock",
                                "number": "I416",
                                "loc": [
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "floorId": "CZ1"
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        2,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        2,
                                        7
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "留下乞丐",
                        "action": [
                            "\t[辉,hero]\b[hero]这样吧，你叫什么名字?留在我身边吧。",
                            "\t[???,N467]\b[this,0,6]啊?",
                            "\t[光明骑士,N440]\b[this,2,7]殿下，这小子不清不楚的，你怎么能让他留在身边呢……",
                            "\t[辉,hero]\b[hero]我意已决，不用多说。你叫什么名字？",
                            "\t[???,N467]\b[this,0,6]回殿下，我叫${flag:shengqishi_name}。",
                            "\t[辉,hero]\b[hero]那好，${flag:shengqishi_name}，你去圣子宫等着吧。我给你一些东西。",
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "-=",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "-=",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "status:hpmax",
                                "operator": "-=",
                                "value": "200"
                            },
                            "资助可怜的小乞丐${flag:shengqishi_name}，攻防-2，生命上限-200",
                            "\t[${flag:shengqishi_name},N467]\b[this,0,6]谢谢圣子殿下！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        2,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        2,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        0,
                                        6
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "setBlock",
                                "number": "N467",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "floorId": "GM3"
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "floorId": "GM3"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,6": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "openShop",
                        "id": "shop2",
                        "open": true
                    }
                ],
                "false": [
                    "\t[辉,hero]\b[hero]老人家，你在这里摆摊呢？",
                    "\t[???,N669]\b[this]是啊，老朽这些钥匙，经过了光明之神的赐福，你多买几把吧?",
                    "\t[辉,hero]\b[hero]呵呵，光明之神的赐福?你知道我是谁吗？",
                    "\t[???,N669]\b[this]那老朽怎么知道呢？咦?这光明之力好纯净……你是……",
                    "\t[辉,hero]\b[hero]哼！",
                    "\t[???,N669]\b[this]原来你就是前些天的新任光明圣子，莫析辉……",
                    "\t[辉,hero]\b[hero]你知道就好。你拿光明之神的名义在这里招摇撞骗，走，跟我去光明神殿忏悔吧！",
                    "\t[???,N669]\b[this]嘿嘿，等一下嘛。小圣子，我是西武枯云家族的枯云窦。",
                    "\t[辉,hero]\b[hero]我管你哪个家族呢！跟我去光明神殿！等等，枯云窦?你是四长老?",
                    "\t[枯云窦,N669]\b[this]正是正是！小圣子，不要拉拉扯扯的，多不成体统。",
                    "\t[辉,hero]\b[hero]是四长老又如何，我前几天的被封为圣子，接受光明之神的洗礼，也没见你来，我就不给你面子！走，跟我去见教皇爷爷，让教皇爷爷看看，你在这里招摇撞骗！",
                    "\t[枯云窦,N669]\b[this]哎呀呀！我的小圣子唉，不是我不来观礼啊，实在是我和六长老管着光明神殿的收入，不得不出来挣点钱。",
                    "\t[辉,hero]\b[hero]骗谁呢？光明神殿啥时候沦落到一个长老出来摆摊了？走，跟我去见教皇爷爷！",
                    "\t[枯云窦,N669]\b[this]额，非也非也，这只是我的一个小小分身啦！光明神殿的这些宝物，确实是及其难制作的，让那些小厮管着一些烂货还行，但这大头啊，还是得我们几个高层管着……这样吧，我给你打个五折！",
                    "\t[辉,hero]\b[hero]那这还差不多！",
                    {
                        "type": "openShop",
                        "id": "shop2",
                        "open": true
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "true"
                    }
                ]
            }
        ],
        "5,1": [
            "红宝石增加攻击力\n蓝宝石增加防御力\n绿宝石增加护盾值\n黄宝石增加全属性\n白宝石进行加点\n血红宝石增加生命上限\n粉臻宝石增加魔力值\n各色钥匙对应各色门\n琼浆雨露以及血瓶进行相应的回复生命值"
        ],
        "7,1": [
            "商店50次升级一次\n计分方式：攻+防+护盾/6+血限/300\n计分前可以卖掉琼浆玉露和神之血加点。"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "GM1",
            "loc": [
                9,
                0
            ]
        },
        "6,0": {
            "floorId": "BH2",
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
    [ 20, 20, 20, 20, 20, 20, 91, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,10289,  0,10289, 20, 20, 20, 20, 20],
    [ 20, 21, 21, 21, 82,  0,  0,  0, 81, 81, 81, 22, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0,20400, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [  0,  0,441, 20, 20,  0,  0,  0, 20, 20,102,  0,102],
    [678,  0,  0,  0,204,  0,  0,  0, 81,  0,  0,670,  0],
    [  0,  0,441, 20, 20,  0,  0,  0, 20, 20,102,  0,102],
    [ 20, 20, 20, 20, 20,  0,582,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20,20401,  0,  0,  0,10299, 20, 20, 20, 20],
    [ 20, 20, 20, 20,10300,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,442,  0,441, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 91, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,20392,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,101,  0,101],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,101,  0,101],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,20393,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ]
}