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
minusBtn.Disabled=false


plusBtn.addEventListener('click',function(){
  counter++
  number.innerText = counter

})
minusBtn.addEventListener('click',function(){
  counter--
  number.innerText=counter
  if(counter==="0"){
minusBtn.Disabled=true
  }
})