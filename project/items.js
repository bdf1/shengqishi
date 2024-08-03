var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true
	},
	"redGem": {
		"cls": "items",
		"name": "红宝石",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"blueGem": {
		"cls": "items",
		"name": "蓝宝石",
		"text": "，防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"greenGem": {
		"cls": "items",
		"name": "绿宝石",
		"text": "，护盾+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowGem": {
		"cls": "items",
		"name": "黄宝石",
		"text": "全属性+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem\ncore.status.hero.def += core.values.blueGem\ncore.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"redPotion": {
		"cls": "items",
		"name": "红血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 0
			}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "items",
		"name": "铁剑",
		"text": "一把很普通的铁剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 10
			}
		},
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": "，攻击+10"
	},
	"sword2": {
		"cls": "items",
		"name": "银剑",
		"text": "一把很普通的银剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 20
			}
		},
		"itemEffect": "core.status.hero.atk += 20",
		"itemEffectTip": "，攻击+20"
	},
	"sword3": {
		"cls": "items",
		"name": "骑士剑",
		"text": "一把很普通的骑士剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 40
			}
		},
		"itemEffect": "core.status.hero.atk += 40",
		"itemEffectTip": "，攻击+40"
	},
	"sword4": {
		"cls": "items",
		"name": "圣剑",
		"text": "一把很普通的圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 80
			}
		},
		"itemEffect": "core.status.hero.atk += 80",
		"itemEffectTip": "，攻击+80"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 160
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 0
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"shield1": {
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 10
			}
		},
		"itemEffect": "core.status.hero.def += 10",
		"itemEffectTip": "，防御+10"
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "一个很普通的银盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 20
			}
		},
		"itemEffect": "core.status.hero.def += 20",
		"itemEffectTip": "，防御+20"
	},
	"shield3": {
		"cls": "items",
		"name": "骑士盾",
		"text": "一个很普通的骑士盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 40
			}
		},
		"itemEffect": "core.status.hero.def += 40",
		"itemEffectTip": "，防御+40"
	},
	"shield4": {
		"cls": "items",
		"name": "圣盾",
		"text": "一个很普通的圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 80
			}
		},
		"itemEffect": "core.status.hero.def += 80",
		"itemEffectTip": "，防御+80"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 100,
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100"
	},
	"superPotion": {
		"cls": "items",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "生命值翻倍"
	},
	"book": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
	},
	"coin": {
		"cls": "constants",
		"name": "幸运金币",
		"text": "持有时打败怪物可得额外获得3枚金币"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"dagger": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"amulet": {
		"cls": "constants",
		"name": "护符",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门"
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.triggerDebuff('remove', 'weak');",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "constants",
		"name": "圣锤",
		"text": "剧情道具，能够直接击杀黑暗圣子"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('lifeWand', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "(flag:input<=item:lifeWand)",
				"true": [
					{
						"type": "setValue",
						"name": "item:lifeWand",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*100"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "光明裁决",
		"text": "消耗80点魔力值，将光明的力量聚集，对敌人造成两倍伤害",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 80; // 技能的需求\n\tvar skillName = '光明裁决'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "items",
		"name": "新物品"
	},
	"pack": {
		"cls": "items",
		"name": "钱袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500"
	},
	"I331": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I332": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I333": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I334": {
		"cls": "constants",
		"name": "光明祝福",
		"text": "消耗50点魔力值，战斗中回复自身防御力*0.5+护盾值*0.2+50点的生命值",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 3; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 50; // 技能的需求\n\tvar skillName = '光明祝福'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"I335": {
		"cls": "constants",
		"name": "光明绽放",
		"text": "消耗120点魔力值，用光明魔法攻击敌人，无视敌人防御力",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 2; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 120; // 技能的需求\n\tvar skillName = '光明绽放'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"I336": {
		"cls": "constants",
		"name": "光明守护",
		"text": "消耗60点魔力值，使自己的护盾效果提升2倍且防御力的25%对魔攻生效，但不能为负伤",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 4; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 60; // 技能的需求\n\tvar skillName = '光明守护'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"I337": {
		"cls": "equips",
		"name": "白色光明权杖",
		"canUseItemEffect": "true",
		"text": "攻击力+3",
		"equip": {
			"type": "法杖",
			"value": {
				"atk": 3
			},
			"percentage": {}
		}
	},
	"I338": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I339": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I340": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I341": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I342": {
		"cls": "items",
		"name": "二阶红宝石",
		"text": "攻击+${core.values.redGem*2}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 2",
		"canUseItemEffect": "true"
	},
	"I343": {
		"cls": "items",
		"name": "二阶蓝宝石",
		"text": "，防御+${core.values.blueGem*2}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 2",
		"canUseItemEffect": "true"
	},
	"I344": {
		"cls": "items",
		"name": "二阶绿宝石",
		"text": "，护盾+${core.values.greenGem*2}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 2",
		"canUseItemEffect": "true"
	},
	"I345": {
		"cls": "items",
		"name": "二阶黄宝石",
		"text": "全属性+${core.values.redGem*2}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 2\ncore.status.hero.def += core.values.blueGem * 2\ncore.status.hero.mdef += core.values.greenGem * 2",
		"canUseItemEffect": "true"
	},
	"I346": {
		"cls": "items",
		"name": "三阶红宝石",
		"text": "攻击+${core.values.redGem*4}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 4",
		"canUseItemEffect": "true"
	},
	"I347": {
		"cls": "items",
		"name": "三阶蓝宝石",
		"text": "，防御+${core.values.blueGem*4}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 4",
		"canUseItemEffect": "true"
	},
	"I348": {
		"cls": "items",
		"name": "三阶绿宝石",
		"text": "，护盾+${core.values.greenGem*4}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 4",
		"canUseItemEffect": "true"
	},
	"I349": {
		"cls": "items",
		"name": "三阶黄宝石",
		"text": "全属性+${core.values.redGem*4}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 4\ncore.status.hero.def += core.values.blueGem * 4\ncore.status.hero.mdef += core.values.greenGem * 4",
		"canUseItemEffect": "true"
	},
	"I350": {
		"cls": "items",
		"name": "四阶红宝石",
		"text": "攻击+${core.values.redGem*8}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 8",
		"canUseItemEffect": "true"
	},
	"I351": {
		"cls": "items",
		"name": "四阶蓝宝石",
		"text": "，防御+${core.values.blueGem*8}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 8",
		"canUseItemEffect": "true"
	},
	"I352": {
		"cls": "items",
		"name": "四阶绿宝石",
		"text": "，护盾+${core.values.greenGem*8}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 8",
		"canUseItemEffect": "true"
	},
	"I353": {
		"cls": "items",
		"name": "四阶黄宝石",
		"text": "全属性+${core.values.redGem*8}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 8\ncore.status.hero.def += core.values.blueGem * 8\ncore.status.hero.mdef += core.values.greenGem * 8",
		"canUseItemEffect": "true"
	},
	"I354": {
		"cls": "items",
		"name": "五阶红宝石",
		"text": "攻击+${core.values.redGem*16}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*16}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 16",
		"canUseItemEffect": "true"
	},
	"I355": {
		"cls": "items",
		"name": "五阶蓝宝石",
		"text": "，防御+${core.values.blueGem*16}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*16}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 16",
		"canUseItemEffect": "true"
	},
	"I356": {
		"cls": "items",
		"name": "五阶绿宝石",
		"text": "，护盾+${core.values.greenGem*16}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*16}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 16",
		"canUseItemEffect": "true"
	},
	"I357": {
		"cls": "items",
		"name": "五阶黄宝石",
		"text": "全属性+${core.values.redGem*16}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 16\ncore.status.hero.def += core.values.blueGem * 16\ncore.status.hero.mdef += core.values.greenGem * 16",
		"canUseItemEffect": "true"
	},
	"I358": {
		"cls": "items",
		"name": "六阶红宝石",
		"text": "攻击+${core.values.redGem*32}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*32}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 32",
		"canUseItemEffect": "true"
	},
	"I360": {
		"cls": "items",
		"name": "六阶蓝宝石",
		"text": "，防御+${core.values.blueGem*32}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*32}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 32",
		"canUseItemEffect": "true"
	},
	"I361": {
		"cls": "items",
		"name": "六阶绿宝石",
		"text": "，护盾+${core.values.greenGem*32}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*32}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 32",
		"canUseItemEffect": "true"
	},
	"I362": {
		"cls": "items",
		"name": "六阶黄宝石",
		"text": "全属性+${core.values.redGem*32}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 32\ncore.status.hero.def += core.values.blueGem * 32\ncore.status.hero.mdef += core.values.greenGem * 32",
		"canUseItemEffect": "true"
	},
	"I363": {
		"cls": "items",
		"name": "七阶红宝石",
		"text": "攻击+${core.values.redGem*64}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*64}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 64",
		"canUseItemEffect": "true"
	},
	"I364": {
		"cls": "items",
		"name": "七阶蓝宝石",
		"text": "，防御+${core.values.blueGem*64}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*64}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 64",
		"canUseItemEffect": "true"
	},
	"I365": {
		"cls": "items",
		"name": "七阶绿宝石",
		"text": "，护盾+${core.values.greenGem*64}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*64}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 64",
		"canUseItemEffect": "true"
	},
	"I366": {
		"cls": "items",
		"name": "七阶黄宝石",
		"text": "全属性+${core.values.redGem*64}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 64\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 64\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 64\ncore.status.hero.def += core.values.blueGem * 64\ncore.status.hero.mdef += core.values.greenGem * 64",
		"canUseItemEffect": "true"
	},
	"I367": {
		"cls": "items",
		"name": "八阶红宝石",
		"text": "攻击+${core.values.redGem*128}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*128}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 128",
		"canUseItemEffect": "true"
	},
	"I368": {
		"cls": "items",
		"name": "八阶蓝宝石",
		"text": "，防御+${core.values.blueGem*128}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*128}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 128",
		"canUseItemEffect": "true"
	},
	"I369": {
		"cls": "items",
		"name": "八阶绿宝石",
		"text": "，护盾+${core.values.greenGem*128}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*128}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 128",
		"canUseItemEffect": "true"
	},
	"I370": {
		"cls": "items",
		"name": "八阶黄宝石",
		"text": "全属性+${core.values.redGem*128}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 128\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 128\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 128\ncore.status.hero.def += core.values.blueGem * 128\ncore.status.hero.mdef += core.values.greenGem * 128",
		"canUseItemEffect": "true"
	},
	"I371": {
		"cls": "items",
		"name": "九阶红宝石",
		"text": "攻击+${core.values.redGem*256}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*256}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 256",
		"canUseItemEffect": "true"
	},
	"I372": {
		"cls": "items",
		"name": "九阶蓝宝石",
		"text": "，防御+${core.values.blueGem*256}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*256}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem * 256",
		"canUseItemEffect": "true"
	},
	"I373": {
		"cls": "items",
		"name": "九阶绿宝石",
		"text": "，护盾+${core.values.greenGem*256}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*256}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 256",
		"canUseItemEffect": "true"
	},
	"I374": {
		"cls": "items",
		"name": "九阶黄宝石",
		"text": "全属性+${core.values.redGem*256}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 256\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 256\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "全属性提升",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * 256\ncore.status.hero.def += core.values.blueGem * 256\ncore.status.hero.mdef += core.values.greenGem * 256",
		"canUseItemEffect": "true"
	},
	"I375": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I376": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I377": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I378": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I379": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I380": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I381": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I382": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I383": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I384": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I385": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I386": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I387": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I388": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I389": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I390": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I391": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I392": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I393": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I394": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I395": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I396": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I397": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I398": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I399": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I400": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I401": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I402": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I403": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I404": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I405": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I406": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I407": {
		"cls": "tools",
		"name": "强力炸弹",
		"canUseItemEffect": "true",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar bombXYList = []; // 炸掉的怪物xy坐标列表\n\tvar expSum = 0;\n\tvar coinSum = 0;\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\t// \t\tvar nx = block.x;\n\t\t// \t\tvar ny = block.y;\n\t\tvar enemyCanBomb = false;\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) {} else {\n\t\t\tvar enemy = core.material.enemys[block.event.id];\n\t\t\tvar enemyCanBomb = enemy && !enemy.notBomb;\n\t\t\tif (enemyCanBomb) {\n\t\t\t\tbombList.push(index);\n\t\t\t\texpSum += enemy.exp;\n\t\t\t\tcoinSum += enemy.money;\n\t\t\t\tbombXYList.push(block)\n\t\t\t}\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(bombList);\n\tcore.status.hero.exp += expSum;\n\tcore.status.hero.money += coinSum;\n\tcore.playSound('bomb.mp3');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\tcore.drawMap();\n\tfor (var index in bombXYList) {\n\t\tcore.drawAnimate(\"zone\", bombXYList[index].x, bombXYList[index].y, false)\n\t}\n})();",
		"text": "使用后炸掉整层的怪物"
	},
	"I408": {
		"cls": "equips",
		"name": "光明法杖",
		"canUseItemEffect": "true",
		"text": "攻击力+8",
		"equip": {
			"type": "法杖",
			"value": {
				"atk": 8
			},
			"percentage": {}
		}
	},
	"I409": {
		"cls": "equips",
		"name": "赤色光明法杖",
		"canUseItemEffect": "true",
		"text": "攻击力+8，击败怪物后，获得1点魔力值",
		"equip": {
			"type": "法杖",
			"value": {
				"atk": 8
			},
			"percentage": {}
		}
	},
	"I410": {
		"cls": "equips",
		"name": "湛蓝光明法杖",
		"canUseItemEffect": "true",
		"text": "攻击力+30，击败怪物后，获得3点魔力值",
		"equip": {
			"type": "法杖",
			"value": {
				"atk": 30
			},
			"percentage": {}
		}
	},
	"I411": {
		"cls": "equips",
		"name": "荧粉光明法杖",
		"canUseItemEffect": "true",
		"text": "攻击力+100，击败怪物后，获得5点魔力值",
		"equip": {
			"type": "法杖",
			"value": {
				"atk": 100
			},
			"percentage": {}
		}
	},
	"I412": {
		"cls": "equips",
		"name": "赤血光明法杖",
		"canUseItemEffect": "true",
		"text": "攻击力+1000，击败怪物后，获得7点魔力值",
		"equip": {
			"type": "法杖",
			"value": {
				"atk": 1000
			},
			"percentage": {}
		}
	},
	"I413": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I414": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I415": {
		"cls": "tools",
		"name": "琼浆",
		"canUseItemEffect": "true",
		"text": "喝下后回复50%生命值",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "poison.mp3"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:hpmax*0.5)"
			}
		]
	},
	"I416": {
		"cls": "tools",
		"name": "玉露",
		"canUseItemEffect": "true",
		"text": "喝下后恢复100%生命值",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "poison.mp3"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:hpmax)"
			}
		]
	},
	"I417": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I418": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I419": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I420": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I421": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I422": {
		"cls": "tools",
		"name": "黑暗之钥",
		"canUseItemEffect": "true",
		"text": "可以打开一扇黑暗之门"
	},
	"I423": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I424": {
		"cls": "items",
		"name": "黄钥匙串",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('yellowKey', 3)"
	},
	"I425": {
		"cls": "items",
		"name": "蓝钥匙串",
		"canUseItemEffect": "true",
		"itemEffectTip": null,
		"itemEffect": "core.addItem('blueKey', 3)"
	},
	"I426": {
		"cls": "items",
		"name": "红钥匙串",
		"canUseItemEffect": "true",
		"itemEffectTip": null,
		"itemEffect": "core.addItem('redKey', 3)"
	},
	"I427": {
		"cls": "items",
		"name": "绿钥匙串",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('greenKey', 3);"
	},
	"I595": {
		"cls": "equips",
		"name": "七彩光明法杖",
		"canUseItemEffect": "true",
		"text": "全属性提升10%，击败怪物后获得10点魔力值",
		"equip": {
			"type": "法杖",
			"value": {},
			"percentage": {
				"atk": 10,
				"def": 10,
				"mdef": 10,
				"hpmax": 10
			}
		}
	},
	"I596": {
		"cls": "tools",
		"name": "瞬移飞行器",
		"canUseItemEffect": "true",
		"text": "可以飞向当前楼层任意的位置",
		"useItemEffect": "core.insertAction([\n\t{ \"type\": \"comment\", \"text\": \"全地图选择某一个点\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:x1\", \"value\": \"0\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"0\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:y1\", \"value\": \"0\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"0\" },\n\t{ \"type\": \"comment\", \"text\": \"flag:1,flag:2为选中的地图xy坐标\" },\n\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\",0)*32,core.getFlag(\\\"y\\\",0)*32,32,32,fillstyle);\\n}\" },\n\t{ \"type\": \"comment\", \"text\": \"显示一个32*32的红色块,这里是画在色调层上，可以自行换画布\" },\n\t{ \"type\": \"comment\", \"text\": \"这里也可以用图标类图片\" },\n\t{\n\t\t\"type\": \"while\",\n\t\t\"condition\": \"1\",\n\t\t\"data\": [\n\t\t\t{ \"type\": \"wait\" },\n\t\t\t{\n\t\t\t\t\"type\": \"if\",\n\t\t\t\t\"condition\": \"flag:type==0\",\n\t\t\t\t\"true\": [{\n\t\t\t\t\t\"type\": \"switch\",\n\t\t\t\t\t\"condition\": \"flag:keycode\",\n\t\t\t\t\t\"caseList\": [{\n\t\t\t\t\t\t\t\"case\": \"27\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下esc时，取消选择\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"exit\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"13\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下enter键时，结束选择，选中坐标代入flag:x与flag:y进入下一步\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"break\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"32\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下空格时，结束选择，选中坐标代入flag:x与flag:y进入下一步\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"break\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"38\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按上时，移动颜色块，flag:y-1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y-1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:y<0\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y+1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"40\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下时，移动颜色块，flag:y+1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y+1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:y>12\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y-1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"37\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按左时，移动颜色块，flag:x-1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x-1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:x<0\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x+1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"39\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按右时，移动颜色块，flag:x+1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x+1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:x>12\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x-1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t}, ],\n\t\t\t\t\"false\": [\n\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"如果是鼠标操作，坐标直接代入flag:x,flag:y\" },\n\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": \"flag:x==flag:x1&&flag:y==flag:y1\",\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"如果点中的点与之前选中的点一样，结束选择,结果为flag:x,flag:y\" },\n\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t{ \"type\": \"break\" },\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": \"flag:x==3&&flag:y==4\",\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"这里也可以设定，当你点中地图上的某点时执行什么事件\" },\n\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"比如点中3,4时执行什么，放这下边\" },\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t},\n\t\t\t{ \"type\": \"comment\", \"text\": \"只要选择没有结束，记录上一次选中的位置以给鼠标使用\" },\n\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x1\", \"value\": \"flag:x\" },\n\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y1\", \"value\": \"flag:y\" },\n\t\t],\n\t},\n\t{ \"type\": \"comment\", \"text\": \"选择结束后，选中的点的坐标已代入flag：x与flag：y\" },\n\t{ \"type\": \"comment\", \"text\": \"例如要使主角移动到选中的点时，可以执行下面事件\" },\n\t{ \"type\": \"playSound\", \"name\": \"sanashunjianyidong.mp3\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:6\", \"value\": \"flag:6+1\" },\n\t{ \"type\": \"changePos\", \"loc\": [\"flag:x\", \"flag:y\"] },\n\t{ \"type\": \"exit\" },\n])"
	},
	"I597": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I594": {
		"cls": "constants",
		"name": "系统设置ex",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "\t[选择打开自动拾取或者宝石血瓶详细信息]",
				"choices": [
					{
						"text": "宝石血瓶详细信息",
						"color": [
							254,
							17,
							54,
							1
						],
						"action": [
							{
								"type": "choices",
								"text": "开启宝石血瓶详细信息",
								"choices": [
									{
										"text": "打开",
										"color": [
											0,
											61,
											255,
											1
										],
										"action": [
											{
												"type": "setValue",
												"name": "flag:itemDetail",
												"value": "true"
											}
										]
									},
									{
										"text": "关闭",
										"color": [
											13,
											248,
											17,
											1
										],
										"action": [
											{
												"type": "setValue",
												"name": "flag:itemDetail",
												"value": "false"
											}
										]
									}
								]
							}
						]
					},
					{
						"text": "自动拾取",
						"color": [
							7,
							245,
							131,
							1
						],
						"action": [
							{
								"type": "choices",
								"text": "自动拾取",
								"choices": [
									{
										"text": "打开自动拾取",
										"color": [
											237,
											3,
											120,
											1
										],
										"action": [
											"自动拾取已打开!",
											{
												"type": "setValue",
												"name": "flag:shiqu",
												"value": "true"
											}
										]
									},
									{
										"text": "关闭自动拾取",
										"color": [
											233,
											233,
											23,
											1
										],
										"action": [
											"自动拾取已关闭!",
											{
												"type": "setValue",
												"name": "flag:shiqu",
												"value": "false"
											}
										]
									}
								]
							}
						]
					},
					{
						"text": "自动计算最优装备",
						"color": [
							0,
							255,
							255,
							1
						],
						"action": [
							{
								"type": "choices",
								"text": "自动计算最优装备(需保存套装)",
								"choices": [
									{
										"text": "打开自动计算最优装备",
										"color": [
											237,
											3,
											120,
											1
										],
										"action": [
											"自动计算最优装备已打开!",
											{
												"type": "setValue",
												"name": "flag:bestEquip",
												"value": "true"
											}
										]
									},
									{
										"text": "关闭自动计算最优装备",
										"color": [
											233,
											233,
											23,
											1
										],
										"action": [
											"自动计算最优装备已关闭!",
											{
												"type": "setValue",
												"name": "flag:bestEquip",
												"value": "false"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		],
		"text": "进行系统设置"
	},
	"I359": {
		"cls": "items",
		"name": "一阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+1",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1"
							}
						]
					},
					{
						"text": "防御+1",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "1"
							}
						]
					},
					{
						"text": "生命上限+50",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "50"
							}
						]
					},
					{
						"text": "生命+1%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.01)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I598": {
		"cls": "items",
		"name": "二阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+2",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "2"
							}
						]
					},
					{
						"text": "防御+2",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2"
							}
						]
					},
					{
						"text": "生命上限+100",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "100"
							}
						]
					},
					{
						"text": "生命+2%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.02)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I599": {
		"cls": "items",
		"name": "三阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+4",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "4"
							}
						]
					},
					{
						"text": "防御+4",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "4"
							}
						]
					},
					{
						"text": "生命上限+200",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "200"
							}
						]
					},
					{
						"text": "生命+4%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.04)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I600": {
		"cls": "items",
		"name": "四阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+8",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "8"
							}
						]
					},
					{
						"text": "防御+8",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "8"
							}
						]
					},
					{
						"text": "生命上限+400",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "400"
							}
						]
					},
					{
						"text": "生命+8%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.08)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I601": {
		"cls": "items",
		"name": "五阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+16",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "16"
							}
						]
					},
					{
						"text": "防御+16",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "16"
							}
						]
					},
					{
						"text": "生命上限+800",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "800"
							}
						]
					},
					{
						"text": "生命+16%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.16)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I602": {
		"cls": "items",
		"name": "六阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+32",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "32"
							}
						]
					},
					{
						"text": "防御+32",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "32"
							}
						]
					},
					{
						"text": "生命上限+1600",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "1600"
							}
						]
					},
					{
						"text": "生命+32%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.32)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I603": {
		"cls": "items",
		"name": "七阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+64",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "64"
							}
						]
					},
					{
						"text": "防御+64",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "64"
							}
						]
					},
					{
						"text": "生命上限+3200",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "3200"
							}
						]
					},
					{
						"text": "生命+64%",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax*0.64)"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I604": {
		"cls": "items",
		"name": "八阶白宝石",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+100",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "100"
							}
						]
					},
					{
						"text": "防御+100",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "100"
							}
						]
					},
					{
						"text": "生命上限+5000",
						"action": [
							{
								"type": "setValue",
								"name": "status:hpmax",
								"operator": "+=",
								"value": "5000"
							}
						]
					},
					{
						"text": "生命+100%，魔力值+1000",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:hpmax)"
							},
							{
								"type": "setValue",
								"name": "status:mana",
								"operator": "+=",
								"value": "1000"
							}
						]
					}
				]
			}
		],
		"text": "进行加点"
	},
	"I605": {
		"cls": "items",
		"name": "一阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 50;",
		"itemEffectTip": "生命上限提升50点"
	},
	"I606": {
		"cls": "items",
		"name": "二阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 100;",
		"itemEffectTip": "生命上限提升100点"
	},
	"I607": {
		"cls": "items",
		"name": "三阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 200;",
		"itemEffectTip": "生命上限提升200点"
	},
	"I608": {
		"cls": "items",
		"name": "四阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 400;",
		"itemEffectTip": "生命上限提升400点"
	},
	"I609": {
		"cls": "items",
		"name": "五阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 800;",
		"itemEffectTip": "生命上限提升800点"
	},
	"I610": {
		"cls": "items",
		"name": "六阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 1600;",
		"itemEffectTip": "生命上限提升1600点"
	},
	"I611": {
		"cls": "items",
		"name": "七阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 3200;",
		"itemEffectTip": "生命上限提升3200点"
	},
	"I612": {
		"cls": "items",
		"name": "八阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 6400;",
		"itemEffectTip": "生命上限提升6400点"
	},
	"I613": {
		"cls": "items",
		"name": "九阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 10000;",
		"itemEffectTip": "生命上限提升10000点"
	},
	"I614": {
		"cls": "items",
		"name": "十阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 20000;",
		"itemEffectTip": "生命上限提升20000点"
	},
	"I615": {
		"cls": "items",
		"name": "十一阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 40000;",
		"itemEffectTip": "生命上限提升40000点"
	},
	"I616": {
		"cls": "items",
		"name": "十二阶血红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hpmax += 50000;",
		"itemEffectTip": "生命上限提升50000点"
	},
	"I617": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I618": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I619": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I620": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I621": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I622": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I623": {
		"cls": "constants",
		"name": "初阶光明宝典",
		"canUseItemEffect": "true",
		"text": "使用后，消耗当前50魔力值，恢复100点生命值\n被动：新手保护（当攻防和小于50时，额外恢复100点生命值）",
		"useItemEvent": [
			{
				"type": "if",
				"condition": "(((status:atk)+(status:def))<=50)",
				"true": [
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "200"
					},
					{
						"type": "setValue",
						"name": "status:mana",
						"operator": "-=",
						"value": "50"
					}
				],
				"false": [
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "100"
					},
					{
						"type": "setValue",
						"name": "status:mana",
						"operator": "-=",
						"value": "50"
					}
				]
			}
		]
	},
	"I624": {
		"cls": "constants",
		"name": "中阶光明宝典",
		"canUseItemEffect": "true",
		"text": "使用后，消耗当前50%魔力值，恢复自身当前两倍魔力值的生命值",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mana*2)"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "(status:mana*0.5)"
			}
		]
	},
	"I625": {
		"cls": "constants",
		"name": "高阶光明宝典",
		"canUseItemEffect": "true",
		"text": "使用后，消耗当前100%魔力值，恢复自身当前五倍魔力值的生命值",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mana*5)"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "(status:mana)"
			}
		]
	},
	"I626": {
		"cls": "constants",
		"name": "超阶光明宝典",
		"canUseItemEffect": "true",
		"text": "使用后，消耗当前100%魔力值，恢复自身当前6倍魔力值的生命值",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mana*6)"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "(status:mana)"
			}
		]
	},
	"I627": {
		"cls": "constants",
		"name": "黑暗光明宝典",
		"canUseItemEffect": "true",
		"text": "使用后，消耗当前100%魔力值，恢复自身当前9倍魔力值的生命值",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mana*9)"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "(status:mana)"
			}
		]
	},
	"I628": {
		"cls": "constants",
		"name": "圣阶光明宝典",
		"canUseItemEffect": "true",
		"text": "使用后，消耗当前100%魔力值，恢复自身当前（18倍魔力值）的生命值",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mana*18)"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "(status:mana)"
			}
		]
	},
	"I629": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I630": {
		"cls": "equips",
		"name": "魔力铠甲",
		"canUseItemEffect": "true",
		"text": "穿上后，获得1%魔力值效果的减伤(最大效果不超过自身攻防和)",
		"equip": {
			"type": "法袍",
			"value": {},
			"percentage": {}
		}
	},
	"I631": {
		"cls": "equips",
		"name": "蕴灵甲",
		"canUseItemEffect": "true",
		"text": "防御力+12",
		"equip": {
			"type": "法袍",
			"value": {
				"def": 12
			},
			"percentage": {}
		}
	},
	"I632": {
		"cls": "equips",
		"name": "福灵甲",
		"canUseItemEffect": "true",
		"text": "防御力1000",
		"equip": {
			"type": "法袍",
			"value": {
				"def": 1000
			},
			"percentage": {}
		}
	},
	"I633": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I634": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I635": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I636": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I637": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I638": {
		"cls": "tools",
		"name": "初级星露",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "+=",
				"value": "10"
			}
		],
		"text": "喝下后恢复10点魔力值"
	},
	"I639": {
		"cls": "tools",
		"name": "中级星露",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "+=",
				"value": "50"
			}
		],
		"text": "喝下后恢复50点魔力值"
	},
	"I640": {
		"cls": "tools",
		"name": "高级星露",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "+=",
				"value": "100"
			}
		],
		"text": "喝下后恢复100点魔力值"
	},
	"I673": {
		"cls": "constants",
		"name": "禁术印记",
		"canUseItemEffect": "true",
		"text": "希娜公主为了控制光明圣子的禁术印记，每次战斗额外受到10%伤害，先计算护盾后计算此禁术。"
	},
	"I674": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I675": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I676": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"big1Potion": {
		"cls": "items",
		"name": "一阶血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"big2Potion": {
		"cls": "items",
		"name": "二阶血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"big3Potion": {
		"cls": "items",
		"name": "三阶血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"big4Potion": {
		"cls": "items",
		"name": "四阶血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"big5Potion": {
		"cls": "items",
		"name": "五阶血瓶",
		"text": "，生命+${core.values.greenPotion*2}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 2",
		"canUseItemEffect": "true"
	},
	"big6Potion": {
		"cls": "items",
		"name": "六阶血瓶",
		"text": "，生命+${core.values.greenPotion*4}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 4",
		"canUseItemEffect": "true"
	},
	"big7Potion": {
		"cls": "items",
		"name": "七阶血瓶",
		"text": "，生命+${core.values.greenPotion*8}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 8",
		"canUseItemEffect": "true"
	},
	"big8Potion": {
		"cls": "items",
		"name": "八阶血瓶",
		"text": "，生命+${core.values.greenPotion*10}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 10",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*10}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 10",
		"canUseItemEffect": "true"
	},
	"big9Potion": {
		"cls": "items",
		"name": "九阶血瓶",
		"text": "，生命+${core.values.greenPotion*20}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 20",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*20}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 20",
		"canUseItemEffect": "true"
	},
	"big10Potion": {
		"cls": "items",
		"name": "十阶血瓶",
		"text": "，生命+${core.values.greenPotion*40}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 40",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*40}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 40",
		"canUseItemEffect": "true"
	},
	"big11Potion": {
		"cls": "items",
		"name": "十一阶血瓶",
		"text": "，生命+${core.values.greenPotion*50}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 50",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*50}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 50",
		"canUseItemEffect": "true"
	},
	"big12Potion": {
		"cls": "items",
		"name": "十二阶血瓶",
		"text": "，生命+${core.values.greenPotion*100}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 100",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*100}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 100",
		"canUseItemEffect": "true"
	},
	"I692": {
		"cls": "items",
		"name": "一阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 5;",
		"itemEffectTip": "魔力值提升5点"
	},
	"I693": {
		"cls": "items",
		"name": "二阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 10;",
		"itemEffectTip": "魔力值提升10点"
	},
	"I694": {
		"cls": "items",
		"name": "三阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 20;",
		"itemEffectTip": "魔力值提升20点"
	},
	"I695": {
		"cls": "items",
		"name": "四阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 40;",
		"itemEffectTip": "魔力值提升40点"
	},
	"I696": {
		"cls": "items",
		"name": "五阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 80;",
		"itemEffectTip": "魔力值提升80点"
	},
	"I697": {
		"cls": "items",
		"name": "六阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 160;",
		"itemEffectTip": "魔力值提升160点"
	},
	"I698": {
		"cls": "items",
		"name": "七阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 200;",
		"itemEffectTip": "魔力值提升200点"
	},
	"I699": {
		"cls": "items",
		"name": "八阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 400;",
		"itemEffectTip": "魔力值提升400点"
	},
	"I700": {
		"cls": "items",
		"name": "九阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 800;",
		"itemEffectTip": "魔力值提升800点"
	},
	"I701": {
		"cls": "items",
		"name": "十阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 1600;",
		"itemEffectTip": "魔力值提升1600点"
	},
	"I702": {
		"cls": "items",
		"name": "十一阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 3200;",
		"itemEffectTip": "魔力值提升3200点"
	},
	"I703": {
		"cls": "items",
		"name": "十二阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 6400;",
		"itemEffectTip": "魔力值提升6400点"
	},
	"I704": {
		"cls": "items",
		"name": "十三阶粉臻宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 10000;",
		"itemEffectTip": "魔力值提升10000点"
	},
	"I705": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I706": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I707": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I708": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I709": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I710": {
		"cls": "tools",
		"name": "初阶神之血",
		"text": "可以恢复5%生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('I710', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入初阶神之血使用次数：(0-${item:I710})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "((flag:input<=item:I710)&&(flag:input>0))",
				"true": [
					{
						"type": "setValue",
						"name": "item:I710",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*(status:hpmax*0.05)"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次初阶神之血，恢复${flag:input*(status:hpmax*0.05)}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"I711": {
		"cls": "tools",
		"name": "进阶神之血",
		"text": "可以恢复10%生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('I711', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入进阶神之血使用次数：(0-${item:I711})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "((flag:input<=item:I711)&&(flag:input>0))",
				"true": [
					{
						"type": "setValue",
						"name": "item:I711",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*(status:hpmax*0.1)"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次进阶神之血，恢复${flag:input*(status:hpmax*0.1)}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"I712": {
		"cls": "tools",
		"name": "中阶神之血",
		"text": "可以恢复15%生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('I712', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入中阶神之血使用次数：(0-${item:I712})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "((flag:input<=item:I712)&&(flag:input>0))",
				"true": [
					{
						"type": "setValue",
						"name": "item:I712",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*(status:hpmax*0.15)"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次中阶神之血，恢复${flag:input*(status:hpmax*0.15)}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"I713": {
		"cls": "tools",
		"name": "高阶神之血",
		"text": "可以恢复20%生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('I713', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入高阶神之血使用次数：(0-${item:I713})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "((flag:input<=item:I713)&&(flag:input>0))",
				"true": [
					{
						"type": "setValue",
						"name": "item:I713",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*(status:hpmax*0.2)"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次高阶神之血，恢复${flag:input*(status:hpmax*0.2)}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"I714": {
		"cls": "tools",
		"name": "超阶神之血",
		"canUseItemEffect": "true",
		"text": "喝下后回复25%生命值",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "poison.mp3"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:hpmax*0.25)"
			}
		]
	},
	"I715": {
		"cls": "items",
		"name": "大魔法瓶",
		"canUseItemEffect": "true",
		"itemEffect": "core.events.setGlobalAttribute('equipName', core.status.globalAttribute.equipName.concat([\"卷轴\"]))",
		"itemEffectTip": "卷轴栏+1",
		"text": "增加一个卷轴栏位置，即买即用。"
	},
	"I716": {
		"cls": "items",
		"name": "魔力药水",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 200;",
		"itemEffectTip": "魔力值提升200点"
	},
	"I717": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I718": {
		"cls": "equips",
		"name": "攻击卷轴",
		"canUseItemEffect": "true",
		"text": "获得5%的攻击力",
		"equip": {
			"type": "卷轴",
			"value": {},
			"percentage": {
				"atk": 5
			}
		}
	},
	"I719": {
		"cls": "equips",
		"name": "轻语卷轴",
		"canUseItemEffect": "true",
		"text": "护盾+200，防御+3%",
		"equip": {
			"type": "卷轴",
			"value": {
				"mdef": 200
			},
			"percentage": {
				"def": 3
			}
		}
	},
	"I720": {
		"cls": "equips",
		"name": "无根卷轴",
		"canUseItemEffect": "true",
		"text": "攻防+6%",
		"equip": {
			"type": "卷轴",
			"value": {},
			"percentage": {
				"atk": 6,
				"def": 6
			}
		}
	},
	"I721": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I722": {
		"cls": "equips",
		"name": "魔力卷轴",
		"canUseItemEffect": "true",
		"text": "战后恢复6点魔力值",
		"equip": {
			"type": "卷轴",
			"value": {},
			"percentage": {}
		}
	},
	"I723": {
		"cls": "equips",
		"name": "生命卷轴",
		"canUseItemEffect": "true",
		"text": "战后恢复1%的最大生命值的生命",
		"equip": {
			"type": "卷轴",
			"value": {},
			"percentage": {}
		}
	},
	"whiteKey": {
		"cls": "tools",
		"name": "光明之钥",
		"canUseItemEffect": "true",
		"text": "可以打开一扇光明之门"
	},
	"I1085": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1086": {
		"cls": "tools",
		"name": "天命之盾",
		"canUseItemEffect": null,
		"text": "战士所用的强大装备"
	},
	"I1087": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1088": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1089": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	}
}