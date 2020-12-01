let button = document.getElementById("submitname");
let resultField = document.getElementById("weekendtext");

button.addEventListener("click", () => {
  let name = document.getElementById("nameinput").value;
  let today = new Date();
  let dayNum = today.getDay();
  console.log(dayNum);
  let day;
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }
  let weekendphrase =
    dayNum === 6 || dayNum === 0
      ? "It's the weekend!"
      : dayNum === 5
      ? "Tomorrow is the weekend!"
      : `Only ${5 - dayNum} days til the weekend.`;
  resultField.textContent = `Hello ${name}. Today is ${day}. ${weekendphrase} `;
});
