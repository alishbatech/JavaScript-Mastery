// Immediately Invoked Function Expression--IIFE

( function one(){
    // named IIFE
    console.log("DB connected 1..")
} )();

( (name)=>{
    console.log(`DB connected 2..${name}`)
} )('alishba')