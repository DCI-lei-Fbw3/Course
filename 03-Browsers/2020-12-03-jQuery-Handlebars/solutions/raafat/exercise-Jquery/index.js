// Work on your tasks here

$(function () {
	$(".teapot").click(function () {
		$(this).toggleClass("teapot-rotate");
	});
	$(".tea-desc").mouseenter(function () {
		$(this).text(randomPhrase());
	});
});
const phrases = [
	"A cup of tea a day",
	"Nice cup of tea on the breakfast",
	"Hot tea for the cold",
	"delicious with a cake",
];
const randomPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];
