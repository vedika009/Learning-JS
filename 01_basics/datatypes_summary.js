// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (non-primitive)

// Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) // false

const bigNumber = 468649n //put n for bigint

// console.log(typeof bigNumber)

const heros = ["ironman", "spiderman", "black widow"]

let myObj = {
    name: "vedika",
    age: 45,
}

const myFunc = function (){
    console.log("hello world!")
} // treating function like a variable

// console.log(typeof heros)
// console.log(typeof id)

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*

Type of val	Result
Undefined  -	"undefined"
Null  -	    "object"
Boolean	-   "boolean"
Number -	"number"
String -	"string"
Object (native and does not implement [[Call]]) -	"object"
Object (native or host and does implement [[Call]]) -	"function"
Object (host and does not implement [[Call]]) -	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

*/

// ++++++++++++++++++++++++++++++++
// stack (primitive) - variable ka copy , 
// Heap (non-primitive) - refrrence (original)

let myName = "Vedika"
let name1 = myName

name1 = "Mishra"

console.log(name1)
console.log(myName);

let user1 = {
    email: "user@gmail.com",
    user: "user@ybl"
}

let user2 = user1

user2.email = "vedika@gmail.com"

console.log(user1.email);
console.log(user2.email)
