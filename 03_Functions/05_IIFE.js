// IIFE --> Immediately Invoked Function Expression
/*function DB(){
    console.log(`DataBase Connected`)
}
DB()  --> where we do a extra step using () we  execute the fun...*/

(function DB(){         //Named IIFE
    console.log(`DataBase Connected`)
})();   //using () end of the fcn. we directly execute the fcn
//use this method to protect the fcn. from global scope pollution

/*
syntax
(fcn. Defination)(execution)
*/

//Arrow fcn with out any name
((name) =>{       //IIFE with out any name
    console.log(`The name is ${name}`)
})("Rohan");