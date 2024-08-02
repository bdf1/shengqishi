main.floors.SR10=
{
    "floorId": "SR10",
    "title": "深入 10 ",
    "name": "深入10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "SR9",
            "loc": [
                6,
                0
            ]
        },
        "6,12": {
            "floorId": "SR11",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_SR10_1_2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SR10_11_2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SR10_6_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    6
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[莫析辉,hero]\b[hero]解决了……",
            "\t[???]小子，你中计了！",
            "\t[莫析辉,hero]\b[hero]！！！",
            {
                "type": "animate",
                "name": "heidong3",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "setBlock",
                "number": "N477",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "N485",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[莫析辉,hero]\b[hero]可恶的墨奈，你不讲武德！",
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "changeFloor",
                "floorId": "MM2",
                "loc": [
                    6,
                    6
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,2": [
            "\t[莫析辉,hero]\b[hero]奇怪，墨奈居然不在这里……喂，那个家伙，你知道黑暗圣子在哪里吗？",
            "\t[骷髅金将,E739]\b[this,6,6]吼！",
            "\t[莫析辉,hero]\b[hero]看来是个没头脑的怪物，免得它伤及无辜，我还是先解决了它吧！"
        ]
    },
    "autoEvent": {
        "1,2": {
            "0": {
                "condition": "flag:door_SR10_1_2==1",
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
                        "name": "flag:door_SR10_1_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "11,2": {
            "0": {
                "condition": "flag:door_SR10_11_2==1",
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
                        "name": "flag:door_SR10_11_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,11": {
            "0": {
                "condition": "flag:door_SR10_6_11==1",
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
                        "name": "flag:door_SR10_6_11",
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
    [151,151,151,151,151,151, 93,151,151,151,151,151,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151, 85,152,152,152,152, 83,152,152,152,152, 85,151],
    [151,  0,152,  0,  0,  0,  0,  0,  0,  0,152,  0,151],
    [151,  0,152,  0,  0,  0,  0,  0,  0,  0,152,  0,151],
    [151,  0,152,  0,  0,  0,  0,  0,  0,  0,152,  0,151],
    [151,416,152,  0,  0,  0,739,  0,  0,  0,152,615,151],
    [151,  0,152,  0,  0,  0,  0,  0,  0,  0,152,  0,151],
    [151,  0,152,  0,  0,  0,  0,  0,  0,  0,152,  0,151],
    [151,  0,152,  0,  0,  0,  0,  0,  0,  0,152,  0,151],
    [151,  0,152,152,152,152,152,152,152,152,152,  0,151],
    [151, 21, 21, 21,  0,  0, 85,  0,  0, 21, 21, 21,151],
    [151,151,151,151,151,151, 93,151,151,151,151,151,151]
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
        0
    ]
}