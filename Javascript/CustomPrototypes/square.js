Array.prototype.mySquare=function(){
if(!Array.isArray(this))return new TypeError("data type is not array")
    let squaredArray=[]

for(let i=0;i<this.length;i++){
    squaredArray[i]=this[i]*this[i]
}
return squaredArray
/*
return this.map(value=>value*value) */
}
let arr=[45,67,38]

console.log([45,67,38].mySquare());
