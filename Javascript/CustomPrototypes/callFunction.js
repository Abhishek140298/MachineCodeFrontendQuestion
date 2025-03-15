Function.prototype.myCall=function (context,...args){
    if(typeof this!=='function') throw new TypeError('customCall must be called on a function');


context=context||globalThis
context['functionCalled']=this
console.log("Conrtext",context);

const result =context['functionCalled'](...args)

delete context['functionCalled']
return result}

function greet(){
console.log(this)
}

const obj={
    name:"Abhishek Yadav"
}

greet.myCall(obj)