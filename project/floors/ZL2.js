main.floors.ZL2=
{
    "floorId": "ZL2",
    "title": "东凌走廊 2 ",
    "name": "东凌走廊2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 4,
    "defaultGround": "X10006",
    "bgm": "zhuangkuoshishi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            "\t[准涵,N436]\b[this]准涵，拜见圣子殿下！",
            "\t[莫析辉,hero]\b[hero]准涵，你起来吧。有什么事找我？",
            "\t[准涵,N436]\b[this]圣子殿下，莫析家族、温明家族、安南家族怕是要遭遇大变了……奴婢的儿子，是一位光明骑士，他是莫析家族的守卫者……",
            "\t[准涵,N436]\b[this]殿下，求求你，帮我把这件铠甲拿给他好吗？",
            {
                "type": "setValue",
                "name": "item:I632",
                "operator": "+=",
                "value": "1"
            },
            "\t[莫析辉,hero]\b[hero]好，准涵，你别哭啊，我答应你就是了。",
            "\t[准涵,N436]\b[this]谢谢殿下！",
            "\t[莫析辉,hero]\b[hero]没事。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true
            },
            "\t[莫析辉,hero]\b[hero]准涵……你比蝶影幸运……葛尔丹是个好的主子，他能护住你和卢轩，可怜的蝶影和罗涛，生生成为了我和蜜茜娅斗争的冤魂……"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "ZL1",
            "loc": [
                6,
                0
            ]
        },
        "6,0": {
            "floorId": "ZL3",
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
    [20336,20336,20336,20336,20336,20336, 91,20336,20336,20336,20336,20336,20336],
    [20336,20336, 22, 81, 81, 81,  0, 81, 81, 81, 22,20336,20336],
    [20336,20336,20336,20336,20336,20336,  0,20336,20336,20336,20336,20336,20336],
    [20336,20336,710,710,710, 81,  0, 81,701,701,701,20336,20336],
    [20336,20336,20336,20336,20336,20336,  0,20336,20336,20336,20336,20336,20336],
    [20336,20336,368,368,368,1077,  0,1076,367,367,367,20336,20336],
    [20336,20336,20336,20336,20336,20336,436,20336,20336,20336,20336,20336,20336],
    [20336,20336,415,415,415, 83,  0, 83,415,415,415,20336,20336],
    [20336,20336,20336,20336,20336,20336,  0,20336,20336,20336,20336,20336,20336],
    [20336,20336,712,712,712, 82,  0, 82,703,703,703,20336,20336],
    [20336,20336,20336,20336,20336,20336,  0,20336,20336,20336,20336,20336,20336],
    [20336,20336, 21, 21, 21, 82,  0, 82, 21, 21, 21,20336,20336],
    [20336,20336,20336,20336,20336,20336, 91,20336,20336,20336,20336,20336,20336]
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