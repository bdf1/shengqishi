main.floors.DL7=
{
    "floorId": "DL7",
    "title": "东凌帝国 7 ",
    "name": "东凌帝国7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X20061",
    "bgm": "jw.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[希娜,N538]\b[this,6,8]滚开！",
        "\t[汪周,N468]\b[this,6,4]希娜公主，这可不行。你莫名其妙的出现在东凌皇宫，我可要喊人了。",
        "\t[莫析辉,hero]\b[hero]希娜？",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    9
                ]
            ]
        },
        "\t[希娜,N538]\b[this,6,8]圣子殿下，你来了。",
        "\t[莫析辉,hero]\b[hero]你来东凌帝国做什么？",
        "\t[希娜,N538]\b[this,6,8]我在北寒帝国扩大自己的势力，本来好好的，结果听到了莫析家族被灭的消息。",
        "\t[希娜,N538]\b[this,6,8]我想，灭掉莫析家族，很快就要对付你这个没有任何势力的光明圣子了。我再不过来，我与你联姻算是白费了。",
        "\t[莫析辉,hero]\b[hero]我没那么容易死。",
        "\t[希娜,N538]\b[this,6,8]哼，莫析家族屹立于东凌帝国也有数百年了吧，谁能知道它这么快倒下了？圣子殿下，清醒吧，教皇之位的争夺战已经开始了。",
        "\t[希娜,N538]\b[this,6,8]咱们利益一致，我帮你除掉北纳家族，你帮我坐上女皇的宝座。",
        "\t[莫析辉,hero]\b[hero]先解决东凌皇室的事情吧！骑士队长大人，你……",
        "\t[汪周,N468]\b[this,6,4]我可什么都没听到啊！嘿嘿！不过，我也不喜欢圣女一家独大……",
        "\t[莫析辉,hero]\b[hero]行吧，那就多谢骑士队长大人了。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "DL8",
            "loc": [
                6,
                0
            ]
        },
        "6,12": {
            "floorId": "DL6",
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
    [109,109,109,109,109,109, 91,109,109,109,109,109,109],
    [109,615,685,109,685,109,  0,109,  0, 21,701,604,109],
    [109,781,109,109, 28,109, 21,109,781,109,109,109,109],
    [109,  0,778,  0, 29,109,  0,109,  0,109, 27,685,109],
    [109, 81,109,109,109,109,468,109,684,109,782, 28,109],
    [109,  0,684,  0,779, 82,  0,109,  0,109, 81,109,109],
    [109, 81,109,109,109,109,  0, 81,779,  0,  0, 29,109],
    [109,  0,782, 27, 30,109,  0,109,109,109,109,109,109],
    [109,779,109,109,109,109,  0, 81,777,  0,109,685,109],
    [109, 21,109,684,  0,109,541,109,109,778,109, 28,109],
    [109,614,109,684,780, 81,684,109,  0, 29,109,614,109],
    [109,685,109,684,  0,109,  0,109,684,  0, 81,779,109],
    [109,109,109,109,109,109, 91,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}