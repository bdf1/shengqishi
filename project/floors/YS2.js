main.floors.YS2=
{
    "floorId": "YS2",
    "title": "隐世学院 2 ",
    "name": "隐世学院2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "cbzc.mp3",
    "firstArrive": [
        "\t[？？？,N1068]\b[this,5,4]站住，你们不准从这里走！",
        "\t[？？？,N502]\b[this,6,7]呵，卡鲁鲁，就凭你还想拦住我？",
        "\t[？？？,N1072]\b[this,7,4]星诺，别忘了，还有我呢！",
        "\t[？？？,N502]\b[this,6,7]切，小屁孩。",
        "\t[？？？,N1072]\b[this,7,4]你说什么！",
        "\t[？？？,N506]\b[this,5,8]哥哥！",
        "\t[？？？,N502]\b[this,6,7]长倾，别怕。",
        {
            "type": "jumpHero",
            "loc": [
                6,
                10
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[莫析辉,hero]\b[hero]几位在干什么呢？",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    5,
                    8
                ]
            ]
        },
        "\t[？？？,N502]\b[this,6,7]阁下何人？",
        "\t[莫析辉,hero]\b[hero]哦，我是光明神殿光明圣子莫析辉。",
        "\t[星诺,N502]\b[this,6,7]我是精灵族王子星诺，这是我妹妹长倾。",
        "\t[莫析辉,hero]\b[hero]嗯，知道了，不过几位在这里打架，带上小孩子也不好吧？",
        "\t[星诺,N502]\b[this,6,7]小孩子？",
        "\t[长倾,N506]\b[this,5,8]噗嗤……哈哈哈哈哈！小孩子！",
        "\t[？？？,N1072]\b[this,7,4]你笑什么！你们才是小孩子呢！",
        "\t[卡鲁鲁,N1068]\b[this,5,4]光明圣子阁下，我是兽人族少主卡鲁鲁，这位是矮人族少族长的凯迪。",
        "\t[莫析辉,hero]\b[hero]原来是矮人族的朋友，难怪……",
        "\t[凯迪,N1072]\b[this,7,4]久闻光明神殿大名。",
        "\t[莫析辉,hero]\b[hero]既是如此，几位也不要在这里打打杀杀了。我们背后的势力，也不是叫我们来隐世学院拼个你死我活的吧。",
        "\t[长倾,N506]\b[this,5,8]光明圣子阁下，我们并没有要与他们打，反倒是他们拦我们路。",
        "\t[卡鲁鲁,N1068]\b[this,5,4]兽人族、矮人族与精灵族早就结怨颇深，我们今日拦你们，那是你们以往对我族有深仇大恨！",
        "\t[星诺,N502]\b[this,6,7]深仇大恨，那也是你族先对我族动手！",
        "\t[莫析辉,hero]\b[hero]好啦，别吵了，我们既然来到隐世学院，那便是同学一场，也许几位的族人也是希望几位能在此缓和一下关系呢？",
        "\t[凯迪,N1072]\b[this,7,4]既是圣子阁下如此说了，我暂且饶恕他们吧！",
        "\t[莫析辉,hero]\b[hero]好得很，咱们几个，一起同行如何？",
        "\t[星诺,N502]\b[this,6,7]好，圣子阁下先请！",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    4
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    4
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "YS1",
            "loc": [
                6,
                12
            ]
        },
        "6,0": {
            "floorId": "YS3",
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
    [140,140,140,140,140,140, 91,140,140,140,140,140,140],
    [140, 21, 21, 21, 82,  0,  0,  0, 82, 21, 21, 21,140],
    [140,140,140,140,140,140,  0,140,140,140,140,140,140],
    [140,710,710,710, 82,  0,  0,  0, 82,710,710,710,140],
    [140,140,140,140,140,1068,  0,1072,140,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,415,415,415, 83,  0,  0,  0, 83,415,415,415,140],
    [140,140,140,140,140,  0,505,  0,140,140,140,140,140],
    [140,140,140,140,140,509,  0,  0,140,140,140,140,140],
    [140,698,698,698, 81,  0,  0,  0, 81,687,687,687,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140, 22, 81, 81, 81,  0,  0,  0, 81, 81, 81, 22,140],
    [140,140,140,140,140,140, 91,140,140,140,140,140,140]
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