	$("#inp_txt").on("keyup",function (event) {
		$("#show").show();
		var v = $(this).val();
		var qsData = { 'wd': v, 'cb': "getData1", 't': new Date().getMilliseconds().toString() };
		$.ajax({
			async: false,
			url: "http://suggestion.baidu.com/su",
			type: "GET",
			dataType: 'jsonp',
			data: qsData
		});
		if(v==""){
			$("#show").hide();
		}
	})




	
	function getData1(data) {
		console.log(data)
		var Info = data.s; //获取异步数据
		$("#show").empty();
		for(var i=0;i<Info.length;i++){
			var $msg = $("<p>").text(Info[i])
			$("#show").append($msg)
		}
	}


