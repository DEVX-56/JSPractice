//                           For Each loop

const lang = ["js", "py", "c", "rb", "java", "cpp"];

lang.forEach( function(item) {     //it's a callback fcn. so don't need any name
    //console.log("Favourite programming lanuage is : "+item);
} )


const car = ["JCB", "AMG", "RR", "BMW", "TATA"];
car.forEach( (val) => {     //it's a callback fcn. so don't need any name using arrow fcn.
    //console.log("Your Car is : "+val);
} )


const laptop = ["DELL", "hp", "Apple", "acer"];
function laptopName(name){    //we can directly pass on this fcn.
    //console.log(name)
}
laptop.forEach(laptopName)   // previous fcn.  will be pass as parameter


car.forEach((item, index, arr) => {    //This can print item, index, full array
    console.log(item, index, arr);
})


//                              Objects Inside Array
const myCode = [
    {
        langName:"Java",
        langFile:"java",
    },
    {
        langName:"JavaScript",
        langFile:"js",
    },
    {
        langName:"Python",
        langFile:"py",
    },
    {
        langName:"TypeScript",
        langFile:"ts",
    },
]

myCode.forEach((item) => {
    console.log(item.langName);
    console.log(item.langFile);
})