define(['index_model'], function(model) {
	var _this=null;
	function index_controller(){
		_this=this;
	}

	index_controller.prototype.init = function(){
		var subpages = ['html/home.html', 'html/nearby.html', 'html/find.html','html/order.html','html/my.html'];
		var subpage_style = {
			top:"0px",
			bottom: $('.mui-bar-tab').height()
		};
		mui.plusReady(function() {
		    var self = plus.webview.currentWebview();
			    for (var i = 0; i < subpages.length; i++) {
			        var sub = plus.webview.create(subpages[i],subpages[i], subpage_style); //创建webview子页plus.webview.create(url,id,style,extras)
			        if (i > 0) {
			            sub.hide();
			        }
			        self.append(sub);   //默认显示首页
			    }
			});
			
		//选项卡点击事件
		var activeTab = subpages[0];
		mui('.mui-bar-tab').on('tap', 'a', function(e) {
			var id=$(this).attr('alt');
		    //获取目标子页的id
		    var targetTab = subpages[id];
		    if (targetTab == activeTab) {    
		        return;
		    }
		    //显示目标选项卡
		    plus.webview.show(targetTab);
		    //隐藏当前选项卡
		    plus.webview.hide(activeTab);
		    //更改当前活跃的选项卡
		    activeTab = targetTab;
		});
	}
	
	//模拟点击首页事件
	window.addEventListener('go_home', function() {
		var myTab = document.getElementById("home");
		mui.trigger(myTab, 'tap');
		var id=$(this).attr('alt');
		$('.mui-bar-tab a').css('color',"#929292").eq(id).css('color','green');
	});
	
	
	return new index_controller();
});