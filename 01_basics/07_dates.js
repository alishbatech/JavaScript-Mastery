 let date=new Date
//  console.log(date);
//  console.log(date.toString());
//  console.log(date.toDateString());
//  console.log(date.toLocaleString());
//  console.log(date.toJSON());
//  console.log(date.toLocaleDateString());
 
 console.log(typeof date)
 
//  let mydate=new Date(2027,7,10)
//  let mydate=new Date(2027,7,10,5,3,0)
//  let mydate=new Date("6-20-2026")
//  console.log(mydate.toLocaleString());

 const myTimeStamp= Date.now();
//  console.log(myTimeStamp);   // in milli sec
//  console.log(myTimeStamp.getTime());
//  console.log(Math.floor(myTimeStamp/1000)); //in sec

 const newDate= new Date
//  console.log(newDate.getFullYear())
//  console.log(newDate.getDay())
//  console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekend:"long"
})


