// 1. 10 хүртэлх натурал тоог хэвлэх программ бич
let count = 1;

while(count <= 10){
    console.log(count);
    count = count + 1;
}

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
console.log("Odd number starts here");
let oddNumber = 1;

while(oddNumber <= 10){
    if(oddNumber % 2 != 0){
        console.log(oddNumber);
    }
    oddNumber = oddNumber + 1;
}

// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
console.log("Even number starts here");
let evenNumber = 1;

while(evenNumber <= 10){
    if(evenNumber % 2 == 0){
        console.log(evenNumber);
    }
    evenNumber = evenNumber + 1;
}

// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
console.log("100 хүртэлх натурал тооны нийлбэрийг олох программ");

let number = 1;
let sum = 0;

while(number <= 100){
    number = number + 1;
    number = number + number;
}
console.log(number);

for(let i = 1; i < 100; i++){
    sum += i
}
console.log(sum)

// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
let n = 10;
let i = 1;

while(i <= n){
    sum += i
    i++;
}

console.log(sum)

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич




// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич
// 8. N тооны факториал олох программ бич
// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич

// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич // 123 <=> 321
// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич
