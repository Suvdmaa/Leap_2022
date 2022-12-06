// Өгөгдсөн 2 тооны ихийг олох функц бич.

let num1 = Number(prompt("Give me a number (x)"));
let num2 = Number(prompt("Give me a number(y)"));



function findMax(x, y){
    if(x < y){
        console.log(y + " is bigger than x")
    } else {
        console.log(x + ' is bigger than y')
    }
}

findMax(num1, num2)

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let array = [1, 4 , 6, 7, 9, 14, 56];

let n = Number(prompt(Give me number))