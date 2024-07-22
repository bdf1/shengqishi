main.floors.YS9=
{
    "floorId": "YS9",
    "title": "隐世学院 9 ",
    "name": "隐世学院9",
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
        {
            "type": "if",
            "condition": "(flag:shengqishi===1)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N472",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": {
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
                {
                    "type": "changeFloor",
                    "floorId": "YS10",
                    "loc": [
                        6,
                        12
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,0": {
            "floorId": "YS8",
            "loc": [
                1,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,3": [
            "\t[孟芸老师,magicMaster]\b[this,6,8]你们不错，都打败了我。不过你们的毕业任务还没完成，还需要完成毕业任务。",
            "\t[长倾,N506]\b[this,4,5]啊，还要完成毕业任务啊？",
            "\t[孟芸老师,magicMaster]\b[this,6,8]当然了，不完成毕业任务，可没法毕业哦。",
            "\t[孟芸老师,magicMaster]\b[this,6,8]卡鲁鲁，你的毕业任务是去呈鲜之路抓一条咸鱼，不要普通的咸鱼，要最咸的那条。",
            "\t[凯迪,N1072]\b[this,8,5]据说普通的咸鱼已经是十分乖戾，滑不溜秋了，那最咸的那条更是十分狡猾，卡鲁鲁这任务也太难了吧……",
            "\t[孟芸老师,magicMaster]\b[this,6,8]凯迪，矮人族的炼器很强大，你就打造一个桶子吧，要用盐铁打造的。"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140, 93,140,140,140,140,140,140,140,140,140,140,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140],
    [140,140,140,140,140,140, 83,140,140,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,140,140,140,506,  0,  0,  0,1072,140,140,140,140],
    [140,140,140,502,  0,  0,  0,  0,  0,1068,140,140,140],
    [140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,140],
    [140,140,  0,  0,  0,  0,247,  0,  0,  0,  0,140,140],
    [140,140,140,  0,  0,  0,  0,  0,  0,  0,140,140,140],
    [140,140,140,140,  0,  0,  0,  0,  0,140,140,140,140],
    [140,140,140,140,140,  0,  0,  0,140,140,140,140,140],
    [140,140,140,140,140,140, 93,140,140,140,140,140,140]
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
        1,
        0
    ]
}