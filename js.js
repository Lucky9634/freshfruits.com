




let searchBtn = document.querySelector('#searchIconbtn');
let searchCencelBtn = document.querySelector('.crossIcon');
let addSideBarBtn = document.querySelector('.manualBar');
let cencelSideBar = document.querySelector('.sideCrossIcon');

searchBtn.addEventListener('click', ()=>{
    document.getElementById("topSearch").style.top = "0%"
})
searchCencelBtn.addEventListener('click', ()=>{
    document.getElementById("topSearch").style.top = "-30%"
})
addSideBarBtn.addEventListener('click', ()=>{
    document.getElementsByClassName("sideBar")[0].style.left = "0%"
})
cencelSideBar.addEventListener('click', ()=>{
    document.getElementsByClassName("sideBar")[0].style.left = "-50%"
})



let newBagItems = [];
onload();

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



