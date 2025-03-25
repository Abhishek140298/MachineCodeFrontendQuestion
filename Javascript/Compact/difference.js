/*Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Arguments
array (Array): The array to inspect.
values (Array): The values to exclude.
Returns
(Array): Returns the new array of filtered values. */


function difference(array,values){
    if(values.length===0)return array
    let map=new Map()
    let result=[]

    for(let i of values)
      {  map.set(i,true)}
    for(let i of array){
        if(!map.has(i))result.push(i)
    }

    return result
}

console.log("hh",difference([1, 2, 3], [2, 3]),// => [1]
) // => [3])

const difference1=(array,values)=>array.filter((value)=>!values.includes(value))
console.log("hh",difference1([1, 2, 3], [2, 3]))// => [1]
//includes return true or false