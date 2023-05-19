function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();



// Inputmask index.html
$('.js-input-phone').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: true,
    inputmode: 'tel',
    onincomplete: function () {
        checkValue($(this));
    },
    oncomplete: function () {
        checkValue($(this));
    }
});

$(function () {
    $('.js-input-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: true,
        inputmode: 'tel',
        onincomplete: function () {
            checkValue($(this));
        },
        oncomplete: function () {
            checkValue($(this));
        }
    });
    let $error = $('.sub__warning_message');
    let $alert = $('.sub__img');
    let $alertTrue = $('.sub__img_true');
    let $alertCorrect = $('.sub__warning_correct');
    let $subBtn = $('.sub__btn');
    $error.hide();
    $alert.hide();
    $alertTrue.hide();
    $alertCorrect.hide();
    $subBtn.attr('disabled', true);

    let checkValue = function (input) {
        let $th = $(input);
        let phone = $th.val();
        let isValid = Inputmask.isValid(phone, { mask: '+7 (999) 999-99-99' });
        let $btn = $th.closest('.js-form').find('.js-form-submit');
        if (!isValid) {
            $btn.prop('disabled', true);
            $error.fadeIn();
            $alert.fadeIn();
            $alertTrue.fadeOut();
            $alertCorrect.fadeOut();
            $('.js-input-phone').css('color', '#D72F4B');
            $subBtn.attr('disabled', true);
        } else {
            $btn.prop('disabled', false);
            $error.fadeOut();
            $alert.fadeOut();
            $alertTrue.fadeIn();
            $alertCorrect.fadeIn();
            $('.js-input-phone').css('color', '#41A674');
            $subBtn.attr('disabled', false);
        }

        if (!phone) {
            $error.hide();
            $alert.hide();
            $alertTrue.hide();
            $alertCorrect.hide();
        }
    }
});



// Inputmask auth.html
$('.js-input-tel').inputmask({
    mask: '+7 999 999-99-99',
    showMaskOnHover: true,
    inputmode: 'tel',
    onincomplete: function () {
        checkValue($(this));
    },
    oncomplete: function () {
        checkValue($(this));
    }
});

$(function () {
    $('.js-input-tel').inputmask({
        mask: '+7 999 999-99-99',
        showMaskOnHover: true,
        inputmode: 'tel',
        onincomplete: function () {
            checkValue($(this));
        },
        oncomplete: function () {
            checkValue($(this));
        }
    });

    let $authBtn = $('.auth__btn');
    let $error = $('.form__warning_message');
    let $alert = $('.form__img');
    let $alertTrue = $('.form__img_true');
    let $alertCorrect = $('.form__warning_correct');
    $error.hide();
    $alert.hide();
    $alertTrue.hide();
    $alertCorrect.hide();
    $authBtn.attr('disabled', true);

    let checkValue = function (input) {
        let $th = $(input);
        let phone = $th.val();
        let isValid = Inputmask.isValid(phone, { mask: '+7 999 999-99-99' });
        let $btn = $th.closest('.js-field').find('.js-form-submit');
        if (!isValid) {
            $btn.prop('disabled', true);
            $error.fadeIn();
            $alert.fadeIn();
            $alertTrue.fadeOut();
            $alertCorrect.fadeOut();
            $('.js-input-tel').css('color', '#D72F4B');
            $authBtn.attr('disabled', true);

        } else {
            $btn.prop('disabled', false);
            $error.fadeOut();
            $alert.fadeOut();
            $alertTrue.fadeIn();
            $alertCorrect.fadeIn();
            $('.js-input-tel').css('color', '#41A674');
            $authBtn.attr('disabled', false);
        }

        if (!phone) {
            $error.hide();
            $alert.hide();
            $alertTrue.hide();
            $alertCorrect.hide();
        }
    }
});



// Accordion
const accordionWrap = document.querySelectorAll(".accordion__wrap");

accordionWrap.forEach(item => {
    item.addEventListener("click", function () {
        const parent = item.parentNode;
        const accordionArrow = item.childNodes[3];
        accordionArrow.classList.toggle('accordion__arrow-transform');
        if (parent.classList.contains("active")) {
            parent.classList.remove("active")
        } else {
            parent.classList.add("active")
        }
    })
});


// Anchor
$(document).ready(function () {
    $("#toAnchor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});

$(document).ready(function () {
    $("#toSubscription").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});

$(document).ready(function () {
    $("#teaserToSubscription").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});


// SMS code
let in1 = document.getElementById('otc-1'),
    ins = document.querySelectorAll('input[type="number"]'),
    splitNumber = function (e) {
        let data = e.data || e.target.value;
        if (!data) return;
        if (data.length === 1) return;

        popuNext(e.target, data);
    },
    popuNext = function (el, data) {
        el.value = data[0];
        data = data.substring(1);
        if (el.nextElementSibling && data.length) {
            popuNext(el.nextElementSibling, data);
        }
    };

ins.forEach(function (input) {
    input.addEventListener('keyup', function (e) {
        if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
            return;
        }

        if ((e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT") {
            this.previousElementSibling.select();
        } else if (e.keyCode !== 8 && this.nextElementSibling) {
            this.nextElementSibling.select();
        }

        if (e.target.value.length > 1) {
            splitNumber(e);
        }
    });

    input.addEventListener('focus', function (e) {
        if (this === in1) return;

        if (in1.value == '') {
            in1.focus();
        }

        if (this.previousElementSibling.value == '') {
            this.previousElementSibling.focus();
        }
    });
});

in1.addEventListener('input', splitNumber);









// Background size on mobile vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});