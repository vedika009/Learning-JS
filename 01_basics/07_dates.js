//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // it is an object

// let myCreatedDate = new Date(2025, 4, 29)
// let myCreatedDate = new Date(2025, 4, 29, 5, 3)
// let myCreatedDate = new Date("2025-05-29")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// timestamps
let myTimeStamp = Date.now() // miliseconds from 1st January 1970

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1); // starts from zero
// console.log(newDate.getDay());

// shortcut: ctrl + space
newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate);
