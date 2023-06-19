
//Generate a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  const computerSelection = getComputerChoice();
  console.log(computerSelection);

//Ask the player to choose between "rock" OR "paper" OR "scissors"
const playerSelection = prompt("Choose between 'rock', 'paper', or 'scissors'","scissors");
console.log(playerSelection);

//Compare the choices AND declare the winner for a single round
function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase() + computerSelection.toLowerCase()) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return "You Win!";
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return "You Loose!";
    default:
      return "No winner this time";
  }
}console.log(playRound())
