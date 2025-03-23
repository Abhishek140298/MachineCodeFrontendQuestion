//Memoization

function memo(){
let cache={}
function memoization(...args){
 
    let key=args.map((arg)=>(arg===undefined?'undefined':arg===null?'null':arg)).toString()

if(cache[key]!==undefined)return cache[key]

let sum=args.reduce((acc,current)=>isNaN(acc)?0:acc+current,0)
cache[key]=sum

return sum

}
return memoization

}

const memo1=memo()

const memo2=memo()

console.log("Memo1 ",memo1(1,2,45,3,25));

console.log("Memo1 ",memo2(1,2,45,34,25));


