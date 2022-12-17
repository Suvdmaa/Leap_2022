// тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
// жишээ нь: Input: 120, 33, 10, 12 output: 10

let a = 120, b = 22, c = 10, d = 12;

if (a < b && a < c && a < d){
    console.log(a)
} else if (b < a && b < c && b < d){
    console.log(b)
} else if (c < a && c < b && c < d){
    console.log(c)
} else if (d < a && d < b && d < c){
    console.log(d)
}



