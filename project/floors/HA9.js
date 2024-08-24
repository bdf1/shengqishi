main.floors.HA9=
{
    "floorId": "HA9",
    "title": "黑暗神殿4",
    "name": "黑暗神殿4",
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
        "1,11": {
            "floorId": "HA7",
            "loc": [
                12,
                11
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_HA9_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_HA9_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_HA9_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_HA9_10_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,3": {
            "0": {
                "condition": "flag:door_HA9_10_3==2",
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
                        "name": "flag:door_HA9_10_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,6": {
            "0": {
                "condition": "flag:door_HA9_10_6==2",
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
                        "name": "flag:door_HA9_10_6",
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
    [140166,  0,  0,934,687,  0, 81,  0,140166,688,1118,688,140166],
    [140166,  0,140166,140166,140166,140166,140166,  0,140166,1099, 22,1099,140166],
    [140166,1024,140166,349,140166,703,140166,851,140166,140166, 85,140166,140166],
    [140166,  0,140166,687,140166,355,140166,  0,140166,1024,  0,1024,140166],
    [140166,687,140166,619,140166, 21,140166, 21,140166,  0,  0,  0,140166],
    [140166,  0,140166, 21,140166,619,140166,687,140166,140166, 85,140166,140166],
    [140166, 81,140166,  0,140166,934, 81,  0,140166,1023,  0,1023,140166],
    [140166,1021,140166,1024,140166,140166,140166,  0,140166,  0,  0,  0,140166],
    [140166,  0,140166, 81,140166,352,687,769,140166,140166, 81,140166,140166],
    [140166,  0,140166,687,140166,140166,140166,  0,140166,  0,  0,687,140166],
    [140166, 94,769,  0, 81, 81,  0,  0, 81,1022,  0,  0,140166],
    [140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166,140166]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        1,
        11
    ],
    "bg2map": [

],
    "fg2map": [

]
}