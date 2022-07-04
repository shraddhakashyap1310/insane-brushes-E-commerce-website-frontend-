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
