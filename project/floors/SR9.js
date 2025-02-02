main.floors.SR9=
{
    "floorId": "SR9",
    "title": "深入 9 ",
    "name": "深入9",
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
    "events": {
        "6,1": [
            "\t[光明骑士,N440]\b[this]圣子殿下。",
            "\t[莫析辉,hero]\b[hero]咦，你不是圣女姐姐身边的光明骑士吗？",
            "\t[光明骑士,N440]\b[this]圣子殿下还记得小的。",
            "\t[莫析辉,hero]\b[hero]你看到圣女姐姐去了哪里吗？",
            "\t[光明骑士,N440]\b[this]属下刚刚倒是看到了黑暗圣子与圣女殿下交手了一会，往这个方向去了。",
            "\t[莫析辉,hero]\b[hero]好，我也赶快过去……",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "SR8",
            "loc": [
                12,
                6
            ]
        },
        "6,0": {
            "floorId": "SR10",
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
    [151,151,151,151,151,151, 91,151,151,151,151,151,151],
    [151,602,714,363,  0,740,440,151,361,  0,743, 21,151],
    [151, 21,151,151,151,151,743,151, 81,151,151,  0,151],
    [151,691,746,743,746, 81,  0,151,742,  0,151,746,151],
    [151,151,151,151,151,151,689,151,  0,361,151, 81,151],
    [151,746, 81,  0,  0,151,361,151,151,740,151,  0,151],
    [151,  0,151,151,743, 81,  0,151,360,360,151,  0, 92],
    [151,  0,151,  0,  0,151, 81,151,610,610,151,746,151],
    [151,689,151, 21,710,151,742,151,151,151,151,  0,151],
    [151,  0,151,689,364,151,  0, 21,  0,743,  0,689,151],
    [151, 81,151,151,151,151,151,151,151,151,151, 81,151],
    [151,740,362,362,362,151,358,358,358,743,743,743,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
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
        12,
        6
    ]
}