let course = {
    courseName: "Java Script",
    coursePrice: "$: 0",
    coursePlatform: "YouTube",
}
console.log(course.coursePrice); //--> we can get this in a simplyfied manner

//////////////////////////          Object Destructure          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const {courseName} = course;  // const{what value want to fetch} = from which object want to fetch value
console.log(courseName);
//we can also rename 
const {coursePlatform: CP} = course;  // here (codePlatform) rename as (CP)
console.log(CP);                        //if we print (CP) it will give the desired output


/*///////////////////////       Introduction to JSON            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

In JSON format the kay & value both stored as string (Java Script Object Notation)
{
    "name": "Rohan Pramanik",
    "coursename": "Java Script",
    "price": "Free",
    "platform": "YouTube",
}
*/