console.log("events")

let myButton = document.getElementById('myButton');

console.log(myButton);

function changeBackgroundColor () {
    myButton.style = "background-color: green"
    }

function changeBackgroundColorWhite () {
        myButton.style = "background-color: white"
        }

// changeBackgroundColor();

myButton.addEventListener('click', changeBackgroundColor)

// let click1 = myButton.addEventListener('click');


// if (myButton.addEventListener('click') == click1){ 
//     myButton.addEventListener('click',changeBackgroundColor)
// } else {
//     myButton.addEventListener('click',changeBackgroundColorWhite)
// }


let color = "green";

function changeBackgroundColor() {

}

function changeColors(){
    console.log('clicked');
    if(color === 'green'){
        myButton.style = `background-color: ${color}`;
        color = 'white';
    } else {
        myButton.style = `background-color: ${color}`;
        color = 'green';
    }
}

// myButton.addEventListener('click', changeColors);


let arrowFunc = () => {

}

myButton.addEventListener('click', () => {
    myButton.style = 'background-color: red;'
})

let registerButton = document.querySelector('#register');
registerButton.disabled = true;

// ------------------------------------------------------------------------