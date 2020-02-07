/**------------load-more button-------------*/

const loadBtn = document.querySelector('.load-more');
let counter = 0;
let counterItems = 0;
let i = 0;
let finalPoint;

function openCards() {
    const screenWidth = document.documentElement.clientWidth;
    const furnitureItems = document.querySelectorAll('.card-box');
    if (screenWidth > 991) {
        furnitureItems.forEach(item => {
            if (item.classList.contains('d-none')) {
                item.classList.remove('d-none');
                loadBtn.classList.add('d-none');
            }
        })
    }
    if (screenWidth > 740 && screenWidth < 992) {
        if (counter === 0) {
            finalPoint = i + 8;
        } else {
            finalPoint = i + 4;
        }
        if (counter < 3) {
            for (i; i < finalPoint; i++) {
                if (i < finalPoint && furnitureItems[i].classList.contains('d-none')) {
                    furnitureItems[i].classList.remove('d-none');
                    counterItems++;
                }
            }
            counter++;
            if (counter >= 3) {
                loadBtn.classList.add('d-none');
            }
        }
    }

    if (screenWidth < 740) {
        if (counter === 0) {
            finalPoint = i + 4;
        } else {
            finalPoint = i + 2;
        }
        if (counter < 8) {
            for (i; i < finalPoint; i++) {
                if (i < finalPoint && furnitureItems[i].classList.contains('d-none')) {
                    furnitureItems[i].classList.remove('d-none');
                    counterItems++;
                }
            }
            counter++;
            if (counter === 8) {
                loadBtn.classList.add('d-none');
            }
        }
    }
}

loadBtn.addEventListener('click', () => {
    loadBtn.classList.add('rotate');
    setTimeout(() => {
        openCards();
        loadBtn.classList.remove('rotate');
    }, 2000);
});

/**---------filter-range--------------*/

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});

$(function () {
    $("#m-slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#m-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#m-amount").val("$" + $("#m-slider-range").slider("values", 0) +
        " - $" + $("#m-slider-range").slider("values", 1));
});


/**-------------filter__item active---------------*/
const filterItems = document.querySelectorAll('.filter__item');

filterItems.forEach(item => {

    item.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName.toLowerCase() !== 'input') {
            item.classList.toggle('active');
        }

        if (target.classList.contains('rounded-circle')) {
            item.querySelector('input').click();
        }
    })
});

$(document).ready(function () {
    $(".filters__btn").click(function () {
        $("#filters-modal").modal('show');
    });
});

/**------------------product-details------------*/

const productsCollection = document.querySelectorAll('.furniture__item');

const productDetails = [
    {
        imgSrc: 'dist/img/products/furniture/1.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '30.00',
        dataNumber: 0,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/2.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 1,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/3.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 2,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/4.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 3,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/5.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 4,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/6.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 5,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/7.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 6,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/8.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 7,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/9.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 8,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/10.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '30.00',
        dataNumber: 9,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/11.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 10,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/12.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 11,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/13.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 12,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/14.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 13,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/15.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 14,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/16.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 15,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/17.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: false,
        price: '15.00',
        dataNumber: 16,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/18.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 17,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/19.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 19,
        inCart: 0,
    },
    {
        imgSrc: 'dist/img/products/furniture/20.png',
        title: 'Aenean Ru Bristique',
        rate: 2,
        isSaling: true,
        lastPrice: '35.00',
        price: '25.00',
        dataNumber: 19,
        inCart: 0,
    }
];

const quickViewBtns = document.querySelectorAll('.btn-quick-view');
const furnitureBox = document.querySelector('.furniture');
const productModal = document.querySelector('#product-details');
const addBtns = furnitureBox.querySelectorAll('.btn-add-to-cart');
const addBtnModal = productModal.querySelector('.btn-add-to-cart');

for (let i = 0; i < productsCollection.length; i++) {
    productsCollection[i].setAttribute('data-number', `${i}`);
    quickViewBtns[i].setAttribute('data-number', `${i}`);
    addBtns[i].setAttribute('data-number', `${i}`);
}

addBtns.forEach(item => {
    item.addEventListener('click', () => {
        const dataAttr = item.getAttribute('data-number');
        addToCart(dataAttr);
        changeCartCounter();
    })
});

addBtnModal.addEventListener('click', () => {
    const dataAttr = productModal.getAttribute('data-number');
    addToCart(dataAttr);
    changeCartCounter();
});

function addToCart(dataAttr) {
    let productFromDB = Object.assign({},
        productDetails.find(product => product.dataNumber === Number(dataAttr)));
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));

    cartItems = (cartItems && cartItems.length) ? cartItems : [];
    productFromDBinCart = cartItems.find(product => product.dataNumber === productFromDB.dataNumber);

    if (productFromDBinCart) {
        productFromDBinCart.inCart += 1;
    } else {
        productFromDB.inCart += 1;
        cartItems.push(productFromDB);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

quickViewBtns.forEach(item => {
    item.addEventListener('click', (event) => {
        const dataAttr = item.getAttribute('data-number');

        productDetails.forEach(object => {
            if (object.dataNumber === Number(dataAttr)) {

                const src = object.imgSrc;
                const sale = object.isSaling;
                productModal.setAttribute('data-number', `${dataAttr}`);
                const modalSale = productModal.querySelector('.footer__sale');
                if (sale) {
                    modalSale.innerText = `$${object.lastPrice}`;
                } else {
                    modalSale.classList.add('d-none');
                }
                const modalImg = productModal.querySelector('.details__img');
                const modalPrice = productModal.querySelector('.footer__price');
                modalImg.setAttribute('src', `${src}`);
                modalPrice.innerText = `$ ${object.price}`;
            }
        });
        $("#product-details").modal('show');
    });
});

function changeInputPlaceholder() {
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth < 767) {
        const inputEmail = document.querySelector('#inputEmail');
        inputEmail.setAttribute('placeholder', 'Subscribe to newsletter');
    } else {
        inputEmail.setAttribute('placeholder', 'Enter your email address');
    }
}


$('[data-toggle="popover"]').popover().click(function () {
    setTimeout(function () {
        $('[data-toggle="popover"]').popover('hide');
    }, 800);
});


$(document).ready(
    changeInputPlaceholder()
);

const menuBtn = document.querySelector('.top-menu-list__btn');
const openMenuIcons = document.querySelector('.fa-menu');
const closeMenuIcons = document.querySelector('.fa-close');
const topMenu = document.querySelector('.top-menu-links');
const navSection = document.querySelector('.top-menu-list');
let tumbler = false;

/**------------------product-data------------*/

const tabContent = [productDetails, productDetails, productDetails, productDetails];

/**-----------------Foldable-menu-------------------------*/

function displayMenu() {
    if (!tumbler) {
        topMenu.classList.remove('top-menu-list__links--visibility');
        if($(window).outerWidth()<1200){
        navSection.classList.add('menu-opened');
        }
        openMenuIcons.classList.add('top-menu-list__btn--active');
        closeMenuIcons.classList.remove('top-menu-list__btn--active');
    } else {
        topMenu.classList.add('top-menu-list__links--visibility');
        // if($(window).outerWidth()<1200){
        navSection.classList.remove('menu-opened');
        // }
        openMenuIcons.classList.remove('top-menu-list__btn--active');
        closeMenuIcons.classList.add('top-menu-list__btn--active');
    }
    tumbler = !tumbler;
}
menuBtn.addEventListener('click', displayMenu);

// --------------------------------------------------------------------------------

//bottom slider

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">\<</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">\></button>',
        dots: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 542,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });
    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    $('.left').click(function () {
        $('.slider').slick('slickPrev');
    });
    $('.right').click(function () {
        $('.slider').slick('slickNext');
    });

});

$('.furniture-gallery-tabs').click(function (event) {
    event.preventDefault();
    $('.furniture-gallery__tab--active').removeClass("active furniture-gallery__tab--active");
    if ($(event.target).hasClass("nav-link")) {
        $(event.target).addClass("active furniture-gallery__tab--active");
    } else if ($(event.target).firstChild.hasClass('nav-link')) {
        $(event.target).firstChild.addClass("active furniture-gallery__tab--active");
    };
    changeTabContent();
    changeNameAndPrice();

});

const changeNameAndPrice = () => {
    const activeTabIndex = $('.active.furniture-gallery__tab--active').parent().attr('data-tab-number');
    $('.new-price').text(`\$${tabContent[activeTabIndex][$('.slick-current.slick-active').attr('data-slider-number')].price}`);
    $('.old-price').text(`\$${tabContent[activeTabIndex][$('.slick-current.slick-active').attr('data-slider-number')].price * 2}.00`);
    $('.item-name').text(`\$${tabContent[activeTabIndex][$('.slick-current.slick-active').attr('data-slider-number')].title}`);
}

const changeTabContent = () => {
    const activeTabIndex = $('.active.furniture-gallery__tab--active').parent().attr('data-tab-number');

    const $images = $('.image-wrapper img');
    const $previewImages = $('.image-preview-wrapper img');

    $images.each(function () {
        $(this).attr('src', `${tabContent[activeTabIndex][$(this).parent().attr('data-slider-number')]['imgSrc']}`);
    });

    $previewImages.each(function () {
        $(this).attr('src', `${tabContent[activeTabIndex][$(this).parent().attr('data-slider-number')]['imgSrc']}`);
    });
}

$('.slider-nav').click(changeNameAndPrice);

/*-----------------add to cart--------------------- */
const $cartCounter = $('.basket__item-counter span');

function changeCartCounter() {
    // let $cartCounterValue = +$cartCounter.html();
    // $cartCounterValue++;
    // $cartCounter.html($cartCounterValue);

    let addedItemsCounter = 0;
    const addedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (localStorage.hasOwnProperty('cartItems')) {
        addedItems.forEach(element => {
            addedItemsCounter += element['inCart'];
        });
    }

    changeCartType(addedItemsCounter);
    $cartCounter.html(addedItemsCounter);
}

function changeItemSum(item) {
    let totalSumOfItem = item['price']*item['inCart'];
    $(`.sum[data-number="${item['dataNumber']}"]`).text(`${totalSumOfItem}.00`);
    
}

function changeCartTotalSum(data) {
    let totalSumOfProducts = 0;
    data.forEach(element => {
        totalSumOfProducts += (element['price'] * element['inCart']);
    });
    $('.total__summ').text(totalSumOfProducts);
}

function changeCartType(counter) {
    if (counter > 0) {
        $('#openCart').attr('data-target', '#fullCart');
    } else {
        $('#openCart').attr('data-target', '#emptyCard');
    }
}

function emptyCart() {
    $('.added-item-container').fadeOut(500);
    setTimeout(() => {
        $('.fullCartModalBody').html('');
    }, 500);
    $('.total__summ').html('0');
    localStorage.clear();
    changeCartCounter();
    $('#fullCart').modal('hide');
}

function fillCart() {
    const addedItems = JSON.parse(localStorage.getItem('cartItems'));
    $('.fullCartModalBody').empty();


    addedItems.forEach(element => {


        $('.fullCartModalBody').append(`<div class="added-item-container d-flex flex-wrap rounded-sm" data-number="${element['dataNumber']}">
    <div class="cart-item-image-wrapper">
        <img src="${element['imgSrc']}" alt="product image" class="cart-item-image">
    </div>
    <div class="name-price-wrapper d-flex flex-column justify-content-start align-items-start">
        <h2 class="added-item-name">${element['title']}</h2>
        <div class="priceinner-wrapper d-flex flex-column flex-md-row justify-content-between align-items-start align-items-sm-center">
            <s class="old-price">$<span class="old-price-ammount">${element['price'] / 0.5}</span></s>
            <span class="new-price">$<span class="new-price-ammount">${element['price']}</span></span>
        </div>
    </div>
    <div class="quantity-sum-wrapper d-flex justify-content-between justify-content-md-end">
        <div class="quantity-wrapper d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
            <span class="quantity-title">Quantity:</span>
            <div class="quantity-counter-wrapper d-flex justify-content-between">
                <div class="quantity-counter-inner-wraper d-flex justify-content-center align-items-center">
                    <span class="quantity-counter" data-number="${element['dataNumber']}">${element['inCart']}</span>
                </div>
                <div class="decrease-quantity change-quantity-btn d-flex justify-content-center align-items-center" data-number="${element['dataNumber']}"><i class="fas fa-minus"></i></div>
                <div class="increase-quantity change-quantity-btn d-flex justify-content-center align-items-center" data-number="${element['dataNumber']}"><i class="fas fa-plus"></i></div>
            </div>
        </div>
        <div class="sum-wrapper d-flex flex-column justify-content-between align-items-center">
            <span class="sum-title">Sum</span>
            <span class="sum-ammount">$<span class="sum" data-number="${element['dataNumber']}">${element['price'] * element['inCart']}.00</span></span>
        </div>
    </div>
    </div>`);

    });

    changeCartTotalSum(addedItems);
}

function changeAddedItemsQuantity(event) {
    const addedItems = JSON.parse(localStorage.getItem('cartItems'));
    let $target = $(event.target);
    if ($target.hasClass('change-quantity-btn')) {
        changeQuantity($target);

    } else if ($target.parent().hasClass('change-quantity-btn')) {
        let $targetItem = $target.parent();
        changeQuantity($targetItem);
    }

    function changeQuantity(targetItem) {
        let productInCart = addedItems.find(product => product.dataNumber == targetItem.attr('data-number'));

        if (targetItem.hasClass('decrease-quantity') && productInCart.inCart > 0) {
            console.log('was'+productInCart.inCart);
            productInCart.inCart -= 1;
            console.log('added');
            console.log(productInCart.inCart);

        } else if (targetItem.hasClass('increase-quantity')) {
            console.log('was'+productInCart.inCart);
            productInCart.inCart += 1;
            console.log('removed');
            console.log(productInCart.inCart);
        }
        // debugger;
        if(productInCart.inCart === 0){
            addedItems.splice(addedItems.indexOf(productInCart), addedItems.indexOf(productInCart)+1);
            $(`.added-item-container[data-number="${productInCart['dataNumber']}"]`).fadeOut(300, function(){
                $(`.added-item-container[data-number="${productInCart['dataNumber']}"]`).remove();
            });
        }

        targetItem.parent('.quantity-counter-wrapper').children('.quantity-counter-inner-wraper').children('.quantity-counter').text(productInCart.inCart);

        changeItemSum(productInCart);
        changeCartTotalSum(addedItems);
        if(addedItems.length>0){
        localStorage.setItem('cartItems', JSON.stringify(addedItems));
        }else {
            emptyCart();
        }
        changeCartCounter();
    }
}

// function changeAddedItemsQuantity (event){
// console.log($(event.target).parent().hasClass('change-quantity-btn'));
// const addedItems = JSON.parse(localStorage.getItem('cartItems'));

// let $target = $(event.target);
// if($target.hasClass('change-quantity-btn')||$target.parent().hasClass('change-quantity-btn')){
//     console.log('has class');
// }

// if(event.target.classList.contains('change-quantity-btn')){
//     // let $targetItem = $target.parent('.added-item-container');
//     // let productInCart = addedItems.find(product => product.dataNumber == $targetItem.attr('data-number'));

//     // if($target.hasClass('decrease-quantity')){
//     //     productInCart.inCart += 1;
//     //     console.log('added');

//     // }else if($target.hasClass('increase-quantity')){
//     //     productInCart.inCart -= 1;
//     // }

//     // localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     console.log('has class');
// }
// }

$('.fullCartModalBody').click(changeAddedItemsQuantity);

function addToCartFromGallery() {
    let $attrNumber = $('.image-wrapper.slick-current.slick-active').attr('data-number');
    $('.toast').toast('show');
    addToCart($attrNumber);
    changeCartCounter();
}

function quickViewFromGallery() {
    let dataAttr = $('.image-wrapper.slick-current.slick-active').attr('data-number');
    productDetails.forEach(object => {
        if (object.dataNumber === Number(dataAttr)) {

            const src = object.imgSrc;
            const sale = object.isSaling;
            productModal.setAttribute('data-number', `${dataAttr}`);
            const modalSale = productModal.querySelector('.footer__sale');
            if (sale) {
                modalSale.innerText = `$${object.lastPrice}`;
            } else {
                modalSale.classList.add('d-none');
            }
            const modalImg = productModal.querySelector('.details__img');
            const modalPrice = productModal.querySelector('.footer__price');
            modalImg.setAttribute('src', `${src}`);
            modalPrice.innerText = `$${object.price}`;
        }
    });
    $("#product-details").modal('show');
}

$('.quick-view.control-icon').click(quickViewFromGallery);
$('.add-to-cart.control-icon').click(addToCartFromGallery);
$('#emptyCart').click(emptyCart);
$('#openCart').click(function () {
    if (localStorage.hasOwnProperty('cartItems')) {
        fillCart();
    } else {
        return;
    }
});
$('document').ready(changeCartCounter);

let header = $('.top-menu-fill'),
    scrollPrev = 0;

$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 230 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});


//Soft scroll to linked block
$(document).ready(function () {
    $(".top-menu-links").click(function (event) {
        let $target = $(event.target);
        $('.top-menu-links__item--active').removeClass('top-menu-links__item--active');
        if ($target.is('a.list-item__link')) {
            $target.parent('li').toggleClass('top-menu-links__item--active');
            let elementClick = $target.attr("href");
            let destination = $(elementClick).offset().top;
            $("body,html").animate({ scrollTop: destination }, 800);
        } else if ($target.children().is('a.list-item__link')) {
            $target.children().click();
        }
        menuBtn.click();
    });
});