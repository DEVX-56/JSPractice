a();      //we can call a() here

//b();   //we can't call b() here

//function statement  or function declaration
function a(){
    console.log("a called...")
}

//function expression
var b = function (){
    console.log("b called...")
}

//anonymus function (used where functions are used as values)
let x = function(){   //with-out any name

}

//name function expression
var y = function xz(){           ///with name
    console.log("xz called...")
}
y()    //have to call like this
//xz();     can't call like this  

//parameter and arguement
/*  
function x(parameter1, parameter2){      //when we craete the function use parameter

}
x(arguement1, arguement2)    //when we call the function then used arguement as passing values

*/ 

//first calss functions or first class citizens  [ability to use a functionas parameter of another function alos ability to use like values]
var k = function(para1){
    console.log(para1)
}

function xyz(){

}

k(xyz)















// link --   https://www.youtube.com/watch?v=SHINoHxvTso&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=16&t=27s