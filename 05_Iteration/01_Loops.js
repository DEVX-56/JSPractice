////                                              Break and Continue Keyword

for(let i=1;i<=20;i++){
    if(i == 5){
        console.log(`Detected : ${i}`);
        break;   // This will break the loop, when if condition satisfies
    }
    console.log(i);
    
}


for(let i=1;i<=20;i++){
    if(i == 5){
        console.log(`Dertected : ${i}`);
       continue;   // This will skip the iteration if condition satisfies
    }
    console.log(i);
    
}


//                                                      For-Loops

/*                      Syntax              
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/


for(let i=1;i<=10;i++){
    if(i == 5){
        console.log(`${i} is the best number`);
    }
    console.log(i);
}

for(let i=1;i<=10;i++){
    console.log(`Outer-loop values are ${i}`);
    for (let j=1;j<=10;j++) {
        console.log(`Inner-loop values are ${j}`);   // for every outer loop iner-loop will be printed
    }
}



//                                      While-loop

/*              Syntax
while (condition) {    
    
}*/


let i = 1;
while (i<=10) {
    console.log("value : "+ i);
    i = i+3;
}

let arr = [5, 8, 3, 10, 47, 88, 35];
let j = 0;
while (j<arr.length) {
    console.log(`${j} th element of the array : ${arr[j]} `);
    j = j+1;
}



//                                  Do While loop

/*                     Syntax
do {
    
} while (condition);
*/



let k=1;
do {
    console.log(k);
    k++;
} while (k<=10);


//May be the condition unsatisfied but the (do-while) loop will run minimum 1 time
let score=11;
do {
    console.log(score);
    score++;
} while (score<=10);   //condition unsatisfied