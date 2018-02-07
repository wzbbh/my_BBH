define(["HttpConnection"], function(){
//接口
	var _serverAddr = "http://localhost:3000/";
	function NetMannager(){
		
	}
	NetMannager.prototype.getMessage = function(data, command, succCallback){
		console.log("getMessage~~~~~~~~~~~~~~~~~~~~~~~data="+JSON.stringify(data));
		console.log(command)
		var http = new HttpConnection();
		var url = _serverAddr+command;
//		console.log("url="+url);
		http.getJSON(url, data, succCallback, null);
	}
	return new NetMannager();
});

