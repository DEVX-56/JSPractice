//                                               High order loops traverse through Array

/* ["", "", ""]    ----> Aarray of Strings
   [{}, {}, {}]   -----> Array of Objects   
*/

//                      For of loop

/*      Syntax
for (const iterator of object) {
    
}*/

const arr1 = [4, 3, 8, 6, 4, 7, 2, 10];
for (const i of arr1) {    //it will automatic detect when loop will be terminatd
    //console.log(i);
}

let string = "Hello World"    // This loop also works on String
for (const s of string) {
    console.log(`The charecter is : ${s}`);
}


//                  Maps

const m = new Map();        //Map contains (key, value) pair    ---||--->   Key should be unique
m.set("IN", "INDIA");
m.set("US", "USA");
m.set("UAE", "ARAB");
m.set("FR", "FRANCE");

//console.log(m);      //  for of loop in map (map directly uniteratible)

for (const [key, value] of m) {       // with [key, value] this, array will be destructure
    console.log(key, "-->", value);
}


/*          for-of loop does not work in object here needs for-in  

const obj = {       //  for-of loop in object
    game1: "NFS",
    game2: "Assasin Creed",
    game3: "God of War",
}

for (const [key, value] of obj) {   
    console.log(i)
}*/