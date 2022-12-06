let n = Number(prompt("Give me your prime number"));
let temp = 0;

for(let i = 2; i < Math.round(n/2); i++){
    if (n % i == 0){
        temp = temp + 1;
    }
}
if(temp == 0){
    console.log(`${n} is a prime number`);
} else {
    console.log("its a not prime number");
}