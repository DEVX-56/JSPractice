console.log(2 > 1); //return boolean value       true
console.log(2 >= 1); //                           true
console.log(2 <= 1); //                           false

console.log("2" > 5); //here js automatically converts the srtring into Integer  [False]

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null < 0); //false
console.log(null <= 0); //true
console.log(null >= 0); //true

console.log(undefined >= 0); //false
console.log(undefined == 0); //false
console.log(undefined <= 0); //false

// Strict cheak (===), it's not only cheak the value but also cheak the data type
console.log("5" == 5); //true
console.log("5" === 5); //false [because, data types are different]
