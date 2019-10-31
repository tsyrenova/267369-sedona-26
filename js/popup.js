var popup = document.querySelector(".search-hotel__popup-form");
var buttonPopup = document.querySelector(".search-hotel__button");
popup.classList.remove("search-hotel__popup-form--show")

buttonPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("search-hotel__popup-form--show");
});
