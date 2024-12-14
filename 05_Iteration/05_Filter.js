const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => num > 4)           //call back arrow fcn
/*const newNums = myNums.filter((num) =>
{return num>4 ;       if we use{},  then we have to write return keyword
})           */


console.log(newNums);   //same task can be perform by (for-each) loop, but for-each loop can't return value

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History');  //return history genre books
userBooks = books.filter((bok) => {  //Though there same variable name (userBook) but output value will be overWritten
    return bok.publish >= 2000 && bok.genre === "Fiction";  //return [], because no book can satisfy this condition
})  // here we write "return" keyword because here we opened a scope but in previous function we have not write ant return keyword
console.log(userBooks);  //value will be over written


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


const users = [
    {firstName: "Rohan", lastName: "Pramanik", age:22},
    {firstName: "Amal", lastName: "Nath", age:69},
    {firstName: "Venkatesh", lastName: "Reddy", age:22},
    {firstName: "Arjun", lastName: "Iyer", age:25},
];

const output4 = users.filter((x)=>x.age<23).map((x)=> x.firstName);  //we can cahin these methods [map, filter, reduce]

console.log(output4);