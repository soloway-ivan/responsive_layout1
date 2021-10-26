const button = document.querySelector('.burger-menu');
const list = document.querySelector('.list');
const overlay = document.querySelector('.header__overlay');
const body = document.querySelector('.body')

function burgerMenu() {
  button.addEventListener('click', (e) => {
    button.classList.toggle('active');
    list.classList.toggle('active');
    overlay.classList.toggle('show');
    body.classList.toggle('lock');
  });

  overlay.addEventListener('click', (e) => {
    overlay.classList.toggle('show');
    button.classList.toggle('active');
    list.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

burgerMenu();

function closeBurgerMenu() {
  // Выполняем действие, если ширина меньше 564px
  const windowWidth = window.innerWidth;

  if (windowWidth > 564) {
    overlay.classList.remove('show');
    button.classList.remove('active');
    list.classList.remove('active');
    body.classList.remove('lock');
  }
}

//  Выполняем заново при изменении размера окна
window.addEventListener('resize', function () {
  closeBurgerMenu();
});