let num = Number(prompt("Give number for row of pyramid"));     //  row of pyramid


// Loop

for(let i = 0; i < num; i++){
    let b = "";
    // zai hevleh
    for(let j = 1; j < num-i; j++){  
        b = b + " ";
    }

    // od hevleh
    for (let a = 1; a <= 2 * i + 1; a++){
        b = b + "*";
    }
    console.log(b)
}

