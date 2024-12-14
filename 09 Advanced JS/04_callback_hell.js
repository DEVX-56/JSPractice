

//lets, here a function which used to fetch data from database, here we pass a ID the function returns the corrosponding Data 
//                         ---------> lets this function takes 3s to fetch the data
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data: ", dataId);
        if(getNextData){
            getNextData();
        }
        
    }, 3000);
    
}
getData(125)
getData(4)
getData(8)   //in this situation we got three data togeather

//but we want three data after 3s delay  --> to full fill this we cn send a callback(getNextData) to getData
getData(125, ()=>{  
    getData(4, ()=>{
        getData(8);
    });      //here we pass same function as call back function
});
//----> This is called callback-hell (nested call back)


//using promise chainging
getData(1).
    then((res)=>{
        console.log(res)
        return getData(2);
    }).
    then((res)=>{
        console.log(res)
        return getData(3);
    }).
    then((res)=>{
        console.log(res);
    })


//async-await
async function getAllData(){
    console.log("getting Data-1");
    await getData(1);   //execute 1st

    console.log("getting Data-2");
    await getData(2);   //after full execution of 1st this will execute
    
    console.log("getting Data-3");
    await getData(3);    //after full execution of 2nd this will execute
}
