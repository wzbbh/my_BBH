mui.init();
mui.ready(function() {
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	//calc hieght
	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	//create
	window.indexedList = new mui.IndexedList(list);
	//当前城市商圈选择
	mui('.trading-area').on('tap', 'li', function() {
		Array.from(this.parentElement.children).forEach(function(current) {
			current.className = '';
		});
		this.className = 'active';
		document.getElementById('trading').innerText = this.innerText;
	});
});

//国内，港澳台选项卡
$(".out_in div").on('tap', function() {
	var id = $(this).index();
	$(".out_in div").css('color', 'black').eq(id).css('color', 'lightseagreen');
	if(id == 0) {
		$(".line").css('margin-left', '0%');
		$("#list").show();
		$("#next_list").hide();
		$("#international").hide();
		$(".next_city").hide();
	} else if(id == 1) {
		$(".line").css('margin-left', '50%');
		$("#list").hide();
		$("#next_list").show();
		$("#international").show();
		$(".next_city").show();
	}
})
var vm = new Vue({
	el: ".mui-content",
	data: {
		is_show: false,
		flag: true,
		curindex: 0,
		letter : ["定位","最近","热门","A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
		city_name: [{
				name: "推荐"
			},
			{
				name: "港澳台"
			},
			{
				name: "新马泰"
			},
			{
				name: "日韩"
			},
			{
				name: "亚洲其他"
			},
			{
				name: "美洲"
			}
		],
		city: [{
				"name": "港澳台热门目的地",
				"doc": [{
						"name": "香港",
						"txt": "美食购物天堂"
					},
					{
						"name": "澳门",
						"txt": "国际烟花汇演"
					},
					{
						"name": "台北",
						"txt": "小吃夜市逛吃"
					},
					{
						"name": "高雄",
						"txt": "世界最美捷运站"
					}
				],
				"secondname": [{
						"name": "香港",
						"txt": [{"txt_name":"香港"}]
					},
					{
						"name": "澳门",
						"txt": [{"txt_name":"澳门"}]
					},
					{
						"name": "台湾",
						"txt": [{"txt_name":"台湾"}, {"txt_name":"台北"}, {"txt_name":"屏东"}, {"txt_name":"南投"}, {"txt_name":"高雄"}, {"txt_name":"新北"}, {"txt_name":"花莲"}, {"txt_name":"台中"}, {"txt_name":"桃园"}, {"txt_name":"台南"}, {"txt_name":"嘉义市"}, {"txt_name":"更多"}]
					}
				]
			},
			{
				"name": "新马泰热门目的地",
				"doc": [{
						"name": "曼谷",
						"txt": "千佛寺庙人妖风采"
					},
					{
						"name": "新加坡",
						"txt": "环球影城圣淘沙"
					},
					{
						"name": "普吉岛",
						"txt": "超高人气海岛群"
					},
					{
						"name": "吉隆坡",
						"txt": "登双子塔逛茨厂街"
					}
				],
				"secondname": [{
						"name": "泰国",
						"txt": [{"txt_name":"泰国"}, {"txt_name":"曼谷"}, {"txt_name":"普吉岛"}, {"txt_name":"芭提雅"}, {"txt_name":"清迈"}, {"txt_name":"苏梅岛"}, {"txt_name":"甲米"}, {"txt_name":"清莱"}, {"txt_name":"华欣"}]
					},
					{
						"name": "马来西亚",
						"txt": [{"txt_name":"马来西亚"},{"txt_name":"吉隆坡"}, {"txt_name":"亚庇"}, {"txt_name":"沙巴"}, {"txt_name":"槟城"}, {"txt_name":"新山"}, {"txt_name":"兰卡威"}]
					},
					{
						"name": "新加坡",
						"txt": [{"txt_name":"新加坡"}]
					}
				]
			},
			{
				"name": "日韩热门目的地",
				"doc": [{
						"name": "东京",
						"txt": "游迪士尼海洋公园"
					},
					{
						"name": "新加坡",
						"txt": "历史神社古刹京都"
					},
					{
						"name": "普吉岛",
						"txt": "环球影城蓝天大厦"
					},
					{
						"name": "吉隆坡",
						"txt": "韩餐购物汗蒸整容"
					}
				],
				"secondname": [{
						"name": "日本",
						"txt": [{"txt_name":"日本"}, {"txt_name":"东京"}, {"txt_name":"大阪"}, {"txt_name":"京都"}, {"txt_name":"千叶"}, {"txt_name":"爱知"}, {"txt_name":"名古屋"}, {"txt_name":"横滨"}, {"txt_name":"福冈"}, {"txt_name":"奈良"}, {"txt_name":"静冈"}, {"txt_name":"更多..."}]
					},
					{
						"name": "韩国",
						"txt": [{"txt_name":"韩国"}, {"txt_name":"首尔"}, {"txt_name":"京畿道"}, {"txt_name":"济州岛"}, {"txt_name":"釜山"}]
					}
				]
			},
			{
				"name": "亚洲其他热门目的地",
				"doc": [{
						"name": "巴厘岛",
						"txt": "海滩神庙皇宫梯田"
					},
					{
						"name": "芽庄",
						"txt": "游四岛漫步沙滩"
					},
					{
						"name": "暹粒",
						"txt": "观吴哥窟探崩密列"
					},
					{
						"name": "长滩岛",
						"txt": "漫步沙滩靠海而眠"
					}
				],
				"secondname": [{
						"name": "菲律宾",
						"txt": [{"txt_name":"菲律宾"}, {"txt_name":"马尼拉"}, {"txt_name":"宿雾"}, {"txt_name":"长滩岛"}]
					},
					{
						"name": "越南",
						"txt": [{"txt_name":"越南"}, {"txt_name":"芽庄"}, {"txt_name":"胡志明市"}, {"txt_name":"河内"}, {"txt_name":"岘港"},{"txt_name":"会安"}]
					},
					{
						"name": "柬埔寨",
						"txt": [{"txt_name":"柬埔寨"}, {"txt_name":"暹粒"}, {"txt_name":"金边"}]
					},
					{
						"name": "斯里兰卡",
						"txt": [{"txt_name":"斯里兰卡"}]
					},
					{
						"name": "印度",
						"txt": [{"txt_name":"印度"}]
					},
					{
						"name": "印度尼西亚",
						"txt": [{"txt_name":"印度尼西亚"}, {"txt_name":"巴厘岛"}, {"txt_name":"雅加达"}, {"txt_name":"泗水"}, {"txt_name":"万隆"},{"txt_name":"日惹"}]
					},
					{
						"name": "马尔代夫",
						"txt": [{"txt_name":"马尔代夫"}]
					},
					{
						"name": "尼泊尔",
						"txt": [{"txt_name":"尼泊尔"},{"txt_name":"加德满都"}]
					}
				]
			},
			{
				"name": "美洲热门目的地",
				"doc": [{
						"name": "洛杉矶",
						"txt": "好莱坞与迪士尼"
					},
					{
						"name": "纽约市",
						"txt": "国家象征自由女神"
					},
					{
						"name": "旧金山",
						"txt": "渔人码头看海狮"
					},
					{
						"name": "多伦多",
						"txt": "历史最悠久的古堡"
					}
				],
				"secondname": [{
						"name": "加拿大",
						"txt": [{"txt_name":"加拿大"},{"txt_name":"多伦多"},{"txt_name":"不列颠哥伦比亚省"}, {"txt_name":"安大略省"},{"txt_name":"温哥华"},{"txt_name":"蒙特娄"},{"txt_name":"渥太华"},{"txt_name":"魁北克"},{"txt_name":"尼亚加拉瀑布"}]
					},
					{
						"name": "墨西哥",
						"txt": [{"txt_name":"墨西哥"}, {"txt_name":"墨西哥城"}]
					},
					{
						"name": "巴西",
						"txt": [{"txt_name":"巴西"}]
					},
					{
						"name": "阿根廷",
						"txt": [{"txt_name":"阿根廷"}]
					},
					{
						"name": "美国",
						"txt": [{"txt_name":"美国"}, {"txt_name":"洛杉矶"}, {"txt_name":"纽约市"}, {"txt_name":"塞班岛"}, {"txt_name":"加利福尼亚"},{"txt_name":"旧金山"},{"txt_name":"拉斯维加斯"},{"txt_name":"新泽西州"},{"txt_name":"圣迭戈"},{"txt_name":"马萨诸塞州"},{"txt_name":"纽约州"},{"txt_name":"更多..."}]
					}
				]
			}
		],
		new_city: [],
		this_flag : false
	},
	updated: function() {
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005,
			indicators: false //是否显示滚动条
		})
	},
	methods: {
		toggle: function() {
			this.is_show = !this.is_show;
		},
		tab_city: function(index) { //左边选项卡事件
			this.curindex = index;
			if(index >= 1) {
				vm.new_city = [];
				vm.new_city.push(vm.city[index - 1]);
			}
			vm.this_flag = false;
		},
		more: function(s,t){        //s=curindex;t=当前的值text();
			var bb=[{txt_name:"温州"},{txt_name:"bbh"}];
			if(t!="更多..."){
					var view = plus.webview.currentWebview().opener();
					mui.fire(view, 'choose_city', {
						city: t
					});
					mui.back();
			}
			for(var j=0;j<vm.new_city[0].secondname.length;j++){
				for(var k=0;k<vm.new_city[0].secondname[j].txt.length;k++){
					if(s==3&&vm.new_city[0].secondname[j].txt[k].txt_name==t){
						if(t=="更多..."){							
							vm.new_city[0].secondname[j].txt[k].txt_name = bb[0].txt_name;   //更多替换掉
							if(!vm.this_flag){               		 //只触发一次
								for(var i=1;i<bb.length;i++){
									vm.new_city[0].secondname[j].txt.push(bb[i]);
								}
								vm.this_flag = true;	
							}
						}
					}else if(s==5&&vm.new_city[0].secondname[j].txt[k].txt_name==t){
						if(t=="更多..."){	
							vm.new_city[0].secondname[j].txt[k].txt_name = bb[0].txt_name;  //更多替换掉
							if(!vm.this_flag){               		 //只触发一次
								for(var i=1;i<bb.length;i++){
									vm.new_city[0].secondname[j].txt.push(bb[i]);
								}
								vm.this_flag = true;	
							}
						}
					}
				}
			}
		}
	}
})


//按钮返回首页
$("button").on('tap', function() {
	var view = plus.webview.currentWebview().opener();
	mui.fire(view, 'choose_city', {
		city: $(this).text()
	});
	mui.back();
})




$('.mui-indexed-list-item').on('tap', function() {
	var view = plus.webview.currentWebview().opener();
	mui.fire(view, 'choose_city', {
		city: $(this).text()
	});
	mui.back();
})
