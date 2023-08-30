const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

// Получаю нажатие по бургер кпопке и выдаю класс
menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('active');
});

// Убираю класс по нажатию на тело сайта
body.addEventListener('click', function () {
    menu.classList.remove('active');
});

// Скролл к элементам хедер меню
// const home = document.querySelector('.intro__title');
// const btnHome = document.getElementById('home');

// btnHome.addEventListener('click', function(e){
//     e.preventDefault();
//     home.scrollIntoView({ block: "center", behavior: "smooth" });
// });

const links = document.querySelectorAll('.nav');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();

        const blockId = e.currentTarget.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({ behavior: "smooth", block: "start" })
    })
}

// Слайдер для блока Design
let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const itemWidth = document.querySelector('.slider').offsetWidth;
console.log(itemWidth);
document.querySelector('.next').addEventListener('click', function () {
    offset += itemWidth;
    if (offset > itemWidth * 4) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.prev').addEventListener('click', function () {
    offset -= itemWidth;
    if (offset < 0) {
        offset = itemWidth * 4;
    }
    sliderLine.style.left = -offset + 'px';
})

