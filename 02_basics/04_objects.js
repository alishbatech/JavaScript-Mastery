// const user= new Object();
    //  OR
const user={}
// console.log(user)

user.id=123
user.name="alishba"
user.age=19

// console.log(user);

const regularUser={
    email:"examle@gmail.com",
    fullname: {
            userfullname:{
                userfirstname:"Alishba",
                userlastname:"Shahid"
            }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.userfirstname)
// console.log(regularUser.fullname.userfullname.userlastname)

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3={5:'a',6:'b'}
 
// const obj4={obj1, obj2}; 

// const obj4=Object.assign(obj1 , obj2 ,obj3) // obj1 change
// console.log(obj1==obj4);
// console.log(obj1);

// const obj4=Object.assign({},obj1 , obj2 ,obj3) //Object.assign(target,source)
//  ======OR=====
const obj4={...obj1, ...obj2}
// console.log(obj4)

// console.log(user);
// console.log(Object.keys(user));  // in the form of array=>[id , name ,age]
// console.log(Object.values(user));  // [123 , alishba , 19]
// console.log(Object.entries(user)); // [[id , 123],[name, alishba],[age , 19]]
//   console.log(user.hasOwnProperty('age')); // true

//   ***********************destructuring**************************

const course={
    courseName:"webdev",
    price:25000,
    courseInstructor:"alishba",
    socials:{
          Github :"alishbatech",
          linkedin:"alishba_shahid",
    }
}
// course.courseInstructor;
const {courseInstructor:instructor ,price ,socials:{Github}}=course;
// console.log(courseInstructor);
console.log(instructor),
console.log(price),
console.log(Github)



