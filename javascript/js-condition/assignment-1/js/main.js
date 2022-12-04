let a = 4;
let b = 3;
let c = 10;
let d = 12;


let i = a > b; // true
let iii = a < b; // false
let ii = a >= b; // true
let iv = a <= b; //false
let vi = a === a; // true
let vii = a != a; // false
let iix = a != "a"; // true
let ix = a == "a"; // false
let xi = a === "a"; //false

console.log(i);
console.log(iii);
console.log(ii);
console.log(iv);
console.log(vi);
console.log(vii);
console.log(iix);
console.log(ix);
console.log(xi);


let one = a > b && c > d; // false
let two = a > b && c < d; // true
let three = a > b || c < d; // true
let four = a > b || c > d; // true
let five = !(a > b); // false
let six = !(a < b); // false 
let eight = !(a > b && c < d); // false
let nine = !(a > b && c > d); // false
let ten = !(a === a); //false



console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);


let myAge = prompt("Насаа оруулна уу (миний нас)");
let yourAge = prompt("Насаа оруулна уу (таны нас)");

if (myAge > yourAge){
    console.log('Би хөгшин');
} else {
    console.log("Та хөгшин");
}

let day = prompt("Give me a day");


if (1 <= day && day <= 5){
    console.log("Ажлын өдөр");
} else if(6 <= day && day <= 7) {
    console.log("Амралтын өдөр");
}


let hours = prompt("Give me a hours");
let oneHourPay = 15000;

let pay = hours * oneHourPay;
console.log(pay);

