main.floors.XW3=
{
    "floorId": "XW3",
    "title": "西武帝国 3 ",
    "name": "西武帝国3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
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
        "6,11": {
            "floorId": "XW2",
            "loc": [
                6,
                11
            ]
        },
        "0,6": {
            "floorId": "XW4",
            "loc": [
                0,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_XW3_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_XW3_6_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,2": {
            "0": {
                "condition": "flag:door_XW3_6_2==2",
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
                        "name": "flag:door_XW3_6_2",
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
    [144, 21,  0,688,144,703,1117,619,144,688,  0,1100,144],
    [144,  0,  0,  0,144,  0, 21,  0,144,  0,  0,  0,144],
    [144,144, 81,144,144,144, 85,144,144,144, 81,144,144],
    [144,  0,851,  0,  0,737,  0,737,144,  0,852,  0,144],
    [144,687,  0,  0,144,  0,  0,  0,1021,  0,  0,687,144],
    [144,144,144,144,144,144,144, 82,144,144,144,144,144],
    [ 92,  0,144,619,  0,144,687,  0,934,  0,144, 21, 21],
    [  0,1024, 81,  0,737, 81,  0,  0,144,  0, 81,737, 21],
    [618,  0,144, 21,  0,144,  0,1022,144,687,144,144,144],
    [ 81,144,144,144,144,144,144, 81,144,144,144,  0,618],
    [1022,  0,144,  0,353,144,  0,  0,  0,1024, 81,  0,  0],
    [  0, 21, 81,755,  0,144, 91,  0,352,144,144,  0,350],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        11
    ],
    "bg2map": [

],
    "fg2map": [

]
}