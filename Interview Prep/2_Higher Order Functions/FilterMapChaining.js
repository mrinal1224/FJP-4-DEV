
let arr = [
       {name: "A", age: 14, gender: "M"}, 
       {name: "B", age: 34, gender: "M"}, 
       {name: "C", age: 24, gender: "F"}, 
       {name: "D", age: 44, gender: "F"}, 
       {name: "E", age: 44, gender: "M"}, 
       {name: "I", age: 28, gender: "F"}, 
       {name: "G", age: 36, gender: "M"}, 
       {name: "H", age: 47, gender: "F"}
   ]

// Age Of all the ladies


let femaleArr = arr.filter(function(n){
       return n.gender=="F"
}).map(function(n){
       return n.age
})


// let femaleAges = femaleArr.map(function(n){
//        return n.age
// })



console.log(femaleArr)










