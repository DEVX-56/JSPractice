let promiseX = new Promise((resolve, reject) => {
  console.log("It's promise");
  resolve(123); //  fror this, console.log   will be printed and resolve also will be printed
  reject("some error"); //   for this, here throws an error
});

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise done");
    resolve("sucess");
    //reject(" network error occur");
  });
};

let promise = getPromise();

//if promise fullfilled
promise.then((result) => {
  console.log("Promise Fullfilled", result);
});

//if promise rejected
promise.catch((error) => {
  console.log("rejected", error);
});

//promise 4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //let error = true;    //means error is present in function
    let error = false; //means error is not-present in function
    if (!error) {
      resolve({ username: "Rohan", pass: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  }).finally(()=>{     //finally block will be must be executed
    console.log("The promise is either resolve or rejected");
  });

