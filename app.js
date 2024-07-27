// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const number = document.querySelector('.number')
counter = 0;


plusBtn.addEventListener('click',function(){
  counter++
  number.innerText = counter
  document.body.style.backgroundColor="black"

  
})
minusBtn.addEventListener('click',function(){
  counter--
  number.innerText=counter
  document.body.style.backgroundColor="red"
  
 
})