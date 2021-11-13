

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

const spoilers = document.querySelectorAll('.price_item_spoiler');
const activeItems = document.querySelectorAll('.item_body');

for(spoiler of spoilers) {
    spoiler.addEventListener('click', function () {
        spoiler.classList.toggle('active')
        for(activeitem of activeItems) {
            activeitem.classList.add('active');
        };
        if (this.classList.contains('active')) {
                this.classList.remove('active');
                activeitem.classList.remove('active');
                // child.classList.remove('item_body.active');
            } else
        this.classList.add('active');
        activeitem.classList.add('active');
    });
};

// const spoilers = document.querySelectorAll('.price_item_spoiler');
// spoilers.onclick = function(){
//     spoilers.classList.toggle('price_item_spoiler.active');
// };

// const activeItems = document.querySelector('.item_body');
//
// for(item of spoilers) {
//     item.addEventListener('click', function () {
//         for(spoiler of spoilers) {
//
//                 spoilers.classList.toggle('active');
//                 // activeItems.remove('active');
//                 // return;
//
//         }
//         // spoilers.classList.add('active');
//         // activeItems.classList.add('active');
//     });
// };

// const spoilers = document.querySelectorAll('.price_item_spoiler');
// const activeItems = document.querySelectorAll('.item-body');
// for (elem of spoilers) {
//     elem.addEventListener('click', function () {
//         elem.classList.toggle('active')
//     })
// };
// for (elem of activeItems) {
//     elem.addEventListener('click', function () {
//        if (spoilers.classList.contains('active')) {elem.classList.add('active')}
//     })
// };

        // const parent = item.parentNode;
        // const child = item.childNodes;
        // if (parent.classList.contains('price_item_spoiler.active')) {
        //     parent.classList.remove('price_item_spoiler.active');
        //     // child.classList.remove('item_body.active');
        // } else {
        //     document
        //         .querySelectorAll('.item-body').forEach((child) =>
        //         child.classList.add('item_body.active'))
        //     document.querySelectorAll('.price_item_spoiler')
        //     item.classList.toggle('price_item_spoiler.active')
        // }


// document.querySelectorAll('.price_item_spoiler').forEach((item) =>
//
//     item.addEventListener('click', () => {
//         const parent = item.parentNode;
//         const child = item.childNodes;
//         if (parent.classList.contains('price_item_spoiler.active')) {
//             parent.classList.remove('price_item_spoiler.active');
//             child.classList.remove('item_body.active');
//         } else {
//             parent.classList.add('price_item_spoiler.active');
//             document
//                 .querySelectorAll('.item-body').forEach((child) =>
//                 child.classList.add('item_body.active'));
//             parent.classList.add('price_item_spoiler.active');
//         }
//     })
// )


// const spoiler = document.querySelectorAll('.price_item_spoiler');
// const priceBlock = document.querySelector('.item_body');
// if (spoiler){
//     const priceBlock = document.querySelector('.item_body');
//     spoiler.addEventListener('click', function (e) {
//         spoiler.classList.toggle('active');
//         priceBlock.classList.toggle('active');
//
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
            document.getElementsByClassName('service_logo').src = '/smartphone-white_1.png';
        };
    });
};

const activePriceButtons = document.querySelectorAll('.price_item_button');
for(item of activePriceButtons) {
    item.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove ('active');
        } else {
            for(el of activePriceButtons) {
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







