'use strict'


//math.radom generates a random number between 0 and 1, i.e. 0.__ , so, in order to get a number between 1 and 20 , we have to multiply the number with 20 and the math.trunc() is used to eliminate the decimal places... we add 1 bcz the no. generated is always 0.__ and the the max no. by multiplying by 20 would be 19, that's why we add 1 to get the desired number



let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('no number');
    }

    else if (guess === secretNumber) {
        displayMessage('CORRECT NUMBER');

        //changing CSS styles after winning

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '120px';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore-count').textContent = highscore;
        }


    }


    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');

            score--;

            document.querySelector('.score-count').textContent = score;
        }
        else {
            displayMessage('You Lost The Game');

            document.querySelector('.score-count').textContent = 0;
        }
    }


});


document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.guess').value = '';

    displayMessage('start guessing...');

    score = 20;
    document.querySelector('.score-count').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '60px';

    document.querySelector('.number').textContent = '?';
});