// for loops 
// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }  

for (let i = 0; i <= 10; i++) { 
    const element = i;
    // console.log(element);
    
} 

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`); 
    for (let j = 1; j <= 10; j++) { 
        // console.log(`   Inner loop: ${j}`); 
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}
 

//Array in loop
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit); 
    } 

//break and continue

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        break;  // loop ko yahi rok dega
    }  
    console.log(`Value of i: ${i}`);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        continue;  // loop ko yahi skip kar dega aur aage badh jaega
    }  
    console.log(`Value of i: ${i}`);
} 