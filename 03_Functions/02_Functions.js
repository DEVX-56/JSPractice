//object inside a function
const user = {
    userName: "Rohan",
    userID: 148,
}

function handleUserObject(anyObject){   //here we use (anyObject) name but also can use (user) or any other name
    console.log(`user name is ${anyObject.userName} and ID is ${anyObject.userID}`);
}

handleUserObject(user);  //here we have to pass object name(user)  **it's compulsory
handleUserObject({      //we can also direct pass objects
    userName:"sam",
    userID:149,
})

//pass array inside function
const arr = [100, 364, 890, 750, 55]
function secondValue(arr){
    return arr[1]
}

console.log(secondValue(arr))
console.log(secondValue([589, 100, 147, 753]))  //directly pass array 