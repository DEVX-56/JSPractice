const email = "rp@mail.ai"  // execute based on Truthy and falsy values
if(email){     //if email exists it will be executed (Don't check any condition)
    console.log("Got the user email")
}else{
    console.log("User not found")
}


/* 
                Truthy
[](empty array), {}(empty object), Integer, "0",  -42, "false" (false in a string), " ", fraction, function(){} --> empty function


------>    https://developer.mozilla.org/en-US/docs/Glossary/Truthy



                    Falsy
false, 0, (-0), BigInt 0n, ""(empty string), null, undefined, NaN(Not a Number)

---->  https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

///    How to cheak datatype is array or not
const userEmail = "rp@mail.ai"
if (userEmail.length === 0) {
console.log("Array is empty");
}

//Object checking
const obj = {}
if(Object.keys(obj).length === 0){    //object.keys() ---> return a array of (keys)
    console.log("Object is empty");
}