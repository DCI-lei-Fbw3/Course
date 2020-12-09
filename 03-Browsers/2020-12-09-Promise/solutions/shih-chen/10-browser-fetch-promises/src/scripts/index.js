// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let checkP = new Promise ((resolve, reject) => {
    let stayFor60Seconds = true;
    if (stayFor60Seconds) {
        return resolve("60 seconds!");
    } else {
        return reject("less then 60 seconds!");
    }
});

let checkTimeLength = (milliseconds) => {
    return new Promise( (resolve, reject) => window.setTimeout(resolve, milliseconds));
}

checkTimeLength(60000);

let theMessage = document.querySelector(".modal");
theMessage.style.display = "block";

theMessage.addEventListener("click", ()=>{
    theMessage.style.display = "none";
    });

checkP.then(() => {
    return theMessage;    
}).catch(() => { alert("Leaving now? You did not stay long!")});

