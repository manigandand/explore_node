var express = require('express');
var handler = require('../server/handler')

var app = express();

// routes
app.get("/", function (req, res) {
    handler.home(res)
});

app.listen(3000, () => {
    console.log("listening on :3000")
});