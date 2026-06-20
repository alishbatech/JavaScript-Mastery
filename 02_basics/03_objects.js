//singleton
// object.create => constructor

// *****object litterals******

 const mySym=Symbol ("key1")

const user={
    name:"alishba",
    "fullname" :"alishba shahid",
    age:18,
    email:"123@gmail.com",
    [mySym]:"mykey1"

}
// console.log(user.name)
// console.log(typeof user.age)
// console.log(user.email)
// console.log(user.fullname)

// console.log(user["fullname"])
// console.log(user[mySym])
// console.log(typeof mySym)

user.email="Alishba@GPUTexture.com";
// console.log(user)

// Object.freeze(user);
// user.name="ALishy"
// console.log(user)

user.greeting=function(){
    console.log(" Hey JS users.")
}
user.greetingTwo=function(){
    console.log(` Hey JS user ${this.name} and ${this[mySym]}.`)
}
console.log(user.greeting())
console.log(user.greetingTwo())

