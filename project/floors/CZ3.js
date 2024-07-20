main.floors.CZ3=
{
    "floorId": "CZ3",
    "title": "村庄 3 ",
    "name": "村庄3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,5": [
            "\t[二长老,man]圣子宝贝，你最好快一些收服圣骑士，越快越好，我这有几颗血红宝石，送给你吧",
            {
                "type": "setValue",
                "name": "item:I397",
                "operator": "+=",
                "value": "10"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "CZ1",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "CZ5",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:door_CZ3_2_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_CZ3_2_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,4": [
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "floorId": "CZ1",
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,10": {
            "0": {
                "condition": "flag:door_CZ3_2_10==2",
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
                        "name": "flag:door_CZ3_2_10",
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
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20],
    [ 21, 20, 29, 21, 20, 27,  0, 28, 20, 32, 82,348, 21],
    [398, 20,  0, 31, 20,397, 30,397, 20, 28, 20, 20, 20],
    [205, 20,205, 20, 20,401,1129,401, 20,  0, 20,491, 32],
    [  0, 32,  0,203, 20, 20,208, 20, 20,266, 20,265, 20],
    [ 20, 20, 20, 81, 20,121,  0,  0, 20, 81, 20, 81, 20],
    [ 94,  0,202,  0, 34,  0,  0,265, 81,  0,  0,  0, 20],
    [ 20, 20, 20, 82, 20, 20, 20, 20, 20, 20,203, 20, 20],
    [ 20,  0, 34,  0,266,  0,  0,  0,266,  0,  0,402, 20],
    [ 20,205,  0,205, 20, 20,204, 20, 20, 81, 20, 20, 20],
    [ 20, 20, 85, 20, 20, 32, 27, 32, 20,  0, 21,  0, 20],
    [ 20,400, 72,400, 20, 21, 29, 21, 20,1174,  0,205, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,491,404]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        0,
        6
    ]
}