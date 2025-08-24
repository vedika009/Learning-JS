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
        console.log(this); // current context
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this); // empty - nothing in global context

// global context keeps changing

// this keyword - to provide current context 

// ------------------------------------------constructor function------------------------------------------------------
const promiseOne = new Promise()
const date = new Date()

// new keyword - constructor function