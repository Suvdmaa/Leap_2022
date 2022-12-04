// 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
let firstName = "Suvdmaa";
let lastName = "Enkhbold";

console.log(`My first name's length is ${firstName.length} . And length of my last name is ${lastName.length}.`);

// 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.

let text1 = "Welcome to my JS String assignment.";
let text2 = "Let's do our best";

console.log(text1.toLowerCase() + " " + text2.toLowerCase());

//3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
console.log(text1.toUpperCase() + " " + text2.toUpperCase());

//4. 'Pinecone academy-н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”
let text3 = "Pinecone academy-ны";
let text4 = text3.concat(" ", "leap хөтөлбөрт тавтай морилго уу?");
console.log(text4);

// 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт

let firstName1 = "Sarnai", lastName1 = "Bold", country = "Mongolia", city = "Ulaanbater", age = "25", job = "lawyer";
console.log(`My name is ${firstName1}. And my surname is ${lastName1}. I am ${age} years old . I live in ${city},${country}. And i am a ${job}.`)

/* 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
*1 2 3 4 5 
*2 3 4 5 1 
*3 4 5 1 2 
*4 5 1 2 3 
*5 1 2 3 4 */

console.log("1 2 3 4 5 \n2 3 4 5 1 \n3 4 5 1 2 \n4 5 1 2 3 \n5 1 2 3 4");