let score = true // NaN - not a number (type of NaN is number only)

// console.log(typeof score)
// console.log(typeof(score))

let valueNumber = Number(score)
// console.log(typeof(valueNumber))
// console.log(valueNumber) 

// when it converts to number
// "33" - to number (33)
// null - 0
// 3abc - NaN (Not a Number)
// undefined - NaN
// true/false - 1/0
// string - NaN

let isLoggedin = 1
let booleanIsLoggedIn = Boolean(isLoggedin) 
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// when it converts to Boolean
// "" (empty string) - false
// 1/0 - true/false
// "vedika" (non-empty string) - true

let num = 33
let strNum = String(num)
// console.log(strNum)
// console.log(typeof strNum)

// console.log(2 + "1")
// console.log("1" + 2);
// console.log("1" + 2 + 2)
// console.log(2 + 2 + "1");

// console.log(+true); // to number - 1
// console.log(+""); // to numbe - 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1);

let gameCounter = 100
gameCounter++
console.log(gameCounter);
