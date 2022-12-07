// Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.

let itCompanies = ["Facebook ", "Google ", "Microsoft ", "Apple ", "IBM ", "Oracle ", "Amazon "];

// Array - аас эхний 3 компанийг хайчилж ав
console.log(itCompanies[0], itCompanies[1], itCompanies[2],);

// Array - аас сүүлийн 3 компанийг хайчилж ав
console.log(itCompanies[itCompanies.length - 1], itCompanies[itCompanies.length - 2] ,itCompanies[itCompanies.length - 3],);

// Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}

// Эхний мэдээллийн технологийн компанийг array - аас хас
itCompanies.shift();
console.log(itCompanies);

// Сүүлийн мэдээллийн технологийн компанийг array - аас хас
itCompanies.pop();
console.log(itCompanies)
