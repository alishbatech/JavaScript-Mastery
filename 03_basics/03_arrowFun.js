 const user={
    name:"Alishba",
    welcome : function(){
    //    console.log(`${this.name} , welcome to website.`)
    //    console.log(this) // refer to current context(user)
    }
 }
 user.welcome();
//  console.log(this) //{} empty because it is in local file in node.js enviroment

 /*  in browser console.log(this)=> window ----refer to window object
     becuse window is global object of browser.. 
 */
            // =====================================

     function User(){
        // console.log(this)// working
        let username="alishba"
        // console.log(this.username) // undefined

         /* "undefined" because 'this' works with object properties
      not function's local variables (let/const) and 'this' refers to the global
      object here, which doesn't know about the local 'username' variable.*/
    }
    User()

    // const user2=function(){
    //     let username2="ALIshy"
    //     console.log(this.username2) // undefined
    // }
    // user2()

    // ************arrowFun**********

    const user2= ()=> {
        let username2="ALIshy"
        // console.log(this.username2) // undefined
        // console.log(this) // {}
    }
    user2()

    // const addtwo=(num1,num2)=>{
    //     return num1+num2;
    // }
    // console.log(addtwo()); // NaN
    // console.log(addtwo(2,3)); //5


    // const addtwo = (num1,num2)=> num1 + num2;
    // const addtwo=(num1,num2)=> (num1+num2);
    // const addtwo=(num1,num2)=> {username:"Alishba"}; //undefined
    const addtwo=(num1,num2)=> ({username:"Alishba"}); // return object
    console.log(addtwo(4,5));