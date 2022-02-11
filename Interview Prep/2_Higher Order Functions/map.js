// Higher order functions are the functions that operate on other functions
// Higher order functions in JS are for Arrays,

// In simple words a higher order function is a function that recieves a function as an arugument
// or returns the function as output 


// Map

// map is itself a function which is predefined in js
//map takes a callback function as an Argumenet
//map will call the callback function as many times as the elemets of the array
//map will retur a new Array

// let arr=[2 ,4 , 5 , 8 , 9]



// let sqArr = arr.map(function(n){
//        return n*n
// })

// console.log("Original Array", arr)

// console.log("Sqaured Array", sqArr)

// print cube for all the array elements 



// You have to use the map function to separate firstName and lastname

let namesArr = ['Shivam Verma' , 'Shubham Samrat' , 'Ashish Kumar']

// 



// Question
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]; // rupees Array
const inrtToUsd = 74;


let transactionsInDollar = transactions.map(function(n){
       return (n/inrtToUsd).toFixed(0)
})


console.log(transactionsInDollar)