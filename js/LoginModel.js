define(["NetMannager"], function(net) {
	function LoginModel() {

	}
	LoginModel.prototype.init = function(num,func){
		var param={
			name : num
		}
		net.getMessage(param, "select", function(data){ 
			alert(2)
			console.log("select="+data)
			if(typeof(func)==="undefined"){
				console.log("回调方法不可用");
			}
			else{
				func(data);
			}
		});
	}
	
	return new LoginModel();
});