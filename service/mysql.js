const express = require('express');   //引入express模块
const mysql = require('mysql');
var app = express();								//实例化
var server = app.listen(3000,function(){    //配置实例的监听端口
	console.log("2222")
})

var connection = mysql.createConnection({
  host     : 'localhost',       
  user     : 'root',
  password : '',
  database : 'ts'           //要访问的具体数据库
});
connection.connect();   //开启链接


//按条件查询的接口
app.get('/select', function(req, res) { //定义一个get请求  req前台页面发送过来的数据,res回调
	console.log(req.query)
	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
	sql = `select * from users where name='${req.query.name}'`;
	connection.query(sql, function (error, results, fields) {
		if (error) throw error;
		res.send(results);
		console.log("results="+results)
	});
});


//插入数据的接口
app.get('/insert', function(req, res) { //定义一个get请求  req前台页面发送过来的数据,res回调                            console.log(req.query)
	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
	connection.query("select max(id) as max from users", function (error, results, fields) {
		if (error) throw error;
		var maxid=results[0].max + 1;
			sql =`insert into users values(${maxid},'${req.query.name}','${req.query.pass}','${req.query.phone}')`;
			connection.query(sql, function (error, results, fields) {
					if (error) {
						throw error;
					}else{
						connection.query("select * from users", function (error, results, fields) {
								res.send(results);
						});
					}
			});
	});
});
	
//查询所有数据
app.all('/all', function(req, res) {   //all适配所有的请求，不管是post还是get,
  	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
	connection.query("select * from users", function (error, results, fields) {
		if (error) throw error;
		res.send(results);
	});
});


//修改数据
app.get('/update', function(req, res) {   //all适配所有的请求，不管是post还是get,
  	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
  	console.log("req.query.pass="+req.query.pass);
	connection.query(`update users set pass='${req.query.pass}',phone='${req.query.phone}' where id='${req.query.id}'`, function (error, results, fields) {
		if (error){
			throw error;
		} else{
			res.send(results);	
		}
	});
});

//删除数据
app.get('/delete', function(req, res) {   //all适配所有的请求，不管是post还是get,
  	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
	connection.query(`delete from users where id='${req.query.id}'`, function (error, results, fields) {
		if (error){
			throw error;
		} else{
			res.send("删除成功");	
		}
	});
});



//唐诗的shuju 

var connection2 = mysql.createConnection({
  host     : 'localhost',       
  user     : 'root',
  password : '',
  database : 'ts'           //要访问的具体数据库
});
connection2.connect();   //开启链接
app.get('/tsall', function(req, res) {   //all适配所有的请求，不管是post还是get,
  	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
  	var sql2=`select name,title,content from poets,poetries
             where poets.id = poetries.poet_id and poets.name = '${req.query.name}'and poetries.title='${req.query.title}';`
	connection2.query(sql2, function (error, results, fields) {
		if (error) throw error;
		res.send(results);
	});
});



app.get('/getAuthor', (req, res) => {									//定义一个get请求
 	res.header("Access-Control-Allow-Origin", "*");  
	connection.query('SELECT id,name from poets',(error, results, fields) => {
	  if (error) throw error;
		res.send(results);
	});  
});


app.get('/shopall', function(req, res) {   //all适配所有的请求，不管是post还是get,
  	res.header('Access-Control-Allow-Origin', '*');     //解决跨域访问
  	var sql3=`select name,title,content from poets,poetries
             where poets.id = poetries.poet_id and poets.name = '${req.query.name}'`
	connection2.query(sql3, function (error, results, fields) {
		if (error) throw error;
		res.send(results);
	});
});



//connection.end();

