let allProduct = [];
const container = document.querySelector('#product-container');

async function callProduct() {
    const fetchedData = await fetch('https://dummyjson.com/products')
    const fetchedJSON = await fetchedData.json();
    allProduct = fetchedJSON.products;
    
    console.log(allProduct)
    container.innerHTML = '';
    allProduct.map((element) => {
        container.innerHTML += getProducts(element)
    })
}

callProduct()

function getProducts(data){
    return `
    <div id="product-card">
      <img id="image" style="background-image: url(${data.images[0]}) ">
      <div id="about">
         <h3 id="title">${data.title}</h3>
         <p id="price">$${data.price}</p>
         <p id="discount">-${data.discountPercentage}%</p>
      </div>
    </div>`
}

async function search(){
    const searchField = document.querySelector("#search-field");

    const searchResult = allProduct.filter(product =>{
        return product.category.includes(searchField.value)
    })

    container.innerHTML = "";
    let result = "";
    searchResult.map((element) =>{
        result += getProducts(element)
    })

    container.innerHTML = result;
}







