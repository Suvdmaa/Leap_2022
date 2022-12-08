// Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.

let itCompanies = ["Facebook ", "Google ", "Microsoft ", "Apple ", "IBM ", "Oracle ", "Amazon "];
console.log(itCompanies);

// Array - аас эхний 3 компанийг хайчилж ав
console.log(itCompanies[0], itCompanies[1], itCompanies[2],);

// Array - аас сүүлийн 3 компанийг хайчилж ав
console.log(itCompanies[itCompanies.length - 1], itCompanies[itCompanies.length - 2] ,itCompanies[itCompanies.length - 3],);

// Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
arr = itCompanies.length / 2
itCompanies.splice(arr, 1);
console.log(itCompanies);

// Эхний мэдээллийн технологийн компанийг array - аас хас
itCompanies.shift();
console.log(itCompanies);



// Сүүлийн мэдээллийн технологийн компанийг array - аас хас
itCompanies.pop();
console.log(itCompanies);
