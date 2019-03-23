var advert = document.querySelector(".advert");

var advertClose = function() {
  advert.style.display = "none";
};

var menuButton = document.querySelector(".menu-button");
console.log('h1');
var isMenuOpen = false;

var menuOpen = function() {
  if (isMenuOpen) {
    menuButton.classList.remove('menu-button--close');
    isMenuOpen = false;
  }
  else {
    menuButton.classList.add('menu-button--close');
    isMenuOpen = true;
  }
  
}