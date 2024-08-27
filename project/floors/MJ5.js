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
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            "\t[唐佳成,N510]\b[this]这个家伙应该就是殿下的毕业任务啦！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,11": [
            {
                "type": "if",
                "condition": "(flag:shengqishi>=72)",
                "true": [
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    "与圣骑士亲密度没有达到72，不允许通行"
                ]
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
        "10,7": {
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
            }
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
    [  4,  4,  4,  4,  4,1166,1169,1168,  0,  0, 85,  0,  4],
    [  4,  4,  4,  4,  4,  4, 83,  4,  4,  4,  4,  0,  4],
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