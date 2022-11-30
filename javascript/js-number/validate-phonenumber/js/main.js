const phoneNumber = prompt("Write your number (with +976)");
const fullNumber = phoneNumber.substr(4,12);
const firstFourNumber = phoneNumber.substr(0, 4);

console.log(fullNumber);
console.log(firstFourNumber);


if(firstFourNumber == "+976" && Number.isInteger(Number(fullNumber)) && phoneNumber.length == 12) {
    console.log("та монгол улсын утасны дугаарыг зөв орууллаа");
} else {
    console.log("та монгол улсын утасны дугаарыг буруу орууллаа");
}

