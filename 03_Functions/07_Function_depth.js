                                            //call back function in JS
function x(y){
    console.log("Print X");
    y();
}
x(function y(){     //if we pass a function inside another function that is call-back function
    console.log("Print y");
})

//here y() is call back function

//    setTimeout always takes call back function
setTimeout(function(){
    console.log("Learning JS");
}, 5000)