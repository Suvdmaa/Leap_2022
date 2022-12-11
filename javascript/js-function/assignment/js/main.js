// Declare a function  and it print out your full name.
function fullName(){
    console.log("Enkhbold Suvdmaa");
}
fullName();

// Declare a function  and now it takes firstName, lastName as a parameter and it returns your full - name.
let nameExample = function (firstName, lastName){
    return firstName + lastName
}


console.log(nameExample("Suvdmaa ", "Enkhbold"))

// Declare a function  and it takes two parameters and it returns sum.
function exampleNumber (p1, p2){
    return p1 + p2
}

console.log(exampleNumber(4, 5))

// An area of a rectangle is calculated as follows: . Write a function which calculates .

function areaRectangle (length, width){
    return length * width
}

console.log(areaRectangle(7, 4))

// A perimeter of a rectangle is calculated as follows: . Write a function which calculates .
function perimeterRectangle (length, width){
    return (length + width) * 2;
}

console.log(perimeterRectangle(14, 6))