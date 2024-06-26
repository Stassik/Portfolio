
// Клонирование элементов для меню

const Menu = {
    baseEl: document.querySelector('.header'),
    copyAppendElement: function (parent, elementSelector) {
        const el = this.baseEl.querySelector(elementSelector).cloneNode(true);
        parent.appendChild(el);
    },
    copyPrependElement: function (parent, elementSelector) {
        const el = this.baseEl.querySelector(elementSelector).cloneNode(true);
        parent.prepend(el);
    }
}

const burgerMenu = document.getElementById('burgerNav');

Menu.copyPrependElement(burgerMenu.querySelector('.burger-nav__header'), '.header__logo');
Menu.copyAppendElement(burgerMenu, '.contacts-city');
Menu.copyAppendElement(burgerMenu, '.header__nav-list');
Menu.copyAppendElement(burgerMenu, '.contacts-phone');
Menu.copyAppendElement(burgerMenu, '.contacts-social');
Menu.copyAppendElement(burgerMenu, '.header__btn.btn_light');

burgerMenu.querySelector('.contacts-city__label').setAttribute('for', 'myCityBurger');
burgerMenu.querySelector('#myCity').setAttribute('id', 'myCityBurger');


/**Закрытие бургер меню */
const close = document.getElementById('close');
close.addEventListener('click', function () {
    document.getElementById('burger').checked = false;
});



// Footer

const footerNavBox = document.querySelector('.footer .footer__main .footer__nav');
const footerNavLeft = footerNavBox.querySelector('.footer__nav-left');
const footerNavRight = footerNavBox.querySelector('.footer__nav-right');
Menu.copyAppendElement(footerNavLeft, '.header__logo');
Menu.copyAppendElement(footerNavLeft, '.contacts-phone');
Menu.copyAppendElement(footerNavLeft, '.contacts-social');
Menu.copyAppendElement(footerNavRight, '.header__nav-list');

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

// Выпадающее меню
const navSummaryItems = document.querySelectorAll('.header__nav-summary')
const headerNavBurger = document.querySelector('.header__burger-nav');
const navSummaryBurger = headerNavBurger.querySelectorAll('.header__nav-summary');
const headerNav = document.querySelector('.header__nav');
const navItemsHeader = headerNav.querySelectorAll('.header__nav-item');

const footer = document.querySelector('.footer');
const footerSummaryItems = footer.querySelectorAll('.header__nav-summary');


navItemsHeader.forEach(element => {
    element.addEventListener('mouseover', function (el) {
        element.children[0].setAttribute('open', '');
    })
});
navItemsHeader.forEach(element => {
    element.addEventListener('mouseout', function (el) {
        element.children[0].removeAttribute('open');
    })
});

navSummaryItems.forEach(element => {
    element.addEventListener('click', function (el) {
        el.preventDefault();
    })
});

navSummaryBurger.forEach(element => {
    element.addEventListener('click', function (el) {
        searchOpen(navSummaryBurger, this);
    })
});

if (window.screen.width <= 737) {
    footerSummaryItems.forEach(element => {
        element.addEventListener('click', function (el) {
            searchOpen(footerSummaryItems, this);
        })
    });
}

function searchOpen(items, clickElem) {
    const parent = clickElem.closest('details');
    if (!parent.getAttribute('open')) {
        parent.setAttribute('open', ' ');
        items.forEach(element => {
            let elementDetails = element.closest('details');
            if (elementDetails != parent) {
                elementDetails.removeAttribute('open');
            }
        });
    } else {
        parent.removeAttribute('open');
    }
}


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



