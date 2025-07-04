// for each loop
const coding = ["js", "ruby", "python", "java", "cpp"]

// 1. just define a function in parenthesis of forEach
// 2. callback function, so don't give name to function
// 3. give a parameter, a name for variable iterating in the array

coding.forEach( function (item) {
    // console.log(item);
} )

// arrow functions

coding.forEach( (val) => {
    // console.log(val)
} )

function printMe(item) {
    console.log(item)
}

// pass the above function in forEach

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => { // 3 parameters of forEach loop
    console.log(item, index, arr)
} )

// objects in array
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: ".js",
    },
    {
        languageName: "Python",
        languageFileName: ".py",
    },
    {
        languageName: "Java",
        languageFileName: ".java",
    }
]

myCoding.forEach( (item) => {
    // console.log(item) // will print everything
} )

myCoding.forEach( (item) => {
    console.log(item.languageName)
})

myCoding.forEach( (item) => {
    console.log(item.languageFileName) 
})