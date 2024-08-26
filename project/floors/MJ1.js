main.floors.MJ1=
{
    "floorId": "MJ1",
    "title": "魔界 1 ",
    "name": "魔界1",
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
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:hard===4)",
            "true": [
                "检测到骑士专精，攻击+5，防御+4，护盾+20，生命值+800，黄钥匙+5，蓝钥匙+2",
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "+=",
                    "value": "4"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "20"
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "800"
                },
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "item:blueKey",
                    "operator": "+=",
                    "value": "2"
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
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
    [  1,679,  0,225,  0,  0, 88,  0,  0,212,  0,678,  1],
    [  1, 81,  1,  1,  1,  1, 83,  1,  1,  1,  1, 82,  1],
    [  1,224,  1,  5,  5,  5,  5,  5,  5,  5,  1,212,  1],
    [  1,  0,  1,  5,  5,  5,  5,  5,  5,  5,  1,  0,  1],
    [  1,352,  1,  5,  5,  1,  0,  1,  5,  5,  1, 21,  1],
    [  1,  0,  1,  5,  5,  0,417,  0,  5,  5,  1,  0,  1],
    [  1,227,  1,  5,  5,  1,  0,  1,  5,  5,  1,216,  1],
    [  1,  0,  1,  5,  5,  5,  5,  5,  5,  5,  1,  0,  1],
    [  1,346,  1,  5,  5,  5,  5,  5,  5,  5,  1,347,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,224,  0,680,  0,225, 87,216, 81,680,  0,212,  1],
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
        6,
        1
    ]
}