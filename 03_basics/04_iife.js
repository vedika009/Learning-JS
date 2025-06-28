// Immediately Invoked Function Expressions (IIFE)
/* 
- for maybe a database connection, to be invoked immediately
- for not letting global variables disturb anything - nnot to pollute anything
- immediately execute
 */

// function chai() {
//     console.log("DB connected")
// }

// chai() // - to invoke

// immediately invoke - put parenthesis around function 

(function chai() { 
    // named IIFE
    console.log(`DB connected`)
})(); //this is for invoking immediately 
 
// (doesn't know where context ended, so add a semi-colon)

// ()() - definition and execution

// arrow function - here, we are passing arguments also
( (name) => {
    console.log(`DB Connected 2 ${name}`);
} )(`Vedika`)