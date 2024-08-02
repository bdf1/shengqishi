main.floors.MM4=
{
    "floorId": "MM4",
    "title": " 4 ",
    "name": "4",
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
    "bgm": "gaolikangzhikb.mp3",
    "firstArrive": [
        {
            "type": "setBlock",
            "number": "N480",
            "loc": [
                [
                    6,
                    11
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                11
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:5"
            ]
        },
        "\t[墨奈,N477]\b[this,6,6]唔……",
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
            "type": "animate",
            "name": "darkattack",
            "loc": [
                6,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": "N493",
            "loc": [
                [
                    6,
                    1
                ]
            ]
        },
        "\t[墨奈,N477]\b[this,6,6]唔……你是什么人！",
        "\t[？？？,N493]\b[this,6,1]圣子殿下，怎么不认得我了？",
        {
            "type": "animate",
            "name": "darkattack",
            "loc": [
                6,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": "N481",
            "loc": [
                [
                    6,
                    1
                ]
            ]
        },
        "\t[墨奈,N477]\b[this,6,6]呼，黛默琳，是你啊……",
        "\t[黛默琳,N481]\b[this,6,1]圣子殿下，自然是我。",
        "\t[墨奈,N477]\b[this,6,6]黛默琳，我遭到了光明圣子和光明圣女的联手对付，你快帮我疗伤！",
        "\t[黛默琳,N481]\b[this,6,1]哈哈哈哈哈！啊哈哈哈哈哈！",
        {
            "type": "vibrate",
            "direction": "diagonal1",
            "time": 2000,
            "speed": 10,
            "power": 10
        },
        "\t[墨奈,N477]\b[this,6,6]黛默琳，你笑什么？",
        "\t[黛默琳,N481]\b[this,6,1]亲爱的，我笑你现在还不明白，这一切都是我在算计你啊！",
        "\t[墨奈,N477]\b[this,6,6]黛默琳，你什么意思？",
        "\t[黛默琳,N481]\b[this,6,1]虽然你是我心中最挚爱的人，但黑暗之神似乎对你格外眷顾。我身为黑暗圣女，却发现我所拥有的一切，似乎都因你而变得微不足道。若不将你除掉，我又如何能够获取黑暗神殿所提供的一切资源呢？在黑暗神殿，你成为了我取得力量的障碍，我不得不做出艰难的抉择。",
        "\t[墨奈,N477]\b[this,6,6]黛默琳，我那么地爱你，我以为你也是爱我的，没想到你竟然是这种人！",
        "\t[黛默琳,N481]\b[this,6,1]不妨告诉你，亲爱的，我为了除掉你，我炼制了一个无上的宝物“圣锤”。我化作普通人模样，到处屠杀村民，让光明神殿以为是你黑暗圣子所做。",
        "\t[黛默琳,N481]\b[this,6,1]然后我再将这枚宝物送给了光明圣子，可惜，自大的光明圣子，竟然不肯使用这枚宝物。害得你逃脱，让我不得不出手。",
        "\t[墨奈,N477]\b[this,6,6]黛默琳，你实力不差，尽管自己动手，还要劳烦别人？",
        "\t[黛默琳,N481]\b[this,6,1]不不不，杀害你的，是光明圣子和光明圣女。我怎么会杀了你，让黑暗神殿厌恶我呢？",
        "\t[墨奈,N477]\b[this,6,6]你好深的算计！",
        "\t[黛默琳,N481]\b[this,6,1]至于我，则是痛失未婚夫的黑暗圣女，自然要为殿下报仇，拿下光明神殿。",
        "\t[黛默琳,N481]\b[this,6,1]殿下且安心地去吧！",
        {
            "type": "animate",
            "name": "zhuanhua",
            "loc": [
                6,
                6
            ]
        },
        "\t[墨奈,N477]\b[this,6,6]啊啊啊啊啊！黛默琳，你不得好死！！！",
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
            "opacity": 1
        },
        {
            "type": "changeFloor",
            "floorId": "SR30"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[莫析辉,hero]\b[hero]我也要趁着黑暗圣子虚弱，赶紧追上去才行……",
        {
            "type": "setBlock",
            "number": "N443",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "floorId": "SR30"
        },
        "\t[光明骑士,N440]\b[this,6,11]圣子殿下，大事不好了！",
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[莫析辉,hero]\b[hero]什么？！",
        "\t[光明骑士,N440]\b[this,6,11]莫析家族遭到了敌袭，与之联姻的安南家族、温明家族已经前往支援了。二长老和七长老也已经去了，但很快就没有了消息，属下们不敢做主，特来禀报圣子殿下。",
        "\t[莫析辉,hero]\b[hero]怎么会这样……看来我得去一趟莫析家族了……",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "floorId": "SR30",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    11,
                    6
                ]
            ],
            "floorId": "GM1",
            "remove": true
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
    [20030,20030,20030,20030,20030,20030,20030,20030,20030,20030,20030,20030,20030],
    [20030,  0,120005,  0,  0,  0,  0,  0,  0,120014,  0,120003,20030],
    [20030,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20030],
    [20030,  0,120003,  0,120013,  0,  0,  0,120013,  0,  0,  0,20030],
    [20030,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20030],
    [20030,120005,  0,  0,  0,  0,  0,  0,  0,  0,120003,  0,20030],
    [20030,  0,120013,  0,  0,  0,  0,  0,  0,120003,120003,  0,20030],
    [20030,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20030],
    [20030,  0,120003,  0,120003,  0,  0,  0,  0,  0,  0,  0,20030],
    [20030,  0,120003,  0,  0,  0,  0,  0,120003,120003,  0,  0,20030],
    [20030,  0,  0,120014,  0,  0,  0,  0,  0,  0,120003,  0,20030],
    [20030,  0,  0,  0,  0,  0,  0,  0,120014,  0,  0,  0,20030],
    [20030,20030,20030,20030,20030,20030,20030,20030,20030,20030,20030,20030,20030]
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