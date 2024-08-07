function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    if (randomComputerChoice == 0) {
        return "rock";
    } else if (randomComputerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}