/*Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).

Arguments
array (Array): The array to compact.
Returns
(Array): Returns the new array of filtered values. */


function compact(arr){
let result=[]

for(let i in arr){

    if(arr[i])result.push(arr[i])
}
console.log("",result);


return result

}

let array=[1,2,3,false,'',"str"]




