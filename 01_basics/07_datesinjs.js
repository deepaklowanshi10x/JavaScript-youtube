let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); // Thu Nov 27 2025 14;29:29 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Thu Nov 27 2025
// console.log(myDate.toISOString()); // 2025-11-27T09:02:53.817Z
// console.log(myDate.toLocaleString()); //  11/27/2025, 2:34:33 PM 
// console.log(myDate.toLocaleTimeString()); // 9:34:28 PM


// let myCreatedDate = new Date (2025, 0, 23)
// console.log (myCreatedDate.toDateString()); 
// Thu Jan 23 2025

let myCreatedDates = new Date (2025,0,23,6,6) 
console.log (myCreatedDates.toLocaleString());
// 1/23/2025, 6:06:00 AM

// let myCreatedDate = new Date ("01-14-2026") // follow in India
let myCreatedDate = new Date ("2026-01-14") // follow in Other Country
console.log(myCreatedDate.toLocaleString()) 

// let myTimeStamp = Date.now()
// console.log(myTimeStamp) 
// console.log(myCreatedDate.getTime()); // Compare courent date
// console.log(Date.now()/1000);  //1765961351.478
// console.log(Math.floor(Date.now()/1000));// 1765961351 

let newDate = new Date()
console.log (new Date);
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth()+1) 
// console.log(newDate.getDay()) 
// console.log(newDate.getDate()) 

newDate.toLocaleDateString('default',{
    weekday : 'long',

}
)
dchkchscdscccb