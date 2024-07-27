main.floors.CZ2=
{
    "floorId": "CZ2",
    "title": "村庄 2 ",
    "name": "村庄2",
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
        "6,8": [
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    8
                ],
                "direction": "down"
            },
            "\t[沂蒙贤,N570]哈哈，圣子殿下，竟然被这点东西吸引了",
            "\t[光明圣子,hero]\b[hero]三长老，你干什么!",
            "\t[沂蒙贤,N570]我干什么？你太天真啦!你是莫析家族天赋最强的人，等你成为下一任光明教皇，岂能有我北纳家族的位置?让我替圣女把你除了吧！哈哈哈哈",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "CZ1",
            "loc": [
                6,
                0
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20,357,356,355,354,609, 20, 20, 20, 20],
    [ 20, 20, 20, 20,689,689,689,689,689, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 21, 21, 21, 21, 21, 20, 20, 20, 20],
    [ 20, 20, 20, 20,698,688, 22,688,698, 20, 20, 20, 20],
    [ 20, 20, 20, 20,698,688,  0,688,698, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,20263,  0,20263, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 91, 20, 20, 20, 20, 20, 20]
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