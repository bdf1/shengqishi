main.floors.MJ1=
{
    "floorId": "MJ1",
    "title": "魔界 1 ",
    "name": "魔界1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 512,
    "defaultGround": "ground",
    "bgm": "douguishen.mp3",
    "firstArrive": [
        "魔界剧情按照与圣骑士亲密度达到进行。（后面五层需要圣骑士亲密度达到100开启。）",
        "\t[莫析辉,hero]\b[hero]可恶啊，这个魔界怎么没有任何红黄蓝绿白宝石……",
        "\t[唐佳成,N510]\b[this,6,12]据说魔界的怪物都将所有的能量汲取了，如果想要从它们口中夺取能量，只能杀死它们。",
        "\t[唐佳成,N510]\b[this,6,12]不过殿下方向，我会一直守护殿下的。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    12
                ]
            ],
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,1": {
            "floorId": "MJ2",
            "loc": [
                12,
                0
            ]
        },
        "6,11": {
            "floorId": "YS10",
            "loc": [
                6,
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,688,688,688,  0, 81,1126,688, 81,  0, 22,  0, 94],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  0,1130,  0, 21,  4, 21,  4,  0,699,1127,  0,  4],
    [  4,699,  4,688,  0,  4,  0,  4,688,  0,  4,617,  4],
    [  4,  0,  4,  0,617,  4,1126,  4,  0,699,  4,  0,  4],
    [  4,  4,  4,  4,1030, 82,  0, 82,1126,  4,  4,  4,  4],
    [  4,  0,  4,  0,617,  4,688,  4,617,  0,  4,  0,  4],
    [  4,699,  4,688,  0,  4,  0,  4,  0,688,  4,699,  4],
    [  4,  0,1134,  0,1126,  4,1030,  4,1126,  0,1134,  0,  4],
    [  4,  4,  4,  4,  0,  0,  0,  0,  0,  4,  4,  4,  4],
    [  4,617,617,1026,  0,20821,20822,20823,1030, 21, 21, 21,  4],
    [  4,  4,  4,  4,  0,  0,513,  0,  0,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,20813,20814,20815,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        11
    ]
}