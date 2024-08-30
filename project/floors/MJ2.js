main.floors.MJ2=
{
    "floorId": "MJ2",
    "title": "魔界 2 ",
    "name": "魔界2",
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
    "events": {},
    "changeFloor": {
        "12,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {
        "4,10": [
            {
                "type": "if",
                "condition": "(flag:shengqishi>=68)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:door_MJ2_5_11",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,10": [
            {
                "type": "if",
                "condition": "(flag:shengqishi>=68)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:door_MJ2_5_11",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterBattle": {
        "4,10": [
            {
                "type": "setValue",
                "name": "flag:door_MJ2_5_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,10": [
            {
                "type": "setValue",
                "name": "flag:door_MJ2_5_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,11": {
            "0": {
                "condition": "flag:door_MJ2_5_11==2",
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
                        "name": "flag:door_MJ2_5_11",
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
    [617,360,617,1130,  0,  4,617,  0,1126, 81,  0,  0, 92],
    [  4,  4,  4,  4,  0,  4,  0,  4,  4,  4,1026,  4,1126],
    [  4,617,  0,  4,688,  4,1030, 22,688,1126,  0,  4,  0],
    [  4,  0,1127, 81,  0,  4,  4,  4,  4,  4,699,  4,688],
    [  4,699,  0,  4,1126,  4,688,  0,  0,  4,  0,  4,  0],
    [  4,  4,  4,  4,  0,  4,  0,617,1127, 81,1030,  4,1030],
    [ 92, 81, 81,1126,  0,  4,688,  0,  0,  4,  0, 82,  0],
    [  4,  4,  4,  0,  0,  4,  4,  4,  4,  4,688,  4, 21],
    [  4,699,  0,1030, 21, 81,688,  0,1126, 81,  0,  4, 21],
    [  4,  0,699,1030,  0,  4,  0,699,  0,  4,1130,  4, 21],
    [  4, 81,  4,  4,1126,  0,1126,  4,1030,  4, 81,  4,  4],
    [  0,1127,  0,  4,  4, 85,  4,  4,  0,  4,699,617,699],
    [688,688,688,  4, 21, 23, 21,  4,688,  4,  4,  4,  4]
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
        0
    ]
}