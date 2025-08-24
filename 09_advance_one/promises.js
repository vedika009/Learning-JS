// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// abhi complete nahi hoga, baad mein hoga - that's why asynchronous
// async await bhi kind of similar kaam krta h

// mostly, we are "comsuming" promises, not creating
// fetch('https://something.com').then().catch().finally()

// new se instance mil jaata h
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, n/w call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // ab ye .then() se connect hua h
    } , 1000);
}) 

// promise is created,to consume: - resolve the connection: .then()
promiseOne.then(function() {
    console.log("Promise consumed");
}) 

// ------------------------------------------------------not assigning a variable---------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// --------------------------------------------------parameters-------------------------------------------------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // passing parameters in resolve
        resolve({username: "Vedika", email: "vedika@gmail.com"}) // obj is passed in parameter
    }, 1000)
})

promiseThree.then(function(user){ // user is the object here - parameter
    console.log(user);
})

// --------------------------------------------------------------------------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // true will show the error
        if(!error){
            resolve({username: "Vedika", password: "12"})
        } else{
            // rejection gives error
            reject("Error: Something went wrong")
        }
    } , 1000)
})

// jitne chaahein utne .then() laga skte h

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })

// console.log(username); // wrong

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { // then will catch whatever promiseFour.then() will return
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// ---------------------------------------------------------------------------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // true will show the error
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        } else{
            // rejection gives error
            reject("Error: JS went wrong")
        }
    } , 1000)
})

// async await syntax

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }

}

consumePromiseFive()

// ------------------------------------------------------------------------------------------------------

async function getAllUSers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        const data = await response.json() // await because it takes time
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

// getAllUSers()

// ---------------------------------------------------------- fetch ------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users') // no need to call if 'fetch'
.then((response) => {
    return response.json()
})  
.then((data) => { // thennable
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

// ------------------------------------------------------------------------------------------------------------------------

fetch('https://api.github.com/users/vedika009') // no need to call if 'fetch'
.then((response) => {
    return response.json()
})  
.then((data) => { // thennable
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

// fetch is prioritised over others
// there's a special queue made for fetch - micro task priority queue
// like a VIP, call stack mein sbse pehle yahi add hoga

// error 404 - onFulfilled mein hee count hoga, NOT an error
// error tab hogi jab kuch response hee na aaye, ye ERROR bhi ek response hee h

