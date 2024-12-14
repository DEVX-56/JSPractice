//You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.
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

let Student1 = new User("gama", "abc.xyz");
let Student2 = new User("alpha", "def.wxy");
let Student3 = new User('beta', "ghi.jkl");

console.log(Student1)
Student1.viewData()
console.log(Student1.name)
console.log(Student1.email)