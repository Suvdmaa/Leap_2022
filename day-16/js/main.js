let array = [1, 4, 5, 6, 8, 10, 3, 2, 10 , 9, 8];


// for(let i = 0; i < array.length; i++){
//     if(isEven(array[i])){
//         array[i] = array[i] + 4;
//     } 
//     if(i % 2 == 0){  
//         array[i] = array[i] - 5;
//     }
    
// }
console.log(array);

function isEven(x){
    // console.log("the number is " + x)
    if(x % 2 == 0){
        // console.log("it is an even number")
        return true;
    } else {
        // console.log("it is an odd number")
        return false;
    }

 
} 
console.log(isEven(array[0]));
console.log(isEven(array[1]));

// isEven(5);
// isEven(100);
// isEven(array[0])

// addTwoNumbers(x, y) = x + y

function addTwoNumbers(x, y){
    return x + y;
}
console.log(addTwoNumbers(4, 5))

function multiplyTwoNumbers(x, y){
    return x * y
}
console.log(multiplyTwoNumbers(4, 5))

function multiplyThreeNumbers(x, y, z){
    const m = x * y * z;
    return m;
}
const result = (multiplyThreeNumbers(4, 5, 6));
console.log(result);




for(let i = 0; i < array.length; i++){
    if(isEven(array[i])){
        array[i] = array[i] + 4;
    } 
    if(i % 2 == 0){  
        array[i] = array[i] - 5;
    }
}
console.log(array)

console.log(Math.sqrt(4));

