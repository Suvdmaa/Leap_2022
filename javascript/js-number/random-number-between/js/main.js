const number1 = prompt("Enter your first number");
const number2 = prompt("Enter your second number");

var min = 0;
var max = 50;
var random = Math.random() * max + min;

alert(number1 + "-" + random + "-"  + number2);
