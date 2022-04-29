const money = document.querySelector('.dollar'),
  peop = document.querySelector('.people'),
  perc = document.querySelectorAll('.percentage'),
  calc = document.querySelector('.calc'),
  total = document.querySelector('.tip-amount');

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
    money.value = '';
    peop.value = '';
    perc[0].value = '';
  });

  total.innerHTML = `Tip ${expression} each`;
  total.classList.add('show');
  show(total);

  function show(x) {
    setTimeout(function () {
      x.classList.remove('show');
    }, 6000);
  }
});

/*
const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if(tip === "NaN"){
    tipAmount.textContent = "Tip $0 each";
    showTipAmount();
  }
  else{
    tipAmount.textContent = "Tip $" + tip + " each";
    showTipAmount();
  }
}

showTipAmount = () => {
  // Get the snackbar DIV
  var x = document.querySelector("#tip-amount");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
*/
