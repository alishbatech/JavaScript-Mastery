//array
 const arr1=[1,2,3,4,5]
//  console.log(arr1[2]);

//  const arr2=new Array(7,8,9,6)
//  console.log(arr2[2]);

// ************ Arrays method ***************

// arr2.push(98)
// arr2.push(78);
// console.log(arr2);
// arr2.pop();
console.log(arr1)
// arr1.unshift(34)
// arr1.shift()
// console.log(arr1)

// const newArr=arr1.join() //Array change into string
// console.log(newArr);
// console.log(typeof newArr);

//***********slice splice***************

console.log("A" , arr1)

const AnewArr= arr1.slice(1,3);
console.log(AnewArr);

console.log(arr1);  //[1,2,3,4,5]

const BnewArr=arr1.splice(1,3) //change original array
console.log("B",BnewArr);

console.log(arr1);  //[1,5]
 