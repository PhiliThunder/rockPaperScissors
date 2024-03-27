/*
Plan:
    UI: None, for now
    Inputs:
        - Userinput in console for choice of hand
        - Randomly generated input for computers choice of hand
    Desired output:
        - Correct winner announced for each round
        - Winner of BO3 game announced

Pseudocode:
    SET starting score of player and computer
    WHILE starting score of player or computer is below 3    
        GET user input for new hand
        SET new computer hand choice
        Check which player won with wincheck function
            IF player won
                THEN give player 1 point and go back to start
            ELSE IF a tie
                Go back to start 
            ELSE
                Give 1 point to computer and go back to start
    Wincheck function
        IF computerchoice and userchoice is the same
            THEN set wincheck to tie
        ELSE IF computerchoice is Rock and userchoice is Paper
            THEN set wincheck to win
        ELSE IF computerchoice is Rock and userchoice is Scissors
            THEN set wincheck to loss
        ...
            ...
*/
const hands = ["ROCK", "PAPER", "SCISSORS"]
let computerScore = 0;
let playerScore = 0;
let playerSelection = "";
let roundResult = "";
let computerSelection = "";

//Randomly returns hand for computer
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);//random number from 0 to 2
    computerSelection = hands[randomNumber];
    return computerSelection;
}
//Gets player hand and converts to uppercase
function getPlayerChoice() {
    playerSelection = prompt("Write Rock, Paper or Scissors to make your choice: ");
    playerSelection = playerSelection.toUpperCase();
    return playerSelection;
}
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
function playRound() {
    getComputerChoice();
    getPlayerChoice();
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
    //will implement a B03 loop here later, for now just a 5 round game
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > computerScore) {
        console.log(`You won the game! Your score: ${playerScore} | Computers score: ${computerScore}`);
    } else {
        console.log(`You lost the game. Your score: ${playerScore} | Computers score: ${computerScore}`)
    }
    playerScore = 0;
    computerScore = 0;
}