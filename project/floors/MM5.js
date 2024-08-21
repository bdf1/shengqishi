main.floors.MM5=
{
    "floorId": "MM5",
    "title": "5 ",
    "name": "5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "shenweiqianchong.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "BN4",
            "loc": [
                6,
                3
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,8": [
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    7
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[葛尔丹,N566]\b[this,6,3]二位长老，往哪里去呀？",
            "\t[沂蒙贤,N570]\b[this,7,5]葛尔丹，莫析辉，我们可是光明神殿的长老，你们岂敢动我们！",
            "\t[葛尔丹,N566]\b[this,6,3]呵呵，三长老人老了，也是糊涂了。我们两个圣子，至少有三分之二的概率成为下一任光明教皇吧。岂会怕你们？",
            "\t[莫析辉,hero]\b[hero]两位长老，你们平日针对我们就算了。不过北纳家族对莫析家族、温明家族、安南家族灭族之仇，还有温明叔叔和安南伯伯的仇，我不得不报！",
            "\t[冷霜迪,N657]\b[this,5,5]卢轩，是你！你这个叛徒，一定是你，背叛了冷霜家族！",
            "\t[卢轩,N578]\b[this,6,4]卢轩从始至终只忠于葛圣子殿下，何来的背叛？",
            "\t[冷霜迪,N657]\b[this,5,5]吃里扒外的东西！汪周，你身为骑士队长，怎么也跟他们狼狈为奸！",
            "\t[汪周,N468]\b[this,7,3]五长老息怒！两位圣子殿下联手，汪周只是审时度势罢了！",
            "\t[沂蒙贤,N570]\b[this,7,5]哼，葛尔丹，莫析辉，你们听好了，北纳家族真的没有对莫析家族动手！你们报错了仇啊！",
            "\t[凌依,N574]\b[this,7,4]住口！老家伙，你还要信口雌黄，我们都搜集到了证据，岂会冤枉你们！",
            "\t[莫析辉,hero]\b[hero]说的不错，有凌依、默默、铁姝搜集的证据，足够了！",
            "\t[沂蒙贤,N570]\b[this,7,5]我们沂蒙家族与北纳家族是联姻，他们对莫析家族下手，我岂会不知！",
            "\t[凌依,N574]\b[this,7,4]呵，二长老和七长老已经陨落，你们怎么说都是对的。",
            {
                "type": "if",
                "condition": "(flag:shengqishi>=1)",
                "true": [
                    "\t[唐佳成,N510]\b[this,5,4]（传音）圣子殿下，这两人确实该杀，不过……我感觉在幕后，有一双手，正推着我们做这些事……要不要杀死他们？"
                ],
                "false": [
                    "\t[希娜,N538]\b[this,5,3]（传音）圣子殿下，这两人确实该杀，不过……我总怕真正的幕后黑手不是他们，而是故意在……到底要不要杀死他们？"
                ]
            },
            {
                "type": "choices",
                "text": "\t[莫析辉,hero]是否杀死二人",
                "choices": [
                    {
                        "text": "杀！",
                        "action": [
                            "\t[众光明骑士,N440]杀！",
                            {
                                "type": "animate",
                                "name": "thunder2",
                                "loc": [
                                    6,
                                    5
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "thunder3",
                                "loc": [
                                    6,
                                    5
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "yijianzhanqianye",
                                "loc": [
                                    6,
                                    5
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "sword6",
                                "loc": [
                                    6,
                                    5
                                ]
                            },
                            "\t[沂蒙贤,N570]\b[this,7,5]可恶的莫析辉，我做鬼也不会放过你们的！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
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
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "setValue",
                                "name": "flag:beina",
                                "value": "1"
                            },
                            "蜜西娅亲密度-1，葛尔丹亲密度+1",
                            {
                                "type": "setValue",
                                "name": "flag:guangmingshengnv",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zhunshengzi",
                                "operator": "+=",
                                "value": "1"
                            },
                            "\t[莫析辉,hero]\b[hero]都各回各家吧！",
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
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "remove": true
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
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        4,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        8,
                                        4
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
                                        4,
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
                                        6,
                                        6
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
                                        8,
                                        6
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "放",
                        "action": [
                            "\t[沂蒙贤,N570]\b[this,7,5]多谢不杀之恩了，走！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
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
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            "蜜西娅亲密度+1，葛尔丹亲密度-1",
                            {
                                "type": "setValue",
                                "name": "flag:guangmingshengnv",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zhunshengzi",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:shengqishi>=1)",
                                "true": [],
                                "false": [
                                    "圣骑士亲密度-1",
                                    "\t[唐佳成,N510]\b[this,5,4]神经病！",
                                    {
                                        "type": "setValue",
                                        "name": "flag:shengqishi",
                                        "operator": "-=",
                                        "value": "1"
                                    }
                                ]
                            },
                            "\t[葛尔丹,N566]\b[this,6,3]莫析辉，你有病是吗？咱们这么多人出手，就是为了让你放了他们！咱们走吧！",
                            "\t[莫析辉,hero]\b[hero]……",
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
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "remove": true
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
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        4,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        8,
                                        4
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
                                        4,
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
                                        6,
                                        6
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
                                        8,
                                        6
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setBlock",
                "number": "I1113",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            },
            "\t[莫析辉,hero]\b[hero]咦？这是？"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16,  0,538,566,468,  0, 16, 16, 16, 16],
    [ 16, 16, 16, 16,440,510,578,574,440, 16, 16, 16, 16],
    [ 16, 16, 16, 16,442,658,  0,572,441, 16, 16, 16, 16],
    [ 16, 16, 16, 16,443,443,443,443,443, 16, 16, 16, 16],
    [ 16, 16, 16, 16,  0,  0,  0,  0,  0, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 83, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16,  0, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16,  0, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16,  0, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 91, 16, 16, 16, 16, 16, 16]
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
        12
    ]
}