//////////////////////////////////      DATE        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 1st Format
let myDate = new Date();  //creating date object

//  Date Operations

console.log(myDate)                         //return date and time in an unusual format

console.log(myDate.toString())          //return date time less complex format

console.log(myDate.toJSON())                  //return date and time in an unusual format

console.log(myDate.toISOString())   //return date and time in an unusual format
console.log(myDate.toDateString())      //return date, day not time
console.log(typeof myDate);        //----> My date is an object

//2nd Format
let newDate = new Date(2024, 0, 26);   //months starts with '0'
//let newDate = new Date("2024-01-22");   // [YY:MM:DD] format
console.log(newDate.toDateString());

//3rd Format
let anotherDate = new Date(2024, 0, 25, 10, 5);   //last 2 denotes time [HH:MM:SS]
console.log(anotherDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //return a mili-second value from (1st Jan 1970) to till date [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date]   these values are used to compare dates

//we can fetch Date, time, Months separately
let ddaattee = new Date();
console.log(ddaattee);
console.log(ddaattee.getDate());
console.log(ddaattee.getDay());
console.log(ddaattee.getMonth());
console.log(ddaattee.getFullYear());

console.log(`Today is ${ddaattee.getDate()}-${ddaattee.getMonth()}-${ddaattee.getFullYear()} and the time is ${ddaattee.getHours()}:${ddaattee.getMinutes()}:${ddaattee.getSeconds()}`)

newDate.toLocaleString('default',{      //we need the date in deafult format
    weekday: "long"   //here we can also customize the formats 
    
})


console.log("Rohan")

let val = 5
console.log(`The value is : ${5}`)



console.log(`Today is ${ddaattee.getDate()} and the time is ${ddaattee.getHours()}:${ddaattee.getMinutes()}:${ddaattee.getSeconds()}`)