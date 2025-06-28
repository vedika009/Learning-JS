// closures are part of "scopes"

let a = 300
{ // this is a scope
    let a = 10 
    const b = 20
    var c = 30
    //console.log("Inner: ", a)
}

//console.log(a) // not defined
// console.log(b) //same
//console.log(c) // avoid varm scope ke bahar nahi jaana chaiye koi bhi value

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// nest scope
function one(){
    const username = "vedika"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); //error
    two()
}

//one()

if(true) {
    const username = "Vedika"
    if(username === "Vedika") {
        const website = " YouTube"
        //console.log(username + website)
    }
    //console.log(website) // error
}
 
//console.log(username) // error

// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++

//declaring before defining
console.log(addOne(6)) // no error

function addOne(num) {
    return num + 1
}

// addOne(6)

//_____________________HOISTING_______________________

//declaring before defining
//console.log(addTwo(9)) // error

const addTwo = function(num){ // an expression (kind of a fuction only, a bit different)
    return num + 1
}

// addTwo(9)