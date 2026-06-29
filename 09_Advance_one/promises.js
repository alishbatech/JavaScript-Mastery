// const myPromise=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('Task 1 is completed.')
//         resolve();
//     }, 1000);
// })
// myPromise.then(function(){
//     console.log("Promise1 consumed..")
// })


//  new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('Task 2 is completed.')
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log('promise2 consumed')
// })         

// // const promise3=new Promise(function(resolve,reject){
// //         setTimeout(() => {
// //             resolve({username:"Alishba",id:"250789"})
// //         }, 2000);
// // })
// // promise3.then(function(user){
// //     console.log(user)
// // })


const promise4=new Promise(function(resolve,reject){
        setTimeout(() => {
            // let error=false;
            let error=true;
            if(!error){

                resolve({username:"Alishba",id:"250789"})
            }else{
                reject("Error:Something went wronge.");
            }
        }, 2000);
})
promise4.then(function(user){
    console.log(user);
    return user.username;
}).then( (name)=>{
    console.log(name);
}).catch((error)=>{
      console.log(error)
})
.finally(()=>{
    console.log("The promise is resolved or rejected.")
})

// const promise5=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             // let error=false;
//             let error=false;
//             if(!error){

//                 resolve({username:"Alishba Shahid",id:"789"})
//             }else{
//                 reject("Error:Something went wronge.");
//             }
//         }, 2000);
// })
// async function consumedpromise5() {
//    try{
// let response=await promise5;
// console.log(response);
//    } catch(error){
//     console.log(error)
//    }
// }
// consumedpromise5();


fetch("https://api.github.com/users/alishbatech")
.then((response)=>{
      return response.json()
}).then((data)=>{
    console.log(data);
    console.log(data.name);
    console.log(data.login);
}).catch((error)=>{
    console.log("Error: " ,error)
})


async function getAlldata() {
    try{
        let responce=await fetch("https://api.github.com/users/alishbatech")
               let data= await responce.json();
               console.log(data.id);
               console.log(data.location);
    }catch(error){
 console.log(error)
    }
}
getAlldata();

