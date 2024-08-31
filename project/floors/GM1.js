main.floors.GM1=
{
    "floorId": "GM1",
    "title": " 光明广场",
    "name": "光明广场",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X30023",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:itemDetail",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:shengqishi_name",
            "value": "\"鹿间裕贵\""
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[温明啸,N550]\b[this,6,8]奎兄把辉儿带来啦!",
        "\t[莫析辉,hero]\b[hero]啸叔叔。额，不，七长老好!",
        "\t[???,N566]\b[this,5,8]圣子弟弟真是英俊非凡啊!",
        "\t[莫析辉,hero]\b[hero]这位是？",
        "\t[安南奎,N546]\b[this,6,9]他是光明圣子葛尔丹。",
        "\t[莫析辉,hero]\b[hero]圣子哥哥好。不知圣子哥哥是哪个家族的呀?",
        "\t[葛尔丹,N566]\b[this,5,8]……",
        "\t[安南奎,N546]\b[this,6,9]他不是二十八大家族的……他只是一介平民……",
        "\t[莫析辉,hero]\b[hero]额，好叭。",
        "\t[葛尔丹,N566]\b[this,5,8]圣子弟弟，我就去神殿等你接受神的洗礼啦!走吧，卢轩！",
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
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    7
                ]
            ],
            "remove": true
        },
        "\t[???,N582]\b[this,7,7]光明骑士罗涛，拜见圣子殿下!",
        "\t[莫析辉,hero]\b[hero]罗涛?",
        "\t[温明啸,N550]\b[this,6,8]罗涛是这届光明骑士里面最强的骑士，他在骑士比武中获得了第一名，是教皇陛下亲自指给圣子殿下的守护骑士。",
        "\t[莫析辉,hero]\b[hero]好，守护骑士罗涛，以后多多麻烦你啦!",
        "\t[安南奎,N546]\b[this,6,9]走吧，先去教皇殿接受光明之神的洗礼。",
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    7
                ]
            ],
            "remove": true
        },
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
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "remove": true
        },
        "\\c[30]本塔存在幸运金币，和打怪回魔力的法杖，且越到后面获得的法杖回魔力效果越强，因此建议留怪。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            "上方，从左到右，依次是光明学院、光明神殿、北寒帝国/北纳家族\n左侧，从上到下，依次是准圣子宫、村庄、精灵王国。\n右侧，从上到下，依次是智慧神殿、东凌帝国/莫析家族、水神殿\n下侧，从上到下，依次是圣子宫、南荒帝国、圣女宫",
            {
                "type": "input2",
                "text": "请输入圣骑士名字"
            },
            {
                "type": "if",
                "condition": "flag:input",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:shengqishi_name",
                        "value": "flag:input"
                    }
                ]
            }
        ],
        "1,3": [
            "\t[莫析辉,hero]\b[hero]没事还是不要乱走吧",
            {
                "type": "moveHero",
                "steps": [
                    "right:1"
                ]
            }
        ],
        "3,11": [
            "\t[光明骑士,N440]\b[this]圣子殿下，请您先前往光明神殿接受神的洗礼。",
            "\t[莫析辉,hero]\b[hero]知道啦，本少爷只是看看而已啦",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            }
        ],
        "6,11": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            }
        ],
        "9,11": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            }
        ],
        "1,6": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "right:1"
                ]
            }
        ],
        "1,9": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "right:1"
                ]
            }
        ],
        "3,1": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "down:1"
                ]
            }
        ],
        "9,1": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "down:1"
                ]
            }
        ],
        "11,3": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "left:1"
                ]
            }
        ],
        "11,6": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "left:1"
                ]
            }
        ],
        "11,9": [
            "\t[莫析辉,hero]\b[hero]还是不要乱走的好",
            {
                "type": "moveHero",
                "steps": [
                    "left:1"
                ]
            }
        ],
        "2,1": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "5,1": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "8,1": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "2,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "5,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "8,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "10,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "7,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "4,11": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "4,1": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "7,1": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "10,1": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "11,5": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "1,5": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "1,7": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "up"
            }
        ],
        "11,7": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "up"
            }
        ],
        "0,9": [
            "这里可以计分。\n本塔的计分方式是攻击+防御+护盾/6+血限/300。如果买了额外的装备孔则分数+5000。\n圣骑士路线拿到火焰纹章后可以将分数乘以1.2。\n这里可以把神之血和琼浆玉露卖掉，然后在商店加点换取分数。\n钥匙也可以按照商店的原价卖掉。",
            "圣骑士结局：\n和圣骑士亲密度>=100\n黑暗圣子结局：\n融合黑暗圣子，和圣骑士亲密度在-1~99之间，和准圣子及圣女亲密度均<5\n光明圣子或光明圣女结局：\n不融合黑暗圣子，和圣骑士亲密度在-1~99之间，准圣子或圣女亲密度>5\n黑暗圣子+光明圣子或光明圣女结局：\n融合黑暗圣子，和圣骑士亲密度在-1~99之间，准圣子或圣女亲密度>5\n孤胆英雄结局：\n不融合黑暗圣子，和圣骑士亲密度在-1~99之间，和准圣子及圣女亲密度均<5\n天命主角结局：\n和圣骑士亲密度<=-2",
            "这里由于部分内容还没实装，因此这里圣骑士结局需要圣骑士的亲密度需求为90，且火焰纹章不可能拿到，且准圣子或圣女亲密度视为>5。",
            {
                "type": "openShop",
                "id": "itemShop",
                "open": true
            },
            {
                "type": "setValue",
                "name": "status:money",
                "operator": "+=",
                "value": "item:I710*100+item:I711*200+item:I712*300+item:I713*400+item:I714*500+item:I415*1000+item:I416*2000+item:yellowKey*40+item:blueKey*120+item:redKey*300"
            },
            {
                "type": "openShop",
                "id": "shop1",
                "open": true
            },
            {
                "type": "unloadEquip",
                "pos": 0
            },
            {
                "type": "unloadEquip",
                "pos": 1
            },
            {
                "type": "unloadEquip",
                "pos": 2
            },
            {
                "type": "unloadEquip",
                "pos": 3
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "status:atk+status:def+status:mdef/6+status:hpmax/300+(flag:shop3)*5000-item:I421*100000"
            },
            {
                "type": "if",
                "condition": "(flag:shengqishi>=90)",
                "true": [
                    {
                        "type": "win",
                        "reason": "paladin"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:heianshengzi",
                "true": [
                    {
                        "type": "win",
                        "reason": "the son of darkness"
                    }
                ]
            },
            {
                "type": "win",
                "reason": "saint"
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "GM2",
            "loc": [
                6,
                12
            ]
        },
        "3,12": {
            "floorId": "GM3",
            "loc": [
                6,
                12
            ]
        },
        "9,0": {
            "floorId": "BH1",
            "loc": [
                6,
                12
            ]
        },
        "9,12": {
            "floorId": "SN1",
            "loc": [
                6,
                0
            ]
        },
        "3,0": {
            "floorId": "XY1",
            "loc": [
                6,
                12
            ]
        },
        "0,3": {
            "floorId": "GM8",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "CZ1",
            "loc": [
                12,
                6
            ]
        },
        "12,6": {
            "floorId": "ZL1",
            "loc": [
                0,
                6
            ]
        },
        "12,3": {
            "floorId": "ZH1",
            "loc": [
                0,
                6
            ]
        },
        "6,12": {
            "floorId": "NH1",
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
    [50049,50049,50049, 91,50049,50049, 91,50049,50049, 91,50049,50049,50049],
    [50049,  0,442,30204,441,442,  0,441,442,30204,441,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [ 92,30204,  0,  0,  0,  0,  0,  0,  0,  0,  0,30204, 94],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,440,  0,  0,  0,  0,  0,  0,  0,  0,  0,440,50049],
    [ 92,30204,  0,  0,  0,30360,30361,30362,  0,  0,  0,30204, 94],
    [50049,443,  0,  0,578,  0,  0,582,  0,  0,  0,443,50049],
    [50049,  0,  0,  0,  0,566,550,  0,  0,  0,  0,  0,50049],
    [104,30204,  0,  0,  0,  0,549,  0,  0,  0,  0,30204, 94],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,442,30204,441,442,30204,441,442,30204,441,  0,50049],
    [50049,50049,50049, 93,50049,50049, 93,50049,50049, 93,50049,50049,50049]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,30344,30345,30346,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,30352,30353,30354,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,  0,  0,  0,  0,  0,  0,  0,  0,  0,30196,  0],
    [  0,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,30196,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        10
    ]
}