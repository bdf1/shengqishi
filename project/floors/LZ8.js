main.floors.LZ8=
{
    "floorId": "LZ8",
    "title": "龙族 8 ",
    "name": "龙族8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,11": [
            "\t[？？？,N1135]\b[this,2,10]站住！",
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[莫析辉,hero]\b[hero]咦？前辈何事？",
            "\t[？？？,N1135]\b[this,2,10]没你的事，我找他！",
            "\t[莫析辉,hero]\b[hero]……",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]莫名其妙，圣子殿下，咱们不管它，走吧！",
            "\t[？？？,N1135]\b[this,2,10]等一下！我是龙族族长，黄金圣龙大人别走啊！",
            "\t[莫析辉,hero]\b[hero]黄金圣龙？",
            "\t[龙族族长,N1135]\b[this,2,10]没错，这位小哥身负异禀，浑身散发的力量就是龙族最强的黄金圣龙的气息啊！",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]哦？我竟然是龙族。",
            "\t[龙族族长,N1135]\b[this,2,10]想必你早有感应吧！",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]是的，我来这里是感受到自己体内的力量隐隐被封印着，但是有一种莫名的指引，让我来到这里解开封印。",
            "\t[龙族族长,N1135]\b[this,2,10]那是自然。你来到这里，可以真正的解开你体内黄金圣龙的力量。跟我来吧！",
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
            "不久后……",
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[龙族族长,N1135]\b[this,2,10]尊敬的黄金圣龙大人，请您留在龙族，守护龙族吧！",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]不行，我要守护圣子殿下，才不留在这里！",
            "\t[龙族族长,N1135]\b[this,2,10]你！",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]我是绝不会留在这里的。",
            "\t[龙族族长,N1135]\b[this,2,10]怎么能这样呢？每个黄金圣龙都应该留在龙族的，为了龙族的昌盛。",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]但我对龙族毫无感觉，为什么要留在这里？",
            "\t[龙族族长,N1135]\b[this,2,10]……",
            {
                "type": "vibrate",
                "direction": "diagonal1",
                "time": 2000,
                "speed": 10,
                "power": 10
            },
            "\t[莫析辉,hero]\b[hero]怎么回事，这么大的动静！",
            "\t[龙族族长,N1135]\b[this,2,10]不好，有敌人入侵！",
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        10
                    ]
                ],
                "remove": true
            },
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]……",
            "\t[莫析辉,hero]\b[hero]龙族这么厉害，还会有敌人入侵？咱去看看？",
            "\t[${flag:shengqishi_name},N510]\b[this,1,11]好。",
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        11
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        11
                    ]
                ],
                "remove": true
            },
            "与圣骑士亲密度达到70，boss由圣骑士结局，否则自行解决。"
        ]
    },
    "changeFloor": {
        "0,1": {
            "floorId": "LZ7",
            "loc": [
                0,
                1
            ]
        },
        "0,11": {
            "floorId": "LZ9",
            "loc": [
                0,
                11
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [ 94,  0,344,140,688,  0,1131,  0, 81,  0,140,688,140],
    [140,  0,  0,823,  0,342,140,1029,140,824,140,688,140],
    [140,1029,140,140,140,140,140, 21,140,  0,140,823,140],
    [140,  0,703,140,346,688,140,688,140, 21,140, 81,140],
    [140,346,  0, 81,825, 21,140, 21,140,  0,1131,  0,140],
    [140,140,140,140,140,140,140,140,140,140,140,344,140],
    [140,  0,345,688,140,351,347,824,140,348,140,  0,140],
    [140,825,688,689,140,140,140,  0,140,344,140,823,140],
    [140, 81,140,140,342,343,  0,1132,140,1132,140,  0,140],
    [140,  0,1135,140,140,140,140, 82,140,  0,140,688,140],
    [ 92,513,  0,  0, 81,823,  0,617, 81,1029, 81,  0,140],
    [140,140,140,140,140,140,140,140,140,140,140,140,140]
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
        0,
        1
    ]
}