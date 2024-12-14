/*
                                                //How memory works in JS\\


In JS there two types of Memory Stack & Heap

Stack --> Stack used in Premitive type Data [we get copy of the data]
Heap  --> Heap used in Non-premitive datatype [we get original value || reference]
*/

////////////////////////////////////WORKING OF STACK {Premitive Data}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let originalName = "miles morales";  //variable assign
let myName = originalName;        //this variable get the copy of original data   
originalName = "Rohan";            //original data update

console.log(originalName);   //This will print the updated data  
console.log(myName);         //Though, it's get copy not reference so, it will print original given data not updated data


////////////////////////////////////WORKING OF HEAP {Non-Premitive Data}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let user1 = {                          //Original Data
    email: "logan@deadpool.com",
    password: "logan123pool"
}

let user2 = user1     //this will get reference of user1
user2.email =  "dead@xmen.com";    //change in user2 it will also reflect in user1
   
console.log(user2.email);     
console.log(user1.email);
