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
                "name": "flag:door_MJ5_2_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:door_MJ5_2_11",
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
                "condition": "flag:door_MJ5_2_11==2",
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
                        "name": "flag:door_MJ5_2_11",
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
    [361,  4, 21,  0, 21,  4,360,358,684,760, 81,683,  0],
    [361,  4,  0,363,  0,  4,360,358,684,  0,  4,  0,757],
    [361,  4, 21,759, 21,  4,684,684,750,  4,  4,  4, 81],
    [  0,  4,  4, 81,  4,  4,  4,  4, 82,  4,361,  0,  0],
    [  0, 81,757,  0,683,  0,761,  4,  0,  4,  0, 22,  0],
    [  4,  4, 83,  4,  4,  4, 81,  4,  0, 81,759,  0,361],
    [  4,683,683,683,  4,  0,  0,  4, 81,  4,  4,  4,  4],
    [  4,683,683,683,  4,683,  0,  4,  0,760, 82,  0,683],
    [  4,683,683,683,  4,  0,245,  4, 21, 21,  4,  0,  4],
    [  4,  4,  4,  4,  4,  4, 81,  4, 21, 21,  4,750,  4],
    [  0,684,  4,245,  0,  4,  0,  4,  0,  0,  4, 81,  4],
    [362,  0, 85,  0,  0,  4,  0, 81,758,  0,  4,  0,  4],
    [  0, 23,  4,245,  0, 82, 88,  4,  4,  4,  4, 87,  4]
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