main.floors.XY7=
{
    "floorId": "XY7",
    "title": "光明学院 7 ",
    "name": "光明学院7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "bxsgzz.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,4": [
            {
                "type": "confirm",
                "text": "确认要打开这个罐子吗?",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana<80)",
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
                                "value": "80"
                            },
                            {
                                "type": "playSound",
                                "name": "破冰镐"
                            },
                            {
                                "type": "setBlock",
                                "number": "X60395"
                            },
                            "获得红钥匙一把",
                            {
                                "type": "setValue",
                                "name": "item:redKey",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "no": []
            }
        ],
        "4,7": {
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
            "data": []
        }
    },
    "changeFloor": {
        "12,6": {
            "floorId": "XY6",
            "loc": [
                12,
                6
            ]
        },
        "0,12": {
            "floorId": "XY8",
            "loc": [
                0,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "8,6": [
            {
                "type": "moveHero",
                "steps": [
                    "left:4"
                ]
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[莫析辉,hero]\b[hero]准圣子哥哥，你在这里是等我吗？",
            "\t[葛尔丹,N566]\b[this,5,4]知兄莫如弟啊，圣子弟弟，哥哥有一件事情，正该告诉你呢！",
            "\t[莫析辉,hero]\b[hero]不知哥哥有何事情告诉小弟呢？",
            "\t[葛尔丹,N566]\b[this,5,4]圣子弟弟近来可有感觉修为停滞？",
            "\t[莫析辉,hero]\b[hero]哈哈，没有的事，哥哥说笑了。",
            "\t[葛尔丹,N566]\b[this,5,4]你也不必瞒我，其实啊，我也有过这种情况。",
            "\t[莫析辉,hero]\b[hero]真的假的？我们修炼光明法术的都有这种情况？",
            "\t[葛尔丹,N566]\b[this,5,4]呵呵，除了你，也只有我修为停滞了。因为，我们身边都有蜜西娅的好内奸啊！",
            {
                "type": "if",
                "condition": "(flag:shengqishi>1)",
                "true": [
                    "\t[${flag:shengqishi_name},N472]\b[this]可恶，那准圣子殿下，你能告诉我是谁吗？",
                    "\t[葛尔丹,N566]\b[this,5,4]呵呵",
                    "\t[葛尔丹,N566]\b[this,5,4]这内奸啊，不仅敢对光明圣子干坏事，他啊，嗨忠于光明圣女呢。圣子弟弟，你可要小心点咯。"
                ],
                "false": [
                    "\t[莫析辉,hero]\b[hero]内奸？哥哥说笑了，在我来之前，你是光明圣子，而我，也是光明圣子，难道这内奸还敢专门对光明圣子做坏事不成？",
                    "\t[葛尔丹,N566]\b[this,5,4]当然了，这内奸啊，不仅敢对光明圣子干坏事，他啊，嗨忠于光明圣女呢。圣子弟弟，你可要小心点咯。"
                ]
            },
            "\t[莫析辉,hero]\b[hero]好，那就谢谢哥哥的提醒了。",
            "\t[葛尔丹,N566]\b[this,5,4]希望圣子弟弟能够与我同心，一起对付蜜西娅呢。那哥哥就先告辞了。",
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
                        7
                    ]
                ],
                "remove": true
            },
            "\t[莫析辉,hero]\b[hero]这个葛尔丹，都说是个笑面虎，说不准他就是在挑拨离间呢……",
            {
                "type": "choices",
                "text": "\t[莫析辉,hero]选择相信谁",
                "choices": [
                    {
                        "text": "葛尔丹",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:zhunshengzi",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:guangmingshengnv",
                                "operator": "-=",
                                "value": "1"
                            },
                            "与葛尔丹亲密度+1，蜜西娅亲密度-1"
                        ]
                    },
                    {
                        "text": "蜜西娅",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:zhunshengzi",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:guangmingshengnv",
                                "operator": "+=",
                                "value": "1"
                            },
                            "与蜜西娅亲密度+1，葛尔丹亲密度-1"
                        ]
                    },
                    {
                        "text": "保持警惕",
                        "action": []
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,685,354,356, 21,223,  0,  0, 81,224,  3,686,  3],
    [  3,  3,  3,  3,  3,  3,  3, 81,  3,609,  3,685,  3],
    [  3,  0,227, 81,  0,  0,436,  0,  3,361,  3,357,  3],
    [  3,60408,  0,  3,  0,566,  0,  0,  3,609,220, 22,  3],
    [  3,  3,  3,  3,  0,  0,  0,  0,  3,  3,  3,  3,  3],
    [  3,685,  0,  3,  0,  0,  0,  0, 81,725,696,  0, 92],
    [  3,  0,220, 81,472,  0,  0,  0,  3,  0,  0, 21,  3],
    [  3, 21,  0,  3,225,  3,  3,  3,  3,  3, 82,  3,  3],
    [  3,  3,  3,  3, 81,  3,350,  0,  3,  0,219,  0,  3],
    [  3, 21,352,685,227,  3,  0,220, 81,  0,599,  0,  3],
    [  3,598,351,694,345,  3,351,  0,  3,684,  0,685,  3],
    [ 92,  0,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
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
        12,
        6
    ]
}