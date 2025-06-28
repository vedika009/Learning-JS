// closures are part of "scopes"

let a = 300
{ // this is a scope
    let a = 10 
    const b = 20
    var c = 30
    console.log("Inner: ", a)
}

console.log(a) // not defined
// console.log(b) //same
//console.log(c) // avoid varm scope ke bahar nahi jaana chaiye koi bhi value

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}