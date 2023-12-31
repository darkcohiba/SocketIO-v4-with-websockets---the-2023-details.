const express = require('express');
const app = express();
const socketio = require('socket.io');
app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on('connection', (socket) => {
    console.log(socket.id, "has connected")
    // websockets we use the send method, socket io we use the emit method, message from server is a custom event
    // socket.emit('messageFromServer', {data: "welcome to the socket server!"})
    socket.on('newMessageToServer', (dataFromClient) => {
        console.log("data: ", dataFromClient)
        // using io will send to all sockets instead of specific socket
        io.emit('newMessageToClients', { text: dataFromClient.text })
    })
})
