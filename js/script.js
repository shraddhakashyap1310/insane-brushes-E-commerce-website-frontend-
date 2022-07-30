// mobile navigation menu

let mobileMenuBtn=document.getElementById("mobile-menu-btn");
let mobileNav=document.getElementsByClassName("mobile-side-nav")[0];
let menuCloseBtn=document.getElementById('menu-close-btn');


mobileMenuBtn.addEventListener('click',function(){
    mobileNav.classList.add('active');
})

menuCloseBtn.addEventListener('click',function(){
    mobileNav.classList.remove('active');
})

function addActive(categoryBtn){
    categoryBtn.nextElementSibling.classList.toggle("active");
}



//login popup

let logindiv1=document.getElementsByClassName("login");
let logindiv2=document.getElementsByClassName("login-back");

window.onload=setTimeout(popup,5000);
let loginBtn=document.getElementsByClassName("header-top-login");
loginBtn[0].addEventListener("click",popup);
function popup(){
    logindiv1[0].classList.remove("hidden");
    logindiv2[0].classList.remove("hidden");
}

let loginCloseBtn=document.getElementById("login-close-btn");
loginCloseBtn.addEventListener('click',close);
function close(){
    logindiv1[0].classList.add("hidden");
    logindiv2[0].classList.add("hidden");
}




//showcases

const topDeals = [
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay3.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/3.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/4.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/5.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay11.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/7.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/8.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/9.jpg",
        refrence: "../components/product.html",
    }
    ,
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/10.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/11.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/12.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/13.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/14.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/15.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/16.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/17.jpg",
        refrence: "../components/product.html",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/1.jpg",
        refrence: "../components/product.html",
    }

];

function productIterator(topDeals){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<topDeals.length
            ?{value: topDeals[nextIndex++],done: false}
            :{done: true};
        },
    };
}



let verticalScroller = document.getElementById("vertical-Scroller");
console.log(topDeals.length);
let product=productIterator(topDeals);

for(let i=0;i<topDeals.length;i++){
let currentProduct=product.next().value;
let showcase=document.createElement('div');
showcase.classList.add('showcase');
showcase.innerHTML=`
                    <a href="${currentProduct.refrence}">
                  <div class="showcase-img">
                    <img src="${currentProduct.image}" alt="showcaseimg" class="showcase-img">
                  </div>
                  <div class="showcase-content">
                    <h3 class="Pink-color"> ${currentProduct.type}</h3>
                    <p>${currentProduct.details}</p>
                    <p>&#8377; ${currentProduct.price}</p>
                  </div>
                  </a>
                `;
verticalScroller.appendChild(showcase);
console
}
