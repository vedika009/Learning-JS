// singleton
// literal se - no singleton
// constructor se - singleton

// object literals

///Object.create // constructor method

const mySym = Symbol("key1")

const jsUser = { // literal method
    name: "Vedika",
    "full name": "Vedika Mishra",
    //mySym: "myKey1", // not a way to add symbol as a key in object
    // keep it in [ ] to use as symbol
    [mySym]: "myKey1", // correct syntax
    age: 20,
    location: "Indore",
    email: "vedika@google.com",
    isLoggedin: false,
    lastLoginDays : ["Monday", "Saturday"]
} 

// can access objects through dot operator
// console.log(jsUser.email);
// console.log(jsUser["email"]) // access as strings (keys)

// console.log(jsUser["full name"]); // dot operator se access nahi kr skte (b'coz string)
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym); // string
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

jsUser.email = "medha@google.com"
// console.log(jsUser.email)
// console.log(jsUser)

// if you want to lock the values, in an object, so that no one can change, you can FREEZE it
//Object.freeze(jsUser)
jsUser.email = "neha@google.com" // didn't change
// console.log(jsUser.email)

jsUser.greeting = function(){
    console.log("hello JS User")
}

jsUser.greeting2 = function(){
    console.log(`hello JS User, ${this.name}`)
}

// console.log(jsUser.greeting())
//console.log(jsUser.greeting) // [Function (anonymous)]

console.log(jsUser.greeting());
console.log(jsUser.greeting2());