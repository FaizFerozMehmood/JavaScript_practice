//  const passwordInput = document.getElementById('passwordInput');
//  const heading = document.getElementById('heading');

//  function genPassword(){
//     const passwordLength = 5;
//     const numbers =[1,2,3,4,5,6,7,0] 
//     for(let i = 0; i<=numbers.Math.floor(Math.random()*passwordLength);i++){
//         console.log(numbers[i]);
//         const value = numbers[i]
//         heading.innerText += value 
//     }
//  }
function genNum(){
    let a =[]
    let x =""
    let alpha = "abcdef";
    let special = "!@#$*()"
    for(let i = 0; i<alpha.length;i++){
    //  console.log(special[i]);
     let alphares = alpha[i]
     let specialres = special[i]
     
     let x = parseFloat(Math.floor(Math.random(alphares,specialres)));
     console.log(x);
    }

    // let y = Math.floor(Math.random()*3+1)
    // let res = x+y
    // console.log(a);
    
}