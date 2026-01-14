//const tinderuser = new Object() // object constructor se object banaya
const tinderuser = {  
 
} 
tinderuser.name = "Deepak Lowanshi" 
tinderuser.email = "deepak@gmail.com" 
tinderuser.age = 22

// console.log(tinderuser); // is tarah bhi object me add kar sakte he 

// obejct ke andar ke andar object declare kar sakte he like

const regularUser ={
    email: "deepak@gmail.com",
    fullname: {
        userfullname: {
            firstname : "deepak",
            lastname : "lowanshi",        }
    }
} 

// console.log(regularUser.fullname.userfullname.firstname); // Acess karne ka tarika

// combining objects

 const obj1 = { 1: "one", 2: "two"}
 const obj2 = { 3: "three", 4: "four"} 

//  const obj3 = {obj1, obj2}

//  console.log(obj3); // bahi error object ke andar object ban gaya he
// object.assign() se kar sakte he
//  const obj3store = Object.assign({}, obj1, obj2); // empty object dene achhi baat he 
    const obj3store = {...obj1, ...obj2}; // spread operator se bhi kar sakte he
//  console.log(obj3store); // ab ye sahi ho gaya he   

// jab bhi database se data aayega arrray of object ke form me aayega
const users =[
    {

    },
    {

    },
    {
        
    },
] 

users[1].email // dot notation se access kar sakte he

console.log(tinderuser);
 
// object methods // mostly use in database se data lene me hota he

// Object.keys() - ye sare keys ko ek array me convert kar deta he 
console.log(Object.keys(tinderuser)); // [ 'name', 'email', 'age' ] 
// Object.values() - ye sare values ko ek array me convert kar deta he
console.log(Object.values(tinderuser)); // [ 'Deepak Lowanshi', 'deepak@gmail.com', 22 ]
// Object.entries() - ye key value pair ko ek array me convert kar deta he
console.log(Object.entries(tinderuser)); 
// [ [ 'name', 'Deepak Lowanshi' ],
//   [ 'email', 'deepak@gmail.com' ],
// dono ek sath aa jayega  


//properties pata karne ke liye
console.log(tinderuser.hasOwnProperty("name")); // true
console.log(tinderuser.hasOwnProperty("country")); // false

// ************** object part 3 - methods **************

// object ko destructuring karna
const course ={
    coursename : "js basics",
    price : 999,
    courseInstructor : "Deepak Lowanshi",   
}  

// course.courseInstructor // normal way to access

// destructuring karna
const {courseInstructor} = course;
console.log(courseInstructor); // Deepak Lowanshi

// destructuring with rename
const {price : coursePrice} = course;
console.log(coursePrice); // 999    


// API se data aata he to wo JSON format me aata he  
// JSON object format me kuch is tarah hota he
// {
//     coursename : "js basics",
//     price : 999,
//     courseInstructor : "Deepak Lowanshi",   
// } 

[
{},
{},
]