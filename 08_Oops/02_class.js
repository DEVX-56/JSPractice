//creating a class car

class Car{
    start() {                     // start function
        console.log('starting car.....');
    }

    stop() {                    // stop function
        console.log('Engine stop.......'); 
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

//creating object

let toyota = new Car();

toyota.start()
toyota.stop()

toyota.setBrand("fortuner")
console.log(toyota.brandName)