//import "../styles/main.scss";
//import "babel-polyfill"

const theModal = document.getElementById("myModal");

let asyncModal = async function() {
    await window.setTimeout(()=> {
        theModal.style.display = "block";
    }, (1000));    
    
    await window.setTimeout(() => {
    document.querySelector(".close").addEventListener("click",() => {
        theModal.style.display = "none";
    }, (1000*2));
    });

    await alert("3"); //just a test
};

asyncModal();

// const runModal = async function () {
// 	await window.setTimeout(() => {
// 		document.querySelector(".modal").style.display = "block";
// 	}, 6000);
// 	await document.querySelector(".close").addEventListener("click", () => {
// 		document.querySelector(".modal").style.display = "none";
// 	});
// };
// runModal();

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

// modal.addEventListener("click", (e) => {
//     switch(e.target.className) {
//         case "close":
//         case "modal":
//         modal.style.display = "none"
//         break;
//     }
// })

