const clothes = [
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/1.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/3.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/4.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/5.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/6.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/7.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/8.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/9.jpg",
    }
    ,
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/10.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/11.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/12.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/13.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/14.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/15.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/16.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/17.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/2.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/18.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/19.jpg",
    },
    {
        type: "Clothes",
        details: "Polyster clay earings|Pink Color|Rainbow shape",
        price: "500",
        image: "../images/clothes/20.jpg",
    }

];

function productIterator(clothes){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<clothes.length
            ?{value: clothes[nextIndex++],done: false}
            :{done: true};
        },
    };
}



let verticalScroller = document.getElementById("vertical-Scroller");
console.log(clothes.length);
let product=productIterator(clothes);

for(let i=0;i<clothes.length;i++){
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
