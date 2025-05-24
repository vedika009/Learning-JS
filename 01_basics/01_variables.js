const accountId = 144529
let accountEmail = "vedika@gmail.com"
var accountPswd = "12345"
accountCity = "Indore" 
let accountState; 

// accountId = 2 // not allowed

accountEmail = "medha@hc.com"
accountPswd = "89675"
accountCity = "delhi"

console.log(accountId)

console.table([accountId, accountEmail, accountPswd, accountCity, accountState])

/*
Prefer not to use var, because of issue in block scope and function scope
*/