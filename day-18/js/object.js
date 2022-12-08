console.log('Lesson Objects')

let rabbit1 = {
    color: 'White',
    rName: 'Chandaga',
    gender: 'male',
    age: 2,
    jump: function(){
        console.log("Sorry i broke my leg, i cannot jump")
    },
    sayMyName: function (myName) {
        console.log(`Your name is ${myName}`)
    }
}
console.log(rabbit1)
console.log(rabbit1.color)
rabbit1.color = 'Brown';
console.log(rabbit1)
rabbit1.jump()
rabbit1.sayMyName('Khangaikhuu')


let rabbit2 = {
    color: 'Pink',
    rName: 'Popo',
    gender: 'female',
    age: 3,
    jump: function() {
        console.log('i can jump')
    }
}
console.log("$$$$$$$$$$$$$$$$$")
console.log('Here is rabbit 2 speaks')
console.log("$$$$$$$$$$$$$$$$$")

rabbit2.jump()

console.log(rabbit2)

let rabbits = [rabbit1, rabbit2]
console.log(rabbits)

