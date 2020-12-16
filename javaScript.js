//Create a function that has the computer randomly select rock, paper or scissors;
function computerPlay(){
    const number = (Math.random() * 3);
    if (number <= 1){
        return 'rock';
    } else if (number >= 2){
        return 'scissors';
    } else return 'paper';
}

//Create a function that plays one round of rock paper scissors;
//Determine a scoring system;
function playRound(playerSelection, computerSelection){
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return 'You win! Rock beats scissors!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'You lose! Computer chose paper, paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'You win! Paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return 'You lose! Computer chose scissors, scissors beats paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
         playerScore++;
        return 'You win! Scissors beats paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'You lose! Computer chose rock, rock beats scissors!';
        computerScore++;
    } else if (playerSelection === computerSelection){
        return 'Draw! You both selected the same, try again!';
    }
}
//Write a function called game() playing 5 rounds of rock paper scissors and declaring a winner;
function choice(){
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
   button.addEventListener('click', () => {
       return button.id;
   });
});
}

function game(){
    for (i = 0; i < 5; i++){
        let playerSelection = choice();
        console.log(playerSelection);
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore < computerScore){
        alert(`You lost, sorry, the computer is the superior being...Final score: ${playerScore} to ${computerScore}`);
    } else if (playerScore > computerScore){
        alert(`You Won! Congratulations, you are the superior being! Final score: ${playerScore} to ${computerScore}`);
    } else if (playerScore === computerScore){
        alert(`Wow, a draw! Try again! Final score: ${playerScore} to ${computerScore}`);
    }
}


