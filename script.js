function getComputerChoice() {
    let answer = ['rock', 'paper', 'scissors'];
    let a = Math.floor(Math.random()*3);
    return answer[a];
}