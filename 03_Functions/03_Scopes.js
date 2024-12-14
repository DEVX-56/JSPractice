//{}   ----> Defines scope of that program, function, condition

var c = 500    //global scope {accessible everywhere}

if(true){          //block scope or, local scope {accessible inside the block}
    let a = 10
    const b = 50
    var c = 80    //if we don't user any datatype thealso it will behave as (var)
}

//console.log(a)  we can't print a because a is in local scope
//console.log(b)  we can't print a because a is in local scope
console.log(c)  // "c" can be printed, and which "c" is in last position syntactically that wll be printted here [That's reason why we always avoid (var)]


/*In browser when we check there global scope is different, but when we check it in code environment there will be different*/

function one(){
    const username = "Rohan";

    function two(){
        const website = "YouTube";
        console.log(username);
    }
 //   console.log(website);    un-accessible due to local scope
    two();
}
one();

/***************************        In JS Variables can hold anything          **************************** */

console.log(addOne(5))  //if we print value before declaration of the function it's possible
function addOne(num){
    return (num+1)
}

//console.log(addTwo(10))  --> but if we define a fcn. like expression then it can't be define before fcn. declaration
const addTwo = function(num){
    return (num+2)
}
console.log(addTwo(10)) 
  