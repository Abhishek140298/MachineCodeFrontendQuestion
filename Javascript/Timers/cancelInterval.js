/*Implement a function setCancellableInterval, 
that acts like setInterval but instead of returning a 
timer ID, it returns a function that when called, 
cancels the interval. The setCancellableInterval 
function should have the exact same signature as setInterval: */


function setCancelInterval(callback,delay,...arg){
    let timeID=setInterval(callback,delay,...arg)

    return ()=>clearInterval(timeID)
}


const cancel=setCancelInterval(()=>{console.log("Start")},1000)

setTimeout(()=>{
    
    cancel()
    console.log("Endt the interval")},4000)