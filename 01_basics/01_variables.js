const accountId = 1234
let accountEmail = "example@gmail.com"
var accountPassword = "234shiba"
accountCity = "FSD"

let accountState;

// accountId=4567;  //not allowed
console.log(accountId);

/*Prefer not to use var 
 because issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity
    , accountState])
