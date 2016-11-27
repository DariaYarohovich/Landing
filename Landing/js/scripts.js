/*================MAP=================*/
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.932324, 27.509064],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([53.935324, 27.494064], {
            hintContent: "Пр-т Победителей, 103, оф. 1117",
            balloonContent: "MebelLive"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: "img/map-mark.png",
            // Размеры метки.
            iconImageSize: [58, 96],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects.add(myPlacemark);
});

var BgForPopups = document.querySelector('.popup-bg');

function togglePopupBg() {
    BgForPopups.classList.toggle('popup-bg--active');
}

var orderForm = document.querySelector('.popup__order');


/*====================DESIGNER-CALL=======================*/

var callToDesigner = document.querySelector('.main-header__designer--btn');
var designerForm = document.querySelector('.popup__designer-call');

callToDesigner.addEventListener('click', function () {
    togglePopupBg();
    designerForm.classList.add("popup__designer-call--active");
});

var closeDesignerForm = designerForm.querySelector('.catalogue__hover-close');

closeDesignerForm.addEventListener('click', function () {
    togglePopupBg();
    designerForm.classList.remove("popup__designer-call--active");

});

/*====================SLIDER=======================*/

var sliderBlock = document.querySelector('.slider__block');
var options;

sliderBlock.onclick = function (event) {
    var target = event.target;

    if (target.className == 'slider__item-features') {
        for (var i = 0; i < sliderBlock.children.length; i++) {
            var getOpacity = getComputedStyle(sliderBlock.children[i]).opacity;
            if (getOpacity == 1) {
                    options = sliderBlock.children[i].querySelector('.catalogue__hover');
                    options.classList.add('catalogue__hover--show');
            }
        }
    }

    if (target.className == 'catalogue__hover-close') {
        options.classList.remove('catalogue__hover--show');
    }

    if (target.className == 'btn slider__item-btn') {
        togglePopupBg();
        orderForm.classList.add('popup__order--active');
    }
};

/*====================CLOSE ORDER FORM=======================*/


orderForm.addEventListener('click', function (event) {
    //var closeElem = orderForm.querySelector('.catalogue__hover-close');
    var target = event.target;

   if (target.tagName == 'I') {
        togglePopupBg();
        orderForm.classList.remove('popup__order--active');
    }

});

/*====================OPEN ORDER FORM FROM CATALOG=======================*/

var catalog = document.querySelector('.catalogue__items');

catalog.addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName == 'BUTTON') {
        togglePopupBg();
        orderForm.classList.add('popup__order--active');
    }

    if (target.className == 'catalogue__item-img') {
        target.nextElementSibling.style.display = 'block';
    }

    if (target.className == 'catalogue__hover-close') {
        target.parentNode.style.display = 'none';
    }
});

/*====================QUALITY DETAILS=======================*/

var quality = document.querySelector('.quality');
var qualityPopUp = document.querySelectorAll('.quality__popup');
var numberOfQuality = 0;


quality.addEventListener('click', function (event) {
    var target = event.target;
    var qualityDesks = target.className.indexOf('quality__desc');

   if (qualityDesks == -1) return;
    numberOfQuality = target.className.slice(-1);
    qualityPopUp[numberOfQuality - 1].classList.add('quality__popup--active');

});

var qualitiesPopupContainer = document.querySelector('.qualities__pupup-container');

qualitiesPopupContainer.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName != 'I') return;

    for (var i = 0; i < qualitiesPopupContainer.children.length; i++) {
        if(qualitiesPopupContainer.children[i].className.indexOf('quality__popup--active')) {
            qualitiesPopupContainer.children[i].classList.remove('quality__popup--active');
        }
    }
});

/*====================FANCY BOX WRAPPER=======================*/


/*
(function (){
    var allMinItemImages = document.querySelectorAll('.catalogue__hover-gall-item');
    for (var i = 0; allMinItemImages.e; i++) {
        var img = allMinItemImages.elements[i];
        img.parentNode.classList.add('fancybox');


    }
})();
*/



