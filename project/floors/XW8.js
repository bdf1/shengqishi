main.floors.XW8=
{
    "floorId": "XW8",
    "title": "西武帝国 8 ",
    "name": "西武帝国8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "autotile7",
    "bgm": "lfmg.mp3",
    "weather": [
        "rain",
        5
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,1": {
            "floorId": "XW7",
            "loc": [
                12,
                1
            ]
        },
        "6,1": {
            "floorId": "XW9",
            "loc": [
                6,
                1
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_XW8_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_XW8_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_XW8_6_3==2",
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
                        "name": "flag:door_XW8_6_3",
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,  0,1023,  0,144,  0, 91,  0,144, 21,349,144, 93],
    [144,687,144,  0,144,  0,  0,  0,144,688,  0,144,  0],
    [144,1100,144, 81,144,144, 85,144,144, 81,144,144,1021],
    [144,737,144,  0,  0,1024,  0,1024,144,851,  0,144,  0],
    [144,  0,144,144,144,144,  0,  0,144,  0,688,144,348],
    [144, 21,144,688,687, 81,851,  0, 81,  0,  0, 82,  0],
    [144,755,144,144,144,144,  0,144,144,144, 81,144,1022],
    [144,346,144, 21,617,144,687,737,  0,144,1023,144, 81],
    [144,617,144,688,687,851,  0,144, 21,144,  0,144, 21],
    [144,  0,144,144,1022,144,144,144,617,144,687,144, 21],
    [144,737, 81,851,  0,  0,687,144,688,144,  0,144, 21],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        12,
        1
    ],
    "bg2map": [

],
    "fg2map": [

]
}