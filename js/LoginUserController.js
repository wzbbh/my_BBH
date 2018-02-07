define(["LoginModel"], function(model) {
	var _this = null;
	var auths = null; 
	function LoginUserController() {
		_this = this;
	}
	
	var vm = new Vue({
		el: '.mui-content',
		data: {

		},
		created: function() {

		},
		methods: {
			login_weixin:function(){
				_this.weixin();
			},
			login_qq:function(){
				_this.qq();
			},
			login :function(){
				model.init("andy",function(){
					
				});
			}
		}
	});
	
	
	LoginUserController.prototype.init = function() {
		
		
		
	}
	
	//微信登录
	LoginUserController.prototype.weixin = function() {
		plus.oauth.getServices(function(servers){    //获取服务成功
			auths = servers;
			var s = auths[3]                         //weixin
			if(!s.authResult){
				s.login(function(e){
					mui.toast('登录认证成功！');
					s.getUserInfo(function(e){       //获取用户信息成功
						localStorage.setItem("info",JSON.stringify(s.userInfo));
						var wvs = plus.webview.all();　　                       
						var self = plus.webview.currentWebview();　　 
						for(var i = 0, len = wvs.length; i < len; i++) {
							if(wvs[i].id === self.id || wvs[i].id === localStorage.homeWebId ||
								wvs[i].id == "html/home.html" || wvs[i].id == "html/set.html" || wvs[i].id == "html/my.html"|| wvs[i].id == "HBuilder" ||wvs[i].id == "index.html") {
								continue;
							} else {
								wvs[i].close('none');　　 
							}
						}
						var view=plus.webview.getWebviewById('HBuilder');
						mui.fire(view,"go_my",{info:JSON.stringify(s.userInfo)});
						self.close('slide-out-right');
					},function(e){					 //获取用户信息失败
						
					});
				},function(e){
					mui.toast('登录认证失败！')
				})
			}else{
					mui.toast('已经登录认证！');
					s.getUserInfo(function(e){       //获取用户信息成功
						
					},function(e){					 //获取用户信息失败
						
					});
			}
		},function(e){  							 //获取服务失败
					mui.toast('获取服务失败！');
		})
	}
	
	
	//qq登录
	LoginUserController.prototype.qq = function() {
		plus.oauth.getServices(function(servers){    //获取服务成功
			auths = servers;
			var s = auths[1]                         //qq
			if(!s.authResult){
				s.login(function(e){
					mui.toast('QQ登录认证成功！');
					s.getUserInfo(function(e){       //获取用户信息成功
						
					},function(e){					 //获取用户信息失败
						
					});
				},function(e){
					mui.toast('登录认证失败！')
				})
			}else{
					mui.toast('已经登录认证！');
					s.getUserInfo(function(e){       //获取用户信息成功
						
					},function(e){					 //获取用户信息失败
						
					});
			}
		},function(e){  							 //获取服务失败
					mui.toast('获取服务失败！');
		})
	}
	
	
	

	
	return new LoginUserController();
});