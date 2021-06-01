import "../scss/main.scss";

// Dice img
const diceImgs = document.querySelectorAll(".game__dice");
console.log(diceImgs[0].classList.add("game__dice--actice"));

// btns
const newGameBtn = document.getElementById("new-game");
const rollDiceBtn = document.getElementById("roll-dice");
const holdBtn = document.getElementById("hold");

// Player Scores
const players = [
  {
    totalScore: document.getElementById("player-1__score"),
    accScore: document.getElementById("player-1-accumulated"),
    bg: document.getElementById("player-1-bg"),
  },
  {
    totalScore: document.getElementById("player-2__score"),
    accScore: document.getElementById("player-2-accumulated"),
    bg: document.getElementById("player-2-bg"),
  },
];
// const player1 = {
//   totalScore: document.getElementById("player-1__score"),
//   accScore: document.getElementById("player-1-accumulated"),
// };

// const player2 = {
//   totalScore: document.getElementById("player-2__score"),
//   accScore: document.getElementById("player-2-accumulated"),
// };

const _activePlayer = new Map();

function getActivePlayer() {
  return _activePlayer.get("activePlayer");
}

function setActivePLayer(num) {
  _activePlayer.set("activePlayer", num);
}

setActivePLayer(0);

rollDiceBtn.onclick = rollDice;
holdBtn.onclick = switchPlayerSequence;
newGameBtn.onclick = newGame;

function newGame() {
  const activePlayer = getActivePlayer();
  function resetAllScores(player) {
    const { totalScore, accScore } = players[player];
    totalScore.textContent = 0;
    accScore.textContent = 0;
  }
  resetAllScores(0);
  resetAllScores(1);
  resetActiveBg();
  setActivePLayer(0);
}

function rollDice() {
  const activePlayer = getActivePlayer();
  const diceRoll = Math.ceil(Math.random() * 6);
  //   console.log(diceImg.src);
  //   diceImg.src = `./assets/imgs/dice-${diceRoll}.png`;
  toggleDiceImg(diceRoll);
  if (diceRoll !== 1) {
    updateAccScore(diceRoll);
  } else {
    resetAccScore(activePlayer);
    switchActivePlayer(activePlayer);
    switchActiveColors();
  }
}

function toggleDiceImg(roll) {
  diceImgs.forEach((img) => {
    if (img.classList.contains("game__dice--active")) {
      img.classList.remove("game__dice--active");
    }
  });
  diceImgs[roll - 1].classList.add("game__dice--active");
}

function updateAccScore(num) {
  const activePlayer = getActivePlayer();

  players[activePlayer].accScore.textContent =
    Number(players[activePlayer].accScore.textContent) + num;
}

function resetAccScore(player) {
  players[player].accScore.textContent = 0;
}

function switchPlayerSequence() {
  const activePlayer = getActivePlayer();
  addAccScore(activePlayer);
  switchActivePlayer(activePlayer);
  resetAccScore(activePlayer);
  switchActiveColors();
}

function addAccScore(player) {
  const { accScore, totalScore } = players[player];
  totalScore.textContent =
    Number(totalScore.textContent) + Number(accScore.textContent);
}

function switchActivePlayer(activePlayer) {
  activePlayer === 0 ? setActivePLayer(1) : setActivePLayer(0);
}

function switchActiveColors() {
  players[0].bg.classList.toggle("game--active");
  players[1].bg.classList.toggle("game--active");
}

function resetActiveBg() {
  players[0].bg.classList.add("game--active");
  players[1].bg.classList.remove("game--active");
}
