class Parent{        //parent class

    constructor(){
        this.species = 'homo-sapience'; 
    }

    hello(){
        console.log("Hello, it's parent");
    }

    eat(){
        console.log("vageterian");
    }
}

class Child extends Parent{       //child class inherits parent class

    constructor(age){
        super();          //way to invoke parent class constructor
        this.age = age;
    }

    eat(){
        console.log("non-veg");
    }
}   

let p1 = new Parent();    //parent object
let c1 = new Child();  //creating object of child class element

p1.eat()        //eat method from parent
c1.hello()    //accessing parent class method using child class object
c1.eat()    //it will execute it's own eat method

console.log(p1.species)
console.log(c1.species)


//in child class if i want to call parent constructor then write [super.constructor_name()]