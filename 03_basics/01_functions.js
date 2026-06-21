function add1(num1,num2){
    // console.log(num1+num2)
}
add1(3,4)

function add2(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
 const result =add2(4,4)
//  console.log("Result : " ,result);

 function loginUserMsg(username="sam"){
      if(!username){
        // console.log("PLease enter username")
          return
        }
        return `${username} is logged in.`;
 }
//  console.log(loginUserMsg("Alishba"));
//  console.log(loginUserMsg()); // undefined is logged in


function calculateCartPrice( val1 ,val2 ,...num) //...(rest operator)
 {
    return num;                            //  val1(200), val2(300)
}
// console.log( calculateCartPrice(200,300,400,500,600)) //[400,500,600]

// const user={
//     name:"Alishba",
//     price:200,
// }
function handleUser(anyobject){
    // console.log(`Username is ${anyobject.name} and price is ${anyobject.price}.`)
}
// handleUser(user);
handleUser({
    name:"sam",
    price:1200,
})

// const array=[100,200,300];
function arrayHandler(getarray){
    return getarray[1];
}
// console.log(arrayHandler(array));
 
console.log(arrayHandler([112,223,334]));

