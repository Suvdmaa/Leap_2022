const productList = `https://dummyjson.com/products/1`

fetch(productList)
.then(result => result.json())
.then(data => {
    console.log(data)
})

