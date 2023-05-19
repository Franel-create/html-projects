if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
        }
    });
}

if (document.querySelector('.slider-rooms__body')) {
    new Swiper('.slider-rooms__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        pagination: {
            el: '.slider-rooms__dotts',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.slider-rooms .slider-arrow_next',
            prevEl: '.slider-rooms .slider-arrow_prev',
        }
    });
}

if (document.querySelector('.slider-tips__body')) {
    new Swiper('.slider-tips__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        pagination: {
            el: '.slider-tips__dotts',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.slider-tips .slider-arrow_next',
            prevEl: '.slider-tips .slider-arrow_prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        }
    });
}





