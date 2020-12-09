// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
const modal = document.getElementById('myModal');
const close = document.getElementsByClassName('close')[0];
const time = document.getElementById('time');

const timeoutInSeconds = 3;


const p = new Promise((resolve, reject) => {
    window.setTimeout(() => resolve(timeoutInSeconds), timeoutInSeconds * 1000);
})


p.then(timeout => {
    time.innerText = timeout;
    modal.style.display = 'block';
})

close.addEventListener('click', () => modal.style.display = 'none');
