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
let search = prompt("Машины брэндийг эхний үсэг өгөөрэй").toUpperCase();

function searchBrand (a){
    for(let i = 0; i < carBrands.length; i++){
        if(carBrands[i][0][0] == a){ 
            console.log(`brand: ${carBrands[i][0]} \ncountry: ${carBrands[i][1]} \nyear: ${carBrands[i][2]}`);
        } 
    }
}

searchBrand(search);

//2. машины үйлвэрлэсэн улсаар хайх
let search1= prompt("Машины үйлвэрлэсэн улсаар хайх");

function searchCity (b){
    for(let i = 0; i < carBrands.length; i++){
        if(carBrands[i][1] == b){
            console.log(carBrands[i]);
        }
    }
}
 searchCity(search1);



// 3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах
let sumUK = 0; sumGer = 0; sumUSA = 0; sumIT = 0; sumJ = 0;

 for (let i = 0; i < carBrands.length; i++){
    if(carBrands[i][1] == "UK"){
        sumUK++;
    } else if (carBrands[i][1] == "Germany"){
        sumGer++;
    } else if (carBrands[i][1] == "USA"){
        sumUSA++;
    } else if (carBrands[i][1] == "Italy"){
        sumIT++;
    } else if (carBrands[i][1] == 'Japan'){
        sumJ++;
    }
 }

console.log(`Нийт ${carBrands.length} мөр дата, UK-${sumUK}, Germany-${sumGer}, USA-${sumUSA}, Italy-${sumIT}, Japan-${sumJ}`)