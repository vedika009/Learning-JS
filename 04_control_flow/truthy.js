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
val1 = 5 ?? 4
console.log(val1);
