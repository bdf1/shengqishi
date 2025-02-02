var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {
	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行
	}
	core.enemys.getDamageString = function (enemy, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		//console.log('start')
		var damage = core.getFlag('bestEquip') ? this.enemydata.getDamageInfo1(enemy, null, x, y, floorId) : this.enemydata.getDamageInfo(enemy, null, x, y, floorId);
		//console.log('end')
		if (damage) damage = damage.damage

		var color = '#000000';

		if (damage == null) {
			damage = "???";
			color = '#FF2222';
		} else {
			if (damage <= 0) color = '#11FF11';
			else if (damage < core.status.hero.hp / 3) color = '#FFFFFF';
			else if (damage < core.status.hero.hp * 2 / 3) color = '#FFFF00';
			else if (damage < core.status.hero.hp) color = '#FF9933';
			else color = '#FF2222';

			damage = core.formatBigNumber(damage, true);
			if (core.enemys.hasSpecial(enemy, 19))
				damage += "+";
			if (core.enemys.hasSpecial(enemy, 21))
				damage += "-";
			if (core.enemys.hasSpecial(enemy, 11) || core.enemys.hasSpecial(enemy, 28))
				damage += "^";
		}

		return {
			"damage": damage,
			"color": color
		};
	}
	core.ui._drawBook_drawDamage = function (index, enemy, offset, position) {
		core.setTextAlign('ui', 'center');
		var damage = enemy.damage,
			color = '#FFFF00';
		if (damage == null) {
			damage = '无法战斗';
			color = '#FF2222';
		} else {
			if (damage >= core.status.hero.hp) color = '#FF2222';
			else if (damage >= core.status.hero.hp * 2 / 3) color = '#FF9933';
			else if (damage <= 0) color = '#11FF11';
			damage = core.formatBigNumber(damage);
			if (core.enemys.hasSpecial(enemy, 19)) damage += "+";
			if (core.enemys.hasSpecial(enemy, 21)) damage += "-";
			if (core.enemys.hasSpecial(enemy, 11) || core.enemys.hasSpecial(enemy, 28)) damage += "^";
		}
		if (enemy.notBomb) damage += "[b]";
		core.fillText('ui', damage, offset, position, color, this._buildFont(13, true));
	}
	core.control.resize = function () {
		if (main.mode == 'editor') return;
		var clientWidth = main.dom.body.clientWidth,
			clientHeight = main.dom.body.clientHeight;
		var BORDER = 0;
		var extendToolbar = core.flags.extendToolbar;
		let hideLeftStatusBar = core.flags.hideLeftStatusBar;
		var BAR_WIDTH = hideLeftStatusBar ? 0 : Math.round(core._PY_ * 0.31);

		var horizontalMaxRatio = (clientHeight - 2 * BORDER - (hideLeftStatusBar ? BORDER : 0)) / (core._PY_ + (hideLeftStatusBar ? 38 : 0));

		if (clientWidth - 3 * BORDER >= core._PX_ + BAR_WIDTH || (clientWidth > clientHeight && horizontalMaxRatio < 1)) {
			// 横屏
			core.domStyle.isVertical = false;

			core.domStyle.availableScale = [];
			[1, 1.25, 1.5, 1.75, 2, 2.25, 2.5].forEach(function (v) {
				if (clientWidth - 3 * BORDER >= v * (core._PX_ + BAR_WIDTH) && horizontalMaxRatio >= v) {
					core.domStyle.availableScale.push(v);
				}
			});
			if (core.domStyle.availableScale.indexOf(core.domStyle.scale) < 0) {
				core.domStyle.scale = Math.min(1, horizontalMaxRatio);
			}
		} else {
			// 竖屏
			core.domStyle.isVertical = true;
			core.domStyle.scale = Math.min((clientWidth - 2 * BORDER) / core._PX_);
			core.domStyle.availableScale = [];
			extendToolbar = false;
			hideLeftStatusBar = false;
			BAR_WIDTH = 0 //Math.round(core._PX_ * 0.3);
		}

		var statusDisplayArr = this._shouldDisplayStatus(),
			count = statusDisplayArr.length;
		var statusCanvas = core.flags.statusCanvas,
			statusCanvasRows = core.values.statusCanvasRowsOnMobile || 3;
		var col = statusCanvas ? statusCanvasRows : Math.ceil(count / 3);
		if (col > 5) {
			if (statusCanvas) alert("自绘状态栏的在竖屏下的行数应不超过5！");
			else alert("当前状态栏数目(" + count + ")大于15，请调整到不超过15以避免手机端出现显示问题。");
		}
		var globalAttribute = core.status.globalAttribute || core.initStatus.globalAttribute;

		var obj = {
			clientWidth: clientWidth,
			clientHeight: clientHeight,
			BORDER: BORDER,
			BAR_WIDTH: BAR_WIDTH,
			TOOLBAR_HEIGHT: 0,
			outerWidth: core._PX_ * core.domStyle.scale + 2 * BORDER,
			outerHeight: core._PY_ * core.domStyle.scale + 2 * BORDER,
			globalAttribute: globalAttribute,
			border: '0px ' + core.arrayToRGBA(globalAttribute.borderColor) + ' solid',
			statusDisplayArr: statusDisplayArr,
			count: count,
			col: col,
			statusBarHeightInVertical: 0, //core.domStyle.isVertical ? (32 * col + 6) * core.domStyle.scale + 2 * BORDER : 0,
			toolbarHeightInVertical: 0, //core.domStyle.isVertical ? 38 * core.domStyle.scale + 2 * BORDER : 0,
			extendToolbar: extendToolbar,
			is15x15: false,
			hideLeftStatusBar
		};

		this._doResize(obj);
		this.setToolbarButton();
		core.updateStatusBar();
		core.AllSprites();
	}
	core.items._realLoadEquip = function (type, loadId, unloadId, callback) {
		var loadEquip = core.material.items[loadId] || {},
			unloadEquip = core.material.items[unloadId] || {};

		// --- 音效
		this._realLoadEquip_playSound();

		// --- 实际换装
		this._loadEquipEffect(loadId, unloadId);

		// --- 加减
		if (core.getFlag('__equipCalc__')) {
			if (unloadId) core.status.hero.items.equips[unloadId] = (core.status.hero.items.equips[unloadId] || 0) + 1;
			if (loadId) core.status.hero.items.equips[loadId] -= 1;
			if (loadId && !core.status.hero.items.equips[loadId]) delete core.status.hero.items.equips[loadId];
		} else {
			if (unloadId) core.status.hero.items.equips[unloadId] = (core.status.hero.items.equips[unloadId] || 0) + 1;
			if (loadId) core.status.hero.items.equips[loadId] -= 1;
			if (loadId && !core.status.hero.items.equips[loadId]) delete core.status.hero.items.equips[loadId];
		}
		core.status.hero.equipment[type] = loadId || null;

		// --- 提示
		if (core.getFlag('__quickLoadEquip__'));
		else
		if (loadId) core.drawTip("已装备上" + loadEquip.name, loadId);
		else if (unloadId) core.drawTip("已卸下" + unloadEquip.name, unloadId);

		if (callback) callback();
	}
	core.ui._drawCenterFly = function () {
		core.lockControl();
		core.status.event.id = 'centerFly';
		var fillstyle = 'rgba(255,0,0,0.5)';
		if (core.canUseItem('centerFly')) fillstyle = 'rgba(0,255,0,0.5)';
		var toX = core.bigmap.width - 1 - core.getHeroLoc('x'),
			toY = core.bigmap.height - 1 - core.getHeroLoc('y');
		this.clearUI();
		core.fillRect('ui', 0, 0, core._PX_, core._PY_, '#000000');
		core.drawThumbnail(null, null, { heroLoc: core.status.hero.loc, heroIcon: core.status.hero.image, ctx: 'ui', centerX: toX, centerY: toY, noHD: true });
		var offsetX = core.clamp(toX - core._HALF_WIDTH_, 0, core.bigmap.width - core._WIDTH_),
			offsetY = core.clamp(toY - core._HALF_HEIGHT_, 0, core.bigmap.height - core._HEIGHT_);
		core.fillRect('ui', (toX - offsetX) * 32, (toY - offsetY) * 32, 32, 32, fillstyle);
		core.status.event.data = { "x": toX, "y": toY, "posX": toX - offsetX, "posY": toY - offsetY };
		core.playSound('打开界面');
		core.drawTip("请确认当前" + core.material.items['centerFly'].name + "的位置", 'centerFly');
		return;
	}
	this.calcEquip = function () {
		var yifu_ = ['I635', 'I630', 'I631', 'I632'];
		var fazhang_ = ['I337', 'I408', 'I409', 'I410', 'I411', 'I412', 'I413', 'I1116', 'I1115', 'I595'];
		var juanzhou_ = ['I718', 'I719', 'I720', 'I723'];
		var yifu = null,
			fazhang = null;
		for (var i of yifu_)
			if (core.status.hero.equipment.includes(i) || core.hasItem(i)) yifu = i;
		for (var i of fazhang_)
			if (core.status.hero.equipment.includes(i) || core.hasItem(i)) fazhang = i;
		juanzhou = core.clone(juanzhou_).filter(i => core.status.hero.equipment.includes(i) || core.hasItem(i));
		var haveI720 = juanzhou.includes('I720');
		flags.saveEquips = []
		if (flags.shop3) {
			while (juanzhou.length < 2) juanzhou.push(null);
			for (var i = 0; i < juanzhou.length; i++)
				for (var j = i + 1; j < juanzhou.length; j++)
					if (haveI720 && (![juanzhou[i], juanzhou[j]].includes('I720')) && (['I718', 'I719'].includes(juanzhou[i]) || ['I718', 'I719'].includes(juanzhou[j])));
					else
						flags.saveEquips.push([yifu, juanzhou[i], fazhang, juanzhou[j]]);
		} else {
			while (juanzhou.length < 1) juanzhou.push(null);
			for (var i = 0; i < juanzhou.length; i++)
				if (haveI720 && juanzhou[i] != 'I720' && ['I718', 'I719'].includes(juanzhou[i]));
				else
					flags.saveEquips.push([yifu, juanzhou[i], fazhang]);
		}


	}
	core.control.setToolbarButton = function (useButton) {
		if (!core.domStyle.showStatusBar) {
			// 隐藏状态栏时检查竖屏
			if (!core.domStyle.isVertical && !core.flags.extendToolbar) {
				for (var i = 0; i < core.dom.tools.length; ++i)
					core.dom.tools[i].style.display = 'none';
				return;
			}
			if (!core.hasFlag('showToolbox')) return;
			else core.dom.tools.hard.style.display = 'block';
		}

		if (useButton == null) useButton = core.domStyle.toolbarBtn;
		if ((!core.domStyle.isVertical && !core.flags.extendToolbar)) useButton = false;
		core.domStyle.toolbarBtn = useButton;
		if (!core.domStyle.isVertical) {
			["book", "fly", "toolbox", "keyboard", "shop", "save", "load", "settings"].forEach(function (t) {
				core.statusBar.image[t].style.display = 'none';
			});
			["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8"].forEach(function (t) {
				core.statusBar.image[t].style.display = 'none';
			})
			core.statusBar.hard.style.display = 'none';
		} else
		if (useButton) {
			["book", "fly", "toolbox", "keyboard", "shop", "save", "load", "settings"].forEach(function (t) {
				core.statusBar.image[t].style.display = 'none';
			});
			["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8"].forEach(function (t) {
				core.statusBar.image[t].style.display = 'block';
			})
			main.statusBar.image.btn8.style.filter = core.getLocalStorage('altKey') ? 'sepia(1) contrast(1.5)' : '';
			core.statusBar.hard.style.display = 'block';
		} else {
			["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8"].forEach(function (t) {
				core.statusBar.image[t].style.display = 'none';
			});
			["book", "fly", "toolbox", "save", "load", "settings"].forEach(function (t) {
				core.statusBar.image[t].style.display = 'block';
			});
			core.statusBar.image.keyboard.style.display = core.statusBar.image.shop.style.display = core.domStyle.isVertical || core.flags.extendToolbar ? "block" : "none";
			core.statusBar.hard.style.display = 'block';
		}
	}
	core.actions._getClickLoc = function (x, y) {

		var statusBar = { 'x': 0, 'y': 0 };
		var size = 32;
		size = size * core.domStyle.scale;

		if (core.domStyle.isVertical) {

		} else {
			statusBar.x = core.dom.statusBar.offsetWidth;
		}

		var left = core.dom.gameGroup.offsetLeft + statusBar.x;
		var top = core.dom.gameGroup.offsetTop + statusBar.y;
		var loc = { 'x': Math.max(x - left), 'y': Math.max(y - top), 'size': size };
		return loc;
	}
},
    "drawLight": function () {

		// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
		// 【参数说明】
		// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
		// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
		// lights：可选，一个数组，定义了每个独立的灯光。
		//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
		// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
		//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
		// 【调用样例】
		// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
		// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
		// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
		// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
		// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，40%后才开始衰减。
		this.drawLight = function (name, color, lights, lightDec) {

			// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
			var ctx = core.getContextByName(name);
			if (ctx == null) {
				if (typeof name == 'string')
					ctx = core.createCanvas(name, 0, 0, core._PX_ || core.__PIXELS__, core._PY_ || core.__PIXELS__, 98);
				else return;
			}

			ctx.mozImageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;

			core.clearMap(name);
			// 绘制色调层，默认不透明度
			if (color == null) color = 0.9;
			ctx.fillStyle = "rgba(0,0,0," + color + ")";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			lightDec = core.clamp(lightDec, 0, 1);

			// 绘制每个灯光效果
			ctx.globalCompositeOperation = 'destination-out';
			lights.forEach(function (light) {
				// 坐标，半径，中心不透明度
				var x = light[0],
					y = light[1],
					r = light[2];
				// 计算衰减距离
				var decDistance = parseInt(r * lightDec);
				// 正方形区域的直径和左上角坐标
				var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
				grd.addColorStop(0, "rgba(0,0,0,1)");
				grd.addColorStop(1, "rgba(0,0,0,0)");
				ctx.beginPath();
				ctx.fillStyle = grd;
				ctx.arc(x, y, r, 0, 2 * Math.PI);
				ctx.fill();
			});
			ctx.globalCompositeOperation = 'source-over';
			// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
		}
	},
    "shop": function () {
		// 【全局商店】相关的功能
		// 
		// 打开一个全局商店
		// shopId：要打开的商店id；noRoute：是否不计入录像
		this.openShop = function (shopId, noRoute) {
			var shop = core.status.shops[shopId];
			// Step 1: 检查能否打开此商店
			if (!this.canOpenShop(shopId)) {
				core.drawTip("该商店尚未开启");
				return false;
			}

			// Step 2: （如有必要）记录打开商店的脚本事件
			if (!noRoute) {
				core.status.route.push("shop:" + shopId);
			}

			// Step 3: 检查道具商店 or 公共事件
			if (shop.item) {
				if (core.openItemShop) {
					core.openItemShop(shopId);
				} else {
					core.playSound('操作失败');
					core.insertAction("道具商店插件不存在！请检查是否存在该插件！");
				}
				return;
			}
			if (shop.commonEvent) {
				core.insertCommonEvent(shop.commonEvent, shop.args);
				return;
			}

			_shouldProcessKeyUp = true;

			// Step 4: 执行标准公共商店    
			core.insertAction(this._convertShop(shop));
			return true;
		}

		////// 将一个全局商店转变成可预览的公共事件 //////
		this._convertShop = function (shop) {
			return [
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', 1);}" },
				{
					"type": "while",
					"condition": "true",
					"data": [
						// 检测能否访问该商店
						{
							"type": "if",
							"condition": "core.isShopVisited('" + shop.id + "')",
							"true": [
								// 可以访问，直接插入执行效果
								{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', false) }" },
							],
							"false": [
								// 不能访问的情况下：检测能否预览
								{
									"type": "if",
									"condition": shop.disablePreview,
									"true": [
										// 不可预览，提示并退出
										{ "type": "playSound", "name": "操作失败" },
										"当前无法访问该商店！",
										{ "type": "break" },
									],
									"false": [
										// 可以预览：将商店全部内容进行替换
										{ "type": "tip", "text": "当前处于预览模式，不可购买" },
										{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', true) }" },
									]
								}
							]
						}
					]
				},
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', -1);}" }
			];
		}

		this._convertShop_replaceChoices = function (shopId, previewMode) {
			var shop = core.status.shops[shopId];
			var choices = (shop.choices || []).filter(function (choice) {
				if (choice.condition == null || choice.condition == '') return true;
				try { return core.calValue(choice.condition); } catch (e) { return true; }
			}).map(function (choice) {
				var ableToBuy = core.calValue(choice.need);
				return {
					"text": choice.text,
					"icon": choice.icon,
					"color": ableToBuy && !previewMode ? choice.color : [153, 153, 153, 1],
					"action": ableToBuy && !previewMode ? [{ "type": "playSound", "name": "商店" }].concat(choice.action) : [
						{ "type": "playSound", "name": "操作失败" },
						{ "type": "tip", "text": previewMode ? "预览模式下不可购买" : "购买条件不足" }
					]
				};
			}).concat({ "text": "离开", "action": [{ "type": "playSound", "name": "取消" }, { "type": "break" }] });
			core.insertAction({ "type": "choices", "text": shop.text, "choices": choices });
		}

		/// 是否访问过某个快捷商店
		this.isShopVisited = function (id) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			return shops[id].visited;
		}

		/// 当前应当显示的快捷商店列表
		this.listShopIds = function () {
			return Object.keys(core.status.shops).filter(function (id) {
				return core.isShopVisited(id) || !core.status.shops[id].mustEnable;
			});
		}

		/// 是否能够打开某个商店
		this.canOpenShop = function (id) {
			if (this.isShopVisited(id)) return true;
			var shop = core.status.shops[id];
			if (shop.item || shop.commonEvent || shop.mustEnable) return false;
			return true;
		}

		/// 启用或禁用某个快捷商店
		this.setShopVisited = function (id, visited) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			if (visited) shops[id].visited = true;
			else delete shops[id].visited;
		}

		/// 能否使用快捷商店
		this.canUseQuickShop = function (id) {
			// 如果返回一个字符串，表示不能，字符串为不能使用的提示
			// 返回null代表可以使用

			// 检查当前楼层的canUseQuickShop选项是否为false
			if (core.status.thisMap.canUseQuickShop === false)
				return '当前楼层不能使用快捷商店。';
			return null;
		}

		var _shouldProcessKeyUp = true;

		/// 允许商店X键退出
		core.registerAction('keyUp', 'shops', function (keycode) {
			if (!core.status.lockControl || core.status.event.id != 'action') return false;
			if ((keycode == 13 || keycode == 32) && !_shouldProcessKeyUp) {
				_shouldProcessKeyUp = true;
				return true;
			}

			if (!core.hasFlag("@temp@shop") || core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 88 || keycode == 27) { // X, ESC
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + choices.length - 1);
				return true;
			}
			return false;
		}, 60);

		/// 允许长按空格或回车连续执行操作
		core.registerAction('keyDown', 'shops', function (keycode) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			core.status.onShopLongDown = true;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 13 || keycode == 32) { // Space, Enter
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + core.status.event.selection);
				_shouldProcessKeyUp = false;
				return true;
			}
			return false;
		}, 60);

		// 允许长按屏幕连续执行操作
		core.registerAction('longClick', 'shops', function (x, y, px, py) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (Math.abs(x - (core._HALF_WIDTH_ || core.__HALF_SIZE__)) <= 2 && y >= topIndex && y < topIndex + choices.length) {
				core.actions._clickAction(x, y);
				return true;
			}
			return false;
		}, 60);
	},
    "removeMap": function () {
		// 高层塔砍层插件，删除后不会存入存档，不可浏览地图也不可飞到。
		// 推荐用法：
		// 对于超高层或分区域塔，当在1区时将2区以后的地图删除；1区结束时恢复2区，进二区时删除1区地图，以此类推
		// 这样可以大幅减少存档空间，以及加快存读档速度

		// 删除楼层
		// core.removeMaps("MT1", "MT300") 删除MT1~MT300之间的全部层
		// core.removeMaps("MT10") 只删除MT10层
		this.removeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__visited__ = flags.__visited__ || {};
			flags.__removed__ = flags.__removed__ || [];
			flags.__disabled__ = flags.__disabled__ || {};
			flags.__leaveLoc__ = flags.__leaveLoc__ || {};
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (core.status.maps[floorId].deleted) continue;
				delete flags.__visited__[floorId];
				flags.__removed__.push(floorId);
				delete flags.__disabled__[floorId];
				delete flags.__leaveLoc__[floorId];
				(core.status.autoEvents || []).forEach(function (event) {
					if (event.floorId == floorId && event.currentFloor) {
						core.autoEventExecuting(event.symbol, false);
						core.autoEventExecuted(event.symbol, false);
					}
				});
				core.status.maps[floorId].deleted = true;
				core.status.maps[floorId].canFlyTo = false;
				core.status.maps[floorId].canFlyFrom = false;
				core.status.maps[floorId].cannotViewMap = true;
			}
		}

		// 恢复楼层
		// core.resumeMaps("MT1", "MT300") 恢复MT1~MT300之间的全部层
		// core.resumeMaps("MT10") 只恢复MT10层
		this.resumeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__removed__ = flags.__removed__ || [];
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (!core.status.maps[floorId].deleted) continue;
				flags.__removed__ = flags.__removed__.filter(function (f) { return f != floorId; });
				core.status.maps[floorId] = core.loadFloor(floorId);
			}
		}

		// 分区砍层相关
		var inAnyPartition = function (floorId) {
			var inPartition = false;
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) inPartition = true;
			});
			return inPartition;
		}

		// 分区砍层
		this.autoRemoveMaps = function (floorId) {
			if (main.mode != 'play' || !inAnyPartition(floorId)) return;
			// 根据分区信息自动砍层与恢复
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) {
					core.resumeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				} else {
					core.removeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				}
			});
		}
	},
    "fiveLayers": function () {
	// 是否启用五图层（增加背景2层和前景2层） 将__enable置为true即会启用；启用后请保存后刷新编辑器
	// 背景层2将会覆盖背景层 被事件层覆盖 前景层2将会覆盖前景层
	// 另外 请注意加入两个新图层 会让大地图的性能降低一些
	// 插件作者：ad
	var __enable = true;
	if (!__enable) return;

	// 创建新图层
	function createCanvas(name, zIndex) {
		if (!name) return;
		var canvas = document.createElement('canvas');
		canvas.id = name;
		canvas.className = 'gameCanvas';
		// 编辑器模式下设置zIndex会导致加入的图层覆盖优先级过高
		if (main.mode != "editor") canvas.style.zIndex = zIndex || 0;
		// 将图层插入进游戏内容
		document.getElementById('gameDraw').appendChild(canvas);
		var ctx = canvas.getContext('2d');
		core.canvas[name] = ctx;
		canvas.width = core.__PIXELS__;
		canvas.height = core.__PIXELS__;
		return canvas;
	}

	var bg2Canvas = createCanvas('bg2', 20);
	var fg2Canvas = createCanvas('fg2', 63);
	// 大地图适配
	core.bigmap.canvas = ["bg2", "fg2", "bg", "event", "event2", "fg", "damage"];
	core.initStatus.bg2maps = {};
	core.initStatus.fg2maps = {};

	if (main.mode == 'editor') {
		/*插入编辑器的图层 不做此步新增图层无法在编辑器显示*/
		// 编辑器图层覆盖优先级 eui > efg > fg(前景层) > event2(48*32图块的事件层) > event(事件层) > bg(背景层)
		// 背景层2(bg2) 插入事件层(event)之前(即bg与event之间)
		document.getElementById('mapEdit').insertBefore(bg2Canvas, document.getElementById('event'));
		// 前景层2(fg2) 插入编辑器前景(efg)之前(即fg之后)
		document.getElementById('mapEdit').insertBefore(fg2Canvas, document.getElementById('ebm'));
		// 原本有三个图层 从4开始添加
		var num = 4;
		// 新增图层存入editor.dom中
		editor.dom.bg2c = core.canvas.bg2.canvas;
		editor.dom.bg2Ctx = core.canvas.bg2;
		editor.dom.fg2c = core.canvas.fg2.canvas;
		editor.dom.fg2Ctx = core.canvas.fg2;
		editor.dom.maps.push('bg2map', 'fg2map');
		editor.dom.canvas.push('bg2', 'fg2');

		// 创建编辑器上的按钮
		var createCanvasBtn = function (name) {
			// 电脑端创建按钮
			var input = document.createElement('input');
			// layerMod4/layerMod5
			var id = 'layerMod' + num++;
			// bg2map/fg2map
			var value = name + 'map';
			input.type = 'radio';
			input.name = 'layerMod';
			input.id = id;
			input.value = value;
			editor.dom[id] = input;
			input.onchange = function () {
				editor.uifunctions.setLayerMod(value);
			}
			return input;
		};

		var createCanvasBtn_mobile = function (name) {
			// 手机端往选择列表中添加子选项
			var input = document.createElement('option');
			var id = 'layerMod' + num++;
			var value = name + 'map';
			input.name = 'layerMod';
			input.value = value;
			editor.dom[id] = input;
			return input;
		};
		if (!editor.isMobile) {
			var input = createCanvasBtn('bg2');
			var input2 = createCanvasBtn('fg2');
			// 获取事件层及其父节点
			var child = document.getElementById('layerMod'),
				parent = child.parentNode;
			// 背景层2插入事件层前
			parent.insertBefore(input, child);
			// 不能直接更改背景层2的innerText 所以创建文本节点
			var txt = document.createTextNode('bg2');
			// 插入事件层前(即新插入的背景层2前)
			parent.insertBefore(txt, child);
			// 向最后插入前景层2(即插入前景层后)
			parent.appendChild(input2);
			var txt2 = document.createTextNode('fg2');
			parent.appendChild(txt2);
			parent.childNodes[2].replaceWith("bg");
			parent.childNodes[6].replaceWith("事件");
			parent.childNodes[8].replaceWith("fg");
		} else {
			var input = createCanvasBtn_mobile('bg2');
			var input2 = createCanvasBtn_mobile('fg2');
			// 手机端因为是选项 所以可以直接改innerText
			input.innerText = '背景层2';
			input2.innerText = '前景层2';
			var parent = document.getElementById('layerMod');
			parent.insertBefore(input, parent.children[1]);
			parent.appendChild(input2);
		}
	}

	var _loadFloor_doNotCopy = core.maps._loadFloor_doNotCopy;
	core.maps._loadFloor_doNotCopy = function () {
		return ["bg2map", "fg2map"].concat(_loadFloor_doNotCopy());
	}
	////// 绘制背景和前景层 //////
	core.maps._drawBg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
		config.ctx = cacheCtx;
		core.maps._drawBg_drawBackground(floorId, config);
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制背景图块；后绘制的覆盖先绘制的。
		core.maps._drawFloorImages(floorId, config.ctx, 'bg', null, null, config.onMap);
		core.maps._drawBgFgMap(floorId, 'bg', config);
		if (config.onMap) {
			core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			core.clearMap('bg2');
			core.clearMap(cacheCtx);
		}
		core.maps._drawBgFgMap(floorId, 'bg2', config);
		if (config.onMap) core.drawImage('bg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
		config.ctx = toDrawCtx;
	}
	core.maps._drawFg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
		config.ctx = cacheCtx;
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制前景图块；后绘制的覆盖先绘制的。
		core.maps._drawFloorImages(floorId, config.ctx, 'fg', null, null, config.onMap);
		core.maps._drawBgFgMap(floorId, 'fg', config);
		if (config.onMap) {
			core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			core.clearMap('fg2');
			core.clearMap(cacheCtx);
		}
		core.maps._drawBgFgMap(floorId, 'fg2', config);
		if (config.onMap) core.drawImage('fg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
		config.ctx = toDrawCtx;
	}
	////// 移动判定 //////
	core.maps._generateMovableArray_arrays = function (floorId) {
		return {
			bgArray: this.getBgMapArray(floorId),
			fgArray: this.getFgMapArray(floorId),
			eventArray: this.getMapArray(floorId),
			bg2Array: this._getBgFgMapArray('bg2', floorId),
			fg2Array: this._getBgFgMapArray('fg2', floorId)
		};
	}
},
    "itemShop": function () {
		// 道具商店相关的插件
		// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

		var shopId = null; // 当前商店ID
		var type = 0; // 当前正在选中的类型，0买入1卖出
		var selectItem = 0; // 当前正在选中的道具
		var selectCount = 0; // 当前已经选中的数量
		var page = 0;
		var totalPage = 0;
		var totalMoney = 0;
		var list = [];
		var shopInfo = null; // 商店信息
		var choices = []; // 商店选项
		var use = 'money';
		var useText = '金币';

		var bigFont = core.ui._buildFont(20, false),
			middleFont = core.ui._buildFont(18, false);

		this._drawItemShop = function () {
			// 绘制道具商店

			// Step 1: 背景和固定的几个文字
			core.ui._createUIEvent();
			core.clearMap('uievent');
			core.ui.clearUIEventSelector();
			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'top');
			core.fillRect('uievent', 0, 0, 416, 416, 'black');
			core.drawWindowSkin('winskin.png', 'uievent', 0, 0, 416, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 56, 312, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 112, 312, 304);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 56, 104, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 112, 104, 304);
			core.setFillStyle('uievent', 'white');
			core.setStrokeStyle('uievent', 'white');
			core.fillText("uievent", "购买", 32, 74, 'white', bigFont);
			core.fillText("uievent", "卖出", 132, 74);
			core.fillText("uievent", "离开", 232, 74);
			core.fillText("uievent", "当前" + useText, 324, 66, null, middleFont);
			core.setTextAlign("uievent", "right");
			core.fillText("uievent", core.formatBigNumber(core.status.hero[use]), 405, 89);
			core.setTextAlign("uievent", "left");
			core.ui.drawUIEventSelector(1, "winskin.png", 22 + 100 * type, 66, 60, 33);
			if (selectItem != null) {
				core.setTextAlign('uievent', 'center');
				core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 364, 320, null, bigFont);
				core.fillText("uievent", "<   " + selectCount + "   >", 364, 350);
				core.fillText("uievent", "确定", 364, 380);
			}

			// Step 2：获得列表并展示
			list = choices.filter(function (one) {
				if (one.condition != null && one.condition != '') {
					try { if (!core.calValue(one.condition)) return false; } catch (e) { }
				}
				return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
			});
			var per_page = 6;
			totalPage = Math.ceil(list.length / per_page);
			page = Math.floor((selectItem || 0) / per_page) + 1;

			// 绘制分页
			if (totalPage > 1) {
				var half = 156;
				core.setTextAlign('uievent', 'center');
				core.fillText('uievent', page + " / " + totalPage, half, 388, null, middleFont);
				if (page > 1) core.fillText('uievent', '上一页', half - 80, 388);
				if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 388);
			}
			core.setTextAlign('uievent', 'left');

			// 绘制每一项
			var start = (page - 1) * per_page;
			for (var i = 0; i < per_page; ++i) {
				var curr = start + i;
				if (curr >= list.length) break;
				var item = list[curr];
				core.drawIcon('uievent', item.id, 10, 125 + i * 40);
				core.setTextAlign('uievent', 'left');
				core.fillText('uievent', core.material.items[item.id].name, 50, 132 + i * 40, null, bigFont);
				core.setTextAlign('uievent', 'right');
				core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + useText + "/个", 300, 133 + i * 40, null, middleFont);
				core.setTextAlign("uievent", "left");
				if (curr == selectItem) {
					// 绘制描述，文字自动放缩
					var text = core.material.items[item.id].text || "该道具暂无描述";
					try { text = core.replaceText(text); } catch (e) { }
					for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
						var config = { left: 10, fontSize: fontSize, maxWidth: 403 };
						var height = core.getTextContentHeight(text, config);
						if (height <= 50) {
							config.top = (56 - height) / 2;
							core.drawTextContent("uievent", text, config);
							break;
						}
					}
					core.ui.drawUIEventSelector(2, "winskin.png", 8, 120 + i * 40, 295, 40);
					if (type == 0 && item.number != null) {
						core.fillText("uievent", "存货", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", item.number, 406, 132, null, null, 40);
					} else if (type == 1) {
						core.fillText("uievent", "数量", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", core.itemCount(item.id), 406, 132, null, null, 40);
					}
					core.setTextAlign("uievent", "left");
					core.fillText("uievent", "预计" + useText, 324, 250);
					core.setTextAlign("uievent", "right");
					totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
					core.fillText("uievent", core.formatBigNumber(totalMoney), 405, 280);

					core.setTextAlign("uievent", "left");
					core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 324, 170);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 405, 200);
				}
			}

			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'alphabetic');
		}

		var _add = function (item, delta) {
			if (item == null) return;
			selectCount = core.clamp(
				selectCount + delta, 0,
				Math.min(type == 0 ? Math.floor(core.status.hero[use] / core.calValue(item.money)) : core.itemCount(item.id),
					type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
			);
		}

		var _confirm = function (item) {
			if (item == null || selectCount == 0) return;
			if (type == 0) {
				core.status.hero[use] -= totalMoney;
				core.getItem(item.id, selectCount);
				core.stopSound();
				core.playSound('确定');
				if (item.number != null) item.number -= selectCount;
				item.money_count = (item.money_count || 0) + selectCount;
			} else {
				core.status.hero[use] += totalMoney;
				core.removeItem(item.id, selectCount);
				core.playSound('确定');
				core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
				if (item.number != null) item.number += selectCount;
				item.sell_count = (item.sell_count || 0) + selectCount;
			}
			selectCount = 0;
		}

		this._performItemShopKeyBoard = function (keycode) {
			var item = list[selectItem] || null;
			// 键盘操作
			switch (keycode) {
				case 38: // up
					if (selectItem == null) break;
					if (selectItem == 0) selectItem = null;
					else selectItem--;
					selectCount = 0;
					break;
				case 37: // left
					if (selectItem == null) {
						if (type > 0) type--;
						break;
					}
					_add(item, -1);
					break;
				case 39: // right
					if (selectItem == null) {
						if (type < 2) type++;
						break;
					}
					_add(item, 1);
					break;
				case 40: // down
					if (selectItem == null) {
						if (list.length > 0) selectItem = 0;
						break;
					}
					if (list.length == 0) break;
					selectItem = Math.min(selectItem + 1, list.length - 1);
					selectCount = 0;
					break;
				case 13:
				case 32: // Enter/Space
					if (selectItem == null) {
						if (type == 2)
							core.insertAction({ "type": "break" });
						else if (list.length > 0)
							selectItem = 0;
						break;
					}
					_confirm(item);
					break;
				case 27: // ESC
					if (selectItem == null) {
						core.insertAction({ "type": "break" });
						break;
					}
					selectItem = null;
					break;
			}
		}

		this._performItemShopClick = function (px, py) {
			var item = list[selectItem] || null;
			// 鼠标操作
			if (px >= 22 && px <= 82 && py >= 71 && py <= 102) {
				// 买
				if (type != 0) {
					type = 0;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 122 && px <= 182 && py >= 71 && py <= 102) {
				// 卖
				if (type != 1) {
					type = 1;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 222 && px <= 282 && py >= 71 && py <= 102) // 离开
				return core.insertAction({ "type": "break" });
			// < >
			if (px >= 318 && px <= 341 && py >= 348 && py <= 376)
				return _add(item, -1);
			if (px >= 388 && px <= 416 && py >= 348 && py <= 376)
				return _add(item, 1);
			// 确定
			if (px >= 341 && px <= 387 && py >= 380 && py <= 407)
				return _confirm(item);

			// 上一页/下一页
			if (px >= 45 && px <= 105 && py >= 388) {
				if (page > 1) {
					selectItem -= 6;
					selectCount = 0;
				}
				return;
			}
			if (px >= 208 && px <= 268 && py >= 388) {
				if (page < totalPage) {
					selectItem = Math.min(selectItem + 6, list.length - 1);
					selectCount = 0;
				}
				return;
			}

			// 实际区域
			if (px >= 9 && px <= 300 && py >= 120 && py < 360) {
				if (list.length == 0) return;
				var index = parseInt((py - 120) / 40);
				var newItem = 6 * (page - 1) + index;
				if (newItem >= list.length) newItem = list.length - 1;
				if (newItem != selectItem) {
					selectItem = newItem;
					selectCount = 0;
				}
				return;
			}
		}

		this._performItemShopAction = function () {
			if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
			else return this._performItemShopClick(flags.px, flags.py);
		}

		this.openItemShop = function (itemShopId) {
			shopId = itemShopId;
			type = 0;
			page = 0;
			selectItem = null;
			selectCount = 0;
			core.isShopVisited(itemShopId);
			shopInfo = flags.__shops__[shopId];
			if (shopInfo.choices == null) shopInfo.choices = core.clone(core.status.shops[shopId].choices);
			choices = shopInfo.choices;
			use = core.status.shops[shopId].use;
			if (use != 'exp') use = 'money';
			useText = use == 'money' ? '金币' : '经验';

			core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawItemShop(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._performItemShopAction(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { core.deleteCanvas('uievent'); core.ui.clearUIEventSelector(); }"
			}
			]);
		}

	},
    "enemyLevel": function () {
	// 此插件将提供怪物手册中的怪物境界显示
	// 使用此插件需要先给每个怪物定义境界，方法如下：
	// 点击怪物的【配置表格】，找到“【怪物】相关的表格配置”，然后在【名称】仿照增加境界定义：
	/*
	 "level": {
		  "_leaf": true,
		  "_type": "textarea",
		  "_string": true,
		  "_data": "境界"
	 },
	 */
	// 然后保存刷新，可以看到怪物的属性定义中出现了【境界】。再开启本插件即可。

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
	var __enable = true;
	if (!__enable) return;

	// 这里定义每个境界的显示颜色；可以写'red', '#RRGGBB' 或者[r,g,b,a]四元数组
	var levelToColors = {
		"萌新一阶": "red",
		"萌新二阶": "#FF0000",
		"萌新三阶": [255, 0, 0, 1],
	};

	// 复写 _drawBook_drawName
	var originDrawBook = core.ui._drawBook_drawName;
	core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
		// 如果没有境界，则直接调用原始代码绘制
		if (!enemy.level) return originDrawBook.call(core.ui, index, enemy, top, left, width);
		// 存在境界，则额外进行绘制
		core.setTextAlign('ui', 'center');
		if (enemy.specialText.length == 0) {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 27, '#DDDDDD', this._buildFont(17, true));
			core.fillText('ui', enemy.level, left + width / 2,
				top + 51, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
		} else {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 20, '#DDDDDD', this._buildFont(17, true), width);
			switch (enemy.specialText.length) {
			case 1:
				core.fillText('ui', enemy.specialText[0], left + width / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'),
					this._buildFont(14, true), width);
				break;
			case 2:
				// Step 1: 计算字体
				var text = enemy.specialText[0] + "  " + enemy.specialText[1];
				core.setFontForMaxWidth('ui', text, width, this._buildFont(14, true));
				// Step 2: 计算总宽度
				var totalWidth = core.calWidth('ui', text);
				var leftWidth = core.calWidth('ui', enemy.specialText[0]);
				var rightWidth = core.calWidth('ui', enemy.specialText[1]);
				// Step 3: 绘制
				core.fillText('ui', enemy.specialText[0], left + (width + leftWidth - totalWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'));
				core.fillText('ui', enemy.specialText[1], left + (width + totalWidth - rightWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[1] || '#FF6A6A'));
				break;
			default:
				core.fillText('ui', '多属性...', left + width / 2,
					top + 38, '#FF6A6A', this._buildFont(14, true), width);
			}
			core.fillText('ui', enemy.level, left + width / 2,
				top + 56, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
		}
	}

	// 也可以复写其他的属性颜色如怪物攻防等，具体参见下面的例子的注释部分
	core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
		// 绘制第一行
		core.setTextAlign('ui', 'left');
		var b13 = this._buildFont(13, true),
			f13 = this._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 9 / 25,
			col3 = left + width * 17 / 25;
		core.fillText('ui', '生命', col1, position, '#66ff00', f13);
		core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, /*'red'*/ null, b13);
		core.fillText('ui', '攻击', col2, position, '#ff0033', f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 30, position, /* '#FF0000' */ null, b13);
		core.fillText('ui', '防御', col3, position, '#00FFFF', f13);
		core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 30, position, /* [255, 0, 0, 1] */ null, b13);
	}
},
    "multiHeros": function () {
		// 多角色插件
		// Step 1: 启用本插件
		// Step 2: 定义每个新的角色各项初始数据（参见下方注释）
		// Step 3: 在游戏中的任何地方都可以调用 `core.changeHero()` 进行切换；也可以 `core.changeHero(1)` 来切换到某个具体的角色上

		// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
		var __enable = false;
		if (!__enable) return;

		// 在这里定义全部的新角色属性
		// 请注意，在这里定义的内容不会多角色共用，在切换时会进行恢复。
		// 你也可以自行新增或删除，比如不共用金币则可以加上"money"的初始化，不共用道具则可以加上"items"的初始化，
		// 多角色共用hp的话则删除hp，等等。总之，不共用的属性都在这里进行定义就好。
		var hero1 = {
			"floorId": "MT0", // 该角色初始楼层ID；如果共用楼层可以注释此项
			"image": "brave.png", // 角色的行走图名称；此项必填不然会报错
			"name": "1号角色",
			"lv": 1,
			"hp": 10000, // 如果HP共用可注释此项
			"atk": 1000,
			"def": 1000,
			"mdef": 0,
			// "money": 0, // 如果要不共用金币则取消此项注释
			// "exp": 0, // 如果要不共用经验则取消此项注释
			"loc": { "x": 0, "y": 0, "direction": "up" }, // 该角色初始位置；如果共用位置可注释此项
			"items": {
				"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
				// "constants": {}, // 如果不共用永久道具（如手册）可取消注释此项
				"equips": {}, // 如果共用在背包的装备可注释此项
			},
			"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
		};
		// 也可以类似新增其他角色
		// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。
		// var hero2 = { ...

		var heroCount = 2; // 包含默认角色在内总共多少个角色，该值需手动修改。

		this.initHeros = function () {
			core.setFlag("hero1", core.clone(hero1)); // 将属性值存到变量中
			// core.setFlag("hero2", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行

			// 检测是否存在装备
			if (hero1.equipment) {
				if (!hero1.items || !hero1.items.equips) {
					alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
				}
				// 存99号套装为全空
				var saveEquips = core.getFlag("saveEquips", []);
				saveEquips[99] = [];
				core.setFlag("saveEquips", saveEquips);
			} else {
				if (hero1.items && hero1.items.equips) {
					alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
				}
			}
		}

		// 在游戏开始注入initHeros
		var _startGame_setHard = core.events._startGame_setHard;
		core.events._startGame_setHard = function () {
			_startGame_setHard.call(core.events);
			core.initHeros();
		}

		// 切换角色
		// 可以使用 core.changeHero() 来切换到下一个角色
		// 也可以 core.changeHero(1) 来切换到某个角色（默认角色为0）
		this.changeHero = function (toHeroId) {
			var currHeroId = core.getFlag("heroId", 0); // 获得当前角色ID
			if (toHeroId == null) {
				toHeroId = (currHeroId + 1) % heroCount;
			}
			if (currHeroId == toHeroId) return;

			var saveList = Object.keys(hero1);

			// 保存当前内容
			var toSave = {};
			// 暂时干掉 drawTip 和 音效，避免切装时的提示
			var _drawTip = core.ui.drawTip;
			core.ui.drawTip = function () { };
			var _playSound = core.control.playSound;
			core.control.playSound = function () { }
			// 记录当前录像，因为可能存在换装问题
			core.clearRouteFolding();
			var routeLength = core.status.route.length;
			// 优先判定装备
			if (hero1.equipment) {
				core.items.quickSaveEquip(100 + currHeroId);
				core.items.quickLoadEquip(99);
			}

			saveList.forEach(function (name) {
				if (name == 'floorId') toSave[name] = core.status.floorId; // 楼层单独设置
				else if (name == 'items') {
					toSave.items = core.clone(core.status.hero.items);
					Object.keys(toSave.items).forEach(function (one) {
						if (!hero1.items[one]) delete toSave.items[one];
					});
				} else toSave[name] = core.clone(core.status.hero[name]); // 使用core.clone()来创建新对象
			});

			core.setFlag("hero" + currHeroId, toSave); // 将当前角色信息进行保存
			var data = core.getFlag("hero" + toHeroId); // 获得要切换的角色保存内容

			// 设置角色的属性值
			saveList.forEach(function (name) {
				if (name == "floorId");
				else if (name == "items") {
					Object.keys(core.status.hero.items).forEach(function (one) {
						if (data.items[one]) core.status.hero.items[one] = core.clone(data.items[one]);
					});
				} else {
					core.status.hero[name] = core.clone(data[name]);
				}
			});
			// 最后装上装备
			if (hero1.equipment) {
				core.items.quickLoadEquip(100 + toHeroId);
			}

			core.ui.drawTip = _drawTip;
			core.control.playSound = _playSound;
			core.status.route = core.status.route.slice(0, routeLength);
			core.control._bindRoutePush();

			// 插入事件：改变角色行走图并进行楼层切换
			var toFloorId = data.floorId || core.status.floorId;
			var toLoc = data.loc || core.status.hero.loc;
			core.insertAction([
				{ "type": "setHeroIcon", "name": data.image || "hero.png" }, // 改变行走图
				// 同层则用changePos，不同层则用changeFloor；这是为了避免共用楼层造成触发eachArrive
				toFloorId != core.status.floorId ? {
					"type": "changeFloor",
					"floorId": toFloorId,
					"loc": [toLoc.x, toLoc.y],
					"direction": toLoc.direction,
					"time": 0 // 可以在这里设置切换时间
				} : { "type": "changePos", "loc": [toLoc.x, toLoc.y], "direction": toLoc.direction }
				// 你还可以在这里执行其他事件，比如增加或取消跟随效果
			]);
			core.setFlag("heroId", toHeroId); // 保存切换到的角色ID
		}
	},
    "heroFourFrames": function () {
		// 样板的勇士/跟随者移动时只使用2、4两帧，观感较差。本插件可以将四帧全用上。

		// 是否启用本插件
		var __enable = true;
		if (!__enable) return;

		["up", "down", "left", "right"].forEach(function (one) {
			// 指定中间帧动画
			core.material.icons.hero[one].midFoot = 2;
		});

		var heroMoving = function (timestamp) {
			if (core.status.heroMoving <= 0) return;
			if (timestamp - core.animateFrame.moveTime > core.values.moveSpeed) {
				core.animateFrame.leftLeg++;
				core.animateFrame.moveTime = timestamp;
			}
			core.drawHero(['stop', 'leftFoot', 'midFoot', 'rightFoot'][core.animateFrame.leftLeg % 4], 4 * core.status.heroMoving);
		}
		core.registerAnimationFrame('heroMoving', true, heroMoving);

		core.events._eventMoveHero_moving = function (step, moveSteps) {
			var curr = moveSteps[0];
			var direction = curr[0], x = core.getHeroLoc('x'), y = core.getHeroLoc('y');
			// ------ 前进/后退
			var o = direction == 'backward' ? -1 : 1;
			if (direction == 'forward' || direction == 'backward') direction = core.getHeroLoc('direction');
			var faceDirection = direction;
			if (direction == 'leftup' || direction == 'leftdown') faceDirection = 'left';
			if (direction == 'rightup' || direction == 'rightdown') faceDirection = 'right';
			core.setHeroLoc('direction', direction);
			if (curr[1] <= 0) {
				core.setHeroLoc('direction', faceDirection);
				moveSteps.shift();
				return true;
			}
			if (step <= 4) core.drawHero('stop', 4 * o * step);
			else if (step <= 8) core.drawHero('leftFoot', 4 * o * step);
			else if (step <= 12) core.drawHero('midFoot', 4 * o * (step - 8));
			else if (step <= 16) core.drawHero('rightFoot', 4 * o * (step - 8)); // if (step == 8) {
			if (step == 8 || step == 16) {
				core.setHeroLoc('x', x + o * core.utils.scan2[direction].x, true);
				core.setHeroLoc('y', y + o * core.utils.scan2[direction].y, true);
				core.updateFollowers();
				curr[1]--;
				if (curr[1] <= 0) moveSteps.shift();
				core.setHeroLoc('direction', faceDirection);
				return step == 16;
			}
			return false;
		}
	},
    "routeFixing": function () {
		// 是否开启本插件，true 表示启用，false 表示禁用。
		var __enable = true;
		if (!__enable) return;
		/*
		 使用说明：启用本插件后，录像回放时您可以用数字键1或6分别切换到原速或24倍速，
		 暂停播放时按数字键7（电脑按N）可以单步播放。（手机端可以点击难度单词切换出数字键）
		 数字键2-5可以进行录像自助精修，具体描述见下（实际弹窗请求您输入时不要带有任何空格）：
		 
		 up down left right 勇士向某个方向「行走一步或撞击」
		 item:ID 使用某件道具，如 item:bomb 表示使用炸弹
		 unEquip:n 卸掉身上第(n+1)件装备（n从0开始），如 unEquip:1 默认表示卸掉盾牌
		 equip:ID 穿上某件装备，如 equip:sword1 表示装上铁剑
		 saveEquip:n 将身上的当前套装保存到第n套快捷套装（n从0开始）
		 loadEquip:n 快捷换上之前保存好的第n套套装
		 fly:ID 使用楼传飞到某一层，如 fly:MT10 表示飞到主塔10层
		 choices:none 确认框/选择项「超时」（作者未设置超时时间则此项视为缺失）
		 choices:n 确认框/选择项选择第(n+1)项（选择项n从0开始，确认框n为0表示「确定」，1表示「取消」）
		 选择项n为负数时表示选择倒数第 -n 项，如 -1 表示最后一项（V2.8.2起标准全局商店的「离开」项）
		 此项缺失的话，确认框将选择作者指定的默认项（初始光标位置），选择项将弹窗请求补选（后台录像验证中选最后一项，可以复写函数来修改）
		 shop:ID 打开某个全局商店，如 shop:itemShop 表示打开道具商店。因此连载塔千万不要中途修改商店ID！
		 turn 单击勇士（Z键）转身，core.turnHero() 会产生此项，因此通过事件等方式强制让勇士转向应该用 core.setHeroLoc()
		 turn:dir 勇士转向某个方向，dir 可以为 up down left right（此项一般是读取自动存档产生的，属于样板的不良特性，请勿滥用）
		 getNext 轻按获得身边道具，优先获得面前的（面前没有则按上下左右顺序依次获得），身边如果没有道具则此项会被跳过
		 input:none “等待用户操作事件”中超时（作者未设置超时时间则此项会导致报错）
		 input:xxx 可能表示“等待用户操作事件”的一个操作（如按键操作将直接记录 input:keycode ），
		 也可能表示一个“接受用户输入数字”的输入，后者的情况下 xxx 为输入的整数。此项缺失的话前者将直接报错，后者将用0代替（后者现在支持负数了）
		 input2:xxx 可能表示“读取全局存储（core.getGlobal）”读取到的值，也可能表示一个“接受用户输入文本”的输入，
		 两种情况下 xxx 都为 base64 编码。此项缺失的话前者将重新现场读取，后者将用空字符串代替
		 no 走到可穿透的楼梯上不触发楼层切换事件，通过本插件可以让勇士停在旁边没有障碍物的楼梯上哦～
		 move:x:y 尝试瞬移到 [x,y] 点（不改变朝向），该点甚至可以和勇士相邻或者位于视野外
		 key:n 松开键值为n的键，如 key:49 表示松开大键盘数字键1，默认会触发使用破墙镐
		 click:n:px:py 点击自绘状态栏，n为0表示横屏1表示竖屏，[px,py] 为点击的像素坐标
		 random:n 生成了随机数n，即 core.rand2(num) 的返回结果，n必须在 [0,num-1] 范围，num必须为正整数。此项缺失将导致现场重新随机生成数值，可能导致回放结果不一致！
		 作者自定义的新项（一般为js对象，可以先JSON.stringify()再core.encodeBase64()得到纯英文数字的内容）需要用(半角圆括弧)括起来。
		 
		 当您使用数字键5将一些项追加到即将播放内容的开头时，请注意要逆序逐项追加，或者每追加一项就按下数字键7或字母键N单步播放一步。
		 但是【input input2 random choices】是被动读取的，单步播放如果触发了相应的事件就会连续读取，这时候只能提前逐项追加好。
		 电脑端熟练以后推荐直接在控制台操作 core.status.route 和 core.status.replay.toReplay（后者录像回放时才有），配合 core.push() 和 core.unshift() 更加灵活自由哦！
		 */
		core.actions.registerAction('onkeyUp', '_sys_onkeyUp_replay', function (e) {
			if (this._checkReplaying()) {
				if (e.keyCode == 27) // ESCAPE
					core.stopReplay();
				else if (e.keyCode == 90) // Z
					core.speedDownReplay();
				else if (e.keyCode == 67) // C
					core.speedUpReplay();
				else if (e.keyCode == 32) // SPACE
					core.triggerReplay();
				else if (e.keyCode == 65) // A
					core.rewindReplay();
				else if (e.keyCode == 83) // S
					core.control._replay_SL();
				else if (e.keyCode == 88) // X
					core.control._replay_book();
				else if (e.keyCode == 33 || e.keyCode == 34) // PgUp/PgDn
					core.control._replay_viewMap();
				else if (e.keyCode == 78) // N
					core.stepReplay();
				else if (e.keyCode == 84) // T
					core.control._replay_toolbox();
				else if (e.keyCode == 81) // Q
					core.control._replay_equipbox();
				else if (e.keyCode == 66) // B
					core.ui._drawStatistics();
				else if (e.keyCode == 49 || e.keyCode == 54) // 1/6，原速/24倍速播放
					core.setReplaySpeed(e.keyCode == 49 ? 1 : 24);
				else if (e.keyCode > 49 && e.keyCode < 54) { // 2-5，录像精修
					switch (e.keyCode - 48) {
						case 2: // pop
							alert("您已移除已录制内容的最后一项：" + core.status.route.pop());
							break;
						case 3: // push
							core.utils.myprompt("请输入您要追加到已录制内容末尾的项：", "", function (value) {
								if (value != null) core.status.route.push(value);
							});
							break;
						case 4: // shift
							alert("您已移除即将播放内容的第一项：" + core.status.replay.toReplay.shift());
							break;
						case 5: // unshift
							core.utils.myprompt("请输入您要追加到即将播放内容开头的项：", "", function (value) {
								if (value != null) core.status.replay.toReplay.unshift(value);
							});
					}
				}
				return true;
			}
		}, 100);
	},
    "numpad": function () {
		// 样板自带的整数输入事件为白屏弹窗且可以误输入任意非法内容但不支持负整数，观感较差。本插件可以将其美化成仿RM样式，使其支持负整数同时带有音效
		// 另一方面，4399等第三方平台不允许使用包括 core.myprompt() 和 core.myconfirm() 在内的弹窗，因此也需要此插件来替代，不然类似生命魔杖的道具就不好实现了
		// 关于负整数输入，V2.8.2原生支持其录像的压缩和解压，只是默认的 core.events._action_input() 函数将负数取了绝对值，可以只复写下面的 core.isReplaying() 部分来取消

		// 是否启用本插件，false表示禁用，true表示启用
		var __enable = true;
		if (!__enable) return;

		core.events._action_input = function (data, x, y, prefix) { // 复写整数输入事件
			if (core.isReplaying()) { // 录像回放时，处理方式不变，但增加负整数支持
				core.events.__action_getInput(core.replaceText(data.text, prefix), false, function (value) {
					value = parseInt(value) || 0; // 去掉了取绝对值的步骤
					core.status.route.push("input:" + value);
					core.setFlag("input", value);
					core.doAction();
				});
			} else {
				// 正常游戏中，采用暂停录制的方式然后用事件流循环“绘制-等待-变量操作”三板斧实现（按照13*13适配的）。
				// 您可以自行修改循环内的内容来适配15*15或其他需求，或干脆作为公共事件编辑。
				core.insertAction([
					// 记录当前录像长度，下面的循环结束后裁剪。达到“暂停录制”的效果
					{ "type": "function", "function": "function(){flags['@temp@length']=core.status.route.length}" },
					{ "type": "setValue", "name": "flag:input", "value": "0" },
					{
						"type": "while",
						"condition": "true",
						"data": [
							{ "type": "drawBackground", "background": "winskin.png", "x": 16, "y": 16, "width": 384, "height": 384 },
							{ "type": "drawIcon", "id": "X10181", "x": 32, "y": 288 },
							{ "type": "drawIcon", "id": "X10185", "x": 64, "y": 288 },
							{ "type": "drawIcon", "id": "X10186", "x": 96, "y": 288 },
							{ "type": "drawIcon", "id": "X10187", "x": 128, "y": 288 },
							{ "type": "drawIcon", "id": "X10188", "x": 160, "y": 288 },
							{ "type": "drawIcon", "id": "X10189", "x": 192, "y": 288 },
							{ "type": "drawIcon", "id": "X10193", "x": 224, "y": 288 },
							{ "type": "drawIcon", "id": "X10194", "x": 256, "y": 288 },
							{ "type": "drawIcon", "id": "X10195", "x": 288, "y": 288 },
							{ "type": "drawIcon", "id": "X10196", "x": 320, "y": 288 },
							{ "type": "drawIcon", "id": "X10197", "x": 352, "y": 288 },
							{ "type": "drawIcon", "id": "X10286", "x": 32, "y": 352 },
							{ "type": "drawIcon", "id": "X10169", "x": 96, "y": 352 },
							{ "type": "drawIcon", "id": "X10232", "x": 128, "y": 352 },
							{ "type": "drawIcon", "id": "X10185", "x": 320, "y": 352 },
							{ "type": "drawIcon", "id": "X10242", "x": 352, "y": 352 },
							{ "type": "fillBoldText", "x": 48, "y": 256, "style": [255, 255, 255, 1], "font": "bold 32px Consolas", "text": "${flag:input}" },
							{ "type": "fillBoldText", "x": 32, "y": 48, "style": [255, 255, 255, 1], "font": "16px Consolas", "text": core.replaceText(data.text, prefix) },
							{
								"type": "wait",
								"forceChild": true,
								"data": [{
									"case": "keyboard",
									"keycode": "48,49,50,51,52,53,54,55,56,57",
									"action": [
										// 按下数字键，追加到已输入内容的末尾，但禁止越界。变量：keycode-48就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:keycode-48)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:keycode-48)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "189",
									"action": [
										// 按下减号键，变更已输入内容的符号
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "8",
									"action": [
										// 按下退格键，从已输入内容的末尾删除一位
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "27",
									"action": [
										// 按下ESC键，清空已输入内容
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "13",
									"action": [
										// 按下回车键，确定
										{ "type": "break", "n": 1 },
									]
								},
								{
									"case": "mouse",
									"px": [32, 63],
									"py": [288, 320],
									"action": [
										// 点击减号，变号。右边界写63防止和下面重叠
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "mouse",
									"px": [64, 384],
									"py": [288, 320],
									"action": [
										// 点击数字，追加到已输入内容的末尾，但禁止越界。变量：x-2就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:x-2)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:x-2)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "mouse",
									"px": [32, 64],
									"py": [352, 384],
									"action": [
										// 点击左箭头，退格
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "mouse",
									"px": [96, 160],
									"py": [352, 384],
									"action": [
										// 点击CE，清空
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "mouse",
									"px": [320, 384],
									"py": [352, 384],
									"action": [
										// 点击OK，确定
										{ "type": "break", "n": 1 },
									]
								}
								]
							}
						]
					},
					{ "type": "clearMap" },
					// 裁剪录像，只保留'input:n'，然后继续录制
					{ "type": "function", "function": "function(){core.status.route.splice(flags['@temp@length']);core.status.route.push('input:'+core.getFlag('input',0))}" }
				], x, y);
				core.events.doAction();
			}
		}
	},
    "sprites": function () {
	// 在此增加新插件
	// 基于canvas的sprite化，摘编整理自万宁魔塔
	// 
	// ----------------------------------- 第一部分 必装 js代码 ----------------------------------- //
	// 
	// 关于新增的on方法说明：
	// 该方法类似与样板的registerAction，它允许你能够使用与样板类似的api对sprite进行操作
	// on(type, handler)
	// 其中type为操作类型，常见的有click mousedown mouseup mousemove mouseenter mouseleave wheel keydown keyup touchstart touchend touchmove
	// 这些操作类型分为四类，第一类是鼠标事件，上述的操作中wheel之前的事件均为鼠标事件，它的监听形式为
	// sprite.on(type, (px, py) => { code });  其中px, py为参数，为点击的横纵坐标（相对sprite左上角）
	// 第二类是滚轮事件，只有一个事件wheel，它的监听形式为
	// sprite.on('wheel', (dy, dx, dz) => { code });  dy为滚轮的纵向滑动量，dx为滚轮的横向滑动量，dz为滚轮在垂直屏幕方向上的滑动量（？很奇怪，但是html确实提供了这个东西
	// 第三类是键盘事件，keydown和keyup都是键盘事件，它的监听形式为
	// sprite.on(type, (key, keyCode, altKey, ctrlKey, shiftKey) => { code });
	// 其中key为按键名称，可以通过console.log自行尝试，需要注意的是这个东西是区分大小写的，keyCode是与样板相同的keycode，可自行在网上查询
	// 后面三个都是布尔值（true or false）分别为alt键、ctrl键、shift键是否被按下
	// 第四类是触摸屏操作（注意click可能不会被触屏触发），包括touchstart touchend touchmove，有两种使用方法
	// 第一种：sprite.on(type, ([px, py]) => { code }); px py是点击的坐标，相对于sprite左上角
	// 第二种：sprite.on(type, (...locs) => { code }); locs是由[px, py]组成的数组，比如locs[0][0]就是第一个点击点的横坐标，locs[2][1]就是第三个点击点的纵坐标

	/* ---------------- 用法说明 ---------------- *
	 * 1. 创建sprite: const sprite = new Sprite(x, y, w, h, z, reference, name);
	 *   其中x y w h为画布的横纵坐标及长宽，reference为参考系，只能填game（相对于游戏画面）和window（相对于窗口）
	 *   且当为相对游戏画面时，长宽与坐标将会乘以放缩比例（相当于用createCanvas创建）
	 *   z为纵深，表示不同元素之间的覆盖关系，大的覆盖小的
	 *   name为自定义名称，可以不填
	 * 2. 删除: sprite.destroy();
	 * 3. 设置css特效: sprite.setCss(css);
	 *   其中css直接填 box-shadow: 0px 0px 10px black;的形式即可，与style标签与css文件内写法相同
	 *   对于已设置的特效，如果之后不需要再次设置，可以不填
	 * 4. 添加事件监听器: sprite.addEventListener(); 用法与html元素的addEventListener完全一致
	 * 5. 移除事件监听器: sprite.removeEventListener(); 用法与html元素的removeEventListener完全一致
	 * 6. 属性列表
	 *   (1) sprite.x | sprite.y | sprite.width | sprite.height | sprite.zIndex | sprite.reference 顾名思义
	 *   (2) sprite.canvas 该sprite的画布
	 *   (3) sprite.context 该画布的CanvasRenderingContext2d对象，即样板中常见的ctx
	 *   (4) sprite.count 不要改这个玩意
	 * 7. 使用样板api进行绘制
	 *   示例：
	 *   var ctx = sprite.context;
	 *   core.fillText(ctx, 'xxx', 100, 100);
	 *   core.fillRect(ctx, 0, 0, 50, 50);
	 *   当然也可以使用原生js
	 *   ctx.moveTo(0, 0);
	 *   ctx.bezierCurveTo(50, 50, 100, 0, 100, 50);
	 *   ctx.stroke();
	 * ---------------- 用法说明 ---------------- */

	const sprites = {};

	// 终于能用es6了（恼
	class Sprite {
		constructor(x, y, w, h, z, reference, name) {
			this.x = x;
			this.y = y;
			this.width = w;
			this.height = h;
			this.zIndex = z;
			this.reference = reference;
			/** @type {HTMLCanvasElement} */
			this.canvas = null;
			/** @type {CanvasRenderingContext2D} */
			this.context = null;
			this.count = 0;
			this.name = name;
			this.key = [];
			this.init();
		}

		init() {
			const name = this.name || `_sprite_${Sprite.count}`;
			this.name = name;
			if (this.reference === 'window') {
				const canvas = document.createElement('canvas');
				this.canvas = canvas;
				this.context = canvas.getContext('2d');
				canvas.width = this.width;
				canvas.height = this.height;
				canvas.style.width = this.width + 'px';
				canvas.style.height = this.height + 'px';
				canvas.style.position = 'absolute';
				canvas.style.top = this.y + 'px';
				canvas.style.left = this.x + 'px';
				canvas.style.zIndex = this.zIndex.toString();
				document.body.appendChild(canvas);
			} else {
				this.context = core.createCanvas(name, this.x, this.y, this.width, this.height, this.zIndex);
				this.canvas = this.context.canvas;
				this.count = Sprite.count;
				this.canvas.style.pointerEvents = 'auto';
			}
			Sprite.count++;
			sprites[this.name] = this;
		}

		setCss(css) {
			css = css.replace('\n', ';').replace(';;', ';');
			const effects = css.split(';');
			const canvas = this.canvas;
			effects.forEach(v => {
				const content = v.split(':');
				let name = content[0];
				let value = content[1];
				name = name.trim().split('-').reduce((pre, curr, i, a) => {
					if (i === 0 && curr !== '')
						return curr;
					if (a[0] === '' && i === 1)
						return curr;
					return pre + curr.toUpperCase()[0] + curr.slice(1);
				}, '');
				if (name in canvas.style)
					canvas.style[name] = value;
			});
			return this;
		}

		move(x, y, isDelta) {
			if (x !== undefined && x !== null)
				this.x = x;
			if (y !== undefined && y !== null)
				this.y = y;
			if (this.reference === 'window') {
				var ele = this.canvas;
				ele.style.left = x + (isDelta ? parseFloat(ele.style.left) : 0) + 'px';
				ele.style.top = y + (isDelta ? parseFloat(ele.style.top) : 0) + 'px';
			} else
				core.relocateCanvas(this.context, x, y, isDelta);
			return this;
		}

		resize(w, h, styleOnly) {
			if (w !== undefined && w !== null)
				this.width = w;
			if (h !== undefined && h !== null)
				this.height = h;
			if (this.reference === 'window') {
				const ele = this.canvas;
				ele.style.width = w + 'px';
				ele.style.height = h + 'px';
				if (!styleOnly) {
					ele.width = w;
					ele.height = h;
				}
			} else
				core.resizeCanvas(this.context, w, h, styleOnly);
			return this;
		}

		rotate(angle, cx, cy) {
			if (this.reference === 'window') {
				const left = this.x;
				const top = this.y;
				this.canvas.style.transformOrigin = (cx - left) + 'px ' + (cy - top) + 'px';
				if (angle === 0) {
					canvas.style.transform = '';
				} else {
					canvas.style.transform = 'rotate(' + angle + 'deg)';
				}
			} else {
				core.rotateCanvas(this.context, angle, cx, cy);
			}
			return this;
		}

		destroy() {
			if (this.reference === 'window') {
				if (this.canvas)
					document.body.removeChild(this.canvas);
			} else {
				core.deleteCanvas(this.name);
			}
			this.key.forEach(v => document.removeEventListener(v[0], v[1]));
			sprites[this.name] = void 0;
		}

		/**
		 * 类似样板registerAction接口，但是是以该sprite的左上角为(0,0)计算的
		 * @param {keyof HTMLElementEventMap} type 
		 * @param {(...param: any[]) => void} handler 
		 */
		on(type, handler) {
			if (this.reference !== 'game') throw new ReferenceError(`当sprite的reference为window时，不可使用该函数`);
			const mouse = [
				'auxclick', 'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseup',
				'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover'
			];
			const key = [
				'keydown', 'keypress', 'keyup'
			];
			const touch = [
				'touchstart', 'touchend', 'touchcancel', 'touchmove'
			]
			if (mouse.includes(type)) {
				this.addEventListener(type, e => {
					const px = e.offsetX / core.domStyle.scale,
						py = e.offsetY / core.domStyle.scale;
					handler(px, py);
				})
			} else if (type === 'wheel') {
				this.addEventListener('wheel', e => {
					handler(e.deltaY, e.deltaX, e.deltaZ);
				});
			} else if (key.includes(type)) {
				// 键盘事件只能加到document上
				const listener = e => {
					handler(e.key, e.keyCode, e.altKey, e.ctrlKey, e.shiftKey);
				}
				this.key.push([type, listener]);
				document.addEventListener(type, listener)
			} else if (touch.includes(type)) {
				this.addEventListener(type, e => {
					/** @type {TouchList} */
					const touches = e.touches;
					const locs = [];
					for (let i = 0; i < touches.length; i++) {
						const t = touches[i];
						const { x, y } = core.actions._getClickLoc(t.clientX, t.clientY);
						const px = x / core.domStyle.scale,
							py = y / core.domStyle.scale;
						locs.push([px, py]);
					}
					handler(...locs);
				})
			}
		}

		addEventListener() {
			this.canvas.addEventListener.apply(this.canvas, arguments);
		}

		removeEventListener() {
			this.canvas.removeEventListener.apply(this.canvas, arguments);
		}
	}

	this.getSprite = function (name) {
		const s = sprites[name];
		//if (!s) throw new ReferenceError(`不能获得不存在的sprite`);
		return sprites[name];
	}

	Sprite.count = 0;

	window.Sprite = Sprite;
},
    "hotReload": function () {
	// 该插件可自定义空间很大，自定义内容请看注释

	// ------------------------- 安装说明 ------------------------- //
	// 先安装基于canvas的sprite化插件（2.10.0以上自带）
	// 确保自己的编辑器已安装造塔群内的编辑器升级压缩包（在HTML5魔塔样板文件夹内，2.10.1以上样板自带）
	// 再将以下代码复制进插件中
	// 提供的api请看以this.xxx = function开头的函数，函数前会有函数说明及参数说明，调用时只需core.plugin.xxx(参数)即可

	// ------------------------- 使用说明 ------------------------- //
	/*
	 * 直接复制进插件中，然后添加一个快捷键或道具效果为core.plugin.drawFlyMap()即可使用，不需额外设置
	 * 楼层id中不要出现下划线
	 * 该插件具体功能有：
	 * 1.绘制区域内的地图
	 * 2.可以拖动地图
	 * 3.点击地图可直接传送至目标地图，同时降低背景的不透明度，方便观察
	 * 4.滚轮或双指可以放缩绘制内容
	 * 5.放缩较大时，绘制地图的缩略图，可能会比较卡，但移动不会卡
	 * 6.整合漏怪检测，如果想忽略怪物，请在下方改动或用脚本修改core.plugin.ignoreEnemies，类型为数组
	 * 7.整合区域显示，所有单独或连在一起的地图会被视为一个区域
	 * 8.键盘操作，上下左右移动
	 */

	// ------------------------- 插件说明 ------------------------- //
	/*
	 * 该插件注释极其详细，可以帮助那些想要提升代码力，但实力有不足的作者
	 * 注意！！！该插件难度极大，没有代码底力的不建议研究
	 * 该插件涉及部分较为高级的算法，如bfs
	 */

	// 录像验证直接干掉这个插件
	if (main.replayChecking || main.mode === 'editor') return;

	// ----- 不可自定义 杂七杂八的变量
	/** @type {{[x: string]: BFSResult}} */
	let mapCache = {}; // 地图缓存
	let drawCache = {}; // 绘制信息缓存
	let status = 'none'; // 当前的绘制状态
	/** @type {{[x: string]: Sprite}} */
	let sprites = {}; // 当前所有的sprite
	/** @type {{[x: string]: Sprite}} */
	let canDrag = {}; // 可以拖拽的sprite
	/** @type {{[x: string]: Button}} */
	let areaSprite = {}; // 区域列表对应的sprite
	let clicking = false; // 是否正在点击，用于拖拽判定
	let drawingMap = ''; // 正在绘制的中心楼层
	let nowScale = 0; // 当前绘制的放缩比例
	let lastTouch = {}; // 上一次的单点点击信息
	let lastLength = 0; // 手机端缩放时上一次的两指间距离
	let nowDepth = 0; // 当前的遍历深度
	let drawedThumbnail = {}; // 已经绘制过的缩略图
	let moved = false; // 鼠标按下后是否移动了
	let noBorder = false; // 是否是无边框拼接模式
	let lastScale = 0; // 上一次缩放，用于优化缩略图绘制
	let showEnemy = false; // 是否显示漏怪
	let areaPage = 0; // 区域显示的当前页数
	let nowArea = 0; // 当前区域index
	let selecting = ''; // 选择时当前正在选择的地图

	// ---- 不可自定义，常量
	/** @type {Area} */
	let areas = []; // 区域信息
	const perPage = Math.floor((core._PY_ - 60) / 30); // 区域的每页显示数量

	// ---- 可自定义，默认的切换地图的图块id
	const defaultChange = {
		left: 'leftPortal', // 左箭头
		up: 'upPortal', // 上箭头
		right: 'rightPortal', // 右箭头
		down: 'downPortal', // 下箭头
		upFloor: 'upFloor', // 上楼
		downFloor: 'downFloor' // 下楼
	};
	// ---- 可自定义，默认数值
	const defaultValue = {
		font: 'Verdana', // 默认字体
		scale: 3, // 默认地图缩放比例
		depth: Infinity, // 默认的遍历深度
	};

	// ---- 不可自定义，计算数据
	const dirData = {
		up: [1, 0],
		down: [-1, 0],
		left: [0, 1],
		right: [0, -1],
		upFloor: [0, 0],
		downFloor: [0, 0]
	}

	let ignoreEnemies = this.ignoreEnemies = [];

	let allChangeEntries = Object.entries(defaultChange);

	const reset = core.events.resetGame;
	core.events.resetGame = function () {
		reset.apply(core.events, arguments);
		areas = [];
		// 获取所有分区，使用异步函数，保证不会卡顿
		// 原理是用bfs扫，将所有连在一起的地图合并成一个区域
		(async function () {
			let all = core.floorIds.slice();
			const scanned = {
				[all[0]]: true
			};
			while (all.length > 0) {
				let now = all.shift();
				if (core.status.maps[now].deleted) continue;
				if (!now) return;
				await new Promise(res => {
					const result = bfsSearch(now, Infinity, true);
					mapCache[`${now}_Infinity_false`] = result;
					areas.push({ name: core.floors[now].title, maps: result.order });
					for (const map of result.order) {
						scanned[map] = true;
						all = all.filter(v => !result.order.includes(v));
					}
					res('success');
				});
			}
		})();
	}

	/** 工具按钮 */
	class Button extends Sprite {
		constructor(name, x, y, w, h, text, fontSize = '20px', transition = true) {
			const btn = super(x, y, w, h, 1050, 'game', name);
			this.css(transition);
			setTimeout(() => btn.setCss(`opacity: 1;`), 50);
			const ctx = btn.context;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			core.fillText(ctx, text, w / 2, h / 2, '#fff', `${fontSize} normal`, w - 10);
			sprites[name] = btn;
		}

		css(transition) {
			this.setCss(
				'transition: opacity 0.6s linear, transform 0.2s linear;' +
				'background-color: #aaa;' +
				'box-shadow: 0px 0px 0px black;' +
				(transition ? 'opacity: 0;' : '') +
				'filter: drop-shadow(1px 1px 2px black);' +
				'box-shadow: 0px 0px 4px black;' +
				'cursor: pointer;'
			);
		}
	}

	/** 背景 */
	class Back extends Sprite {
		constructor(name, x, y, w, h, z, color) {
			const sprite = super(x, y, w, h, z, 'game', name);
			sprites[name] = sprite;
			this.setCss(`transition: all 0.6s linear;`);
			setTimeout(() => {
				this.setCss(`background-color: ${color};`);
			}, 50);
		}
	}

	/** 
	 * 获取绘制信息
	 * @param {string?} center 中心地图id
	 * @param {number?} depth 搜索深度
	 * @param {boolean?} noCache 是否不使用缓存
	 * @returns {MapDrawInfo}
	 */
	this.getMapDrawInfo = function (center = core.status.floorId, depth = defaultValue.depth, noCache = false) {
		nowDepth = depth;
		drawingMap = center;
		const id = `${center}_${depth}_${noBorder}`;
		// 检查缓存
		if (drawCache[id] && !noCache) return drawCache[id];
		const map = bfsSearch(center, depth, noCache);
		mapCache[id] = map;
		const res = getDrawInfo(map.res, center, map.order);
		res.upOrDown = map.upOrDown;
		drawCache[id] = res;
		return res;
	}

	/** 
	 * 绘制大地图，可拖动、滚轮缩放、点击对应位置可以楼传等
	 * @param {string} floorId 中心地图的id
	 * @param {number} depth 遍历深度
	 * @param {boolean} noCache 是否不使用缓存
	 * @param {number} scale 绘制的缩放比例
	 */
	this.drawFlyMap = function (floorId = core.status.floorId,
		depth = defaultValue.depth, noCache = false, scale = defaultValue.scale) {

		if (core.isReplaying()) return;

		// 把区域页码归零
		nowArea = areas.findIndex(v => v.maps.includes(core.status.floorId));
		areaPage = 0;
		nowScale = scale;
		selecting = floorId;
		const info = this.getMapDrawInfo(floorId, depth, noCache);
		if (status !== 'scale' && status !== 'border') {
			drawBack();
			drawTools();
		}
		drawMap(info, scale);
		status = 'flyMap';
		core.lockControl();
		core.canvas.data.canvas.style.zIndex = '990';
	}

	/**
	 * 获得某个区域的剩余怪物
	 * @param {string} floorId 区域包含的地图或要扫描的地图
	 * @param {boolean} area 是否扫描整个区域
	 * @returns {RemainEnemy} 怪物总数、所在地图、位置
	 * 返回值格式：{
	 *  rough: 每种怪物的数量及所有怪物的总数，为字符串，每个怪物独占一行
	 *  detail: 每个怪物的所在位置，每个怪物独占一行，以每20个整合成字符串，为字符串数组形式
	 *  data: 怪物数量的原始信息，格式为{ 楼层id: { 'x,y': 怪物id } }
	 * }
	 */
	this.getRemainEnemy = function (floorId = core.status.floorId, area = false) {
		const res = bfsSearch(floorId, Infinity, true);
		// 整合怪物总数
		/** @type {{[x: string]: number}} */
		const category = {};
		const toShow = area ? res.order : [floorId];
		const strArr = [];
		const add = (...num) => num.reduce((pre, cur) => pre + cur, 0);
		const name = (id) => core.material.enemys[id].name;
		const title = (id) => core.status.maps[id].title;
		for (const id of toShow) {
			const enemies = res.enemies[id];
			Object.values(enemies).forEach(v => {
				// 编辑器不支持 ??=，悲
				category[v] = category[v] ?? 0;
				category[v]++;
			})
			// 每个怪物的信息
			strArr.push(...Object.entries(enemies)
				.map(v => `${name(v[1])}    楼层:${title(id)},楼层id:${id},坐标:${v[0]}`));
		}
		// 输出字符串
		const all = `当前${area ? '区域' : '地图'}中剩余怪物数量：${add(...Object.values(category))}`;
		const classified = Object.entries(category).map(v => `${name(v[0])} × ${v[1]}`).join`\n`;
		const detail = [];
		while (strArr.length > 0) {
			detail.push(strArr.splice(0, 20).join`\n`);
		}
		return { rough: `${all}\n${classified}`, detail, data: res.enemies };
	}

	/** 
	 * 广度优先搜索搜索地图路径
	 * @param {string} center 中心地图的id
	 * @param {number} depth 搜索深度
	 * @param {boolean} noCache 是否不使用缓存
	 * @returns {BFSResult} 格式：floorId_x_y_dir: floorId_x_y
	 */
	function bfsSearch(center, depth, noCache) {
		// 检查缓存
		const id = `${center}_${depth}_${noBorder}`;
		if (mapCache[id] && !noCache) return mapCache[id];
		const used = {
			[center]: true
		}; // 搜索过的楼层
		let queue = [];
		let stack = [center]; // 当前栈
		let nowDepth = -1;
		const mapOrder = [center]; // 遍历顺序，顺便还能记录遍历了哪些楼层

		const res = {}; // 输出结果，格式：floorId_x_y_dir: floorId_x_y
		const enemies = {};
		const upOrDown = {};

		// 开始循环搜索
		while (nowDepth < depth && stack.length > 0) {
			const now = stack.shift(); // 当前id
			if (core.status.maps[now].deleted) continue;
			const blocks = core.getMapBlocksObj(now); // 获取当前地图的每点的事件
			enemies[now] = {};
			// 遍历，获取可以传送的点，只检测绿点事件，因此可用红点事件进行传送来实现分区功能
			for (const i in blocks) {
				const block = blocks[i];
				// 整合漏怪检测，所以要检测怪物
				if (block.event.trigger === 'battle') {
					const id = block.event.id;
					if (ignoreEnemies.includes(id)) continue;
					else enemies[now][i] = block.event.id;
					continue;
				}
				// 检测触发器是否为切换楼层，不是则直接跳过
				if (block.event.trigger !== 'changeFloor') continue;
				const dirEntries = allChangeEntries.find(v => v[1] === block.event.id);
				// 如果不是那六种传送门，直接忽略
				if (!dirEntries) continue;
				const data = block.event.data;
				const dir = dirEntries[0];
				const route = `${now}_${i.replace(',', '_')}_${dir}`;
				const target = `${data.floorId}_${data.loc.join('_')}`;
				if (now[0] != data.floorId[0] || data.floorId[1] != now[1]) continue;
				if (!used[data.floorId]) {
					if (dir === 'upFloor' || dir === 'downFloor') {
						upOrDown[now] = upOrDown[id] ?? [];
						upOrDown[now].push(dir);
					}
					queue.push(data.floorId); // 没有搜索过，则加入栈中
					mapOrder.push(data.floorId);
					used[data.floorId] = true;
				}
				res[route] = target;
			}
			if (stack.length === 0) {
				stack = queue;
				queue = [];
				nowDepth++;
			}
			if (stack.length === 0 && queue.length === 0) break;
		}
		return { res, order: mapOrder, enemies, upOrDown };
	}

	/**
	 * 提供地图的绘制信息
	 * @param {{[x: string]: string}} map 要绘制的地图，格式：floorId_x_y_dir: floorId_x_y
	 * @param {string} center 中心地图的id
	 * @param {string[]} order 遍历顺序
	 * @returns {MapDrawInfo} 地图的绘制信息
	 */
	function getDrawInfo(map, center, order) {
		// 先根据地图id分类，从而确定每个地图连接哪些地图，同时方便处理
		const links = {};
		for (const i in map) {
			const splitted = i.split('_');
			const id = splitted[0]
			if (!links[id]) links[id] = {};
			links[id][i] = map[i];
		}
		// 分类完毕，然后根据连接点先计算出各个地图的坐标，然后再进行判断
		const centerFloor = core.status.maps[center];
		const visitedCenter = core.hasVisitedFloor(center);
		const locs = { // 格式：[中心x, 中心y, 宽, 高, 是否到达过]
			[center]: [0, 0, centerFloor.width, centerFloor.height, visitedCenter]
		};
		const lines = {}; // 地图间的连线
		// 可以上楼下楼的地图
		const upOrDown = {};
		for (const id of order) {
			const now = links[id];
			// 遍历每一个地图的连接情况
			for (const from in now) {
				const to = now[from];
				// 先根据from to计算物理位置
				const fromData = from.split('_'),
					toData = to.split('_');
				const dir = fromData[3];
				if (dir === 'upFloor' || dir === 'downFloor') continue;
				if (!defaultChange[dir]) continue;
				const v = dirData[dir][1], // 竖直数值
					h = dirData[dir][0], // 水平数值
					ha = Math.abs(h),
					va = Math.abs(v);
				const fx = parseInt(fromData[1]), // fromX
					fy = parseInt(fromData[2]), // fromY
					tx = parseInt(toData[1]), // toX
					ty = parseInt(toData[2]), // toY
					ff = id, // fromFloorId
					tf = toData[0]; // toFloorId
				const fromFloor = core.status.maps[ff],
					toFloor = core.status.maps[tf];
				const fhw = Math.floor(fromFloor.width / 2), // fromFloorHalfWidth
					fhh = Math.floor(fromFloor.height / 2),
					thw = Math.floor(toFloor.width / 2),
					thh = Math.floor(toFloor.height / 2);
				const fLoc = locs[id] ?? [0, 0];
				if (!locs[ff]) continue;
				let x, y;
				const dis = noBorder ? 1 : 5;
				if (locs && locs[tf]) {
					x = locs[tf][0];
					y = locs[tf][1];
				} else {
					// 计算坐标，公式可以通过画图推断出
					x = fLoc[0] - ha * (fhw - fx + tx - thw) - v * (fhw + thw + dis);
					y = fLoc[1] - va * (fhh - fy + ty - thh) - h * (fhh + thh + dis);
				};
				locs[tf] = locs[tf] ?? [x, y, toFloor.width, toFloor.height, core.hasVisitedFloor(tf)];
				// 添加连线
				lines[`${from}_${to}`] = [
					[
						fx - fhw + locs[ff][0],
						fy - fhh + locs[ff][1],
						x + tx - thw, y + ty - thh
					]
				];
			}
		}
		// 获取地图绘制需要的长宽
		let width = 0,
			height = 0;
		let left, right, up, down;
		for (const id in locs) {
			const [x, y, w, h] = locs[id];
			if (left === void 0) {
				left = right = x;
				up = down = y;
			}
			left = Math.min(x - w / 2 - 1, left);
			right = Math.max(x + w / 2 + 1, right);
			up = Math.min(y - h / 2 - 1, up);
			down = Math.max(y + h / 2 + 1, down);
		}
		width = right - left;
		height = down - up;
		// 所有地图和连线向右下移动，避免绘制出现问题
		for (const id in locs) {
			const loc = locs[id];
			loc[0] -= left; // 这时候left和up是负值，所以要减
			loc[1] -= up;
		}
		for (const route in lines) {
			const line = lines[route];
			for (const node of line) {
				node[0] -= left;
				node[1] -= up;
				node[2] -= left;
				node[3] -= up;
			}
		}

		return { locs, lines, width, height, layer: upOrDown };
	}

	/** 绘制背景 */
	function drawBack() {
		if (status !== 'none') return;
		new Back('__map_back__', 0, 0, core._PX_, core._PY_, 175, 'rgba(0, 0, 0, 0.9)');
		const listen = new Sprite(0, 0, core._PX_, core._PY_, 1000, 'game', '__map_listen__');
		addDrag(listen);
		const exit = new Button('__map_exit__', core._PX_ - 64, core._PY_ - 26, 60, 22, '退出');
		exit.addEventListener('click', close);
		sprites.listen = listen;
	}

	/** 绘制工具栏 */
	function drawTools() {
		new Back('__map_toolback__', 0, core._PY_ - 30, core._PX_, 30, 600, 'rgba(200, 200, 200, 0.9)');
		// 无边框
		const border = new Button('__map_border__', core._PX_ - 150, core._PY_ - 26, 60, 22, '边框');
		border.addEventListener('click', changeBorder);
		// 怪物数量
		const enemy = new Button('__map_enemy__', core._PX_ - 240, core._PY_ - 26, 60, 22, '怪物');
		enemy.addEventListener('click', triggerEnemy);
		// 区域显示
		const area = new Back('__map_areasback__', core._PX_ - 80, 0, 80, core._PY_ - 30, 550, 'rgba(200, 200, 200, 0.9)');
		drawAreaList();
		core.drawLine(area.context, 0, core._PY_ - 30, 80, core._PY_ - 30, '#222', 2);
	}

	/** 绘制区域列表 */
	function drawAreaList(transition = true) {
		const start = perPage * areaPage;
		Object.values(areaSprite).forEach(v => v.destroy());
		areaSprite = {};
		for (let i = start; i < start + perPage && areas[i]; i++) {
			const n = i % perPage;
			const { name, maps } = areas[i];
			const btn = new Button(`_area_${maps[0]}`, core._PX_ - 75, 4 + 30 * n, 70, 22, name, '16px', transition);
			areaSprite[maps[0]] = btn;
			if (i === nowArea) btn.setCss(`border: 2px solid gold;`);
			btn.addEventListener('click', e => {
				if (i === nowArea) return;
				changeArea(i);
			})
		}
		// 上一页下一页
		if (areaPage > 0) {
			const last = new Button('_area_last_', core._PX_ - 75, core._PY_ - 50, 30, 16, '上一页', '14px', transition);
			areaSprite._area_last_ = last;
			last.addEventListener('click', e => {
				areaPage--;
				drawAreaList(false);
			});
		}
		if (areaPage < Math.floor(areas.length / perPage)) {
			const next = new Button('_area_next_', core._PX_ - 35, core._PY_ - 50, 30, 16, '下一页', '14px', transition);
			areaSprite._area_next_ = next;
			next.addEventListener('click', e => {
				areaPage++;
				drawAreaList(false);
			});
		}
	}

	/** 
	 * 绘制大地图
	 * @param {MapDrawInfo} info 地图绘制信息
	 * @param {number} scale 地图的绘制比例
	 */
	function drawMap(info, scale = defaultValue.scale) {
		if (status === 'flyMap') return;
		const PX = core._PX_,
			PY = core._PY_;
		const w = info.width * scale,
			h = info.height * scale;
		const id = `__flyMap__`;
		const cx = PX / 2 - w / 2,
			cy = PY / 2 - h / 2;
		const map = new Sprite(cx, cy, w, h, 500, 'game', id);
		sprites[id] = map;
		canDrag[id] = map;
		map.canvas.className = 'fly-map';
		const ctx = map.context;
		core.clearMap(ctx);
		if (!noBorder) {
			const drawed = {}; // 绘制过的线
			// 先绘制连线
			const lines = info.lines;
			for (const route in lines) {
				const line = lines[route];
				for (const node of line) {
					const from = `${node[0]},${node[1]}`,
						to = `${node[2]},${node[3]}`;
					if (drawed[`${from}-${to}`] || drawed[`${to}-${from}`]) continue;
					drawed[`${from}-${to}`] = true;
					let lineWidth = scale / 2;
					core.drawLine(ctx, node[0] * scale, node[1] * scale, node[2] * scale, node[3] * scale, '#fff', lineWidth);
				}
			}
			// 再绘制楼层
			const locs = info.locs;
			for (const id in locs) {
				const loc = locs[id];
				let color = '#000';
				if (!loc[4]) color = '#f0f';
				const [x, y, w, h] = loc.map(v => typeof v === 'number' && v * scale);
				let dx = 0,
					dy = 0; // 避免绘图误差
				if (loc[2] % 2 === 0) dx = 0.5 * scale;
				if (loc[3] % 2 === 0) dy = 0.5 * scale;
				const fx = x - w / 2 - dx,
					fy = y - h / 2 - dy;
				core.fillRect(ctx, fx, fy, w, h, color);
				if (id === selecting) core.strokeRect(ctx, fx, fy, w, h, 'gold', scale / 2);
				else core.strokeRect(ctx, fx, fy, w, h, '#fff', scale / 2);
				const layer = info.upOrDown[id];
				const min = Math.min(w, h);
				if (layer?.includes('upFloor'))
					core.drawIcon(ctx, defaultChange.upFloor, fx, fy, min / 3, min / 3);
				if (layer?.includes('downFloor'))
					core.drawIcon(ctx, defaultChange.downFloor, fx + w - min / 3, fy + h - min / 3, min / 3, min / 3);
				// 显示漏怪数量
				if (showEnemy) {
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					const c = `${drawingMap}_${nowDepth}_${noBorder}`;
					const n = Object.keys(mapCache[c].enemies[id]).length;
					color = '#3f3';
					if (n > 0) color = '#fff';
					if (n > 10) color = '#fc3';
					if (n > 20) color = '#f22';
					ctx.shadowBlur = 0.6 * nowScale;
					ctx.shadowColor = '#000';
					core.fillText(ctx, `怪物数量：${n}`, x, y, color, `${2 * nowScale}px normal`);
					ctx.shadowBlur = 0;
				}
			}
		}
		checkThumbnail();
	}

	/** 
	 * 重新绘制缩略图
	 * @param {Sprite} sprite
	 * @param {string} floor
	 */
	function drawThumbnail(sprite, floor, x, y, w, h) {
		const ctx = sprite.context;
		const scale = nowScale;
		core.drawThumbnail(floor, void 0, {
			ctx: ctx,
			x: x - w / 2,
			y: y - h / 2,
			damage: true,
			all: true,
			size: Math.max(w, h) / Math.max(core._PX_, core._PY_),
			fromMap: true
		});
		const color = floor === core.status.floorId ? 'gold' : '#fff'
		if (!noBorder)
			core.strokeRect(ctx, x - w / 2, y - h / 2, w, h, color, scale / 2);
	}

	/** 检查是否需要绘制缩略图 */
	function checkThumbnail() {
		const id = `${drawingMap}_${nowDepth}_${noBorder}`;
		const locs = drawCache[id].locs;
		const map = canDrag[`__flyMap__`];
		for (const id in locs) {
			const loc = locs[id];
			const scale = nowScale;
			const [x, y, w, h] = loc.map(v => typeof v === 'number' && v * scale);
			let dx = 0,
				dy = 0; // 避免绘图误差
			if (loc[2] % 2 === 0) dx = 0.5 * scale;
			if (loc[3] % 2 === 0) dy = 0.5 * scale;
			if (!drawedThumbnail[id] && x + map.x > 0 && x + map.x < core._PX_ &&
				y + map.y > 0 && y + map.y < core._PY_) {
				if (!noBorder && core.hasVisitedFloor(id) && scale > 5) {
					drawThumbnail(map, id, x - dx, y - dy, w, h);
					drawedThumbnail[id] = true;
				}
				if (noBorder) {
					drawThumbnail(map, id, x - dx, y - dy, w, h)
					drawedThumbnail[id] = true;
					if (!core.hasVisitedFloor(id))
						core.fillRect(map.context, x - dx - w / 2, y - dy - h / 2, w, h, 'rgba(255,0,255,0.2)');
				}
			}
		}
		// 如果是无边框模式，那就只绘制当前地图的边框
		if (noBorder) {
			const loc = locs[selecting];
			const scale = nowScale;
			if (loc) {
				const [x, y, w, h] = loc.map(v => typeof v === 'number' && v * scale);
				core.strokeRect(map.context, x - w / 2, y - h / 2, w, h, 'gold', scale / 2);
			}
		}
	}

	/** 检查点击点是否在以x,y为中心的某一矩形中 */
	function inRect(x, y, w, h, px, py) {
		x -= w / 2;
		y -= h / 2;
		return px > x && px < x + w && py > y && py < y + h;
	}

	/** 测试画布是否超过上限，摘自https://github.com/jhildenbiddle/canvas-size */
	function canvasTest(size) {
		const width = Math.max(Math.ceil(size[0]), 1);
		const height = Math.max(Math.ceil(size[1]), 1);
		if (width === 0 || height === 0) return true;
		const fill = [width - 1, height - 1, 1, 1];
		let cropCvs, testCvs;
		cropCvs = document.createElement("canvas");
		cropCvs.width = 1;
		cropCvs.height = 1;
		testCvs = document.createElement("canvas");
		testCvs.width = width;
		testCvs.height = height;
		const cropCtx = cropCvs.getContext("2d");
		const testCtx = testCvs.getContext("2d");
		if (testCtx) {
			testCtx.fillRect.apply(testCtx, fill);
			cropCtx.drawImage(testCvs, width - 1, height - 1, 1, 1, 0, 0, 1, 1);
		}
		const isTestPass = cropCtx && cropCtx.getImageData(0, 0, 1, 1).data[3] !== 0;
		return isTestPass;
	}

	/** 检查浏览器限制 */
	function checkMaximum(before, scale) {
		for (const id in canDrag) {
			const sprite = canDrag[id];
			const rate = scale / before;
			const w = sprite.width * rate * core.domStyle.scale,
				h = sprite.height * rate * core.domStyle.scale;
			const valid = canvasTest([w, h]);
			if (!valid) {
				core.drawTip('画布大小将超过浏览器限制！请勿继续放大！');
				return true;
			}
		}
		return false;
	}

	/** 关闭事件 */
	function close() {
		document.body.removeEventListener('keyup', keyboard);
		Object.values(sprites).forEach((v) => {
			v.setCss('transition: opacity 0.6s linear;');
		});
		setTimeout(() => {
			Object.values(sprites).forEach((v) => {
				v.setCss('opacity: 0;');
			});
		}, 50);
		setTimeout(() => {
			core.unlockControl();
			Object.values(sprites).forEach((v) => {
				v.destroy();
			});
			drawedThumbnail = {};
			sprites = {};
			canDrag = {};
			status = 'none';
			core.canvas.data.canvas.style.zIndex = '170';
		}, 650);
	}

	/** 
	 * 点击地图事件，尝试楼层传送
	 * @param {MouseEvent} e
	 */
	function clickMap(e) {
		if (moved) return moved = false;
		const { x, y } = core.actions._getClickLoc(e.clientX, e.clientY);
		let px = x / core.domStyle.scale,
			py = y / core.domStyle.scale;
		const scale = nowScale;
		const id = `${drawingMap}_${nowDepth}_${noBorder}`;
		const locs = drawCache[id].locs;
		const sprite = canDrag.__flyMap__;
		px -= sprite.x;
		py -= sprite.y;
		for (const id in locs) {
			const loc = locs[id];
			const [x, y, w, h] = loc.map(v => typeof v === 'number' && v * scale);
			if (inRect(x, y, w, h, px, py)) {
				return flyTo(id);
			}
		}
	}

	/** 飞向某个楼层 */
	function flyTo(id) {
		if (!core.hasItem('fly')) return core.drawTip('你没有楼层传送器');
		sprites.__map_back__.setCss('opacity: 0.2;');
		return core.flyTo(id, () => setTimeout(() => {
			if (sprites.__map_back__) core.lockControl();
		}, 100));
	}

	/** 
	 * 拖拽事件
	 * @param {MouseEvent} e
	 */
	function drag(e) {
		if (!clicking) return;
		const scale = core.domStyle.scale
		moveEle(e.movementX / scale, e.movementY / scale);
	}

	/**
	 * 手机端点击拖动事件
	 * @param {TouchEvent} e
	 * @this {HTMLCanvasElement}
	 */
	function touchDrag(e) {
		moved = true;
		const scale = core.domStyle.scale;
		if (e.touches.length === 1) { // 拖拽
			const info = e.touches[0];
			if (!lastTouch[this.id]) {
				lastTouch[this.id] = [info.clientX, info.clientY];
				return;
			}
			const { clientX: x, clientY: y } = info;
			const dx = x - lastTouch[this.id][0],
				dy = y - lastTouch[this.id][1];
			moveEle(dx / scale, dy / scale);
			lastTouch[this.id] = [info.clientX, info.clientY];
		} else if (e.touches.length >= 2) { // 双指放缩
			const first = e.touches[0],
				second = e.touches[1];
			const dx = first.clientX - second.clientX,
				dy = first.clientY - second.clientY;
			if (lastLength === 0) {
				lastLength = Math.sqrt(dx * dx + dy * dy);
				return;
			}
			let cx = (first.clientX + second.clientX) / 2,
				cy = (first.clientY + second.clientY) / 2;
			const { x, y } = core.actions._getClickLoc(cx, cy);
			const mx = x / scale;
			const my = y / scale;
			const length = Math.sqrt(dx * dx + dy * dy);
			const delta = (lastLength / length) ** (1 / 3);
			const info = {};
			for (const id in canDrag) {
				const sprite = canDrag[id];
				const sx = sprite.x + sprite.width / 2,
					sy = sprite.y + sprite.height / 2;
				const dx = sx - mx,
					dy = sy - my;
				info[id] = [mx + dx * delta, my + dy * delta];
			}
			scaleMap(delta * nowScale, info);
		}
	}

	/** 
	 * 滚轮缩放
	 * @param {WheelEvent} e
	 */
	function wheel(e) {
		const delta = 1 - Math.sign(e.deltaY) / 10;
		const { x, y } = core.actions._getClickLoc(e.clientX, e.clientY);
		const scale = core.domStyle.scale;
		const mx = x / scale,
			my = y / scale;
		const info = {};
		for (const id in canDrag) {
			const sprite = canDrag[id];
			const cx = sprite.x + sprite.width / 2,
				cy = sprite.y + sprite.height / 2;
			const dx = cx - mx,
				dy = cy - my;
			info[id] = [mx + dx * delta, my + dy * delta];
		}
		scaleMap(delta * nowScale, info);
	}

	/** 切换边框 */
	function changeBorder() {
		noBorder = !noBorder;
		redraw('border');
	}

	/** 切换是否显示漏怪数量 */
	function triggerEnemy() {
		showEnemy = !showEnemy;
		redraw('enemy');
	}

	/** 改变区域 */
	function changeArea(index) {
		nowArea = index;
		drawAreaList(false);
		drawedThumbnail = {};
		status = 'area';
		nowScale = defaultValue.scale;
		drawMap(core.plugin.getMapDrawInfo(areas[index].maps[0]));
	}

	/** 重绘 */
	function redraw(id, px, py, move = true) {
		const { x, y } = canDrag.__flyMap__;
		status = id;
		drawedThumbnail = {};
		drawMap(core.plugin.getMapDrawInfo(drawingMap, nowDepth, true), nowScale);
		if (move) canDrag.__flyMap__.move(px ?? x, py ?? y);
		checkThumbnail();
	}

	/** 
	 * 拖拽时移动需要元素
	 * @param {string} dx
	 * @param {string} dy
	 */
	function moveEle(dx, dy) {
		moved = true;
		for (const id in canDrag) {
			const sprite = canDrag[id];
			const ctx = sprite.context;
			sprite.x += dx;
			sprite.y += dy;
			core.relocateCanvas(ctx, dx, dy, true);
		}
		checkThumbnail();
	}

	/** 
	 * 缩放绘制地图
	 * @param {number} target 目标缩放比例
	 * @param {{[x: string]: [number, number]}} info 缩放后的sprite位置数据
	 */
	function scaleMap(target, info) {
		// 检查浏览器限制
		if (checkMaximum(nowScale, target)) return;
		clearTimeout(lastScale);
		const [x, y] = info.__flyMap__;
		// 先直接修改style，延迟200ms再绘制，进行性能优化
		const sprite = canDrag.__flyMap__;
		const rate = target / nowScale;
		nowScale = target;
		sprite.resize(sprite.width * rate, sprite.height * rate, true);
		sprite.move(x - sprite.width / 2, y - sprite.height / 2);
		lastScale = setTimeout(() => {
			redraw('scale', x - sprite.width / 2, y - sprite.height / 2);
		}, 200)
	}

	/** 键盘操作
	 * @param {KeyboardEvent} e
	 */
	function keyboard(e) {
		if (e.key === 'Enter' || e.key === 'C' || e.key === 'c' || e.key === ' ') {
			return flyTo(selecting);
		} else if (e.key === 'Escape' || e.key === 'x' || e.key === 'X') {
			return close();
		} else if (e.key.startsWith('Arrow')) {
			const dir = e.key.slice(5).toLowerCase();
			// 获取目标楼层
			const res = mapCache[`${drawingMap}_${nowDepth}_${noBorder}`].res;
			const key = Object.keys(res)
				.find(v => {
					const [floorId, x, y, d] = v.split('_');
					return floorId === selecting && d === dir;
				});
			if (!key) return;
			const target = res[key].split('_')[0];
			selecting = target;
			redraw('key');
		}
	}

	/**
	 * 给需要的元素添加拖拽等事件
	 * @param {HTMLCanvasElement} ele
	 */
	function addDrag(ele) {
		ele.addEventListener('wheel', wheel);
		ele.addEventListener('mousemove', drag);
		ele.addEventListener('touchmove', touchDrag);
		ele.addEventListener('click', clickMap);
		ele.addEventListener('mousedown', () => { clicking = true; });
		ele.addEventListener('mouseup', () => { clicking = false; });
		ele.addEventListener('touchend', () => {
			lastTouch = {};
			lastLength = 0;
		});
		document.body.addEventListener('keyup', keyboard);
	}

	maps.prototype._drawThumbnail_drawToTarget = function (floorId, options) {
		const ctx = core.getContextByName(options.ctx);
		if (ctx == null) return;
		const x = options.x || 0,
			y = options.y || 0,
			size = options.size || 1;
		// size的含义改为(0,1]范围的系数以适配长方形，默认为1，楼传为3/4，SL界面为0.3
		let w = Math.ceil(size * core._PX_),
			h = Math.ceil(size * core._PY_);
		// 特判是否为编辑器，编辑器中长宽均采用core.js的遗留正方形像素边长，以保证下面的绘制正常
		if (main.mode == 'editor') w = h = size * core.__PIXELS__;
		const width = core.floors[floorId].width,
			height = core.floors[floorId].height;
		let centerX = options.centerX,
			centerY = options.centerY;
		if (centerX == null) centerX = Math.floor(width / 2);
		if (centerY == null) centerY = Math.floor(height / 2);
		const tempCanvas = core.bigmap.tempCanvas;

		if (options.all) {
			const tempWidth = tempCanvas.canvas.width,
				tempHeight = tempCanvas.canvas.height;
			// 绘制全景图
			if (tempWidth <= tempHeight) {
				const realHeight = h,
					realWidth = realHeight * tempWidth / tempHeight;
				const side = (w - realWidth) / 2;
				if (options.fromMap) {
					return core.drawImage(ctx, tempCanvas.canvas, 0, 0, tempWidth, tempHeight, x, y, realWidth, realHeight);
				}
				core.fillRect(ctx, x, y, side, realHeight, '#000000');
				core.fillRect(ctx, x + w - side, y, side, realHeight);
				core.drawImage(ctx, tempCanvas.canvas, 0, 0, tempWidth, tempHeight, x + side, y, realWidth, realHeight);
			} else {
				const realWidth = w,
					realHeight = realWidth * tempHeight / tempWidth;
				const side = (h - realHeight) / 2;
				if (options.fromMap) {
					return core.drawImage(ctx, tempCanvas.canvas, 0, 0, tempWidth, tempHeight, x, y, realWidth, realHeight);
				}
				core.fillRect(ctx, x, y, realWidth, side, '#000000');
				core.fillRect(ctx, x, y + h - side, realWidth, side);
				core.drawImage(ctx, tempCanvas.canvas, 0, 0, tempWidth, tempHeight, x, y + side, realWidth, realHeight);
			}
		} else {
			// 只绘制可见窗口
			let pw = core._PX_,
				ph = core._PY_,
				hw = core._HALF_WIDTH_,
				hh = core._HALF_HEIGHT_,
				W = core._WIDTH_,
				H = core._HEIGHT_;
			const ratio = core.domStyle.isVertical ? core.domStyle.ratio : core.domStyle.scale;
			if (main.mode == 'editor') {
				pw = ph = core.__PIXELS__;
				hw = hh = core.__HALF_SIZE__;
				W = H = core.__SIZE__;
			}
			if (options.v2) {
				core.drawImage(ctx, tempCanvas.canvas, 0, 0, pw * ratio, ph * ratio, x, y, w, h);
			} else {
				const offsetX = core.clamp(centerX - hw, 0, width - W),
					offsetY = core.clamp(centerY - hh, 0, height - H);
				if (options.noHD) {
					core.drawImage(ctx, tempCanvas.canvas, offsetX * 32, offsetY * 32, pw, ph, x, y, w, h);
					return;
				}
				core.drawImage(ctx, tempCanvas.canvas, offsetX * 32 * ratio, offsetY * 32 * ratio, pw * ratio, ph * ratio, x, y, w, h);
			}
		}
	}

},
    "状态栏": function () {
	// 在此增加新插件
	// 

	core.mystatusNumber = function (ctx, name, num, x, y, col2) {
		var m = '';
		if (hero[name] < 0)
			m = 'invert(100%)';
		core.setFilter(ctx, 'hue-rotate(' + (col2 || 0) + 'deg)brightness(1)contrast(1)' + m)



		if (!num && name != null && name != 'key1' && name != 'key2' && name != 'potion1' && name != 'potion2') {
			num = hero[name]
			if(name == 'shengqishi' || name == 'guangmingshengnv' || name == 'zhunshengzi') num = flags[name] || 0
			num = num.toString()
			if (name === 'atk2') {
				num = Math.max(0, (hero[name] * 0.01 + 1)).toFixed(2);
			}
			if (name === 'def2') {
				var k = 3;
				num = ((1 - 100 / (100 + k * Math.abs(hero[name]))) * 100).toFixed(2) + '%'
				if (hero[name] < 0)
					num = '-'.concat(num)
			}
			if (name === 'atk' || name === 'def' || name === 'mdef' || name === 'hpmax') num = core.getRealStatus(name).toString()
			for (var i in num) {
				core.drawIcon(ctx, 'X' + (10304), x + 5 + 10 * Number(i), y, 16, 16)
				if (num[i] === '.')
					core.drawIcon(ctx, 'X' + (10316), x + 5 + 10 * Number(i), y, 16, 16)
				else if (num[i] === '%')
					core.drawIcon(ctx, 'X' + (10317), x + 5 + 10 * Number(i), y, 16, 16)
				else if (num[i] === '-')
					core.drawIcon(ctx, 'X' + (10318), x + 5 + 10 * Number(i), y, 16, 16)
				else
					core.drawIcon(ctx, 'X' + (10305 + Number(num[i])), x + 5 + 10 * Number(i), y, 16, 16)
			}
		}
		if (name === 'key1' || name === 'key2') {
			var num = [hero.items.tools.yellowKey || 0, hero.items.tools.blueKey || 0, hero.items.tools.redKey || 0];
			var keyCol = [170, 0, 140, 250]
			if (name === 'key2') {
				num = [hero.items.tools.whiteKey || 0, hero.items.tools.I422 || 0];
				keyCol = [-1, -2]
			}
			for (var k in num) {
				var numk = num[k]
				numk = numk.toString()
				if (keyCol[k] < 0)
					core.setFilter(ctx, 'grayscale(' + 100 + '%)brightness(' + (keyCol[k] == -1 ? 200 : 25) + '%)');
				else
				core.setFilter(ctx, 'hue-rotate(' + keyCol[k] + 'deg)')
				for (var i in numk) {
					core.drawIcon(ctx, 'X' + (10304), x + 5 + 10 * Number(i) + 30 * Number(k), y, 16, 16)
					core.drawIcon(ctx, 'X' + (10305 + Number(numk[i])), x + 5 + 10 * Number(i) + 30 * Number(k), y, 16, 16)
				}
			}
			core.setFilter(ctx, '')
			name = 'key'
		}
		if (name === 'potion1' || name === 'potion2') {
			var num = [hero.items.tools.I710 || 0, hero.items.tools.I711 || 0, hero.items.tools.I712 || 0, hero.items.tools.I713 || 0];
			var keyCol = [140, 0, 170, 250]
			if (name === 'potion2') {
				num = [hero.items.tools.I714 || 0, hero.items.tools.I415 || 0, hero.items.tools.I416 || 0,];
				keyCol = [30, 280, 280]
			}
			for (var k in num) {
				var numk = num[k]
				numk = numk.toString()
				core.setFilter(ctx, 'hue-rotate(' + keyCol[k] + 'deg)')
				for (var i in numk) {
					core.drawIcon(ctx, 'X' + (10304), x + 5 + 10 * Number(i) + 20 * Number(k) + (name === "potion1" && k > 0 ? 10 : 0), y, 16, 16)
					core.drawIcon(ctx, 'X' + (10305 + Number(numk[i])), x + 5 + 10 * Number(i) + 20 * Number(k) + (name === "potion1" && k > 0 ? 10 : 0), y, 16, 16)
				}
			}
			core.setFilter(ctx, '')
			name = 'key'
		}
	}

	core.mystatusbox = function (ctx, name, num, x, y, col2) {
		if (name == null) return;
		var m = '';
		if (hero[name] < 0)
			m = 'invert(100%)';
		core.setFilter(ctx, 'hue-rotate(' + (col2 || 0) + 'deg)' + m)
		if (name == 'key1' || name == 'key2') name = 'key';
		core.drawImage(ctx, 'b.png', 0, 0, 32, 32, x - 40, y - 10, 32, 32)
		core.drawImage(ctx, name + '.png', 0, 0, 32, 32, x - 40, y - 10, 32, 32)
		core.drawImage(ctx, 'c.png', 0, 0, 32, 32, x - 40, y - 10, 32, 32)
		core.drawIcon(ctx, 'X' + (10315), x - 40 + 32, y - 10, 32, 32)

		//core.setFilter(ctx, 'hue-rotate(' + (col2 || 0) + 'deg)brightness(1.5)' + m)

	}

	core.createSprBack = function (des) {
		if (main.replayChecking || !core.status.played)
			return;
		var left = parseInt(core.dom.gameGroup.style.left);
		var top_up = parseInt(core.dom.gameGroup.style.top);
		var width = 1300 //748 + 100;
		var height = 1200 // 560;

		if (core.getSprite('SprBack') && des) {
			core.getSprite('SprBack').destroy();
			const sprite = new Sprite(left - 280, top_up - 350, 1300, 1200, core.domStyle.isVertical ? -1 : 1, 'window', 'SprBack');
			//const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 - 129 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 9, 'window', 'SprBack');
		} else if (core.getSprite('SprBack')) {
			core.clearMap(core.getSprite('SprBack').context);

		} else {
			const sprite = new Sprite(left - 280, top_up - 350, 1300, 1200, core.domStyle.isVertical ? -1 : 1, 'window', 'SprBack');
			//const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 - 129 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 9, 'window', 'SprBack'); 
		}

		var ctx = core.getSprite('SprBack').context;

		core.clearMap(ctx);
		//core.fillRect(ctx, 0, 0, width, height, '#000000');

		var col = flags._statuscol_;
		var brg = flags._statusbrg_;
		var gry = flags._statusgry_;

		core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)brightness(' + (brg || 1) + ')grayscale(' + (gry || 0) + '%)')
		var alp = flags._backalp_ || 0.5;
		core.setAlpha(ctx, alp)
		if (!flags.starOff)
			core.drawImage(ctx, 'Star.png', 0, 0, 1300, 1200);

		core.setFilter(ctx, '')
		//	core.getSprite('SprBack').canvas.style.width = core.getSprite('SprBack').canvas.width * core.domStyle.scale + 'px';
		//	core.getSprite('SprBack').canvas.style.height = core.getSprite('SprBack').canvas.height * core.domStyle.scale + 'px';

	}

	core.createSpr0 = function (des) {
		if (main.replayChecking || !core.status.played)
			return;
		var left = parseInt(core.dom.gameGroup.style.left);
		var top_up = parseInt(core.dom.gameGroup.style.top);
		var width = 748 + 100;
		var height = 560;
		if (core.domStyle.isVertical) {
			top_up += core.domStyle.scale * (-96);
		} else {
			top_up -= 16 * core.domStyle.scale;
		}
		if (core.getSprite('Spr0') && des) {
			core.getSprite('Spr0').destroy();
			const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 10, 'window', 'Spr0');
		} else if (core.getSprite('Spr0')) {
			core.clearMap(core.getSprite('Spr0').context);

		} else { const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 10, 'window', 'Spr0'); }

		var ctx = core.getSprite('Spr0').context;

		core.clearMap(ctx);
		//core.fillRect(ctx, 0, 0, width, height, '#000000');
		var col = flags._statuscol_;
		var brg = flags._statusbrg_;
		var gry = flags._statusgry_;

		var fil = 'hue-rotate(' + (col || 0) + 'deg)brightness(' + (brg || 1) + ')grayscale(' + (gry || 0) + '%)'

		core.setFilter(ctx, fil)

		if (!core.domStyle.isVertical) {
		//core.drawImage(ctx, 'backg.png', 0, 0, 448, 448, 0, 64, 448, 448);
		//core.drawImage(ctx, 'backw.png', 0, 0, 448, 448, 0, 64, 448, 448);
		core.drawImage(ctx, 'backg.png', 0, 0, 448, 448, 20, 64, 448, 448);
		core.drawImage(ctx, 'backw.png', 180, 160, 752, 448, 20, 64, 752, 448);
		core.drawImage(ctx, 'backl2.png', 0, 0, 149, 20, 20 + 16, 64 + 16 + 85, 149, 20);
		core.drawImage(ctx, 'backl2.png', 0, 0, 149, 20, 20 + 16, 64 + 16 + 90 + 200, 149, 20);
		core.drawImage(ctx, 'backl.png', 0, 0, 149, 416, 20 + 16, 64 + 16, 149, 416);


		core.drawImage(ctx, 'backg.png', 0, 0, 448, 448, 172 + 152, 64, 448, 448);
		//core.drawImage(ctx, 'backw.png', 0, 0, 448, 448, 172 + 152, 64, 448, 448);
		core.drawImage(ctx, 'backl2.png', 0, 0, 149, 20, 172 + 416 + 3 + 16, 64 + 16 + 90 + 200, 149, 20);
		core.drawImage(ctx, 'backl.png', 0, 0, 149, 416, 172 + 416 + 3 + 16, 64 + 16, 149, 416);

		core.drawImage(ctx, 'backg.png', 0, 0, 448, 448, 172, 64, 448, 448);
		}
		else
		core.drawImage(ctx, 'backw.png', 180, 160, 752, 448, 0, 0, 752, 448);
		

		//按钮
		core.drawImage(ctx, 'box1.png', 0, 0, 144, 96, 38, 384, 144, 96);

		var btn = ['book', 'fly', 'toolbox', 'save', 'load', 'settings']
		if (core.isReplaying()) 
			btn = [core.status.replay.pausing ? 'play' : 'pause', 'stop', 'rewind', 'speedDown', 'speedUp', 'save'];
		for (var i in btn) {
			var h = 0
			if (flags._Spr1Move_ && flags._Spr1Move_ < 7 && flags._Spr1Move_ === Number(i) + 1) {
				h = 3
				core.drawImage(ctx, 'boxLight.png', 0, 0, 48, 48, 38 - 8 + 24 + 32 * ((flags._Spr1Move_ - 1) % 3), 384 - 8 + 16 + 32 * Math.floor((flags._Spr1Move_ - 1) / 3), 48, 48)
				core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)brightness(2)grayscale(' + (gry || 0) + '%)')
			} else
				core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)grayscale(' + (gry || 0) + '%)')
			core.drawIcon(ctx, btn[i], 38 + 24 + 32 * (i % 3), 384 + 16 + 32 * Math.floor(i / 3) - h, 32, 32)

		}
		var btn = ['keyboard', 'shop', 'play']
		if (core.isReplaying()) 
			btn = ['book', 'floor', '']
		for (var i in btn) {
			var h = 0
			if (flags._Spr1Move_ && flags._Spr1Move_ < 11 && flags._Spr1Move_ === Number(i) + 8) {
				h = 3
				//core.drawImage(ctx, 'boxLight.png', 0, 0, 48, 48, 38 - 8 + 24 + 32 * ((flags._Spr1Move_ - 1) % 3), 384 - 8 + 16 + 32 * Math.floor((flags._Spr1Move_ - 1) / 3), 48, 48)
				core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)brightness(2)grayscale(' + (gry || 0) + '%)')
			} else
				core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)grayscale(' + (gry || 0) + '%)')
			core.drawIcon(ctx, btn[i], 38 + 152 + 422 + 24 + 32 * (i % 3), 164 + 16 + 32 * Math.floor(i / 3) - h, 32, 32)

		}
		var btn = ['I710', 'I711', 'I712', 'I713', 'I714', 'I415', 'I416']
		core.setTextAlign(ctx, 'right');
		for (var i in btn) {
			var h = 0
			if (flags._Spr1Move_ && flags._Spr1Move_ < 18 && flags._Spr1Move_ === Number(i) + 11) {
				h = 3
				//core.drawImage(ctx, 'boxLight.png', 0, 0, 48, 48, 38 - 8 + 24 + 32 * ((flags._Spr1Move_ - 1) % 3), 384 - 8 + 16 + 32 * Math.floor((flags._Spr1Move_ - 1) / 3), 48, 48)
				core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)brightness(2)grayscale(' + (gry || 0) + '%)')
			} else
				core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)grayscale(' + (gry || 0) + '%)')
			if (hero.items.tools[btn[i]]){
				if (core.domStyle.isVertical) {
					core.drawIcon(ctx, btn[i], 8 + 32 * i, 124, 32, 32)
					core.fillText(ctx, hero.items.tools[btn[i]], 40 + 32 * i, 156, '#FFFFFF', core.ui._buildFont(14, true));
				}
				else {
					core.drawIcon(ctx, btn[i], 38 + 152 + 422 + 8 + 32 * (i % 4), 208 + 16 + 32 * Math.floor(i / 4) - h, 32, 32)
					core.fillText(ctx, hero.items.tools[btn[i]], 38 + 152 + 422 + 40 + 32 * (i % 4), 208 + 48 + 32 * Math.floor(i / 4), '#FFFFFF', core.ui._buildFont(14, true));
				}
			}
		}
		core.setFilter(ctx, fil)

		//技能栏
		core.drawImage(ctx, 'box2.png', 0, 0, 144, 96, 38 + 152 + 422, 166, 144, 96);
		//装备栏
		core.drawImage(ctx, 'box1.png', 0, 0, 144, 96, 38 + 152 + 422, 384, 144, 96);
		core.setFilter(ctx, '')
		core.getSprite('Spr0').canvas.style.width = core.getSprite('Spr0').canvas.width * core.domStyle.scale + 'px';
		core.getSprite('Spr0').canvas.style.height = core.getSprite('Spr0').canvas.height * core.domStyle.scale + 'px';

		//console.log(0)
	}

	core.createSpr1 = function (des) {
		if (main.replayChecking || !core.status.played)
			return;
		var left = parseInt(core.dom.gameGroup.style.left);
		var top_up = parseInt(core.dom.gameGroup.style.top);
		var width = 748 + 100;
		var height = 560;
		if (core.domStyle.isVertical) {
			top_up += core.domStyle.scale * (-96);
		} else {
			top_up -= 16 * core.domStyle.scale;
		}
		if (core.getSprite('Spr1') && des) {
			core.getSprite('Spr1').destroy();
			const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 12, 'window', 'Spr1');
		} else if (core.getSprite('Spr1')) {
			core.clearMap(core.getSprite('Spr1').context);

		} else { const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 12, 'window', 'Spr1'); }

		var ctx = core.getSprite('Spr1').context;

		core.clearMap(ctx);

		var col = flags._statuscol_;
		var brg = flags._statusbrg_;
		var gry = flags._statusgry_;

		var fil = 'hue-rotate(' + (col || 0) + 'deg)brightness(' + (brg || 1) + ')grayscale(' + (gry || 0) + '%)'

		var need = core.firstData.levelUp[core.status.hero.lv].need;

		//等级
		if (core.domStyle.isVertical) {
			core.mystatusbox(ctx, 'hpmax', null, 48, 16, 160);
			core.mystatusbox(ctx, 'hp', null, 48 + 22, 16 + 22, 250);
		} else {
			core.mystatusbox(ctx, 'hpmax', null, 80, 100, 160);
			core.mystatusbox(ctx, 'hp', null, 80 + 22, 122, 250);
		}
		//var need = core.firstData.levelUp[core.status.hero.lv].need;
		//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * hero.hp / hero.hpmax, 32, 60 - 16 + 4, 142, 128 * hero.hp / hero.hpmax, 32)
		//core.drawImage(ctx, 'manaL.png', 0, 0, 128, 32, 60 - 16 + 4, 142, 128, 32)
		//状态
		var heroStatus = ['atk', 'mdef', core.domStyle.isVertical ? null : 'key1']
		var Scol = [140, 280, 180]
		var heroStatus2 = ['def', 'mana', core.domStyle.isVertical ? null : core.isShopVisited('shop4') ? 'key2' : null]
		var Scol2 = [0, 20, 300, 0]
		if (core.domStyle.isVertical) {
			for (var i in heroStatus2)
				if (heroStatus2[i] != null)
					core.mystatusbox(ctx, heroStatus2[i], null, 48 + 22 + 128 * Number(i), 80 + 22, Scol2[i]);
			for (var i in heroStatus)
				core.mystatusbox(ctx, heroStatus[i], null, 48 + 128 * Number(i), 80, Scol[i]);
		}
		else {
			for (var i in heroStatus2)
				if (heroStatus2[i] != null)
					core.mystatusbox(ctx, heroStatus2[i], null, 80 + 22, 100 + 122 + 60 * Number(i), Scol2[i]);
			for (var i in heroStatus)
				core.mystatusbox(ctx, heroStatus[i], null, 80, 100 + 100 + 60 * Number(i), Scol[i]);
		}
		//魔力
		if (core.domStyle.isVertical) {
			if (flags.qmd) {
				core.setFilter(ctx, 'hue-rotate(' + (0) + 'deg)')
				var npcs = [flags.heianshengzi ? 'N1124' : '', 'N510', 'N566', 'N489'];
				for (var i = 0; i < 4; i++)
				core.drawIcon(ctx, npcs[i], 32 + 256 + 32 * i, 64, 32, 48)
			}//core.setAlpha(ctx, 0.4)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * hero.mana / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * hero.mana / hero.manamax, 32)
			core.setAlpha(ctx, 1)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32)
			//core.drawImage(ctx, 'manaL.png', 0, 0, 128, 32, 60 - 16 + 4 + 152 + 422, 142, 128, 32)
			//钥匙/金币
			//if (flags.szx)
			core.mystatusbox(ctx, 'key1', null, 48 + 256, 16, 180);
			if (core.isShopVisited('shop4'))
			core.mystatusbox(ctx, 'key2', null, 48 + 22 + 256, 16 + 22, 300);
			core.mystatusbox(ctx, 'money', null, 48 + 22 + 128, 16 + 22, 180);
		}
		else {
			if (flags.qmd) {
				core.setFilter(ctx, 'hue-rotate(' + (0) + 'deg)')
				var npcs = [flags.heianshengzi ? 'N1124' : '', 'N510', 'N566', 'N489'];
				for (var i = 0; i < 4; i++)
				core.drawIcon(ctx, npcs[i], 38 + 152 + 422 + 8 + 32 * i, 90, 32, 48)
			}
			//core.setAlpha(ctx, 0.4)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * hero.mana / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * hero.mana / hero.manamax, 32)
			core.setAlpha(ctx, 1)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32)
			//core.drawImage(ctx, 'manaL.png', 0, 0, 128, 32, 60 - 16 + 4 + 152 + 422, 142, 128, 32)
			//钥匙/金币
			//if (flags.szx)
			//core.mystatusbox(ctx, 'potion', null, 80 + 152 + 422, 60 * 4, 180);
			//if (flags.szx)
			//core.mystatusbox(ctx, 'potion', null, 80 + 22 + 152 + 422, 22 + 60 * 4, 300);
			core.mystatusbox(ctx, 'money', null, 80 + 152 + 422, 60 * 5, 180);
			// 难度
			core.drawTextContent(ctx, core.status.hard || "", { left: 45 + 152 + 422, top: 60 * 5.5, fontSize: 30, bold: true, color: "white" });
		}
		core.setFilter(ctx, 'hue-rotate(' + (0) + 'deg)')

		var btn = ['book', 'fly', 'toolbox', 'save', 'load', 'settings']
		for (var i in btn) {
			if (core.getEquip(i))
				core.drawIcon(ctx, core.getEquip(i), 38 + 152 + 422 + 24 + 32 * (i % 3), 384 + 16 + 32 * Math.floor(i / 3), 32, 32)
		}
		var leveltext = [
			['新兵', '+2攻击，2防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
			['老兵', '+3攻击，3防御'],
		]
		var text = [
			//['等级', hero.lv + '  ' + leveltext[hero.lv - 1][0]],
			//['经验', hero.exp + '/' + need],
			['血限', (hero.hpmax < 0 ? '\r[red]' : '') + core.getRealStatus('hpmax') + '\r'],
			['生命', (hero.mdef < 0 ? '\r[red]' : '') + hero.hp + '\r'],
			['攻击', (hero.atk < 0 ? '\r[red]' : '') + hero.atk + '\r'],
			['防御', (hero.def < 0 ? '\r[red]' : '') + hero.def + '\r'],
			['护盾', (hero.mdef < 0 ? '\r[red]' : '') + hero.mdef + '\r'],
			['魔量', hero.mana],
			['钥匙', core.itemCount('yellowKey') + '/' + core.itemCount('blueKey') + '/' + core.itemCount('redKey')],
			['钥匙', core.itemCount('whiteKey') + '/' + core.itemCount('I422') + '\r'],
			['金币', hero.money],
			['黑暗圣子', flags.heianshengzi || 0],
			['圣骑士', flags.shengqishi || 0],
			['准圣子', flags.zhunshengzi || 0],
			['光明圣女', flags.guangmingshengnv || 0],
			
		]
		var text2 = [
			//['等级', '下级' + leveltext[hero.lv - 1][1]],
			//['经验', '积累达到最大时角色升级'],
			['血限', '玩家最多拥有的生命'],
			['生命', '生命不足时游戏结束'],
			['攻击', '影响角色每次普攻伤害'],
			['防御', '影响角色受到攻击的直接减伤'],
			['护盾', '每次战斗会抵挡伤害'],
			['魔量', '用于施放技能的消耗'],
			['钥匙', '用于开启黄/蓝/红/绿门'],
			['钥匙', '用于开启白/黑门'],
			['金币', '用于商店购买的货币'],
			['黑暗圣子', flags.heianshengzi ? '已融合黑暗圣子' : '未融合黑暗圣子'],
			['圣骑士', '和圣骑士亲密度'],
			['准圣子', '和光明准圣子亲密度'],
			['光明圣女', '和光明圣女亲密度'],
		]

		core.setFilter(ctx, 'hue-rotate(' + (col || 0) + 'deg)grayscale(' + (gry || 0) + '%)')

		if (flags._Spr1Move2_) {
			core.drawImage(ctx, 'boxLight.png', 0, 0, 48, 48, flags._Spr1Move2_[0] - 24, flags._Spr1Move2_[1] - 24, 48, 48);
			var h = 20;
			var list = flags._Spr1Move2_[2]

			core.drawWindowSkin('winskin.png', ctx, flags._Spr1Move2_[0], flags._Spr1Move2_[1] - 40, 100, 40)
			core.drawWindowSkin('winskin.png', ctx, flags._Spr1Move2_[0], flags._Spr1Move2_[1] - 40 - h, 100, 20)


			core.setFilter(ctx, '')

			var config = { left: flags._Spr1Move2_[0] + 4, top: flags._Spr1Move2_[1] - 25 - h - 12, fontSize: 12, maxWidth: 95, bold: false, color: "white" };
			core.drawTextContent(ctx, text[list][0] + ':' + text[list][1], config);
			var config = { left: flags._Spr1Move2_[0] + 4, top: flags._Spr1Move2_[1] - 25 - 12, fontSize: 12, maxWidth: 95, bold: false, color: "white" };
			core.drawTextContent(ctx, text2[list][1], config);


			core.setFilter(ctx, fil)

		}

		if (flags._Spr1Move_ >= 8 && flags._Spr1Move_ < 11) {
			core.drawImage(ctx, 'box2Light.png', 0, 0, 144, 96, 38 + 152 + 422, 166, 144, 96);
		}
		if (flags._Spr1Move_ == 7) {
			core.drawImage(ctx, 'box1Light.png', 0, 0, 144, 96, 38 + 152 + 422, 384, 144, 96);
		}

		core.setFilter(ctx, '')

		core.getSprite('Spr1').canvas.style.width = core.getSprite('Spr1').canvas.width * core.domStyle.scale + 'px';
		core.getSprite('Spr1').canvas.style.height = core.getSprite('Spr1').canvas.height * core.domStyle.scale + 'px';

		if (core.getSprite('Spr1')) {
			if (core.platform.isPC) {
				core.getSprite('Spr1').addEventListener("click", core.Spr1Click, false) ///监听点击
				core.getSprite('Spr1').addEventListener("mousemove", core.Spr1Move, false) ///监听移动
			} else {
				core.getSprite('Spr1').addEventListener("touchstart", core.Spr1TS, false) ///监听点击
				core.getSprite('Spr1').addEventListener("touchend", core.Spr1TE, false) ///监听移动
			}

		}
		//console.log(1)
	}

	core.createSpr2 = function (des) {
		if (main.replayChecking || !core.status.played)
			return;
		var left = parseInt(core.dom.gameGroup.style.left);
		var top_up = parseInt(core.dom.gameGroup.style.top);
		var width = 748 + 100;
		var height = 560;
		if (core.domStyle.isVertical) {
			top_up += core.domStyle.scale * (-96);
		} else {
			top_up -= 16 * core.domStyle.scale;
		}
		if (core.getSprite('Spr2') && des) {
			core.getSprite('Spr2').destroy();
			const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 10, 'window', 'Spr2');
		} else if (core.getSprite('Spr2')) {
			core.clearMap(core.getSprite('Spr2').context);

		} else { const sprite = new Sprite(core.domStyle.isVertical ? 0 : Math.floor(left - (16 + 172 - 0) * core.domStyle.scale), Math.floor(top_up - (64 + 0) * core.domStyle.scale), width, height, 10, 'window', 'Spr2'); }

		var ctx = core.getSprite('Spr2').context;

		core.clearMap(ctx);

		//等级
		if (core.domStyle.isVertical) {
			core.mystatusNumber(ctx, 'hpmax', null, 48, 16, 160);
			core.mystatusNumber(ctx, 'hp', null, 48 + 22, 16 + 22, 250);
		} else {
			core.mystatusNumber(ctx, 'hpmax', null, 80, 100, 160);
			core.mystatusNumber(ctx, 'hp', null, 80 + 12, 122, 250);
		}
		var need = core.firstData.levelUp[core.status.hero.lv].need;
		if (!core.domStyle.isVertical) {
		core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * hero.hp / core.getRealStatus('hpmax'), 32, 60 - 16 + 4, 142, 128 * hero.hp / core.getRealStatus('hpmax'), 32)
		core.drawImage(ctx, 'manaL.png', 0, 0, 128, 32, 60 - 16 + 4, 142, 128, 32)
		}
		//状态
		var heroStatus = ['atk', 'mdef', core.domStyle.isVertical ? null : 'key1']
		var Scol = [140, 280, 180]
		var heroStatus2 = ['def', 'mana', core.domStyle.isVertical ? null : core.isShopVisited('shop4') ? 'key2' : null]
		var Scol2 = [0, 20, 300, 0]
		if (core.domStyle.isVertical) {
			for (var i in heroStatus2)
				if (heroStatus2[i] != null)
					core.mystatusNumber(ctx, heroStatus2[i], null, 48 + 22 + 128 * Number(i), 80 + 22, Scol2[i]);
			for (var i in heroStatus)
				core.mystatusNumber(ctx, heroStatus[i], null, 48 + 128 * Number(i), 80, Scol[i]);
		}
		else {
			for (var i in heroStatus2)
				if (heroStatus2[i] != null)
					core.mystatusNumber(ctx, heroStatus2[i], null, 80 + 22, 100 + 122 + 60 * Number(i), Scol2[i]);
			for (var i in heroStatus)
				core.mystatusNumber(ctx, heroStatus[i], null, 80, 100 + 100 + 60 * Number(i), Scol[i]);
		}
		//魔力
		if (core.domStyle.isVertical) {
			if (flags.qmd) {
				core.mystatusNumber(ctx, 'shengqishi', null, 280 + 15 - 5 * (flags.shengqishi.toString().length) + 32, 116, 120);
				core.mystatusNumber(ctx, 'zhunshengzi', null, 280 + 15 - 5 * (flags.zhunshengzi.toString().length) + 64, 116, 0);
				core.mystatusNumber(ctx, 'guangmingshengnv', null, 280 + 15 - 5 * (flags.guangmingshengnv.toString().length) + 96, 116, 300);
			}
			//core.setAlpha(ctx, 0.4)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * hero.mana / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * hero.mana / hero.manamax, 32)
			core.setAlpha(ctx, 1)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32)
			//core.drawImage(ctx, 'manaL.png', 0, 0, 128, 32, 60 - 16 + 4 + 152 + 422, 142, 128, 32)
			//钥匙/金币
			//if (flags.szx)
			core.mystatusNumber(ctx, 'key1', null, 48 + 256, 16, 180);
			if (core.isShopVisited('shop4'))
			core.mystatusNumber(ctx, 'key2', null, 48 + 256 + 22, 16 + 22, 300);
			core.mystatusNumber(ctx, 'money', null, 48 + 128 + 22, 16 + 22, 180);
		}
		else {
			if (flags.qmd) {
				//38 + 152 + 422 + 8 + 32 * i -> 32 + 256 + 32 * i
				core.mystatusNumber(ctx, 'shengqishi', null, 38 + 152 + 422 + 15 - 5 * (flags.shengqishi.toString().length) + 32, 140, 120);
				core.mystatusNumber(ctx, 'zhunshengzi', null, 38 + 152 + 422 + 15 - 5 * (flags.zhunshengzi.toString().length) + 64, 140, 0);
				core.mystatusNumber(ctx, 'guangmingshengnv', null, 38 + 152 + 422 + 15 - 5 * (flags.guangmingshengnv.toString().length) + 96, 140, 300);
			}
			//core.setAlpha(ctx, 0.4)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * hero.mana / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * hero.mana / hero.manamax, 32)
			core.setAlpha(ctx, 1)
			//core.drawImage(ctx, 'manaLt.png', 0, 0, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32, 60 - 16 + 4 + 152 + 422, 142, 128 * (hero.mana - (flags.skillmana || 0)) / hero.manamax, 32)
			//core.drawImage(ctx, 'manaL.png', 0, 0, 128, 32, 60 - 16 + 4 + 152 + 422, 142, 128, 32)
			//钥匙/金币
			//if (flags.szx)
			//core.mystatusNumber(ctx, 'potion1', null, 80 + 152 + 422, 60 * 4, 180);
			//if (flags.szx)
			//core.mystatusNumber(ctx, 'potion2', null, 80 + 22 + 152 + 422, 22 + 60 * 4, 300);
			core.mystatusNumber(ctx, 'money', null, 80 + 152 + 422, 60 * 5, 180);
		}

		core.getSprite('Spr2').canvas.style.width = core.getSprite('Spr2').canvas.width * core.domStyle.scale + 'px';
		core.getSprite('Spr2').canvas.style.height = core.getSprite('Spr2').canvas.height * core.domStyle.scale + 'px';


		//console.log(2)
	}

	core.Spr1Click = function (e) {
		if (main.replayChecking || !core.status.played)
			return;
		e.stopPropagation();

		var x = e.clientX, ///获取鼠标点击位置
			y = e.clientY;
		x = Math.round((x - core.getSprite('Spr1').canvas.offsetLeft) / core.domStyle.scale);
		y = Math.round((y - core.getSprite('Spr1').canvas.offsetTop) / core.domStyle.scale);

		var i = flags._Spr1Move_ - 1
		switch (i) {
		case 0:
			main.statusBar.image.book.onclick(e);
			break;
		case 1:
			main.statusBar.image.fly.onclick(e);
			break;
		case 2:
			main.statusBar.image.toolbox.onclick(e);
			break;
		case 3:
			main.statusBar.image.save.onclick(e);
			break;
		case 4:
			main.statusBar.image.load.onclick(e);
			break;
		case 5:
			main.statusBar.image.settings.onclick(e);
			break;
		case 6:
			main.core.openEquipbox(true)
			break;
		case 7:
			main.statusBar.image.keyboard.onclick(e);
			break;
		case 8:
			main.statusBar.image.shop.onclick(e);
			break;
		case 9:
			if (!core.status.lockControl) main.core.ui._drawReplay();
			break;
		case 10:
			if (!core.status.lockControl && core.hasItem('I710')) core.useItem('I710');
			break;
		case 11:
			if (!core.status.lockControl && core.hasItem('I711')) core.useItem('I711');
			break;
		case 12:
			if (!core.status.lockControl && core.hasItem('I712')) core.useItem('I712');
			break;
		case 13:
			if (!core.status.lockControl && core.hasItem('I713')) core.useItem('I713');
			break;
		case 14:
			if (!core.status.lockControl && core.hasItem('I714')) core.useItem('I714');
			break;
		case 15:
			if (!core.status.lockControl && core.hasItem('I415')) core.useItem('I415');
			break;
		case 16:
			if (!core.status.lockControl && core.hasItem('I416')) core.useItem('I416');
			break;
		
		}
		//console.log("点击的位置合法，x:" + x + 'y:' + y);

	}

	core.Spr1Move = function (e) {
		if (main.replayChecking || !core.status.played)
			return;
		e.stopPropagation();
		var x = e.clientX, ///获取鼠标点击位置
			y = e.clientY;
		x = Math.round((x - core.getSprite('Spr1').canvas.offsetLeft) / core.domStyle.scale);
		y = Math.round((y - core.getSprite('Spr1').canvas.offsetTop) / core.domStyle.scale);

		//方按钮
		var i = flags._Spr1Move_;
		var j;

		for (var nx = 0; nx < 3; nx++)
			for (var ny = 0; ny < 2; ny++) {
				if (x >= 62 + 32 * nx && x < 94 + 32 * nx && y >= 400 + 32 * ny && y < 432 + 32 * ny)
					j = nx + 3 * ny + 1
			}
		if (x >= 636 && x < 668 && y >= 180 && y < 212)
			j = 8
		if (x >= 668 && x < 700 && y >= 180 && y < 212)
			j = 9
		if (x >= 700 && x < 732 && y >= 180 && y < 212)
			j = 10
		if (x >= 636 && x < 732 && y >= 400 && y < 464)
			j = 7
		if (x >= 620 && x < 748 && y >= 224 && y < 256)
			j = 11 + Math.floor((x - 620) / 32)
		if (x >= 620 && x < 748 && y >= 256 && y < 288)
			j = 15 + Math.floor((x - 620) / 32)
		

		if (i !== j) {
			flags._Spr1Move_ = j;
			core.createSpr0();
			core.createSpr1();
		}
		//圆按钮
		var ri = 0;
		var rj2 = 0;
		var rj
		var rx = [80, 102, 80, 102, 80, 102, 80, 102, 654, 659, 691, 723, 755]
		var ry = [100, 122, 200, 222, 260, 282, 320, 342, 300, 144, 144, 144, 144]
		for (var r in rx) {
			if ((rx[r] - 24 - x) * (rx[r] - 24 - x) + (ry[r] + 6 - y) * (ry[r] + 6 - y) <= 16 * 16)
				rj = [rx[r] - 24, ry[r] + 6, r];

		}
		if (flags._Spr1Move2_)
			ri = flags._Spr1Move2_[2];
		if (rj)
			rj2 = rj[2];
		//console.log(rj2 + "点" + rj);
		if (ri !== rj2) {
			flags._Spr1Move2_ = rj;
			core.createSpr1();
		}
	}

	core.Spr1TS = function(e) {
		if (main.replayChecking || !core.status.played)
			return;
		e.stopPropagation();

		var x = e.touches[0].clientX, ///获取鼠标点击位置
			y = e.touches[0].clientY;
		x = Math.round((x - core.getSprite('Spr1').canvas.offsetLeft) / core.domStyle.scale);
		y = Math.round((y - core.getSprite('Spr1').canvas.offsetTop) / core.domStyle.scale);
		//方按钮
		var i = flags._Spr1Move_;
		var j;

		for (var nx = 0; nx < 3; nx++)
			for (var ny = 0; ny < 2; ny++) {
				if (x >= 62 + 32 * nx && x < 94 + 32 * nx && y >= 400 + 32 * ny && y < 432 + 32 * ny)
					j = nx + 3 * ny + 1
			}
		if (x >= 636 && x < 668 && y >= 180 && y < 212)
			j = 8
		if (x >= 668 && x < 700 && y >= 180 && y < 212)
			j = 9
		if (x >= 700 && x < 732 && y >= 180 && y < 212)
			j = 10
		if (x >= 636 && x < 732 && y >= 400 && y < 464)
			j = 7

		if (i !== j) {
			flags._Spr1Move_ = j;
			core.createSpr0();
			core.createSpr1();
		}
		
		i = flags._Spr1Move_ - 1
		switch (i) {
		case 0:
			main.statusBar.image.book.onclick(e);
			break;
		case 1:
			main.statusBar.image.fly.onclick(e);
			break;
		case 2:
			main.statusBar.image.toolbox.onclick(e);
			break;
		case 3:
			main.statusBar.image.save.onclick(e);
			break;
		case 4:
			main.statusBar.image.load.onclick(e);
			break;
		case 5:
			main.statusBar.image.settings.onclick(e);
			break;
		case 6:
			main.core.openEquipbox(true)
			break;
		case 7:
			main.statusBar.image.keyboard.onclick(e);
			break;
		case 8:
			main.statusBar.image.shop.onclick(e);
			break;
		case 9:
			main.core.ui._drawReplay();
		}
	}

	core.Spr1TE = function(e) {
		
	}
	core.AllSprites = function () {

		{
			core.createSprBack(true);
			core.createSpr0(true);
			core.createSpr1(true);
			core.createSpr2(true);
		}

	}
},
    "对话框": function () {
	ui.prototype.drawWindowSkin = function (background, ctx, x, y, w, h, direction, px, py) {
		var col = flags._statuscol_;
		var brg = flags._statusbrg_;
		var gry = flags._statusgry_;

		var fil = 'hue-rotate(' + (col || 0) + 'deg)brightness(' + (brg || 1) + ')grayscale(' + (gry || 0) + '%)'

		core.setFilter(ctx, fil)

		background = background || core.status.textAttribute.background;
		// 仿RM窗口皮肤 ↓
		// 绘制背景
		core.drawImage(ctx, background, 0, 0, 128, 128, x + 2, y + 2, w - 4, h - 4);
		// 绘制边框
		// 上方
		core.drawImage(ctx, background, 128, 0, 16, 16, x, y, 16, 16);
		for (var dx = 0; dx < w - 64; dx += 32) {
			core.drawImage(ctx, background, 144, 0, 32, 16, x + dx + 16, y, 32, 16);
			core.drawImage(ctx, background, 144, 48, 32, 16, x + dx + 16, y + h - 16, 32, 16);
		}
		core.drawImage(ctx, background, 144, 0, w - dx - 32, 16, x + dx + 16, y, w - dx - 32, 16);
		core.drawImage(ctx, background, 144, 48, w - dx - 32, 16, x + dx + 16, y + h - 16, w - dx - 32, 16);
		core.drawImage(ctx, background, 176, 0, 16, 16, x + w - 16, y, 16, 16);
		// 左右
		for (var dy = 0; dy < h - 64; dy += 32) {
			core.drawImage(ctx, background, 128, 16, 16, 32, x, y + dy + 16, 16, 32);
			core.drawImage(ctx, background, 176, 16, 16, 32, x + w - 16, y + dy + 16, 16, 32);
		}
		core.drawImage(ctx, background, 128, 16, 16, h - dy - 32, x, y + dy + 16, 16, h - dy - 32);
		core.drawImage(ctx, background, 176, 16, 16, h - dy - 32, x + w - 16, y + dy + 16, 16, h - dy - 32);
		// 下方
		core.drawImage(ctx, background, 128, 48, 16, 16, x, y + h - 16, 16, 16);
		core.drawImage(ctx, background, 176, 48, 16, 16, x + w - 16, y + h - 16, 16, 16);

		// arrow
		if (px != null && py != null) {
			if (direction == 'up') {
				core.drawImage(ctx, background, 128, 96, 32, 32, px, y + h - 3, 32, 32);
			} else if (direction == 'down') {
				core.drawImage(ctx, background, 160, 96, 32, 32, px, y - 29, 32, 32);
			}
		}
		core.setFilter(ctx, null)
		// 仿RM窗口皮肤 ↑
	}


	ui.prototype._drawTextBox_drawTitleAndIcon = function (titleInfo, hPos, vPos, alpha, ctx) {
		ctx = ctx || 'ui';
		core.setTextAlign(ctx, 'left');
		var textAttribute = core.status.textAttribute;
		var content_top = vPos.top + 15;
		var image_top = vPos.top + 15;
		if (titleInfo.title != null) {
			var titlefont = textAttribute.titlefont;
			content_top += titlefont + 5;
			image_top = vPos.top + 40;
			core.setFillStyle(ctx, core.arrayToRGB(textAttribute.title));
			core.setStrokeStyle(ctx, core.arrayToRGB(textAttribute.title));

			// --- title也要居中或者右对齐？
			var title_width = core.calWidth(ctx, titleInfo.title, this._buildFont(titlefont, true));
			var title_left = hPos.content_left;
			if (textAttribute.align == 'center')
				title_left = hPos.left + (hPos.width - title_width) / 2;
			else if (textAttribute.align == 'right')
				title_left = hPos.right - title_width - 12;

			core.fillText(ctx, titleInfo.title, title_left, vPos.top + 8 + titlefont);
		}
		if (titleInfo.icon != null) {
			core.setAlpha(ctx, alpha);
			core.strokeRect(ctx, hPos.left + 15 - 1, image_top - 1, 34, titleInfo.height + 2, null, 2);
			core.setAlpha(ctx, 1);
			core.status.boxAnimateObjs = [];
			// --- 勇士
			if (titleInfo.image == core.material.images.hero) {
				if (core.status.hero.animate) {
					var direction = core.getHeroLoc('direction');
					if (direction == 'up') direction = 'down';
					core.status.boxAnimateObjs.push({
						'bgx': hPos.left + 15,
						'bgy': image_top,
						'bgWidth': 32,
						'bgHeight': titleInfo.height,
						'x': hPos.left + 15,
						'y': image_top,
						'height': titleInfo.height,
						'animate': 4,
						'image': titleInfo.image,
						'pos': core.material.icons.hero[direction].loc * titleInfo.height,
						ctx: ctx,
					})
				} else {
					core.clearMap(ctx, hPos.left + 15, image_top, 32, titleInfo.height);
					core.fillRect(ctx, hPos.left + 15, image_top, 32, titleInfo.height, core.material.groundPattern);
					core.drawImage(ctx, titleInfo.image, 0, 0, core.material.icons.hero.width || 32, core.material.icons.hero.height,
						hPos.left + 15, image_top, 32, titleInfo.height);
				}
			} else {
				if (titleInfo.bigImage) {
					core.status.boxAnimateObjs.push({
						bigImage: titleInfo.bigImage,
						face: titleInfo.face,
						centerX: hPos.left + 15 + 16,
						centerY: image_top + titleInfo.height / 2,
						max_width: 50,
						ctx: ctx
					});
				} else {
					core.status.boxAnimateObjs.push({
						'bgx': hPos.left + 15,
						'bgy': image_top,
						'bgWidth': 32,
						'bgHeight': titleInfo.height,
						'x': hPos.left + 15,
						'y': image_top,
						'height': titleInfo.height,
						'animate': titleInfo.animate,
						'image': titleInfo.image,
						'pos': titleInfo.icon * titleInfo.height,
						ctx: ctx,
					});
				}
			}
			core.drawBoxAnimate();
		}
		if (titleInfo.image != null && titleInfo.icon == null) { // 头像图
			console.log(titleInfo.image)
			core.strokeRect(ctx, hPos.left + 10 - 5, vPos.top + 10 - 5, 70 + 10, 70 + 10, '#cccccc', 3)
			core.drawImage(ctx, titleInfo.image, 0, 0, titleInfo.image.width, titleInfo.image.height,
				hPos.left + 10, vPos.top + 10, 70, 70);
		}
		return content_top;
	}
},
    "自动拾取！": function () {
	var enable = true;
	if (!enable) return;
	// 
	// var noUpdate = false;
	////// 更新状态栏 ////// 不建议状态栏刷新后触发 容易导致录像不一致的问题
	//control.prototype.updateStatusBar = function (doNotCheckAutoEvents) {
	//	if (!core.isPlaying()) return;
	//	if (noUpdate) return;
	//	noUpdate = true;
	//	core.autoGetItem();
	//	noUpdate = false;
	//	this.controldata.updateStatusBar();
	//	if (!doNotCheckAutoEvents) core.checkAutoEvents();
	//	this._updateStatusBar_setToolboxIcon();
	//	core.clearRouteFolding();
	//}

	////// 每移动一格后执行的事件 //////
	control.prototype.moveOneStep = function (callback) {
		core.autoGetItem();
		return this.controldata.moveOneStep(callback);
	}

	function bfsFlood(sx, sy, blockfn) {
		var canMoveArray = core.generateMovableArray();
		var blocksObj = core.getMapBlocksObj();
		var bgMap = core.getBgMapArray();

		var visited = [],
			queue = [];
		visited[sx + "," + sy] = 0;
		queue.push(sx + "," + sy);

		while (queue.length > 0) {
			var now = queue.shift().split(","),
				x = ~~now[0],
				y = ~~now[1];
			for (var direction in core.utils.scan) {
				if (!core.inArray(canMoveArray[x][y], direction)) continue;
				var nx = x + core.utils.scan[direction].x,
					ny = y + core.utils.scan[direction].y,
					nindex = nx + "," + ny;
				if (visited[nindex]) continue;
				if (core.onSki(bgMap[ny][nx])) continue;
				if (blockfn && !blockfn(blocksObj, nx, ny)) continue;
				visited[nindex] = visited[now] + 1;
				queue.push(nindex);
			}
		}
	}

	function attractAnimate() {
		var name = 'attractAnimate';
		var isPlaying = false;
		this.nodes = [];

		this.add = function (id, x, y, callback) {
			this.nodes.push({ id: id, x: x, y: y, callback: callback });
		}
		this.start = function () {
			if (isPlaying) return;
			isPlaying = true;
			core.registerAnimationFrame(name, true, this.update);
			this.ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 120);
		}
		this.remove = function () {
			core.unregisterAnimationFrame(name);
			core.deleteCanvas(name);
			isPlaying = false;
		}
		this.clear = function () {
			this.nodes = [];
			this.remove();
		}
		var lastTime = -1;
		var self = this;
		this.update = function (timeStamp) {
			if (lastTime < 0) lastTime = timeStamp;
			if (timeStamp - lastTime < 20) return;
			lastTime = timeStamp;
			core.clearMap(name);
			var cx = core.status.heroCenter.px - 16,
				cy = core.status.heroCenter.py - 16;
			var thr = 5; //缓动比例倒数 越大移动越慢
			self.nodes.forEach(function (n) {
				var dx = cx - n.x,
					dy = cy - n.y;
				if (Math.abs(dx) <= thr && Math.abs(dy) <= thr) {
					n.dead = true;
				} else {
					n.x += ~~(dx / thr);
					n.y += ~~(dy / thr);
				}
				core.drawIcon(name, n.id, n.x, n.y, 32, 32);
			});
			self.nodes = self.nodes.filter(function (n) {
				if (n.dead && n.callback) {
					n.callback();
				}
				return !n.dead;
			});
			if (self.nodes.length == 0)
				self.remove();
		}
	}


	var animateHwnd = new attractAnimate();

	this.stopAttractAnimate = function () {
		animateHwnd.clear();
	}

	this.autoGetItem = function () {
		var canGetItems = {};
		if (!core.status.floorId || !core.status.checkBlock.damage || core.status.event.id == 'action' || core.status.lockControl) return;
		if (core.getFlag("shiqu", 0) == 0) return;
		if (Object.keys(core.status.checkBlock.damage).indexOf(core.status.hero.loc.x + "," + core.status.hero.loc.y) != -1 && core.status.checkBlock.damage[core.status.hero.loc.x + "," + core.status.hero.loc.y] >= 1) return
		if (Object.keys(core.status.checkBlock.ambush).indexOf(core.status.hero.loc.x + "," + core.status.hero.loc.y) != -1) return
		if (Object.keys(core.status.checkBlock.repulse).indexOf(core.status.hero.loc.x + "," + core.status.hero.loc.y) != -1) return

		bfsFlood(core.getHeroLoc('x'), core.getHeroLoc('y'), function (blockMap, x, y) {
			var idx = x + ',' + y;
			if (idx in canGetItems) return false;
			var blk = blockMap[idx];
			if (blk && !blk.disable && blk.event.cls == 'items' && !core.isMapBlockDisabled(core.status.floorId, blk.x, blk.y) && blk.event.trigger == 'getItem') {
				canGetItems[idx] = { x: x, y: y, id: blk.event.id };
				return !core.status.checkBlock.damage[idx] && !core.status.checkBlock.ambush[idx];
			}
			return core.maps._canMoveDirectly_checkNextPoint(blockMap, x, y);
		});
		for (var k in canGetItems) {
			var x = canGetItems[k].x,
				y = canGetItems[k].y,
				id = canGetItems[k].id;
			core.trigger(x, y);
			animateHwnd.add(id, x * 32, y * 32);
		}
		animateHwnd.start();
	}
},
    "宝石血瓶数据显示": function () {
	/* 宝石血瓶左下角显示数值
	 * 需要将 变量：itemDetail改为true才可正常运行
	 * 请尽量减少勇士的属性数量，否则可能会出现严重卡顿（划掉，现在你放一万个属性也不会卡）
	 * 注意：这里的属性必须是core.status.hero里面的，flag无法显示
	 * 如果不想显示，可以core.setFlag("itemDetail", false);
	 * 然后再core.getItemDetail();
	 * 如有bug在大群或造塔群@古祠
	 */

	// 忽略的道具
	const ignore = ['superPotion'];
	const box = ['X10110', 'X60549', 'X60408'];
	const portals = ['upPortal', 'downPortal', 'leftPortal', 'rightPortal'];

	// 取消注释下面这句可以减少超大地图的判定。
	// 如果地图宝石过多，可能会略有卡顿，可以尝试取消注释下面这句话来解决。
	// core.bigmap.threshold = 256;
	const origin = core.control.updateStatusBar;
	core.updateStatusBar = core.control.updateStatusBar = function () {
		if (core.getFlag('__statistics__')) return;
		else return origin.apply(core.control, arguments);
	}

	core.control.updateDamage = function (floorId, ctx) {
		floorId = floorId || core.status.floorId;
		if (!floorId || core.status.gameOver || main.mode != 'play') return;
		const onMap = ctx == null;

		// 没有怪物手册
		if (!core.hasItem('book')) return;
		core.status.damage.posX = core.bigmap.posX;
		core.status.damage.posY = core.bigmap.posY;
		if (!onMap) {
			const width = core.floors[floorId].width,
				height = core.floors[floorId].height;
			// 地图过大的缩略图不绘制显伤
			if (width * height > core.bigmap.threshold) return;
		}
		this._updateDamage_damage(floorId, onMap);
		this._updateDamage_extraDamage(floorId, onMap);
		core.getItemDetail(floorId); // 宝石血瓶详细信息
		this.drawDamage(ctx);
	};
	this.nextCriticals = function (enemy, number, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		if (core.lhjnb[enemy.id]) return core.lhjnb[enemy.id];
		number = number || 1;

		var specialCriticals = core.enemys._nextCriticals_special(enemy, number, x, y, floorId);
		if (specialCriticals != null) return core.lhjnb[enemy.id] = specialCriticals;
		var info = core.enemys.getDamageInfo(enemy, null, x, y, floorId);
		if (info == null) { // 如果未破防...
			var overAtk = core.enemys._nextCriticals_overAtk(enemy, x, y, floorId);
			if (overAtk == null) return core.lhjnb[enemy.id] = [];
			if (typeof overAtk[1] == 'number') return core.lhjnb[enemy.id] = [
				[overAtk[0], -overAtk[1]]
			];
			info = overAtk[1];
			info.__over__ = true;
			info.__overAtk__ = overAtk[0];
		}

		if (typeof info == 'number') return core.lhjnb[enemy.id] = [
			[0, 0]
		];
		if (info.damage <= 0 && !core.flags.enableNegativeDamage) {
			return core.lhjnb[enemy.id] = [
				[info.__overAtk__ || 0, 0]
			];
		}

		if (core.flags.useLoop) {
			if (core.status.hero.atk <= (main.criticalUseLoop || 1)) {
				return core.lhjnb[enemy.id] = core.enemys._nextCriticals_useLoop(enemy, info, number, x, y, floorId);
			} else {
				return core.lhjnb[enemy.id] = core.enemys._nextCriticals_useBinarySearch(enemy, info, number, x, y, floorId);
			}
		} else {
			return core.lhjnb[enemy.id] = core.enemys._nextCriticals_useTurn(enemy, info, number, x, y, floorId);
		}
	}
	core.control._updateDamage_damage = function (floorId, onMap) {
		core.status.damage.data = [];
		if (!core.flags.displayEnemyDamage && !core.flags.displayExtraDamage) return;

		core.extractBlocks(floorId);
		core.lhjnb = {}
		core.status.maps[floorId].blocks.forEach(function (block) {
			var x = block.x,
				y = block.y;

			// v2优化，只绘制范围内的部分
			if (onMap && core.bigmap.v2) {
				if (x < core.bigmap.posX - core.bigmap.extend || x > core.bigmap.posX + core._WIDTH_ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend || y > core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend) {
					return;
				}
			}


			if (!block.disable && block.event.cls.indexOf('enemy') == 0 && block.event.displayDamage !== false) {
				if (core.flags.displayCritical) {
					var critical = core.plugin.nextCriticals(block.event.id, 1, x, y, floorId);
					critical = core.formatBigNumber((critical[0] || [])[0], true);
					if (critical == '???') critical = '?';
					core.status.damage.data.push({ text: critical, px: 32 * x + 1, py: 32 * (y + 1) - 11, color: '#FFFFFF' });
				}
				if (core.flags.displayEnemyDamage) {
					var damageString = core.enemys.getDamageString(block.event.id, x, y, floorId);
					core.status.damage.data.push({ text: damageString.damage, px: 32 * x + 1, py: 32 * (y + 1) - 1, color: damageString.color });
					if (core.material.enemys[block.event.id].beforeBattle) {
						var t = core.material.enemys[block.event.id].beforeBattle[0].condition;
						if (t[0] == '(') t = t.substring(1, t.length - 1);
						t = t.replace('flag:shengqishi', '');
						t = t.replace('flag:heianshengzi===1', '黑暗');
						core.status.damage.data.push({ text: t, px: 32 * x + 1, py: 32 * (y + 1) - 21, color: '#FFFFFF' });
						t = core.material.enemys[block.event.id].beforeBattle[0].condition;
						t = t.replace('flag:shengqishi', flags.shengqishi || 0);
						t = t.replace('flag:heianshengzi', flags.heianshengzi || 0);
						if (eval(t)) {
							core.status.damage.data = core.status.damage.data.filter(t => (t.px != 32 * x + 1 || (t.py != 32 * (y + 1) - 1 && t.py != 32 * (y + 1) - 11 && t.py != 32 * (y + 1) - 21)))
							diff = {}
							const before = core.status.hero;
							const hero = core.clone(core.status.hero);
							const handler = {
								set(target, key, v) {
									diff[key] = (diff[key] || 0) + v - (target[key] || 0);
									if (!diff[key]) diff[key] = void 0;
									return true;
								}
							};
							core.status.hero = new Proxy(hero, handler);
							if (core.status.thisMap)
								for (var i of (core.material.enemys[block.event.id].beforeBattle[0].true))
									if (i.type == 'setValue') {
										var value = core.events._updateValueByOperator(core.calValue(i.value), core.calValue(i.name), i.operator);
										core.events._setValue_setStatus(i.name, value);
										if ((i.name.indexOf("item:") == 0)) {
											var itemId = i.name.substring(5),
												count = core.itemCount(itemId);
											if (core.material.items[itemId].itemEffect) {
												for (var i = count; i < value; i++) eval(core.material.items[itemId].itemEffect);
											} else diff[itemId] = value - count;
										}

										//core.events._setValue_setBuff(i.name, value);
										//core.events._setValue_setItem(i.name, value);
										//core.events._setValue_setFlag(i.name, value);
										//core.events._setValue_setSwitch(i.name, value);
										//core.events._setValue_setTemp(i.name, value);
										//core.events._setValue_setGlobal(i.name, value);
										//core.events.setValue(i.name, i.operator, i.value);
									};
							var addPoint = { 'I359': 1, 'I598': 2, 'I599': 4, 'I600': 8, 'I601': 16, 'I602': 32, 'I603': 64, 'I604': 100 };
							diff['point'] = 0;
							for (var i in addPoint)
								if (diff[i]) diff['point'] += diff[i] * addPoint[i], diff[i] = 0;
							drawItemDetail(diff, x, y);
							core.status.hero = before;
							window.hero = before;
							window.flags = before.flags;
						}
					}
				}
			}
		});
	}
	// 获取宝石信息 并绘制
	this.getItemDetail = function (floorId) {
		if (!core.getFlag('itemDetail')) return;
		floorId = floorId ?? core.status.thisMap.floorId;
		let diff = {};
		const before = core.status.hero;
		const hero = core.clone(core.status.hero);
		const handler = {
			set(target, key, v) {
				diff[key] = (diff[key] || 0) + v - (target[key] || 0);
				if (!diff[key]) diff[key] = void 0;
				return true;
			}
		};
		core.status.hero = new Proxy(hero, handler);
		core.status.maps[floorId].blocks.forEach(function (block) {
			if (
				(block.event.cls !== 'items' || ignore.includes(block.event.id)) && !box.includes(block.event.id) && !portals.includes(block.event.id) ||
				block.disable
			)
				return;
			const x = block.x,
				y = block.y;
			// v2优化，只绘制范围内的部分
			if (core.bigmap.v2) {
				if (
					x < core.bigmap.posX - core.bigmap.extend ||
					x > core.bigmap.posX + core._SIZE_ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend ||
					y > core.bigmap.posY + core._SIZE_ + core.bigmap.extend
				) {
					return;
				}
			}
			diff = {};
			const id = block.event.id;
			const item = core.material.items[id];
			if (portals.includes(block.event.id)) {
				if (!block.event.trigger) {
					var dx = [0, 0, 1, -1],
						dy = [1, -1, 0, 0];
					for (var i = 0; i <= 4; i++) {
						if (i == 4) {
							drawItemDetail({ 'atk': 'X' }, x, y);
							break;
						}
						if (core.getBlock(x + dx[i], y + dy[i], floorId) && core.getBlock(x + dx[i], y + dy[i], floorId).event.trigger == "changeFloor") {
							drawItemDetail({ 'atk': core.getBlock(x + dx[i], y + dy[i], floorId).event.data.floorId }, x, y);
							break;
						}
					}
				} else if (block.event.trigger == "changeFloor") {
					drawItemDetail({ 'atk': block.event.data.floorId }, x, y);
				}
			}
			if (item && item.cls === 'equips') {
				// 装备也显示
				const diff = item.equip.value ?? {};
				const per = item.equip.percentage ?? {};
				for (const name in per) {
					diff[name + 'per'] = per[name].toString() + '%';
				}
				drawItemDetail(diff, x, y);
				return;
			}
			// 跟数据统计原理一样 执行效果 前后比较
			core.setFlag('__statistics__', true);
			try {
				var addPoint = { 'I359': 1, 'I598': 2, 'I599': 4, 'I600': 8, 'I601': 16, 'I602': 32, 'I603': 64, 'I604': 100, 'I1097': 200, 'I1098': 400, 'I1099': 800, 'I1100': 1600 };
				if (box.includes(block.event.id)) {
					for (var i of (block.event.data[0].yes[0].false))
						if (i.type == 'setValue') {
							var value = core.events._updateValueByOperator(core.calValue(i.value), core.calValue(i.name), i.operator);
							core.events._setValue_setStatus(i.name, value);
							if ((i.name.indexOf("item:") == 0)) {
								var itemId = i.name.substring(5),
									count = core.itemCount(itemId);
								if (core.material.items[itemId].itemEffect) {
									for (var i = count; i < value; i++) eval(core.material.items[itemId].itemEffect);
								} else diff[itemId] = value - count;
							}

							//core.events._setValue_setBuff(i.name, value);
							//core.events._setValue_setItem(i.name, value);
							//core.events._setValue_setFlag(i.name, value);
							//core.events._setValue_setSwitch(i.name, value);
							//core.events._setValue_setTemp(i.name, value);
							//core.events._setValue_setGlobal(i.name, value);
							//core.events.setValue(i.name, i.operator, i.value);
						};
					diff['mana'] += { 'X10110': 50, 'X60549': 200, 'X60408': 80 } [block.event.id] || 0;
					diff['point'] = 0;
					for (var i in addPoint)
						if (diff[i]) diff['point'] += diff[i] * addPoint[i], diff[i] = 0;
				} else {
					eval(item.itemEffect);
					if (addPoint[block.event.id])
						diff['point'] = addPoint[block.event.id]
				}
			} catch (error) {}
			drawItemDetail(diff, x, y);
		});
		core.status.hero = before;
		window.hero = before;
		window.flags = before.flags;
	};

	// 绘制
	function drawItemDetail(diff, x, y) {
		const px = 32 * x + 2,
			py = 32 * y + 30;
		let content = '';
		// 获得数据和颜色
		let i = 0;
		for (const name in diff) {
			if (!diff[name]) continue;
			let color = '#fff';

			if (typeof diff[name] === 'number')
				content = core.formatBigNumber(diff[name], true);
			else content = diff[name];
			switch (name) {
			case 'atk':
			case 'atkper':
				color = '#FF3A3A';
				break;
			case 'def':
			case 'defper':
				color = '#00E6F1';
				break;
			case 'mdef':
			case 'mdefper':
				color = '#6EFF83';
				break;
			case 'hp':
				color = '#A4FF00';
				break;
			case 'hpmax':
			case 'hpmaxper':
				color = '#F9FF00';
				break;
			case 'mana':
				color = '#c66';
				break;
			case 'yellowKey':
				color = '#fca';
				break;
			case 'blueKey':
				color = '#aad';
				break;
			case 'redKey':
				color = '#f88';
				break;
			case 'greenKey':
				color = '#8f8';
				break;
			case 'point':
				content = '+' + content;
				break;
			case 'money':
				color = '#7f7f7f'
				break;
			default:
				//console.log(name, diff[name])
				if (diff[name] == 1) content = core.material.items[name].name;
				else if (diff[name]) content = core.material.items[name].name + '*' + diff[name];
			}
			// 绘制
			core.status.damage.data.push({
				text: content,
				px: px,
				py: py - 10 * i,
				color: color
			});
			i++;
		}
	}
	// 在此增加新插件

}
}