// for each does not return anything

const myArray=["js","py",'java']

 const value=myArray.forEach( (item)=>{
    // console.log(item);
    return item;
 })
//  console.log(value)  //undefined

// *****************filter********************

let arr=[1,2,3,4,5,6,7,8]

// const val=arr.filter( (num)=> num%2===0)
const val=arr.filter( (num)=> {
    return num%2===0
})
// console.log(val)  // []->without return,
  
let newArr=[]

arr.forEach( (num)=>{
    if(num%2===0)
        newArr.push(num);
})
// console.log(newArr)


const books=[
    {
        title:"Book1", genere:"History", publish:1990
    },
    {
        title:"Book2", genere:"physics", publish:1995
    },
    {
        title:"Book3", genere:"History", publish:2000
    },
    {
        title:"Book4", genere:"Math", publish:2007
    },
    {
        title:"Book5", genere:"Computer", publish:2015
    },
]

// const userBook=books.filter( (bk)=>bk.genere=="History")
const userBook=books.filter( (bk)=>{
    return bk.publish>=2000&& bk.genere=="Math"
});
console.log(userBook)