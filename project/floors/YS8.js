main.floors.YS8=
{
    "floorId": "YS8",
    "title": "隐世学院 8 ",
    "name": "隐世学院8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "cbzc.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,0": {
            "floorId": "YS9",
            "loc": [
                1,
                0
            ]
        },
        "6,0": {
            "floorId": "YS7",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_YS8_6_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,3": {
            "0": {
                "condition": "flag:door_YS8_10_3==2",
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
                        "name": "flag:door_YS8_10_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "6,6": {
            "0": {
                "condition": "flag:door_YS8_6_6==2",
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
                        "name": "flag:door_YS8_6_6",
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
    [140, 91,140,140,140,140, 93,140,140,140,140,140,140],
    [140,  0,736,  0,140,  0,  0,  0,140, 21, 23, 21,140],
    [140,251,  0,686, 83,  0,736,  0,140,602,  0,360,140],
    [140, 81,140,140,140,140, 81,140,140,140, 85,140,140],
    [140,  0,685,686,140,  0,  0,  0,140,245,  0,245,140],
    [140,229,697,609,140,229,  0,229,140,  0,  0,  0,140],
    [140, 81,140,140,140,140, 85,140,140,140, 81,140,140],
    [140,685,  0,245,  0,  0, 21,  0,244,  0,685,  0,140],
    [140, 81,140,140, 82,140,140,140, 81,140,140, 82,140],
    [140,251,  0,140,736,609,714,357,229,140,  0,245,140],
    [140,  0,610,140,140,140,140,140,140,140,697,  0,140],
    [140,686,  0, 21,229,360,360,360,245, 21,  0,687,140],
    [140,140,140,140,140,140,140,140,140,140,140,140,140]
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
        0
    ]
}