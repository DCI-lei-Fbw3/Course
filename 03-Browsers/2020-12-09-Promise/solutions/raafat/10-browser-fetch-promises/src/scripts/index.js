// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const showModal = () => {
	document.querySelector(".modal").style.display = "block";
};
const closeModal = () => {
	document.querySelector(".close").addEventListener("click", () => {
		document.querySelector(".modal").style.display = "none";
	});
};

let runTime = Promise.resolve(window.setTimeout(showModal, 6000));
runTime.then(closeModal).catch((e) => console.error(e));
// wait(1000)
// 	.then(showModal)
// 	.then(closeModal)
// 	.catch((e) => console.error(e));
