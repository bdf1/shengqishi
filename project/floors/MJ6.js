main.floors.MJ6=
{
    "floorId": "MJ6",
    "title": "魔界 6 ",
    "name": "魔界6",
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
        "11,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "0,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MJ6_0_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "0,1": {
            "0": {
                "condition": "flag:door_MJ6_0_1==1",
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
                        "name": "flag:door_MJ6_0_1",
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
    [ 91,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [ 85,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  0,  0,  0,  0,  0,  0,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,710,710,  4,  0,  0,  0,  4,710,710,  4,  4],
    [  4,  4,710,710,  0,  0,  0,  0,  0,710,710,  4,  4],
    [  4,  4,710,710,  4,  0,1183,  0,  4,710,710,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 91,  4]
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
        11,
        12
    ]
}