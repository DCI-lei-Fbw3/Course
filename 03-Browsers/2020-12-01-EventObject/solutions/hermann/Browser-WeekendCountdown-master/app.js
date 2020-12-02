let paragraph = document.querySelector("p");
let input = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", addName);

function addName(event) {
  event.preventDefault();
  let numberDate = new Date().getDay();
  let date;
  let leftWeekendDay;
  let month = [
    "Monday",
    "Tuesday",
    "Wenesday",
    "Thusday",
    "Friday",
    "Satuday",
    "Sunday",
  ];
  for (let i = 0; i < month.length; i++) {
    if (numberDate == i) {
      date = month[i - 1];

      leftWeekendDay = 7 - i - 2;
    }
  }
  if (leftWeekendDay !== undefined) {
    paragraph.textContent = `Hello ${input.value} Today is ${date}. Only ${leftWeekendDay} left until Weekend!`;
  } else {
    paragraph.textContent = `Hello ${input.value}. Enjoy your Weekend!`;
  }
}
