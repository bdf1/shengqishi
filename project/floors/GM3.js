main.floors.GM3=
{
    "floorId": "GM3",
    "title": "圣子宫 3 ",
    "name": "圣子宫3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X30057",
    "bgm": "mingyunshouhu.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[罗涛,N582]\b[this,6,5]准圣子殿下，这是圣子殿下的座位，请你不要坐在这里。",
        "\t[葛尔丹,N566]\b[this,6,2]坐一下又不会少块肉，别在这里讨嫌。",
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:5"
            ]
        },
        "\t[莫析辉,hero]\b[hero]罗涛，你退下。",
        "\t[罗涛,N582]\b[this,6,5]是!",
        {
            "type": "move",
            "loc": [
                6,
                5
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    5,
                    5
                ]
            ]
        },
        "\t[莫析辉,hero]\b[hero]准圣子哥哥，来找小弟何事？怎么没有见你带着卢轩来呢。",
        "\t[葛尔丹,N566]\b[this,6,2]圣子弟弟新封圣子，哥哥有好些体己话要跟弟弟说，带着守护骑士在一边碍手碍脚的，多不方便。",
        "\t[莫析辉,hero]\b[hero]行吧，罗涛，你下去。",
        "\t[罗涛,N582]\b[this,5,5]……",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    5
                ]
            ],
            "remove": true
        },
        "\t[葛尔丹,N566]\b[this,6,2]圣子弟弟真是痛快。只是把守护骑士屏退，不怕哥哥对你不利么?",
        "\t[莫析辉,hero]\b[hero]你要是杀了我，二长老和七长老都不会放过你的。",
        "\t[葛尔丹,N566]\b[this,6,2]我不是那种人，我来啊，只是想告诉弟弟，小心蜜西娅那个女人，她可不是你的朋友。",
        "\t[莫析辉,hero]\b[hero]此话怎讲？",
        "\t[葛尔丹,N566]\b[this,6,2]你知道三长老和五长老为什么没有来参加你封圣子的洗礼吗？",
        "\t[莫析辉,hero]\b[hero]圣女说，他们不是有事吗？",
        "\t[葛尔丹,N566]\b[this,6,2]别傻了，他们能有啥事？四长老和六长老从商，掌握光明神殿的资源，那才叫忙不过来。",
        "\t[莫析辉,hero]\b[hero]哦哦，随便吧，总不能因为这点小事就计较吧。",
        "\t[葛尔丹,N566]\b[this,6,2]那倒也是。圣子弟弟好好休息，有空来找哥哥玩。",
        {
            "type": "animate",
            "name": "chuansong",
            "loc": [
                6,
                2
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
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,12": [
            "\t[光明骑士,N440]\b[this]为圣子殿下赴汤蹈火在所不辞！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "7,11": [
            "\t[光明骑士,N440]\b[this]为圣子殿下赴汤蹈火在所不辞！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "5,11": [
            "\t[光明骑士,N440]\b[this]为圣子殿下赴汤蹈火在所不辞！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "5,12": [
            "\t[光明骑士,N440]\b[this]为圣子殿下赴汤蹈火在所不辞！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "7,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[唐佳成,N467]\b[this]圣子殿下！",
                "\t[辉,hero]\b[hero]emmm，唐佳成，你待在光明神殿最好还是找个事儿做。我总不能一直养着你吧?",
                "\t[唐佳成,N467]\b[this]是，我想当骑士！",
                "\t[辉,hero]\b[hero]是个不错的想法，那你去教皇殿右边的骑士团吧！",
                "\t[唐佳成,N467]\b[this]是！"
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "GM1",
            "loc": [
                3,
                12
            ]
        },
        "0,6": {
            "floorId": "GM4",
            "loc": [
                12,
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
    [  0,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,  0],
    [  0,50049,50049,50049,50049,50049, 17,50049,50049,50049,50049,50049,  0],
    [  0,  0,50165,50154,50155,50100,566,50100,50154,50155,50165,  0,  0],
    [30718,30719,60355,50162,50163,  0,  0,  0,50162,50163,60355,  0,  0],
    [101,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,101],
    [102,30751,  0,  0,  0,  0,585,  0,  0,  0,  0,30751,102],
    [ 92,  0,  0,50165,60353,  0,  0,  0,60354,50165,  0,  0,  0],
    [101,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,101],
    [102,30750,  0,50165,60353,  0,  0,  0,60354,50165,  0,30750,102],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,50165,60353,  0,  0,  0,60354,50165,  0,  0,  0],
    [  0,  0,  0,  0,  0,442,  0,441,  0,  0,  0,  0,  0],
    [30718,30719,50164,50164,50164,442, 93,441,50164,50164,50164,30694,30695]
],
    "bgmap": [
    [30217,30217,30217,30217,30217,30217,30217,30217,30217,30217,30217,30217,30217],
    [30217,  0,  0,  0,  0,  0,50049,  0,  0,  0,  0,  0,30217],
    [30217,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30217],
    [30217,  0,30432,30433,30434,30435,30436,30437,30438,30439,30520,  0,30217],
    [30217,  0,30440,30441,30442,30443,30444,30445,30446,30447,30406,  0,30217],
    [30217,  0,30448,30449,30450,30451,30452,30453,30454,30455,30414,  0,30217],
    [30217,  0,30456,30457,30458,30459,30460,30461,30462,30463,30422,  0,30217],
    [30217,  0,30464,30465,30466,30467,30468,30469,30470,30471,30430,  0,30217],
    [30217,  0,30472,30473,30474,30475,30476,30477,30478,30479,30407,  0,30217],
    [30217,  0,30480,30481,30482,30483,30484,30485,30486,30487,30415,  0,30217],
    [30217,  0,30488,30489,30490,30491,30492,30493,30494,30495,30423,  0,30217],
    [30217,  0,30496,30497,30498,30499,30500,30501,30502,30503,30431,  0,30217],
    [30217,30217,30217,30217,30217,30217,30217,30217,30217,30217,30217,30217,30217]
],
    "fgmap": [
    [  0,  0,50107,50124,  0,50083,50084,50085,  0,50124,50107,  0,  0],
    [30702,30703,50157,50132,  0,50091,  0,50093,  0,50132,50157,30678,30679],
    [30710,30711,  0,  0,  0,  0,  0,  0,  0,  0,  0,30686,30687],
    [30718,30719,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30743,  0,  0,  0,  0,  0,  0,  0,  0,  0,30743,  0],
    [  0,  0,  0,50157,60350,  0,  0,  0,60351,50157,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30742,  0,50157,60350,  0,  0,  0,60351,50157,  0,30742,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,50157,60350,  0,  0,  0,60351,50157,  0,  0,  0],
    [30702,30703,  0,  0,  0,  0,  0,  0,  0,  0,  0,30678,30679],
    [30710,30711,50156,50156,50156,  0,  0,  0,50156,50156,50156,30686,30687],
    [30718,30719,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50071,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50079,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ]
}