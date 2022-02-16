// Callback -  any function that can be passed to another function is
// known as a callback function

function printFirstName(firstName, cb, cb2) {
  console.log(firstName);
  cb("Dwivedi");
  cb2(20);
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}

printFirstName("Gaurav", printLastName, printAge);

// Calclulator create with call back function - addition ,sub , div, mul

function calc(add, sub, mul, div) {
  add(2, 3);  sub(4, 2);  mul(3, 3);  div(10, 5); add(2 , 4)
}

function addition(a, b) {
  console.log(a + b);
}

function substraction(a, b) {
  console.log(a - b);
}

function multiplication(a, b) {
  console.log(a * b);
}

function division(a, b) {
  console.log(a / b);
}

calc(addition, substraction, multiplication, division);










