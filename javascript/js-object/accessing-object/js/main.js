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
    name: 'Хатнаа ',
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
function sumOfStudentsAge (array){
    return array + num;
}

sumOfStudentsAge(students)



