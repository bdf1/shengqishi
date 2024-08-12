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
    [140,140,140,140,140,140, 93,140,140,140,140,140,140],
    [ 21,140,361, 21,140,358,  0,360,140,689, 82,699, 21],
    [612,140,  0,687,140,611,362,611,140,360,140,140,140],
    [744,140,744,140,140,690,602,690,140,  0,140,710,689],
    [  0,688,  0,730,140,140,237,140,140,729,140,728,140],
    [140,140,140, 81,140,550,  0,  0,140, 81,140, 81,140],
    [ 94,  0,729,  0,690,  0,  0,728, 81,  0,  0,  0,140],
    [140,140,140, 82,140,140,140,140,140,140,730,140,140],
    [140,  0,691,  0,729,  0,  0,  0,729,  0,  0,690,140],
    [140,744,  0,744,140,140,731,140,140, 81,140,140,140],
    [140,140, 85,140,140,689,358,689,140,  0, 21,  0,140],
    [140,612,411,612,140, 21,361, 21,140,699,  0,744,140],
    [140,140,140,140,140,140,140,140,140,140,140,710,691]
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