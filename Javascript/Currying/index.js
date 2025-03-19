//Curring
function sum(a){
return function (b){
    return a+b
}
}


//USe bind
function sum(a,b){
    return a+b
}


const getSum=sum.bind(this,2)
console.log(getSum(3),sum(3)(4))


//Infinite currying

function sum(a){
    return function(b){
        if(b)return sum(a+b)
        return a
    }
}


sum(1)(2)(3)(4)(4)()


