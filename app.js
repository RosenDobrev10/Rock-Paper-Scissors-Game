const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const finalText = document.querySelector("#finalText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;


let wins = 0;
let losses = 0;

choiceBtns.forEach((button) => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    if (resultText.textContent === "You Win!") {
        wins++;
    } else if (resultText.textContent === "You Lose!") {
        losses++;
    }
    finalText.textContent = finalWinner();
})
);

function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computer = "ROCK";
    } else if (randomNumber === 2) {
        computer = "PAPER";
    } else if (randomNumber === 3) {
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

function finalWinner() {
    if (wins === 3) {
        choiceBtns.forEach(button => button.disabled = true)
        return `Final result is ${wins} - ${losses}. YOU HAVE WON THE GAME !!!`;
    } else if (losses === 3) {
        choiceBtns.forEach(button => button.disabled = true)
        return `Final result is ${wins} - ${losses}. YOU HAVE LOST THE GAME !!!`;
    } else {
        return `Temporary result is ${wins} - ${losses}.`;
    }
}
