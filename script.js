// ROCK PAPER SCISSORS

// ROCK > SCISSORS
// PAPER > ROCK
// SCISSORS > PAPER


/*
>> STEPS: 
1. functie getComputerChoice() care sa alega random piatra hartie foarfeca 
2. functie pt runda care sa decida cn o castigat 
3. functie game() -> functie anterioara in interior -> 5 runde iar cine are cel mai mare scor la final sa castige.

   + EXCEPTIE CAND INTRODUCI CEVA DIFERIT DE ROCK PAPER SCISSORS SA DEA CV ALERTA SAU PLM
*/


const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

console.log(playerSelection + " " + computerSelection);


// GENERATE A RANDOM PICK FOR THE COMPUTER

function getComputerChoice() {

    let randomChoice = ["Rock", "Paper", "Scissors"];
    let choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return choice;
}



// ROUND

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "DRAW: both chosed " + playerSelection;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock"    ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return "WIN: " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "LOSE: " + playerSelection + " lose to " + computerSelection;
    }

}

console.log(playRound(playerSelection, computerSelection));
