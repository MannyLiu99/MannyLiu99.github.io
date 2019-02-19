var PORT = 8888;//监听端口

var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = __dirname + pathname;//__dirname:node中的全局变量-当前模块的目录名

    //// 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead('200',{'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(PORT);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:' + PORT +'/');