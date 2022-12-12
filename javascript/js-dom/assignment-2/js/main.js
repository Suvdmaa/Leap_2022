let myButton = document.getElementById("btn");

function changeColors() {
    document.getElementById('changecolor1').style = "background-color: red"
    document.getElementById('changecolor2').style = "background-color: yellow"
}

myButton.addEventListener("click", changeColors)