import { getActivePlayer, setActivePlayer } from "./activePlayer";
import {
  toggleDiceImg,
  updateTotalScore,
  resetAccScore,
  addAccScore,
  switchActiveColors,
  resetActiveBg,
  resetAll,
  renderWinner,
} from "./view";
// Player Scores
import { players } from "./players";

// btns
const newGameBtn = document.getElementById("new-game");
const rollDiceBtn = document.getElementById("roll-dice");
const holdBtn = document.getElementById("hold");

// Events
rollDiceBtn.onclick = rollDiceCB;
holdBtn.onclick = holdCB;
newGameBtn.onclick = newGameCB;

function removeEventListeners() {
  rollDiceBtn.onclick = null;
  holdBtn.onclick = null;
}

function addEventListeners() {
  holdBtn.onclick = holdCB;
  rollDiceBtn.onclick = rollDiceCB;
}

function newGameCB() {
  const activePlayer = getActivePlayer();
  addEventListeners();
  resetAll();
  resetActiveBg(activePlayer);
  setActivePlayer(0);
  toggleDiceImg(1);
}

function holdCB() {
  const activePlayer = getActivePlayer();
  addAccScore(activePlayer);
  if (hasWon(activePlayer)) {
    renderWinner(activePlayer);
    removeEventListeners();
  } else {
    switchActiveColors();
    switchActivePlayer(activePlayer);
  }
}

function rollDiceCB() {
  const activePlayer = getActivePlayer();
  const diceRoll = Math.ceil(Math.random() * 6);
  toggleDiceImg(diceRoll);
  if (diceRoll !== 1) {
    updateTotalScore(activePlayer, diceRoll);
  } else {
    resetAccScore(activePlayer);
    switchActivePlayer(activePlayer);
    switchActiveColors();
  }
}

function switchActivePlayer(activePlayer) {
  activePlayer === 0 ? setActivePlayer(1) : setActivePlayer(0);
}

function hasWon(player) {
  if (Number(players[player].totalScore.textContent) >= 100) {
    return true;
  }
  return false;
}
