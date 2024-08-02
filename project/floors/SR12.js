main.floors.SR12=
{
    "floorId": "SR12",
    "title": "深入 12 ",
    "name": "深入12",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "grass",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,11": [
            "\t[牧迟,N473]\b[this]圣子殿下。",
            "\t[莫析辉,hero]\b[hero]牧迟？有什么事吗？",
            "\t[牧迟,N473]\b[this]圣子殿下，圣女殿下前几天听您手下的人指路，结果进入了黑暗圣子的埋伏圈……",
            "\t[莫析辉,hero]\b[hero]呵呵，听我手下的人指路？她自己是没人探路了吗？竟然要听我手下的指路。牧迟，你是打算来指责我吗？",
            "\t[牧迟,N473]\b[this]圣子殿下，属下不敢。属下只是希望殿下能看在与圣女殿下共事的情份上，帮帮圣女殿下。",
            "\t[牧迟,N473]\b[this]而且，圣女殿下在您被抓之后，还找了几位长老前去救您呢。",
            {
                "type": "setBlock",
                "number": "N477",
                "loc": [
                    [
                        11,
                        9
                    ]
                ]
            },
            "\t[凌依,N477]\b[this,11,9]殿下，不要听他胡言乱语。我们殿下就是被你们手下的人乱指路，才遭到黑暗圣子的埋伏，还是我亲自找了几位长老才救出来的，怎么成为了你们圣女找的长老？",
            "\t[牧迟,N473]\b[this]好，不管是谁找的人救殿下，请殿下救救圣女殿下吧！",
            "\t[莫析辉,hero]\b[hero]……",
            "\t[凌依,N477]\b[this,11,9]哼，还不快滚，前翻害了圣子殿下，还想要再坑一次吗？",
            "\t[牧迟,N473]\b[this]凌依，你！好，你们不救，我死也要与圣女殿下一起！",
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        11
                    ]
                ],
                "remove": true
            },
            "\t[凌依,N477]\b[this,11,9]圣子殿下，你可不要心软啊。",
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[莫析辉,hero]\b[hero]我在想，是什么人假传我的命令，给蜜茜娅假消息的……",
            "\t[凌依,N477]\b[this,11,9]殿下，其实很多光明骑士认为上次光明圣女故意还您中了黑暗圣子的埋伏，所以他们也是故意给光明圣女假消息的……",
            "\t[莫析辉,hero]\b[hero]罢了，他们也是为了我，你跟他们说，下不为例……至于蜜西娅……算了，看在以往的情份上，我就救你一次。",
            "\t[凌依,N477]\b[this,11,9]殿下……",
            "\t[莫析辉,hero]\b[hero]好了，我意已决。",
            "\t[凌依,N477]\b[this,11,9]是！",
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        9
                    ]
                ],
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,0": {
            "floorId": "SR11",
            "loc": [
                11,
                0
            ]
        },
        "11,12": {
            "floorId": "SR13",
            "loc": [
                11,
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
    [152,152,152,152,152,152,152,152,152,152,152, 93,152],
    [152,152,152,152,152,152,152,152,152,152,152,  0,152],
    [152, 22,152,689,152,700,152,689,152, 22,152,732,152],
    [152, 81,152,689,152,700,152,689,152, 81,152,  0,152],
    [152, 81,152,689,152,700,152,689,152, 81,152,690,152],
    [152, 81,152, 81,152, 81,152, 81,152, 81,152,  0,152],
    [152,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,733,152],
    [152, 82,152, 82,152, 83,152, 82,152, 82,152,  0,152],
    [152, 21,152,691,152,415,152,691,152, 21,152, 21,152],
    [152, 21,152,690,152,415,152,690,152, 21,152,  0,152],
    [152, 21,152,691,152,415,152,691,152, 21,152,732,152],
    [152,152,152,152,152,152,152,152,152,152,152,476,152],
    [152,152,152,152,152,152,152,152,152,152,152, 93,152]
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
        11,
        0
    ]
}