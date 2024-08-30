main.floors.MJ5=
{
    "floorId": "MJ5",
    "title": "魔界 5 ",
    "name": "魔界5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "douguishen.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            "\t[${flag:shengqishi_name},N510]\b[this]这个家伙应该就是殿下的毕业任务啦！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,11": {
            "trigger": "action",
            "enable": true,
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
                    "condition": "(flag:shengqishi>=100)",
                    "true": [
                        {
                            "type": "hide",
                            "remove": true
                        }
                    ],
                    "false": [
                        "与圣骑士亲密度没有达到100，不允许通行"
                    ]
                }
            ]
        },
        "10,8": [
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
                "value": "status:atk+status:def+status:mdef/6+status:hpmax/300+(flag:shop3)*5000"
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
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MJ5_5_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MJ5_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MJ5_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MJ5_6_2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:youmingmojun",
                "value": "1"
            },
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
                        5,
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
                        5
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
                        7,
                        7
                    ]
                ],
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,3": {
            "0": {
                "condition": "flag:door_MJ5_5_3==1",
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
                        "name": "flag:door_MJ5_5_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,3": {
            "0": {
                "condition": "flag:door_MJ5_7_3==1",
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
                        "name": "flag:door_MJ5_7_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "6,2": {
            "0": {
                "condition": "flag:door_MJ5_6_2==1",
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
                        "name": "flag:door_MJ5_6_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "8,7": {
            "0": {
                "condition": "flag:door_MJ5_10_7==1",
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
                        "name": "flag:door_MJ5_10_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,1115,  4,  4,  4,  4,  4,  4],
    [  4,  4,703,703,703,  4, 85,  4,714,714,714,  4,  4],
    [  4,  4, 21, 21, 21, 85,  0, 85,349,349,349,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,1161,1170,1162,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,1163,1164,1165,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,1166,1169,1168, 85,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4, 83,  4,  4,  4,1135,  0,  4],
    [  4,  4,  4,  4,  4,  4,510,  4,  4,  4,  4,  0,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  0,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,1095,  4],
    [  4,  4,  4,  4,  4,  4, 91,  4,  4,  4,  4, 93,  4]
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