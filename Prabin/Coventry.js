var http = require('http')
//console.log(http);
var app1 = http.createServer(function (req,res){
	console.log(req);
	if(req.url==='/registration'){
		res.end('This is registration page');
	}
});


//creating function
// function cb1 (req,res){

// 	console.log(req);
// 	if(req.url==='/registration'){
// 		res.end('This is registration page');
//}
// 	res.setHeader('Content-Type','Text');
// 	res.statusCode = 301;

// res.end('the response has ended');



//}



app1.listen(3011);



//var app2 = http.createServer();
//app2.listen(3012);
