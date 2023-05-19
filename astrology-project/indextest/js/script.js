function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();;
let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu__body');

burger.addEventListener('click', event => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});;
if (document.querySelector('.posts__swiper-1')) {
    new Swiper('.posts__swiper-1', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 40,
        watchOverflow: true,
        speed: 800,
        loop: true,
        // noSwiping: false,
        // simulateTouch: false,
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
        // loopAdditionalSlides: 4,
        // preloadImages: false,
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

;

function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

let profileIcon = document.querySelector('.profile');
let userMenu = document.querySelector('.user-menu');
let iconUser = document.querySelector('._icon-user');

profileIcon.addEventListener('click', function () {
    userMenu.classList.toggle('_active');
    iconUser.classList.toggle('active');
})


let paperTitle = document.querySelector('.paper__title');
let titleText = paperTitle.textContent;
let paperWrap = document.querySelector('.paper__wrap');


for (let i = 0; i < titleText.length; i++) {
    if (i > 80) {
        paperTitle.style.fontSize = 'calc(18px + 24 * ((100vw - 320px)/ 950))';
        paperWrap.style.top = '10%';
    }
}
