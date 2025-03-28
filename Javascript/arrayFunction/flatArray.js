


function flatArray(arr){

    let flat=[]
  
function flatten(arr){
    let counter=0
    while(counter<arr.length){
        let value=arr[counter]

        if(Array.isArray(value)){
           flatten (value)
        }
    else{
            flat.push(value)}

        counter++
    }

}
flatten(arr)
return flat

}

console.log("Flat Array",flatArray([12,3,53,2,5,[453,23,34,[7,4,2]],[5,3,5,3]]))