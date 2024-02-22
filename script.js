
// user name prompt
let userName = prompt(`Please enter your name or nickname in under 10 characters:`);

if (userName.length > 10) {
    userName = prompt(`Username too long please re-enter:`)
}

// greet and prompt game
function playGame() {
    let play = confirm(`Hello ${userName}! Do you want to play a game?`)

    if (play) {
        rps();
    } else {
        //break;
    }
}
playGame();

// game - best of 3
function rps() {

    let userScore = 0;
    let computerScore = 0;
    const options = ["rock", "paper", "scissors"];
    
    // for loop for 3 rounds
    let rounds = 3;
    for (let i = 0; i < rounds; i++) {

        alert(`Round ${i + 1} of 3`);
        // prompt for input and generate computer input
        let userOption = prompt(`Pick one! "rock", "paper", "scissors".`);
        let index = Math.floor(Math.random() * options.length);

        // winning, losing and draw conditions 
        if (userOption === options[index]) {
            alert(`Computer picked ${options[index]}, Round ${i + 1} is a draw!`)

        } else if (
            (userOption === "rock") && (options[index] === "scissors") ||
            (userOption === "paper") && (options[index] === "rock") ||
            (userOption === "scissors") && (options[index] === "paper")) {

            userScore++;
            alert(`Computer picked ${options[index]}, ${userName} you won Round ${i + 1}!`)

        } else {
            computerScore++;
            alert(`Computer picked ${options[index]}, ${userName} you lost Round ${i + 1}!`)
        };
    };

    // telly up scores and return overall results
    if (userScore > computerScore) {
        return alert(`${userName} you've won!`);
    } else if (computerScore > userScore) {
        return alert(`${userName} you've lost!`);
    } else {
        return alert(`It's a draw`);
    }
};

