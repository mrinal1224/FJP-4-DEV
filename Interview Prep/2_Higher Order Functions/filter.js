

// let arr = [2 , 3, 6, 5, 8, 10 , 8 , 9]


// // Filter

// Filter returns a new Array conataining Array Elements that satisfies a particular condition

// if the condition stands true it will filter out those elements in a new Array and will discard all the other Elements

// It works on Boolean value where condition is true or false

// let evenNumberArray = arr.filter(function(n){
//        return n%2==0 /// boolean
// })

// console.log(arr)


// console.log(evenNumberArray)



const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profitArr = transactions.filter(function(n){
       return n>0
})


console.log(profitArr)




