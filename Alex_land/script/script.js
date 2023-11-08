

var swiper = new Swiper(".swiper", {
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

const contactsClone = document.querySelector('.contacts-city').cloneNode(true);

const logoClone = document.querySelector('.header__logo').cloneNode(true);
const burgerListClone = document.querySelector('.header__nav-list').cloneNode(true);
const contactsPhoneClone = document.querySelector('.contacts-phone').cloneNode(true);
const contactsSocialClone = document.querySelector('.contacts-social').cloneNode(true);
const burgerBtnClone = document.querySelector('.header__btn.btn_light').cloneNode(true);


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


