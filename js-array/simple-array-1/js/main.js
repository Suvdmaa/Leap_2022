let itCompanies = ["Facebook ", "Google ", "Microsoft ", "Apple ", "IBM ", "Oracle ", "Amazon "];

console.log(itCompanies);
console.log(itCompanies.length);

console.log("Next...........................");

console.log(itCompanies[0]);
console.log(itCompanies[Math.ceil(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

console.log("Next...........................");

for(let count = 0; count < number.length; count++){
    if(count < itCompanies.length){
        console.log(itCompanies[count]);
    }
}

console.log("Next...........................");

for(let i = 0; i < itCompanies.length; i++){
    if(i < itCompanies.length){
        console.log(itCompanies[i].toUpperCase());
    }
}

console.log("Next............................");


console.log(itCompanies + " " + "зэрэг мэдээллийн технологийн томоохон компаниуд");