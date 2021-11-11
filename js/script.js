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
    });
};

const activeSlideButtons = document.querySelectorAll('.slide_button');
for(item of activeSlideButtons) {
    item.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove ('active');
        } else {
            for(el of activeSlideButtons) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        };
    });
};

// const spoiler = document.querySelectorAll('.arrow_down');
// // const contentBlock = document.querySelector('.about__content_block');
// if (spoiler){
//     const contentBlock = document.querySelector('.about__content_block');
//     slider.addEventListener('click', function (e) {
//         slider.classList.toggle('active');
//         contentBlock.classList.toggle('active');
//            contentBlock.addStyle('display: block');
//     });
// };

const activeServiceBlocks = document.querySelectorAll('.service_item');

for(item of activeServiceBlocks) {
    item.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove ('active');
        } else {
            for(el of activeServiceBlocks) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        };
    });
};

const activePriceBlocks = document.querySelectorAll('.price_item');
for(item of activePriceBlocks) {
    item.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove ('active');
        } else {
            for(el of activePriceBlocks) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        };
    });
};


const inputs = document.querySelectorAll('.contact_form_input');
const sendButton = document.querySelector('.contact__block__button');

for(item of inputs) {
    item.addEventListener('keyup', function () {
        for(input of inputs) {
            if(input.value =='') {
                sendButton.classList.remove('active');
                sendButton.setAttribute('disabled', true);
                return;
            }
        }
        sendButton.classList.add('active');
        sendButton.removeAttribute('disabled')
    });
};

// for(item of inputs) {
//     item.addEventListener('keyup', function () {
//         for(input of inputs) {
//             if(input.value =='') {
//                 sendButton.classList.remove('active');
//                 return;
//             }
//         }
//         sendButton.classList.add('active');
//     });
// };





