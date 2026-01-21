// for...in **************************************

// for...in loop object ke keys / properties par loop chalata hai.
// Ye index ya key deta hai, value nahi.

const myObject ={
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby',
    java : 'Java'
};

for (const key in myObject) {
    // console.log(`Key is : ${key}, Value is : ${myObject[key]}`);
};  


// Array in for...in loop ****************************
// Array mein index deta hai for...in loop 

const language = ["JavaScript", "CPP", "Java", "Python"];

for (const key in language) {
    // console.log(`Key is : ${key}, Character is : ${language[key]}`);
}    
 

// map in for...in loop ****************************
// Map mein for...in loop nahi chalata kyunki map iterable hota hai lekin object nahi.

const map1 = new Map();
map1.set('name', 'Deepak');
map1.set('age', 24);
map1.set('isStudent', true);   // iterable hota he hai map is liye code nahi chalega

for (const key in map1) {
    console.log(`Key is : ${key}, Value is : ${map1[key]}`);
}   