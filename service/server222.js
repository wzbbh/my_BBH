const express = require("express");
const mysql   = require("mysql");

var app = express();													//实例化express
var server = app.listen(3000, function () {								//配置实例的监听端口
  console.log('Example app listening at %s', 3000);
});

var connection = mysql.createConnection({
  host     : 'localhost',												//连接的数据库主机
  user     : 'root',														//数据库的用户名
  password : '',																//数据库的密码
  database : 'ts'																//要访问的具体的数据库
});
connection.connect();														//开启连接

//查询所有数据的接口
app.get('/getAuthor', (req, res) => {									//定义一个get请求
 	res.header("Access-Control-Allow-Origin", "*");  
	connection.query('SELECT id,name from poets',(error, results, fields) => {
	  if (error) throw error;
		res.send(results);
	});  
});

//查询所有数据的接口
app.get('/getContent', (req, res) => {									//定义一个get请求
 	res.header("Access-Control-Allow-Origin", "*");  
 	let sql = ` select name,title,content from poets,poetries 
 				where poets.id = poetries.poet_id and poets.name = "${req.query.name}";`
	connection.query(sql,(error, results, fields) => {
	  if (error) throw error;
		res.send(results);
	});  
});
