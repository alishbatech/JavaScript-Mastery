
const user={
    username:'Alishba',
    userId:109,
     displayValue:function(){
        //  console.log("Valus is displayed")
        //  console.log(`UserId : ${this.userId}`)
        //  console.log(this)
        }
    }
    // console.log(user.username)
    // console.log(user.displayValue())
    // console.log(this)  //{}


    function User(userName,usercount,userIsloggin){
        this.userName= userName;
        this.usercount= usercount;
        this.userIsloggin= userIsloggin;
        this.greeting=function(){
            console.log(`Welcome ${this.username}`)
        }
        return this;
    }
    const userOne= new User("Alishba",10,true)
    const userTwo= new User("Alisha",11,false)
    console.log(userOne);
    console.log(userOne.constructor);
    console.log(userTwo);