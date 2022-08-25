function getComputerChoice() {
    let answer = ['rock', 'paper', 'scissors'];
    let a = Math.floor(Math.random()*3);
    return answer[a];
}

function playerSelection() {
    let choice = prompt("Please enter your selection: ")
    choice = choice.toLowerCase();
    return choice;
}

function playRound(computer, player) {
    let score;
    if (computer === 'rock'){
        if (player === 'rock') {
            score = "It's a tie!";
        } else if (player === 'paper') {
            score = "You Win! Paper beats rock!";
        } else {
            score = "You lose! Rock beats scissors!";
        }
    } else if (computer === 'paper') {
        if (player === 'paper') {
            score = "It's a tie!";
        } else if (player === 'scissors') {
            score = "You Win! Scissors beats paper!";
        } else {
            score = "You lose! Paper beats rock!";
        }
    } else {
        if (player === 'scissors') {
            score = "It's a tie!";
        } else if (player === 'rock') {
            score = "You Win! Rock beats scissors!";
        } else {
            score = "You lose! Scissors beats paper!";
        }
    }
    return score;
}

function game() {
    let player = 0;
    let computer = 0;
    let score;
    for (let i = 0; i < 5; i++){
        score = playRound(getComputerChoice(), playerSelection());
        console.log(score);
    }
}