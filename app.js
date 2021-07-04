const currency_one = document.querySelector("#currency-one");
const amountOne = document.querySelector("#amount-one");
const currency_two = document.querySelector("#currency-two");
const amountTwo = document.querySelector("#amount-two");

const rateEl = document.querySelector("#rate");
//fetch currencies from API
calculate();
function calculate() {
  const currencyOne = currency_one.value;
  const currencyTwo = currency_two.value;
  const url = "https://open.er-api.com/v6/latest/" + currencyOne;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTwo];
      amountTwo.value = (amountOne.value * rate).toFixed(2);
      rateEl.innerText = `${amountOne.value} ${currencyOne} = ${amountTwo.value} ${currencyTwo}`;
    });
}

//Events
currency_one.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currency_two.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
