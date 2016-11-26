var buttonRight = document.querySelector(".catalogue__filter-item--right");
var buttonCorner = document.querySelector(".catalogue__filter-item--corner");
var buttonModule = document.querySelector(".catalogue__filter-item--module");
var buttonPuff = document.querySelector(".catalogue__filter-item--puff");

var blockRight = document.querySelector(".catalogue__items-right");
var blockCorner = document.querySelector(".catalogue__items-corner");
var blockModule = document.querySelector(".catalogue__items-module");
var blockPuff = document.querySelector(".catalogue__items-puff");

buttonRight.addEventListener("click", function(){
    buttonCorner.classList.remove('catalogue__filter-item--active');
    buttonModule.classList.remove('catalogue__filter-item--active');
    buttonPuff.classList.remove('catalogue__filter-item--active');
    buttonRight.classList.add('catalogue__filter-item--active');
    
    blockRight.classList.add('catalogue__items--show');
    blockCorner.classList.remove('catalogue__items--show');
    blockModule.classList.remove('catalogue__items--show');
    blockPuff.classList.remove('catalogue__items--show');
})

buttonCorner.addEventListener("click", function(){
    buttonRight.classList.remove('catalogue__filter-item--active');
    buttonModule.classList.remove('catalogue__filter-item--active');
    buttonPuff.classList.remove('catalogue__filter-item--active');
    buttonCorner.classList.add('catalogue__filter-item--active');
    
    blockCorner.classList.add('catalogue__items--show');
    blockRight.classList.remove('catalogue__items--show');
    blockModule.classList.remove('catalogue__items--show');
    blockPuff.classList.remove('catalogue__items--show');
})

buttonModule.addEventListener("click", function(){
    buttonRight.classList.remove('catalogue__filter-item--active');
    buttonCorner.classList.remove('catalogue__filter-item--active');
    buttonPuff.classList.remove('catalogue__filter-item--active');
    buttonModule.classList.add('catalogue__filter-item--active');
    
    blockModule.classList.add('catalogue__items--show');
    blockCorner.classList.remove('catalogue__items--show');
    blockRight.classList.remove('catalogue__items--show');
    blockPuff.classList.remove('catalogue__items--show');
})

buttonPuff.addEventListener("click", function(){
    buttonRight.classList.remove('catalogue__filter-item--active');
    buttonModule.classList.remove('catalogue__filter-item--active');
    buttonCorner.classList.remove('catalogue__filter-item--active');
    buttonPuff.classList.add('catalogue__filter-item--active');
    
    blockPuff.classList.add('catalogue__items--show');
    blockCorner.classList.remove('catalogue__items--show');
    blockModule.classList.remove('catalogue__items--show');
    blockRight.classList.remove('catalogue__items--show');
})
