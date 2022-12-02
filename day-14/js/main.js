console.log('Day 14');
console.log('find out even numbers from 1 to 10');

const max  = 10;
let start = 1;

while(start <= 10){
    if(start%2 == 0){
        console.log(start);
    }
    start++;
}
    

console.log("Print out all ood numbers from 1 to 20")
let count = 1;

while(count <= 20){
    if(count % 2 != 0){
        console.log(count);
    }
    count = count + 1;
}


console.log("Life is beautiful");
 let str = 'Life is beautiful';
 let countMin= 0;

 while(countMin <= str.length){
    console.log(str.charAt(countMin));
    countMin = countMin + 1;
 }


console.log('for version');
for(let i = 1; i <= 10 ; i++ ){
    if(i % 2 == 0){
       console.log(i); 
    }
}

let a = "Life is beautiful";
for(let b = 1; a <= a.length; a++){
    console.log(a.charAt(a));
}
