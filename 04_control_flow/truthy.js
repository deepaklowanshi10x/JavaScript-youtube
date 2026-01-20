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
 

 // nullish coalescing operator (??) - null and undefined

//?? operator JavaScript me tab use hota hai jab hume kisi value ke null ya undefined hone par ek default value deni ho.

// 👉 Ye sirf null aur undefined ko hi check karta hai
// 👉 0, false, "" (empty string) ko valid value maanta hai
// Agar value1 null ya undefined hai → value2 use hogi,, Nahi to → value1 hi milegi
 
let val1;
val1 = 5 ?? 10;  //5 
// val1 = null ?? 10; //10
// val1 = undefined ?? 10; //10
// val1 = 0 ?? 10;
// val1 = false ?? true;
// val1 = "" ?? "default string";

console.log(val1); 

//Ternary Operator (? : )


// condition ? true : false 
// ek line me if else ka kaam kar deta hai

let age = 18;
// let canVote = (age >= 18) ? "Yes You can Vote" : "No You cannot Vote";  
// console.log(canVote); 
age >= 18 ? console.log("Yes You can Vote") : console.log("No You cannot Vote");