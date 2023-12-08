// http is a core node module
const http = require('http')
// third party ws import
const websocket = require('ws')

const server = http.createServer((req, res) =>{

    res.end('This is coming from Just WS Server JS file!')

})

const wss = new websocket.WebSocketServer({server})

wss.on('headers', (headers, req) => {
    
})

server.listen(8000)

