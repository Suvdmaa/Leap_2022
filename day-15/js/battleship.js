/**
*Game setup
*
*user should guess a number 
*
*we need to create new ship on the board
*
* | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
* | x | x | 0 | 0 | x | x | x |
*
*/

// let guesses = 0;
// let isSunk = false;
// let hit = 0;

let locations = [false, false, true, true, true, false, false];

for(let count = 0; count < locations.length ; count++){
    console.log(locations[count]);
}




while(!isSunk){
    console.log("Game begins");

    let userGuess = Number(prompt("Give me your position?"));
    guesses = guesses + 1;
    if(guesses > 6){
        console.log(guesses);
        break;
    }

    console.log(guesses);
    if(userGuess > 0 && userGuess < 7){
        console.log(userGuess);
        if(location1 == userGuess || location2 == userGuess || location3 == userGuess){
            hit = hit + 1;
            alert("Hit");
             // if you hit the location1
            if(location1 == userGuess){
                location1 == -1;
            }
            if (location2 == userGuess){
                location2 == -1;

            }
            if (location3 == userGuess){
                location3 == -1;
            } 
         } else {
            alert("Miss");
         }
         console.log(hit);
         if (hit == 3){
           isSunk = true;
          } 
        } else {
            alert("Give me numbers between 0 and 6");
        }
    } 
// game loop is ended
if (isSunk && guesses < 6){
    alert("You won");
} else if (guesses > 6){
    alert("You Lost");
} else {
    alert("You Lost");
}

console.log("Game ends");