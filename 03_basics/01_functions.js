// function ka sidha matlv he jitna bhi code likha ushko ek packege me band kar diya 
// bo packege aap jaha chaho baha copies kar sakte he 

// () -  parndhisies 

// functiin like :- format

function myName(){
    // console.log("D");
    // console.log("e");
    // console.log("e");
    // console.log("p");
    // console.log("a");
    // console.log("k");        
} 
// myName()  // function call 

// Adding Two Numbers in function and tarike 

// 1
function addTwoNumber (num1, num2){ 
    //console.log(num1 + num2);
} 
// addTwoNumber() // functions  call // NaN
addTwoNumber(3, 4)  // Argument to dena hoga kuchh  

//2   
function addTwoNumber (num1, num2){ 
    let result = num1+num2 // jab function execute ho jayega to is result ko return kar dega 
    return result
}  
// const result = addTwoNumber(3,4) // variable me store
// console.log("Result :", result)

//3 
function addTwoNumber (num1, num2){ 
    let result = num1+num2
    return result 
    console.log("deepak"); // result return karne ke bad koi code nahi chale ushke pahle execute ho jayega 
    
}  
// const result = addTwoNumber(3,4) 
// console.log("Result :", result)
 
//example user ko massage return kar rahe he

function loginUserMessage (username){ 
    if(username ===undefined)  // (!username)  yesha bhi kar skate ho
{
    console.log("Please enter a username") 
    return // yaha return de diya to niche bale ka return massage hat jayega
}
    return `${username} just logged in`
} 

// console.log(loginUserMessage("Deepak"));
// console.log(loginUserMessage()); // undefined username dena padega  nahi diya to ek massage karte he if me  


// koi e-commerce web he ushme hum cart add kar rahe he 
function calculateCartPrice(...num1){ 
    return num1

}
console.log(calculateCartPrice(100,200,101)); // normaly 100 aayega but ... (Rest operater use karne ke bad num1 jitane bhi add karne sabhi aayenge) array ke format me

// object ko funcation me kese pass karte he 

// example 
const User = {
    username : "Deepak",
    age: 22
}

// create function
function handleObject (anyObject)
{
   // console.log(`user is ${anyObject.username} and age is ${anyObject.age}`);
} 

handleObject (User) // call function object 
 

// array kese pass karte he 

const myNewArray = [100,200,300,400] // array

function returnSecondValue(myArr){
    return myArr[2] 
}

// console.log(returnSecondValue(myNewArray)); // [100,200,300,400]
// console.log(returnSecondValue([100,200,300,400])); 

