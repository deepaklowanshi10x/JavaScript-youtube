//IIFE (Immediately Invoked Function Expression) JavaScript me ek aisa function hota hai jo define hote hi turant execute ho jata hai.

//👉 IIFE ka use kyun hota hai?
//Global scope pollution se bachne ke liye :<-  interview me bolne ke liye 

//JavaScript me agar variables global ho jayein, to conflict ho sakta hai.
// IIFE apna alag private scope banata hai. 

//like 

(function chai(){ 
console.log(`DATABASE CONNECT`) 
})();

// aage koi code execute karna he to iife ke code ko end karna hoga end karne ke liye ; semycolan
//  (()=> { 
// console.log(`DATABASE CONNECT MORE`) 
// })() 
 
 ((name)=> { 
console.log(`DATABASE CONNECT MORE ${name}`) 
})(`Deepak`) 
 


