///////////////////////////////////         IF-ELSE     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if(2 == '2'){  // JS automatcally typecast the datatypes, so (==) just verify the value
    console.log("Executed");
}else{
    console.log("Not Executed");
}

const value = 1000
if(value < 500){
    console.log("Low Balance");
}
else if(value < 750){
    console.log("Need More");
}
else{
    console.log("You ac enter");
}

///////////////////////////////////         SWITCH     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
                        Syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}   
*/
const month = 3
switch (month) {
    case 1:  //here 1 is value of month
        console.log("January")
        break;   //breaks the control flow except default*********
    case 2:
        console.log("February")
        break;
    case 3:       ///----------> OUTPUT
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;

    default:
        console.log("Not found")
        break;
}