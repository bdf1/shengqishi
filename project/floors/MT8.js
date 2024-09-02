main.floors.MT8=
{
    "floorId": "MT8",
    "title": "莫析家族8 ",
    "name": "莫析家族8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "X40099",
    "bgm": "21-30.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,11": [
            "与圣骑士亲密度达到30以上，直接开启与安撒、东方溪的2v2战斗（与东方溪强制战斗，但获得击杀安撒的奖励）。\n与圣骑士亲密度没有达到30，剧情与东方溪强制战斗，安撒可选择性战斗。（可以理解为光明圣子没有帮手的情况下，比较谨慎，趁着安撒不在进入此地先解决东方溪）"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT1",
            "loc": [
                6,
                0
            ]
        },
        "0,1": {
            "floorId": "MT9",
            "loc": [
                12,
                1
            ]
        },
        "12,1": {
            "floorId": "MT10",
            "loc": [
                0,
                1
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,10": [
            {
                "type": "hide",
                "loc": [
                    [
                        0,
                        11
                    ]
                ],
                "remove": true
            },
            "\t[莫析辉,hero]\b[hero]这里是莫析家族的忠烈祠了，想我莫析家族，忠心耿耿为东凌帝国，却遭到如此下场！",
            {
                "type": "if",
                "condition": "(flag:shengqishi>=30)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "N510",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    "\t[${flag:shengqishi_name},N510]\b[this,7,7]圣子殿下，属下已经探查过了，这里没有其他人。",
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            6
                        ],
                        "time": 500
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "turnBlock",
                        "direction": "up"
                    },
                    "\t[莫析辉,hero]\b[hero]列祖列宗在上，不肖子孙莫析辉参拜。",
                    "\t[莫析辉,hero]\b[hero]父亲，母亲，还有莫析家族、安南家族、温明家族死去的族人啊，我身体里流着你们的血，一定不会让你们冤死的，我在此立誓，誓要让北寒皇室、东凌皇室和北纳家族付出血的代价，让族人能够安息！",
                    {
                        "type": "move",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    "\t[${flag:shengqishi_name},N510]\b[this,7,6]圣子殿下，属下一定竭尽全力助殿下复仇！",
                    "\t[???]莫析家族的遗孤啊，你终于来了。",
                    {
                        "type": "playBgm",
                        "name": "shenweiqianchong.mp3"
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            5,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            7,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setBlock",
                        "number": "E1013",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "E955",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "down",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[莫析辉,hero]\b[hero]东方溪，安撒！",
                    "\t[东方溪,E1013]\b[this,7,8]莫析家族的余孽，今天就是你的死期。",
                    "\t[安撒,E955]\b[this,5,8]我们等的就是你，说，莫析家族的宝藏怎么进去！",
                    "\t[莫析辉,hero]\b[hero]你们！你们就不怕，光明神殿的报复吗？",
                    "\t[东方溪,E1013]\b[this,7,8]光明神殿？哈哈哈，光明神殿才不会为了你一个死了的光明圣子灭了自己的势力。而且，古往今来，无数的光明圣子和光明圣女死在了内斗之中，无数的家族都在残酷的斗争众灭亡了，莫析家族，不过是走在它们的老路上罢了。",
                    "\t[安撒,E955]\b[this,5,8]光明圣子，你如果躲在光明神殿不出来，我们还怕你最后成为了光明教皇报复呢，现在嘛，只要杀了你，一个死了的光明圣子，什么都不是！",
                    "\t[莫析辉,hero]\b[hero]哈哈哈哈哈！躲在光明神殿？灭门血仇，我岂能躲在光明神殿里面不出来！今天，我就要用你们的血，祭奠死去的族人！啊，这血海深仇，我一刻都忍不了！",
                    "\t[${flag:shengqishi_name},N510]\b[this,7,6]殿下，我来助你！",
                    "\t[安撒,E955]\b[this,5,8]嗯？你就是光明圣子的守护骑士吧？嘿嘿，正好，你也是圣女的人吧，快，跟我们一起擒下光明圣子，好处少不了你的！",
                    "\t[${flag:shengqishi_name},N510]\b[this,7,6]？",
                    "\t[${flag:shengqishi_name},N510]\b[this,7,6]你在胡说八道什么！背叛殿下是那个不知死活的罗涛，我可不会背叛殿下！",
                    "\t[安撒,E955]\b[this,5,8]……罗涛是谁？",
                    "\t[${flag:shengqishi_name},N510]\b[this,7,6]废话少说，接招吧！",
                    {
                        "type": "jump",
                        "from": [
                            7,
                            6
                        ],
                        "to": [
                            7,
                            7
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "animate",
                        "name": "boss15",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "boss13",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "boss8",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            8
                        ],
                        "to": [
                            7,
                            9
                        ],
                        "time": 500,
                        "keep": true
                    },
                    "\t[东方溪,E1013]\b[this,7,9]好厉害的小子！",
                    "\t[安撒,E955]\b[this,5,8]受死吧！",
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "left:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            7,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "left:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            5,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            6
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            7,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "left:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            4,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "right:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            7,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            3,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            8,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "right:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            8,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[莫析辉,hero]\b[hero]可恶，根本近不了身……",
                    "\t[安撒,E955]\b[this,5,8]东方溪，你还愣着干嘛，快去杀了他们！",
                    "\t[东方溪,E1013]\b[this,7,9]好！",
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            3,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            9,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            8,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            3,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            9,
                            6
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            9,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            9
                        ],
                        "to": [
                            9,
                            8
                        ],
                        "time": 500,
                        "keep": true
                    },
                    "\t[东方溪,E1013]\b[this,9,8]吃我一招！",
                    "\t[${flag:shengqishi_name},N510]\b[this,9,7]找死！",
                    {
                        "type": "animate",
                        "name": "yijianzhanqianye",
                        "loc": [
                            9,
                            8
                        ],
                        "async": true
                    },
                    "\t[东方溪,E1013]\b[this,9,8]啊！",
                    {
                        "type": "moveHero",
                        "time": 500,
                        "async": true,
                        "steps": [
                            "right:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            3,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            9,
                            8
                        ],
                        "to": [
                            5,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            9,
                            7
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "baozha2",
                        "loc": [
                            9,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[莫析辉,hero]\b[hero]滚开！",
                    {
                        "type": "moveAction"
                    },
                    "\t[安撒,E955]\b[this,5,8]东方溪！",
                    "\t[${flag:shengqishi_name},N510]\b[this,9,8]吃我一剑！",
                    {
                        "type": "jump",
                        "from": [
                            9,
                            8
                        ],
                        "to": [
                            6,
                            8
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "turnBlock",
                        "direction": "left",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yijianzhanqianye",
                        "loc": [
                            5,
                            8
                        ],
                        "async": true
                    },
                    "\t[安撒,E955]\b[this,5,8]啊！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "remove": true
                    },
                    "获得金币2000，玉露2瓶",
                    {
                        "type": "setValue",
                        "name": "item:I416",
                        "operator": "+=",
                        "value": "2"
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "2000"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                11,
                                1
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            5,
                            8
                        ],
                        "time": 500
                    },
                    {
                        "type": "changePos",
                        "direction": "right"
                    },
                    "\t[莫析辉,hero]\b[hero]多亏了你。",
                    "\t[${flag:shengqishi_name},N510]\b[this,9,8]殿下的事就是我的事。",
                    "\t[莫析辉,hero]\b[hero]我该去看看莫析家族还剩一些什么了……",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "remove": true
                    }
                ],
                "false": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            6
                        ],
                        "time": 500
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    "\t[莫析辉,hero]\b[hero]列祖列宗在上，不肖子孙莫析辉参拜。",
                    "\t[莫析辉,hero]\b[hero]父亲，母亲，还有莫析家族、安南家族、温明家族死去的族人啊，我身体里流着你们的血，一定不会让你们冤死的，我在此立誓，誓要让北寒皇室、东凌皇室和北纳家族付出血的代价，让族人能够安息！",
                    "\t[???]莫析家族的遗孤啊，你终于来了。",
                    {
                        "type": "playBgm",
                        "name": "shenweiqianchong.mp3"
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "E1013",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[莫析辉,hero]\b[hero]东方溪！",
                    "\t[东方溪,E1013]\b[this,6,8]莫析家族的余孽，今天就是你的死期。",
                    "\t[东方溪,E1013]\b[this,6,8]我一直在等的就是你，说，莫析家族的宝藏怎么进去！",
                    "\t[莫析辉,hero]\b[hero]你！你就不怕，光明神殿的报复吗？",
                    "\t[东方溪,E1013]\b[this,6,8]光明神殿？哈哈哈，光明神殿才不会为了你一个死了的光明圣子灭了自己的势力。而且，古往今来，无数的光明圣子和光明圣女死在了内斗之中，无数的家族都在残酷的斗争众灭亡了，莫析家族，不过是走在它们的老路上罢了。",
                    "\t[莫析辉,hero]\b[hero]东方溪，你够了，莫析家族对东凌帝国忠心耿耿，凭什么，你身为东凌帝国的大将，为什么要这么做！为什么要置百姓于水火之中？",
                    "\t[东方溪,E1013]\b[this,6,8]我知道莫析家族的忠心，可惜，莫析家族如今太强大了，驻守在东凌帝国的边境，你们得到的太多了。有时候，强大、财富，都是一种错，你们已经严重威胁到了东凌帝国的皇室了。",
                    "\t[莫析辉,hero]\b[hero]我们严重威胁到了皇室？呵，你们现在难道没有严重威胁到当今最强大的势力，光明神殿，未来的教皇？",
                    "\t[东方溪,E1013]\b[this,6,8]光明圣子，你如果躲在光明神殿不出来，我们还怕你最后成为了光明教皇报复呢，现在嘛，只要杀了你，一个死了的光明圣子，什么都不是！",
                    "\t[莫析辉,hero]\b[hero]哈哈哈哈哈！躲在光明神殿？灭门血仇，我岂能躲在光明神殿里面不出来！今天，我就要用你们的血，祭奠死去的族人！啊，这血海深仇，我一刻都忍不了！",
                    "\t[东方溪,E1013]\b[this,6,8]受死吧！小子！",
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            7
                        ],
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "boss15",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "boss13",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "boss8",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire3",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire3",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire5",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "vibrate",
                        "direction": "diagonal1",
                        "time": 2000,
                        "speed": 10,
                        "power": 10
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            6
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            8
                        ],
                        "to": [
                            6,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "animate",
                        "name": "fire3",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire5",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jinshu",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "sword1",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "thunder2",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "vibrate",
                        "direction": "diagonal1",
                        "time": 2000,
                        "speed": 10,
                        "power": 10
                    },
                    "\t[莫析辉,hero]\b[hero]光明荡涤污垢，光明驱散黑暗！",
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            8
                        ],
                        "time": 500
                    },
                    "\t[莫析辉,hero]\b[hero]杀！",
                    {
                        "type": "animate",
                        "name": "yijianzhanqianye",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "moveAction"
                    },
                    "\t[东方溪,E1013]\b[this,6,8]啊！怎么会！怎么会这样！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                11,
                                1
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "setBlock",
                        "number": "E955",
                        "loc": [
                            [
                                9,
                                3
                            ]
                        ]
                    },
                    "安撒可以后期击杀。"
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 85, 94],
    [50049,50049,50049,50049,50049,50049, 85,50049,50049,50049,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,  0,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,  0,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,50167,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,  0,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,  0,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,  0,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,  0,  0,  0,  0,  0,  0,  0,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,1078,50049,50049,50049,50049,50049,50049],
    [1013,50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10147],
    [50049,50049,50049,50049,50049,50049, 91,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50159,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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