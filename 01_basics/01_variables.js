const accountId = 144553
let accountEmail = "aishwaryapatil845@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


accountEmail = "aish@p.com"
accountPassword = "21212121"
accountCity = "Begaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountCity, accountState])