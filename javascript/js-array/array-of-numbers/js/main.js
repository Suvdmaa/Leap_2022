// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayOfNumbers);

// 2. Array доторх тоонуудын нийлбэрийг ол.
let sum = 0;

for (let i = 0; i < arrayOfNumbers.length; i++){
   sum = sum + arrayOfNumbers[i];
}
console.log(sum)

// 3. Хамгийн их тоог ол.

let max = -1;
for (let a = 0 ; a < arrayOfNumbers.length; a++ ){
    if(max <= arrayOfNumbers[a]){
        max = arrayOfNumbers[a];
    }
}
 console.log(max);

// 4. Хамгийн бага тоог ол.

let min = -1;
for (let a = 0 ; a < arrayOfNumbers.length; a++ ){
    if(min != arrayOfNumbers[a]){
        min = arrayOfNumbers[a];
    }
}
 console.log(min);


// 5. Array - ийн эхэнд дурын 1 тоог нэм.
arrayOfNumbers[0] = arrayOfNumbers[0] + 100;
console.log(arrayOfNumbers);


// 6. Array - ийн төгсгөлд дурын 1 тоог нэм
arrayOfNumbers[arrayOfNumbers.length - 1] = arrayOfNumbers[arrayOfNumbers.length - 1] + 100;
console.log(arrayOfNumbers);




