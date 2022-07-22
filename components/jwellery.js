const jwellery = [
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay2.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay3.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay4.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay5.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay6.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay7.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay8.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay9.jpg",
    }
    ,
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay10.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay11.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay12.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay13.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay14.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay15.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay16.jpg",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay17.png",
    },
    {
        type: "Earings",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/earings/clay18.png",
    }

];

function productIterator(jwellery){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<jwellery.length
            ?{value: jwellery[nextIndex++],done: false}
            :{done: true};
        },
    };
}



let verticalScroller = document.getElementById("vertical-Scroller");
console.log(jwellery.length);
let product=productIterator(jwellery);

for(let i=0;i<jwellery.length;i++){
let currentProduct=product.next().value;
let showcase=document.createElement('div');
showcase.classList.add('showcase');
showcase.innerHTML=`
                  <div class="showcase-img">
                    <img src="${currentProduct.image}" alt="showcaseimg" class="showcase-img">
                  </div>
                  <div class="showcase-content">
                    <h3 class="Pink-color"> ${currentProduct.type}</h3>
                    <p>${currentProduct.details}</p>
                    <p>&#8377; ${currentProduct.price}</p>
                  </div>
                `;
verticalScroller.appendChild(showcase);
console
}
