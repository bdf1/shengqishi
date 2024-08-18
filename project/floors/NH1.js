main.floors.NH1=
{
    "floorId": "NH1",
    "title": "南荒帝国 1 ",
    "name": "南荒帝国1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "grass",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            "\t[凌依,N574]\b[this]为了防止被光明神殿发觉，我们兵分多路前往南荒帝国。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "GM1",
            "loc": [
                6,
                12
            ]
        },
        "1,12": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,703, 29,785, 21,616,684, 20, 21, 21, 21, 21, 20],
    [ 20, 20, 20, 81, 20, 20, 20, 20, 20,615,784,343, 20],
    [ 20,684,  0,783,  0,683,  0,784,  0, 20, 81, 20, 20],
    [ 20,344, 20, 20, 20, 20, 20, 20, 81, 20, 29, 30, 20],
    [ 20, 21, 20,683,  0,788, 81,  0,783, 20,683, 22, 20],
    [ 20,  0, 20, 20, 20, 20, 20, 21,  0, 81,786,  0, 20],
    [ 20,783, 20,703, 20,  0,784,  0, 27, 20, 20, 20, 20],
    [ 20,  0, 20,785, 81, 28, 20, 20, 81,787, 21, 29, 20],
    [ 20,683, 20,703, 20,  0, 20, 29,785, 20, 20, 28, 20],
    [ 20,  0, 20, 20, 20, 81, 20, 20,684, 27, 20,683, 20],
    [ 20,784, 81,342,  0,783,  0,575, 20,615, 20,698, 20],
    [ 20, 93, 20, 20, 20, 20, 91, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "yuanye.mp3",
    "flyPoint": [
        6,
        12
    ],
    "bg2map": [

],
    "fg2map": [

]
}