main.floors.sample0=
{
    "floorId": "sample0",
    "title": "样板 0 层",
    "name": "0",
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "bgm": "bgm.mp3",
    "ratio": 1,
    "map": [
    [  0,  0,220,  0,  0, 20, 87,  3, 58, 59, 60, 61, 64],
    [  0,246,  0,246,  0, 20,  0,  3, 57, 72, 63, 43, 44],
    [219,  0,  0,  0,219, 20, 54,  3, 53, 54, 55, 56, 69],
    [ 20, 20,125, 20, 20, 20, 69,  3, 49, 50, 51, 52, 68],
    [251,247,256,234,248,  6, 62,  3, 35, 36, 46, 47, 48],
    [  6,  6,125,  6,  6,  6, 55,  3,  0,  0,  0,  0,  0],
    [208,227,212,216,278,  5, 64,  1,  1,  1,319,  1,  1],
    [201,205,217,215,224,  5, 42,  1, 27, 28, 29, 30, 31],
    [  5,  5,125,  5,  5,  5, 41,  1, 21, 22, 23, 24, 26],
    [  0,  0,263,  0,  0,  0, 45,  1,  1,  1,121,  1,  1],
    [  4,  4,133,  4,  4,10303,  0,  0,  0,  0,  0, 85,124],
    [ 87, 11, 12, 13, 14,10303,10303,125,125,125,  2,  2,  2],
    [ 88, 89, 90, 91, 92, 93, 94,  2, 81, 82, 83, 84, 86]
],
    "firstArrive": [
        {
            "type": "setText",
            "background": "winskin.png",
            "time": 0
        },
        "\t[样板提示]首次到达某层可以触发 firstArrive 事件，该事件可类似于RMXP中的“自动执行脚本”。\n\n本事件支持一切的事件类型，常常用来触发对话，例如：",
        "\t[hero]\b[up,hero]我是谁？我从哪来？我又要到哪去？",
        "\t[仙子,fairy]你问我...？我也不知道啊...",
        "本层主要对道具、门、怪物等进行介绍，有关事件的各种信息在下一层会有更为详细的说明。"
    ],
    "events": {
        "2,10": [
            "\t[少女,npc0]\b[this]这些是路障、楼梯、传送门。",
            "\t[少女,npc1]\b[this]血网的伤害数值、中毒后每步伤害数值、衰弱时攻防下降的数值，都在全塔属性（快捷键B）的全局数值（values）内定义。\n\n路障同样会尽量被自动寻路绕过。",
            "\t[少女,npc2]\b[this]楼梯和传送门需要在地图选点（快捷键X）的“楼层转换”中定义目标楼层和位置，可参见样板里已有的的写法。",
            {
                "type": "hide",
                "time": 500
            }
        ],
        "2,5": [
            "\t[老人,wizard]\b[this]模仿、吸血、中毒、衰弱、诅咒。\n\n请注意吸血怪需要设置value为吸血数值，可参见样板中黑暗大法师的写法。",
            {
                "type": "hide",
                "time": 500
            }
        ],
        "2,3": [
            "\t[老人,wizard]\b[this]领域、夹击。\n请注意领域怪需要设置value为伤害数值，可参见样板中初级巫师的写法。",
            "\t[老人,wizard]\b[this]当领域、阻击、激光和夹击同时发生时，先计算领域、阻击、激光（同时计算），再计算夹击。\n自动寻路同样会尽量绕过这些区域。",
            {
                "type": "hide",
                "time": 500
            }
        ],
        "12,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[仙子,fairy]\b[this]只有楼上启用事件后，才能看到我并可以和我对话来触发事件。",
                {
                    "type": "hide",
                    "time": 500
                }
            ]
        },
        "2,8": [
            "\t[老人,wizard]\b[this]这些都是各种各样的怪物，所有怪物的数据都在 project 文件夹的 enemys.js 中设置。\n（注意是 enemys，而非 enemies）",
            "\t[老人,wizard]\b[this]这批怪物分别为：\n\\i[greenSlime]普通、\\i[bat]先攻、\\i[bluePriest]魔攻、\\i[rock]坚固、\\i[swordsman]2连击、\\i[vampire]多连击、\\i[redKnight]破甲、\\i[ghostSoldier]反击、\\i[slimeman]净化。",
            "\t[老人,wizard]\b[this]打败怪物后可触发 afterBattle 事件。\n\n有关事件的各种信息在下一层会有更为详细的说明。",
            {
                "type": "hide",
                "time": 500
            }
        ],
        "9,11": [
            {
                "type": "choices",
                "text": "\t[执杖伯伯]换个背景",
                "choices": [
                    {
                        "text": "透明+0.1",
                        "need": "!flags._backalp_||flags._backalp_>0.1",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags._backalp_= flags._backalp_- 0.1 || 0.4;core.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "透明-0.1",
                        "need": "!flags._backalp_||flags._backalp_<0.9",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags._backalp_= flags._backalp_+ 0.1 || 0.6;core.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "去掉星空",
                        "condition": "!flags.starOff",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags.starOff=true\n}"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "加上星空",
                        "condition": "flags.starOff",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nflags.starOff=false\n}"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.createSprBack();\n}"
                            },
                            {
                                "type": "insert",
                                "loc": [
                                    9,
                                    11
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "换个图",
                        "action": [
                            "\t[执杖伯伯,wizard]你为什么不自己找一张"
                        ]
                    },
                    {
                        "text": "爬",
                        "color": [
                            162,
                            162,
                            162,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "10,9": [
            "\t[老人,man]\b[down,null]这些是部分本样板支持的道具。\n\n道具分为 items、constants、tools、equips 四类。\nitems 为即捡即用类道具，例如宝石、血瓶等。\nconstants 为永久道具，例如怪物手册、楼层传送器、幸运金币等。\ntools 为消耗类道具，例如破墙镐、炸弹、中心对称飞行器等。\nequips 为装备，例如剑盾等。",
            "\t[老人,man]\b[up]有关道具效果，定义在project文件夹的items.js中。\n目前大多数道具已有默认行为，如有自定义的需求请修改道具的图块属性。",
            "\t[老人,man]\b[up]拾取道具结束后可触发 afterGetItem 事件。\n\n有关事件的各种信息在下一层会有更为详细的说明。",
            {
                "type": "hide",
                "time": 500
            }
        ],
        "8,11": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 240,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[执杖伯伯]修改状态栏色相",
                    "choices": [
                        {
                            "text": "+20",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statuscol_ = flags._statuscol_ + 20 || 0 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "-20",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statuscol_ = flags._statuscol_ - 20 || 0 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "炫彩",
                            "condition": "!flags._coltrue_",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._coltrue_=true\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "关闭炫彩",
                            "condition": "flags._coltrue_",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._coltrue_=false\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        8,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "爬",
                            "color": [
                                162,
                                162,
                                162,
                                1
                            ],
                            "action": []
                        }
                    ]
                }
            ]
        },
        "7,11": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 1,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[执杖伯伯]修改状态栏灰度/亮度",
                    "choices": [
                        {
                            "text": "亮度+0.1",
                            "need": "!flags._statusbrg_||flags._statusbrg_<1.5",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusbrg_ = flags._statusbrg_ + 0.1 || 1.1 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "亮度-0.1",
                            "need": "!flags._statusbrg_||flags._statusbrg_>0.1",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusbrg_ = flags._statusbrg_ - 0.1 || 0.9 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "灰度+10",
                            "need": "!flags._statusgry_||flags._statusgry_<100",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusgry_ = flags._statusgry_ + 10 || 10 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "灰度-10",
                            "need": "flags._statusgry_>10",
                            "action": [
                                {
                                    "type": "function",
                                    "function": "function(){\nflags._statusgry_ = flags._statusgry_ - 10 || 0 ;core.createSpr0();core.createSprBack();\n}"
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        7,
                                        11
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        },
                        {
                            "text": "爬",
                            "color": [
                                162,
                                162,
                                162,
                                1
                            ],
                            "action": []
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": "sample1",
            "stair": "downFloor"
        },
        "0,11": {
            "floorId": "sample0",
            "loc": [
                0,
                12
            ]
        },
        "0,12": {
            "floorId": "sample0",
            "stair": "upFloor"
        },
        "1,12": {
            "floorId": "sample0",
            "loc": [
                1,
                12
            ]
        },
        "2,12": {
            "floorId": "sample0",
            "loc": [
                2,
                12
            ]
        },
        "3,12": {
            "floorId": "sample0",
            "loc": [
                6,
                1
            ],
            "direction": "up"
        },
        "4,12": {
            "floorId": "sample0",
            "loc": [
                0,
                9
            ],
            "direction": "left",
            "time": 1000
        },
        "5,12": {
            "floorId": "sample0",
            "loc": [
                6,
                10
            ],
            "time": 0,
            "portalWithoutTrigger": false
        },
        "6,12": {
            "floorId": "sample0",
            "loc": [
                10,
                10
            ],
            "direction": "left",
            "time": 1000
        }
    },
    "afterBattle": {
        "2,6": [
            "\t[ghostSoldier]\b[this]不可能，你怎么可能打败我！\n（一个打败怪物触发的事件）"
        ],
        "0,9": [
            "这是一个高度为 48 个像素而非 32 个像素的敌人。\n高敌人的素材存放在 materials 文件夹中 enemy48.png 的部分。"
        ]
    },
    "afterGetItem": {
        "9,1": [
            "技能的支持需要依赖状态栏的“魔力”以及脚本编辑的“按键处理”，详见帮助文档“个性化”一节。"
        ],
        "12,2": [
            "跳跃靴和支援怪的跳跃音效是用脚本额外添加的，\n如果想为任意跳跃指令添加音效，请查阅帮助文档中的“脚本——复写函数”章节。"
        ],
        "8,3": [
            "炸弹是只能炸面前的怪物还是四个甚至八个方向的怪物，\n由其图块属性（快捷键C）中的“使用效果”决定。\n不能被炸的怪物请直接在该怪物的图块属性中勾选“不可炸”，\n可参见样板里黑衣魔王和黑暗大法师的写法。\nV2.8.1起，炸弹炸怪可以添加获得金经/触发战后事件，详见其使用效果中的注释。"
        ],
        "10,3": [
            "“上楼”和“下楼”的目标层由全塔属性（快捷键B）的“楼层列表”顺序所决定。"
        ],
        "12,3": [
            "如果想制作类似于生命魔杖等可以被批量使用的道具，请参照生命魔杖图块属性（快捷键B）中\n useItemEvent 的写法。\n其基本原理就是使用【接受用户输入】让玩家在弹窗中输入想要使用的物品数量，再判断玩家的输入是否合法，如果输入合法就扣减相应数量的物品并结算物品效果。\n要注意的是，在使用物品时会先消耗一个物品，所以记得在编辑 useItemEvent 时先用 core.addItem 恢复一个物品。"
        ],
        "8,4": [
            "剑盾的道具类别设为equips才可以装备，\n如果设为items则会直接增加属性。",
            "在全塔属性（快捷键B）的系统开关中设置是否启用装备栏按钮。\n如果启用则装备栏按钮会替代楼传按钮。\n无论是否启用，玩家都可以双击道具栏按钮呼出装备栏。"
        ],
        "9,4": [
            "装备的种类由全塔属性（快捷键B）中的“装备孔”决定。\n每件装备的“类型”就是在“装备孔”中的索引，例如默认情况下 0 代表武器。\n同时，只有第一个装备孔中的装备，其“普攻动画”属性才会生效。"
        ],
        "10,4": [
            "每层楼的“可楼传”勾选框决定了该楼层能否被飞到。\n\n勇士在不能被飞到的楼层也无法使用楼层传送器。",
            "飞行的楼层顺序由全塔属性（快捷键B）中的“楼层列表”所决定。\n\n是否必须在楼梯边使用楼传器由全塔属性中的系统开关所决定。"
        ],
        "11,4": [
            "破墙镐是破面前的墙壁还是四个方向的墙壁，由其图块属性（快捷键C）的“使用效果”决定。\n哪些图块（怪物和道具除外）可以被破震，由该图块的图块属性中的“可破震”决定。"
        ],
        "12,4": [
            "在 2.8.1 版更新后，能够被破冰镐摧毁的冰块被移动到了 animates 下。\n如果想制作一个可以以特定触发器的方式移除特定图块的道具，可以参照破冰镐物品图块属性中\n useItemEffect 和 canUseItemEffect 的写法。"
        ],
        "11,8": [
            "由于状态栏放不下，铁门钥匙（根据全塔属性的系统开关勾选与否，可能还有绿钥匙）会被放入道具栏中。\n碰到绿门和铁门时仍然会自动使用钥匙开门。"
        ],
        "12,8": [
            "该道具默认是大黄门钥匙，如需改为钥匙盒直接修改其图块属性（快捷键C）的“道具类别”为items即可。"
        ],
        "8,7": [
            "如需修改消耗品的效果，请前往全塔属性（快捷键B），找到并修改values（全局数值）内对应的具体数值即可。\n如果有高级的需求（如每个区域宝石数值变化），请修改楼层属性（快捷键V）最下方的“宝石血瓶效果”。\n如果有更高级的需求，请查阅帮助文档。"
        ],
        "11,7": [
            "与大黄门钥匙类似的是，如果将黄宝石的图块属性设为 items ，那么黄宝石将在被拾取触发 itemEffect 效果。\n\n注意：触碰或使用事件（useItemEvent）对 items、tools、constants 都有效。\n这意味着，如果黄宝石的图块属性为 items ，那么在拾取黄宝石时，黄宝石不会进入背包，并且其“即捡即用”和“触碰或使用事件”都会被触发。"
        ],
        "12,7": [
            "由于吸血、夹击、净化等属性值的存在，玩家可能希望自动寻路时能尽量绕开血瓶和绿宝石。\n他们可以自行在游戏设置中开关这一功能。"
        ]
    },
    "afterOpenDoor": {
        "11,12": [
            "你打开了一扇绿门，触发了一个 afterOpenDoor 事件。"
        ],
        "10,6": [
            "这是一扇高度为 48 个像素而非 32 个像素的门。\n高门和高NPC的素材存放在 materials 文件夹中 npc48.png 的部分。"
        ]
    },
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10169,  0,10177,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10170,  0,10185,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10169,  0,10179,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10172,  0,10180,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10186,  0,10181,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10187,  0,10182,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10188,  0,10183,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "beforeBattle": {},
    "cannotMoveIn": {}
}