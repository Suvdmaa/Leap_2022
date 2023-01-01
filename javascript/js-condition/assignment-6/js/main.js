// 1. Тоогоор илэрхийлсэн дүн буюу n-д утга онооход түүнд харгалзах үсгийг / A,B,C,D,F / хэвлэнэ.
// 2. сарын дугаар буюу n - 1<=n=>12-д хувьсагчид байх утгын дагуу тухайн сарын өдрийн тоог хэвлэнэ.хэрэв 2 дугаар сар бол 28 or 29 гэж хэвлэнэ

// 3. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу




// 4. n  хувьсагчын утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
// negative
// positive


// 5. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ. 
// Жингийн дутагдалтай
// Эрүүл
// Илүүдэл жинтэй
// Хэт таргаллалттай

// let weight = prompt("Give me your weight")
// let height = prompt('Give me your height (example: 1.70)')

// let h = height * height;
// console.log(h, "height")
// let w = weight / h;
// console.log(w)

// if (w < 18.5){
//     console.log('Жингийн дутагдалтай')
// } else if (w >= 18.5 && w < 25){
//     console.log('Эрүүл')
// } else if (w >= 25 && w < 30){
//     console.log('Илүүдэл жинтэй')
// } else if (w >= 30 && w< 35){
//     console.log("Хэт таргаллалттай")
// }



// 6. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу



// 7. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу



// 8. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// 0 <= old <= 1 үед "Infant"  
// 1 < old <= 3 үед "Toddler" 
// 3 < old <= 5 үед "Preschool"
// 5 < old <=12 үед "Gradeschooler"
// 12 <old <= 18 үед "Teen"
// 18 < old <=21 үед "Young adult"
// 21 < old үед "Adult"



// let yearOfBirth = prompt("Төрсөн оноо бичнэ үү")
// let currentYear = 2022;

// let age = currentYear - yearOfBirth;
// console.log(age)

// if (0 <= age && age <= 1){
//     console.log("Infant")
// } else if (1 < age && age <= 3){
//     console.log("Toddler")
// } else if (3 < age && age <= 5){
//     console.log("Preschool")
// } else if (5 < age && age <= 12){
//     console.log('Gradeschooler')
// } else if (12 < age && age <= 18){
//     console.log("Teen")
// } else if (18 < age && age <= 21){
//     console.log("Young adult")
// } else {
//     console.log("Adult")
// }