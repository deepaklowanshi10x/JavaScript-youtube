// Map()

// map method ek naya array return karta hai jisme har element par diya gaya function apply hota hai
// ye original array ko modify nahi karta


const numers = [1, 2, 3, 4, 5]; 

//const newNum = numers.map((num) => num + 10);  // har element me 10 add kar diya


//chaining Map and Filter
const newNum = numers
    .map((num) => num * 10) // har element ko 10 se multiply kar diya
    .map((num) => num + 1)   // har element me 10 add kar diya
    .filter((num) => num > 12);  // jo elements 12 se bade hain unhe naya array me rakha
 
    console.log(newNum); 