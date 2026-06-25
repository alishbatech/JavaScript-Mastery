let arr=[1,2,3,4,5]

// let myArray=arr.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc+curval;
// },0)

let myArray=arr.reduce( (acc,curval)=>(acc+curval),0);
// console.log(myArray)

const shopingcart=[
    {
        itemName:"js course",
        price:2999,
    },
    {
        itemName:"py course",
        price:3999,
    },
    {
        itemName:"Data science course",
        price:5999,
    },
]

const priceToPay=shopingcart.reduce( (acc,item)=>acc+item.price , 0)
console.log(priceToPay);