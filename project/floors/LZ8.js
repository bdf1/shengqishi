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
        "0,4": [
            {
                "type": "if",
                "condition": "(flag:hard===0)",
                "true": [
                    "\t[商人,hero]\b[this]另一个自己啊，我这有20000生命值，送给你吧！",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "+=",
                        "value": "20000"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "我有20000生命值，\n你出2000金币就卖给你。",
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
                                        "name": "status:hp",
                                        "operator": "+=",
                                        "value": "20000"
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
        "10,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,10": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_2_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_2_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,7": {
            "0": {
                "condition": "flag:door_MT38_2_7==2",
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
                        "name": "flag:door_MT38_2_7",
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
    [684,684,684,760, 82,750,  1, 21, 21, 21,  1,358,360],
    [  1,  1,  1,  0,  1,  0,  1,685, 23,685, 81,358,360],
    [362,362,362,757,  1,683,  1, 22, 22, 22,  1,358,360],
    [  1,  1,  1,  1,  1,  0,  1,  0,247,  0,  1,  1,  1],
    [122,  0,245,683,  1,761,  1,  1, 83,  1,  1,683,365],
    [  1,  1,  1,  0,  1,  0,758,  0,683,  0, 82,760,363],
    [  0,684,  1,759,  1, 81,  1,  1,  1,  1,  1,683,364],
    [366,  0, 85,  0, 81,  0,761, 21,361,683,  1,  1,  1],
    [  0, 21,  1,759,  1,245,  1,  1,  1,  1,  1,  0,360],
    [  1,  1,  1,  1,  1,  0,  1,  0,245,  0, 81,757,  0],
    [ 87,  0,761,  0, 81,  0,750,361,  1,683,  1,  0,358],
    [  1, 81,  1,  1,  0,  1,  1,  1,  1,  0,  1,  1,  1],
    [683,365,683,  1,683,  1, 21, 21,758,  0, 88,245,357]
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
        10,
        12
    ]
}