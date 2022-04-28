const money = document.querySelector('.dollar'),
  peop = document.querySelector('.people'),
  perc = document.querySelectorAll('.percentage'),
  calc = document.querySelector('.calc'),
  total = document.querySelector('.tip-amount');

perc.forEach((num) => {
  console.log(num);
});

let expression;

calc.addEventListener('click', () => {
  perc.forEach((item) => {
    switch (item.value) {
      case '0.3':
        expression = Math.ceil((money.value * 0.3) / peop.value);
        break;
      case '0.2':
        expression = Math.ceil((money.value * 0.2) / peop.value);
        break;
      case '0.15':
        expression = Math.ceil((money.value * 0.15) / peop.value);
        break;
      case '0.1':
        expression = Math.ceil((money.value * 0.1) / peop.value);
        break;
      case '0.05':
        expression = Math.ceil((money.value * 0.05) / peop.value);
        break;
      default:
        expression = 'fill input';
    }
  });

  total.innerHTML = `Tip ${expression} each`;
  total.classList.add('show');

  setTimeout(total.classList.add('show'), 4000);
});
