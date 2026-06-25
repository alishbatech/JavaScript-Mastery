// truthy values

// "0" , 'false' , [](empty array) , {}(empty object) , "  " , function(){}=>empty function

// falsy values 

// "" , 0 , -0 , false , Bigint 0n , null , undefined , NaN

let user=[]
// let user=""
// if (user){
//     console.log("user is here")
// }else{
//     console.log("user is dead..")
// }

// if (user.length==0){
//     console.log("array is empty")
// }


//object.keys(obj) returns an array so we can use "length" property of array with it

let User={}
// if (Object.keys(User).length==0){
//     console.log("object is empty")
// }

// false==0 =>true 
// false=="" => true
// 0=="" => true

// Nullish  Coalescing Operator (??): null , undefined

let val;
// val= 10 ?? 5  // first value=>5
// val = null ??11  //11
val = undefined ??11   //11
val = undefined ??12 ?? 14   //12 
// console.log(val)


// ************** Ternary operator***************
//  condition ? true: false

let price=90
price<100 ? console.log("less than 100"):console.log("greater than 100")
