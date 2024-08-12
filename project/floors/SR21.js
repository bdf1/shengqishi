main.floors.SR21=
{
    "floorId": "SR21",
    "title": "深入 21 ",
    "name": "深入21",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "autotile7",
    "bgm": "tiankong.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "SR20",
            "loc": [
                6,
                0
            ]
        },
        "12,6": {
            "floorId": "SR22",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_SR21_3_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_SR21_3_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,8": {
            "0": {
                "condition": "flag:door_SR21_3_8==2",
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
                        "name": "flag:door_SR21_3_8",
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
    [120037,120038,120038,120038,120038,120038,120038,120038,120038,120038,120038,120038,120039],
    [120045, 21,120007,358,358,358,362,360,360,360,120007,698,120047],
    [120045, 21,120007,120007,120007,120007,1076,120007,120007,120007,120007,698,120047],
    [120045, 21,120007,753,  0,691,  0,756,  0, 21,120007,698,120047],
    [120045,757,120007, 81,120007,120007,120007,120007,120007,754,120007,756,120047],
    [120045,  0,612,  0,752,  0, 21,  0,120007,  0, 81,  0,120047],
    [120045,120007,120007,120007,120007,120007,753,  0,752,  0,120007,  0, 94],
    [120045,611,363,120007,752,  0,  0,120007,120007,120007,120007,757,120047],
    [120045,611,  0, 85,  0,  0,690,120007,365,756, 81,  0,120047],
    [120045,611,365,120007,752,  0,  0,120007,603,712,120007,690,120047],
    [120045,120007,120007,120007,120007,120007,753,120007,120007,120007,120007,120007,120047],
    [120045,691,691,691, 81, 81,  0,1077,1077,691,691,691,120047],
    [120053,120054,120054,120054,120054,120054, 91,120054,120054,120054,120054,120054,120055]
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