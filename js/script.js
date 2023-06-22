new Swiper('.image-slider' , {
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },

    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,

        dynamicBullets: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    

    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2.1,
        },
        920: {
            slidesPerView: 3.4,
        },
    },

    autoHeight: true,

    slidesPerView: 3.4,

    watchOverflow: true,

    spaceBetween: 10,

    loop: true,
});