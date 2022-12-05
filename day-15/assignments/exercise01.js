// Given number of arrays 1, 2, 5, 3, 5, 6, 7, 8
// Let's find out which numbers are even
// if number is even, then print out the number
// you have to use For loop

let number =[1, 2, 5, 3, 5, 6, 7, 8];

for(let count = 0; count < number.length; count++ ){
    if(number[count] % 2 == 0){
        console.log(number[count]);
    }
}

// example 
console.log(number);

number[3] = 6;
console.log(number);

let playerNames = ["salah", " mane", "becker", "diaz"];
playerNames[1] = "khangai";
console.log(playerNames);

// Given numbers of arrays = 1, 2, 5, 3, 5, 6, 7, 8
// output new arrays = 2, 3, 6, 4, 6, 7, 8, 9
// Array item value change                   !!!!! GERTEE OCHOOD BICHEEREI 
 
let newArrays = [1, 2, 5, 3, 5, 6, 7, 8];
console.log(newArrays);

for(let a = 0; a < newArrays.length; a++){
    console.log(newArrays[a]);
    newArrays[a] = newArrays[a] + 1;
}



// Simple Array - 1
let itCompanies = ["Facebook ", "Google ", "Microsoft ", "Apple ", "IBM ", "Oracle ", "Amazon "];

console.log(itCompanies);
console.log(itCompanies.length);

console.log("Space.................");

console.log(itCompanies[0]);
console.log(itCompanies[Math.ceil(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

console.log("Space.................");

for(let count = 0; count < number.length; count++){
    if(count < itCompanies.length){
        console.log(itCompanies[count]);
    }
}

console.log("Space................");

for(let i = 0; i < itCompanies.length; i++){
    if(i < itCompanies.length){
        console.log(itCompanies[i].toUpperCase());
    }
}

console.log("Space................");


// for(let i = 0; i < itCompanies.length; i++){
//     if(i < itCompanies.length){
//         comsole.log = (itCompanies[i] + " ")
//     }
// }



console.log(itCompanies + " " + "зэрэг мэдээллийн технологийн томоохон компаниуд");