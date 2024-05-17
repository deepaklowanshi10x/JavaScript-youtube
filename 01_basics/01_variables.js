const accountId = 19121
let accountEmail = "deepak@gmail.com"
var accountpassword = "112233"
accountcity = "Bhopal"

// accountId = 2  // not allowed 
accountEmail = "deep@gmail.com"
accountPassword = "123456"
accountCity = "Indore"
let accountState; // undefined

/* 
prefer not to use Var 
because of issue in block scope and functional scope 
*/

console.log(accountEmail);
// console.table([accountEmail, accountPassword, accountCity]);

console.table([accountEmail, accountPassword, accountCity, accountState]);

