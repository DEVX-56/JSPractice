let btn1 = document.querySelector('#btn1')  //catch the button element

btn1.onclick = (evt) => {
    console.log(evt);        
    console.log(evt.type);    //type of event
    console.log(evt.target);   //target means where the event occuring
    console.log(evt.clientX, evt.clientY);    //position of occuring
};

//same thing will be done by this event listner method
btn1.addEventListener('click', (evt)=>{
    console.log('button one was clicked');
    console.log(evt);        
    console.log(evt.type);
})

//after click button all the [eventlistner] will work

btn1.addEventListener('click', () =>{
    console.log('button one was clicked - handler 1 ');
})
btn1.addEventListener('click', () =>{
    console.log('button one was clicked - handler 2 ');
})
const handler3 = () =>{
    console.log('button one was clicked - handler 3 ');
}
btn1.addEventListener('click', handler3);

//remove event listner
btn1.removeEventListener('click', handler3);    //this will be removed


//color will chnage of the cicle for every click

const random = (number) => {   //function for random number generate
    return Math.floor(Math.random() * (number + 1));
}

let div = document.querySelector('#dv')  //catch the div 

div.addEventListener('click',(e)=>{
    div.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
})