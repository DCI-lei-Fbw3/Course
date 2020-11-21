function game () { 
    let randomNum = Math.floor(Math.random() * 10 + 1);

    let guessNumPrompt = window.prompt("Guess a number from 1-10");
    // whatever is typed in the prompt box is stored as a string in this variable. 
    
    let guessInteger = parseInt(guessNumPrompt); 
    //converts the string from line 4 to an integer; 
    
    let tries = 1; 
    let maxTries = 3;

    while (guessInteger != randomNum) {
         alert("Nope, sorry! Try again!");
         window.prompt("Guess a number from 1-10");
         tries += 1; 
        
         if (tries == maxTries) {
            alert ("Sorry, you failed to guess the number in three attempts. The number was " + randomNum + ".")  
         break   
        } 

        if (guessInteger == randomNum) {
            alert("Congratulations, you won! It took you " + tries + " tries to guess the number.")
        }
    }
    };

    game()
