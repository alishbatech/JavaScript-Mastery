// ****************** for of ***********************
// ["" , "" ,"" ,""]
// [{}, {} , {}]

let arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(`value is :${num}`)
}

let str="Hello World"
for (const val of str) {
    // console.log(`value is :${val}`)
}

// ******************** Map **********************
// take key value pair ,sameorder,unique values ,return object

const map= new Map;
map.set("Pk","Pakistan")
map.set("US","United States")
map.set("Pk","Pakistan")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key , val] of map) {
    // console.log(key,':-', val);
}

//does not work with objects

const myObj={
    user1:"alishba",
    user2:"ayesha"
}
for (const [key,val] of myObj) {
    // console.log(key ,':-', val)  //myObj is not iterable
}
