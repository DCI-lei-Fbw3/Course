//import "../styles/main.scss";
//import "babel-polyfill";

const runModal = async function () {
	await window.setTimeout(() => {
		document.querySelector(".modal").style.display = "block";
	}, 6000);
	await document.querySelector(".close").addEventListener("click", () => {
		document.querySelector(".modal").style.display = "none";
	});
};
runModal();

const btnHover = async function () {
	const hoverRun = await function () {
		window.setTimeout(() => {
			document.querySelector("#continue").style.backgroundColor = "grey";
			alert("Continue to subscribe");
		}, 400);
	};
	document
		.querySelector("#continue")
		.addEventListener("mouseleave", hoverRun);
};
btnHover();
