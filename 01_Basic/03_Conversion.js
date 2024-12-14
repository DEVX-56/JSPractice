let score = "33abc";
console.log(typeof score); // ----> string

//convert the type of the score into number
let value = Number(score);
console.log(value);
console.log(typeof value); ///-----> number

/**************************************************IMPORTANT*****************************************************


let scre = "33abc";  ---> if we convert this also changes into number but type will be (NaN)
console.log(typeof scre);   -----> number
console.log(scre);   -----> Nan     


(NaN) --> Not a Number

if we pass [null] it will be converted into 0
if we pass [undefined] it will be converted into NaN
if we pass [boolean value] it will be converted into 0/1 based on false or true

*/

let isLoggedIn = 1;
let loginStatus = Boolean(isLoggedIn);
console.log(loginStatus); //  return true
/*
1 => true    0 => false
"empty string" => false    "some value" => true
*/

let number = 55;
let string = String(number);
console.log(string); //return 55
console.log(typeof string); //string type
