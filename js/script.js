// document.ready(function () {
//     document.ultimate_block_head.arrow_down.click(function(event) {
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });

const header = document.querySelector('.header');
window.addEventListener('scroll', function (e){
    const scrollFromTop = document.querySelector('html').scrollTop;
    header.style.background = scrollFromTop > 50 ? '#F4EC98' : '#FFFFFF';
});

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (burger){
    const headerMenu = document.querySelector('.header__menu');
    burger.addEventListener('click', function (e) {
       burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    })
}





// document.getElementById('burger').classList.add('active');
// document.getElementsByClassName('header__menu').classList.add('active');
// document.getElementsByClassName('header__burger').onclick = function () {
//     document.getElementsByClassName('header__menu').classList.toggle('active');
// };

// document.getElementById('.ultimate_price_list').classList.toggle('show');
