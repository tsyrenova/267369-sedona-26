var popup = document.querySelector(".search-hotel__popup-form");
var buttonPopup = document.querySelector(".search-hotel__button");

buttonPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("search-hotel__popup-form--show");
});