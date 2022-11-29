let UserScore = 0;
let computerScore = 0;
const UserScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("compuer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function converToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserword = "user".fontsize(3).sub();
    const smallComoword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    UserScore++;
    UserScoreSpan.innerHTML = UserScore;
    computerScoreSpan.innerHTML = compuerScore;
    result_p.innerHTML = `${converToWord(userChoice)} beats ${converToWord(computerChoice)}${smallComoword}. You win`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserword = "user".fontsize(3).sub();
    const smallComoword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    UserScoreSpan.innerHTML = UserScore;
    computerScoreSpan.innerHTML = compuerScore;
    result_p.innerHTML = `${converToWord(userChoice)} loses to ${converToWord(computerChoice)}${smallComoword}. You win`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserword = "user".fontsize(3).sub();
    const smallComoword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${converToWord(userChoice)} equls ${converToWord(computerChoice)}${smallComoword}. You win`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', () => {
        game("r");
    })

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))
}

main();