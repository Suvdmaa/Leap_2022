let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
console.log(students)

 
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 
let count = 0;
let sum = 0;
for(let i = 0; i < students.length; i++){
    if(students[i].gender == "male"){
        count++;
    } else {
        sum++;
    }
}

console.log(`Ангид ${count} эрэгтэй , ${sum} эмэгтэй байна.`);


//  Сурагчдын насны дунджийг олох функц бичих
let sumOfStudentsAge = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i].age;
    }
    const average = sum / array.length;
    return average;
}

console.log(sumOfStudentsAge(students));

//  Сурагчидад овог нэмж оруулах 

students[0].name = 'Эрдэнэ Сэд-Эрдэнэ';
students[1].name = "Тод Индра";
students[2].name = 'Зоригт Хатнаа';
students[3].name = 'Болд Тэмүүлэн';
students[4].name = 'Төмөрбаатар Намуун';



console.log(students)
// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  //

function findSameOldStudents (array){
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i].age == array[j].age)
            console.log(array[i].age)
        }
    }
}

findSameOldStudents(students)








