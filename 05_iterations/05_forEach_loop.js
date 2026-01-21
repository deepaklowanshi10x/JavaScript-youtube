// ForEach Loop
// forEach loop array ke har element par ek function call karta hai.
// ye array ko modify nahi karta balki har element par operation perform karta hai.
// ye simple aur readable hota hai jab humein sirf array ke elements par kaam karna hota hai.


const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"];

// coding.forEach(function(item) { 
//     console.log(item);
// }) 

// // Arrow function ke sath forEach loop
// coding.forEach( (item) => { 
//     console.log(item);
// }) 

// Named function ke sath forEach loop
// function printme(item)
// {
//     console.log(item);
// } 

// coding.forEach(printme);


// forEach loop or bhi kuchh batata he hai jaise index aur pura array
coding.forEach( (item, index, array) => { 
    // console.log(`Item is : ${item}, Index is : ${index}, Array is : ${array}`);
}) 


// [{}, {}, {}]  
// database se data array ke format mein aata hai jismein har element object hota hai. 
 const myCoding = [
    {
        languageName: "javaScript",
        languageFile: "js"
    },
    {   
        languageName: "python",
        languageFile: "py"
    }, 

    {
        languageName: "C++",
        languageFile: "cpp"
    }   
 ] 


 myCoding.forEach((item) => {
    console.log(item.languageName); 
 })