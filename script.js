const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const roundWinner = document.querySelector("#roundWinner");
const playerScoreUpdate = document.querySelector("#playerScore");
const computerScoreUpdate = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = ["rock", "paper", "scissors"];
    let choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return choice;
}


buttonRock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
});

buttonPaper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
});

buttonScissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
});
    

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner.textContent = "TIE: both chosed " + playerSelection;
        return 0;
    }    
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock"    ||
    playerSelection === "scissors" && computerSelection === "paper") {
        roundWinner.textContent = "WIN: " + playerSelection + " beats " + computerSelection;
        ++playerScore;
        playerScoreUpdate.textContent = playerScore;
    }    
    else {
        roundWinner.textContent = "LOSE: " + playerSelection + " lose to " + computerSelection;
        ++computerScore;
        computerScoreUpdate.textContent = computerScore;
    }    
}  









