/*Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу. Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар нэг оронтой байвал 2 оронтой болгох буюу сар нь  1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах */
let year = prompt("Give me a number of year");
let month = prompt("Give me a number of month");
let day = prompt("Give me a number for day");


if((year.length ==4) && (day.length == 2) && (month.length == 2)){
    alert(year + "-" + month + '-' + day);
} else {
    alert("Tani uruulsan utga buruu bn. (!day , month ni hoer orontoi too bn \n!negdugaar sariig 01 gej bicheerei. ))")
}

// 2. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
let number = prompt("Give me your phone number");
let example1 = number.substring(0, 2);
let example2 = number.charAt(0, 1);

console.log(example1);
console.log(example2);

if((number.length == 8) && ((example1 == 99) || (example1 == 95) || (example1 == 94) || (example1 == 85) || (example1 == 75) || (example1 == 79) || (example1 == 74))) {
    alert(number + " " + "Mobicom");
} else if ((number.length == 8) && ((example1 == 90)|| (example1 == 96) || (example1 == 91))){
    alert(number + " " + "Skytel");
} else if ((number.length == 8) && ((example1 == 93) || (example1 == 83) || (example1 == 97) || (example1 == 98))){
    alert(number + " " + "G-Mobile");
} else if ((number.length == 8) && (example2 == 8)){
    alert(number + " " + "Unitel");
} else {
    alert("Ta dugaaraa buruu bichsen baina");
}
