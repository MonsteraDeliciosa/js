function letsPlay(userChoice, computerChoice) {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = (Math.random()) * 3;
    //translate computerChoice
        if (computerChoice <= 1) {
            computerChoice = "rock";
        } else if (computerChoice <= 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        console.log("Computer: " + computerChoice);

    //compare user and computer
    if (userChoice === computerChoice) {
        return "Computer chose " + computerChoice + ". You chose " + userChoice + ". The result is a tie!";
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU WIN!";
        } else {
            return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU LOSE!";
        }
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU WIN!";
        } else {
            return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU LOSE!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU WIN!";
        } else {
            return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU LOSE!";
        }
    }
};
