//creating a class car

class Car{

    constructor(brand, mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {                     // start function
        console.log('starting car.....');
    }

    stop() {                    // stop function
        console.log('Engine stop.......'); 
    }
}

//creating object

let toyota = new Car("lexus", 10);

toyota.start()
toyota.stop()

console.log(toyota.brand)
console.log(toyota.mileage)

//in JS constructor made by [constructor] keyword