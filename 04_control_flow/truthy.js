const UserEmail = "deepaklowanshi777@gmail.com"

if (UserEmail)
{
    console.log("Got User Email");       // koi value true and false nhi likhi man liya 
} 
else {
    console.log("Dont have User Email");
} 

//Falsy values in JavaScript
// false
// 0 , -0
// "" (empty string)
// null
// undefined
// NaN  
//BigInt(0n)

//Truthy values in JavaScript
// true
// any number other than 0 and -0
// any string with atleast one character " "
// [] (empty array)
// {} (empty object)
// function() {} (empty function)

//example 1 array check karne ke liye
 if (UserEmail.length === 0) {
    console.log("Array Is empty");
 } 

 //Example 2 obj

 const emptyObj = {}
 if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
 }