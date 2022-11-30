let a = "a";
let b = "b";
console.log(a < b);

console.log(a == b);

console.log(a === b);

let c =10;
let d = "10";
console.log(c == d);
console.log(c === d);
console.log(c !== d); // true 

let e = true;
let f = false;
console.log( e < f);
console.log(e > f);

let result = 10;
if (result > 10){
    console.log("more than 10");
} else {
    console.log("less than 10");
}

result > 10 ? console.log("more than 10") : console.log("less than 10");

result > 10 ? (result < 11 ? console.log(test): console.log("hi")) : console.log("less than 10");


// // TIP-------------------------------------------------------------

const tip1 = 3000;
const tip2 = 27500;
const tip3 = 100000;

if(5000 > tip1 && 30000 <= tip1){
   console.log(tip1 * 0.15 + tip1);
} else {
    console.log(tip1 * 0.2 + tip1);
}

let tipResult1 = (5000 <= tip1 && 30000 >= tip1) ? tip1 * 0.15 + tip1: tip1 * 0.2 + tip1;
console.log(tipResult1);

let tipResult2 = (5000 <= tip2 && 30000 >= tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;
console.log(tipResult2);

let tipResult3 = (5000 <= tip3 && 30000 >= tip3) ? tip3 * 0.15 + tip3: tip3 * 0.2 + tip3;
console.log(tipResult3);

const input = prompt("Give me your money");
const numberInput = Number(input);
// const numberInputPrompt = Number(prompt("Give me your money"));

let exTipResult = (5000 <= numberInput && 30000 >= numberInput) ? numberInput * 0.15 + numberInput: numberInput * 0.2 + numberInput;




// // Suragchdin shalgaltin dung gargaarai--------------------------------

const studentPoint = Number(prompt("Give me your score"));
const studentName = prompt("Give me your student name");

let studentResult = "Оноо дандаа 100-аас доош байх ёстой";

if (60 > studentPoint){
   studentResult = "Маш муу";
} else if (60 < studentPoint && studentPoint <= 70){
    studentResult = "Хангалттай";
} else if (70 < studentPoint && studentPoint <= 80){
    studentResult = "Дунд";
} else if (80 < studentPoint && studentPoint <= 90){
    studentResult = "Сайн";
} else if (90 < studentPoint && studentPoint <= 100){
    studentResult = "Маш сайн";
} else{
    console.log("buruu");
}

alert(studentName + " - " + studentPoint + " - " + studentResult); //template


console.log(`${studentName} - ${studentPoint} - ${studentResult}`); //template



// hicheel --------------------------------------------------------

alert("Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\"Its is double quotation\" but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");


console.error("It is error");

const str = 'Life, the universe and everything.';
console.log(str.length);

let registerNumber = prompt("Write your register number");
console.log(registerNumber.length);

if (registerNumber.length != 10){
    alert("Register number length is not enought");
} else {
    alert("The length of register number is correct")
}

// // .charAt(index) str[index] registriin dugaar

console.log(str.charAt(0));
console.log(str[1]);

console.log(registerNumber.charAt(0));
console.log(registerNumber[1]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let firstName = "John";
let fullName = firstName.concat(' ', 'Smith');
console.log(fullName);  // "John Smith"
console.log(firstName); // "John"

console.log(registerNumber.substr(0, 2)); 
console.log(registerNumber.substr(2, 9));

const registerChar = registerNumber.substr(0, 2);
const registerNum = registerNumber.substr(2, 9);
console.log(registerChar);
console.log(Number(registerChar));
console.log(Number("ABC"));

if(Number.isInteger(Number(registerChar))){
    console.log("Your register characters are correct");
} else {
    console.log("Your register characters are wrong");
}

console.log(Number('abc'));
console.log(Number.isInteger(Number('abc')));
console.log(Number('12312345'));
console.log(Number.isInteger(Number('12312345')));

// // exercise : Өгөгдсөн регистрийн дугаарын урт нь 10 тэгээд эхний 2 үсэг нь үсэг болоод үлдсэн 8 үсэгнүүд нь тоон төрөлтэй бол Таны өгсөн регистрийн дугаар

// //registriin dugaar

if(!Number.isInteger(Number(registerChar) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10)){
    console.log('Your register characters are correct');
} else {
    console.log('Your register characters are wrong');
}


// Valiadate phone number
const phoneNumber = prompt("Write your number (with +976)");
const fullNumber = phoneNumber.substr(5,12);
const firstFourNumber = phoneNumber.substr(0, 4);


if(firstFourNumber == "+976" && Number.isInteger(Number(fullNumber)) && phoneNumber.length == 12) {
    console.log("та монгол улсын утасны дугаарыг зөв орууллаа");
} else {
    console.log("та монгол улсын утасны дугаарыг буруу орууллаа");
}




