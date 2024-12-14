//in JS we can use ("") or ('') to write string

//assign a string
let myname = 'Rohan';
let title = "Pramanik";

//printing String
//console.log(name+" "+title);  ---> older method [string concatination]
console.log(`My name is ${myname} and title is ${title}`)   //modern way  ---> called [string interpolation]

//assign a string
let gameName = new String('Miles-Morals');  //allocating like an object

/// String Operations
//console.log(gameName);
console.log(`4 th string is : ${myname[3]}`);  //printing 6th string
console.log(gameName.charAt(2));    //2nd character
console.log(gameName.indexOf("i"));    //return the index of siven character at 1st occurance
console.log(gameName.length);    //return length of string
console.log(gameName.toLowerCase());    //convert string to lower case
console.log(gameName.toUpperCase());    //convert string to upper case

// Sub-String
let newStr = gameName.substring(4, 9);  //last value will not be include
console.log(newStr);

// String Slice
const anotherStr = gameName.slice(-8, -1);    //here we can use(-ve) value to print from back side
console.log(anotherStr);

// String Trim 
let newString3 = "      rohan.         ";
console.log(newString3);    
console.log(newString3.trim());     //This will trim dows all unnecessary spaces

//replace character in String
let newString4 = "apple";
console.log(newString4.replace('p', 'g'));  //replace(what have to replace, with which character)  --> works only 1st occurance

console.log(newString4.includes("le"));  //return [true||false] based on given chacters are include in string or not?

console.log(gameName.split("-"));  //string will split based on where is (-) or we can split based on different thing like any character or space .etc.



