let objItem;


products = null;

fetch('products.json').then(responce => responce.json()).then(data => {
    products = data;
    findBagItemObj();
})



function findBagItemObj() {
    objItem = newBagItems.map(product => {
        for (let i = 0; i < products.length; i++) {
            if (product == products[i].id) {
                return products[i];
            }
        }
    })
    displayBagItemHtml();
}


function displayBagItemHtml() {
    let productsItems = document.querySelector('.productsItems');
    let productSummary = document.querySelector('.productSummary');

    let newHtml1 = "";

    objItem.forEach(product => {
        newHtml1 += generateBagItemHtml(product);
    })
    productsItems.innerHTML = newHtml1;



    let newHtml2 = generateSummaryHtml();
    if(objItem.length <= 0){
        productSummary.style.display = "none";
    }else{
        productSummary.innerHTML = newHtml2;
    }
   
}

function generateBagItemHtml(product) {
    return `
    <div class="container">
    <div class="img-pro">
        <img src="${product.productImg}" alt="loading...">
    </div>
    <div class="pro-tags">
        <div class="pro-name">${product.productName}</div>
        <div class="pro-newPrice">Rs${product.productPrice} /kg</div>
        <div class="reviewPro">${product.review}</div>
        <div class="pro-benifit">${product.Benifits}</div>
    </div>
    <div class="removeBtn"><i class="fa-solid fa-xmark bagItemRomoveBtn" onclick="removeBagItem(${product.id})"></i></div>   
    </div>
    `
}







function generateSummaryHtml(){

    let total_MRP = 0;
    let discount = 0;
    let Convenience_fee = 99;
    let total_Amount = 0;
    
    objItem.forEach(product =>{
        total_MRP += product.productPrice;
    })
    
    if(total_MRP > 0 && total_MRP < 1800){
        discount = Math.ceil((total_MRP * 10 )/100);
    }else if (total_MRP > 1800 && total_MRP < 2500){
        discount = Math.ceil((total_MRP * 15 )/100);
    }else{
        discount = Math.ceil((total_MRP * 20 )/100);
    }

    total_Amount = total_MRP - discount + Convenience_fee;

    return `
    <div class="totalItems">Price Details (${objItem.length} Items)</div>
    <div class="itemSome">
        <div class="first"><span class="total-Mrp">Total MRP</span><span class="total-Mrp">Rs.${total_MRP}</span></div>
        <div class="first"><span class="total-Mrp">Discount on MRP</span><span class="total-Mrp">-Rs.${discount}</span></div>
        <div class="first newScond"><span class="total-Mrp">Convenience Fee</span><span class="total-Mrp">Rs.${Convenience_fee}</span></div>
        <div class="first total-Amount "><span class="">Total Amount</span><span class="total-Mrp">Rs.${total_Amount}</span></div>
    </div>
    <button><a href="#">place Order</a></button>
    `
}

function onload(){
    let newBagItemStr = localStorage.getItem('newBagItems');
    newBagItems = newBagItemStr ? JSON.parse(newBagItemStr) : [];
    showProductBag()
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



function removeBagItem(bagId){
    newBagItems = newBagItems.filter(productId => productId !== bagId);
    localStorage.setItem('newBagItems', JSON.stringify(newBagItems));
    findBagItemObj()
    showProductBag()
    displayBagItemHtml();

}
