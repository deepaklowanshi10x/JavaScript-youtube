// ************ Conversions ************

/*
let score = 33 
let score = "33" 
let score = null
let score = undefined
let score = true



// data type pata karne ke liye  

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber); 
 


//"33"=> 33
// "33abc"=> NaN 
// true => 1; false =>0  


*/

// let isLoggedIn = 1
let isLoggedIn = "";
// let isLoggedIn = "Deepak"

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// " " =>false
// "Deepak" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//************* Operations ************

let value = 3;
let negvalue = -value;
// console.log(negvalue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2); 
 
*/

let str1 = "Deepak";
let str2 = " Lowanshi";

let str3 = str1 + str2;
/*
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3); // not this type

*/

// console.log(+true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
 
let gameCounter = 100 
gameCounter++;  // ++gameCounter (incement topic )
console.log(gameCounter); 
//console.log(typeof gameCounter);
 
// link to study  

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
