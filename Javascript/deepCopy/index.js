function deepCopy(obj){

if(typeof obj!=="Object"||!Array.isArray(obj))return obj
let newObj=Array.isArray(obj)?[]:{}
for(let key in obj){
    newObj[key]=deepCopy(obj[key])
}

return newObj


}
