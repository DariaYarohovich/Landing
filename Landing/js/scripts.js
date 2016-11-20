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



var closeOrderForm = document.querySelector('.popup__order--active');


