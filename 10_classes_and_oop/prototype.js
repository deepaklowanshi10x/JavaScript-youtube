// let myName = "Deepak     "

// console.log(myName.truelength);




let myHeros = ["thor", "spiderman", "ironman"]

let heroPower = { 
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.deepak = function(){
    console.log("Deepak is present in all objects");
}

Array.prototype.heyDeepak = function(){
    console.log("Hey Deepak, how are you?");
} 
// heroPower.deepak();
myHeros.deepak()
myHeros.heyDeepak()
// heroPower.heyDeepak()





// ***************** inheritance in js *****************


const User = {
    name: "Deepak",
    email: "deepaklowanshi@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Deepak        "

String.prototype.truelength = function(){ 
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`)
} 

anotherUsername.truelength()
"deepak".trueLength()
"iceTea".trueLength()
 

