let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

let buyActionLinks = document.querySelectorAll(".js-add-to-cart");
let buyActionPopup = document.querySelector(".modal");
let buyActionClose = document.querySelector(".modal .btn--modal");
let buyActionPage = document.querySelector(".page__body");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (buyActionLinks.length > 0) {
  for (buyActionLink of buyActionLinks) {
    buyActionLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      buyActionPopup.classList.add("modal__show");
      buyActionPage.classList.add("page__dim");
    });

    buyActionClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      buyActionPopup.classList.remove("modal__show");
      buyActionPage.classList.remove("page__dim");
    });
  }

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      for (buyActionLink of buyActionLinks) {
        if (buyActionPopup.classList.contains("modal__show")) {
          evt.preventDefault;
          buyActionPopup.classList.remove("modal__show");
          buyActionPage.classList.remove("page__dim");
        }
      }
    }
  });
}
