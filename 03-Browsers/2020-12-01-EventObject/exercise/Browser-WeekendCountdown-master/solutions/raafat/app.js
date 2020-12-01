let para = document.querySelector("p");
let form = document.querySelector("form");
let input = document.querySelector("input");
let button = document.querySelector("button");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let value = input.value;

	para.innerHTML = `Hello ${value}, ${myDate()}`;
});

const myDate = () => {
	let date = new Date();
	let weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = weekdays[date.getDay()];
	let dayLeftToWeekend = 5 - date.getDay();
	return `Today is ${day}. Only ${dayLeftToWeekend} days left until weekend!`;
};
