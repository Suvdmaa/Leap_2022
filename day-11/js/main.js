// let myNumber = 5;
// let undify;
// let nullVariable = null;
// let myDecision = true;
    
// // typeof
// console.log(typeof 1);
// console.log(typeof "Hello");
// console.log(typeof undify);
// console.log(typeof nullVariable);
// console.log(myDecision);
// console.log(typeof myDecision);


// /**
//  * alert 
//  * 
//  * x'2 
//  */

// let x = 5;
// let y = 6;
// let z = 3;
// let e = 240;
// let d = 175;

// let sum = x * x;
// let num = y * y;
// let con = z * z * z;

// let plus = ' + ';
// let minus = " - ";
// let devide = " / ";
// let multiply = " * ";



// alert( sum + plus + num + minus + con + devide + e + plus + d );

// let l = 36 % 19;
// console.log(l);

// let result = '30' - 10;
// console.log(result);


// const PI = 3.14;
// let r = 6;
// let circleLength = (2 * PI * r);
// alert(circleLength);


// let bottom = prompt('Please give me your bottom');
// let test = prompt('Please give me your top');
// let height = prompt('Please give me your height');

// let trapezoidArea = (bottom + test )/ 2 * height;
// alert(trapezoidArea);


// let a = prompt('Please give me a');
// let b = prompt('Plese give me b');

// if(a < b){
//     console.log("it's true")
// }  else {
//     console.log("it's false")
// }

// // Year of your birth

const yearofBirth = prompt('Give me your birth date');
const currentYear = 2022;


let old = (currentYear- yearofBirth);
console.log(old);


if( 0 <= old && old <= 1){
    console.log("Infant");
} else if( 1 < old && old <= 3 ){
    console.log("Toddler");
} else if (3 < old && old <= 5){
    console.log("Preschool");
} else if (5 < old && old <= 12){
    console.log("Gradeschooler");
} else if (12 < old && old <= 18){
    console.log("Teen");
} else if (18 < old && old <= 21){
    console.log("Young adult");
} else{
    console.log("Adult");
}

// let q = prompt("Give me a number");
// let num = q % 2;

// if(num === 0){
//     console.log("tegsh too");
// } else {
//     console.log("sondgoi too");
// }

// let k = prompt("Give me number");
// let s = k % 3;
// let v = k % 7;


// if( s == 0  || v == 0 ){
//     console.log("Yes")
// } else {
//     console.log("NO")
// }

// let isNotTrue = true;
// console.log(!isNotTrue);

// Weight shalgah

let weight = prompt("Please write your weight");
let height = prompt("Please write your height");

let heightNumber = height * height;
console.log(heightNumber);

let w = weight / heightNumber;

if( 18.5 > w ){
    console.log("Under Weight");
} else if ( 18.5 < w && w < 24 ){
    console.log("Normal");
} else if ( 25 < w && w < 29.9 ){
    console.log("Over Weight");
}  else if (  30 < w  && w < 34.9 ){
    console.log("Over Weight");
}  else if ( 35 < w  && w < 39.9 ){
    console.log("Normal");
} else {
    console.log("Extreme Obesity");
}




let day = prompt("Give me your day");
console.log(typeof day);

let dayNumber = Number(day);
console.log(dayNumber);
console.log(typeof (dayNumber));

let dayName;

switch(dayNumber){
    case 1: 
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7: 
        dayName = "Sunday";
        break;
    default: 
        dayName = "Invalid day";
}

console.log(dayName);





let n = prompt("Too ugnu uu");


if (n > 0 ){
    console.log("positive");
} else {
    console.log("negative");
}


