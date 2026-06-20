// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2!=1)
// console.log(2==1)

// console.log("2">1) //==true==convert into number
// console.log(2<"1")

console.log(null == 0) // false
// console.log(null > 0)  //false
console.log(null>=0)  //true

/*  
Equality check == and comparison <,>,>=,<= work differently
Comparison convert null into a number and consider as 0.
that's why null>=0 is true and null>0 is false.So mostly these comparisons are avoid.
  */

console.log(undefined == 0) // false
// console.log(undefined>0)  //false
// console.log(undefined<0)  //false
// console.log(undefined<=0)  //false

// *******strictCheck(===)=>check datatype*******

console.log("2" === 2) //false
console.log("2" == 2)  //true