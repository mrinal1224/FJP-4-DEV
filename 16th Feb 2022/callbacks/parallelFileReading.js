// This is Synchronous way of reading files
// console.log('Before')

const fs = require("fs");
// let data = fs.readFileSync('f1.txt')
// console.log('This is file Data ->  '+ data)

// console.log('After')

//Async way of reading files

console.log("before");

fs.readFile("f1.txt", cb);

function cb(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("I am file 1 Data -> " + data);
  }
}

fs.readFile("f2.txt", cb2);

function cb2(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("I am file 2 Data -> " + data);
  }
}

console.log("After");
