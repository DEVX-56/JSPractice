//Create a new class called Admin which inherits from User. Add a new method called edit Data to Admin that allows it to edit website data.

let Data = 'Secret Information';

class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log('data : ', Data);
    }
}

class Admin extends User {

    constructor(name, email){
        super(name, email);   //parent class constructor will be called
    }

    editData(){
        Data = 'some new information';
    }
}


let admin1 = new Admin("admin", "admin@collage.com");
console.log(admin1.name)
console.log(admin1.email)


admin1.editData()     // calling change data function
console.log(Data)        //admin1 can change data