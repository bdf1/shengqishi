main.floors.MJ5=
{
    "floorId": "MJ5",
    "title": "魔界 5 ",
    "name": "魔界5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT35_2_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT35_2_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,11": {
            "0": {
                "condition": "flag:door_MT35_2_11==2",
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
                        "name": "flag:door_MT35_2_11",
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
    [361,  1, 21,  0, 21,  1,360,358,684,760, 81,683,  0],
    [361,  1,  0,363,  0,  1,360,358,684,  0,  1,  0,757],
    [361,  1, 21,759, 21,  1,684,684,750,  1,  1,  1, 81],
    [  0,  1,  1, 81,  1,  1,  1,  1, 82,  1,361,  0,  0],
    [  0, 81,757,  0,683,  0,761,  1,  0,  1,  0, 22,  0],
    [  1,  1, 83,  1,  1,  1, 81,  1,  0, 81,759,  0,361],
    [  1,683,683,683,  1,  0,  0,  1, 81,  1,  1,  1,  1],
    [  1,683,683,683,  1,683,  0,  1,  0,760, 82,  0,683],
    [  1,683,683,683,  1,  0,245,  1, 21, 21,  1,  0,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1, 21, 21,  1,750,  1],
    [  0,684,  1,245,  0,  1,  0,  1,  0,  0,  1, 81,  1],
    [362,  0, 85,  0,  0,  1,  0, 81,758,  0,  1,  0,  1],
    [  0, 23,  1,245,  0, 82, 88,  1,  1,  1,  1, 87,  1]
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
        12
    ]
}