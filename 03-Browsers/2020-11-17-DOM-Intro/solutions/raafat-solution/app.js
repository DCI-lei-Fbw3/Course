const randomNumber = () => {
	let number = Math.floor(Math.random() * 10) + 1;
	let attempts = 2;
	let guess = window.prompt(
		"Guess a number between 1 - 10, you have 3 attempts"
	);
	while (attempts > 0) {
		if (number != guess) {
			guess = window.prompt(
				`Wrong!!! Try Again ${attempts} attempts left!`
			);
			attempts--;
		}
		if (number == guess) {
			window.alert(
				`Success, the number was ${number}! Attempts ${attempts}`
			);
			break;
		} else if (attempts == 0 && number != guess)
			return window.alert(
				`sorry, you failed to guess the number. the number was ${number}!`
			);
	}
};
