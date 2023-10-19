

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },



    autoplay: {
        delay: 2000,
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
