'use strict';
//Selecting eleemnts

const score0El = document.getElementById('score--0');
const score0E2 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnhold = document.querySelector('.btn--hold');
const currentE0 = document.querySelector('#current--0');
const currentE1 = document.querySelector('#current--1');
const current = document.querySelectorAll('.current');
let scores = [0, 0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
const init = function () {
  score0El.textContent = 0;
  score0E2.textContent = 0;
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  currentE0.textContent = 0;
  currentE1.textContent = 0;
  diceE1.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
diceE1.classList.add('hidden');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
// const btnhold = document.querySelector('.btn--hold');
btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentscore += dice;

      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
    } else {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      currentscore = 0;

      activeplayer = activeplayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 50) {
      playing = false;
      diceE1.classList.add('hidden');

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document.querySelector('.player--winner').classList.add('name');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      current.forEach(arr => arr.classList.add('hidden'));
      // document.querySelector('.player --winner').classList.add('name');
    } else {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      currentscore = 0;

      activeplayer = activeplayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});
btnnew.addEventListener('click', init);
