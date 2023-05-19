@@include('ibg.js', {})
@@include('slider.js', {})
@@include('datada.js', {})


window.onload = function () {
    document.addEventListener('click', documentActions);


    // Actions (делегирование события click)
    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768) {
            if (targetElement.classList.contains('menu__arrow')) {
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
        }
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active');
        }
        if (targetElement.classList.contains('products__more')) {
            getProducts(targetElement);
            e.preventDefault();
        }
        if (targetElement.classList.contains('actions-product__button')) {
            const productId = targetElement.closest('.item-product').dataset.pid;
            addToCart(targetElement, productId);
            e.preventDefault();
        }
        if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
            if (document.querySelector('.cart-list').children.length > 0) {
                document.querySelector('.cart-header').classList.toggle('_active');
            }
            e.preventDefault();
        } else if (!targetElement.closest('.cart-header') && !targetElement.contains('actions-product__button')) {
            document.querySelector('.cart-header').classList.remove('_active');
        }

        if (targetElement.classList.contains('cart-list__delete')) {
            const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
            updateCart(targetElement, productId, false);
            e.preventDefault();
        }
    }
}



async function getProducts(button) {
    if (!button.classList.contains('_hold')) {
        button.classList.add('_hold');
        const file = "json/products.json";
        let response = await fetch(file, {
            method: "GET"
        });

        if (response.ok) {
            let result = await response.json();
            loadProducts(result);
            button.classList.remove('_hold');
            button.remove();
        } else {
            alert("Ошибка");
        }
    }
}


function loadProducts(data) {
    const productsItems = document.querySelector('.products__items');
    data.products.forEach(item => {
        const productId = item.id;
        const productURL = item.url;
        const productImage = item.image;
        const productTitle = item.title;
        const productText = item.text;
        const productPrice = item.price;
        const productOldPrice = item.priceOld;
        const productShareUrl = item.shareUrl;
        const productLikeUrl = item.likeUrl;
        const productLabels = item.labels;
        let productLabelSale = '';
        let productLabelNew = '';

        if (productLabels) {
            productLabels.forEach(labelItem => {
                if (labelItem.type == 'sale') {
                    productLabelSale = `<div class="item-product__label item-product__label_sale">${labelItem.value}</div>`
                }

                if (labelItem.type == 'new') {
                    productLabelNew = `<div class="item-product__label item-product__label_new">${labelItem.value}</div>`
                }
            });
        }

        let productTemplatePrices = '';

        if (productOldPrice) {
            productTemplatePrices = `<div class="item-product__price item-product__price_old">Rp ${productOldPrice}</div>`;
        }

        let article = `<article data-pid="${productId}" class="products__item item-product">
    <div class="item-product__labels">
        ${productLabelSale}
        ${productLabelNew}
    </div>
    <a href="${productURL}" class="item-product__image ibg" style="background-image: url(img/products/${productImage});">
        <img src="img/products/${productImage}" alt="image">
    </a>
    <div class="item-product__body">
        <div class="item-product__content">
            <h3 class="item-product__title">${productTitle}</h3>
            <div class="item-product__text">${productText}</div>
        </div>
        <div class="item-product__prices">
            <div class="item-product__price">Rp ${productPrice}</div>
            ${productTemplatePrices}
        </div>
        <div class="item-product__actions actions-product">
            <div class="actions-product__body">
                <a href="" class="actions-product__button btn btn_white">Add to cart</a>
                <a href="${productShareUrl}" class="actions-product__link"><span
                        class="actions-product__link_icon _icon-share"></span>Share
                </a>
                <a href="${productLikeUrl}" class="actions-product__link"><span
                        class="actions-product__link_icon _icon-favorite"></span>Like</a>
            </div>
        </div>
    </div>
</article>`;

        productsItems.insertAdjacentHTML('beforeend', article);
    });
}


// AddToCart
function addToCart(productButton, productId) {
    if (!productButton.classList.contains('_hold')) {
        productButton.classList.add('_hold');
        productButton.classList.add('_fly');

        const cart = document.querySelector('.cart-header__icon');
        const product = document.querySelector(`[data-pid='${productId}']`);
        const productImage = document.querySelector('.item-product__image');

        const productImageFly = productImage.cloneNode(true);

        const productImageFlyWidth = productImage.offsetWidth;
        const productImageFlyHeight = productImage.offsetHeight;
        const productImageFlyTop = productImage.getBoundingClientRect().top;
        const productImageFlyLeft = productImage.getBoundingClientRect().left;

        productImageFly.setAttribute('class', '_flyImage ibg');
        productImageFly.style.cssText = `
            left: ${productImageFlyLeft} px;
            top: ${productImageFlyTop} px;
            width: ${productImageFlyWidth} px;
            height: ${productImageFlyHeight} px;`;

        document.body.append(productImageFly);

        const cartFlyLeft = cart.getBoundingClientRect().left;
        const cartFlyTop = cart.getBoundingClientRect().top;

        productImageFly.style.cssText = `
        left: ${cartFlyLeft}px;
        top: ${cartFlyTop}px;
        width: 0px;
        height: 0px;
        opacity:0;
        `;

        productImageFly.addEventListener('transitionend', function () {
            if (productButton.classList.contains('_fly')) {
                productImageFly.remove();
                updateCart(productButton, productId);
                productButton.classList.remove('_fly');
            }
        });
    }
}

function updateCart(productButton, productId, productAdd = true) {
    const cart = document.querySelector('.cart-header');
    const cartIcon = cart.querySelector('.cart-header__icon');
    const cartQuantity = cartIcon.querySelector('span');
    const cartProduct = document.querySelector(`[data-cart-pid='${productId}']`);
    const cartList = document.querySelector('.cart-list');

    if (productAdd) {
        if (cartQuantity) {
            cartQuantity.innerHTML = ++cartQuantity.innerHTML;
        } else {
            cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
        }

        if (!cartProduct) {
            const product = document.querySelector(`[data-pid='${productId}']`);
            const cartProductImage = product.querySelector('.item-product__image').innerHTML;
            const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
            const cartProductContent = `
            <a href="" class="cart-list__image">${cartProductImage}</a>
            <div class="cart-list__body">
                <a href="" class="cart-list__title">${cartProductTitle}</a>
                <div class="cart-list__quantity">Quantity: <span>1</span></div>
                <a href="" class="cart-list__delete">Delete</a>
            </div>`;
            cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`)
        } else {
            const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
            cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
        }

        productButton.classList.remove('_hold');
    } else {
        const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
        cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
        if (!parseInt(cartProductQuantity.innerHTML)) {
            cartProduct.remove();
        }

        const cartQuantityValue = --cartQuantity.innerHTML;

        if (cartQuantityValue) {
            cartQuantity.innerHTML = cartQuantityValue;
        } else {
            cartQuantity.remove();
            cart.classList.remove('_active');
        }
    }
}

// Furniture gallery
const furniture = document.querySelector('.furniture__body');
if (furniture) {
    const furnitureItems = document.querySelector('.furniture__items');
    const furnitureColumn = document.querySelectorAll('.furniture__column');

    const speed = furniture.dataset.speed;

    let positionX = 0;
    let coordXprocent = 0;

    function setMouseGalleryStyle() {
        let furnitureItemsWidth = 0;
        furnitureColumn.forEach(element => {
            furnitureItemsWidth += element.offsetWidth;
        });

        const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
        const distX = Math.floor(coordXprocent - positionX);

        positionX = positionX + (distX * speed);
        let position = furnitureDifferent / 200 * positionX;

        furnitureItems.style.cssText = `transform: translate3d(${-position}px, 0,0);`;

        if (Math.abs(distX) > 0) {
            requestAnimationFrame(setMouseGalleryStyle);
        } else {
            furniture.classList.remove('_init');
        }
    }
    furniture.addEventListener('mousemove', function (e) {
        const furnitureWidth = furniture.offsetWidth;

        const coordX = e.pageX - furnitureWidth / 2;

        coordXprocent = coordX / furnitureWidth * 200;

        if (!furniture.classList.contains('_init')) {
            requestAnimationFrame(setMouseGalleryStyle);
            furniture.classList.add('_init');
        }
    });
}



















