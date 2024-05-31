// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt( 'Guess a number between ${minNum} - ${maxNum}');
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum){
        
    }

    running = false;
}