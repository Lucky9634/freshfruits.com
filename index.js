

let products = null;
fetch("products.json").then(responce => responce.json()).then(data =>{
    products = data;
    showHtmlproduct();
})

let itemHtml = document.querySelector(".item");
function showHtmlproduct(){
    if(itemHtml == null) return;
    products.forEach((product , index) =>{
        if(index < 8){
        let newElement = document.createElement('a');
        newElement.href = "details.html?id=" + product.id;
        newElement.classList.add("itemsStyle");

        newElement.innerHTML = `
        <div class="product-item">
            <img src="${product.productImg}" alt="loading..">
            <div class="pro-Name">${product.productName}</div>
            <div class="pro-Price"><span class="price">Rs. ${product.productPrice}/kg </span><span class="rating">${product.review}</span>
            </div>
            <div class="pro-Benifis">${product.Benifits}</div>
        `
        itemHtml.appendChild(newElement);
        }

    })
}