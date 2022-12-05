let number = prompt("Give me a number");
let count = 0;

while(number!==0){
    count = count + 1;
    number = Math.floor(number/10);
}
console.log(count);