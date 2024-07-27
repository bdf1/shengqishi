main.floors.CZ3=
{
    "floorId": "CZ3",
    "title": "村庄 3 ",
    "name": "村庄3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,5": [
            "\t[温明啸,N550]\b[this]辉儿，我这有几颗血红宝石，送给你吧",
            {
                "type": "setValue",
                "name": "item:I613",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "CZ1",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "CZ5",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:door_CZ3_2_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_CZ3_2_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,4": [
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "floorId": "CZ1",
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,10": {
            "0": {
                "condition": "flag:door_CZ3_2_10==2",
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
                        "name": "flag:door_CZ3_2_10",
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
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20],
    [ 21, 20,361, 21, 20,358,  0,360, 20,688, 82,699, 21],
    [612, 20,  0,685, 20,611,362,611, 20,360, 20, 20, 20],
    [744, 20,744, 20, 20,690,602,690, 20,  0, 20,710,688],
    [  0,688,  0,730, 20, 20,237, 20, 20,729, 20,728, 20],
    [ 20, 20, 20, 81, 20,550,  0,  0, 20, 81, 20, 81, 20],
    [ 94,  0,729,  0,690,  0,  0,728, 81,  0,  0,  0, 20],
    [ 20, 20, 20, 82, 20, 20, 20, 20, 20, 20,730, 20, 20],
    [ 20,  0,690,  0,729,  0,  0,  0,729,  0,  0,689, 20],
    [ 20,744,  0,744, 20, 20,731, 20, 20, 81, 20, 20, 20],
    [ 20, 20, 85, 20, 20,688,358,688, 20,  0, 21,  0, 20],
    [ 20,612,411,612, 20, 21,361, 21, 20,699,  0,744, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,710,690]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        0,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}