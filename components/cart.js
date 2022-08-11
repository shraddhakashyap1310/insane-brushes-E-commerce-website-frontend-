

calculateAmount();

//increment and decrement item
let itemCountSpan=document.getElementsByClassName('item-count-span');

function addItem(element){ 
    let item=element.parentNode.previousSibling;
    if(item.value<5){
        item.value=parseInt(item.value)+1;
    }   
   calculateAmount();
}

function subtractItem(element){
    let item=element.parentNode.nextSibling;
    if(item.value>0){
        item.value-=1;
    }   
    calculateAmount();
}



function calculateAmount(){
    let price=0;
let discount=20;
let delivery=40
let total=0;

    let item=document.getElementsByClassName("cart-sub-part");
for(let i=1;i<item.length;i++){
    
    let amount=document.getElementsByClassName("amount")[i-1].value;
    let itemPrice=parseFloat(item[i].getElementsByClassName('item-price')[0].innerText)*amount;
    console.log(amount);
    console.log(itemPrice);
    console.log(price);
    price=price+itemPrice;
    
}
total=price+delivery-discount;
    
let cartPriceContent=document.getElementsByClassName('cart-price-content');
cartPriceContent[0].getElementsByClassName("price")[0].innerText=price;
cartPriceContent[0].getElementsByClassName("discount")[0].innerText=discount;
cartPriceContent[0].getElementsByClassName("delivery")[0].innerText=delivery;
cartPriceContent[0].getElementsByClassName("total")[0].innerText=total;

}

