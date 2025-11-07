const name = "Deepak"
const repoCount = 50

// console.log(name + repoCount + " value");
// this is right syntax but this type not used this time

// console.log('Hello my name is ${name} and my repo count ${repoCount}');
// moden way syntax called string interpulation

const gameName = "Deepak-lowanshi"
console.log(gameName.length); 
// console.log(gameName[0]); // key value pair Acess
// console.log(gameName.__proto__); //ACESS METHOS

// console.log(gameName.length); // length of cherecter
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());  


// console.log(gameName.charAt(2)); // character position janne ke liye
// console.log(gameName.indexOf('i')); // character position

// new methods more

const newString = gameName.substring(0,6) 
// console.log(newString);

const anotherString = gameName.slice(-2,14)
console.log(anotherString); 

// trim method in javaScript
const newStringOne = '   Deepak   ';
console.log(newStringOne);
console.log(newStringOne.trim());
// remove the extra spaces

// repalce
const url = "https//Deepak.com/deepak%20lowanshi";
console.log(url.replace('%20', '-'))
console.log(url.includes('Deepak')) // true 
console.log(url.includes('sundar')) // false 

console.log(gameName.split('-'))











