// "Comments can make code readable"
// "Javascript lesson begin" 

/*
** "Comments can make code readable" 
*/

// 6. Утга оноогоогүй хувьсагч зарлах 
let exampleThird;
console.log(exampleThird);

// 7. Утга оноосон хувьсагч зарлах 
let exampleFour = "example four";
console.log(exampleFour);

// 8. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах  
let firstName = "Tod-od";
console.log(firstName);
let lastName = "Bold";
console.log(lastName);
let maritalStatus = "Single";
console.log(maritalStatus);
let country = "Mongolia";
console.log(country);
let age = 23;
console.log(age);

// 9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
let firstName1 = "Tseren", lastName1 = "Ganbaatar", maritalStatus1 = "Married", country1 = "Mongolia", age1 = 35;
console.log(firstName1);
console.log(lastName1);
console.log(maritalStatus1);
console.log(country1);
console.log(age1);

// 10. Гурвалжингийн периметрийг олох 
let bottom = Number(prompt('Please give me your bottom'));
let topArea = Number(prompt('Please give me your top'));
let height = Number(prompt('Please give me your height'));

let trapezoidArea = (bottom + topArea)/ 2 * height; 
alert(trapezoidArea);

// 11. Тойргийн талбайг олох 
const PI = 3.14;
let r = Number(prompt('Please give me a number (r)'));

let circleLength = (PI * (r * r));
alert("Тойргийн талбайн : " + circleLength);

// 12. m = y2-y1/x2-x1 хариуг олох 

let y = Number(prompt("Give me number for y"));
let x = Number(prompt('Give me a number for x'));

let multiply = (((y * y) - y) / ((x * x) - x));
alert(multiply);

// 13. 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?
let gegabyte1 = 8000000000;
let multiplyGegabyte = gegabyte1 * 15;

console.log(multiplyGegabyte);

// 14. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.



//15. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

const side1 = Number(prompt("Give me a number for a"));
const side2 = Number(prompt("Give me a number for b"));
const side3 = Number(prompt("Give me a number for c"));


let p = (side1 + side2 + side3) / 2;
console.log(p);
let areaOfTriangle = Math.sqrt(p * ((p - side1) * (p - side2) * (p - side3)));
alert("Area of Triange is: " + Math.floor(areaOfTriangle));


//16. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл 

let celsiusExample = Number(prompt("Please give a number for celsius"));
const fahrenheit = celsiusExample * (9/5) + 32;

alert("Fahrenheit is " + Math.floor(fahrenheit));

// 17. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.

let fahrenheitExample = Number(prompt('Please give me a number for fahrenheit'));
const celsius = fahrenheitExample * (5/9) - 32;
alert("Celsius is " + Math.floor(celsius));


/* 18. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг гүцэтгээд үр дүнг нь дараах байдлаар харуул: 
** Өгөгдсөн 2 тооны нийлбэр нь 25 
** Өгөгдсөн 2 тооны ялгавар нь 5 */

let a = 5;
let b = 6;

console.log("Тооны нийлбэр нь: " + ((a + b - b) * a));
console.log("Тооны ялгавар нь:" + ( (a * a) / (a * b / b)));

// 19. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
let cm = Number(prompt("Please give me a number for cm (centimeters)"));

const oneCm = 0.393701;
let exampleCm = cm * oneCm;

alert("Inches to Cm is : " + exampleCm + " cm");


let inch = Number(prompt("Please give me a number for inch (inches)"));

const oneInch = 2.54;
let exampleInch = inch * oneInch;

alert("Cm to Inches is : " + exampleInch + " inch");

//20. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.


//21. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич
let exampleNumber = prompt("Надаа гурван оронтой тоо өгнө үү ");

alert("3 оронтоо тооны хамгийн эхний цифр нь: " + exampleNumber.charAt(0));

// 22. Доорх Baby Shark дууны үгийг хамгийн ихдээ 12 хувьсагч ашиглан орлуулан бичээд console дээр дарааллуулан хэвлэж харуулна уу.

let shark1 = "Baby shark";
let shark2 = "Mommy shark";
let shark3 = "Daddy shark";
let shark4 = "Grandma shark";
let shark5 = "Grandpa shark";
let text1 = "Let's go hunt";
let text2 = "Run away";
let text3 = "Safe at last";
let text4 = "It's the end";
let doo = "doo-doo, doo-doo";

console.log(shark1 + " " + doo);
console.log(shark1 + " " + doo);
console.log(shark1 + " " + doo);
console.log(shark1);

console.log(shark2 + " " + doo);
console.log(shark2 + " " + doo);
console.log(shark2 + " " + doo);
console.log(shark2);

console.log(shark3 + " " + doo);
console.log(shark3 + " " + doo);
console.log(shark3 + " " + doo);
console.log(shark3);

console.log(shark4 + " " + doo);
console.log(shark4 + " " + doo);
console.log(shark4 + " " + doo);
console.log(shark4);

console.log(shark5 + " " + doo);
console.log(shark5 + " " + doo);
console.log(shark5 + " " + doo);
console.log(shark5);

console.log(text1 + " " + doo);
console.log(text1 + " " + doo);
console.log(text1 + " " + doo);
console.log(text1);

console.log(text2 + " " + doo);
console.log(text2 + " " + doo);
console.log(text2 + " " + doo);
console.log(text2 + " (ah!)");

console.log(text3 + " " + doo);
console.log(text3 + " " + doo);
console.log(text3 + " " + doo);
console.log(text3 + " (phew)");

console.log(text4 + " " + doo);
console.log(text4 + " " + doo);
console.log(text4 + " " + doo);
console.log(text4);



