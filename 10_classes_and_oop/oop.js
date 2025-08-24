// ------------------------------------------------------object literal--------------------------------------------------

const user = {
    // properties
    username: "vedika",
    loginCount: 8,
    signedIn: true,

    //functions
    getUserDetails: function(){
        // console.log("got user details from database"); // undefined will also come, will discuss later
        // console.log(`Username: ${this.username}`);
        //console.log(this); // current context
    }
}

//console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this); // empty - nothing in global context

// global context keeps changing

// this keyword - to provide current context 

// ------------------------------------------constructor function------------------------------------------------------
// const promiseOne = new Promise()
// const date = new Date()

// new keyword - constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // can make method also
    this.greeting = function(){
        //console.log(`Welcome ${this.username}`);
    }

    // return this
}

// const userOne = User("hitesh", 12, true) 
// const userTwo = User("vedika", 34, false) // changed

// so use new
const userOne = new User("hitesh", 12, true) 
const userTwo = new User("vedika", 34, false) // changed

//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor); // [Function: User] (khud ke baare mein reference)

// ------new keyword
/*

- creates an empty object, called instance
- constructor function is called, because of new keyword

instanceof - is it the same keyword?

*/