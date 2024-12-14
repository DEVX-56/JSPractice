async function hello(){
    console.log("Hello World");
}

hello()
//console.log(hello())   ----> here we can see hello function also returns a promise



function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);   //for sucess
        }, 3000)
    })
}


/*
async function getWeatherData(){
    await api();   //await api calling 1st time ---.  here after finishing 1st task then 2nd task will start executing
    await api();    //await api calling 2nd time
}

getWeatherData()
/*when we use async await then we have to use a function(getWeatherData), which is unnecessary, to resolve this issue



we use (IIFE : Immediately Invoked Function Expression)*/

//IIFE function   (no need to function call)
(async function () {         //without name
    await api();   //await api calling 1st time ---.  here after finishing 1st task then 2nd task will start executing
    await api();    //await api calling 2nd time
})();


//IIFE link  : https://developer.mozilla.org/en-US/docs/Glossary/IIFE

//example - 5
const promiseFive = new Promise((res, rej)=>{
    setTimeout(function () {
        //let error = true;    //means error is present in function
        let error = false; //means error is not-present in function
        if (!error) {
          res({ username: "JS", pass: "123" });
        } else {
          rej("Error: JS went wrong");
        }
      }, 1000);
})

async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);
}

consumePromiseFive()