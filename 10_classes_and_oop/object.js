function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

// function function bhi he or object bhi 

function createUser(username, score){
    this.username = username
    this.score = score
} 

createUser.prototype.increment = function(){
    this.score++ 
    // this matlv jishne bhi bulaya he ushke pass
}
 
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()