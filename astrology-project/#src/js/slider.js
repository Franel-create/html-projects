if (document.querySelector('.posts__swiper-main')) {
    new Swiper('.posts__swiper-main', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 40,
        watchOverflow: true,
        speed: 800,
        loop: true,
        parallax: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.posts__dotts-main',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.posts__body .slider-arrow_next-main',
            prevEl: '.posts__body .slider-arrow_prev-main',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
}



if (document.querySelector('.posts__swiper-1')) {
    new Swiper('.posts__swiper-1', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 40,
        watchOverflow: true,
        speed: 800,
        loop: true,
        parallax: true,
        pagination: {
            el: '.posts__dotts-1',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.posts__body .slider-arrow_next-1',
            prevEl: '.posts__body .slider-arrow_prev-1',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
}

if (document.querySelector('.posts__swiper-2')) {
    new Swiper('.posts__swiper-2', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 40,
        watchOverflow: true,
        speed: 800,
        loop: true,
        parallax: true,
        pagination: {
            el: '.posts__dotts-2',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.posts__body .slider-arrow_next-2',
            prevEl: '.posts__body .slider-arrow_prev-2',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
}

if (document.querySelector('.posts__swiper-3')) {
    new Swiper('.posts__swiper-3', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 40,
        watchOverflow: true,
        speed: 800,
        loop: true,
        // loopAdditionalSlides: 4,
        // preloadImages: false,
        parallax: true,
        pagination: {
            el: '.posts__dotts-3',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.posts__body .slider-arrow_next-3',
            prevEl: '.posts__body .slider-arrow_prev-3',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
}

if (document.querySelector('.posts__swiper-4')) {
    new Swiper('.posts__swiper-4', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 40,
        watchOverflow: true,
        speed: 800,
        loop: true,
        // loopAdditionalSlides: 4,
        // preloadImages: false,
        parallax: true,
        pagination: {
            el: '.posts__dotts-4',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.posts__body .slider-arrow_next-4',
            prevEl: '.posts__body .slider-arrow_prev-4',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });
}

