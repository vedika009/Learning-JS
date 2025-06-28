// if
const isUserLoggedIn = true

const temperature = 34

// if(temperature < 50){
//     console.log("whassup bro, less than 50");
// }
// console.log("whassup bro, more than 50");

/* if(2 == "2"){ // checks only values, not datatypes ==
    //console.log("executed")
}

if(2 === "2"){ // checks datatypes also === (typechecking, strict checking)
    //console.log("executed")
}
else{
    //console.log("nope");
}

if(2 !== 3){
    //console.log("executed")
}

const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); */

const balance = 1000
//if(balance > 500) console.log("test"), console.log("test2"); // can put comma and write

/* if(balance < 500) {
    console.log("less than 500")
} else if(balance < 750){
    console.log("less than 750")
} else if(balance < 900) {
    console.log("less than 900")
} else{
    console.log("less than 1200")
} */

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedin && debitCard) {
    console.log("Allow to buy courses.");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}
