// for of 
//for...of loop iterable values par loop chalata hai jaise ki arrays, strings, maps, sets etc.
// ye har iteration mein value provide karta hai index nahi.
// ye simple aur readable hota hai jab humein sirf values chahiye hoti hain.

// ["", "", ""]
// [{}, {}, {}] 

const arr = [1, 2, 3, 4, 5];

for (const element of arr) { 
    // console.log(element);
}


const greetings = "Hello World";
 for (const char of greetings){
    // console.log(`char value of ${char}`);
 } 



 // Maps  ******************************
  
 //Map ek special object hai jo key–value pairs store karta hai.
// Normal object se better hota hai kyunki:
// koi bhi data type key ban sakta hai (string, number, object, function)
// Order maintain rehta hai
// Size easily mil jata hai 
 
    const map = new Map();

    // set method se key-value pair add karte hain
    map.set('name', 'John');
    map.set('age', 30);
    map.set(1, 'one');
    map.set(true, 'boolean true');
//  console.log(map);
    // get method se value milti hai key ke through
    // console.log(map.get('name')); // John
    // console.log(map.get(1)); // one   


    //map on for of loop ************************************

//  Interview point ⭐
// Map iterable hota hai
// Default iteration = [key, value]
// Isliye destructuring [key, value] use karte hain 

    for (const [key, value] of map) {
    //  console.log(`Key is : ${key}, Value is : ${value}`);
    }   

// object in for of loop ****************************
// obejct in for of loop nahi chalata kyunki object iterable nahi hota. 

const obj = {
    name: 'Alice',
    age: 25,
    city: 'New York'
}; 

for (const [key, value] of obj) {  // Error: obj is not iterable
    console.log(`Key is : ${key}, Value is : ${value}`);
}