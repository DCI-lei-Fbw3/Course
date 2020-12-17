//import "../styles/main.scss";
//import "babel-polyfill"

const theModal = document.getElementById("myModal");

let asyncModal = async function() {
    await window.setTimeout(()=> {
        theModal.style.display = "block";
    }, (1000));    
    
    await document.querySelector(".close").addEventListener("click",() => {
        theModal.style.display = "none";
        });

    await alert("3"); //just a test
};

asyncModal();

const theButton = async function () {
    await setTimeout(()=> {
    document.getElementById("continue").style.backgroundColor = "pink";
    }, (2000)); 
    document.getElementById("continue").addEventListener("mouseleave", ()=> {
        document.getElementById("continue").style.backgroundColor = "violet";
        alert("Continue to subscribe!");
    });
};

theButton();


