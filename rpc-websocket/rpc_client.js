"use strict";
exports.__esModule = true;
var Ws = require("ws");
var rpc_client = new Ws("ws://127.0.0.1:3002");
rpc_client.on('open', function () {
    setInterval(function () {
        rpc_client.send("hello world");
    }, 1000);
});
rpc_client.on('message', function (data) {
    console.log(data);
});
