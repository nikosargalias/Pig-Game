// Player Scores
import { players } from "./players";

// Dice img
const diceImgs = document.querySelectorAll(".game__dice");

function toggleDiceImg(roll) {
  diceImgs.forEach((img) => {
    if (img.classList.contains("game__dice--active")) {
      img.classList.remove("game__dice--active");
    }
  });
  diceImgs[roll - 1].classList.add("game__dice--active");
}

function updateTotalScore(player, accScore) {
  players[player].accScore.textContent =
    Number(players[player].accScore.textContent) + accScore;
}

function resetAccScore(player) {
  players[player].accScore.textContent = 0;
}

function addAccScore(player) {
  const { accScore, totalScore } = players[player];
  totalScore.textContent =
    Number(totalScore.textContent) + Number(accScore.textContent);
  accScore.textContent = 0;
}

function switchActiveColors() {
  players[0].bg.classList.toggle("game--active");
  players[1].bg.classList.toggle("game--active");
}

function resetActiveBg(player) {
  players[player].bg.classList.remove("game--winner");
  players[0].bg.classList.add("game--active");
  players[1].bg.classList.remove("game--active");
}

function resetAll() {
  players.forEach((pl, i) => {
    pl.totalScore.textContent = 0;
    pl.accScore.textContent = 0;
    pl.heading.textContent = `Player ${++i}`;
  });
}

function renderWinner(player) {
  players[player].heading.textContent = `You Win!`;
  players[player].bg.classList.add("game--winner");
}

export {
  toggleDiceImg,
  updateTotalScore,
  resetAccScore,
  addAccScore,
  switchActiveColors,
  resetActiveBg,
  resetAll,
  renderWinner,
};
