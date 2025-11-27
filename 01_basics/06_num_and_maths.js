const score = 300
console.log(score);

const balance = new Number(200);
console.log(balance);

// Number Methods
console.log(balance.toString()) // 200 in string 
console.log(balance.toFixed(2)); // value in point in e-commerce web

const otherNumber = 123.899
console.log(otherNumber.toPrecision(3)); // lagbhag

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // easy counting 

//-------------------------****------------------------
// Math object  
console.log(Math);
console.log(Math.abs(-78)); // nagetive value ko positive me convert karta he abs 
console.log(Math.round(4.6)); // round off 5
console.log(Math.ceil(4.4)); // thoda bhi uper ho to agala number // 5
console.log(Math.floor(4.9)); // miche bala number ek bhi kaam ho to //4
console.log(Math.min(2,5,1,6,3)); // minimum value  
console.log(Math.max(2,5,1,6,3)); // maximum value  
console.log(Math.random()); // o to 1 ke beech me random number 
console.log(Math.random()*10+1) // kaha se kaha tak value chahiye // 1 ko hum is liye lagate he ki 0 value na aaye

//Example : 
const min = 10 
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min); //random number between min and max value // +min is liye kyuki 10 se uper aaye 






