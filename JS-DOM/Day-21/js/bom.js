console.log('bom js');
console.log(window)

// window.alert("Hello");

// window.open("https://google.com", "Hello")

// window.confirm("Hello");

// let result = window.confirm("Do you wanna to Quit?");
// console.log(result);

// let result1 = confirm('Та устгахдаа итгэлтэй байна уу ?');
// let message = result1 ? 'Та OK товчийг дарлаа' :
// 'Та Cancel товчийг дарсан';
// alert(message);


let alertBtn = document.getElementById('alertBtn');
let cancelBtn = document.getElementById('cancelBtn');
let timeoutID;


alertBtn.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!')
})

cancelBtn.addEventListener('click', () =>{
    console.log(timeoutID);
    window.clearTimeout(timeoutID)
})

console.log(timeoutID);

setTimeout (() => {
    console.log('Time out is running')
}, 5000)


/// timer / start my timer

let counter = 0;

let startMyTimer = document.getElementById('clickbtn')
startMyTimer.addEventListener('click', runTimerInterval)

function runTimerInterval (){
    window.setInterval(startInterval, 1000);
}


function startInterval(){
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now.getSeconds();
    console.log("timer start")
}





