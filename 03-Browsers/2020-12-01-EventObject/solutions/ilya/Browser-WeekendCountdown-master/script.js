const p = document.getElementsByTagName('p')[0];
const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();
let daysLeft = null;

switch (true) {
    case (today === 0 || today === 6):
        daysLeft = "It's weekend !";
        break;
    case today === 5:
        daysLeft = "Tomorrow is weekend !";
        break;
    case today === 4:
        daysLeft = "Only one day left until weekend!";
        break;
    default:
        daysLeft = `Only ${5 - today} days left until weekend!`;
        break;
  }

const updateMessage = () => {
    p.textContent = `Hello ${input.value}. Today is ${days[today]}. ${daysLeft}`;
    input.value = '';
}

button.addEventListener('click', updateMessage);
input.addEventListener('keyup', event => {if(event.code === 'Enter' || event.code === 'NumpadEnter') button.click()});