// ex01 JS Methods

// EXERCISE 1
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log(shoppingCart)

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes("Meat") ){
    shoppingCart.unshift("Meat");
    
}

console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar");
}

console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "Green tea")
console.log(shoppingCart)


// EXERCISE 2---------------------------------------------------------

let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] 
console.log(array)

// Sort the array using  method
array.sort();
console.log(array)

// Reverse the array using  method
array.reverse();
console.log("reversed: ", array)

// Remove the first IT company from the array

array.shift();
console.log(array);

// Remove the middle IT company or companies from the array
arr = array.length/2;
array.splice(arr,1);
console.log(array);


// Remove the last IT company from the array
array.pop();
console.log(array);

// Remove all IT companies
array.splice(0);
console.log(array);

// EXERCISE 3 -------------------------------------------------------
let carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];


//1. машины брэндийн эхний үсгээр хайх
let search = prompt("Машины брэндийг эхний үсгээр өгөөрэй").toLowerCase();

if(search == "a"){
    console.log(`brand: ${carBrands[0][0]} \ncountry: ${carBrands[0][1]} \nyear: ${carBrands[0][2]}`);
    console.log(`brand: ${carBrands[1][0]} \ncountry: ${carBrands[1][1]} \nyear: ${carBrands[1][2]}`);
} else if (search == "b"){
    console.log(`brand: ${carBrands[2][0]} \ncountry: ${carBrands[2][1]} \nyear: ${carBrands[2][2]}`);
} else if (search == "c"){
    console.log(`brand: ${carBrands[3][0]} \ncountry: ${carBrands[3][1]} \nyear: ${carBrands[3][2]}`);
} else if (search == "d"){
    console.log(`brand: ${carBrands[4][0]} \ncountry: ${carBrands[4][1]} \nyear: ${carBrands[4][2]}`);
} else if (search == "f"){
    console.log(`brand: ${carBrands[5][0]} \ncountry: ${carBrands[5][1]} \nyear: ${carBrands[5][2]}`);
} else if (search == "h"){
    console.log(`brand: ${carBrands[6][0]} \ncountry: ${carBrands[6][1]} \nyear: ${carBrands[6][2]}`);
} else if (search == "j"){
    console.log(`brand: ${carBrands[7][0]} \ncountry: ${carBrands[7][1]} \nyear: ${carBrands[7][2]}`);
} else if (search == "l"){
    console.log(`brand: ${carBrands[8][0]} \ncountry: ${carBrands[8][1]} \nyear: ${carBrands[8][2]}`);
} else {
    console.log("олдсонгүй")
}


//2. машины үйлвэрлэсэн улсаар хайх
let searchCity = prompt("Машины үйлвэрлэсэн улсаар хайх")

if(searchCity == "USA" || searchCity == "usa"){
    console.log(carBrands[3]);
    console.log(carBrands[4]);
} else if (searchCity == "UK" || searchCity == "uk"){
    console.log(carBrands[0]);
    console.log(carBrands[7]);
} else if (searchCity == "Germany" || searchCity == "germany"){
    console.log(carBrands[1]);
    console.log(carBrands[2]);
} else if (searchCity == "Italy" || searchCity == "italy"){
    console.log(carBrands[5]);
    console.log(carBrands[8]);
} else {
    console.log("олдсонгүй")
}

// 3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах
let length = shoppingCart



// EXERCISE 4 -------------------------------------------------
let arrNumber = [4, 5, 3, 6, 1];
arr = arrNumber.reverse();
console.log(arr)