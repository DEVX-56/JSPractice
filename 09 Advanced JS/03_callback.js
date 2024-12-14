//if a function pass on another function as an arguement then called it callback function.

function sum(a, b){           //callback
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(1, 6, sum);    //dont pass with parenthesis   (1, 2, sum())---> wrong



//in position of sum we can also pass a full function

calculator(1, 6, (a,b)=>{
    console.log(a+b);
}) 