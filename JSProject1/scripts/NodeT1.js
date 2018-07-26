/*
var http = require("http");
http.createServer(function (request, response){
response.writeHead(200,{'Content-Type': 'text/plain'})
response.write('hello');
response.end();
}).listen(8080);
*/

/*
var fs = require('fs');
var http = require('http');
http.createServer(function(request,response){
    fs.readFile('index.html', function(err,data){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(data);
    response.end();
});
}).listen(8080);
*/



const http = require('http');
http.createServer(function(request, response){
response.writeHead(200,{'Content-Type':'text/plain'});
response.write('ed');
response.end();
}).listen(8080);

