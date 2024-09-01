let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorsButton = document.getElementById("scissors-button");

let humanScoreElement = document.getElementById("human-score");
let computerScoreElement = document.getElementById("computer-score");

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

function checkIfHumanWon() {
    if (humanScore === winningScore) {
        setScoreBoard();
        alert("You Won!");
        resetGame();
    }
}

function checkIfComputerWon() {
    if (computerScore === winningScore) {
        setScoreBoard();
        alert("Computer Won!");
        resetGame();
    }
}

function setScoreBoard() {
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    setScoreBoard();
}

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    setScoreBoard();
    checkIfHumanWon();
    checkIfComputerWon();
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    setScoreBoard();
    checkIfHumanWon();
    checkIfComputerWon();
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    setScoreBoard();
    checkIfHumanWon();
    checkIfComputerWon();
});