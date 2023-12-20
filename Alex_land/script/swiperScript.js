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

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
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