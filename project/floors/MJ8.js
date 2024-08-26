main.floors.MJ8=
{
    "floorId": "MJ8",
    "title": "魔界 8 ",
    "name": "魔界8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,10": [
            {
                "type": "if",
                "condition": "(flag:hard===0)",
                "true": [
                    "\t[商人,hero]\b[this]另一个自己啊，我这里有三把红钥匙，送给你啦",
                    {
                        "type": "setValue",
                        "name": "item:redKey",
                        "operator": "+=",
                        "value": "3"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "我有3把红钥匙，\n你出2000金币就卖给你。",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "(status:money>=2000)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "2000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:redKey",
                                        "operator": "+=",
                                        "value": "3"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "确定"
                                    },
                                    {
                                        "type": "hide",
                                        "remove": true
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "playSound",
                                        "name": "操作失败"
                                    },
                                    "\t[行商,trader]\b[this]你的金币不足！"
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
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  1,679,  0,224,  0, 81,  0,  1,679,  1],
    [  1,  0,344,212,  0,342,  1,216,  1,225,  1,679,  1],
    [  1,216,  1,  1,  1,  1,  1, 21,  1,  0,  1,212,  1],
    [  1,  0,  1,  0,346,679,  1,679,  1, 21,  1, 81,  1],
    [  1,  0, 81,227, 21,348,  1, 21,  1,  0,224,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,344,  1],
    [  1,  0,345,680,  1,351,347,225,  1,348,  1,  0,  1],
    [  1,227,679, 30,  1,  1,  1,  0,  1,344,  1,212,  1],
    [  1, 81,  1,  1,279,342,343,222,  1,222,  1,  0,  1],
    [  1,  0,122,  1,  1,  1,  1, 82,  1,  0,  1,679,  1],
    [  1, 87,  0,679, 81,212,  0,  0, 81,216, 81,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        1,
        1
    ]
}