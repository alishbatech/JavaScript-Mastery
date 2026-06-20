const arr1=[1,2,3]

const arr2=[6,7,8,9]

// arr1.push(arr2)
// console.log(arr1); // [1,2,3[6,7,8,9]]
// console.log(arr1[3][1]) // 7

arr1.concat(arr2)
console.log(arr1); //[1,2,3] =>not change in original

const newarr=arr1.concat(arr2) // return new array
console.log(newarr)  //[1,2,3,6,7,8,9]

