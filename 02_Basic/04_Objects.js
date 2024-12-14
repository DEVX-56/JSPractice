//const xUser = new Object ()  //it's a singleton object
const xUser = {}      //bothway we can declare a object
xUser.name = "X Æ A-Xii";
xUser.id = "123ABX";
xUser.isloggedIn = true;
xUser.city = "Sydney";
console.log(xUser)

// object inside another  object
const fbUser = {
    email: "somae-one@email.com",
    //fullname will be another object
    fullname: {
        //userfullame will be another object
        userfullname: {
            firstName: "Rohan",
            lastName: "Pramanik",
        }
    }
}

console.log(fbUser.fullname.userfullname.firstName)
console.log(fbUser)    //it will return the full object

/*
Optional Chaining ----> The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. later in project discusss briefly 
console.log(fbUser.fullname?.userfullname.firstName)    
*/ 

//object merge
let obj1 = {     //object - 1
    1: "a",
    2: "b",
    3: "c"
}
let obj2 = { 4: "d", 5: "e", 6: "f" }  //object - 2
let obj3 = Object.assign(obj1, obj2);
let obj4 = Object.assign({}, obj1, obj2);    //{} ---> it's a optional parameter if we don't use it o/p remains same 
let obj5 = { ...obj1, ...obj2 }   //also use this same as array
console.log(obj3);
console.log(obj4);
console.log(obj5)

////////////////////////            IMPORTANT           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log(xUser)
console.log(Object.keys(xUser))   //it will retrun a array, which include all the keys of (xUser) object
console.log(Object.values(xUser))  //it will retrun a array, which include all the values of (xUser) object
console.log(Object.entries(xUser))  //it will retrun arrays inside a array, which include all the key & value pair  of (xUser) object 
console.log(xUser.hasOwnProperty('name'))     //we can chek any property exist in object or not (return boolean)
console.log(xUser.hasOwnProperty('roll'))     //we can chek any property exist in object or not