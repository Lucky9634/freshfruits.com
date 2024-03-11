
let products = null;
let appleProduct;

fetch('products.json').then(responce => responce.json()).then(data =>{
    products = data;
    console.log(products)
    appleProduct = products.filter(product =>{
        if(product.category == "Grapes"){
            return product.category;
        }
    });
    appleProductAddHtml();
})



let itemGrapes = document.querySelector('.itemGrapes');

function  appleProductAddHtml (){
    appleProduct.forEach(product =>{
        let newElement = document.createElement('a');
        // newElement.href = "details.html?id=" + product.id;
        // newElement.classList.add('itemsStyle');

        newElement.innerHTML = `
        <div class="product-item">
            <img src="${product.productImg}" alt="loading..">
            <div class="pro-Name">${product.productName}</div>
            <div class="pro-Price">
                <span class="price">Rs. ${product.productPrice}/kg </span> <span class="rating">${product.review}</span>
            </div>
            <div class="pro-Benifis">${product.Benifits}</div>
            <div class="buyBtn">
                <button class="first" onclick="productBuyNow()">Buy Now</button> <button class="second" onclick="productAddToBag(${product.id})">Add To Card</button>
            </div>
        </div>
        
        `
        itemGrapes.appendChild(newElement);

    });
}




function productAddToBag(productId){
    newBagItems.push(productId);
    localStorage.setItem('newBagItems', JSON.stringify(newBagItems));
    showProductBag();
    console.log(newBagItems);
}