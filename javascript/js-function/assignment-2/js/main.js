// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.

function findMax(input1, input2) {
    if (input1 > input2) {
        return input1;
    } else {
        return2;
    }
}
console.log(findMax(23, 11))


function findMaxSecondExample(a, b) {
    return Math.max(a, b)
}
console.log(findMaxSecondExample(1, 2))

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

const a = [1, 2, 3, 4, 5]

function findNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return i
        }
    }
    return -1;
}

console.log(findNumberInArray(a, 6)) // -1
console.log(findNumberInArray(a, 4))  // 2

// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

const b = ["a", 'b', 'c', 'd']

console.log(findNumberInArray(b, "a"))  // 0
console.log(findNumberInArray(b, "e"))  // -1

// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
function randomNumber(a, b) {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    const c = Math.floor(Math.random() * (max - min + 1) + min)
    return c
}
console.log(randomNumber(2, 5))  // 3 or 4

//5. Өгөгдсөн array - ийн дундажыг олох функц бич.
const t = [1, 2, 4, 5, 6, 7]
function findAverage(arr) {
    let sum = 0;
    arr.map(n => {
        sum += n
    })
    return sum / arr.length
}

console.log(findAverage(t)) // 4

// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
const e = [1, 2, 4, 5, 6, 7]
function findAverage(arr) {
    let sum = 0;
    arr.map(n => {
        sum += n
    })
    return sum
}

console.log(findAverage(e))

// 7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(5)) // true
console.log(isPrime(10)) // false

// 8. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.
console.log("ABC".toLowerCase())
function strToLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase()
    }
    return arr

}
console.log(b)

console.log(strToLowerCase(b)) // ["A", "B", "C", "D"]

// 9. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг жижиг үсэг болгох функц бич.
const L = ["A", "B", "C", "D"]

function str(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase()
    }
    return arr

}
console.log(L)

console.log(str(L))
