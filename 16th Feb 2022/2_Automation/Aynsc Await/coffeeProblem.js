function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for Coffee");
    } else {
      reject("Order cannot be Placed");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Your Order is being Prepared");
    resolve(`${order} Served`);
  });
}


// Promisified Solution ->

// placeOrder("coffee")
//   .then(function (demand) {
//     console.log(demand);
//     let orderisProcessed = processOrder(demand);
//     return orderisProcessed;
//   })
//   .then(function (orderisProcessed) {
//     console.log(orderisProcessed);
//   }).catch(function(err){
//          console.log(err)
//   });



// Async Await Solution ->

async function serveOrder() {
  try {
    let orderRecieved = await placeOrder("coffee");
    console.log(orderRecieved); // order For Coffee
    let processedOrder = await processOrder(orderRecieved);
    console.log(processedOrder);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
