//** 3-н хувьсагч зарлана уу. (a, b ,c)
// Дурын тоон утгууд хувьсагчдад онооно уу

let a = 30, b = 46, c = 12;


// Дараа нь тухайн өгөгдсөн хувьсагчдаас хамгийн их утгатай хувьсагчийг console дээр хэвлэнэ үү

if(a > b && a > c){
    console.log(a)
} else if (b > c && b > a){
    console.log(b)
} else if (c > a && c > b){
    console.log(c)
}

// Бас тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
 if(a < b && a < c){
    console.log(a)
 } else if (b < a && b < c){
    console.log(b)
 } else if (c < a && c < b){
    console.log(c)
 }

// Тухайн утгууд нь хоорондоо бас тэнцүү байж болохыг анхаарна уу. Жишээ нь a = 5, b = 5, c = 5. Тэгвэл хамгийн их болон хамгийн бага утгууд нь 5 байна. */

let d = 5 , e = 5 , f = 1;

if (d === e || d === f){
    console.log(d)
} else if (e === d || e === f){
    console.log(e)
} else if (f === a || f === d){
    console.log(f)
}