let startGame = confirm('Do you want to play a game?');
let playAgain;
let attempts = 3;
let total = 0; 
let prize = 100;
let game = true;
let guessNum;
let randomNum;
let randomRange = 8;
let message;

const TWO = 2;
const THREE = 3;
const FOUR = 4;
const EIGHT = 8;
const STO = 100;

if (startGame) {
    while (game) {
        for (let i = 0; i < attempts; i++) {
            switch (i) {
                case 0:
                    prize;
                    break;
                case 1:
                    prize /= TWO;
                    break;
                default:
                    prize /= FOUR;
            }

            randomNum = Math.floor(Math.random() * randomRange + 1);
            console.log(randomNum);
            guessNum = +prompt(`
        Choose a roulette pocket number from 0 to ${randomRange}
        Attempts left: ${attempts}
        Total prize: ${total}$
        Possible prize on current attempt: ${prize}$`);
            attempts--;

            if (guessNum === randomNum) {
                total += prize;
                message = confirm(`Congratulation, you won! Your prize is: ${total}$. Do you want to continue?`);
                if (message) {
                    randomRange += FOUR;
                    prize *= TWO;
                    attempts = THREE;
                    guessNum;
                    break;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${total}$`);
                    playAgain = confirm('Do you want to play again?');

                    if (playAgain) {
                        attempts = THREE;
                        total = 0;
                        prize = STO;
                        randomRange = EIGHT;
                        guessNum;
                        break;
                    } else {
                        game = false;
                        break;
                    }
                }
            }

            if (attempts === 0) {
                alert('You lose game')
                game = false;
                break
            }
        }
    }

} else {
    alert('You did not become a billionaire, but can.')
}
