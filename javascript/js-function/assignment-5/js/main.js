// 1.  arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// 2. arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.

let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
console.log(arr)

function arraySorter(arr) {
    return arr.sort((a, b) => a - b)
}

console.log(arraySorter(arr))