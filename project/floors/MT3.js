main.floors.MT3=
{
    "floorId": "MT3",
    "title": "莫析家族3 ",
    "name": "莫析家族3",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 8,
    "defaultGround": "ground",
    "bgm": "21-30.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,6": [
            "\t[凌依,N582]\b[this]殿下……",
            "\t[莫析辉,hero]\b[hero]凌依，你受伤了？",
            "\t[凌依,N582]\b[this]殿下，是的，我刚刚与东方溪交过手了。",
            "\t[莫析辉,hero]\b[hero]怎么会这样……你调查了什么出了没有？",
            "\t[凌依,N582]\b[this]东方溪身上，有一枚光明玉佩，还有一把极其阴寒的利剑。我一时不慎，才遭到他的暗算……殿下，属下无能！",
            "\t[莫析辉,hero]\b[hero]无妨，你便回去休息吧！光明玉佩，这可是需要光明法术极其精纯的法师才能炼制，当今光明神殿，除了教皇爷爷、大长老、我，便只有蜜西娅和葛尔丹了……",
            "\t[莫析辉,hero]\b[hero]极其阴寒的剑，恐怕是五长老冷霜家族才能炼制的利剑吧！可恶的蜜西娅！",
            "\t[凌依,N582]\b[this]那属下先告退了！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "MT2",
            "loc": [
                0,
                6
            ]
        },
        "0,6": {
            "floorId": "MT0",
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
    [10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041],
    [10041,  0,768,  0,365,  0,774,  0, 21,  0,772,  0,10041],
    [10041,364,10041,10041,10041,10041,10041,10041,10041,10041,10041,691,10041],
    [10041,  0,10041,415,10041,373,10041,616,10041,367,10041,  0,10041],
    [10041,772,10041,415,10041,373,10041,364,10041,367,10041,774,10041],
    [10041, 82,10041,10041,10041,373,10041,10041,10041,10041,10041,1077,10041],
    [ 92,584,10041,691,10041,10041,10041, 23,10041, 22,10041,  0, 92],
    [10041,  0,10041,691,691,691,10041, 23,10041, 22,10041,  0,10041],
    [10041,773,10041,10041,10041,10041,10041,10041,10041,10041,10041,772,10041],
    [10041,  0,10041,368,368,10041,703,604,10041,370,10041,  0,10041],
    [10041,363,10041,10041,10041,10041,10041,10041,10041,10041,10041,365,10041],
    [10041,  0,768,  0, 21,  0,773,  0,691,  0,775,  0,10041],
    [10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041]
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