const accountId = 122222
let accountEmail = "deepaklowanshi@gmail.com"
var accountPassword = "12345"

//accountId = 133333 // not allowed
accountEmail = "deepaklodha@gmail.com"
accountPassword = "1112233"
accountCity = "Hoshangabad"
let accountState;

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])