var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(req.method + ": " + req.url)

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var response = {
        "data": {
            "message": "Hello NodeJS"
        },
        "meta": {
            "status": 200
        }
    }

    res.end(JSON.stringify(response))
});

server.listen(3000, '127.0.0.1');
console.log('listening on :3000');

var fs = require('fs');
var server2 = http.createServer(function (req, res) {
    console.log(req.method + ": " + req.url)

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);
});

server2.listen(3001, '127.0.0.1');
console.log('HTML server listening on :3001');