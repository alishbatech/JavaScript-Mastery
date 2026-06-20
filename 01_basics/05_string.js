let str1="Hello"
let str2="World"
let value=2026

// console.log(str1+str2+" 2026");  //not recomended

// console.log(`My string is ${str1+str2} and value is ${value}.`)
        //  =======================================

let newStr= new String("Alishba") //string object(Heap) but immutable(not change in original)
                                   

// console.log(typeof newStr); //object

console.log(newStr.__proto__); 
// console.log(newStr.toUpperCase());  //copy generated in Stack
// console.log(newStr.length); 
// console.log(newStr.fontsize()); 
// console.log(newStr[3]);
// console.log(newStr.charAt(2));
// console.log(newStr.indexOf('a'));
// console.log(newStr.substring(0 , 4));  // end not include [0,4)
// console.log(newStr.slice(-8,5));  //can accept negative values
  
// let newstr2=new String( "   Alishba   ");
let newstr2= "   Alishba   ";
console.log(newstr2);
console.log(newstr2.trim()); // only trim white spaces

let newstr3="Alishba-shahid-com";
console.log(newstr3.replace("-","." ))
console.log(newstr3.replaceAll("-","." ))
console.log(newstr3.includes("com"));