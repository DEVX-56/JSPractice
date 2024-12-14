 //Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the Ul. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

//there's a built-in function set-timeout, where we can set a function will execute how many time later

/*
//1st method
function hello(){
    console.log("Hello")
}
setTimeout(hello, 3000)    // function will execute after 3 seconds      here (hello) is a callback function             */


console.log("one")
console.log("two")

//2nd method
setTimeout(()=>{
    console.log("Hello")

}, 4000);    // function will execute after 4 seconds

console.log("three")   //this will execute before 'hello' execute
console.log("four")   //this will execute before 'hello' execute


//callback function is a type of function, which is pass inside another function as an arguement

function sum(a, b){
    console.log(a+b)
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(5, 7, sum);  //here sum is act like a callback function