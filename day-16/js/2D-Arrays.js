/****
 * Problem
 * 
 * Example-1: BAttleship
 * 
 * | 0 | 0 | 0 | x | x | x | 0|
 * | 0 | 0 | 0 | x | x | x | 0|
 * | 0 | 0 | 0 | x | x | x | 0|
 * | 0 | 0 | 0 | x | x | x | 0|
 * | 0 | 0 | 0 | x | x | x | 0|
 * | 0 | 0 | 0 | x | x | x | 0|
 * 
 * 
 * Example - 2: Tic Tac Toe
 * 
 * | col1 | col2 | col3 |
 * 
 * |   x  |   0  |   x  | => row1
 * |   0  |   0  |   x  | => row2
 * |   x  |   x  |   0  | => row3
 * 
 * 
 * 
 */
let row1 = ["x", 'o', 'x'];
let row2 = [ 'o', 'o' ,'o'];
let row3 = ['x', 'x', 'o'];
console.log(row1);
console.log(row2);
console.log(row3);



let tictactoe = [ ["x", 'o', 'x'], [ 'o', 'o' ,'o'], ['x', 'x', 'o'] ];
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);


// input-eer tuhain tictactoe-iin baganin bolood moriin indeksiig 
// daraalluulj avaad 3 dahi udaad ni yugaar solihiig ni ugnu

let x = Number(prompt("Give me x"));
let o = Number(prompt("Give me o"));

let value = prompt("Give values");
tictactoe[x][o] = value;



console.log('for loop with for loop')
// tictactoe-ийн бүх мөрний elementuudiig hevlej haruulna uu
for(let i = 0; i < tictactoe.length; i++){
    // console.log(tictactoe[i]);
    // double For Loops
    let output = ' '
    for(let j = 0; j < tictactoe[i].length; j++){
        output = output + '|' + tictactoe[i][j] + '|';
    }
    console.log(output);
}









