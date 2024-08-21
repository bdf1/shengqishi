main.floors.BN3=
{
    "floorId": "BN3",
    "title": "北纳家族 3 ",
    "name": "北纳家族3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "X10003",
    "bgm": "ending.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "\t[卢轩,N578]\b[this]圣子殿下",
            "\t[莫析辉,hero]\b[hero]卢轩，你查到了什么消息吗？",
            "\t[卢轩,N578]\b[this]听说\r[red]\\c[30]在北纳4有一个密道。\\c[]\r[]",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "BN2",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
            "floorId": "BN4",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_BN3_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_BN3_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_BN3_6_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_BN3_6_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,2": {
            "0": {
                "condition": "flag:door_BN3_6_2==4",
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
                        "name": "flag:door_BN3_6_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10013,10013,10013,10013,10013,10013, 91,10013,10013,10013,10013,10013,10013],
    [10013,684,620,792,  0,  0,578,791,  0,684,  0,790,10013],
    [10013,10013,10013,10013,10013,10013, 85,10013,10013,10013,10013,1077,10013],
    [10013, 21,1098, 21,10013,794,  0,794,10013,684, 30,  0,10013],
    [10013,  0,791,  0,10013,794,  0,794,10013,348, 21,791,10013],
    [10013,10013, 81,10013,10013,10013, 82,10013,10013,10013,10013, 81,10013],
    [ 94,  0,790,  0, 21,  0,791,  0,684,  0,790,  0,10013],
    [10013, 81,10013,793,10013, 81,10013, 81,10013, 81,10013, 81,10013],
    [10013,790,10013,346,10013,790,10013,791,10013,791,10013,792,10013],
    [10013, 21,10013,349,10013,344,10013, 21,10013,344,10013,344,10013],
    [10013,684,10013,10013,10013,684,10013,348,10013,342,10013,343,10013],
    [10013,791,342,685,343,791,10013,684,792,702,10013,684,10013],
    [10013,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013,10013]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        0,
        6
    ],
    "bg2map": [

],
    "fg2map": [

]
}