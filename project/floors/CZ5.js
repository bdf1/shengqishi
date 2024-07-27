main.floors.CZ5=
{
    "floorId": "CZ5",
    "title": "村庄 5 ",
    "name": "村庄5",
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
        "11,8": [
            "\t[温明啸,N550]\b[this]如果没有血了，可以使用“光明宝典”将魔力转换成生命值哦，现在我恢复你500点魔力值",
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "500"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "CZ4",
            "loc": [
                6,
                12
            ]
        },
        "12,6": {
            "floorId": "CZ3",
            "loc": [
                0,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20],
    [ 20,728, 81,  0, 20,686,  0,686, 20, 21, 29,687, 20],
    [ 20,728, 20,602, 20,  0,728,  0, 20,  0, 28,  0, 20],
    [ 20,744, 20,  0, 20, 20, 81, 20, 20, 20,729, 20, 20],
    [ 20,610, 20,  0,729,  0,  0,728,  0,685,  0,  0, 20],
    [ 20,685, 20, 81, 20, 20, 20, 20, 20, 20, 20,728, 20],
    [ 20,362, 20,  0,  0,729, 22,687,358, 20,687,  0, 94],
    [ 20,685, 20,730, 20, 20, 20, 20, 20, 20,  0,361, 20],
    [ 20,610, 20,  0,358, 20,  0, 21,  0,729,  0,550, 20],
    [ 20,744, 20, 21,  0, 20,688, 20, 20, 20, 81, 20, 20],
    [ 20,728, 20,  0,689, 20,  0,710, 20,  0,730,  0, 20],
    [ 20,728, 81,  0,  0,728,  0,10300, 20, 21,698,688, 20],
    [ 20, 20, 20, 20, 20, 20, 20,10300,10300, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ],
    "bg2map": [

],
    "fg2map": [

]
}