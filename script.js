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

