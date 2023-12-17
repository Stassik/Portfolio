

var swiperServices = new Swiper(".swiper-services", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    parallax: true,

    breakpoints: {

        738: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        1081: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#swiper-services__pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '#swiper-services__next',
        prevEl: '#swiper-services__prev',
    },
});


var swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,

    breakpoints: {

        738: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        850: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        1081: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: "#swiper-team__pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '#swiper-team__next',
        prevEl: '#swiper-team__prev',
    },
});


// Клонирование элементов для бургер меню

const burgerMenu = document.getElementById('burgerNav');
let contactsClone;
let logoClone;
let burgerListClone;
let contactsPhoneClone;
let contactsSocialClone;
let burgerBtnClone;


function cloneEl() {
    contactsClone = document.querySelector('.contacts-city').cloneNode(true);
    logoClone = document.querySelector('.header__logo').cloneNode(true);
    burgerListClone = document.querySelector('.header__nav-list').cloneNode(true);
    contactsPhoneClone = document.querySelector('.contacts-phone').cloneNode(true);
    contactsSocialClone = document.querySelector('.contacts-social').cloneNode(true);
    burgerBtnClone = document.querySelector('.header__btn.btn_light').cloneNode(true);
}




cloneEl();

burgerMenu.innerHTML = '<div class="burger-nav__header"><svg class="close__icon" id="close"><use xlink:href="img/sprite.svg#close"></use></svg></div>';
burgerMenu.querySelector('.burger-nav__header').prepend(logoClone);

burgerMenu.appendChild(contactsClone);

burgerMenu.querySelector('.contacts-city__label').setAttribute('for', 'myCityBurger');
burgerMenu.querySelector('#myCity').setAttribute('id', 'myCityBurger');
burgerMenu.appendChild(burgerListClone);
burgerMenu.appendChild(contactsPhoneClone);
burgerMenu.appendChild(contactsSocialClone);
burgerMenu.appendChild(burgerBtnClone);

/**Закрытие бургер меню */
const close = document.getElementById('close');
close.addEventListener('click', function () {
    document.getElementById('burger').checked = false;
});


// Pricing

const pricingBox = document.querySelector('.pricing__box');
const pricingItem = pricingBox.querySelectorAll('.pricing__item');

let pricingView = pricingBox.querySelector('.pricing__view');
let pricingViewTitle = pricingView.querySelector('.pricing__view-title');
let pricingViewInfo = pricingView.querySelector('.pricing__view-info');
let pricingViewImg = pricingView.querySelector('.pricing__view-img');

setPricingViewText(pricingBox);


pricingItem.forEach(element => {
    element.addEventListener('click', function (e) {
        searchOpenItem(pricingItem, element);
    });
});

function searchOpenItem(pricingItem, clickElem) {
    pricingItem.forEach(element => {
        let clickItemDetail = clickElem.querySelector('.pricing__details');
        let elementDetail = element.querySelector('.pricing__details');
        if (!clickItemDetail.getAttributeNames().includes('open')) {
            if (element != clickElem && elementDetail.getAttributeNames().includes('open')) {
                elementDetail.removeAttribute('open');
                pricingViewImg.src = clickItemDetail.getAttribute('data-img');
                setPricingViewText(clickElem);
            }

        } else {
            if (clickElem != pricingItem[pricingItem.length - 1]) {
                const nextEl = clickElem.nextElementSibling;
                let nextItem = nextEl.querySelector('.pricing__details');
                nextItem.setAttribute('open', '');
                setPricingViewText(nextEl);
            } else {
                let nextItem = pricingItem[0].querySelector('.pricing__details');
                nextItem.setAttribute('open', '');
                setPricingViewText(pricingItem[0]);
            }


        }
    });

}

function setPricingViewText(item) {
    const pricingItem = item.querySelector('.pricing__details');
    pricingViewImg.src = pricingItem.getAttribute('data-img');
    pricingViewTitle.textContent = pricingItem.getAttribute('data-title');
    pricingViewInfo.textContent = pricingItem.getAttribute('data-info');
}



// Footer
cloneEl();

const footerNavBox = document.querySelector('.footer .footer__main .footer__nav');
const footerNavLeft = document.createElement('div');
footerNavLeft.className = 'footer__nav-left';


footerNavLeft.appendChild(logoClone);
footerNavLeft.appendChild(contactsPhoneClone);
footerNavLeft.appendChild(contactsSocialClone);

const footerNavRight = document.createElement('div');
footerNavRight.className = 'footer__nav-right';
footerNavRight.appendChild(burgerListClone);

footerNavBox.appendChild(footerNavLeft);
footerNavBox.appendChild(footerNavRight);

const footerDetails = footerNavBox.querySelectorAll('.header__nav-details');
footerDetails.forEach(element => {
    if (window.screen.width <= 737) {
        element.removeAttribute('open', '');
    } else {
        element.setAttribute('open', '');
    }
});

window.addEventListener('resize', function (e) {
    modalBoxContent.style.marginTop = `${(window.innerHeight - modalBoxContent.offsetHeight) / 2}px`;

    footerDetails.forEach(element => {
        if (window.screen.width <= 737) {
            element.removeAttribute('open', '');
        } else {
            element.setAttribute('open', '');
        }

    });
}, true);




// Input type file

const fileInput = document.querySelector('#clientFile');
let inputText = fileInput.nextElementSibling.querySelector('.form-input__text')
fileInput.addEventListener('change', function (e) {
    inputText.textContent = this.value.split(/(\\|\/)/g).pop();
});

// Form

const formBox = document.querySelector('.consulting__form');
const formBtn = formBox.querySelector('.form__btn');
formBtn.addEventListener('click', function (e) {
    modalBox.style.display = 'block';
    modalBoxContent.style.marginTop = ((window.innerHeight - modalBoxContent.offsetHeight) / 2) + 'px';
    e.preventDefault();

});


// Modal
const modalBox = document.querySelector('.modal');
const modalBoxContent = modalBox.querySelector('.modal__box');
const modalBtn = modalBox.querySelector('.form__btn');
const modalBtnClose = modalBox.querySelector('.modal__close');
const content = document.querySelector('.content');



modalBtn.addEventListener('click', function (e) {
    modalBox.style.display = 'none';
});

modalBtnClose.addEventListener('click', function (e) {
    modalBox.style.display = 'none';
});

modalBox.addEventListener('click', function (e) {
    if (e.target.className === "modal") {
        e.target.style.display = 'none';
    }
});



