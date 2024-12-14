//creating a object
const student = {
    fullName : 'Rohan',
    marks: 90,
    printmarks: function(){
        console.log("Marks is = ", this.marks)     //this referes to thst object self
    },
};


//employee object
const employee = {
    calTax(){        //thisway we can also make function
        console.log("Tax is : 10%");
    },
};

const arjun = {
    salary: 50000,
};

arjun.__proto__ = employee;     //prototype   now we can also use the employee object function
//if any object and object prototype has same function, then objects own function will be called.