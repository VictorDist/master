//var http = require('http');
//var dt = require('./moduleOne');
const express = require('./node_modules/express');
const app = express();

app.get("/", function(request,response){
response.send("<h1>elloow</h1>");
})

app.listen(3000,function (error){
    if(error == true){
        console.log("error");
    }
    else{
        console.log("listening on 3000");
    }
})

/*
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err,data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("Hello Worldsdf!" + dt.myDateTime());
    res.write(data);
    res.end();
    });
}).listen(8080);
*/