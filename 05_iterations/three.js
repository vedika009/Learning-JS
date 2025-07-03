// for of (array specific loops)
 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) { // on arrays, strings ,maps  (NOT on objects)
    //console.log(num);
}

const greeting = "namaste india!"
for (const i of greeting) {
    //console.log(`Each char is ${i}`);
}

// Maps (unique values)

const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('fr', 'france')
console.log(map);

for (const key of map) { // whole map with keys and values
    console.log(key);
}

for(const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'romance': 'the Notebook',
    'thriller' : 'a quiet place',
    'action' : 'mission impossible',
    'gore': 'fresh'
}

// for (const [key, value] of myObject) { // error
//     console.log(key, ':-', value);
// }