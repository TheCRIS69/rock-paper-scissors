// ROCK PAPER SCISSORS

// GENERATE A RANDOM PICK FOR THE COMPUTER

function getComputerChoice() {
    let randomChoice = ["Rock", "Paper", "Scissors"];
    let choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return choice;
}


// ROUND

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return ++playerScore && ++computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock"    ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return ++playerScore;
    }
    else {
        return ++computerScore;
    }
}


// GAME

function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    playRound(playerSelection, computerSelection);

    console.log("Player choose: " +  playerSelection + " Computer choose: " + computerSelection);
    console.log("Player score is: " + playerScore + " and Computer score is: " + computerScore);

    }

    return playerScore + computerScore;
}

game();

if (playerScore > computerScore) {
    alert("You won!");
}
else if (playerScore < computerScore) {
    alert("You lost...");
}
else {
    alert("It's a tie!")
}
