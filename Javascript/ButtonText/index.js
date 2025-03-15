//
import {buttonText} from './ButtonText/index.js'

(function (){
    let number=0
    const button=document.getElementById('button')
    
    button.addEventListener('click',()=>{number=buttonText(number)
        button.innerText=`Click-${number}`
    })
console.log("Button",button)
    button.innerText +=number

}())