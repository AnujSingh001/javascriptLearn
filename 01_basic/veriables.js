const accountId = 12345678
let emailId = "anujbudhwar88@gmail.com"
var password = "12345"

acountName = "Anuj"
let accountState

emailId = "anujbudhwar8@gmail.com"
password = "54321"
acountName = "robin"
//accountId = 23 not allowed to change a const variable 

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,emailId,password,acountName,accountState])