// initialize variables
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let outcome = "";
let winner = "";
const scoreFinal = document.querySelector("#scoreFinal");
const you = document.querySelector("#you");
const computer = document.querySelector("#computer");
const score = document.querySelector("#score");

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  };

const pressedButtons = document.querySelectorAll('.button');
pressedButtons.forEach(button => button.addEventListener('transitionend', removeTransition));

// set an event listener on all buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // add the effect to indicate the button was pressed
        button.classList.add("playing");
        //button.addEventListener("transitionend", button.classList.remove("playing"));

        // if a player already has 5 wins, reset the play count. Also reset any font properties
        if (playerScore === 5 || computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            score.style.background = "#1F2937";
            scoreFinal.style.fontSize = "24px";
        }
        // set the player selection to the id of the clicked button and call the playRound function
        playerSelection = button.id;
        outcome = (playRound(playerSelection));

        // display the result of playRound in the scoreFinal div
        scoreFinal.textContent = `${outcome}`;

        // update the text to green in player wins or red if computer wins
        if (outcome.includes("Win")) {
            scoreFinal.style.color = "#4ab950";
            winner = "player";
        } else if (outcome.includes("Lose")) {
            scoreFinal.style.color = "#ec4f4f";
            winner = "computer";
        } else if (outcome.includes("Tie")) {
            scoreFinal.style.color = "yellow";
            winner = "none";
        }
        
        // keep count of how many wins each participant has
        if (winner === "player") {
            playerScore = playerScore + 1;
        } else if (winner === "computer"){
            computerScore = computerScore + 1;
        }

        // update scoreboard with the number of wins each participant has
        you.textContent = `${playerScore}`;
        computer.textContent = `${computerScore}`;

        // if player gets 5 wins first, declare him the winner and change background green
        // Otherwise he loses and background is red
        if (playerScore === 5) {
            if (computerScore < 5){
                scoreFinal.textContent = "YOU WIN!";
                scoreFinal.style.color = "white";
                scoreFinal.style.fontWeight = "bold";
                scoreFinal.style.fontSize = "36px";
                score.style.background = "#4ab950";
            }
        } else if (computerScore === 5) {
            if (playerScore < 5) {
                scoreFinal.textContent = "YOU LOSE!";
                scoreFinal.style.color = "white";
                scoreFinal.style.fontWeight = "bold";
                scoreFinal.style.fontSize = "36px";
                score.style.background = "#ec4f4f";
            }
        }
    });
})

function computerPlay(){
    // generate a random selection for the computer

    // generate a random number between 1 and 9
    let num = Math.floor(Math.random()*9)+1;
    // create 3 ranges, split between Rock, Paper, and Scissors and assign computer based on the matching range
    let computer = "";
    if (num <= 3) {
        computer = "Rock";
    } else if (num <= 6) {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }
    return computer;
}

function playRound(player) {
    // create if statements for possible outcomes based on rules of the game
    // output result

    let computer = computerPlay();
    let winner = "";
    // Paper beats Rock
    // Paper loses to Scissors
    if (player === "Paper") {
        if (computer === "Rock") {
            winner = "player";
        } else if (computer === "Scissors") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    
    // Rock beats Scissors
    // Rock loses to Paper
    } else if (player === "Rock") {
        if (computer === "Scissors") {
            winner = "player";
        } else if (computer === "Paper") {
            winner = "computer";
        } else {
            winner = "tie";
        }

    // Scissors beats Paper
    // Scissors loses to Rock
    } else if (player === "Scissors") {
        if (computer === "Paper") {
            winner = "player";
        } else if (computer === "Rock") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    } else {
        return
    }

    // return a statement of who won and what the selections were
    if (winner === "player") {
        return `You Win! ${player} beats ${computer}`;
    } else if (winner === "computer") {
        return`You Lose! ${computer} beats ${player}`;
    } else if (winner === "tie") {
        return `It's a Tie! ${player} and ${computer} are equal`;
    }
}