let f1 = 0
let f2 = 1;
let n = 0;
let m = prompt("Give me your range?");


while(n <= m){
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    n = n + 1;
    console.log(f3);
}