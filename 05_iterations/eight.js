// reduce method

// at first, initial value goes into accumulator
// next, the sum goes into accumulator

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)

// arrow function

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval    
// }, 4 )

const myTotal = myNums.reduce( (acc, currval) => acc + currval , 4)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 5999 
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 12999
    },
]

// add all the prices in the shopping cart

const totalPrice = shoppingCart.reduce( (acc, currval) => {
    return acc + currval.price
}, 0 ) // 0 is the default value, jo value pehle thi total price mein
   
console.log(totalPrice)