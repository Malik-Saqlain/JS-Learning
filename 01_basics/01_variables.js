const accountId = 144553
let accountEmail = "saqlain@google.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ms@ms.com"
accountPassword = "121212"
accountCity ="Islamabad"

console.log(accountId);

/*
 prefer not to use var, bcause of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
