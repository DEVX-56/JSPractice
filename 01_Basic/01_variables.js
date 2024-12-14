const accountID = 58934    //This is constant variable, we can't change value 
let account = "rohan@yahoo.com"
var password = "321456"  //preffered not to use var because of block scope and functional scope
accountCity = "Bombay"    //not recommended   (But, we can create variable like python with-out specifying it's type)
let accountState;  //undefined


//UPDATING
//accountID = 5    -----> not allowed
account = "rp@rp.com"
password = "8888"
accountCity = "Calcutta"

//PRINTING
/*console.log(accountID);
console.log(account);
console.log(accountCity);
console.log(password);*/

console.table([accountID, accountCity, account, password, accountState])       //we can also print all togeather


/* In JS (;) is not important */