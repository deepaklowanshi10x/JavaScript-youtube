let score = "33abc"

console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33"=> 33
// "33abc" => NaN
// true => 1 / false => 0
// Null => 0

let isLoggedIn = 1 //"","Deepak"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true / 0 => false 
// " " => false 
// "Deepak" => true


// Convert number to String 
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); 
//console.log(typeof stringNumber);

//************    Operations   ****************

let value  = 3
let negValue = -value
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello"
let str2 = " Deepak"

let str3 = str1 + str2 
console.log(str3);

// console.log( "1" + 2);   // o/p => 12  firt number string he to sabhi letter string ban jayenge
// console.log(1 + "2"); 
// console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let gameCounter = 100
gameCounter++;
console.log(gameCounter);   //101 

// Go to the website Mdn web doc read the prefixed and postfixed
// website ECMA script also read
