let fs = require("fs");

console.log("Before");

// fs.readFile('f1.txt' , function(err , data){
//       if(err){
//              console.log(err)
//       }

//       else{
//              console.log('File Data ->'+ data)
//       }
// })
// Pending Stage
let promiseVariable = fs.promises.readFile("f1.txt");

// Fullfilled and then Setlled
promiseVariable.then(function (data) {
  console.log("File Data ->" + data);
});

//Rejected and Setlled
promiseVariable.catch(function(err){
       console.log(err)
})

console.log("After");
