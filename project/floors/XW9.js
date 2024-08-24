main.floors.XW9=
{
    "floorId": "XW9",
    "title": "西武帝国 9 ",
    "name": "西武帝国9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "autotile7",
    "bgm": "lfmg.mp3",
    "weather": [
        "rain",
        5
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "\t[莫析辉,hero]\b[hero]林霄，你还有什么事吗？",
            "\t[林霄,N485]\b[this]emmm，圣子殿下，这个西武帝国恐怕已经是黛默琳的了。",
            "\t[莫析辉,hero]\b[hero]什么！",
            "\t[林霄,N485]\b[this]其实，很久以前，他就投靠黑暗神殿了，只是一直在我们圣子殿下掌控之下……不过我们圣子后来……现在他应该是听从黛默琳的了……",
            "\t[莫析辉,hero]\b[hero]他这种也情有可原，只要他回归光明，我便放他一马吧！",
            "\t[林霄,N485]\b[this]自从我们圣子倒下后，他便搜刮了不少百姓的财物，还害死了不少百姓……",
            "\t[莫析辉,hero]\b[hero]哦？墨奈他不就是这种人么？之前村庄被杀死那么多人，他会心疼百姓？",
            "\t[林霄,N485]\b[this]圣子殿下想必是误会了。我们圣子殿下治理下，百姓安居乐业，虽然与光明神殿理念不同，也不至于杀村民百姓泄愤！",
            "\t[莫析辉,hero]\b[hero]那之前村庄被杀死的村民……黛默琳！？该死！这个贱人，杀了那么多村民，还嫁祸给墨奈！",
            "\t[林霄,N485]\b[this]栗柴湖和黛默琳是蛇鼠一窝，所以殿下不必留他性命的。",
            "\t[莫析辉,hero]\b[hero]嗯，我知道了。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "XW8",
            "loc": [
                6,
                1
            ]
        },
        "2,1": {
            "floorId": "XW10",
            "loc": [
                6,
                0
            ]
        },
        "10,1": {
            "floorId": "HA1",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_10_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:door_XW9_2_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,5": {
            "0": {
                "condition": "flag:door_XW9_2_5==4",
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
                        "name": "flag:door_XW9_2_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,5": {
            "0": {
                "condition": "flag:door_XW9_10_5==4",
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
                        "name": "flag:door_XW9_10_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,11": {
            "0": {
                "condition": "flag:door_XW9_10_11==2",
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
                        "name": "flag:door_XW9_10_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,11": {
            "0": {
                "condition": "flag:door_XW9_2_11==2",
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
                        "name": "flag:door_XW9_2_11",
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,  0, 91,  0,144,  0, 93,  0,144,  0, 91,  0,144],
    [144,688,  0,688,144,687,  0,687,144,688,  0,688,144],
    [144,144,755,144,144,144,1022,144,144,144,755,144,144],
    [144,688,  0,688,144,  0,488,  0,144,688,  0,688,144],
    [144,144, 85,144,144,851,144,851,144,144, 85,144,144],
    [144,737,  0,737,144,  0,144,  0,144,737,  0,737,144],
    [144,737,  0,737,144,347,144,346,144,737,  0,737,144],
    [144,144, 82,144,144, 21,144, 21,144,144, 82,144,144],
    [144,687,  0,687,144,  0,144,  0,144,687,  0,687,144],
    [144,687,  0,687,144,1024,  0,1024,144,687,  0,687,144],
    [144,144, 85,144,144,144,1021,144,144,144, 85,144,144],
    [144,1022,  0,1022,  0,  0,  0,  0,  0,1022,  0,1022,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        6,
        1
    ],
    "bg2map": [

],
    "fg2map": [

]
}