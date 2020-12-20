const buttons = document.querySelectorAll('button');
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
let resultNotification = document.querySelector('#displayResults');
let endGameDisplay = document.querySelector('#main');
let mainScreen = document.querySelector('#newMain');
let gameContainer = document.querySelector('#game-container');

//Loop through each button and perform created functions to manipulate DOM
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = (button.id);
        playRound(playerSelection, computerPlay());
        changeScore();
        checkScore();
    });
});

//function that has the computer randomly select rock, paper or scissors;
function computerPlay(){
    const number = (Math.random() * 3);
    if (number <= 1){
        return 'rock';
    } else if (number >= 2){
        return 'scissors';
    } else return 'paper';
}

//function that plays one round of rock paper scissors; increment player and computer score
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
}

//Changes the score and result text in the DOM
function changeScore(){
    computerScoreDisplay.textContent = `${computerScore}`;
    playerScoreDisplay.textContent = `${playerScore}`;
    resultNotification.textContent = `${resultString}`;
}

//develop a screen reset upon either computer or player reaching a score of 5
function checkScore(){
    const endScreen = document.createElement('p');
    endScreen.classList.add('endGame');
    const resetButton = document.createElement('button');
    resetButton.classList.add('button2');
    if(playerScore === 5){
        endScreen.textContent = 'Congratulations! You are the superior being.';
        mainScreen.replaceWith(endScreen);
        resetButton.textContent = "Try again?"
        gameContainer.replaceWith(resetButton);
        resetButton.addEventListener('click', () =>{
            location.reload();
        });
    } else if (computerScore === 5){
        endScreen.textContent = `You lose! Why don't you 0111111011011!`;
        mainScreen.replaceWith(endScreen);
        resetButton.textContent = "Try again?"
        gameContainer.replaceWith(resetButton);
        resetButton.addEventListener('click', () =>{
            location.reload();
        });
    }
}