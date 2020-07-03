export class RPC_RESPONSE {
    sessionId: number
    body: {}
}

export class RPC_REQUEST {
    sessionId: number
    method: string
    args: {}
}