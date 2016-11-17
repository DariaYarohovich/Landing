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

var popup = document.querySelector(".popup");
var orderBtn = document.querySelectorAll(".slider__item-btn");
var popupDesignerBtn = document.querySelector(".popup__btn--designer");
var popupDesignerBtnClose = document.querySelector(".popup__btn--designer-close");
var popupBg = document.querySelector(".popup-bg");
var designerCall = document.querySelector(".main-header__designer--btn");
var popupDesignerCall = document.querySelector(".popup__designer-call");
var popupDesignerSubmit = document.querySelector(".popup__designer-submit");
var popupOrder = document.querySelector(".popup__order");
var popupClose = document.querySelectorAll(".catalogue__hover-close--popup");


/*==============DESIGNER-CALL================*/

designerCall.addEventListener("click", function(event) {
    event.preventDefault();
    popupBg.classList.add("popup-bg--active");
    popupDesignerCall.classList.add("popup__designer-call--active");
});

popupDesignerBtn.addEventListener("click", function() {
    popupDesignerCall.classList.remove("popup__designer-call--active");
    popupDesignerSubmit.classList.add("popup__designer-submit--active");
});

popupDesignerBtnClose.addEventListener("click", function() {
    popupBg.classList.remove("popup-bg--active");
    popupDesignerSubmit.classList.remove("popup__designer-submit--active");
})

/*================ORDER=================*/

for (var i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener("click", function() {
    popupOrder.classList.add("popup__order--active");
    popupBg.classList.add("popup-bg--active");    
});
};

/*===============COMMON=================*/

for(var i = 0; i < popupClose.length; i++){
   popupClose[i].addEventListener("click", function() {
    popupBg.classList.remove("popup-bg--active");
    popupDesignerCall.classList.remove("popup__designer-call--active");
    popupOrder.classList.remove("popup__order--active");
    popupDesignerSubmit.classList.remove("popup__designer-submit--active");
}); 
};

popupBg.addEventListener("click", function() {
    popupBg.classList.remove("popup-bg--active");
    popupDesignerCall.classList.remove("popup__designer-call--active");
    popupOrder.classList.remove("popup__order--active");
    popupDesignerSubmit.classList.remove("popup__designer-submit--active");
    popupQuality1.classList.remove("quality__popup--active");
    popupQuality2.classList.remove("quality__popup--active");
    popupQuality3.classList.remove("quality__popup--active");
    popupQuality4.classList.remove("quality__popup--active");
    popupQuality5.classList.remove("quality__popup--active");
    popupQuality6.classList.remove("quality__popup--active");
});

/*=====================QUALITY===================*/

var popupQuality = document.querySelectorAll(".quality__popup");
var popupQualityClose = document.querySelectorAll(".catalogue__hover-close--quality-popup");
var qualityDesc1 = document.querySelector(".quality__desc--1");
var popupQuality1 = document.querySelector(".quality__popup--1");
var qualityDesc2 = document.querySelector(".quality__desc--2");
var popupQuality2 = document.querySelector(".quality__popup--2");
var qualityDesc3 = document.querySelector(".quality__desc--3");
var popupQuality3 = document.querySelector(".quality__popup--3");
var qualityDesc4 = document.querySelector(".quality__desc--4");
var popupQuality4 = document.querySelector(".quality__popup--4");
var qualityDesc5 = document.querySelector(".quality__desc--5");
var popupQuality5 = document.querySelector(".quality__popup--5");
var qualityDesc6 = document.querySelector(".quality__desc--6");
var popupQuality6 = document.querySelector(".quality__popup--6");

qualityDesc1.addEventListener("click", function() {
    popupBg.classList.add("popup-bg--active");
    popupQuality1.classList.add("quality__popup--active");
});
qualityDesc2.addEventListener("click", function() {
    popupBg.classList.add("popup-bg--active");
    popupQuality2.classList.add("quality__popup--active");
});
qualityDesc3.addEventListener("click", function() {
    popupBg.classList.add("popup-bg--active");
    popupQuality3.classList.add("quality__popup--active");
});
qualityDesc4.addEventListener("click", function() {
    popupBg.classList.add("popup-bg--active");
    popupQuality4.classList.add("quality__popup--active");
});
qualityDesc5.addEventListener("click", function() {
    popupBg.classList.add("popup-bg--active");
    popupQuality5.classList.add("quality__popup--active");
});
qualityDesc6.addEventListener("click", function() {
    popupBg.classList.add("popup-bg--active");
    popupQuality6.classList.add("quality__popup--active");
});

for(var i = 0; i < popupQualityClose.length; i++) {
    popupQualityClose[i].addEventListener("click", function() {
        popupBg.classList.remove("popup-bg--active");
        popupQuality1.classList.remove("quality__popup--active");
        popupQuality2.classList.remove("quality__popup--active");
        popupQuality3.classList.remove("quality__popup--active");
        popupQuality4.classList.remove("quality__popup--active");
        popupQuality5.classList.remove("quality__popup--active");
        popupQuality6.classList.remove("quality__popup--active");
});
};


/*======================FILTER=============================*/
var filter = document.querySelectorAll(".catalogue__filter-item");
var filterRight = document.querySelector(".catalogue__filter-item--right");
var filterCorner = document.querySelector(".catalogue__filter-item--corner");
var filterModule = document.querySelector(".catalogue__filter-item--module");
var filterPuff = document.querySelector(".catalogue__filter-item--puff");
var catalogueItem = document.querySelectorAll(".catalogue__item");
var itemRight = document.querySelectorAll(".catalogue__item--right");
var itemCorner = document.querySelectorAll(".catalogue__item--corner");
var itemModule = document.querySelectorAll(".catalogue__item--module");
var itemPuff = document.querySelectorAll(".catalogue__item--puff");

/*filterRight.addEventListener("click", function() {
    filterRight.classList.add("catalogue__filter-item--active");
    for(var i = 0; i < itemCorner.length; i++) {
        itemCorner[i].classList.add("catalogue__item--hide");
    };
    for(var i = 0; i < itemModule.length; i++) {
        itemModule[i].classList.add("catalogue__item--hide");
    };
    for(var i = 0; i < itemPuff.length; i++) {
        itemPuff[i].classList.add("catalogue__item--hide");
    };
});


var filterActive = document.querySelector(".catalogue__filter-item--active");*/

/*filterRight.addEventListener("click", function() {
  if (!filterRight.hasAttribute("catalogue__filter-item--active")) {
      filterRight.classList.add("catalogue__filter-item--active");
  };
});
filterRight.addEventListener("click", function() {
  if (filterRight.hasAttribute("catalogue__filter-item--active")) {
      filterRight.classList.remove("catalogue__filter-item--active");
  };
});*/

click = 1 /// объявляем переменную для хранения значения toogle
filterRight.addEventListener("click", function ToogleClick()
{
    if(click)
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        filterRight.classList.add("catalogue__filter-item--active");
        for(var i = 0; i < itemCorner.length; i++) {
            itemCorner[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemModule.length; i++) {
            itemModule[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemPuff.length; i++) {
            itemPuff[i].classList.add("catalogue__item--hide");
        };
        click = 0;
    }
    else
    {
         for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        for(var i = 0; i < catalogueItem.length; i++) {
            catalogueItem[i].classList.remove("catalogue__item--hide");
        };
        click = 1;
    }
});

filterCorner.addEventListener("click", function ToogleClick()
{
    if(click)
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        filterCorner.classList.add("catalogue__filter-item--active");
        for(var i = 0; i < itemCorner.length; i++) {
            itemCorner[i].classList.remove("catalogue__item--hide");
        };
        for(var i = 0; i < itemRight.length; i++) {
            itemRight[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemModule.length; i++) {
            itemModule[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemPuff.length; i++) {
            itemPuff[i].classList.add("catalogue__item--hide");
        };
        click = 0;
    }
    else
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        for(var i = 0; i < catalogueItem.length; i++) {
            catalogueItem[i].classList.remove("catalogue__item--hide");
        };
        click = 1;
    }
});

filterModule.addEventListener("click", function ToogleClick()
{
    if(click)
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        filterModule.classList.add("catalogue__filter-item--active");
        for(var i = 0; i < itemModule.length; i++) {
            itemModule[i].classList.remove("catalogue__item--hide");
            itemModule[i].classList.add(".catalogue__item--active");
        };
        for(var i = 0; i < itemRight.length; i++) {
            itemRight[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemCorner.length; i++) {
            itemCorner[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemPuff.length; i++) {
            itemPuff[i].classList.add("catalogue__item--hide");
        };
        click = 0;
    }
    else
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        for(var i = 0; i < catalogueItem.length; i++) {
            catalogueItem[i].classList.remove("catalogue__item--hide");
        };
        click = 1;
    }
});

filterPuff.addEventListener("click", function ToogleClick()
{
    if(click)
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        filterPuff.classList.add("catalogue__filter-item--active");
        for(var i = 0; i < itemPuff.length; i++) {
            itemPuff[i].classList.remove("catalogue__item--hide");
        };
        for(var i = 0; i < itemRight.length; i++) {
            itemRight[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemModule.length; i++) {
            itemModule[i].classList.add("catalogue__item--hide");
        };
        for(var i = 0; i < itemCorner.length; i++) {
            itemCorner[i].classList.add("catalogue__item--hide");
        };
        click = 0;
    }
    else
    {
        for(var i = 0; i < filter.length; i++){
            filter[i].classList.remove("catalogue__filter-item--active");
        };
        for(var i = 0; i < catalogueItem.length; i++) {
            catalogueItem[i].classList.remove("catalogue__item--hide");
        };
        click = 1;
    }
});

/*============VALIDATION=============*/

var formMain = document.querySelector(".contact__form");
var mainName = document.querySelector(".contact__input--name");
var mainEmail = document.querySelector(".contact__input--email");
var mainQuestion = document.querySelector(".contact__input--question");
var formDesigner = document.querySelector(".form__call-designer");
var designerEmail = document.querySelector(".form__call-designer input");
var formOrder = document.querySelector(".form__order");
var orderEmail = document.querySelector(".form__order input");

formMain.addEventListener("submit", function(event) {
    if(!mainName.value || !mainEmail.value || !mainQuestion.value) {
        event.preventDefault();
        console.log("Введите данные");
    }
});

formDesigner.addEventListener("submit", function(event) {
    if (!designerEmail.value) {
        event.preventDefault();
        console.log("Введите е-мейл");
    }   
});

formOrder.addEventListener("submit", function(event) {
    if (!orderEmail.value) {
        event.preventDefault();
        console.log("Введите е-мейл");
    }   
});

/*OPEN DETAILS*/

var sliderCharact = document.querySelectorAll(".slider__item-charact");
var sliderHover = document.querySelectorAll(".catalogue__hover.catalogue__hover--slider");
//var sliderHoverShow = document.querySelectorAll(".catalogue__hover-show");
var hoverClose = document.querySelectorAll(".catalogue__hover-close");

for (var i = 0; i < sliderCharact.length; i++) {
    sliderCharact[i].addEventListener("click", function() {
       this.lastElementChild.classList.add('catalogue__hover--show');   
});
};

for(var i = 0; i < hoverClose.length; i++) {
    hoverClose[i].addEventListener("click", function() {    
        this.parentElement.classList.remove("catalogue__hover--show");         
    });
};

/*jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".catalogue__hover--show"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("catalogue__hover--show"); // скрываем его
		}
	});
});*/



