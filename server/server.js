var http = require('http');
var handler = require('./handler')


var server = http.createServer(function (req, res) {
    console.log(req.method + ": " + req.url)
    switch (req.url) {
        case ('/' || '/home'):
            handler.home(res);
            break;
        case '/api/v1/helth-check':
            handler.api(res);
            break;
        default:
            handler.notFound(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('listening on :3000');