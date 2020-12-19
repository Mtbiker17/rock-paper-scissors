const buttons = document.querySelectorAll('button');
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
let resultNotification = document.querySelector('#displayResults');


function changeScore(){
    computerScoreDisplay.textContent = `${computerScore}`;
    playerScoreDisplay.textContent = `${playerScore}`;
    resultNotification.textContent = `${resultString}`
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = (button.id);
        playRound(playerSelection, computerPlay());
        changeScore();
        console.log(playerScore);
        console.log(computerScore);
    });
});


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
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        resultString = 'You win! Rock beats scissors!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        resultString = 'You lose! Computer chose paper, paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        resultString = 'You win! Paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        resultString = 'You lose! Computer chose scissors, scissors beats paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
         playerScore++;
        resultString = 'You win! Scissors beats paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        resultString = 'You lose! Computer chose rock, rock beats scissors!';
    } else if (playerSelection === computerSelection){
        resultString = 'Draw! You both selected the same, try again!';
    }
    return resultString;
}
//Write a function called game() playing 5 rounds of rock paper scissors and declaring a winner;
function game(){
    if (playerScore === 5 && computerScore < ){
        alert(`You lost, sorry, the computer is the superior being...Final score: ${playerScore} to ${computerScore}`);
    } else if (playerScore > computerScore){
        alert(`You Won! Congratulations, you are the superior being! Final score: ${playerScore} to ${computerScore}`);
    } else if (playerScore === computerScore){
        alert(`Wow, a draw! Try again! Final score: ${playerScore} to ${computerScore}`);
    }
}