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
    console.log(number);
    number = number + 1;
    number = number + number;
}