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

console.log(this) // current cotext is empty

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


chai()