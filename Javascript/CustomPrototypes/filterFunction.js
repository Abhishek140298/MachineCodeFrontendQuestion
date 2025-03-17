Array.prototype.myFilter = function (callback) {
  if (!Array.isArray(this))
    throw new TypeError("myFilter should be called on the array");
  let result=[]
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }

  return result;
};


let arr=[4,3,5,68,90,9,20,21]


console.log("Real filter",arr.filter(value=>value%2===0))

console.log("Real filter",arr.myFilter(value=>value%2===0))