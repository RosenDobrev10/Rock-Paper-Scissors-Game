function rockpaperScissors(playerTurn) {

    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'
    let computerTurn;


    if (playerTurn === 'r' || playerTurn === 'rock') {
        playerTurn = rock
    } else if (playerTurn === 'p' || playerTurn === 'paper') {
        playerTurn = paper
    } else if (playerTurn === 's' || playerTurn === 'scissors') {
        playerTurn = scissors
    } else {
        console.log('Invalid input. Try again...')
        return
    }
    console.log(`You choose ${playerTurn}`)

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1

    if (computerRandomNumber === 1) {
        computerTurn = rock
    } else if (computerRandomNumber === 2) {
        computerTurn = paper
    } else if (computerRandomNumber === 3) {
        computerTurn = scissors
    }
    console.log(`The computer choses ${computerTurn}`)

    if ((playerTurn === 'rock' && computerTurn === 'rock') ||
        (playerTurn === 'paper' && computerTurn === 'paper') ||
        (playerTurn === 'scissors' && computerTurn === 'scissors')) {
        console.log('this game was a draw!')
    } else if ((playerTurn === 'rock' && computerTurn === 'scissors') ||
        (playerTurn === 'paper' && computerTurn === 'rock') ||
        (playerTurn === 'scissors' && computerTurn === 'paper')) {
        console.log('You win!')
    } else if ((playerTurn === 'rock' && computerTurn === 'paper') ||
        (playerTurn === 'paper' && computerTurn === 'scissors') ||
        (playerTurn === 'scissors' && computerTurn === 'rock')) {
        console.log('You lose!')
    }

}
rockpaperScissors('w')