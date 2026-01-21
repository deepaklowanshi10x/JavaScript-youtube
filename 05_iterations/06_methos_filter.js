//methods 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter method ek naya array return karta hai jisme wo elements hote hain jo condition ko satisfy karte hain
// ye original array ko modify nahi karta 

// const newNum = myNum.filter((num) => {
//     return num>4         // yadi aap{} use kar rahe hain to return zaroori hai nahi to ek line me likh sakte he 
// });

// console.log(newNum);  // [ 5, 6, 7, 8, 9, 10 ]

// yadi aap loop se karte to kuchh is tarah hota

 const myNewNum =[];

 myNum.forEach((num) => {
    if( num > 4){
        myNewNum.push(num);
    }
 })

 console.log(myNewNum);