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
