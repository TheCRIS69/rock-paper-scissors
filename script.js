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
        console.log("TIE");
        return ++playerScore && ++computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock"    ||
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log("WIN: " + playerSelection + " beats " + computerSelection);
        return ++playerScore;
    }
    else {
        console.log("LOSE: " + playerSelection + " lose to " + computerSelection);
        return ++computerScore;
    }
}


/*

if (playerScore > computerScore) {
    alert("You won!");
}
else if (playerScore < computerScore) {
    alert("You lost...");
}
else {
    alert("It's a tie!")
}

*/
