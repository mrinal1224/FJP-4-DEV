// // // variable Declartion

// // // var , let , const

// // var a; // variable will always be initiaized with an undefined value
// // console.log(a) // undefined


// // //JavaScript is a Dynamically Typed Langauge
// // a = 3
// // console.log(a) // prints 3

// // a = 'I am a String'

// // console.log(a) // print I am a String 

// // a = true
// // console.log(a) // this will print true

// // a = null
// // console.log(a) // this will print null


// //Number
// // var b = 2
// // var n = 2.3
// // var f = 20.4367
// // console.log(b)
// // console.log(n)
// // console.log(f)


// //String
// // var s = 'a'
// // var s2 = 'I am a String'

// // console.log(s)
// // console.log(s2)


// //Boolean

// var t = true
// var f = false
// console.log(t)
// console.log(f)


// //undefined

// var u;
// console.log(u)

// //null

// var n = null
// console.log(n)



// var keyword has some Problems

//Redeclartion 

// var b = 'Hello'

// console.log(b) // prints hello

// var b = 'bye'

// console.log(b) // prints bye


//Overcoming Redeclartion

//using let keyword

let b = 'hello'
console.log(b) // prints hello

 b = 2 // Error : b is already been declared(Redeclartion Error)
console.log(b)



//loops

//for loop

// isPrime

// var flag = true

// var num = 13

// for(var i=2 ; i*i<=num ; i++){
//   if(num%i==0){
//          flag = false
//          break
//   }
// }


// if(flag==true){
//        console.log('Number is Prime')
// }

// else{
//        console.log('Number is Not Prime')
// }



//2nd Problem with var- scoping

//let is block scoped

// var is function scoped


// if(10%2==0){
//        let a = 'Number is divided by 2'
//        console.log('This is Block code' + a)
// }

// console.log('This is out of block code'+ a)



const keyword

const a = 2

const a = 6; // no redeclaration allowed

a = 'hello' // no Reassigning Allowed










