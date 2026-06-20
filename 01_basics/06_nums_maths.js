let number1 = 100
// console.log(number1);

const number2=new Number(200)
// console.log(number2);
// console.log(number2.toString().length);
// console.log(number2.toFixed(3));  //200.000

let num3=289.5896
// console.log(num3.toPrecision(3)); //290

const num4=1000000
// console.log(num4.toLocaleString());   //1,000,000
// console.log(num4.toLocaleString('en-PK'));   //1,000,000

//+++++++++++++++++++======== Maths ========+++++++++++++++++++++++++

console.log(Math)
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.6))
// console.log(Math.abs(-4)) // convert into positive
// console.log(Math.max(4,5,6,3,7))
// console.log(Math.min(4,3,6,7))

// console.log(Math.random()); // between 0 and 1  (0.5634456)

// console.log(Math.random()*10)  //5 shifted towards right (5.634456)=>greater than 1
// console.log(Math.floor(Math.random()*10))  // 5 
// console.log(Math.floor(Math.random()*10)+1)  // can be 0 (0.0013456)=> add 1

const min=10
const max=20

const final=Math.floor(Math.random()*(max-min+1))+min;
console.log(final)
