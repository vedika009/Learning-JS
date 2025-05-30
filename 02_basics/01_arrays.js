// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0])

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


myArr.unshift(9) // inserts at the first
myArr.shift() // deletes from first

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3)); // if doesn't exist, it returns -1

const newArr = myArr.join() // converts to string

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice 
console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // slice - doesn't affect original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // splice - manipulates original array
console.log(myn2);
console.log("C", myArr);

// splice krne se array change ho jaati h, jitna splice kiya h vo nikal jaata h 