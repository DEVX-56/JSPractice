//                  Nullish coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10     // 5
// val1 = null ?? 10    //10
/val1 = undefined ?? 15      //15
val1 = null ?? 10 ?? 20         //first real value will be returned (10)

//use to safety check for null or undefined

console.log(val1);

/*When we use DB or any firebase or app writer, then we don't recieve direct response we get two values may be we don't get any responce, get null responce or undefined for those cases full code structure may be broke down ....
For those cases this is prepared  if null then assign null value

************************This operator actually perform a safety check against null value***************

*/

//                                              Terniary Operator

//Condition ? true : false

let val2 = 10
val2 >= 5 ? console.log("good") : console.log("Cheap")
