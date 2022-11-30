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

alert(studentName + " - " + studentPoint + " - " + studentResult);


console.log(`${studentName} - ${studentPoint} - ${studentResult}`); //template