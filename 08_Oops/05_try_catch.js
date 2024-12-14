let a = 10;
let b = 5;

console.log("a : ", a)
console.log("b : ", b)
console.log("a+b : ", a+b)
console.log("a-b : ", a-b)
//console.log("a+b : ", a+c) ---> 'c' is not defined in program so program will throws an error 
//    to prevent it we will use try-catch block    if error occur then next code will also not be execute
try {
    console.log("a+b : ", a+c);
} catch (error) {
    console.log(error);   //here will be print what is actual error
}

console.log("a+b : ", a+b)
console.log("a-b : ", a-b)
console.log("a*b : ", a*b)
console.log("a/b : ", a/b)