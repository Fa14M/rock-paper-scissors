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
    if (computer === 'rock'){
        if (player === 'rock') {
            prompt("It's a tie!");
        } else if (player === 'paper') {
            prompt("You Win! Paper beats rock!");
        } else {
            prompt("You lose! Rock beats scissors!")
        }
    } else if (computer === 'paper') {
        if (player === 'paper') {
            prompt("It's a tie!");
        } else if (player === 'scissors') {
            prompt("You Win! Scissors beats paper!");
        } else {
            prompt("You lose! Paper beats rock!")
        }
    } else {
        if (player === 'scissors') {
            prompt("It's a tie!");
        } else if (player === 'rock') {
            prompt("You Win! Rock beats scissors!");
        } else {
            prompt("You lose! Scissors beats paper!")
        }
    }
}