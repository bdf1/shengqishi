main.floors.NH9=
{
    "floorId": "NH9",
    "title": "南荒帝国 9 ",
    "name": "南荒帝国9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": "NH8",
            "loc": [
                11,
                1
            ]
        },
        "11,11": {
            "floorId": "NH10",
            "loc": [
                11,
                11
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:door_NH9_8_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_NH9_8_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "8,8": {
            "0": {
                "condition": "flag:door_NH9_8_8==2",
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
                        "name": "flag:door_NH9_8_8",
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,788,684, 29, 27, 20, 29,614,788, 81, 93,140],
    [140,683,140, 21,683,614,787, 28, 21,701,140,786,140],
    [140, 81,140,140,140,140,140,140,140,140,140,  0,140],
    [140,786,  0,701,  0,785,  0,683,  0,786, 81,683,140],
    [140,140,140,140,140,140,140,140,140,140,140,  0,140],
    [140,785,  0, 21,  0,788,140,  0,616,  0,140,785,140],
    [140,  0,140,140,140,1076,140,344,  0,342,140,  0,140],
    [140,683,140, 23,140, 27,140,140, 85,140,140, 21,140],
    [140,  0,140,345,787,  0,140,786,  0,786,140,  0,140],
    [140,786,140,140,140,140,140,  0,701,  0, 82,786,140],
    [140,  0, 28,  0,788,  0,  0,614,  0,683,140, 93,140],
    [140,140,140,140,140,140,140,140,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "yuanye.mp3",
    "flyPoint": [
        11,
        1
    ],
    "bg2map": [

],
    "fg2map": [

]
}