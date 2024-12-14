const arr = [5, 1, 3, 2, 6];


//sum of elements
function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr))


const output = arr.reduce(function(acc, curr){        //here  (acc --> sum) & (curr --> arr[i])
    acc = acc + curr;
    return acc;
}, 0);   //here 0 is initial alue of accumulator

console.log(output)


//max value of the array
const max = arr.reduce(function(max, curr){
    if(curr>max){
        max = curr;
    }
    return max;
}, 0);

console.log(max)