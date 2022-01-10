// // // Normal Function


// // // function function_name(){}
// // // function defination



// 2// function calling or invokation





// // // console.log(a+b)



// // //parameters in functions

// // function add(a , b){
// //        console.log('The addition is' , a+b)
// // }

// // //Arguments in functions
// // add(2 , 3)



// // functions are treated as first class citizen in JavaScript

let sayHi = function(){ // anonymous function
     console.log('Hi')
} // function expression


// let add = function(a,b){
//        return a+b
// }

// let sum = add(2,3)
// console.log(sum)


// sayHi()




// var multiply = function (a , b){
//        console.log(a*b)
// }

// multiply(2,3)



//IIFE (Immediately invoked function Expression)




// function multiply(a , b){
//        console.log(a*b)
// }

// multiply(2 , 3)


// multiply(5 , 6)

// multiply(10 , 2)



//IIFE
let multiplyIIFE = (function(a,b){
       console.log(a*b) 
})(20 , 10)










