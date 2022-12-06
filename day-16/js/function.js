console.log("my function");

// function declaration - функцыг todorhoiloh
function f(){
    console.log("Hello function");
}
f()

// function call - функцыг duudah
f();

// 1. 



/*****
 * f(x) = x * x => x is parameter буюу функцыг gadnaas avdag huvisagch
 */

// -------------------------
function f1 (x){
    console.log(x * x);
}

f1(5);

// ------------------------------------
function f2 (x,y){
    console.log( Math.pow(x + y, 2));
}

f2(2,3)

// ---------------------------------------
function f3 (x,y){
    console.log(Math.pow(x + y, 2) + (2 * x * y));
}

f3(4,5);

// ---------------------------------------
function E(m, c){
    console.log(m * Math.pow(c, 2));
}

const C = 300000;

E(78, C)
E(68, C);

// ----------------------------------------
function f4 (x){
    console.log(Math.pow(x, 3) + Math.pow (x, 2) + (5 * x) +12)
}

f4(2);

// 4. f(x) = x!
function factorial (x){
    let multiplication = 1;
    for (let i =1; i <= x; i++){
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}

factorial(5);

//   -------------------
function f5(x){
    console.log(Math.pow(x, 2))
}

f5(6);

// ---------------------
function f6(x){
    console.log(Math.cos(x) - Math.sin(x))
}

f6(5)

// -----------------------
function f7(x){
    console.log(Math.sqrt(x))
}

f7(49)