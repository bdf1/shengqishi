main.floors.DL10=
{
    "floorId": "DL10",
    "title": "东凌帝国 10 ",
    "name": "东凌帝国10",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X20061",
    "bgm": "jw.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "up:4",
                "right:1",
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                2
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "down:2"
            ]
        },
        "\t[图毅,E702]\b[this,6,4]东凌图毅，恭迎大长老！恭迎圣子殿下！恭迎准圣子殿下！不知光明之神有何指示？",
        "\t[光明准圣子,N1342]\b[this,5,7]东凌皇帝图毅，东凌帝国属于光明神殿管辖，你不会以为东凌皇室已经足够抗衡光明神殿了吧",
        "\t[图毅,E702]\b[this,6,4]准圣子指责，图毅惶恐啊",
        "\t[大长老,N1143]\b[this,6,6]我就开门见山了，前些日子，二长老和七长老死在了莫析家族，而莫析家族是被安撒和东方溪所灭。",
        "\t[大长老,N1143]\b[this,6,6]光明圣子亲自去调查了一番，觉得莫析家族被灭，和东凌皇室脱不了关系！",
        "\t[图毅,E702]\b[this,6,4]不敢隐瞒大长老，莫析家族在东凌帝国实力首屈一指，即便是东凌皇室也是忌惮三分。",
        "\t[图毅,E702]\b[this,6,4]不过莫析家族这么庞大的家族，其族长莫析宙实力强大，当今世上有几个人能制服他",
        "\t[图毅,E702]\b[this,6,4]恐怕想要悄无声息地解决莫析宙，当今世上除了光明教皇陛下、黑暗教皇与大长老您，怕是没有人能做到啊",
        "\t[光明圣子,hero]\b[this,7,7]单打独斗，确实没几个人能悄无声息伤了我父亲",
        "\t[光明圣子,hero]\b[this,7,7]但怕只怕是群殴啊",
        "\t[光明圣子,hero]\b[this,7,7]大长老，请您明察，二长老和七长老的实力，光明神殿有目共睹，绝不是普普通通的几个人能杀害的",
        "\t[光明圣子,hero]\b[this,7,7]我只怕除了安撒和东方溪，东凌帝国还派出了别的高手。北寒帝国更是脱不了关系，说不定北纳……",
        "\t[大长老,N1143]\b[this,6,6]小圣子！不可胡乱揣测！",
        "\t[图毅,E702]\b[this,6,4]圣子殿下，我以图氏一族起誓，绝对没有对莫析家族、二长老、七长老下手！",
        "\t[光明准圣子,N1342]\b[this,5,7]我觉得也是，不过莫析家族被灭之时，皇帝陛下可曾派援兵？",
        "\t[图毅,E702]\b[this,6,4]这……",
        "\t[光明准圣子,N1342]\b[this,5,7]只怕是在隔岸观火吧",
        "\t[图毅,E702]\b[this,6,4]回准圣子殿下，我当时并未收到消息……",
        "\t[光明圣子,hero]\b[this,7,7]哼，你没有派出援兵就算了，怕只怕还给出手的人通风报信。东方溪可是你东凌皇室的大将！",
        "\t[图毅,E702]\b[this,6,4]回圣子殿下，东方溪确实去了……不过他是在莫析家族被灭之后，才去的。动手的，应当是北寒帝国的安撒……",
        "\t[光明圣子,hero]\b[this,7,7]安撒是北寒帝国最强的魔法师，与我父亲实力相差不大，凭他怎么能够悄无声息地杀害我父亲，定是东凌皇室在作祟",
        "\t[光明准圣子,N1342]\b[this,5,7]圣子弟弟，不要把所有错误怪到东凌皇室，咱们要先\r[red]收集证据\r[]",
        "\t[图毅,E702]\b[this,6,4]准圣子殿下说的是，请大长老、圣子殿下给予我两天时间，我一定找出证据",
        "\t[大长老,N1143]\b[this,6,6]好，就给你两天时间",
        "\t[图毅,E702]\b[this,6,4]我为几位准备了旅馆，请几位在东凌的旅馆先住上两天",
        {
            "type": "changeFloor",
            "floorId": "DL18",
            "loc": [
                6,
                4
            ],
            "direction": "down"
        },
        {
            "type": "setBlock",
            "number": "specialDoor",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "floorId": "DL20"
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    1
                ]
            ],
            "floorId": "DL1",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    1
                ]
            ],
            "floorId": "DL1",
            "remove": true
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flag:G===1)",
            "true": [],
            "false": [
                {
                    "type": "if",
                    "condition": "(item:I1217===1)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "flag:G",
                            "value": "1"
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    11
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "setBlock",
                            "number": "N1195",
                            "loc": [
                                [
                                    4,
                                    10
                                ]
                            ]
                        },
                        {
                            "type": "setBlock",
                            "number": "N1150",
                            "loc": [
                                [
                                    6,
                                    10
                                ]
                            ]
                        },
                        {
                            "type": "setBlock",
                            "number": "N1159",
                            "loc": [
                                [
                                    8,
                                    10
                                ]
                            ]
                        },
                        {
                            "type": "setBlock",
                            "number": "N1333",
                            "loc": [
                                [
                                    4,
                                    8
                                ]
                            ]
                        },
                        {
                            "type": "setBlock",
                            "number": "N1164",
                            "loc": [
                                [
                                    8,
                                    8
                                ]
                            ]
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                7,
                                7
                            ],
                            "time": 500
                        },
                        "\t[光明圣子,hero]\b[this,7,7]好你个图毅，竟然派人来刺杀我",
                        "\t[图毅,E702]\b[this,6,4]圣子殿下息怒！图毅不敢如此啊！",
                        "\t[图毅,E702]\b[this,6,4]殿下，我岂敢如此，您仔细想想，大长老的实力举世无双，我若是让你在东凌帝国出了事，我岂能活下去",
                        "\t[凌依,N1151]\b[this,8,10]图毅陛下说的一套一套的，不过，圣子殿下在东凌皇宫找了莫析家族的少族长套装，不知陛下怎么解释",
                        "\t[图毅,E702]\b[this,6,4]这……",
                        "\t[骑士队长,N1148]\b[this,6,10]你说你不敢伤害殿下，因为伤了他，你会死。",
                        "\t[骑士队长,N1148]\b[this,6,10]但假若你对二长老和七长老出手了，我们调查出来，你也会偿命",
                        "\t[骑士队长,N1148]\b[this,6,10]倒不如先杀一个光明圣子，赚够本才是。",
                        "\t[图毅,E702]\b[this,6,4]你！",
                        {
                            "type": "move",
                            "loc": [
                                6,
                                4
                            ],
                            "time": 500,
                            "keep": true,
                            "steps": [
                                "up:2"
                            ]
                        },
                        "\t[黛莫琳,N1161]\b[this,8,8]看来不必多说了，杀了他！咳咳（吐出一口血）",
                        "\t[光明圣子,hero]\b[this,7,7]黛莫琳姑娘，你怎么了",
                        "\t[黛莫琳,N1161]\b[this,8,8]我没事，可能受了些风寒",
                        "\t[光明圣子,hero]\b[this,7,7]既如此，凌依，你快送黛莫琳姑娘回去吧",
                        "\t[凌依,N1151]\b[this,8,10]是",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    8,
                                    8
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    8,
                                    10
                                ]
                            ],
                            "remove": true
                        },
                        "\t[光明圣子,hero]\b[this,7,7]图毅，你作恶多端，怪不得我啦！",
                        "\t[图毅,E702]\b[this,6,4]来人啊，护驾！",
                        "\t[大长老,N1143]雕虫小技！",
                        {
                            "type": "animate",
                            "name": "baozha2",
                            "loc": [
                                4,
                                4
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "baozha2",
                            "loc": [
                                4,
                                6
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "baozha2",
                            "loc": [
                                8,
                                4
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "baozha2",
                            "loc": [
                                8,
                                6
                            ],
                            "async": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    4,
                                    4
                                ]
                            ],
                            "remove": true,
                            "async": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    8,
                                    4
                                ]
                            ],
                            "remove": true,
                            "async": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    4,
                                    6
                                ]
                            ],
                            "remove": true,
                            "async": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    8,
                                    6
                                ]
                            ],
                            "remove": true,
                            "async": true
                        },
                        {
                            "type": "waitAsync"
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                6,
                                5
                            ],
                            "time": 500
                        },
                        "\t[光明圣子,hero]\b[this,6,5]图毅，受死吧！",
                        "\t[光明准圣子,N1342]\b[this,7,5]住手！",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
                                    7
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "setBlock",
                            "number": "E1350",
                            "loc": [
                                [
                                    6,
                                    3
                                ]
                            ]
                        },
                        "\t[光明圣子,hero]\b[this,6,5]葛尔丹，你想干什么！",
                        "\t[光明准圣子,N1342]\b[this,6,3]此事疑点颇多，我们不能随便杀了图毅，他是一国之君，杀了他，整个东凌会陷入混乱的",
                        "\t[光明圣子,hero]\b[this,6,5]他灭了莫析家族，杀了二长老和七长老，难道就不用付出代价吗",
                        "\t[光明准圣子,N1342]\b[this,6,3]不管怎么样，也不能让平民百姓受苦啊！",
                        "\t[光明准圣子,N1342]\b[this,6,3]不然这样，先把图毅囚禁起来",
                        "\t[光明圣子,hero]\b[this,6,5]不行！他今天必须死！",
                        "\t[光明准圣子,N1342]\b[this,6,3]大长老！",
                        "\t[大长老,N1143]\b[this,6,6]唉，葛尔丹，你退下吧",
                        "\t[光明准圣子,N1342]\b[this,6,3]不行！莫析辉，既然大长老也这么觉得，那你们从我尸体上踏过去吧！",
                        "\t[光明圣子,hero]\b[this,6,5]哼，圣女姐姐有光明权杖，准圣子哥哥有复制镜，我有光明宝典。",
                        "\t[光明圣子,hero]\b[this,6,5]不知道哪件宝物更强一点呢"
                    ],
                    "false": [
                        "请找到证据再来"
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "DL19",
            "loc": [
                6,
                0
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
    [50049,50049,50049,41871,50049,50067,50068,50069,50049,41870,50049,50049,50049],
    [50049,41155,50159,50049,50049,50075,50071,50077,50049,50049,50159,41155,50049],
    [50049,41163,50167,  0,  0,50167,  0,50167,  0,  0,50167,41163,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,50159,  0,  0,  0,  0,  0,  0,  0,  0,  0,50159,50049],
    [50049,50167,  0,  0,  0,  0,  0,  0,  0,  0,  0,50167,50049],
    [50049,20069,20069,20069,  0,  0,  0,  0,  0,20069,20069,20069,50049],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049],
    [50049,41153,50159,  0,  0,  0,  0,  0,  0,  0,50159,41153,50049],
    [50049,41161,50167,  0,  0,  0,  0,  0,  0,  0,50167,41161,50049],
    [50049,50049,50049,50049,50049,50049, 91,50049,50049,50049,50049,50049,50049]
],
    "bgmap": [
    [50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049,50049],
    [50049,50049,50049,50049,50049,50049,50076,50049,50049,50049,50049,50049,50049],
    [  0,  0,  0,  0,  0,  0,50079,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,40504,40505,40505,40505,40506,  0,  0,  0,  0],
    [  0,  0,  0,50078,40512,40513,40513,40513,40514,50078,  0,  0,  0],
    [  0,  0,  0,  0,40512,40513,40513,40513,40514,  0,  0,  0,  0],
    [  0,  0,  0,50078,40512,40513,40513,40513,40514,50078,  0,  0,  0],
    [  0,  0,  0,  0,40520,40521,40521,40521,40522,  0,  0,  0,  0],
    [  0,  0,  0,  0,20111,20111,20111,20111,20111,  0,  0,  0,  0],
    [  0,  0,  0,  0,20111,20111,20111,20111,20111,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50159,  0,50159,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}