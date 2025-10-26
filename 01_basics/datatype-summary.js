//there are two type of data in javaScript primitive and non primitive 

// ********   Primitive ******
// there are 7 type of primitive datatype 
// string, boolean, null, undefined, symbol, number, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId); 

const bigNumber = 7693019716363539848n

// ******* Reference Type (Non Primitive) *********

const heros = ["ajay", "Deepak", "Gulshan"]; // array

let myObj = {           // object
name : " Deepak ",
age : 21,
} 

const myFunction = Function()                    //function
{
    console.log(" hello Deepak");
    
}  






