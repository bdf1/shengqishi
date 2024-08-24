main.floors.XW1=
{
    "floorId": "XW1",
    "title": "西武帝国1",
    "name": "西武帝国1",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "autotile7",
    "bgm": "lfmg.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[林霄,N485]\b[this,8,6]光明圣子阁下，我就只能送你到这里了，那边就是光明神殿的领域了，你快过去吧！",
        {
            "type": "changePos",
            "direction": "left"
        },
        "\t[莫析辉,hero]\b[hero]为什么墨奈突然又放了我，你们到底有什么阴谋？",
        "\t[林霄,N485]\b[this,8,6]我们没什么阴谋，圣子阁下，快回去吧！",
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    6
                ]
            ],
            "remove": true
        },
        "\t[莫析辉,hero]\b[hero]真是奇怪，抓我过去打了一顿，竟然又放了我？",
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[？？？,E1034]哪里走！",
        {
            "type": "changePos",
            "direction": "left"
        },
        "\t[莫析辉,hero]\b[hero]什么人？",
        {
            "type": "playBgm",
            "name": "boss3.mp3"
        },
        {
            "type": "animate",
            "name": "heidong3",
            "loc": [
                7,
                6
            ]
        },
        {
            "type": "setBlock",
            "number": "E1034",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        "\t[黑暗教皇,E1034]\b[this,7,6]光明圣子，本座乃黑暗神殿的主宰，黑暗教皇！",
        "\t[莫析辉,hero]\b[hero]！！！",
        {
            "type": "vibrate",
            "direction": "diagonal1",
            "time": 2000,
            "speed": 10,
            "power": 10
        },
        {
            "type": "animate",
            "name": "emo",
            "loc": [
                9,
                6
            ]
        },
        "\t[莫析辉,hero]\b[hero]啊啊啊啊啊啊！",
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "1"
        },
        "\t[黑暗教皇,E1034]\b[this,7,6]哈哈哈哈，哪有光明圣子落到黑暗神殿手里还有活着回去的道理！小子，受死吧！",
        {
            "type": "jumpHero",
            "loc": [
                11,
                6
            ],
            "time": 500
        },
        {
            "type": "vibrate",
            "direction": "diagonal1",
            "time": 2000,
            "speed": 10,
            "power": 10
        },
        {
            "type": "animate",
            "name": "darkattack",
            "loc": [
                11,
                6
            ]
        },
        "\t[莫析辉,hero]\b[hero]\\c[26]\r[red]啊啊啊啊啊啊！\r[]\\c[]",
        {
            "type": "animate",
            "name": "light",
            "loc": [
                10,
                5
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "light",
            "loc": [
                10,
                7
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N547",
            "loc": [
                [
                    10,
                    5
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N551",
            "loc": [
                [
                    10,
                    7
                ]
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[安南奎,N546]\b[this,10,5]辉儿，你没事吧？",
        "\t[莫析辉,hero]\b[hero]咳咳……唔……（说不出话）",
        "\t[温明啸,N550]\b[this,10,7]黑暗教皇！嘶，二哥，我们能打赢吗？",
        "\t[黑暗教皇,E1034]\b[this,7,6]哈哈哈哈哈哈，有意思，光明神殿的两位长老，你们一起上吧！",
        {
            "type": "jump",
            "from": [
                10,
                5
            ],
            "to": [
                8,
                5
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                10,
                7
            ],
            "to": [
                8,
                7
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "double",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "emo",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "thunder2",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "boss15",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "boss13",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "boss8",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "sword1",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "thunder3",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "animate",
            "name": "baozha",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "vibrate",
            "direction": "diagonal2",
            "time": 2000,
            "speed": 10,
            "power": 10
        },
        {
            "type": "jump",
            "from": [
                8,
                5
            ],
            "to": [
                10,
                5
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                8,
                7
            ],
            "to": [
                10,
                7
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[温明啸,N550]\b[this,10,7]咳咳……",
        "\t[安南奎,N546]\b[this,10,5]老七，你怎么样了！",
        "\t[黑暗教皇,E1034]\b[this,7,6]哈哈哈哈哈哈，除非上一任光明圣子或者光明圣女前来，否则，即便光明神殿所有的长老来了，都给我留下吧！",
        "\t[安南奎,N546]\b[this,10,5]我跟你拼了！",
        "\t[温明啸,N550]\b[this,10,7]不要啊！",
        "\t[芹萱,N466]都给我退下！",
        {
            "type": "animate",
            "name": "light",
            "loc": [
                9,
                6
            ]
        },
        {
            "type": "setBlock",
            "number": "N536",
            "loc": [
                [
                    9,
                    6
                ]
            ]
        },
        "\t[安南奎,N546]\b[this,10,5]大长老！",
        "\t[芹萱,N466]\b[this,9,6]墨烛，好久不见。",
        "\t[黑暗教皇,E1034]\b[this,7,6]芹宣，你竟敢来黑暗神殿！",
        "\t[芹萱,N466]\b[this,9,6]身为上一任光明圣女，不敢辱没光明之名。",
        "\t[黑暗教皇,E1034]\b[this,7,6]好啊，那就让本座看看，几十年不见，上一任光明圣女还有多大的能耐！",
        "\t[芹萱,N466]\b[this,9,6]二长老，七长老，还不带圣子离开这里！",
        "\t[安南奎,N546]\b[this,10,5]是！",
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
            "type": "hide",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    5
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    7
                ]
            ],
            "remove": true
        },
        {
            "type": "changeFloor",
            "floorId": "SR10",
            "loc": [
                6,
                6
            ],
            "direction": "up"
        },
        {
            "type": "setBlock",
            "number": "N546",
            "loc": [
                [
                    5,
                    5
                ]
            ],
            "floorId": "SR10"
        },
        {
            "type": "setBlock",
            "number": "N550",
            "loc": [
                [
                    7,
                    5
                ]
            ],
            "floorId": "SR10"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[安南奎,N546]\b[this,5,5]辉儿，你怎么样？",
        "\t[莫析辉,hero]\b[hero]咳咳……唔……",
        {
            "type": "animate",
            "name": "light",
            "loc": [
                6,
                7
            ]
        },
        {
            "type": "setBlock",
            "number": "N535",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "SR10"
        },
        "\t[安南奎,N546]\b[this,5,5]大长老！",
        "\t[芹宣,N466]\b[this,7,6]嗯，光明之神的力量，治愈！",
        {
            "type": "animate",
            "name": "red",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "operator": "+=",
            "value": "(status:hpmax)"
        },
        "\t[芹宣,N466]\b[this,7,6]小圣子，你没事吧！",
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[莫析辉,hero]\b[hero]好多了，谢谢大长老。大长老，您这么快就从黑暗神殿脱身了？",
        "\t[芹宣,N466]\b[this,7,6]我虽然打不过黑暗教皇，不过他也比我强不到哪里。想要留下我，没那么容易。",
        "\t[安南奎,N546]\b[this,5,5]幸好有大长老出手，否则谁都救不了你。",
        "\t[芹宣,N466]\b[this,7,6]圣子啊，你可要小心点了，不要再被黑暗圣子给抓住了。",
        "\t[莫析辉,hero]\b[hero]是！",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    5
                ]
            ],
            "floorId": "SR10"
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    5
                ]
            ],
            "floorId": "SR10"
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "floorId": "SR10"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,6": [
            "光明血瓶效果：恢复已损生命值的50%。\n黑暗血瓶效果：将当前生命值翻倍。",
            "红蝙蝠吸血，请压血打。\n先吃一个光明血瓶再吃一个黑暗血瓶会让勇士回满血。"
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "SR30",
            "loc": [
                0,
                6
            ]
        },
        "0,6": {
            "floorId": "XW2",
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
    [120061,120062,120081,120061,120062,120081,120061,120062,120081,120061,120062,120081,120061],
    [120069,120089,120089,120069,120070,120071,120069,120070,120071,120069,120089,120071,120069],
    [120077,120089,120079,120077,120078,120079,120077,120078,120079,120077,120089,120079,120077],
    [120004,687,  0,120004,348,1098, 21,120004,120004,120004,120004,120004,120004],
    [120004,  0,  0,755,  0,  0,  0,120004,  0,  0,  0,  0,120004],
    [120004,120004,1022,120004,120004,120004,769,120004,  0,  0,  0,  0,120004],
    [ 92,686,  0,120004,  0,10294,  0,  0,487,  0,  0,  0, 92],
    [120004,  0,  0,228,  0,  0,  0,120004,  0,  0,  0,  0,120004],
    [120004, 81,120004,120004,737,120004,120004,120004,  0,  0,  0,  0,120004],
    [120004,1022,120004, 21,1117, 21,120004,120004,120004,120004,120004,120004,120004],
    [120004,352,120004,120032,120033,120033,120033,120033,120033,120033,120033,120033,120033],
    [120004,618,120004,120040,120041,120041,120041,120041,120041,120041,120041,120041,120041],
    [120004,120004,120004,120040,120041,120041,120041,120041,120041,120041,120041,120041,120041]
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