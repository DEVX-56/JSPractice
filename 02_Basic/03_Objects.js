//singleton (while create with constructor)
//Object.create

const sym = Symbol("key1");  //declare a symbol


//objects Literals      (Object Declareation)
const user = {    
    name: "rohan",      //we have to define key & value
    "full_name": "Rohan Pramanik", //for this type of object key , we can't access using (user.full_name) we have to use (user["full_name"])
    age: 16,
    location: "Kolkata",
    email: "rp@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Tuesday"],
    [sym]: "this is symbol",    //this way we define a symbol inside a object
}

//in JS the keys are stored in form of String

//How to access object
console.log(user.name);
console.log(user.email);
console.log(user["email"]);     //This name is stored as a String
console.log(user["full_name"]);    //don't use (.) method
console.log(user[sym]);          //this way we print the symbol

//over write a object value
user.email = "rp@email.com";    //value has been overwritte
console.log(user.email);
/*
Object.freeze(user);  //object has been freezed, we can't chage it's value
user.age = 55;        //this will not reflect any thing
console.log(user.age)   //----> o/p will 16 as define earlier
console.log(user);
*/

//////////////////////////////////          FUNCTION        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
user.greeting1 = function(){
    console.log("Hello JS user");
}
user.greeting2 = function(){
    console.log(`Hola JS user, ${this.name}`);    //when we reference same object then user (this)
}

user.greeting1();
user.greeting2();