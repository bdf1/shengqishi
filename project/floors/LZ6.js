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
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,11": [
            "\t[智者,man]\b[this]进入最后一层不可回来，记得至少留有三把红钥匙。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
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
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT36_5_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT36_5_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,6": {
            "0": {
                "condition": "flag:door_MT36_5_6==2",
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
                        "name": "flag:door_MT36_5_6",
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
    [ 87,  1,361,358,361,245,  0,  1,  1,  1,  1,  1, 21],
    [  0,  1,  1,  1,  1,  1, 81, 81,  0,  1,760, 81,  0],
    [  0, 81,761,  0,358,  0,750, 81,757,  1,361,  1,759],
    [  1,  1,  0,  1,  1,  1,  1,  1,360,  1,  0,  1,  0],
    [684,  1, 21,  1,  0,366,  0,  1,362,  1, 81,  1,757],
    [684,  1,  0,  1,683,  0,683,  1,360,  1,245,  1, 82],
    [684, 82,750,  1,  1, 85,  1,  1,  1,  1,  0,  1,362],
    [  1,  1, 81,  1,759,  0,759,  1,750,  0, 21,  1,684],
    [360,761,  0,  1,  1, 82,  1,  1, 82,  1,  1,  1,  1],
    [  1,  1,  0,758, 81,360,  0,761,  0,683,  0,758,  0],
    [683,  1,245,  1,  1,  1,  1,  1,750,  1,  1, 81,  1],
    [683, 81,  0,  1,684,684,757, 81,  0,  1,121,  0,  0],
    [683,  1,684,  1,683,683,  0,  1, 21,  1,  0, 88,  0]
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