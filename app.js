const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;

choiceBtns.forEach((button) => button.addEventListener("click", () => {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    })
);

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum === 1) {
        computer = "ROCK";
    } else if (randNum === 2) {
        computer = "PAPER";
    } else if (randNum === 3) {
        computer = "SCISSORS";
    }
}

function checkWinner() {
    if (player === computer) {
        return "Draw!";
    } else if (computer === "ROCK") {
        return player === "PAPER" ? "You Win!" : "You Lose!";
    } else if (computer === "PAPER") {
        return player === "SCISSORS" ? "You Win!" : "You Lose!";
    } else if (computer == "SCISSORS") {
        return player == "ROCK" ? "You Win!" : "You Lose!";
    }
}
