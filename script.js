let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = prompt("Whats your choice?").toLowerCase();
    } while (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors')
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            humanScore += 1;
            computerScore += 1;
        } else if (computerChoice == "paper") {
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            humanScore += 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1;
        } else if (computerChoice == "paper") {
            computerScore += 1;
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            computerScore += 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore += 1;
        } else if (computerChoice == "paper") {
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            computerScore += 1;
            humanScore += 1;
        }
    }
}

function playGame() {
    do {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } while (humanScore < 5 && computerScore < 5)
}

playGame();