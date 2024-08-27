main.floors.MJ9=
{
    "floorId": "MJ9",
    "title": "魔界 9 ",
    "name": "魔界9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "douguishen.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,10": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,10": {
            "floorId": "MJ10",
            "loc": [
                11,
                10
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:door_MJ9_10_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,10": {
            "0": {
                "condition": "flag:door_MJ9_10_10==1",
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
                        "name": "flag:door_MJ9_10_10",
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,713,713,713,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,713,713,713,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  0,1180,  0,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [ 94,  0,  0,  0,  0,  0,  0,  0,  0,  0, 85, 94,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
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
        0,
        10
    ]
}