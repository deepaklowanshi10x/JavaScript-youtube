// Reduce ****************

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Ye original array ko modify nahi karta

const numbers = [1, 2, 3, 4, 5];

const NewNums = numbers.reduce( function (accumulator, currentValue) {
//    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
return accumulator + currentValue;   // accumulator me previous value hoti hai aur currentValue me current element hota hai
}, 0);  // 0 is the initial value of accumulator

// console.log(NewNums);  // Output: 15 

// example 2 

const shoppingCart = [
{
    itemName : "Laptop",
    price: 50000,
},
{
    itemName : "Phone",
    price: 20000,
},
{
    itemName : "Headphones",
    price: 5000,
}
] 

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price , 0);

console.log(`Total Amount: ₹${totalAmount}`)

