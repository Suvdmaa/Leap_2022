// Өгөгдсөн 2 тооны ихийг олох функц бич.

let num1 = 5;
let num2 = 6;



function findMax(x, y){
    if(x < y){
        console.log(y + " is bigger than x")
    } else {
        console.log(x + ' is bigger than y')
    }
}

findMax(num1, num2)