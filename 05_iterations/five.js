// ********************* for each ******************

const arr = ["js", "cpp", "py", "java"]

// arr.forEach( function(item){
//       console.log(item)
// })
//  ===========OR==============

arr.forEach((item) => {
    //   console.log(item)
})

// ============OR==============
const printMe = function (item) {
    // console.log(item)
}
arr.forEach(printMe)

arr.forEach((index, item, arr) => {
    //   console.log(index , item , arr );
})

const myArray = [
    {
     languageName:"javascript",
     languageFileName:"js",
    },
    {
     languageName:"Python",
     languageFileName:"py",
    },
    {
     languageName:"java",
     languageFileName:"java",
    },

]
myArray.forEach( (item)=>{
    // console.log(item);
    console.log(item.languageName);
})
