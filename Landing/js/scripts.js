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

    if (~target.className.indexOf('slider__item-features')) {
        for (var i = 0; i < sliderBlock.children.length; i++) {
            var getOpacity = getComputedStyle(sliderBlock.children[i]).opacity;
            if (getOpacity == 1) {
                    options = sliderBlock.children[i].querySelector('.catalogue__hover');
                    options.classList.add('catalogue__hover--show');
            }
        }
    }

    if (~target.className.indexOf('catalogue__hover-close')) {
        options.classList.remove('catalogue__hover--show');
    }

    if (~target.className.indexOf('slider__item-btn')) {
        togglePopupBg();
        orderForm.classList.add('popup__order--active');

        var model = target.getAttribute('data-model');

        var input = document.querySelector('input[name="model"]');
        input.setAttribute('value', model);

        console.log(input);
    }
};
/*====================ORDER FORM=======================*/

orderForm.addEventListener('click', function (event) {
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
        var model = target.getAttribute('data-model');

        var input = document.querySelector('input[name="model"]');
        input.setAttribute('value', model);
    }

    if (~target.className.indexOf('catalogue__item-img') && target.nextElementSibling) {
        target.nextElementSibling.style.display = 'block';
    }

    if (~target.className.indexOf('catalogue__hover-close')) {
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


(function (){
    var allMinItemImages = document.querySelectorAll('.catalogue__hover-gall-item');

    for (var i = 0; i < allMinItemImages.length; i++) {
        var img = allMinItemImages[i];

        if (img.parentNode.tagName == 'A') {
            img.parentNode.setAttribute('href', img.getAttribute('src'));
            img.parentNode.setAttribute('rel', "group");
            img.parentNode.classList.add('fancybox');
        }
    }
}());
/*====================CLOSE SUCCESS POPUP=======================*/


    var succsessPopup = document.querySelector('.popup__designer-submit');

    succsessPopup.addEventListener('click', function (event) {
        var target = event.target;

        if (target.tagName == 'I' || target.tagName == 'BUTTON') {
            succsessPopup.style.display = 'none';
            BgForPopups.style = null;
            BgForPopups.classList.remove('popup-bg--active');

            designerForm.classList.remove("popup__designer-call--active");
            designerForm.style = '';

            orderForm.classList.remove('popup__order--active');
            orderForm.style.display = '';

        }
    });

/*====================ITEMS FROM JSON=======================*/

jQuery( document ).ready( function() {

function getSofas(jsonFile, placeForInput) {
        $.getJSON(jsonFile, function(data) {
            for(var i=0; i<data.sofas.length; i++){

                var addImg = '';
                if (data.sofas[i].addImages) {
                    for (var j=0; j<data.sofas[i].addImages.length; j++) {
                        addImg+= '<a class="catalogue__hover-gall-link fancybox" href="'+ data.sofas[i].addImages[j] +'"><img src="'+ data.sofas[i].addImages[j] +'" alt="" class="catalogue__hover-gall-item"></a>';
                    }
                }

                var sale = function() {
                    if (data.sofas[i].price && data.sofas[i].priceOld) {
                        var discount = Math.round(100 - (data.sofas[i].price / data.sofas[i].priceOld  * 100));
                        return '<i class=\"catalogue__spo\">'+ discount + ' %</i>';
                    }
                    return '';
                };

                $(placeForInput).append(
                    '<article class="catalogue__item">' + sale() +
                    '<div class="catalogue__img-block">' +
                    '<img class="catalogue__item-img" src="'+ data.sofas[i].mainPhoto +'" alt="'+ data.sofas[i].name +'" width="348" height="152">' +
                    '<div class="catalogue__hover">' +
                    '<i class="catalogue__hover-close"></i>' +
                    '<p class="catalogue__hover-title block__title--bold">'+ data.sofas[i].name +'</p>' +
                    '<div class="catalogue__hover-desc-block">' +
                    '<div class="catalogue__hover-sizes-block--1">' +
                    '<p class="catalogue__hover-size">Размеры</p>' +
                    '<div class="catalogue__hover-size-item">Длина<br> <span class="catalogue__hover-size-number">'+ data.sofas[i].long +'</span> <span class="catalogue__hover-size-sm">см</span></div>' +
                    '<div class="catalogue__hover-size-item">Ширина<br> <span class="catalogue__hover-size-number">'+ data.sofas[i].width +'</span> <span class="catalogue__hover-size-sm">см</span></div>' +
                    '<div class="catalogue__hover-size-item">Высота<br> <span class="catalogue__hover-size-number">'+ data.sofas[i].height +'</span> <span class="catalogue__hover-size-sm">см</span></div>' +
                    '</div>' +
                    '<div class="catalogue__hover-sizes-block--2">' +
                    '<p class="catalogue__hover-size">Спальное место</p>' +
                    '<div class="catalogue__hover-size-item">Длина<br> <span class="catalogue__hover-size-number">'+ data.sofas[i].sleeperLong +'</span> <span class="catalogue__hover-size-sm">см</span></div>' +
                    '<div class="catalogue__hover-size-item">Ширина<br> <span class="catalogue__hover-size-number">'+ data.sofas[i].sleeperWidth +'</span> <span class="catalogue__hover-size-sm">см</span></div>' +
                    '<div class="catalogue__hover-size-item">Высота<br> <span class="catalogue__hover-size-number">'+ data.sofas[i].sleeperHieght +'</span> <span class="catalogue__hover-size-sm">см</span></div>' +
                    '</div>' +
                    '<div class="catalogue__hover-color">' +
                    '<p class="catalogue__hover-size">Любой цвет на выбор</p>' +
                    '<div class="catalogue__hover-color-desc">Наш дизайнер приедет и покажет всю цветовую палитру</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="catalogue__hover-details-block">'+
                    '<div class="catalogue__hover-gallery" >'+
                    addImg +
                    '</div>'+
                    '<p class="catalogue__hover-details-desc">'+
                    'Каркас: <span class="catalogue__hover-details--cont">'+ data.sofas[i].frame +'</span><br>'+
                    'Механизм: <span class="catalogue__hover-details--cont">'+ data.sofas[i].mechanism +'</span><br>'+
                    'Основание: <span class="catalogue__hover-details--cont">'+ data.sofas[i].base +'</span><br>'+
                    'Обивка: <span class="catalogue__hover-details--cont">'+ data.sofas[i].upholstery +'</span><br>'+
                    'Комплектация: <span class="catalogue__hover-details--cont">'+ data.sofas[i].equipment +'</span>'+
                    '</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="catalogue__item-desc">'+
                    '<p class="catalogue__item-name">Диван<br> <span class="catalogue__item-name--orange">'+ data.sofas[i].name +'</span></p>'+
                    '<div class="price catalogue__item-price">'+
                    '<span class="slider__price--old catalogue__price--old">'+ data.sofas[i].priceOld +'</span>'+
                    '<span class="slider__price--new catalogue__price--new">'+ data.sofas[i].price +'<span> руб</span></span>'+
                    '</div>'+
                    '<button class="btn slider__item-btn catalogue__item-btn" data-model="'+ data.sofas[i].name +'">Заказать</button>'+
                    '</div> ' +
                    '</article>');
            }
        })
    };
getSofas('sofas-direct.json', '#items-right');
getSofas('sofas-corner.json', '#items-corner');
getSofas('sofas-module.json', '#items-module');
getSofas('sofas-puff.json', '#items-puff');
});

/* test script */

var name = document.querySelector('.page-header h1').innerText;

var mainPhoto = document.querySelector("#my_inner_html img").getAttribute('src');
mainPhoto = 'img/sofas' + mainPhoto.substring(31);

var addImg = document.getElementById('my_inner_html').querySelectorAll('a img');
var addImages = [];
for (var i = 0; i < addImg.length; i++) {
    addImages.push('img/sofas' + addImg[i].getAttribute('src').substring(31));
}

addImages = addImages.map( function(elem) {
    return elem = '\"'+ elem + '\"';
});


var price = document.querySelector('.divan-table .gris font b').innerText;
var priceOld = document.querySelector('.divan-table tfoot del').innerText;
priceOld = priceOld.split(' ').join('').slice(0,4);

var long, width, height;
var sizes = document.querySelectorAll('.divan-table')[1].querySelectorAll('tbody tr:first-child .gris');
var sizesClean = [];
for (var j = 0; j < sizes.length; j++) {
    sizesClean.push(sizes[j].innerText);
}
[long, width, height] = sizesClean;


var sleeperLong, sleeperWidth, sleeperHeight;
var sizes = document.querySelectorAll('.divan-table')[1].querySelectorAll('tbody tr:nth-child(2) .gris');
var sizesClean = [];
for (var j = 0; j < sizes.length; j++) {
    sizesClean.push(sizes[j].innerText);
}
[sleeperLong, sleeperWidth, sleeperHeight] = sizesClean;


var mechanism, base, upholstery;
var sizes = document.querySelectorAll('.divan-table')[1].querySelectorAll('tbody tr:nth-child(4) .gris');
var sizesClean = [];
for (var j = 0; j < sizes.length; j++) {
    sizesClean.push(sizes[j].innerText);
}
[mechanism, base, upholstery] = sizesClean;

function cleanStr(str) {
    str = str.split('\n');
    str = str.filter(function(item) {
        if (item) {
            return item;
        }
    });
    return str.join(', ');
}

base = cleanStr(base);
upholstery = cleanStr(upholstery);

var equipment;
var sizes = document.querySelectorAll('.divan-table')[1].querySelectorAll('tbody tr:nth-child(5) .gris');
var sizesClean = [];
for (var j = 0; j < sizes.length; j++) {
    sizesClean.push(sizes[j].innerText);
}
equipment = sizesClean.join(', ');

var jsonObj = `{
        "name": "${name}",
		"discaunt": "<i class=\"catalogue__spo>\">35%</i>",
		"price": "${price}",
		"priceOld": "${priceOld}",
		"width": "${width}",
		"height": "${height}",
		"long": "${long}",
		"mainPhoto": "${mainPhoto}",
		"sleeperWidth": "${sleeperWidth}",
		"sleeperHieght": "${sleeperHeight}",
		"sleeperLong": "${sleeperLong}",
		"frame": "Массив дерева",
		"mechanism": "${mechanism}",
		"base": "${base}",
		"upholstery": "${upholstery}",
		"equipment": "${equipment}",
		"addImages": [${addImages}]
}`;

console.log(jsonObj);