main.floors.ZL7=
{
    "floorId": "ZL7",
    "title": "东凌走廊 7 ",
    "name": "东凌走廊7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 4,
    "defaultGround": "X10006",
    "bgm": "zhuangkuoshishi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,11": [
            "\t[凌依,N574]\b[this]圣子殿下。",
            "\t[莫析辉,hero]\b[hero]凌依，什么事？探查到了莫析家族的事情没有？",
            "\t[凌依,N574]\b[this]还没有，不过有一个人想找您。他说是您的老同学，智慧神殿的圣子涂歆。",
            "\t[莫析辉,hero]\b[hero]涂歆？也好，涂歆以往在学院也是最聪明的，找他问问也许有什么收获。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,6": [
            "\t[涂歆,N558]\b[this]莫析辉，好久不见啊。隐世学院一别，你可还好？",
            "\t[莫析辉,hero]\b[hero]涂歆同学明知故问，我家族的状况大概是不好的，你是为这个来的吗？",
            "\t[涂歆,N558]\b[this]我哪里知道你们那些事。只是我近来有一些好宝物，想卖给老同学罢了。",
            "\t[莫析辉,hero]\b[hero]“你们”？涂歆，看在同学一场的份上，能不能告诉我，你所知道的内情？",
            "\t[涂歆,N558]\b[this]跟我去智慧神殿吧，我细细谁给你听。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,12": {
            "floorId": "ZL6",
            "loc": [
                11,
                12
            ]
        },
        "6,0": {
            "floorId": "ZL8",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "ZH1",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_ZL7_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_ZL7_10_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,3": {
            "0": {
                "condition": "flag:door_ZL7_10_3==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_ZL7_10_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20336,20336,20336,20336,20336,20336, 91,20336,20336,20336,20336,20336,20336],
    [20336,371,20336,690,  0,762,  0,  0,20336,367,700,368,20336],
    [20336,372,20336, 81,20336,20336,365,365,20336, 21,  0, 21,20336],
    [20336,371,20336,763,365,20336,611,611,20336,20336, 85,20336,20336],
    [20336,766,20336,691,604,20336,762,762,20336,764,  0,764,20336],
    [20336,  0,20336,20336,20336,20336, 21,  0, 81,  0,  0,  0,20336],
    [ 94,560,  0,765,763,  0,  0,690,20336,20336,20336,20336,20336],
    [20336, 82,20336,20336,20336,20336,20336,762,  0,698,20336,610,20336],
    [20336,762,  0,698,  0,763,  0,  0, 21,  0,20336,610,20336],
    [20336,20336, 81,20336,20336,20336, 81,20336,20336,  0,20336,610,20336],
    [20336,  0,764,  0,20336,  0,762,  0,20336,763,20336,762,20336],
    [20336,690,  0,704,20336,690,  0,690,20336,  0,576,  0,20336],
    [20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336, 91,20336]
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
        12
    ]
}