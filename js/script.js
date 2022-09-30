var menu = document.querySelector('.header-menu-icon');
var list = document.querySelector('.header__list');
var exit = document.querySelector('.exit');

menu.addEventListener('click', function () {
  list.style.right = "0"
})

exit.addEventListener('click', function () {
  list.style.right = "-180px"
})