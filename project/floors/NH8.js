main.floors.NH8=
{
    "floorId": "NH8",
    "title": "南荒帝国 8 ",
    "name": "南荒帝国8",
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
        "1,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:door_NH8_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_NH8_4_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,9": {
            "0": {
                "condition": "flag:door_NH8_4_9==2",
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
                        "name": "flag:door_NH8_4_9",
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
    [140,684,342, 30,683,140,683,  0,786,  0,  0, 94,140],
    [140,140,787,140, 21,140,140,140, 81,140,140,140,140],
    [140,683, 27,140,140,786, 81, 29,785,  0,683,140,140],
    [140, 28,785,  0, 29,  0,140,  0, 27,140,140,140,140],
    [140,140, 81,140,140,140,140, 21,  0,140,140,140,140],
    [140,786,  0,788,787,  0,683,  0,140,140,140,140,140],
    [140,  0,140,140,140,140,140,786,140, 21,683, 21,140],
    [140, 21,140,616,343,684,140,  0,140,701, 30,614,140],
    [140,  0,140,140, 85,140,140,344,140, 27,787, 28,140],
    [140,785,140,786,  0,786,140,  0,140,140, 82,140,140],
    [140,  0, 82,  0, 28,  0, 81,784, 81,788,  0,683,140],
    [140, 91,140,140,140,140,140,140,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "yuanye.mp3",
    "flyPoint": [
        1,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}