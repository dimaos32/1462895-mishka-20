let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

let buyActionLinks = document.querySelectorAll(".js-add-to-cart");
let buyActionPopup = document.querySelector(".modal");
let buyActionClose = document.querySelector(".modal .btn--modal");

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
      buyActionPopup.classList.add("modal-show");
    });

    buyActionClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      buyActionPopup.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      for (buyActionLink of buyActionLinks) {
        if (buyActionPopup.classList.contains("modal-show")) {
          evt.preventDefault;
          buyActionPopup.classList.remove("modal-show");
        }
      }
    }
  });
}
