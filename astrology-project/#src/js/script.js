@@include('ibg.js');
@@include('burger.js');
@@include('slider.js');

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



// Burger
let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu__body');
let body = document.body;

burger.addEventListener('click', event => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    userMenu.classList.remove('_active');
    iconUser.classList.remove('active');
    if (!burger.classList.contains('active')) {
        body.classList.remove('lock');
    } else {
        body.classList.add('lock');
    }
});

const toggleMenu = function () {
    menu.classList.toggle('active');
}
const toggleBurger = function () {
    burger.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    const target = e.target;
    const itsMenu = target == menu || menu.contains(target);
    const itsBtnMenu = target == burger;
    const menuIsActive = menu.classList.contains('active');

    if (!itsMenu && !itsBtnMenu && menuIsActive) {
        toggleMenu();
        toggleBurger();
    }
});

// Click on profile icon and show user settings
let profileIcon = document.querySelector('.profile');
let userMenu = document.querySelector('.user-menu');
let iconUser = document.querySelector('._icon-user');
let profileText = document.querySelector('.profile__text');


profileIcon.addEventListener('click', function () {
    userMenu.classList.toggle('_active');
    iconUser.classList.toggle('active');
    burger.classList.remove('active');
    menu.classList.remove('active');
    if (!iconUser.classList.contains('active')) {
        body.classList.remove('lock');
    } else {
        body.classList.add('lock');
    }
})

const toggleSettings = function () {
    userMenu.classList.toggle('_active');
}
const toggleUserIcon = function () {
    iconUser.classList.toggle('active');
}


document.addEventListener('click', function (e) {
    const target = e.target;
    console.log(target);
    const itsSettings = target == userMenu || userMenu.contains(target);
    const itsBtnUser = target == iconUser;
    const setIsActive = userMenu.classList.contains('_active');

    if (!itsSettings && !itsBtnUser && setIsActive) {
        toggleSettings();
        toggleUserIcon();
    }
});





// If title is too long => reduce font-size
let paperTitle = document.querySelector('.paper__title');
if (paperTitle) {
    let titleText = paperTitle.textContent;
    console.log(titleText);
    let paperWrap = document.querySelector('.paper__wrap');

    for (let i = 0; i < titleText.length; i++) {
        if (i > 80) {
            paperTitle.style.fontSize = 'calc(18px + 24 * ((100vw - 320px)/ 950))';
            paperWrap.style.top = '10%';
        }
    }
}


// Animation scroll from index.html
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active-scroll');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('_active-scroll');
                }
            }
        }
    }
    function offset(elem) {
        const rect = elem.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}



// Scrolling rotation elements from index.html
let animImg = document.querySelectorAll('.anim-row__img').forEach(item => {
    rotateElem(item);
})
function rotateElem(elem) {
    window.addEventListener('scroll', function () {
        elem.style.transform = 'rotate(' + window.pageYOffset / 2 + 'deg)';
    });
}

// Medium-zoom for calendar images
// mediumZoom('#zoomOne');
// mediumZoom('#zoomTwo');


// Spoiler
let spoilerWrapper = document.querySelectorAll('.card-about__wrapper');

spoilerWrapper.forEach(item => {
    item.addEventListener('click', function () {
        if (document.documentElement.clientWidth < 479.98) {
            event.preventDefault();
            let itemChild = item.childNodes[3];
            let spoilerArrow = itemChild.childNodes[1];
            let spoilerText = item.nextElementSibling;
            spoilerArrow.classList.toggle('card-about__icon-transform');
            spoilerText.classList.toggle('card-about__text-block');
        }
    })
})

// Popup
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const showPopup = document.getElementById('showPopup');
const closePopupBtn = document.getElementById('closePopupBtn');

popup.style.display = 'none';

showPopup.addEventListener('click', function () {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

function hidePopup(elem) {
    elem.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
}

hidePopup(overlay);
hidePopup(closePopupBtn);






