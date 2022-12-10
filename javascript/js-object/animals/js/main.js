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