#!/usr/bin/env node
var app = require('../app').app;

function startServer() {
    var url = '0.0.0.0',
        port = 9022;

    app.listen(port, url);
    console.log('Server has started on http://' + url + ':' + port);
}

startServer();