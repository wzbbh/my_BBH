define(['home_model'], function(model) {
	var _this=null;
	function home_controller(){
		_this=this;
	}
	var vm=new Vue({
		el:".head",
		data:{
			pos : "定位中...",
			is_show:false,
			bar_flag:true,
			list : [
				{name:"扫一扫",flag:true},
				{name:"付款码",flag:true},
				{name:"开发票",flag:true},
				{name:"骑单车",flag:false}
			],
			p_data:[1,2,3],
			s_h :0,
			m_h :0
		},
		methods:{
			city : function(){
				mui.openWindow({
					url : "city.html",
					id  : "city.html"
				})
				vm.is_show=false;
			},
			add:function(e){
				if(!vm.is_show){
					$(".top_alert").show();
					vm.is_show=true;
				}else{
					$(".top_alert").hide();
					vm.is_show=false;
				}
			},
			inp_txt:function(){
				//关键字搜索
				$.getScript("../js/keyword.js", function(data) {
					console.log("keyword.js");
					console.log(JSON.stringify(data))
				});
			},
			sao_yi_sao : function(index){
				vm.is_show =false;
				if(index==0){
					mui.openWindow({
						url : "sao_yi_sao.html",
						id  : "sao_yi_sao.html"
					})
				}else if(index==1){
					var btn=["返回","去绑卡"];
					mui.confirm("查看支持银行","您尚未绑定银行卡，绑定银行卡后即可向商家付款",btn,function(e){
						
					})
				}else if(index==2){
					mui.openWindow({
						url : "bill.html",
						id  : "bill.html"
					})
				}else if(index==3){
					mui.openWindow({
						url : "bike.html",
						id  : "bike.html"
					})
				}
			},
			//进入搜索
			choose_bar : function(){
				vm.bar_flag=false;
				vm.is_show=false;
				mvm.disable=false;
			},
			cancle:function(){
				vm.bar_flag=true;
				mvm.disable=true;
				$("#show").hide();
			}
		}
	})
	
	var mvm=new Vue({
		el:".mui-content",
		data:{
			shop : [
				/**
				 * flag：true4行布局，false3行布局
				 */
				{id:3,type:2,goods_name:"前任3:再见前任",goods_pos:"9.2分",doc:"喜剧,爱情",peizhi:"上映13天，累计票房149598万",youhui:"",price:"15.7",rack_price:"",out_shop:"",flag:false},
				{id:0,type:0,goods_name:"有位少年营养套餐",goods_pos:"外卖",doc:"30分钟到达",peizhi:"起送价￥10|配送费￥2",youhui:"满21减20,满45减22",price:"",rack_price:"",out_shop:"月售100",flag:false},
				{id:1,type:1,goods_name:"白夜TATTOO",goods_pos:"12.4km",doc:"[2店通用]3*3l厘米彩色黑灰不限",peizhi:"",youhui:"",price:"499",rack_price:"500",out_shop:"已售20",flag:true},
				{id:2,type:2,goods_name:"前任3:再见前任",goods_pos:"9.2分",doc:"喜剧,爱情",peizhi:"上映13天，累计票房149598万",youhui:"",price:"15.7",rack_price:"",out_shop:"",flag:false}
			],
			list : [
				/**
				 * flag：true4行布局，false3行布局
				 */
				{id:3,type:2,goods_name:"前任3:再见前任",goods_pos:"9.2分",doc:"喜剧,爱情",peizhi:"上映13天，累计票房149598万",youhui:"",price:"15.7",rack_price:"",out_shop:"",flag:false},
				{id:0,type:0,goods_name:"有位少年营养套餐",goods_pos:"外卖",doc:"30分钟到达",peizhi:"起送价￥10|配送费￥2",youhui:"满21减20,满45减22",price:"",rack_price:"",out_shop:"月售100",flag:false},
				{id:1,type:1,goods_name:"白夜TATTOO",goods_pos:"12.4km",doc:"[2店通用]3*3l厘米彩色黑灰不限",peizhi:"",youhui:"",price:"499",rack_price:"500",out_shop:"已售20",flag:true},
				{id:2,type:2,goods_name:"前任3:再见前任",goods_pos:"9.2分",doc:"喜剧,爱情",peizhi:"上映13天，累计票房149598万",youhui:"",price:"15.7",rack_price:"",out_shop:"",flag:false}
			],
			disable:true
		},
		methods:{
			content:function(){
				$(".top_alert").hide();
			}
		}
	})
	
	
	home_controller.prototype.init = function(){
		setTimeout(function() {
			mui(".mui-slider").slider({
				interval:3000
			});
			mui('.mui-scroll-wrapper').scroll({
				indicators: false, //是否显示滚动条
				deceleration: 0.0005
			});
		}, 1000);
		mui.plusReady(function(){
			_this.position();
			vm.p_data = vm.list.length-1;
		})
	};
	
	
	//定位系统
	home_controller.prototype.position = function(){
		plus.geolocation.getCurrentPosition(
			function(p){
				plus.nativeUI.closeWaiting();
				vm.pos = p.address.city;
				font(vm.pos);
				//成功放回
			},function(){
				//失败返回
				vm.pos = "定位失败...";
				font(vm.pos);
			plus.nativeUI.toast("获取位置失败！")
		})
	};
	
	
	
	home_controller.prototype.alert = function(){
		var bb=[
			{id:3,type:2,goods_name:"前任3:再见前任11",goods_pos:"9.2分",doc:"喜剧,爱情",peizhi:"上映13天，累计票房149598万",youhui:"",price:"15.7",rack_price:"",out_shop:"",flag:false}
		]
		for(var i=0;i<bb.length;i++){
			mvm.list.push(bb[i]);
			mvm.shop = mvm.list;
		}
	};

	
	
	window.addEventListener('choose_city',function(e){
		var city = e.detail.city;
		vm.pos = city;
		font(vm.pos);
	})
	
	function font(t){
		if(t.length>=3){
			$("#top div").eq(0).css("width","25%");
		}else{
			$("#top div").eq(0).css("width","18%");
		}
	}
	

	
//	帧动画
	var time =100;
	var _index=0;
	function anmit(){
		var positions = ['0 0','-1.25 0','-2.5 0','-3.73 0','-4.98','-6.22 0','-7.46 0','-8.72 0']
		var pos = positions[_index].split(' ');
		$("#flash div").css({
			backgroundPosition : pos[0]+"rem "+pos[1]+"px"
		})
		_index++;
		if(_index>=positions.length){
			_index = 0;
		}
	};
	setInterval(anmit,time);
	
	
	
	return new home_controller();
});