const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function(e){
    e.stopPropagation();
    menu.classList.toggle('active');
});

body.addEventListener('click', function(){
    menu.classList.remove('active');
});