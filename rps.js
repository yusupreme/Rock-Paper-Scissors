const move = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;

let playerSelection = prompt("rock paper or scissors?").toLowerCase();

function computerPlay(){
    return move[Math.floor(Math.random() * move.length)];
}

function playRound(playerSelection,computerSelection){
    
     
    if (playerSelection === computerSelection){
        return "its a tie";}

        if (playerSelection === 'rock') {

            if (computerSelection === 'scissors') {
              playerScore++;
              return 'Player wins with rock';
            } else if (computerSelection === 'paper') {
              computerScore++;
              return 'Computer wins with paper'
            }
          }
        
          if (playerSelection === 'paper') {
        
            if (computerSelection === 'rock') {
              playerScore++;
              return 'Player wins with paper';
            } else if (computerSelection === 'scissors') {
              computerScore++;
              return 'Computer wins with scissors';
            }
          }
        
          if (playerSelection === 'scissors') {
        
            if (computerSelection === "paper") {
              playerScore++;
              return 'Player wins with scissors';
            } else if (computerSelection === 'rock') {
              computerScore++;
              return 'Computer wins with rock';
            }
          }
          
}
function game() {
    for (i = 0; i <= 5; i++) {
      var playerSelection = prompt("rock paper or scissors?").toLowerCase();
      var computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      console.log('Computer: ' + computerSelection);
      console.log('Player: ' + playerSelection);
      console.log('Player: ' + playerScore);
      console.log('Computer: ' + computerScore);
    }
    console.log('Final Player: ' + playerScore);
    console.log('Final Computer: ' + computerScore);
  
  }
  
  game();