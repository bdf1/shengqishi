main.floors.XY3=
{
    "floorId": "XY3",
    "title": "光明学院 3 ",
    "name": "光明学院3",
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
        "10,10": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "openShop",
                        "id": "shop3",
                        "open": true
                    }
                ],
                "false": [
                    "\t[莫析辉,hero]\b[hero]六长老好。",
                    "\t[司默缇,N653]\b[this]哟，是小圣子呀。",
                    "\t[莫析辉,hero]\b[hero]六长老，听说你也是光明神殿掌管财政经济收入的长老呢！",
                    "\t[司默缇,N653]\b[this]哈哈，小圣子，钱是没有多的给你，不过可以送你一颗九阶粉臻宝石。",
                    {
                        "type": "setValue",
                        "name": "item:I700",
                        "operator": "+=",
                        "value": "1"
                    },
                    "\t[莫析辉,hero]\b[hero]唉，六长老，你这就把我看扁了，我像是那种缺魔力值的人吗？",
                    "\t[司默缇,N653]\b[this]既是如此，那快快将九阶粉臻宝石还来，是老朽错看圣子殿下啦！",
                    "\t[莫析辉,hero]\b[hero]六长老此言差矣，哪有送出去的东西，还有再要回来的道理呀。不妥不妥。",
                    "\t[司默缇,N653]\b[this]呵，你这个臭小子！",
                    "\t[莫析辉,hero]\b[hero]嘿嘿，六长老，能让我看看你卖的什么东西吗？",
                    "\t[司默缇,N653]\b[this]给你看。",
                    {
                        "type": "openShop",
                        "id": "shop3",
                        "open": true
                    },
                    "\t[莫析辉,hero]\b[hero]都这么贵啊，我可是光明神殿的圣子唉，你怎么能敲诈我？",
                    "\t[司默缇,N653]\b[this]呵呵，我可不是安南奎和温明啸，一分钱都不会少！你不是光明神殿的圣子吗？不会吧，不会吧，缺这点钱？不会吧？",
                    "\t[莫析辉,hero]\b[hero]哼，好啦好啦，本少爷买就是了。本少爷不差钱。",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "true"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "XY2",
            "loc": [
                6,
                6
            ]
        },
        "12,1": {
            "floorId": "XY4",
            "loc": [
                12,
                1
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
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,602,696,710,227, 81,  0,725,  0,685,  0,219, 94],
    [  3,696,356,686,  0,  3,685,  3,  3,  3,  3,  3,  3],
    [  3,  3,  3,  3,  3,  3,  0, 81,220,  3, 21, 21,  3],
    [  3,685,610,  0,  0,725,  0,  3,  0,  3, 22, 21,  3],
    [  3,  3,  3,  3, 81,  3,219,  3,  0, 81,227,  0,  3],
    [  3,725, 82,  0,219,  3,  0,  3,685,  3,  3,  3,  3],
    [  3,  0,  3,346,350,  3, 21,  3,  0,  3,349,686,  3],
    [  3,685,  3,696,356,  3,  0,  3,  0, 81,225,607,  3],
    [  3,  0,  3,685,686,  3,224,  3,  3,  3,  3,  3,  3],
    [  3, 81,  3,  3,  3,  3,  0,219,220,  0,653,  0,  3],
    [  3,219,  0,685,  0,725,  0,  3,  3,601,  0,683,  3],
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