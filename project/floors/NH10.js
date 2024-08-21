main.floors.NH10=
{
    "floorId": "NH10",
    "title": "南荒帝国 10 ",
    "name": "南荒帝国10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": [
            "\t[童轩,N641]\b[this,6,1]南荒帝国童轩有礼了，圣子殿下，在你成为光明圣子的那天，我也过来参加了你的洗礼呢，不知道殿下可还记得我？",
            "\t[莫析辉,hero]\b[hero]当然记得。不知道，南荒帝国的大皇子殿下，我怎么会不记得。不知道大皇子邀我等过来，有何贵干？",
            "\t[童轩,N641]\b[this,6,1]听说圣子殿下的莫析家族被奸人所害，童轩不才，愿助殿下一臂之力。",
            "\t[莫析辉,hero]\b[hero]哦？你凭什么助我一臂之力？",
            "\t[童轩,N641]\b[this,6,1]不瞒圣子殿下，我那不成器的二弟童澈，与圣女殿下有了婚约，便越来越不将我这个做哥哥的放在眼中了。",
            "\t[童轩,N641]\b[this,6,1]圣子殿下与我那弟妹水火不容，自然也是童轩的好友了。",
            "\t[莫析辉,hero]\b[hero]你这个朋友，我交了。",
            {
                "type": "if",
                "condition": "(flag:shengqishi>1)",
                "true": [],
                "false": [
                    "\t[莫析辉,hero]\b[hero]不过，这旁边这位是？",
                    "\t[默默,N481]\b[this,5,1]哈哈，圣子哥哥不用忧心，这位叫唐佳成，是一位年轻有为的战士，正好可以帮帮我们呢！",
                    "\t[莫析辉,hero]\b[hero]幸会幸会。",
                    "\t[${flag:shengqishi_name},N510]\b[this,5,3]嗯。",
                    "\t[莫析辉,hero]\b[hero]……",
                    "\t[莫析辉,hero]\b[hero]（我是不是得罪过他）"
                ]
            },
            "\t[汪周,N468]\b[this,8,2]如今，光明圣女北纳蜜西娅一家独大，咱们要对付北纳家族，也该有个详细的计划才行啊！",
            "\t[铁姝,npc0]\b[this,7,1]这个，我们早就想好了。",
            "\t[莫析辉,hero]\b[hero]铁姝姑娘请说。",
            "\t[铁姝,npc0]\b[this,7,1]过段时间，便是童澈皇子与光明圣女的婚礼了，童轩皇子、我和默默会趁机在婚礼上对付他们二人，至少，不会让光明圣女、童澈皇子在短时间内离开南荒帝国，其他人可以放心地对付北纳家族。",
            "\t[铁姝,npc0]\b[this,7,1]卢轩，你曾经是冷霜家族的，还有希娜公主，你在北寒帝国也有势力，查找北纳家族的情报就交给你们了。",
            "\t[铁姝,npc0]\b[this,7,1]卢轩，你曾经是冷霜家族的，还有希娜公主，你在北寒帝国也有势力，查找北纳家族的情报就交给你们了。",
            "\t[希娜,N538]\b[this,4,2]这些容易，可是光明神殿知道圣子殿下要报复的，光明教皇和大长老是不会同意的。",
            "\t[葛尔丹,N566]\b[this,7,3]这个也容易，光明神殿有我和骑士队长大人呢！",
            "\t[莫析辉,hero]\b[hero]哦？不知圣子哥哥怎么瞒住教皇爷爷和大长老呢？",
            "\t[葛尔丹,N566]\b[this,7,3]你和蜜西娅起冲突，教皇爷爷和大长老认为我是中立的，他们比较相信我。还有骑士队长大人的帮助，我可以找一个与你相似的人假扮成你，一直待在东凌帝国，有我和骑士队长大人帮忙，只要大长老不靠近，是发现不了的。",
            "\t[汪周,N468]\b[this,8,2]大长老若是要见你，我们就说你因为家族被灭，大受打击，已经病倒了，不便见人。",
            "\t[凌依,N574]\b[this,4,3]我和唐佳成就协助圣子殿下去对付北纳家族吧！",
            "\t[默默,N481]\b[this,5,1]凌依，唐佳成，你们二人一定要找到沂蒙贤和冷霜迪，不杀了他们二人，哼，圣子哥哥后面对上光明圣女没有胜算的！",
            "\t[凌依,N574]\b[this,4,3]是！",
            "\t[${flag:shengqishi_name},N510]\b[this,5,3]是！",
            "\t[童轩,N641]\b[this,6,1]那北纳家族、沂蒙家族、冷霜家族都是北方苦寒之地，咱们这次行动，就叫“破冰行动”吧！",
            "\t[莫析辉,hero]\b[hero]好。",
            "\t[默默,N481]\b[this,5,1]有光明神殿两位圣子、南荒帝国大皇子、北寒帝国希娜公主、还有光明神殿骑士队长大人、加上几位守护骑士、还有我们夜馨公会的，必定马到成功！",
            "\t[莫析辉,hero]\b[hero]那么，各位，行动起来！",
            "\t[众人]破冰行动，开始！（\r[red]\\c[30]前往北寒帝国\\c[]\r[]）",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "remove": true
            },
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
                        7,
                        1
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        3
                    ]
                ],
                "remove": true
            },
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
                        8,
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
                        1
                    ]
                ],
                "floorId": "BH10",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_NH10_6_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_8_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_NH10_6_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_8_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_NH10_6_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_8_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_NH10_6_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_8_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_NH10_4_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_NH10_6_4==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_NH10_6_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "8,5": {
            "0": {
                "condition": "flag:door_NH10_8_5==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_NH10_8_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "4,5": {
            "0": {
                "condition": "flag:door_NH10_4_5==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_NH10_4_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20,  0,  0,481,641,133,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,540,  0,  0,  0,469,  0, 20, 20, 20],
    [ 20, 20, 20,  0,577,513,  0,569,581,  0, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 85, 20, 20, 20, 20, 20, 20],
    [ 20,342,342,342, 85,789,  0,789, 85,343,343,343, 20],
    [ 20,415,415,415, 20,789,  0,789, 20, 21, 21, 21, 20],
    [ 20, 20, 20, 20, 20, 20, 83, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 92, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "yuanye.mp3",
    "flyPoint": [
        11,
        11
    ],
    "bg2map": [

],
    "fg2map": [

]
}