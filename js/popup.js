var popup = document.querySelector(".search-hotel__popup-form");
var buttonPopup = document.querySelector(".search-hotel__button");
var isPopupHide = true;


buttonPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (isPopupHide) {
    popup.classList.add("search-hotel__popup-form--show");
    isPopupHide = false;
  } else {
    popup.classList.remove("search-hotel__popup-form--show");
    isPopupHide = true;
  }

});
