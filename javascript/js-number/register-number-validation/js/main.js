const registerNumber = prompt("Please write your register number");

const registerChar = registerNumber.substr(0, 2);
const registerNum = registerNumber.substr(2, 9);

console.log(registerChar);
console.log(registerNum);

if(!Number.isInteger(Number(registerChar) && Number.isInteger(Number(registerNum))) && registerNumber.length == 10){
    console.log("Your register number are correct");
} else {
    console.log("Your register number are wrong");
}