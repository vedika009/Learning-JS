const userEmail = []

if (userEmail) {
    //console.log("Got user email!");
} else {
    console.log("Don't have user email!");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, NaN

// truthy values (everything escept falsy)

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty")
}

// Nullish Coalescing Operator (??)

let val1;
//val1 = 5 ?? 4
// console.log(val1); // 5
// val1 = null ?? 10 
// console.log(val1) // 10 (safety check for null)
// val1 = undefined ?? 15
// console.log(val1) // 15
val1 = null ?? 10 ?? 15 
console.log(val1); // first value found, will be assigned

//------------------ TERNARY OPERATOR --------------------------------------------
 // condition ? True : False

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("yay, more than 80") : console.log("nope, less than 80")