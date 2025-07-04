// for in loop
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) { // for objects, and more
    // console.log(key); // print keys

    // console.log(myObject[key]) // print values
}

for (const key in myObject) {
    // console.log(`${key} => ${myObject[key]}`) // key value pair
}

// for arrays? yes

const programming = ["js", "ruby", "python", "java"]

for (const key in programming) {
    // console.log(key) // will print index
    // console.log(programming[key]) // will print elements
}

// for maps? yes

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")

for (const key in map) {
    console.log(key) // nothing, because map is not iteratable
}