//                          For-in loops

const language = {       //  for-in loop used to traverse through object object
    js: "JavaScript",
    java: "Java",
    py: "Python",
    htm: "html",
    ts: "Type Script",
}
for (const key in language) {             
    console.log(key+ " --> "+language[key])
}


const arr3 = [58, 45, 32, 21, 14, 9];   //  for-in loop used in array
for (const i in arr3) {
    console.log(arr3 [i]);
}

