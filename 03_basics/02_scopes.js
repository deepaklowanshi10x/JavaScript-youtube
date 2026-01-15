// let a = 10
// const b = 20           // Globle scopes
// var c = 30  

if(true){
    let a = 10
    const b = 20           // block scope
    var c = 30  
}

//console.log(a); // error    .. define nahi he 
// console.log(b);// error    .. define nahi he 
// console.log(c); // 30    .. var jabhi use nahi karte kyu ye {} scope se achhe ho jata but scope me se kuchh access nahi hota he 

// {} Scope ke andar jo likh diya bs usse bahar kuchh nahi aana chahiye is liye var ko avoid karte he 

// ex :- 
let a =200 

if(true){
    let a = 10
    const b = 20           // block scope    
    // console.log("INNER:", a) // inner me a ki value 10 he 
}
 
// console.log(a); // Globle scope ki value dega agar hum block scope ke andar console log kare to andar ki value dega 

 // ******* Nested scope******

 //example  
 // Child function perent function ko acess kar sakti he
 function one() {
    const username  = "Deepak"

    function two(){
        const website =" youtube"    
        console.log(username); //Deepak 
    } 
    // console.log(website); // error
    two()

 } 
 one()  

 // Example 2 if elses me

 if(true) {
    const username ="deepak"

    if(username === "deepak"){
        const website = "youtube"
        console.log(username + website); // deepakyoutube
    } 

    // console.log(website); //error
 } 

//  console.log(username); // error username is not defined

//*******************************intresting****************
 
// addOne()   // yeha Execute ho jayega but niche bale me nahi 
function addOne(num) {
    return num + 1

} 
 addOne() // return hoga print nahi  print ke liye console


 addTwo()  // error aa jayegi    ... Cannot access 'addTwo' before initialization
 const addTwo = function(num){
    return num + 2
 } 

 addTwo() // return hoga print nahi  print ke liye console