// function sayHi(username){
// //    console.log(`i am ${username}`);
// const 
// }
// sayHi("faiz")
// sayHi("umair")
// function sayHi(greeting,username){
//     const user = `${greeting}`
//     const userNms= `${username}`
//       console.log(user,userNms);
//     }
// sayHi("HI!","faiz")
// function introducteMe(user,age,proffesion){
    // console.log(`${user}`);
    // console.log(`${age}`);
    // return user , age ,proffesion


// }
// setTimeout(() => {
    // function introducteMe(user,age,proffesion){
        // console.log(`${user}`);
        // console.log(`${age}`);
        // return user , age ,proffesion
    
    
    // }
        //  introducteMe("faiz",)
    // console.log(introducteMe("faiz"));
// }, 2000);
// introducteMe("faiz",21,"developer")
// console.log(introducteMe(1,2,3),introducteMe(1,2,3),introducteMe(1,2,3));

const btn = document.getElementById('btn');
const heading = document.getElementById("heading")
btn.addEventListener("click",()=>{
    btn.textContent="Loading.."
    console.log("Hello world");
    setTimeout(()=>{
    console.log("faiz mahmood");
    heading.textContent="Hi! faiz here!";
    btn.textContent="add"
    },2000)

})