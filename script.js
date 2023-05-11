'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const showMessage = msg => {
  return (document.querySelector('.message').textContent = msg);
};

document.querySelector('.check-btn').addEventListener('click', () => {
  const guess = Number(document.querySelector('.check-number').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'Please write a number';
    showMessage('Please write a number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Hurrey! Correct Number';
    showMessage('Hurrey! Correct Number');
    document.querySelector('.content').style.backgroundColor = 'green';
    document.querySelector('.show-number').style.width = '20rem';
    document.querySelector('.show-number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High !' : 'Too Low !';
      showMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game';
      showMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High !';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low !';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again-btn').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.message').textContent = 'Please write a number';
  showMessage('start guessing...');
  document.querySelector('.content').style.backgroundColor =
    'rgb(56, 140, 179)';
  document.querySelector('.show-number').style.width = '20rem';
  document.querySelector('.show-number').textContent = '?';
  document.querySelector('.check-number').value = '';
});
