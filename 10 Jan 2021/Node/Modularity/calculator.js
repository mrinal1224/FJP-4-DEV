function add(a , b){
   console.log("the sum is ",a+b)
}


function sub(a , b){
       console.log("the differnce is ",a-b)
    }

function mul(a , b){
       console.log("the Product is ",a*b)
    }


function div(a , b){
       console.log("the quotient is ",a/b)
    }


module.exports = {
       Addition : add,
       Substraction : sub,
       Multiply : mul,
       Division : div

}


// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them

