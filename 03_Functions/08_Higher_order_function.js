//when a function take another function as arguement or return another function then called it higher order function
function x(){
    console.log("Hello");
}

function y(x){     //here y is higher order function
    x();
}

y()