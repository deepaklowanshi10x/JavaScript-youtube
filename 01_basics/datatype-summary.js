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

const heros = ["ajay", "Deepak", "Gulshan"];     // array

let myObj = {                                    // object
name : " Deepak ",
age : 21,
} 

const myFunction = Function()                    //function
{
    console.log(" hello Deepak");
    
}  

//********************************************************************************************

// Memory Alocation 
//they are two type of Memory in javaScript 

// Stack (Primitive)
// Heap (Non Primitive)

/*       Stack: stack me jab bhi koi variable decalare karte he to ushka copy hi milta he 
Heap : heap me orignal value ka hi reference milta he like object me koi value change ki to orignal value me hi change hoga 

*/

let myYoutubename = "Deepak Lowanshi"
let anothername = myYoutubename 
anothername = "Deepak Lodha"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "deepaklowanshi@gmail.com",
    upi : "deepak@ybl",
}

let userTwo = userOne

userTwo.email = "deepaklowanshi00@gmail.com" 

console.log(userOne.email);
console.log(userTwo.email);




