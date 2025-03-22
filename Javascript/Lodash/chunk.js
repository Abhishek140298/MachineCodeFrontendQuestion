function chunk(arr,size=1){


    let result =[]
    let subArray=[]

    for (let i=0;i<arr.length;i++){
        subArray.push(arr[i])
        if(subArray.length===size||i===arr.length-1){
            result.push(subArray)
            subArray=[]
        }
    }
    return result
}


console.log("Result",chunk([3,4,5,6,7,7,3,2,5],3))