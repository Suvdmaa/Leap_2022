let n = Number(prompt("Give me a number"));

for(let i =1; i < 100; i++){
    if (n % i == 0){
            console.log(i, "is not a prime number");
        }
        console.log(i, "is a prime number");
}

