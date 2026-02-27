const promiseOne = new Promise(function(resolve, reject){
    // do an async tast
    //DB call, APIs calls, network
    setTimeout(function(){
        console.log('Async task is compelete')
        resolve()

    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// 2nd format 

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('Async task is compeleted')
        resolve()

    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
}) 

// 3rd promise 
const promiseThree =new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// 4th promise 
const promiseFour =new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false //true
        if(!error){
        resolve({username: "Deepak", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise Is Either Resolved Or Rejected"))

// 5th Promise

