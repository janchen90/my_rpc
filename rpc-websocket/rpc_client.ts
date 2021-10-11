// import * as Ws from "ws"
// let rpc_client = new Ws("ws://127.0.0.1:3002");
// rpc_client.on('open', () => {
//     setInterval(() => {
//         rpc_client.send("hello world");
//     }, 1000);
// })
//
// rpc_client.on('message', (data) => {
//     console.log(data);
// })
//

import * as WS from 'ws'
import { EventEmitter } from 'events'
import { resolve } from 'path'
import { SERVER_INFO } from './server_info';
import { RPC_RESPONSE } from './rpc_response';

export class RPC_CLIENT {
    private _serverList: {} = {}
    private _resPool: {} = {}
    private _sessionId = 1

    private connectRpcServer(serverInfo: SERVER_INFO) {
        let url = "ws://" + serverInfo.host + ":" + serverInfo.port;
        let ws_client = new WS(url)

        this._serverList[serverInfo.name] = ws_client;

        ws_client.on('message', (data: RPC_SESSION) => {
            let sessionId = data.sessionId;


        })
    }

    public invoke ( serverName: string, method: string, args: {} ) {
        this._sessionId++;
        let res = new Promise((resolve, reject) => {
            let body = {
                sessionId: this._sessionId,
                method: method,
                args: args
            };

            if ( this._serverList[serverName] ) {
                this._serverList[serverName].send(JSON.stringify(body));
            }
        });

        console.log('hello world');
    }

}
