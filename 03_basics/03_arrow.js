// this - current context (objects ke andar kaam kr rha h, functions ke andar nahi)
// for interview: difference between normal and arrow function:
// this binding (arrow mein nahi hoti)
const user = {
    username: "Vedika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this)
    } 
}

// user.welcomeMessage() // run with default value of username, "Vedika" 
// user.username = "Medha" //change the value
// user.welcomeMessage() // changed value

//console.log(this) // current cotext is empty

// function chai(){
//     let username = "Vedika"
//     console.log(this.username) // undefined
// }

//chai()

// const chai = function() {
//     let username = "Vedika"
//     console.log(this.username) // undefined
// }


// function keyword hata ke arrow =>
const chai = () => {
    let username = "Vedika"
    console.log(this) // undefined
}


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ------------------------ IMPLICIT RETURN -------------------------

//const addTwo = (num1, num2) => num1 + num2 // return and scope are removed

//const addTwo = (num1, num2) => (num1 + num2) // add parenthesis 

// object ko bina { } ke nahi likh skte, isliye enclose in parenthesis 
const addTwo = (num1, num2) => ({username: "Vedika"})

console.log(addTwo(3, 4))

const myArr = [2, 6, 7, 8]

// myArr.forEach(function (){

// })

myArr.forEach(() => {}) // arrow function
//myArr.forEach(() => ()) // implicit return