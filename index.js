let playerScore = 0
let computerScore = 0

function getComputerChoice() {

            let randomNumber = Math.floor(Math.random() * 3);
            switch (randomNumber) {
              case 0:
                return 'ROCK'
              case 1:
                return 'PAPER'
              case 2:
                return 'SCISSORS'
            }

          };

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your weapon (Rock, Paper, Scissors)").toUpperCase();
    computerSelection = getComputerChoice();

if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore += 1;
    console.log("*Player wins.*");
};   

if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK') 
) {
    computerScore += 1;
    console.log("*Computer wins.*");
}

if (
    (computerSelection === playerSelection) 
) {
    console.log("*It is a tie.*");
}

}

function playGame() {
    playRound();
    console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    playRound();
    console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    playRound();
    console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    playRound();
    console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    playRound();
    console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);

    if (playerScore > computerScore) {
        console.log("Player wins the game."),console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    }  else if(computerScore > playerScore) {
        console.log("Computer wins the game."),console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    } else {
        console.log("The game is tied."),console.log('Player score ' + playerScore),console.log('Computer Score ' + computerScore);
    }

    computerScore = 0
    playerScore = 0
}

