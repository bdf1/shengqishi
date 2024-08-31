main.floors.MJ8=
{
    "floorId": "MJ8",
    "title": "魔界 8 ",
    "name": "魔界8",
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
        "10,12": {
            "floorId": "MJ7",
            "loc": [
                10,
                12
            ]
        },
        "0,10": {
            "floorId": "MJ9",
            "loc": [
                0,
                10
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_MJ8_1_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "1,10": {
            "0": {
                "condition": "flag:door_MJ8_1_10==1",
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
                        "name": "flag:door_MJ8_1_10",
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
    [  4,  4,  4,  4,  4,712,712,712,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,712,712,712,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  0,1181,  0,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4],
    [  4,  4,  4,  0,  4,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  4,  4,  0,  4,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  4,  4,  0,  4,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  4,  4,  0,  4,  4,  4,  4,  4,  4,  0,  4,  4],
    [ 92, 85,  0,  0,  4,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 91,  4,  4]
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
        10,
        12
    ]
}