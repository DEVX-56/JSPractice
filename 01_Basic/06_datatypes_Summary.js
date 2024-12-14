/*
A>    Premetive Datatype: These are call by value(copy from original data, if changes occur then no reflection will be on original data)
    This is 7 types ---->
    1.String 2.Boolean 3.Null 4.Number 5.Undefined 6.Symbol 7.BigInt   */

const score = 100;     //number
const totalscored = 100.5;   //number
const isLoggedIn = false;  //boolean
const outsideTemp = null;    //null
let userEmail;   //undefined
let usermail = undefined;   //undefined

//symbol used in front-end librearys(react etc.)
const id = Symbol('123')
const anotherId = Symbol('123')
//though i pass same value in both symbol, but their output will not be same
console.log(id === anotherId);    //false

const bigInt = 987284389874137463n; //To save this type of big number JS will use bigInt (n --> represent bigInt)



/*
B>    Reference Type(Non-Premitive): in memory we get direct reference of these data
    1.Array 2.Objects 3.Functions


***     JavaScript is a dynamically typed language. This means that the data type of a variable is determined by the value that is assigned to it, and can change throughout the program as different values are assigned.
*/

const heros = ["shaktiman", "Hanuman", "Doga", "Nagraj", "Parmanu"];  //array

let myObj = {    //objects
    name: "Rohan",
    age: 10,
}

//in JS we can declare function as variable
const myFunction = function(){
    console.log("Hello World");
}


//All non-premitive data return object  (function object)

console.log(typeof myObj);    //  printing type of (myObj)      ---------->   Object
console.log(typeof myFunction);    //  printing type of (myFunction)   -------> Function
console.log(typeof bigInt);    //  printing type of (bigInt)   -------> bigint
console.log(typeof outsideTemp);    //  printing type of (bigInt)   -------> object

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//https://262.ecma-international.org/5.1/#sec-11.4.3 study Material