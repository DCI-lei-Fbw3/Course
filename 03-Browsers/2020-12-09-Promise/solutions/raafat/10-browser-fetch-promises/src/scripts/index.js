// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let runTime = Promise.resolve(
	window.setTimeout(() => {
		document.querySelector(".modal").style.display = "block";
	}, 6000)
)
	.then(() => {
		document.querySelector(".close").addEventListener("click", () => {
			document.querySelector(".modal").style.display = "none";
		});
	})
	.catch((e) => console.error(e));
// wait(1000)
// 	.then(showModal)
// 	.then(closeModal)
// 	.catch((e) => console.error(e));
