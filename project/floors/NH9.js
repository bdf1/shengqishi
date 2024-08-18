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
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0,788,684, 29, 27, 20, 29,614,788, 81, 93, 20],
    [ 20,683, 20, 21,683,614,787, 28, 21,701, 20,786, 20],
    [ 20, 81, 20, 20, 20, 20, 20, 20, 20, 20, 20,  0, 20],
    [ 20,786,  0,701,  0,785,  0,683,  0,786, 81,683, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,  0, 20],
    [ 20,785,  0, 21,  0,788, 20,  0,616,  0, 20,785, 20],
    [ 20,  0, 20, 20, 20,1076, 20,344,  0,342, 20,  0, 20],
    [ 20,683, 20, 23, 20, 27, 20, 20, 85, 20, 20, 21, 20],
    [ 20,  0, 20,345,787,  0, 20,786,  0,786, 20,  0, 20],
    [ 20,786, 20, 20, 20, 20, 20,  0,701,  0, 82,786, 20],
    [ 20,  0, 28,  0,788,  0,  0,614,  0,683, 20, 93, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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