var https = require('http');
var fs = require('fs');
var url = require('url');


https.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(filename === './'){
        filename = 'index';
    }

    filename = filename + ".html";

    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'content-type': 'text/html'});
            return res.end("404 Not Found");
        }
            res.writeHead(200, {'content-Type': 'text/html'});
            res.write(data)
            // console.log("....Icoming request: " + req.url);
            return res.end();
    })
}).listen(8080); 

console.log("Server listining on port 8080...");