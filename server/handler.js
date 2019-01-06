var fs = require('fs');

// home
var home = function (res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);
};

// api handler
var apiHandler = function (res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var response = {
        "data": {
            "message": "Hello NodeJS - Up!",
            "uptime": Date.now(),
            "health": "up"
        },
        "meta": {
            "status": 200
        }
    }

    res.end(JSON.stringify(response))
};

// 404 - page not found

var notFound = function (res) {
    res.writeHead(404);
    res.end("The endpoint you're looking for is not found");
}

module.exports = {
    home: home,
    api: apiHandler,
    notFound: notFound
}