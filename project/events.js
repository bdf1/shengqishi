var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "function",
				"function": "function(){\nif (core.hasEquip('I409')) { core.status.hero.mana += 1 }\nif (core.hasEquip('I410')) { core.status.hero.mana += 3 }\nif (core.hasEquip('I411')) { core.status.hero.mana += 5 }\nif (core.hasEquip('I412')) { core.status.hero.mana += 7 }\nif (core.hasEquip('I413')) { core.status.hero.mana += 9 }\nif (core.hasEquip('I595')) { core.status.hero.mana += 20 }\nif (core.hasEquip('I1115')) { core.status.hero.mana += 10 }\nif (core.hasEquip('I1116')) { core.status.hero.mana += 10 }\nif (core.hasItem('I722')) { core.status.hero.mana += Math.min(50, Math.sqrt((core.getEnemyInfo('', null, x, y).hp || 0) / 500)) }\nif (core.hasEquip('I723')) { core.status.hero.hp += core.status.hero.hpmax / 200 }\nif (core.hasItem('coin')) core.status.hero.money += 12;\nflags.lhjnb = (flags.lhjnb || 0) + (core.getEnemyInfo('', null, x, y).money || 0)\n}"
			}
		]
	}
}