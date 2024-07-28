main.floors.MM2=
{
    "floorId": "MM2",
    "title": " 2 ",
    "name": "2",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10025",
    "bgm": "mingzhentankenanlansegubao.mp3",
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "floorId": "SR10",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "floorId": "SR10",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "floorId": "SR10",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    6
                ]
            ],
            "floorId": "SR10",
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
            "floorId": "SR10",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "floorId": "SR10",
            "remove": true
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[莫析辉,hero]\b[hero]放我出去！放我出去！",
        "\t[墨奈,N477]\b[this,6,2]闭嘴！放你出去？莫析辉，假如我黑暗圣子落入你们光明神殿，你们会怎么处置我?",
        "\t[莫析辉,hero]\b[hero]你……你要干什么？",
        {
            "type": "animate",
            "name": "thunder",
            "loc": [
                6,
                6
            ]
        },
        "\t[莫析辉,hero]\b[hero]啊！",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[莫析辉,hero]\b[hero]我要死了么……",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[墨奈,N477]\b[this,6,2]可恶……怎么会没有用……",
        "\t[莫析辉,hero]\b[hero]你说什么……",
        "\t[林霄,N485]\b[this,4,1]圣子殿下，教皇陛下听说您抓了光明圣子，他过来看看。",
        "\t[墨奈,N477]\b[this,6,2]什么！糟了！可恶，快把他送回去！",
        "\t[林霄,N485]\b[this,4,1]什么？",
        "\t[墨奈,N477]\b[this,6,2]把他送回去！别伤到他了，你亲自护送！",
        "\t[林霄,N485]\b[this,4,1]是！",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "setHeroOpacity",
            "opacity": 0
        },
        {
            "type": "changeFloor",
            "floorId": "MM3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [102057,102057,102057,102057,102057,102057,102057,102057,102057,102057,102057,102057,102057],
    [102057,  0,  0,  0,485,  0,  0,  0,  0,  0,  0,  0,102057],
    [102057,  0,  0,  0,  0,  0,477,  0,  0,  0,  0,  0,102057],
    [102057,  0,  0,  0,228,228,  0,228,228,  0,  0,  0,102057],
    [102057,  0,  0,228,  2,  2, 86,  2,  2,228,  0,  0,102057],
    [102057,  0,  0,228,  2,  0,  0,  0,  2,228,  0,  0,102057],
    [102057,  0,  0,228,  2,  0,  0,  0,  2,228,  0,101843,102057],
    [102057,  0,  0,228,  2,  0,  0,  0,  2,228,  0,101851,102057],
    [102057,  0,  0,228,  2,  2,  2,  2,  2,228,  0,  0,102057],
    [102057,  0,  0,  0,228,228,228,228,228,  0,  0,  0,102057],
    [102057,101864,101865,101866,101867,  0,  0,  0,  0,  0,  0,101862,102057],
    [102057,101872,101873,101874,101875,  0,  0,  0,  0,  0,  0,  0,102057],
    [102057,102057,102057,102057,102057,102057,102057,102057,102057,102057,102057,102057,102057]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}