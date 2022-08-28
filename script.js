let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

function getComputerChoice() {
    let answer = ['rock', 'paper', 'scissors'];
    let a = Math.floor(Math.random()*3);
    return answer[a];
}

function playRound(player) {
    let result = "";
    let computer = getComputerChoice();
    player = player.toLowerCase();

    if ((player == 'rock' && computer =='scissors') || 
        (player == 'paper' && computer =='rock') || 
        (player == 'scissors' && computer =='paper')) {

        playerScore += 1;
        result = ('You win! ' + player + ' beats ' + computer
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again';
            disableButtons();
        } else if (player == computer) {
            result = ('It\'s a tie. You both chose ' + player
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        } else {
            computerScore += 1;
            result = ('You lose! ' + computer + ' beats ' + player
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

            if (computerScore == 5) {
                result += '<br><br>I won the game! Reload the page to play again'
                disableButtons();
            }
        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value);
    });
});


/*
function game() {
    let player = 0;
    let computer = 0;
    let score;
    for (let i = 0; i < 5; i++){
        score = playRound(getComputerChoice(), playerSelection());
        console.log(score);
    }
}*/