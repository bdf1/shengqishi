main.floors.ZL9=
{
    "floorId": "ZL9",
    "title": "东凌走廊 9 ",
    "name": "东凌走廊9",
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
    "firstArrive": [
        "\t[莫析辉,hero]\b[hero]远远的，已经看到了莫析家族所在在莫析北城。",
        "\t[莫析辉,hero]\b[hero]莫析家族是东凌帝国的战神家族，镇守在东凌帝国与北寒帝国交界处。战功赫赫，是光明神殿范围内二十八大家族之一，与东凌帝国的安南家族、温明家族交好，按理说不会出什么问题的……",
        "\t[莫析辉,hero]\b[hero]一路走来，看到的尽是北寒帝国的军队……看来我那岳父大人也是贪的很，要是莫析家族没事倒好，若是有事……",
        {
            "type": "if",
            "condition": "(flag:shengqishi>1)",
            "true": [
                "\t[${flag:shengqishi_name},N510]圣子殿下，奇怪了，东凌帝国怎么没有派军队来支援莫析家族，这里发生了战争，难道他们还不知道？",
                "\t[莫析辉,hero]\b[hero]你说的对，东凌皇室在这场战争中，扮演什么角色，还两说呢。我们且潜入其中，仔细找找线索。",
                "\t[${flag:shengqishi_name},N510]我预感，这里将会有一场大战……",
                "\t[莫析辉,hero]\b[hero]当然会有大战。父亲是接近圣阶的高手，想要占领莫析家族，至少得有一个大魔法师或者一个巅峰骑士，说不定两者皆有……"
            ],
            "false": [
                "\t[莫析辉,hero]\b[hero]更令人奇怪的是……东凌帝国居然没有派军队来支援镇守帝国边疆的莫析家族……东凌皇室啊，你到底在这其中扮演什么样的角色呢……"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,2": {
            "floorId": "ZL10",
            "loc": [
                6,
                12
            ]
        },
        "12,6": {
            "floorId": "ZL8",
            "loc": [
                12,
                6
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
    [ 16, 16, 16, 16, 16,20362,20363, 16, 16, 16, 16, 16, 16],
    [20336,20336,20336,20336, 16,20370,20371, 16,20336,20336,20336,20336,20336],
    [20336,691,691,20336, 16, 16, 91, 16,20336, 21, 21, 21,20336],
    [20336,371, 22,20336,20336,20336,  0,20336,20336, 21,764, 21,20336],
    [20336,766,  0,20336,  0,364,  0, 22,20336,20336, 82,20336,20336],
    [20336, 81,20336,20336,765,20336,691,  0,766, 81,  0,690,20336],
    [20336,  0, 81,  0, 81,20336,20336,20336,20336,20336,  0,  0, 92],
    [20336,764,20336,  0,  0,20336,603,603,603,20336,765,20336,20336],
    [20336,698,20336,764,764,20336,603,766,603,20336,  0,20336,20336],
    [20336,365,20336,  0, 21,20336,20336, 82,20336,20336,365,20336,20336],
    [20336,364,20336,690,  0,765,  0,690, 81,764,  0,20336,20336],
    [20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336],
    [20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336,20336]
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
        12,
        6
    ]
}