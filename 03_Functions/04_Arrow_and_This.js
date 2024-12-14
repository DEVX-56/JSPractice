///////////////////////////////         This Keyword        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\        
const user = {
    name:"Rohan",
    price:999,
    welcomeMessage: function(){
        console.log(`Hello ${this.name} , welcome to website`);  //when we refers current context then we use (this) keyword
        //console.log(this);  //this print current context
    }
}
user.welcomeMessage()
user.name = "Raman";    //here we have changed the current context
user.welcomeMessage()

////////////////////////////        Arrow Function          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const one = function(){
    let username = "Rohan"
    let userID = 500
}
const two = () => {            //this is arrow function
    let username = "Rohan"
    let userID = 500
}

const add = (num1, num2) => {
    return (num1+num2);
}
console.log(add(5, 3))

const add2 = (num1, num2) => (num1+num2);   //called --> Implecit return (here we assume the fcn. will return the addition, so don't need to write return)
console.log(add(10, 78))

const obj = () => ({name: "Rohan"});   //whwn we return object then we have to wrap the object insight ({})
console.log(obj())