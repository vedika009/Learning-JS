//const tinderUser = new Object() //- non singleton object
 const tinderUser = {} // - non singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Led"
 tinderUser.isLoggedin = false
 
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

console.log(regularUser.fullname.userfullname.lastname);
// question mark after an object/value means what if it doesn't exist?, so instead of if-else it's used - called optional chaining

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

//const obj3 = { obj1, obj2} // this will put object in object
