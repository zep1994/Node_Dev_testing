const http = require('http')
const url = require("url")

http.createServer(function (req, res) {
    //ADD HTTP HEASDER
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true) .query
    
    //res.write("hello world")
    res.end()
}).listen(9000)