const hands = ["ROCK", "PAPER", "SCISSORS"]
let computerScore = 0;
let playerScore = 0;
let roundResult = "";
let computerSelection = "";

//Randomly returns hand for computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);//Random number from 0 to 2
    computerSelection = hands[randomNumber];
    return computerSelection;
}
//Checks winner of current hand selections
function winCheck(playerSelection, computerSelection) {
    roundResult = "";
    if (playerSelection === computerSelection) {
        roundResult = "Tie";
    } else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
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
    const playerSelection = event.target.id.toUpperCase(); //Sets content of the pressed button as players selection in uppercase
    getComputerChoice();
    winCheck(playerSelection, computerSelection);
    if (roundResult === "Win") {
        playerScore++
        updateResults(`You win! ${playerSelection} beats ${computerSelection} | 
        Your score: ${playerScore} | Computers score: ${computerScore}`);
    } else if (roundResult === "Loss") {
        computerScore++
        updateResults(`You lose. ${computerSelection} beats ${playerSelection} | 
        Your score: ${playerScore} | Computers score: ${computerScore}`);
    } else {
        updateResults(`Computer chose ${computerSelection}, it's a tie! | 
        Your score: ${playerScore} | Computers score: ${computerScore}`);
    }
    gameResultCheck();
}
//Checks whether B05 game is over
function gameResultCheck() {
    if (playerScore >= 3 || playerScore + computerScore >= 5 && playerScore > computerScore) {
        updateResults(`You won the game! Your score: ${playerScore} | Computers score: ${computerScore}`);
        restartButton.style.display = "block";
        hidePlayButtons();

    } else if (computerScore >= 3 || playerScore + computerScore >= 5 && computerScore > playerScore) {
        updateResults(`You lost the game. Your score: ${playerScore} | Computers score: ${computerScore}`);
        restartButton.style.display = "block";
        hidePlayButtons();
    }
}

const body = document.querySelector("body");
//Buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartButton = document.createElement("button");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
restartButton.textContent = "Restart";
restartButton.addEventListener("click", restartGame);
body.appendChild(restartButton);
restartButton.style.display = "none";

//Results and restart functionality
const results = document.querySelector("#results");
function clearResults() {
    results.textContent = "";
    playerScore = 0;
    computerScore = 0;
}
function updateResults(text) {
    results.textContent = text;
}
function hidePlayButtons() {
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
}
function restartGame() {
    clearResults();
    rockBtn.style.display = "block";
    paperBtn.style.display = "block";
    scissorsBtn.style.display = "block";
    restartButton.style.display = "none";
}
