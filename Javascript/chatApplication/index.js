(function (){

const socket=new WebSocket('ws://localhost:8080')

socket.onopen=function (e){
    alert ("Connection open")
    socket.send("Hello Server")
}

document.forms.messageSender.onsubmit=function (){
    let mes=this.message.value
    socket.send(mes)
    return false
}

socket.onmessage=function(event){
    console.log("Message",event)

    let recievedMes=event.data
    let messageDiv=document.createElement('div')

    messageDiv.textContent=recievedMes
document.getElementById('messages').append(messageDiv)
}

}())