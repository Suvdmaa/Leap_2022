const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log(shoppingCart)

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes("Meat") ){
    shoppingCart.unshift("Meat");
    
}

console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar");
}

console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "Green tea")
console.log(shoppingCart)