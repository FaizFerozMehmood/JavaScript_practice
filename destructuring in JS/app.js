const plus= document.getElementById("plus");
const number= document.getElementById("number");
const minus= document.getElementById("minus");
minus.disabled=false


plus.addEventListener("click",()=>{
    number.innerText++
})

minus.addEventListener("click",()=>{  
    number.innerText--

    if(number.innerText===0){
        minus.disabled=true
    }
})

