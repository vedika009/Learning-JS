//const tinderUser = new Object() //- non singleton object
 const tinderUser = {} // - non singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Led"
 tinderUser.isLoggedIn = false
 
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vedika",
            lastname: "Mishra"
            // access values through dot notation only
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);
// question mark after an object/value means what if it doesn't exist?, so instead of if-else it's used - called optional chaining

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj4 = { 5: "a", 6: "b"}

//const obj3 = { obj1, obj2} // this will put object in object (like array in array)
//console.log(obj3)

// const obj3 = Object.assign(obj1, obj2) // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({}, obj1, obj2, obj4) // empty curly brackets - taking a new object
 
const obj3 = {...obj1, ...obj2} //spread operator (similar to array concept)
//console.log(obj3) 

//Array of objects
const users = [
    {
        id: 1,
        email: "vedika@google.com",
    },
    {
        id: 1,
        email: "vedika@google.com",
    },
    {
        id: 1,
        email: "vedika@google.com",
    },
    {
        id: 1,
        email: "vedika@google.com",
    }    
]

//console.log(users[1].email) // can access array element through index, then dot operator

//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); // datatype of keys is Array
//console.log(Object.values(tinderUser)); // array
//console.log(Object.entries(tinderUser)); // key-value pair is array, inside a big array

// check if property exists
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring
const course = {
    name: "CS English",
    price: "999",
    courseInstructor: "hitesh",
}

//course.courseInstructor

//const {courseInstructor} = course // now we can directly use, instead of repeating dot operator
// can give custom name too
const {courseInstructor: instr} = course

//console.log(courseInstructor);
console.log(instr);

//________________________________________________________________________
// jab bhi culy braces aaye, smjh jaana destructuring huyi h
// for REACT 
// const navbar = ({company}) => {
// }
// navbar(company = "hitesh")
//________________________________________________________________________


// API and .json format
// {
//     "name": "Vedika", // key and value both are strings
//     "branch": "CSE",
//     "price": "free"
// }


// array format APIs
[
    {},
    {},
    {}
]
// object ko json format mein bhejna hota h