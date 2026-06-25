// ******************** for in ****************

const myObj={
    "cpp":"C++",
    "js":"JavaScript",
    "py":"Python",

}
for (const key in myObj) {
//    console.log(`${key} is shortcut for ${myObj[key]}`)
}

const arr=["js", "py" , "Cpp", "java"]
for (const key in arr) {
    // console.log(key) // 0,1,2,3
    // console.log(arr[key])
   
}

const map= new Map;
map.set("Pk","Pakistan")
map.set("US","United States")
map.set("Pk","Pakistan")

for (const key in map) {
    console.log(key); //does not work
    
}