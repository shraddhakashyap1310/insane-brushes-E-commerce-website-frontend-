const jwellery = [
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/2.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/3.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/4.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/5.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/6.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/7.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/8.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/9.jpg",
    }
    ,
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/10.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/11.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/12.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/13.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/14.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/15.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/16.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/17.jpg",
    },
    {
        type: "Pallete",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/pallete/1.jpg",
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
