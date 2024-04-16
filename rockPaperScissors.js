const hands = ["ROCK", "PAPER", "SCISSORS"]
let computerScore = 0;
let playerScore = 0;
//let playerSelection = "";
let roundResult = "";
let computerSelection = "";

//Randomly returns hand for computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);//random number from 0 to 2
    computerSelection = hands[randomNumber];
    return computerSelection;
}
//Gets player hand and converts to uppercase
/*Old method
function getPlayerChoice() {
    playerSelection = prompt("Write Rock, Paper or Scissors to make your choice: ");
    playerSelection = playerSelection.toUpperCase();
    return playerSelection;
}*/
//Checks winner of current hand selections
function winCheck(playerSelection, computerSelection) {
    roundResult = "";
    if (playerSelection === computerSelection) {
        roundResult = "Tie";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
    playerSelection === "PAPER" && computerSelection === "ROCK" || 
    playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        roundResult = "Win";
    } else {
        roundResult = "Loss";
    }
    return roundResult;
}
//Plays one round of RPS
function playRound(event) {
    const playerSelection = event.target.id.toUpperCase();
    getComputerChoice();
    winCheck(playerSelection, computerSelection);
    if (roundResult === "Win") {
        playerScore++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if (roundResult === "Loss") {
        computerScore++
        console.log(`You lose. ${computerSelection} beats ${playerSelection}`)
    } else {
        console.log(`Computer chose ${computerSelection}, it's a tie!`)
    }
}
//Plays a B03 of RPS
function playGame() {
    if (playerScore > computerScore) {
        console.log(`You won the game! Your score: ${playerScore} | Computers score: ${computerScore}`);
    } else {
        console.log(`You lost the game. Your score: ${playerScore} | Computers score: ${computerScore}`)
    }
    playerScore = 0;
    computerScore = 0;
}
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);