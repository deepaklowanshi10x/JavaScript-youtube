const accountId = 19121
let accountEmail = "deepak@gmail.com"
var accountpassword = "112233"
accountcity = "Bhopal"

// accountId = 2  // not allowed 
accountEmail = "deepaklowanshi@gmail.com"
accountpassword = "123456"
accountcity = "Indore"
let accountstate; // undefined

/* 
prefer not to use Var 
because of issue in block scope and functional scope 
*/

console.log(accountEmail);
// console.table([accountEmail, accountpassword, accountcity]);

console.table([accountEmail, accountpassword, accountcity, accountstate]);



