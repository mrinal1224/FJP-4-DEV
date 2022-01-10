//JavaScript objects are always in key value pair

// to delcare and obj

let obj = {}; // this is how you declare an object

let person = {
  name: "Amit",
  age: 21,
  phone: 999999999,
  gender: "male",
  height: "800 km/hr",
};

// car - name , brand , max speed , color , price

let car = {
  name: "Ferrari",
  Brand: "Ferrari",
  maxSpeed: "500km/hr",
  color: "Red",
  price: 10000000,
};

// Captain America - Avengers

let cap = {
  firstName: "Steve",
  lastName: "Rogers",
  friends: ["Bucky", "Tony", "Dr Banner"],
  age: 102,
  isAvenger: true,
  address: {
    state: "Manhattan",
    city: "New York",
  },

  sayHi: function () {
    console.log("Captain says hi");
  },
};

//dot Notation

console.log(cap.firstName);
console.log(cap.lastName);

// Bracket Notation

console.log(cap["firstName"]);

console.log(cap.address.city);

console.log("My Best friend is ", cap.friends[0]);

cap.sayHi();

// For in loop for objects

// for(let key in cap){
//        console.log('key:', key , "Value:" , cap[key])
// }

cap.isAvenger = false; // updating an object

cap.friends[2] = "Thor";

cap.address.city = "Brooklyn";

cap.movies = ["Age of Ultron", "Civil war", "First Avenger"]; // adding new Property to an object

delete cap.age; // Deleting a property from an Object

console.log(cap);
