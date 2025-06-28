function sayMyName() {
    console.log("V");
    console.log("E");
    console.log("D");
    console.log("I");
    console.log("K");
    console.log("A");
}
//sayMyName() // prenthesis means executing it

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Vedika"){ // default parameter, if nothing, then this will execute
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vedika"))
// console.log(loginUserMessage("Vedika"))

function addCartPrice(...num1){// ... - rest (and spread operator) return type - array
    return num1
}

function addCartPrice1(val1, val2, ...num1){// ... - rest (and spread operator) return type - array
    //return num1
    return val2
}

//console.log(addCartPrice(200, 100, 500, 2000));
//console.log(addCartPrice1(200, 100, 500, 2000)); // first 2 values went in val1 and val2

const user = {
    username: "Vedika",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user) // if it's wrong then it will print "undefined"

// object bana ke bhi pass kr skte h, function call krte time
handleObject(
    user1 = {
        username: "Vedika",
        price: "CSE"
    }
)

// passing arrays
const myNewArr = [200, 78, 45, 34]

function return2ndVal(anyArr){
    return anyArr[1]
}

//console.log(return2ndVal(myNewArr))
console.log(return2ndVal([45, 54, 34, 89]))