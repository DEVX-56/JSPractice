///////////////////////////////Code readability should be high///////////////////////////////////

"use strict"; //treat all JS code as newer version of Java Script
//alert(3+3)   ---> can't run here, coz we are using node-JS not browser, browser treat all things as document
console.log(3 + 3);

//Data Types
let name = "Rohan"; //string("")
let age = 18; //Integer or floating value
let Logging_in = false; //boolean(true/false)
let state = null; //means we intentionally creating, it's not undefine it's empty
//null  ---> a stand-alone value (it's a representaion of empty value)    it's a object || means empty, not zero neither empty string
//undefines ----> when i define variable but didn't define value
//symbol ---> when we want to create uniqueness

//object

console.log(typeof "Rohan"); ///----> it will return the datatype
console.log(typeof null); ///----> object
console.log(typeof undefined); ///----> undefined

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(typeof a);  //number
/*
console.log(b);   //This is not accessable out of scope
console.log(c);  //This also is not accessable out of scope*/
