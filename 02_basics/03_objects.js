// object ko do tarike se declare kar sakte hain 1. object literal 2. object constructor
// literal ki tarah declare karte he to singletonna nhi banta ... constructor ne ban jata he 

// Symbol ko kese Access karte hain 
const sym1 = Symbol("mySymbol1");

const JsUser ={
    [sym1] : "Deepak", 
    name: "DeepaK Lowanshi",
    age : 22,
    location: "Bhopal",
    email: "deepaklowanshi900@gmail.com",
    IsLoggedIn: true,
    lastLoginDays : ["Monday", "Friday", "Saturday"],

}
// Accessing in obejcts tarike 

// console.log(JsUser.name); // Dotnotation // Access to ho jayega but tarika sahi nahi he 
// console.log(JsUser["name"]); // ye sahi tarika he access karne ka
// console.log(JsUser["email"]); 
//console.log(JsUser[sym1]); 

// basic bate in object 
JsUser.email ="deepaklowanshi889@gmail.com";  
// Object.freeze(JsUser); // ab object freeze ho gaya he ... ab isme kuch bhi change nahi kar sakte
JsUser.email ="deepak@gmail.com";  // change nahi hoga

console.log(JsUser); // pura object print karwaya // access


// functions in object 
// example 1
JsUser.greeting = function(){
    console.log("Hello JS User");
 } 

//  exmaple 2
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this ka use hum object ke anader kya he pta kerne ke liye karte hainb 
 } 

console.log(JsUser.greeting()); //Hello JS User
console.log(JsUser.greetingTwo()); // Hello JS User, DeepaK Lowanshi
