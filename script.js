const gameSelections = document.querySelector(".game-selections");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const gameWinner = document.querySelector("#roundWinner");
const playerScoreUpdate = document.querySelector("#playerScore");
const computerScoreUpdate = document.querySelector("#computerScore");

const playAgain = document.querySelector(".play-again__button");
playAgain.hidden = true;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = ["rock", "paper", "scissors"];
    let choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return choice;
}

buttonRock.addEventListener('click', playRoundRock);
buttonPaper.addEventListener('click', playRoundPaper);
buttonScissors.addEventListener('click', playRoundScissors);


function playRoundRock() {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);
}

function playRoundPaper() {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);
}

function playRoundScissors() {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameWinner.textContent = "TIE: both chosed " + playerSelection;
    }    
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock"    ||
    playerSelection === "scissors" && computerSelection === "paper") {
        gameWinner.textContent = "WIN: " + playerSelection + " beats " + computerSelection;
        ++playerScore;
        playerScoreUpdate.textContent = playerScore;
    }    
    else {
        gameWinner.textContent = "LOSE: " + playerSelection + " lose to " + computerSelection;
        ++computerScore;
        computerScoreUpdate.textContent = computerScore;
    }
    
    gameOver();
}  

function gameOver() {
    if (playerScore === 5) {
        gameSelections.remove()
        gameWinner.textContent = "GAME OVER! YOU WON!";
        playAgain.hidden = false;
    }
    if (computerScore === 5) {
        gameSelections.remove()
        gameWinner.textContent = "GAME OVER! YOU LOST...";
        playAgain.hidden = false;
    }
}

playAgain.addEventListener('click', () => window.location.reload(true));










