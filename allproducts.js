


let products = null;

fetch('products.json').then(responce => responce.json()).then(data =>{
    products = data;
    console.log(products)
    addHtmlAllProducts();
})

let itemAllProduct = document.querySelector('.itemAllProduct');

function addHtmlAllProducts(){
    products.forEach(product =>{
        let newElement = document.createElement('a');
        // newElement.href = "details.html?id=" + product.id;
        // newElement.classList.add("itemsStyle");

     
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
        itemAllProduct.appendChild(newElement);

    })
}


// Add Product In newBagItems 
onload()
function onload(){
    let newBagItemStr = localStorage.getItem('newBagItems');
    newBagItems = newBagItemStr ? JSON.parse(newBagItemStr) : [];
    showProductBag()
}


function productAddToBag(productId){
    newBagItems.push(productId);
    localStorage.setItem('newBagItems', JSON.stringify(newBagItems));
    showProductBag();
    console.log(newBagItems);
}



function showProductBag(){
    let bagIcon = document.querySelector('.bag-item');

    if(newBagItems.length > 0){
        bagIcon.style.visibility = 'visible';
        bagIcon.innerText = newBagItems.length;
    }else{
        bagIcon.style.visibility = 'hidden';
    }
}

showProductBag();
