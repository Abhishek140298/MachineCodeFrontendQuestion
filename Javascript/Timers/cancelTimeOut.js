function setCancelTimeOut(callback,delay,...arg){
    let timeId=setTimeout(callback,delay,...arg)
    return ()=>clearTimeout(timeId)
}


let cancel=setCancelTimeOut(()=>console.log("hhu"),2000)