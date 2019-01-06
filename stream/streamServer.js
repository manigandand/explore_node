var http = require('http');
var fs = require('fs');

// pipe from readstream to response
var server = http.createServer(function (req, res) {
    console.log(req.method + ": " + req.url)

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    var readStream = fs.createReadStream(__dirname + '/input.txt', 'utf8');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening on :3000');