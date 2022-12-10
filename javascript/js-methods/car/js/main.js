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

// //1. машины брэндийн эхний үсгээр хайх
// let search = prompt("Машины брэндийг эхний үсэг өгөөрэй").toUpperCase();

// function searchBrand (a){
//     for(let i = 0; i < carBrands.length; i++){
//         if(carBrands[i][0][0] == a){ 
//             console.log(`brand: ${carBrands[i][0]} \ncountry: ${carBrands[i][1]} \nyear: ${carBrands[i][2]}`);
//         } 
//     }
// }

// searchBrand(search);

// //2. машины үйлвэрлэсэн улсаар хайх
// let search1= prompt("Машины үйлвэрлэсэн улсаар хайх");

// function searchCity (b){
//     for(let i = 0; i < carBrands.length; i++){
//         if(carBrands[i][1] == b){
//             console.log(carBrands[i]);
//         }
//     }
// }
//  searchCity(search1);

// 3. нийт хэдэн ширхэг мөр дата байгаа, хэдэн улсын brand байгааг харуулах

let count = {};
let sum = '';


carBrands.forEach(element => {
    for(let i = 0; i < carBrands.length; i++){
        count[element] = (count[element] || 0) + 1
      
    }
})

console.log(count)


for(let i = 0; i < carBrands.length; i++){
    if(carBrands[i][1]){
        sum = carBrands[i][1];
        console.log(sum)
    }
}











console.log(`Нийт ${carBrands.length} мөр дата,`)
/// 


