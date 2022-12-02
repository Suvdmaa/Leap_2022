// Day 13

// console.log(Math.PI);
// console.log(Math.PI.toFixed(2)); 

// const budget = 1_000_000_000;
// console.log(budget);

// const degrees = 45;
// let rad = degrees * (Math.PI / 180);
// console.log(rad.toFixed(4));

// let a = 5, b = 4;
// const diff = Math.abs(a - b);
// console.log(diff);

// console.log(Math.ceil(.95));
// // output: 1

// console.log(Math.ceil(4));
// // output: 4

// console.log(Math.ceil(7.004));
// // output: 8

// console.log(Math.ceil(-7.004));
// // output: -7


// console.log(Math.floor(5.95));
// // output: 5

// console.log(Math.floor(5.05));
// // output: 5

// console.log(Math.floor(5));
// // output: 5

// console.log(Math.floor(-5.05));
// // output: -6


// console.log(Math.round(0.9));
// // output: 1

// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));


// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));

// console.log(Math.max(1, 3, 2));

// console.log(Math.max(-1, -3, -2));

// console.log(Math.max(2, 3, 1));
// // output: 1

// console.log(Math.max(-2, -3, -1));
// // output: -3

// console.log(Math.pow(7, 3));
// // output: 343

// console.log(Math.sqrt(45));

// // x2 = y2 + z2 => x => ? input: y = 15, z= 24

// const y = Number(prompt("Give me y"));
// const z = Number(prompt("Give me z"));

// const z2 = Math.pow(z, 2);
// const y2 = Math.pow(y, 2);

// console.log(z2 + y2);



// console.log(Math.floor(Math.random() * 6 + 1)); // randomoor too garna 

// var min = 10;
// var max = 20;

// console.log(Math.ceil(Math.random() * max + min));


// 

// let first = prompt("Give me your minumum number");
// let second = prompt("Give me your maximum number");
// let howMany = prompt("How many time?");

// const max = Math.max(first, second);
// const min = Math.min(first, second);

// console.log(Math.floor(Math.random() * (max - min) + min));

// let count = 1;
// console.log("loop start");
// while (count <= Number(howMany)){
//     console.log(Math.floor(Math.random() * (max - min) + min));
//     count = count + 1;
// }









// let count = 1;
// console.log('loop starts');
// while (count <= 10){
//     console.log(count);
//     count = count + 1;
// }

// console.log('loop ended');

/**
 * Hervee bid nar count = count + 1 gedgiig bichihgui bol
 * Infinite 
 */



// let answer = prompt("Do you wanna continue (yes or no)");


// while (answer == "yes"){
//     answer = prompt("Do you wanna to continue (yes or no)".toLowerCase());
//     if (answer == "yes"){
//          alert("Thanks");
//     }
// }

// console.log("Game over");


// tooni niilber

let max = Number(prompt("Give me number"));
let count = 1;
let sum = 0;


while (count <= max){
    console.log(count);
    count = count + 1;
    sum = sum + count;
    console.log(sum);
}

// max = 10, count = 0, sum = 0
// iteration 1: count = 1
count = count + 1; // 1
sum = sum + count; // 0 + 1 = 1
console.log(count); // 1
console.log(sum); // 0

count = count + 1; // 2
sum = sum + count; // 0 + 2 = 2
console.log(count); // 2
console.log(sum); // 2

count = count + 1; // 3
sum = sum + count; // 2 + 3 = 5
console.log(count); // 3
console.log(sum); // 5

count = count + 1; // 4
sum = sum + count; // 5 + 4 = 9
console.log(count); // 4
console.log(sum); // 9

count = count + 1; // 5
sum = sum + count; // 9 + 5 = 14
console.log(count); // 5
console.log(sum); // 14

count = count + 1; // 6
sum = sum + count; // 14 + 6 = 20
console.log(count); // 6
console.log(sum); // 20

count = count + 1; // 7
sum = sum + count; // 20 + 7 = 27
console.log(count); // 7
console.log(sum); // 27


count = count + 1; // 8
sum = sum + count; // 27 + 8 = 35
console.log(count); // 7
console.log(sum); // 35

count = count + 1; // 9
sum = sum + count; // 35 + 9 = 44
console.log(count); // 9
console.log(sum); // 44

count = count + 1; // 10
sum = sum + count; // 44 + 10 = 54
console.log(count); // 10
console.log(sum); // 54



let number = 1;
while (number <= 100){
    number = number + 1;

}











