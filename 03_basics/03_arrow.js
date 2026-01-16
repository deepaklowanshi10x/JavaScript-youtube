// introduce this keyword 

// this:- curent content ko refer karta he 

const user = { 
    username : "Deepak",
    price : 100,

    welcomeMassage: function() { 
        console.log(`${this.username}, Welcome to my Web`);
         //console.log(this);
    }
} 

user.welcomeMassage()  // ye deepak ko hi karega 
user.username = "Ajay";  // jo current contact hu ushki value lega 
user.welcomeMassage()  

console.log(this); // empty obeject  


// this key word thoda introduce work nahi karta undefine

// function chai(){
//     let username ="Deepak";
   // console.log(this.username);
// }
// chai() //undefined  kyuki ushko ye nahi pta chal raha he this kya he username kya he 

// function tarike 

// const chai = function(){
//       let username ="Deepak";
//     console.log(this.username);
// }
//  chai() //undefined  kyuki ushko ye nahi pta chal raha he this kya he username kya he 
 
 // arrow me dekhte he 


const chai = () => {             //=> arrow function
      let username ="Deepak";
    console.log(this.username);
}
 chai() //undefined  kyuki ushko ye nahi pta chal raha he this kya he username kya he 

 //****************     Arrow Function      ***********************/ 


//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }                                         // basic arrow function

//  console.log(addTwo(3,4)); 


 // tarike likhne ke 

 const addTwo = (num1, num2) =>  (num1 + num2)                                 
    // yadi {} hata dete he to return likhne ki jarurat nahi  

    //GK   const addTwo = (num1, num2) => ({username : "Deepak"}) // without paranthieses ke print nahi hota nahi to undefined hoga

 console.log(addTwo(3,4)); 
