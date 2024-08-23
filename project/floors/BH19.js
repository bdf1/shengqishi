main.floors.BH19=
{
    "floorId": "BH19",
    "title": "北寒帝国 9 ",
    "name": "北寒帝国9",
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
            "floorId": "BH18",
            "loc": [
                6,
                12
            ]
        },
        "6,0": {
            "floorId": "BH20",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_BH19_2_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,5": {
            "0": {
                "condition": "flag:door_BH19_4_5==4",
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
                        "name": "flag:door_BH19_4_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,5": {
            "0": {
                "condition": "flag:door_BH19_2_5==4",
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
                        "name": "flag:door_BH19_2_5",
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
    [20311,60464,130031,60464,60464,20308, 91,20308,20308,60464,60464,130031,60464],
    [60464,686,349, 21,801, 81,  0, 81,801, 21,349,686,60464],
    [60464,60464,20311,60464,20308,130019,797,130019,60464,20311,60464,60464,130019],
    [710,345,60464,799,20308,798,  0,60464,686,60464,686,685,130019],
    [710,345,60464,799,130019,798,685,20311,350,60464,352,351,60464],
    [710,345, 85,  0, 85,  0, 21,130031, 23,130019,60464,801,20311],
    [710,345,60464,799,60464,798,685,20301,800,130019,  0,342,130031],
    [710,345,130019,799,130019,798,  0,130019,  0,60464, 21,  0,130019],
    [130019,130019,60464,20311,130019,20311,  0,20301, 21,20308,800,60464,130031],
    [60464, 27,  0,800,  0,60464,797,130019,  0,130019,  0,686,130019],
    [130019,343,60464,60464,797, 81,  0,20308,799,130019,348,  0,130031],
    [130019,618,798,797,  0,20308,  0, 81,  0, 81,799,  0,130031],
    [60464,60464,20311,60464,130019,130019, 91,60464,130019,20311,60464,60464,60464]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}