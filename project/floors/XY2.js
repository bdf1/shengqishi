main.floors.XY2=
{
    "floorId": "XY2",
    "title": "光明学院 2 ",
    "name": "光明学院2",
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
    "events": {
        "7,7": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "left"
            }
        ],
        "5,7": [
            "\t[光明骑士,N440]\b[this]光明在我心中！",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "6,9": [
            "\t[萨鲁斯,wizard]\b[this]哈哈哈，小圣子，你来光明学院啦！",
            "\t[莫析辉,hero]\b[hero]不知前辈是？",
            "\t[萨鲁斯,wizard]\b[this]我是光明神殿的红衣主教萨鲁斯。光明神殿按实力分为白、绿、蓝、紫、黑、金、红七种层次的主教，红衣主教与七大长老是一个层次的。",
            "\t[莫析辉,hero]\b[hero]萨鲁斯主教好。",
            "\t[萨鲁斯,wizard]\b[this]圣子殿下真有礼貌，不过殿下虽然贵为圣子，但该做的任务还是要做的。希望殿下可以进入学院，展示一下自己的实力。",
            "\t[莫析辉,hero]\b[hero]那是自然，本少爷很快就能让他们知道本少爷的厉害。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "XY1",
            "loc": [
                6,
                0
            ]
        },
        "6,6": {
            "floorId": "XY3",
            "loc": [
                6,
                12
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
    [104200,104201,104202,104203,104204,104205,104206,104207,104347,104348,104349,104350,104351],
    [104208,104209,104210,104211,104212,104213,104214,104215,104355,104356,104357,104358,104359],
    [104216,104217,104218,104219,104220,104221,104222,104223,104363,104364,104365,104366,104367],
    [104224,104225,104226,104227,104228,104229,104230,104231,104371,104372,104373,104374,104375],
    [104232,104233,104234,104235,104236,104237,104238,104239,104379,104380,104381,104382,104383],
    [104240,104241,104242,104243,104244,104245,104246,104247,104387,104388,104389,104390,104391],
    [104248,104249,104250,104251,104252,104253,104254,104255,104395,104396,104397,104398,104399],
    [104454,104257,610,697,104260,442, 91,441,104403,697,610,104406,104454],
    [104454,686,356,223, 82,  0,  0,  0, 82,223,356,686,104454],
    [104454,104454,104454,104454,104454,104454,125,104454,104454,104454,104454,104454,104454],
    [104454,351,350,220, 81,  0,  0,  0, 81,220,350,351,104454],
    [104454,356,685,685,104454,  0,  0,  0,104454,685,685,356,104454],
    [104454,104454,104454,104454,104454,104454, 91,104454,104454,104454,104454,104454,104454]
],
    "bgmap": [

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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [104410,104411,104412,104413,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [104418,104419,104420,104421,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [104426,104427,104428,104429,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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