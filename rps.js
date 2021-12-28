function computerPlay(){
    // generate a random number between 1 and 9
    // create 3 ranges between 1 and 9
    // assign each range to a value: Rock, Paper, or Scissors
    let num = Math.floor(Math.random()*9)+1;
    let computerSelection = "";
    if (num <= 3) {
        computerSelection = "Rock";
    } else if (num <= 6) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // create if statements for possible outcomes based on rules of the game
    // output result

    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();
    let winner = "";
    // Paper beats Rock
    // Paper loses to Scissors
    if (lowerPlayerSelection === "paper") {
        if (lowerComputerSelection === "rock") {
            winner = "player";
        } else if (lowerComputerSelection === "scissors") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    
    // Rock beats Scissors
    // Rock loses to Paper
    } else if (lowerPlayerSelection === "rock") {
        if (lowerComputerSelection === "scissors") {
            winner = "player";
        } else if (lowerComputerSelection === "paper") {
            winner = "computer";
        } else {
            winner = "tie";
        }

    // Scissors beats Paper
    // Scissors loses to Rock
    } else if (lowerPlayerSelection === "scissors") {
        if (lowerComputerSelection === "paper") {
            winner = "player";
        } else if (lowerComputerSelection === "rock") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    } else {
        //alert("You must select Rock, Paper, or Scissors!")
        return
    }

    let finalPlayerSelection = `${lowerPlayerSelection.substr(0,1).toUpperCase()}${lowerPlayerSelection.substr(1)}`;
    let finalComputerSelection = `${lowerComputerSelection.substr(0,1).toUpperCase()}${lowerComputerSelection.substr(1)}`;
    if (winner === "player") {
        return `You Win! ${finalPlayerSelection} beats ${finalComputerSelection}`;
    } else if (winner === "computer") {
        return`You Lose! ${finalComputerSelection} beats ${finalPlayerSelection}`;
    } else if (winner === "tie") {
        return `It's a Tie! ${finalPlayerSelection} and ${finalComputerSelection} are equal`;
    }
}

function game() {
    // initialize counters for the player and computer wins
    // initialize a counter for the number of games
    // get a selection from the user
    // get a selection from the computer
    // run the game

    let p = 0;
    let c = 0;
    for (let i = 0; i < 5; i++) {
        let player = window.prompt("Rock, Paper, or Scissors?");
        let computer = computerPlay();

        console.log(playRound(player, computer));
        let x = typeof playRound(player, computer);
        if (x === "undefined") {
            i = i -1;
            alert("You must select Rock, Paper, or Scissors!")
        } else if (playRound(player, computer).includes("Win")) {
            p++;
        } else if (playRound(player, computer).includes("Lose")) {
            c++;
        }
    }
    if (p > c) {
        console.log(`You Win! You won ${p} games and the computer won ${c} games.`);
    } else if (c > p) {
        console.log(`You Lose! The computer won ${c} games and you won ${p} games.`);
    } else if (p = c) {
        console.log(`It's a Tie! You both won ${p} games.`);
    }
}