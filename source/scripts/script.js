var advert = document.querySelector(".advert");

var advertClose = function() {
  advert.style.display = "none";
};

var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".main-nav__container");
var isMenuOpen = false;

var menuOpen = function() {
  if (isMenuOpen) {
    menu.classList.remove('main-nav__container--active');
    menuButton.classList.remove('menu-button--close');
    isMenuOpen = false;
  }
  else {
    menuButton.classList.add('menu-button--close');
    menu.classList.add('main-nav__container--active');
    isMenuOpen = true;
  }
  
}