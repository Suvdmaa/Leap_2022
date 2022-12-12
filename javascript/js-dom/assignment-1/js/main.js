//Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх

console.log(document.getElementById('aimag-101').innerHTML);

// Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх

const liLength = document.getElementById('aimagNames').getElementsByTagName('li').length;
console.log(document.getElementById('aimagNames').getElementsByTagName('li')[liLength - 1].innerHTML);

// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх

console.log(document.getElementById('aimag-315').innerHTML);


// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)
// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.
console.log(document.getElementById("aimagNames").getElementsByTagName('li')[0].id.includes("aimag-1"))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: #ff6a80; border-radius: 20px; padding: 20px; margin: 30px; text-align: center; color: white; box-shadow: 10px 10px 10px lightpink; "
    }
}

console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-2'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: orange; border-radius: 20px; padding: 20px; margin: 30px; text-align: center; color: white; box-shadow: 10px 10px 10px #ffca89"
    }
}

console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-3'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-3")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: lightblue; border-radius: 20px; padding: 20px; margin: 30px; text-align: center; color: white; box-shadow: 10px 10px 10px #d4ebf2"
    }
}

console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-4'))

for(let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-4")){
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = "font-size: 40px; background-color: #ff4e4e; border-radius: 20px; padding: 20px; margin: 30px; text-align: center; color: white; box-shadow: 10px 10px 10px #ff9b9b"
    }
}

document.getElementById("aimag-522").style = "font-size: 40px; background-color: red; border-radius:20px; padding: 20px; margin: 30px;text-align: center; color: white"



