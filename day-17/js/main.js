function pow(number, exponent){
    let multiply = 1;
    for (let i = 1; i <= exponent; i++){
        multiply = multiply + number;
    }
    return multiply;
}

let result = pow(2, 3);

console.log(result)
console.log(pow(2,4));
console.log(pow(5,2))



// 1. Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false буцаадаг функц бичнэ үү. Функцын нэр  нь findMin
console.log("exercise - 1");
function findMin(p1, p2){
    if(p1 < p2){
       return p2
    } else{
        return p1
    }
}
console.log(findMin(10, 5))

// 2. Өгөгдсөн array-ны элементүүлэг хэвлэдэг функц бичнэ үү. Функцын нэр нь printArray

console.log("exercise - 2");
function printArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

let arr = [1, 2, 4, 5, 6, 100]
printArray(arr);
    

// 3. Өгөгдсөн array-наас хамгийн их утгыг нь олоод буцаадаг функц бичнэ үү. Функцын нэр нь findArrayMax. Функцээ expression хэлбэрээр бичнэ үү.
console.log("exercise - 3");

let findArrayMax = function (num){
    let max = -1;
    for(let i = 0; i < num.length; i++){
        if(max <= num[i]){
            max = num[i];
        }
    }
    return max;
}

console.log(findArrayMax(arr)) 

// 4. Өгөгдсөн тоон array-ны утгуудыг бүгдийг нь нэмээд дундажыг нь олоод буцаадаг функц бичнэ үү. Функцын нэр нь findArrayAverage. Функцээ arrow expression function хэлбэрээр бичнэ үү.

console.log("exercise - 4")
let findArrayAverage = (myArr) =>{
    let sum = 0;
    for (let i = 0; i < myArr.length; i++){
        sum = sum + myArr[i];  
    }
    const average = sum / myArr.length;
    return average;
}

console.log(findArrayAverage(arr));

// 

function findOntsDun(points){
    if(points < 60){
        return "Very bad"
    } else if (points >= 60 && points < 70){
        return "Satisfied"
    } else if (points >= 70 && points < 80){
        return "Average"
    } else if (points >= 80 && points < 90){
        return "Good"
    } else if (points >= 90 && points < 100){
        return "Very good"
    } else {
        return "Please give me points between 0 and 100"
    }
}

let inputPoint = Number(prompt("Give me student point"));
let inputStudentName = prompt("Give me student name");
let pointResult = findOntsDun(inputPoint);

console.log(`${inputStudentName} - ${inputPoint} - ${pointResult}`)
