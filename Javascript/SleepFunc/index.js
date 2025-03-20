function sleep(time){

return new Promise((resolve)=>setTimeout(resolve,time))

}


async function checkSleep (){
    console.log("Sleep not start")
    await sleep(2000)
    console.log("After Sleep")
}


checkSleep()