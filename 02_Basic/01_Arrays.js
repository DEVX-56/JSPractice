///////////////////////////////////////         ARRAY           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const array = [1, 5, 8, 9, true, "hello"];  //in JS array can contains different types of Data and aso array is resizeable

//Another way to define aarray
const arr1 = new Array(1, 5, 7, 9);   //no need any []

//Array Operations
arr1.push(6);                //  insert element into array*/Z
arr1.push(11);        
arr1.pop();                //    pop simply remove the last element from the array
arr1.unshift(50);         //   unshift add element into beginning of the array
arr1.shift();           //    shift remove element from beginning of the array

console.log(arr1);     //printing the array

//Array Methods
console.log(arr1.includes(5));  //return boolean based on the given data present in array or not
console.log(arr1.indexOf(7));  //return index of given value --->  if value not present then return (-1)

const arr2 = arr1.join();   //join new array along with older array
console.log(arr2);           //value of new array remain same but type will be string
console.log(typeof arr2);     ///string

//slice
console.log("Original Array : ", arr1);     //original array
const arr3 = arr1.slice(0, 2);     //return value from index (0-->2), not include last index
console.log("Slice array : ", arr3);

console.log("Original Array : ", arr1);      //No change in original array

//splice
const arr4 = arr1.splice(0, 2);     //remove value from index (0-->2), not include last index
console.log("Splice array : ",arr4);                //spliced elements
console.log("Original Array : ",arr1);           //original array












/*
1. In JS array copy opertaion create shallow copy [call by value]
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  ----> More about Array
3. here array indexing starts from 0

*/