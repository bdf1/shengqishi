main.floors.XY10=
{
    "floorId": "XY10",
    "title": "光明学院 10 ",
    "name": "光明学院10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "bxsgzz.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "XY9",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setBlock",
                "number": "I612",
                "loc": [
                    [
                        4,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I416",
                "loc": [
                    [
                        8,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I625",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            "\t[考核法师,E1027]\b[this]圣子殿下，你通过考核了，我通知您一件事，您可以去光明学院6，从那里进入隐世学院了。",
            "\t[莫析辉,hero]\b[hero]隐世学院？",
            "\t[考核法师,E1027]\b[this]是的，隐世学院是一个隐世的学院，比起光明学院也是不弱。很多强大势力的少主都去隐世学院交流，这次，教皇陛下决定让你和圣女殿下、准圣子殿下一起去交流……",
            "\t[莫析辉,hero]\b[hero]好，我知道了。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,8": [
            "\t[考核法师,E1027]\b[this,6,5]拜见圣子殿下。我是考核法师，需要考验一下圣子殿下。"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  3,  3,  3,  3,  3,  3,  3,  0,  0,  3],
    [  3,  0,  3,  3,  0,  0,  0,  0,  0,  3,  3,  0,  3],
    [  3,  0,  3,  0,  0,  0,  0,  0,  0,  0,  3,  0,  3],
    [  3,  0,  3,  0,  0,  0,1027,  0,  0,  0,  3,  0,  3],
    [  3,  0,  3,  0,  0,  0,  0,  0,  0,  0,  3,  0,  3],
    [  3,  0,  3,  3,  0,  0,  0,  0,  0,  3,  3,  0,  3],
    [  3,  0,  0,  3,  3,  3, 83,  3,  3,  3,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3, 91,  3,  3,  3,  3,  3,  3]
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