let number = Number(prompt("Give me a number"));

let a , b , temp = 0;
b = number;

while(number > 0){
    a = number % 10;
    number =parseInt(number / 10);
    temp = temp * 10 + a;
}

if ( temp == b){
    alert("It is palindrome number")
} else {
    alert("It's not palindrome number")
}