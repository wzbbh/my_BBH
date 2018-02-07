
function HttpConnection() {
	var _succCallback = function(){};
	var _errCallback = function(){};
};

HttpConnection.prototype.isNetwork = true;

HttpConnection.prototype.getJSON = function(url, data, succCallback, errCallback){
	if(typeof(succCallback) == "function"){
		this._succCallback = succCallback;
	}else{
		this._succCallback = function(){};
	}
	if(typeof(errCallback) == "function"){
		this._errCallback = errCallback;
	}
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	if(data==""||data==null){
		xmlHttp.send();
	}else{
		xmlHttp.send(postDataFormat(data));
	}
	
	
	var me = this;
	//==========================ajax回调
	xmlHttp.onreadystatechange = function(){
		switch(xmlHttp.readyState) {
        case 0 :
          console.log("请求未初始化");
            break; 
        case 1 :
         console.log("请求启动，尚未发送");
            break;
        case 2 :
         console.log("请求发送，尚未得到响应");
            break;
        case 3 : 
          console.log("请求开始响应，收到部分数据");
            break;
        case 4 :
          console.log("请求响应完成得到全部数据");
            if((xmlHttp.status >= 200 && xmlHttp.status < 300) || xmlHttp.status == 304) {
               var respData = "";
					
				if(xmlHttp.responseText.length>0){
					respData = xmlHttp.responseText;
					var jb = JSON.parse(respData);
					me._succCallback(jb);
				}
            }else {
				if(me._errCallback){
					me._errCallback("获取数据失败！");
				}
				
                console.log("Request was unsuccessful : " + xmlHttp.status + " " + xmlHttp.statusText);
            }
            
            break;
        }
	}
}

/*
 * 统一XHR接口
 */
function JYXMLHttpRequest() {
    // IE7+,Firefox, Opera, Chrome ,Safari
    if(typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    }
    // IE6-
    else if(typeof ActiveXObject != "undefined"){
        if(typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXMLHttp"],
            i, len;
            for(i = 0, len = versions.length; i < len; i++) {
                try{
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                }catch(ex) {
                    console.log("请升级浏览器版本");
                }
            }
        }
        return arguments.callee.activeXString;        
    }else {
        throw new Error("XHR对象不可用");
    }
}


// post请求
// 格式化post 传递的数据
function postDataFormat(obj){
    if(typeof obj != "object" ) {
        console.log("输入的参数必须是对象");
        return;
    }

    // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
//  if(typeof FormData == "function") {
//      var data = new FormData();
//      for(var attr in obj) {
//          data.append(attr,obj[attr]);
//      }
//      return data;
//  }else {
        // 不支持FormData的浏览器的处理 
        var arr = new Array();
        var i = 0;
        for(var attr in obj) {
            arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
            i++;
        }
        return arr.join("&");
//  }
}
