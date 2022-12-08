console.log("Array methods");

// shift

// arr1 = [1, 2, 3] => // shift(arr1) => [2, 3]

let shiftArr = (arr) => {
    let tempArray = []
    for(let i = 0; i < arr.length; i++){
        if(i != 0){
            tempArray.push(arr[i])
        }
    }
    return tempArray;
}

let arr1 = [1, 2, 3, 4, 5, 6]

console.log(shiftArr(arr1));  // [2, 3, 4 ,5, 6]

console.log('array shift method');

const arr = [1, 2, 4];

const firstElement = arr.shift();
console.log(arr) // [2, 3]
console.log(firstElement);

console.log("Unshift array algorithm")


let unshiftArray = function (arr, number){
    let tempArray = [];
    tempArray.push(number);

    for(let i = 0; i < arr.length; i++){
        tempArray.push(arr[i]);
    }
    return tempArray;
} 

let arr2 = [5, 6, 7];
console.log(unshiftArray(arr2, 1)) // [1, 5, 6, 7]

console.log("array unshift methods")
const array1 = [1, 2, 3];
console.log(array1.unshift(4)); // 5
console.log(array1)


console.log("array sort")

let sortArray = [1, 2, 8, 7, -1, 10]

function sortingAlgorithm(arr){
    for(let i = 0; i < arr.length - 2; i++){
        let indexMin = i;
        for (let j = i+1; j < arr.length - 1; j++){
            if(arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        temp = arr[i]
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }
    return arr;
}

console.log(sortingAlgorithm(sortArray))  // [-1, 1, 2, 7, 8, 10]

console.log("array sorting ")
const names = ['Marlaa', 'Javkhaa', 'Javkhlan', 'Dorj'];
names.sort();
console.log(names);

console.log("array reverse")

function arrayReverse(arr){
    let tempArray = []
    for(let i = arr.length - 1; i >= 0 ; i--){
        tempArray.push(arr[i]);
    }
    return tempArray;
}

let arrReverse = [4, 5, 1, 8]
console.log(arrayReverse(arrReverse)); // [8, 1, 5, 4]


console.log("array reverse using reverse()")
const numbers = ['one', 'two', 'three'];
console.log('array1:', numbers);
const reversed = numbers.reverse();
console.log("reversed: " , reversed);


const nameSlice = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];
console.log(nameSlice.slice(2));
console.log(nameSlice);


function nameSlice1 (arr, index){
    // let tempArray = [];
    // for(let i = index; i < arr.length; i++){
    //     tempArray.push(arr[i]);
    // }
    // return tempArray
    for(let i = 0; i < index; i++){
        arr.shift()
    }
    return arr;
}

console.log(nameSlice1([1, 2, 3, 4, 5], 2))  // [3, 4, 5]

console.log('splice method')

const spliceNames = ['Davaa', 'Lkhagva', 'Purev', 'Byamba'];
spliceNames.splice(1, 0, 'Myagmar');
// 1deh indeks deer shineer utga nemeh uildel
console.log(spliceNames);

spliceNames.splice(4, 0, "Baasan")
console.log(spliceNames)



