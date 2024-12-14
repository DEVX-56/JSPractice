const marvelHeros = ["hulk", "thor", "spider-man"];
const dcHeros = ["super-man", "bat-man", "flash"];

/*                         IMPORTANT CONCEPT

marvelHeros.push(dcHeros)   //here second arrray will be entered as single array
console.log(marvelHeros) 
console.log(marvelHeros[3]) //beacuse here 3rd element itself a array
/if we w ant to get data from 2nd array
console.log(marvelHeros[3][1])  //array inside another array  
*/

//                                           Concatination
const superHero = marvelHeros.concat(dcHeros);     //merge two or more arrays and return new array
console.log(superHero);   

//                                          Spread (This also merge arrays)
const allHero = [...marvelHeros, ...dcHeros];       //**** here the given (...) are important there are part of syntax
console.log(allHero); 

//                                          Flat (flat the dimention of the array)
const arr1  = [1, 2, 3, [4, 5], 6, 7, [8, 9, [4, 5]]];
const arr2  = arr1.flat(Infinity);     //here we can mention the dimention (ex...1, 2...Infinite) or we can also write [flat().flat().flat()]
console.log(arr2)

//                                 Cheak array or Not
console.log(Array.isArray("Rohan"));   //return true or false based on given data is array or not

//                                  Convert into Array
console.log(Array.from("Rohan"));  //form a array using give data   
//if any case array can't be form then it return []--> empty array

console.log(Array.from({name: "Rohan"}));  //for this case it will return empty array

let score1 = 100;
let score2 = 300;
let score3 = 500;
console.log(Array.of(score1, score2, score3));  //gererate array using set of elememt
