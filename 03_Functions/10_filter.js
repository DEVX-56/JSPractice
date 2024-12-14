const arr = [5, 1, 3, 2, 6];

//filter odd values
function isOdd(element){
    return element%2;
}
const output = arr.filter(isOdd);
console.log(output)

//filter even values
function isEven(element){
    return (element%2 === 0);
}
const output1 = arr.filter(isEven);
console.log(output1)


//return grater than 4
function isGraterThan4(element){
    return element>4;
}

//another syntax
const output2 = arr.filter(function isGraterThan4(element){
    return element>4;
});
console.log(output2)

//using arrow function
const output3 = arr.filter((element) => element>4);
console.log(output3)