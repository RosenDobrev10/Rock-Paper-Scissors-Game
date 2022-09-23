const colors = require("colors/safe");
console.log("You can choose between: rock, paper or scissors.");

function rockpaperScissors(playerTurn) {

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let computerTurn;

    let wins = 0;
    let losses = 0;

    while (wins <= 2 && losses <= 2) {
        if (playerTurn === "rock") {
            playerTurn = rock;
        } else if (playerTurn === "paper") {
            playerTurn = paper;
        } else if (playerTurn === "scissors") {
            playerTurn = scissors;
        } else {
            console.log(colors.black("Invalid input. Try again..."));
            return;
        }
        console.log(`You choose ${playerTurn}`);

        let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

        if (computerRandomNumber === 1) {
            computerTurn = rock;
        } else if (computerRandomNumber === 2) {
            computerTurn = paper;
        } else if (computerRandomNumber === 3) {
            computerTurn = scissors;
        }
        console.log(`The computer choses ${computerTurn}`);

        if (
            (playerTurn === "rock" && computerTurn === "rock") ||
            (playerTurn === "paper" && computerTurn === "paper") ||
            (playerTurn === "scissors" && computerTurn === "scissors")
        ) {
            console.log(colors.yellow("This game was a draw!"));
        } else if (
            (playerTurn === "rock" && computerTurn === "scissors") ||
            (playerTurn === "paper" && computerTurn === "rock") ||
            (playerTurn === "scissors" && computerTurn === "paper")
        ) {
            console.log(colors.green("You win!"));
            wins++;
        } else if (
            (playerTurn === "rock" && computerTurn === "paper") ||
            (playerTurn === "paper" && computerTurn === "scissors") ||
            (playerTurn === "scissors" && computerTurn === "rock")
        ) {
            console.log(colors.red("You lose!"));
            losses++;
        }
        console.log(`The temporary result is ${wins} : ${losses}\n`);
        rockpaperScissors(prompt("Enter your choice "));
    }

    console.log(`The final result is ${wins} : ${losses}`);
    wins > losses
        ? console.log(colors.green(`Congratulations! You have WON the game. 👏`))
        : console.log(colors.red(`I am sorry! You have LOST the game. 😥`));

    console.log(`If you want to play again, please enter 'yes', if you want to quit the game enter 'no'.`);
    let userChoice = prompt(`Do you want to play again?`);
    userChoice === "yes" ? rockpaperScissors(prompt("Enter your choice ")) : null;
}
rockpaperScissors(prompt("Enter your choice "));
