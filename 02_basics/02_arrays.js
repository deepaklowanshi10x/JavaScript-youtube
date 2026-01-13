const man_heros = ["Akshay", "Salman", "Aamir", "Hrithik"]; 
const woman_queens = ["Priyanka", "Kareena", "Deepika"];

//man_heros.push(woman_queens);
// console.log(man_heros);

// combining and splitting arrays
const new_bollywood_cinema = man_heros.concat(woman_queens);
// console.log(new_bollywood_cinema);

//spred operator
const new_bollywood = [...man_heros, ...woman_queens]
// console.log(new_bollywood);

//flat()

const another_array = [1,2,3,4,[1,2],5,6,[2,4,[1,3]]] 
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Checking type
//Array.isArray()
let str = "deepak"
 console.log(Array.isArray(str)); // false
 
// Creating arrays
// array.from()

let str2 = "Deepak"; 
 console.log(Array.from(str2)); // ['D', 'e', 'e', 'p', 'a', 'k']

// array.of()
let score1 = 100;
let score2 = 200;
let score3 = 300;  

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
