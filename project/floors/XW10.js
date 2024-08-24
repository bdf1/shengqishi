main.floors.XW10=
{
    "floorId": "XW10",
    "title": "西武帝国 10 ",
    "name": "西武帝国10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X140283",
    "bgm": "lfmg.mp3",
    "weather": [
        "rain",
        5
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": [
            "\t[栗柴湖,E937]\b[this,6,6]见过光明圣子殿下，圣子殿下驾到，有失远迎。",
            "\t[莫析辉,hero]\b[hero]啧啧，不错嘛",
            "\t[栗柴湖,E937]\b[this,6,6]圣子殿下所说何事呀",
            "\t[莫析辉,hero]\b[hero]我以为西武帝国一片荒凉，西武帝国的皇宫应该会很破旧的，没想到呀……",
            "\t[莫析辉,hero]\b[hero]百姓过的那么苦，你却过的如此逍遥，栗柴•湖，你可真行。",
            "\t[栗柴湖,E937]\b[this,6,6]圣子殿下是来怪罪朕的么",
            "\t[莫析辉,hero]\b[hero]我怎敢怪罪尊贵的西武帝国皇帝，如果没有猜错，你已经舍弃光明，投靠黑暗神殿了吧。",
            "\t[栗柴湖,E937]\b[this,6,6]圣子殿下英明啊",
            "\t[莫析辉,hero]\b[hero]你可以受死了",
            "\t[栗柴湖,E937]\b[this,6,6]圣子殿下，您小看我了！我现在就让你知道，我在黑暗神殿的培养下，变得多么强大！",
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "XW9",
            "loc": [
                2,
                1
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            "\t[栗柴湖,E937]\b[this]啊！圣子殿下饶命啊",
            "\t[莫析辉,hero]\b[hero]是你要投靠黑暗的，怪不得我！",
            {
                "type": "setBlock",
                "number": "I1100",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I620",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I416",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140265,40359,140265,140356,140265,140265, 93,140265,140265,140356,140265,40359,140265],
    [140265,40367,140265,140265,140265,140265,  0,140265,140265,140265,140265,40367,140265],
    [140265,140265,140295,140295,140418,140419,1078,140434,140435,140295,140295,140265,140265],
    [140265,140265,140303,140303,140426,140427,  0,140442,140443,140303,140303,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,41258,  0,  0,  0,41259,  0,  0,140265,140265],
    [140265,140265,  0,  0,41266,  0,937,  0,41267,  0,  0,140265,140265],
    [140265,140265,  0,  0,41274,41195,41196,41197,41275,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,40634,40635,40634,40635,  0,40638,40639,40636,40637,140265,140265],
    [140265,140265,40642,40643,40642,40643,  0,40646,40647,40644,40645,140265,140265],
    [140265,140265,140265,140265,140265,140265,140265,140265,140265,140265,140265,140265,140265],
    [140265,140265,140265,140265,140265,140265,140265,140265,140265,140265,140265,140265,140265]
],
    "bgmap": [
    [140265,140265,140265,140265,140265,140265,  0,140265,140265,140265,140265,140265,140265],
    [140265,140265,140265,140265,140265,140265,  0,140265,140265,140265,140265,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,40456,40457,40458,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,40464,40465,40466,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,40472,40473,40474,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,  0,  0,  0,  0,  0,  0,  0,  0,  0,140265,140265],
    [140265,140265,140265,140265,140265,140265,  0,140265,140265,140265,140265,140265,140265],
    [140265,140265,140265,140265,140265,140265,  0,140265,140265,140265,140265,140265,140265]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40626,40627,40626,40627,  0,40628,40629,40630,40631,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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