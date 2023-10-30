

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


/**Закрытие бургер меню */
const close = document.getElementById('close');
close.addEventListener('click', function() {
   document.getElementById('burger').checked = false;
});
