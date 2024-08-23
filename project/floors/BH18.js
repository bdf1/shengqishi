main.floors.BH18=
{
    "floorId": "BH18",
    "title": "北寒帝国 8 ",
    "name": "北寒帝国8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X130012",
    "bgm": "xieedushi.mp3",
    "weather": [
        "snow",
        6
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "BH19",
            "loc": [
                6,
                12
            ]
        },
        "6,0": {
            "floorId": "BH17",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_BH18_10_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,7": {
            "0": {
                "condition": "flag:door_BH18_10_7==8",
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
                        "name": "flag:door_BH18_10_7",
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
    [130031,60464,20301,60464,130031,60464, 93,60464,60464,60464,60464,60464,130031],
    [60464,685,685,799, 81,  0,  0,130031,799,346,346,346,60464],
    [60464, 81,60464,60464,130019,  0,797,60464, 81,130019,130019,60464,20301],
    [20301,800,348,  0,60464,130031, 81,20301,800, 30, 30, 30,60464],
    [60464,  0,  0,347,60464,  0,685,60464,60464,130019,60464,798,60464],
    [130031,60464, 81,60464,20308,686,  0,130031,797,797,130031,  0,60464],
    [20301,  0,799,  0,20301,60464,798,60464,797,797,60464,348,20301],
    [60464,  0,685,  0,130019,  0,344, 81,  0,  0, 85,348,60464],
    [60464,346,  0,686,20301,617,  0,130019,797,797,60464,348,60464],
    [60464,60464,801,60464,130031,60464, 81,130019,797,797,60464,  0,130031],
    [130031, 21, 22, 21,60464,  0,799,20308,60464,60464,130019,798,60464],
    [60464, 21, 21, 21,20301,685,  0,130031,347,347,347,  0,20301],
    [60464,20301,60464,130019,60464,130031, 93,60464,60464,60464,20301,60464,60464]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ],
    "bg2map": [

],
    "fg2map": [

]
}