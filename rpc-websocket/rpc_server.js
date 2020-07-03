"use strict";
exports.__esModule = true;
var ws = require("ws");
var port = 3001;
var rpc_server = new ws.Server({ port: 3002 });
rpc_server.on('connection', function (ws) {
    console.log('a client connect');
    ws.send("hello client");
    ws.on('message', function (data) {
        console.log(data);
    });
});
