let currencyOne = document.getElementById("currency-one");
let currencyTwo = document.getElementById("currency-two");
let amountOne = document.getElementById("amount-one");
let amountTwo = document.getElementById("amount-two");

let rateEl = document.getElementById("rate");
let swap = document.getElementById("swap");

const calculate = () => {
	let valueOne = currencyOne.value;
	let valueTwo = currencyTwo.value;

	fetch(`https://api.cryptonator.com/api/ticker/${valueOne}-${valueTwo}`)
		.then((response) => response.json())
		.then((data) => {
			rateEl.innerHTML = `1 ${valueOne} = ${data.ticker.price} ${valueTwo}`;
			amountTwo.value = (data.ticker.price * amountOne.value).toFixed(3);
		})
		.catch((err) => alert(`this item is not exist, try again!`));
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
	[currencyOne.value, currencyTwo.value] = [
		currencyTwo.value,
		currencyOne.value,
	];
	calculate();
});
calculate();
