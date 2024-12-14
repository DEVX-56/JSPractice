//Syntacx of a function
function greet(){
    console.log("h"),
    console.log("e"),
    console.log("l"),
    console.log("l"),
    console.log("o"),
    console.log("w"),
    console.log("o"),
    console.log("r"),
    console.log("l"),
    console.log("d")
}

//greeet  ---> function reference
//greeet();  ---> function execution


//sum of two numbers
function sum(num1, num2){        //in JS no need to declare type of JS 
    console.log(num1 + num2);
    
}

sum(5, 4);      // op - 9
sum(3, "4");    // op - 34 JS declare both as string
sum(3, "a");    // op - 3a Jto avoid this type of error we should cheak the datatype before pass on the function


function sum2(num1, num2, num3){ 
    return (num1 + num2 + num3);   
    console.log("Hello");   //this will not work because after returning value, code will not execute 
}

//const result = sum2(5, 9, 4);
console.log("result:", sum2(5, 9, 4))


function loginUserMessage(userName){
    return (`${userName} just logged in`)
}

console.log(loginUserMessage("rohan"))   //here if we ddon't pass any string then it will show undefine not null
console.log(loginUserMessage())   //o/p --> undefined just logged in (to avoid this we use (if else) statement)


function userMessage(userName){
    if(!userName){     //   if(userName === undefined)
        console.log("Please, enter valid user name");
        return;
    }
    return (`You just logged in ${userName}`);      //this will print for valid useName
} 
console.log(userMessage("Miles"));
console.log(userMessage());



function Message(userName = "Someone"){    //this is default value for userName (If username is not define then, (default name) will be printed)
    if(!userName){     //   if(userName === undefined)
        console.log(`alert, just logged in ${userName}`);
        return;
    }
    return (`alert, just logged in ${userName}`);
}
console.log(Message("Miles"));
console.log(Message());

//for a shopping website cart there will be added multiple items, so keep in mide there should take multiple numbers of parameters
function claculateCartPrice1(...nums){
    return nums
}
//(...) --> This is called rest operator, it used to bundle the elements
console.log(claculateCartPrice1(500, 648, 250))  //using loop we can return total value of it


function claculateCartPrice2(val1, val2, ...nums){
    return nums
}
console.log(claculateCartPrice2(500, 250, 682, 980))  //1st 2values occupied by val1 and val2 soothers number will be added into array
