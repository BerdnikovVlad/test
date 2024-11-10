const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__mobile');
const overlay = document.querySelector('.header__overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__mobile--active');
  overlay.classList.toggle('header__overlay--visible');
  document.body.classList.toggle('dis-scroll');
});

overlay.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__mobile--active');
  overlay.classList.remove('header__overlay--visible');
  document.body.classList.remove('dis-scroll');
});
