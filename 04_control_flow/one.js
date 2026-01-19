// If       >, <, >=, <=, ==, !=, ===, !==
// syntax 
//if (condition) {
//    // code to be executed if condition is true
//} else {
//    // code to be executed if condition is false
//}
//example 1
// const tempreture = 40
// if (tempreture > 30) {
//     console.log("Tempreture in greater than 30");
// }
// else {
//     console.log("Tempreture less Than 30");
// } 

// //example 2
// const score = 300
// if(score > 200) {

//     const power = "fly"
//     console.log(`User power: ${power}`);   
// }

// Short hand Notation 

// if(balance > 500) console.log("You are rich"), console.log("You have more than 500 in your account");
// line 27 code sahi he bs likhne ka tarika sahi nahi he 

// multiple conditions check karne ke liye
 
// const balance = 1000    
// if(balance < 500) {
//     console.log(" balance less than 500");
// }
// else if(balance < 900) {
//     console.log("balance less than 900");
// } 
// else if(balance < 700) {
//     console.log("balance less than 700");
// } 
// else {
//     console.log("Balance less than 1200");
// }




// real life example and used 

const UserLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedIndEmail = true

if(UserLoggedIn && debitCard) {
    console.log("You can purchase the item");
} 

if(loggedInFromGoogle || loggedIndEmail) {
    console.log("User logged in successfully");
}