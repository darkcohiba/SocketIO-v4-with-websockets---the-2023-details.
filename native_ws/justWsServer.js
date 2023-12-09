// http is a core node module
const http = require('http')
// third party ws import
const websocket = require('ws')

const server = http.createServer((req, res) =>{

    res.end('This is coming from Just WS Server JS file!');

})

const wss = new websocket.WebSocketServer({server})

// headers happen before the handshake is complete
wss.on('headers', (headers, req) => {
    console.log(headers);
})

// connection happens after the handshake is complete
wss.on('connection', (ws, req)=>{
    // console.log(ws);

    // we are going to emit a message
    ws.send('Welcome to the websocket server!')
    ws.on('message',(data)=>{
        console.log(data.toString())
    })
})

server.listen(8000)

