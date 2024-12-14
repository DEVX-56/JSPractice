function asyncFunc1(){                          //asyncFunc-1 which take 4 sec to fetch data
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data-1");
            resolve("Success");
        }, 5000);
    })
}


function asyncFunc2(){                          //asyncFunc-2 which take 4 sec to fetch data
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data-2");
            resolve("Success");
        }, 5000);
    })
}

/* in this case function1 and function2 will execute togeather
console.log("Fetching Data-1....")

let promise1 = asyncFunc1();
promise1.then((result)=>{
    console.log(result);
})


console.log("Fetching Data-2....")

let promise2 = asyncFunc2();
promise2.then((result)=>{
    console.log(result);
})*/


//we can also write like this
console.log("Fetching Data-1....")  //fetching asyncFunc-1
let promise1 = asyncFunc1();
promise1.then((result)=>{
    //console.log(result);              //promise fullfilled   
    console.log('Fetching Data-2....');     //calling asyncfunc-2
    let promise2 = asyncFunc2();
    promise2.then((result)=>{
        //console.log(result);
    })
})


console.log("Fetching Data-1....")  //fetching asyncFunc-1
asyncFunc1().then((result)=>{
    //console.log(result);              //promise fullfilled   
    console.log('Fetching Data-2....');     //calling asyncfunc-2
    asyncFunc2().then((result)=>{
        //console.log(result);
    })
})