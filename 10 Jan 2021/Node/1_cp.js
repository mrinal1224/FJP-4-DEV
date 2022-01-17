// child process module is node module which is used to create sub procces inside a script

const cp = require("child_process");

// console.log('Trying to open calcuator with child Process')

// cp.execSync('calc')

// console.log('Calculator Opened')

// console.log('Trying to open Vs code')

// cp.execSync('code')

// console.log('Vs code Opened')

// console.log("output"+ cp.execSync("node test.js"))


cp.execSync('start chrome https://www.amazon.in/')


