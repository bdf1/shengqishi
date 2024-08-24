main.floors.HA20=
{
    "floorId": "HA20",
    "title": "黑暗神殿 10 ",
    "name": "黑暗神殿10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X140137",
    "bgm": "gentaiyangxishuozaijian.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "HA18",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_HA20_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_HA20_6_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_HA20_6_9==2",
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
                        "name": "flag:door_HA20_6_9",
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
    [140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166],
    [140166,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140166],
    [140166,  0,  0,  0,140166,140166,140166,140166,140166,  0,  0,  0,140166],
    [140166,  0,  0,140166,140166,140166,140166,140166,140166,140166,  0,  0,140166],
    [140166,  0,140166,140166,710,  0,  0,  0,710,140166,140166,  0,140166],
    [140166,  0,140166,140166,  0,711,  0,711,  0,140166,140166,  0,140166],
    [140166,  0,140166,140166,1117,  0,1116,  0,1118,140166,140166,  0,140166],
    [140166,  0,140166,140166,  0,711,  0,711,  0,140166,140166,  0,140166],
    [140166,  0,140166,140166,710,  0,  0,  0,710,140166,140166,  0,140166],
    [140166,  0,  0,140166,140166,140166, 85,140166,140166,140166,  0,  0,140166],
    [140166,  0,  0,  0,140166,877,  0,877,140166,  0,  0,  0,140166],
    [140166,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140166],
    [140166,140166,140166,140166,140166,140166, 91,140166,140166,140166,140166,140166,140166]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}