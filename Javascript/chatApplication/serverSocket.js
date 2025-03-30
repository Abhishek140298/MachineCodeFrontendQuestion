const ws= require('ws')
const http = require("http");
const wss=new ws.Server({noServer:true})

const clients=new Set()//have all the sockets
const port=8080

http.createServer((req,res)=>
{
    wss.handleUpgrade(req,req.socket,Buffer.alloc(0),onSocketConnect)
}).listen(port, () => {
    console.log(`WebSocket server is running on ws://localhost:${port}`);
})


//server.on(event,callback function)

//In on connection methood we can se the individua client id

function onSocketConnect(wr){
    clients.add(wr)

    wr.on('message',function(message){
        message = message.toString().slice(0, 50);

        for (let client of clients){
            client.send(message)
        }
    })

    wr.on("close",function(){
        clients.delete(ws)
    })
}

