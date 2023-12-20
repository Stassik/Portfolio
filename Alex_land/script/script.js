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



