function sayMyName() {
    console.log("V");
    console.log("E");
    console.log("D");
    console.log("I");
    console.log("K");
    console.log("A");
}
sayMyName() // prenthesis means executing it

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