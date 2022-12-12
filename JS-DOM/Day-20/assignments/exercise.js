console.log("Exercises");



console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);
document.getElementById("aimag-315").innerHTML = "Bavaria";

document.getElementById('aimagNames').style = "font-size: 60px;"

// document.getElementById('aimag-417').style = "background-color: blue; font-size: 50px; padding: 20px; padding: 20px; color: white; border-radius: 20px; text-align: center"
// document.getElementById('aimag-407').style = "color: red; font-size: 50px; padding: 20px;"
// document.getElementById('aimag-410').style = "color: pink; font-size: 50px; padding: 20px;"

// document.getElementById("aimag-408").style = "background-color: orange; border-radius:20px; padding: 20px; text-align: center; color: white"


// for(let i = 0; i < document.getElementsByClassName("khangai").length; i++){
//     document.getElementsByClassName('khangai')[i].style = "font-size:35px; background-color: magenta; border-radius: 20px; padding: 20px; margin: 10px; text-align: center; color: white"
// }



console.log(document.getElementById('aimagNames').id)

const liLength = document.getElementById("aimagNames").getElementsByTagName('li').length;

console.log(document.getElementById('aimagNames').getElementsByTagName("li")[liLength - 1].innerHTML)

console.log(document.getElementById("aimagNames").getElementsByTagName("span").innerHTML = "SPAN")





console.log(document.getElementById("aimagNames").getElementsByTagName('li')[0].id.includes("aimag-1"))

for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: magenta; border-radius: 20px; padding: 20px; margin: 10px; text-align: center; color: white; box-shadow: 10px 10px 10px lightpink; "
    }
}

console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-2'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: orange; border-radius: 20px; padding: 20px; margin: 10px; text-align: center; color: white"
    }
}


console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-3'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-3")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: lightblue; border-radius: 20px; padding: 20px; margin: 10px; text-align: center; color: white"
    }
}


console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-4'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-4")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: purple; border-radius: 20px; padding: 20px; margin: 10px; text-align: center; color: white"
    }
}

document.getElementById("aimag-522").style = "background-color: red; border-radius:20px; padding: 20px; text-align: center; color: white"



// --------------------------------------------------------------------------------

console.log(document.querySelector('#aimagNames'));
console.log(document.querySelector('.khangai'));


console.log(document.getElementsByClassName('khangai'));  // HTML Collection
console.log(document.querySelectorAll('.khangai'));       // NodeList

document.querySelector('#demo').innerHTML = 'Date : ' + Date();

document.querySelector('img').src = './img/cat.webp'

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
const h1 = document.querySelector("h1")
h1.appendChild(newDiv);


