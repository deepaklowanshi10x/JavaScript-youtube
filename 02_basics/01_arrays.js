// Arrays 

// const myArr = [0,1,2,3,4,5,] 
// console.log(myArr); 
// console.log(myArr.length); 

// Basic Array Methods (add/remove elements)
//1. push()- adds on element at the end of the array
// const myArr = [0,1,2,3,4,5,] 
//  myArr.push(6);
// console.log(myArr); 

// //2. pop()- removes the last element from the array 

//  myArr.pop();
// console.log(myArr); 

// //3. unshift()- adds an element at the beginning of the array
// myArr.unshift(9);
// console.log(myArr); 

// //4. shift()- removes the first element from the array
// myArr.shift();
// console.log(myArr);

// const myArr = [0,1,2,3,4,5,]  
//5. indexOf()- returns the index of the first occurrence of a specified value 

// console.log(myArr.indexOf(9)); // -1 (not found)
// console.log(myArr.indexOf(3)); // 3 (found at index 3) 

//6. includes()- returns true if the array contains a specified value, otherwise false
// console.log(myArr.includes(9)); // false  

// console.log(myArr.includes(3)); // true

// Array to String and Join 
// const newArr = myArr.join()
// console.log(newArr); // "0,1,2,3,4,5"
// console.log(typeof newArr); // string 

// Slice and Splice in Arrays
//1. slice()- returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

const myArr = [0,1,2,3,4,5,]    
// console.log("A", myArr); // Clearty ke liye array print karwaya
const myNewArr = myArr.slice(1,3);
console.log(myNewArr); 


//2. splice()- changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// console.log("b", myArr); // Clearty ke liye array print karwaya
const myNewArr2 = myArr.splice(1,3); 
// console.log("c", myArr); // Clearty ke liye array print karwaya
console.log(myNewArr2); 

