

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    parallax: true,
    freeMode: true,

    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },



    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Клонирование элементов для бургер меню
const burgerMenu = document.getElementById('burgerNav');

const contacts = document.querySelector('.contacts-city');
const contactsClone = contacts.cloneNode(true);

const logo = document.querySelector('.header__logo');
const logoClone = logo.cloneNode(true);

const burgerList = document.querySelector('.header__nav-list');
const burgerListClone = burgerList.cloneNode(true);

const contactsPhone = document.querySelector('.contacts-phone');
const contactsPhoneClone = contactsPhone.cloneNode(true);

const contactsSocial = document.querySelector('.contacts-social');
const contactsSocialClone = contactsSocial .cloneNode(true);

const burgerBtn = document.querySelector('.header__btn.btn_light');
const burgerBtnClone = burgerBtn .cloneNode(true);

burgerMenu.innerHTML = '<div class="burger-nav__header"><svg class="close__icon" id="close"><use xlink:href="img/sprite.svg#close"></use></svg></div>';
burgerMenu.querySelector('.burger-nav__header').prepend(logoClone);

burgerMenu.appendChild(contactsClone);

burgerMenu.querySelector('.contacts-city__label').setAttribute('for', 'myCityBurger');
burgerMenu.querySelector('#myCity').setAttribute('id', 'myCityBurger');
burgerMenu.appendChild(burgerList);
burgerMenu.appendChild(contactsPhoneClone);
burgerMenu.appendChild(contactsSocialClone);
burgerMenu.appendChild(burgerBtnClone);



/**Закрытие бургер меню */
const close = document.getElementById('close');
close.addEventListener('click', function () {
    document.getElementById('burger').checked = false;
});


