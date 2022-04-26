const money = document.querySelector('.dollar'),
  peop = document.querySelector('.people'),
  perc = document.querySelector('.percentage'),
  calc = document.querySelector('.calc'),
  total = document.querySelector('.tip-amount');

let expression;

for (let i = 1; i < perc.length; i++) {
  if (perc[i].value === '0.3') {
    expression = Number(money.value * perc[i].value * 100) / Number(peop.value);
  }
}

calc.addEventListener('click', () => {
  total.style.cssText = 'visibility: auto;';
  total.innerHTML = `Tip ${expression} each`;
});
