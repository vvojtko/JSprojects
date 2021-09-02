'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'essasito';

let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // When guess is correct
  } else if (guess === number) {
    document.querySelector(
      '.message'
    ).textContent = `Good guess! The secret number is ${number}`;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
    // When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low!';
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game!';
    }

    // When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high!';
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
