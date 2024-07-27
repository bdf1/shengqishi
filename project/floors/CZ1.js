main.floors.CZ1=
{
    "floorId": "CZ1",
    "title": "村庄 1 ",
    "name": "村庄1",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "\t[沂蒙贤,N574]\b[this,6,1]呀，小圣子",
            "\t[光明圣子,hero]\b[hero]三长老，您知道黑暗势力入侵的村庄在哪个方向吗",
            "\t[沂蒙贤,N574]\b[this,6,1]我当然知道啦，就在这个方向，你快上去吧",
            "\t[光明圣子,hero]\b[hero]多谢三长老",
            {
                "type": "move",
                "loc": [
                    6,
                    1
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "left:1"
                ]
            }
        ],
        "9,6": [
            "\t[凌依,N574]\b[this,9,6]凌依拜见圣子殿下",
            "\t[光明圣子,hero]\b[hero]不必多礼，说说这里的情况吧",
            "\t[凌依,N574]\b[this,9,6]好，教皇陛下还是担心殿下安危，派了三长老、四长老和七长老以及属下协助殿下",
            "\t[凌依,N574]\b[this,9,6]不过属下认为，三长老毕竟是圣女的人，他的话不太可信，圣子殿下应当小心",
            "\t[光明圣子,hero]\b[hero]好，我自有决断，你继续去探路",
            "\t[凌依,N574]\b[this,9,6]属下遵命!",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,6": [
            "\t[温明啸,N550]\b[this]辉儿，快过来，我给你开了一条路，加油哦",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "5,1": [
            "\t[沂蒙贤,N574]\b[this,5,1]快去吧，嘿嘿"
        ],
        "7,3": {
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
                "\t[光明圣子]你在这里干嘛",
                "\t[乞丐,N1147]你要干什么",
                {
                    "type": "choices",
                    "text": "\t[光明圣子]选择",
                    "choices": [
                        {
                            "text": "我要你身后的宝石，还不速速滚开",
                            "action": [
                                "\t[乞丐,N1147]该死的光明圣子，我不会放过你的!",
                                {
                                    "type": "setValue",
                                    "name": "flag:A",
                                    "operator": "-=",
                                    "value": "1"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            7,
                                            3
                                        ]
                                    ],
                                    "remove": true
                                }
                            ]
                        },
                        {
                            "text": "无事",
                            "action": []
                        }
                    ]
                }
            ]
        },
        "6,11": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    "\t[光明圣子,hero]\b[hero]四长老，你这么坑我，不怕教皇爷爷和二长老找你算账吗",
                    "\t[枯云窦,N669]\b[this]嘿嘿，有钱不赚非君子，我走啦",
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
                    {
                        "type": "confirm",
                        "text": "这条路由我管\n你出200金币就让你过去。",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "(status:money>=200)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "200"
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
                                    "\t[枯云窦,N669]\b[this]你的金币不足！"
                                ]
                            }
                        ],
                        "no": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "GM1",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
            "floorId": "CZ2",
            "loc": [
                6,
                12
            ]
        },
        "6,12": {
            "floorId": "CZ3",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "CZ4",
            "loc": [
                12,
                6
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
    [ 20, 20, 20, 20, 20,  0,570,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20,20360,20361],
    [ 20, 20,10300,460,10299,  0,  0,  0, 20, 20, 20,20368,20369],
    [ 92,550,  0,  0,  0,  0,  0,  0,  0,574,  0,  0, 93],
    [ 20, 20, 20, 20,453, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,20392,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,20400,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,669, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        12,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}