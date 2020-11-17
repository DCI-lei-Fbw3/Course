const randomNumber = () => {
	let number = Math.floor(Math.random() * 10) + 1;
	let attempts = 3;
	let guess = window.prompt(
		"Guess a number between 1 - 10, you have 3 attempts"
	);
	while (attempts > 0) {
		if (number != guess) {
			guess = window.prompt(
				`Wrong!!! Try Again ${attempts} attempts left!`
			);
		} else if (number == guess) {
			window.alert(
				`Success, the number was ${number}! Attempts ${attempts}`
			);
			break;
		}
		attempts -= 1;
	}
	if (attempts == 0)
		return window.alert(
			`sorry, you failed to guess the number. the number was ${number}!`
		);
};
