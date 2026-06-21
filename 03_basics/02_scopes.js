// Global and Local Scope

if (true) {
    var a=3
    let b=2
    const c=3
    // console.log("Inner a:",a)
}
var a=300
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
       let username="Alishba"
       function two(){
        let  fullname="Shahid"
        // console.log(username+fullname)
       }
       // console.log(fullname)
two()
}
one()

// *************** interesting ********************

console.log(addone(5)) // working

function addone(num){
    return num+1;
}
//  =========OR========

// console.log(addtwo(6))  //  not working
const addtwo = function(num){
 return num+2;
}
console.log(addtwo(6))  //working