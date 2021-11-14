

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

const itemSpoilers = document.querySelectorAll('.item_spoiler');
const blockContainers = document.querySelectorAll('.body_block');

for(itemSpoiler of itemSpoilers) {
    itemSpoiler.addEventListener('click', function () {
        const nearestBodyBlock = this.parentNode.parentNode.querySelector('.body_block');

        if (this.classList.contains('active')) {
            this.classList.remove('active');
            nearestBodyBlock.classList.remove('active');
            return;
        }

        for(blockContainer of blockContainers) {
            blockContainer.classList.remove('active');
        }

        for(spoiler of itemSpoilers) {
            spoiler.classList.remove('active');
        }

        this.classList.add('active');
        nearestBodyBlock.classList.add('active')
    });
};

const priceItemSpoilers = document.querySelectorAll('.price_item_spoiler');
const priceContainers = document.querySelectorAll('.item_body');

for(priceItemSpoiler of priceItemSpoilers) {
    priceItemSpoiler.addEventListener('click', function () {
        const nearestPriceItem = this.parentNode.parentNode.querySelector('.item_body');

        if (this.classList.contains('active')) {
            this.classList.remove('active');
            nearestPriceItem.classList.remove('active');
            return;
        }

        for(priceContainer of priceContainers) {
            priceContainer.classList.remove('active');
        }

        for(priceItemSpoiler of priceItemSpoilers) {
            priceItemSpoiler.classList.remove('active');
        }

        this.classList.add('active');
        nearestPriceItem.classList.add('active')
    });
};

const activeServiceBlocks = document.querySelectorAll('.service_item');

for(item of activeServiceBlocks) {
    item.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove ('active');
            this.querySelector('.service_logo').setAttribute('src', 'img/smartphone-black_1.png');
        } else {
            for(el of activeServiceBlocks) {
                el.classList.remove('active');
                el.querySelector('.service_logo').setAttribute('src', 'img/smartphone-black_1.png');
            }
            this.classList.add('active');
            this.querySelector('.service_logo').setAttribute('src', 'img/smartphone-white_1.png');
        };
    });
};


const servicesButton = document.querySelector('.services__block_button');

servicesButton.addEventListener('click', function () {
    const buttonContentItems = document.querySelectorAll('.button_content');
    for(buttonContentItem of buttonContentItems) {
        buttonContentItem.classList.toggle('hidden');
    }
});



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







