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
                "name": "flag:door_MJ6_5_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MJ6_5_6",
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
                "condition": "flag:door_MJ6_5_6==2",
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
                        "name": "flag:door_MJ6_5_6",
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
    [ 87,  4,361,358,361,245,  0,  4,  4,  4,  4,  4, 21],
    [  0,  4,  4,  4,  4,  4, 81, 81,  0,  4,760, 81,  0],
    [  0, 81,761,  0,358,  0,750, 81,757,  4,361,  4,759],
    [  4,  4,  0,  4,  4,  4,  4,  4,360,  4,  0,  4,  0],
    [684,  4, 21,  4,  0,366,  0,  4,362,  4, 81,  4,757],
    [684,  4,  0,  4,683,  0,683,  4,360,  4,245,  4, 82],
    [684, 82,750,  4,  4, 85,  4,  4,  4,  4,  0,  4,362],
    [  4,  4, 81,  4,759,  0,759,  4,750,  0, 21,  4,684],
    [360,761,  0,  4,  4, 82,  4,  4, 82,  4,  4,  4,  4],
    [  4,  4,  0,758, 81,360,  0,761,  0,683,  0,758,  0],
    [683,  4,245,  4,  4,  4,  4,  4,750,  4,  4, 81,  4],
    [683, 81,  0,  4,684,684,757, 81,  0,  4,121,  0,  0],
    [683,  4,684,  4,683,683,  0,  4, 21,  4,  0, 88,  0]
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