const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

const button = selectDOMElement('.burger-menu');
const list = selectDOMElement('.list');
const overlay = selectDOMElement('.header__overlay');
const body = selectDOMElement('.body')

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

function closeBurgerMenu() {
  // Выполняем действие, если ширина меньше 564px
  const windowWidth = window.innerWidth;

  if (windowWidth > $breakpointSm) {
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

//Counter
const buttonPlus = selectDOMElement('.click-plus');
const buttonMinus = selectDOMElement('.click-minus');
const amount = selectDOMElement('.amount');
let count = amount.innerHTML;

buttonMinus.addEventListener('click', () => {
  amount.innerHTML = `${amount.innerHTML - 1}`;

  if (amount.innerHTML <= 0) {
    amount.innerHTML = 0;
  }
})

buttonPlus.addEventListener('click', () => {
  count = `${amount.innerHTML++}`;
})