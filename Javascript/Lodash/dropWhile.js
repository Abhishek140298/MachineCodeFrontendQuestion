

function dropWhile(arr,predite){
     let i=arr.length
    while(i>0&&predite(arr[i-1],i-1,arr)){
       i--
    }

    let result =[]
   // result=arr.splice(0,i)
    for(let j=0;j<i;j++){
        result.push(arr[j])
    }

    return result
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value > 3))
