const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

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
    

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("TIE");
        return 0;
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
