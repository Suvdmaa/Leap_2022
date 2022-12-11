console.log('Object exercises');

// animals--------------------------------------------------
function howDoesTheFoxSay(array, animalType){
    for(let i = 0; i < array.length; i++){
        if(animalType == array[i].type){
            console.log(`${array[i].sound}-${array[i].sound}-${array[i].sound}`)
        }
        console.log(array[i].type);
    }
}

let animals = [
    {
        type: 'dog',
        sound: 'woof'
    },
    {
        type: 'cow',
        sound: 'moo'
    }, 
    {
        type: 'cat',
        sound: 'meow'
    }
]

console.log('DOG barking');
howDoesTheFoxSay(animals,'dog'); // Woof-Woof-Woof


console.log("COW mooing");
howDoesTheFoxSay(animals,'cow'); // moo-moo-moo

console.log("CAT meowing");
howDoesTheFoxSay(animals,'cat'); // meow-meow-meow

// suragchid ------------------------------------------------------------

function findOlderStudents(array){
    for(let i = 0; i < array.length; i++){
        arr = 2022 - array[i].birthOfYear; 
        if(arr > 20){
            console.log(`${array[i].name} - 20 - оос дээш насны сурагч`)
        }
    }
}
function findStudentsAge(array){
    for(let i = 0; i < array.length; i++){
        console.log(2022 - array[i].birthOfYear)
     
    }
}
function findSingleStudent(array){
    for(let i = 0; i < array.length; i++ ){
        if(array[i].single){
            console.log(`${array[i].name} бол ганц бие`)
        }
    }
}

const students = [
    {
        name: 'Khangai',
        birthOfYear: 1982,
        hobby: 'karate',
        single: false
    },
    {
        name: 'Naraa',
        birthOfYear: 1999,
        hobby: 'watching movie',
        single: true
    },
    {
        name: 'Zulaa',
        birthOfYear: 2005,
        hobby: 'dancing',
        single: false
    }
]

findOlderStudents(students); // Khangai
findStudentsAge(students);
findSingleStudent(students);

// Accessing object-------------------------------------------------------


