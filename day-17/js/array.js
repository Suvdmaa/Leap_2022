console.log("Arrays methods")


// array at function--------------------------------------------------



function findAt (arr, index){
    return arr[index];
}

const array1 = [1, 2, 3, 4, 5];
console.log(findAt(array1, 0));    // 1
console.log(findAt(array1, 4));    // 5

console.log(array1.at(0))   // 1
console.log(array1.at(2))   // 3


// array concat ------------------------------------------------------
// arr1 = [1, 2, 3] arr2 = [4, 5, 6] => [ 1, 2, 3, 4, 5, 6]
function arrConcat(arr1, arr2){
    // arr.push()

    let concatedArray = []
    for(let i = 0; i < arr2.length; i++){
        concatedArray.push(arr2[i])
    }
    for(let i = 0; i < arr2.length; i++){
        concatedArray.push(arr1[i])
    }
    return concatedArray;
}

let arrayC1 = [1, 2, 3]
let arrayC2 = [4, 5, 6]
console.log(arrConcat(arrayC1, arrayC2));
console.log(arrConcat(arrayC2, arrayC1));


// array concat method-----------------------------------------------
console.log("array concat method------")
console.log(arrayC1.concat(arrayC2));
console.log(arrayC2.concat(arrayC1))


// array includes----------------------------------------------------
console.log('array includes---1--------')
// arr = [2, 4, 5] => 5 -> true, 3 => false

let arrayIncludes = function (arr, number){
    let found = false;
    for(let i = 0; i < arr.length; i ++){
        if (number === arr[i]){
            found = true;
            break;
        }
    }
    return found;

}

const arrayInc = [2, 4, 5]
console.log(arrayIncludes(arrayInc, 2)) // true 
console.log(arrayIncludes(arrayInc, 5)) // true
console.log(arrayIncludes(arrayInc, 3)) // false


// array implicit function includes
console.log("Array includes--2--------")

console.log(arrayInc.includes(2));  // true
console.log(arrayInc.includes(5)) // true
console.log(arrayInc.includes(3)) // false

// array indexof---------------------------------------------------
// arr1 = [1, 2, 3] => 3 index ? => 2

let findIndex = function(arr, number){
    let index = -1;
    for(let i = 0; i < arr.length; i++){
        if(number === arr[i]){
            index = i;
        }
    }
    return index;
}

const arrIndex = [1, 2, 3]
console.log(findIndex(arrIndex, 3)) // => 2
console.log(findIndex(arrIndex, 2)) // => 1
console.log(findIndex(arrIndex, 10)) // => -1

console.log('now it is time to test indexof method of array')
console.log(arrIndex.indexOf(3)) // => 2
console.log(arrIndex.indexOf(2)) // => 1
console.log(arrIndex.indexOf(10)) // => -1



// string
const animals = ["chono, 'buhun", 'temee', 'nugas', 'buhun'];
console.log(animals.indexOf('buhun')); // => 1
console.log(animals.indexOf('buhun', 2)); // => 4
console.log(animals.indexOf('giraffe')); // => -1


// JOIN
console.log('JOIN ME function');

// arr1 = [1 , 2 ,3] => 123

let funcJoin = (arr) => {
    let output = "";

    for (let i = 0; i < arr.length; i++){
        output = output + arr[i];
    }
    return output;
}

const arrayJoin = [1, 2, 3]
console.log(funcJoin(arrayJoin)) // => 123





let funJoin = (arr, symbol) => {
    let output = "";

    for (let i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            symbol = ''
        }
        output = output + arr[i] + symbol;
    }
    return output;
}

const arrJoin = [1, 2, 3]
console.log(funJoin(arrJoin, "+")) // => 1+2+3
console.log(funJoin(arrJoin, ",")) // => 1,2,3




console.log('array join method')
const jiguurten = ['Elee', 'Heree', 'Galuu'];
console.log(jiguurten.join()); // "Elee, Heree, Galuu"
console.log(jiguurten.join('')); // "EleeHereeGaluu"
console.log(jiguurten.join('-')); // "Elee-Heree-Galuu"



// arr1 = [1, 2, 3] => pop => [1, 2]
console.log("pop array function")
let popFunc = (arr) => {
    const lastIndex = arr.length -1;
    let poppedArray = []

    for(let i = 0; i < arr.length; i++){
        if (i != lastIndex){
            poppedArray.push(arr[i])
        }
    }

    return poppedArray;

}    

const popArray = [1, 2, 3]
console.log(popFunc(popArray)) // [1, 2]
console.log(popFunc([12, 4, 3, 5, 6])) //  [12, 4, 3, 5]

console.log('pop array method')
const popArrayResult = [3, 4 ,5 ,6 ,7]
popArrayResult.pop()
console.log(popArrayResult)     //  [3, 4, 5, 6]





// arr1 = [1, 2, 3] arr2 = [ 4, 5, 6] => arr3 = [5, 7, 9]

// function arrayElementAdd(arr1, arr2){
//     let sum = [];
//     for (let i = 0; i < arr1.length; i++){
//         sum[i] = arr1[i] + arr2[i]
//     }
//     return sum;
// }

// console.log(arrayElementAdd(arrayC1, arrayC2));

