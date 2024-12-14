/////////////////////////////////////////////////////     NUMBERS      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const score = 400      //automatically detect the type Number
console.log(score)
console.log(typeof score)

//////////////////////////////  Different operations of Numbers       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const balance = new Number(500.66)  //specially, we define it as number
console.log(balance)
console.log(balance.toFixed(1))     //this will round of the value with in given number (E-commerece application)
console.log(balance.toString())   //it type cast into string
console.log(balance.toString().length)   //though it type cast into string, now we can measure length

let otherNum = 463.68498713;
console.log(otherNum.toPrecision(5))  //we get presize value upto given number

let hun = 100000;
console.log(hun.toLocaleString());  //return in simplefied form using (,)   default form
console.log(hun.toLocaleString('en-IN'));  //return in simplefied indian form

/////////////////////////////////////////           MATH        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log(Math)  //{includes many operations}
console.log(Math.abs(-4));     //return absolute value
console.log(Math.round(4.49));     //return round-off value
console.log(Math.ceil(4.49));     //return ceiling value  {if given number is > then previous integer, then it will return next integer}
console.log(Math.floor(4.999));     //return floor value  {if given number is < then previous intege,r then it will return previous integer}
console.log(Math.min(5, 9, 3, 7, 0.1, 215));     //return min-value from array
console.log(Math.max(5, 9, 3, 7, 0.1, 215));     //return max-value from array
console.log(Math.random());     //return random value between [0 - 1]
console.log(Math.random()*10);     //though we multiply it with 10.....Now it will return value from (0 - 10)
console.log(Math.random()*10+1);     //though we multiply it with 10.....Now it will return value from (1 - 10)

console.log(Math.round(Math.random()*10)+1);     //though we multiply it with 10.....Now it will return value from (1 - 10) with out any floating value
 
//now we will do same last concept in another way, let i need value from (10-20)
let min = 10;
let max = 20;

console.log(Math.round(Math.random()*(max-min+1))+min)         //+1 to avoid 0