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
            "floorId": "NH7",
            "loc": [
                1,
                12
            ]
        },
        "11,1": {
            "floorId": "NH9",
            "loc": [
                11,
                1
            ]
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,684,342, 30,683, 20,683,  0,786,  0,  0, 94, 20],
    [ 20, 20,787, 20, 21, 20, 20, 20, 81, 20, 20, 20, 20],
    [ 20,683, 27, 20, 20,786, 81, 29,785,  0,683, 20, 20],
    [ 20, 28,785,  0, 29,  0, 20,  0, 27, 20, 20, 20, 20],
    [ 20, 20, 81, 20, 20, 20, 20, 21,  0, 20, 20, 20, 20],
    [ 20,786,  0,788,787,  0,683,  0, 20, 20, 20, 20, 20],
    [ 20,  0, 20, 20, 20, 20, 20,786, 20, 21,683, 21, 20],
    [ 20, 21, 20,616,343,684, 20,  0, 20,701, 30,614, 20],
    [ 20,  0, 20, 20, 85, 20, 20,344, 20, 27,787, 28, 20],
    [ 20,785, 20,786,  0,786, 20,  0, 20, 20, 82, 20, 20],
    [ 20,  0, 82,  0, 28,  0, 81,784, 81,788,  0,683, 20],
    [ 20, 91, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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