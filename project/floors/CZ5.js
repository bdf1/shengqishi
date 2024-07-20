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
            "\t[二长老,man]如果没有血了，可以使用“光明宝典”将魔力转换成生命值哦，现在我恢复你50点魔力值",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "50"
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
    [ 20,201, 81,  0, 20,401,  0,401, 20, 21, 29, 32, 20],
    [ 20,265, 20,1128, 20,  0,201,  0, 20,  0, 28,  0, 20],
    [ 20,205, 20,  0, 20, 20, 81, 20, 20, 20,202, 20, 20],
    [ 20,397, 20,  0,202,  0,  0,201,  0, 31,  0,  0, 20],
    [ 20,401, 20, 81, 20, 20, 20, 20, 20, 20, 20,201, 20],
    [ 20, 30, 20,  0,  0,202, 22, 32, 27, 20, 32,  0, 92],
    [ 20,401, 20,203, 20, 20, 20, 20, 20, 20,  0, 29, 20],
    [ 20,397, 20,  0, 27, 20,  0, 21,  0,266,  0,121, 20],
    [ 20,205, 20, 21,  0, 20, 34, 20, 20, 20, 81, 20, 20],
    [ 20,265, 20,  0,401, 20,  0,349, 20,  0,203,  0, 20],
    [ 20,201, 81,  0,  0,265,  0,20033, 20, 21,1173, 34, 20],
    [ 20, 20, 20, 20, 20, 20, 20,20033,20035, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        0
    ]
}