// Every: Conditon Check: To get true or false based on a condition 
//it will return true every elememt in the array satisfies the condition else will return false

const transactions = [1000, 3000, 4000, 2000, 898, 3800, -4500];


let anyDeposit = transactions.every(function(n){
       return n>0
})

console.log(anyDeposit)