let form = document.querySelector("form");
let cripto_currency = document.querySelector(".cripto_currency");
let currency = document.querySelector(".currency");
let input_1 = document.querySelector(".input_1");
let result = document.querySelector(".result");
let arrCripto = [];
let arrCurrency = [];

currency.addEventListener("input", function () {
  arrCripto.push(this.value.toLowerCase());
  if (currency.value != "Choose...") {
    let url = `https://api.cryptonator.com/api/full/ticker/${
      arrCurrency[arrCurrency.length - 1]
    }-${arrCripto[arrCripto.length - 1]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          result.innerHTML =
            data.ticker.price * input_1.value +
            "  " +
            "(" +
            arrCripto[arrCripto.length - 1].toUpperCase() +
            ")";
        });
      });
  }
});
cripto_currency.addEventListener("input", function () {
  arrCurrency.push(this.value.toLowerCase());
  if (cripto_currency.value != "Choose...") {
    let url = `https://api.cryptonator.com/api/full/ticker/${
      arrCurrency[arrCurrency.length - 1]
    }-${arrCripto[arrCripto.length - 1]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          result.innerHTML =
            data.ticker.price * input_1.value +
            "  " +
            "(" +
            arrCripto[arrCripto.length - 1].toUpperCase() +
            ")";
        });
      });
  }
});
