const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//const numAddTen = nums.map((num) => num+10)     // call back function without name
//const numAddTen = nums.map((num) => {return num+10})     // call back function without name

// Here we can perform chaining (menas we can preform multiple method)
const numAddTen = nums.map((num) => num*10).map((num) => num+1).filter((num) => num>=40);

console.log(numAddTen)      //map automatically return value


let arr = [5, 14, 32, 8, 12]


//double of the array  syntax(1)
function double_arr(element){    //this function double the element of the array
    return element*2;
}

const output= arr.map(double_arr)
console.log(output)


//binary of the array
function binary_arr(element){   
    return element.toString(2);
}

const output2= arr.map(binary_arr)
console.log(output2)

//we can also write the function insted of writing binary   syntax(2)
const output3= arr.map(function binary_arr(element){   //form of higher order function
    return element.toString(2);
})
console.log(output3)


//syntax(3)
const output4= arr.map((element) => element.toString(2));    // //form of higher order function   using arrow function
console.log(output4)


const users = [
    {firstName: "Rohan", lastName: "Pramanik", age:22},
    {firstName: "Amal", lastName: "Nath", age:69},
    {firstName: "Venkatesh", lastName: "Reddy", age:22},
    {firstName: "Arjun", lastName: "Iyer", age:25},
];

//we want a list of full name
//["Rohan Pramanik", "Amal Nath"..etc]

const output5 = users.map(x => x.firstName + x.lastName);
console.log(output5);